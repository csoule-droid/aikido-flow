-- Add explicit block for anonymous access on profiles table
-- This ensures unauthenticated users cannot access profiles data
CREATE POLICY "Block anonymous access to profiles"
  ON public.profiles
  AS RESTRICTIVE
  FOR SELECT
  TO public
  USING (auth.uid() IS NOT NULL);

-- Add explicit block for anonymous access on invitations table  
-- This ensures unauthenticated users cannot access invitation tokens
CREATE POLICY "Block anonymous access to invitations"
  ON public.invitations
  AS RESTRICTIVE
  FOR SELECT
  TO public
  USING (auth.uid() IS NOT NULL);