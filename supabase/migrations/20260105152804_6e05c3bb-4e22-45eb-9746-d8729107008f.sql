-- Create a SECURITY DEFINER function to securely validate invitation tokens
CREATE OR REPLACE FUNCTION public.get_invitation_by_token(_token TEXT)
RETURNS TABLE (
  id UUID,
  email TEXT,
  role app_role,
  expires_at TIMESTAMP WITH TIME ZONE
)
SECURITY DEFINER
SET search_path = public
LANGUAGE sql
STABLE
AS $$
  SELECT id, email, role, expires_at
  FROM public.invitations
  WHERE token = _token
    AND accepted_at IS NULL
    AND expires_at > now()
  LIMIT 1;
$$;

-- Grant execute permissions to anon and authenticated roles
GRANT EXECUTE ON FUNCTION public.get_invitation_by_token TO anon, authenticated;

-- Drop the permissive RLS policy that exposes all invitations
DROP POLICY IF EXISTS "Anyone can view invitation by token for accepting" ON public.invitations;

-- Create a restrictive policy that blocks direct table access for anonymous users
CREATE POLICY "Admins can view invitations"
ON public.invitations
FOR SELECT
USING (is_admin(auth.uid()));