/*
# Create quote_requests table (single-tenant, no auth)

1. Purpose
   Stores inbound quote requests submitted from the public Contact form on the
   Three Brothers Linguistics corporate website. This is a lead-generation
   site with no sign-in, so the anon-key client must be able to insert rows.

2. New Tables
   - `quote_requests`
     - `id` (uuid, primary key)
     - `full_name` (text, not null) — submitter's full name
     - `company_name` (text) — optional company / organization
     - `email` (text, not null) — contact email
     - `phone` (text) — optional phone number
     - `country` (text) — submitter's country
     - `required_service` (text) — selected service (translation, transcription, etc.)
     - `language_pair` (text) — source / target languages
     - `project_details` (text) — free-text project description
     - `file_name` (text) — name of any uploaded file (stored as text metadata only)
     - `deadline` (text) — requested delivery date
     - `budget_range` (text) — selected budget tier
     - `status` (text, default 'new') — lead status for internal tracking
     - `created_at` (timestamptz, default now())

3. Security
   - Enable RLS on `quote_requests`.
   - Allow anon + authenticated INSERT only (public form submission). No SELECT,
     UPDATE, or DELETE for anon — leads are private to the site owner. The site
     owner can read/manage rows through the Supabase dashboard or a future admin
     tool with authenticated/service-role access.
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  company_name text,
  email text NOT NULL,
  phone text,
  country text,
  required_service text,
  language_pair text,
  project_details text,
  file_name text,
  deadline text,
  budget_range text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

-- Allow public (anon + authenticated) to INSERT new quote requests
DROP POLICY IF EXISTS "anon_insert_quote_requests" ON quote_requests;
CREATE POLICY "anon_insert_quote_requests"
ON quote_requests FOR INSERT
TO anon, authenticated WITH CHECK (true);

-- No SELECT/UPDATE/DELETE for anon: leads are private to the site owner.
-- Authenticated owners can manage via dashboard / future admin tooling.
DROP POLICY IF EXISTS "owner_select_quote_requests" ON quote_requests;
CREATE POLICY "owner_select_quote_requests"
ON quote_requests FOR SELECT
TO authenticated USING (true);

DROP POLICY IF EXISTS "owner_update_quote_requests" ON quote_requests;
CREATE POLICY "owner_update_quote_requests"
ON quote_requests FOR UPDATE
TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "owner_delete_quote_requests" ON quote_requests;
CREATE POLICY "owner_delete_quote_requests"
ON quote_requests FOR DELETE
TO authenticated USING (true);
