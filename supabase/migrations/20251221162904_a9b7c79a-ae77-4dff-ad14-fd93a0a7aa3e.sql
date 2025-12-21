-- Create table for technical sheets (fiches techniques)
CREATE TABLE public.technical_sheets (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL DEFAULT '',
  category TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.technical_sheets ENABLE ROW LEVEL SECURITY;

-- Policies for technical sheets
CREATE POLICY "Admins can do everything on technical_sheets"
ON public.technical_sheets
FOR ALL
USING (is_admin(auth.uid()));

CREATE POLICY "Editors can view and edit technical_sheets"
ON public.technical_sheets
FOR ALL
USING (has_role(auth.uid(), 'editor'));

CREATE POLICY "Content creators can view technical_sheets"
ON public.technical_sheets
FOR SELECT
USING (has_role(auth.uid(), 'content_creator'));

CREATE POLICY "Public can view published technical_sheets"
ON public.technical_sheets
FOR SELECT
USING (published = true);

-- Trigger for updated_at
CREATE TRIGGER update_technical_sheets_updated_at
  BEFORE UPDATE ON public.technical_sheets
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();