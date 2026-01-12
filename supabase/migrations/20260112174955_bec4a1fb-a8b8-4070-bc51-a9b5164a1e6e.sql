-- Add is_super_admin flag to user_roles table
ALTER TABLE public.user_roles ADD COLUMN IF NOT EXISTS is_super_admin BOOLEAN DEFAULT false;

-- Set the existing super admin (if exists)
UPDATE public.user_roles 
SET is_super_admin = true 
WHERE user_id = (
  SELECT id FROM auth.users WHERE email = 'clenadant@gmail.com' LIMIT 1
);

-- Create a security definer function to check super admin status
CREATE OR REPLACE FUNCTION public.is_super_admin(_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND is_super_admin = true
  )
$$;

-- Grant execute permission
GRANT EXECUTE ON FUNCTION public.is_super_admin TO authenticated;

-- Drop old delete policy that uses hardcoded email
DROP POLICY IF EXISTS "Admins can delete roles except super admin" ON public.user_roles;

-- Create new delete policy using the is_super_admin flag
CREATE POLICY "Admins can delete roles except super admin"
ON public.user_roles
FOR DELETE
USING (
  public.is_admin(auth.uid()) 
  AND NOT (SELECT is_super_admin FROM public.user_roles WHERE user_id = public.user_roles.user_id)
);

-- Update the handle_new_user function to remove hardcoded email
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  invitation_record RECORD;
  user_role app_role;
  make_super_admin BOOLEAN := false;
BEGIN
  -- Check if user was invited
  SELECT * INTO invitation_record 
  FROM public.invitations 
  WHERE email = NEW.email 
  AND accepted_at IS NULL 
  AND expires_at > now()
  LIMIT 1;
  
  -- Create profile
  INSERT INTO public.profiles (user_id, email, first_name, last_name)
  VALUES (
    NEW.id, 
    NEW.email,
    NEW.raw_user_meta_data ->> 'first_name',
    NEW.raw_user_meta_data ->> 'last_name'
  );
  
  -- Assign role based on invitation
  IF invitation_record IS NOT NULL THEN
    user_role := invitation_record.role;
    -- Check if this is the first admin (make them super admin)
    IF invitation_record.role = 'administrator' THEN
      SELECT NOT EXISTS (SELECT 1 FROM public.user_roles WHERE is_super_admin = true) INTO make_super_admin;
    END IF;
    -- Mark invitation as accepted
    UPDATE public.invitations 
    SET accepted_at = now() 
    WHERE id = invitation_record.id;
  ELSE
    -- Default role for non-invited users
    user_role := 'content_creator';
  END IF;
  
  INSERT INTO public.user_roles (user_id, role, is_super_admin)
  VALUES (NEW.id, user_role, make_super_admin);
  
  RETURN NEW;
END;
$$;

-- Add policy to prevent updating is_super_admin flag (only super admins can promote others)
DROP POLICY IF EXISTS "Admins can update roles" ON public.user_roles;

CREATE POLICY "Admins can update roles"
ON public.user_roles
FOR UPDATE
USING (public.is_admin(auth.uid()))
WITH CHECK (
  -- Super admins can do anything
  public.is_super_admin(auth.uid())
  OR
  -- Regular admins cannot modify super admin status
  (
    public.is_admin(auth.uid()) 
    AND is_super_admin = (SELECT is_super_admin FROM public.user_roles WHERE user_id = public.user_roles.user_id)
  )
);