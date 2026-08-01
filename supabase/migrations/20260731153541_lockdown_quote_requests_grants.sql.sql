/*
# Lock down quote_requests grants for anon role

1. Purpose
   Defense-in-depth: the RLS policies already restrict anon to INSERT-only,
   but the default table grants give anon SELECT/UPDATE/DELETE privileges.
   Revoke those so the anon role can only INSERT new quote requests.
   Authenticated (site owner) retains full CRUD for dashboard management.

2. Security changes
   - REVOKE SELECT, UPDATE, DELETE on quote_requests FROM anon.
   - GRANT INSERT on quote_requests TO anon (explicit).
*/

REVOKE SELECT, UPDATE, DELETE ON quote_requests FROM anon;
REVOKE INSERT ON quote_requests FROM anon;
GRANT INSERT ON quote_requests TO anon;
