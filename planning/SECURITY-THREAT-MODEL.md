# Security Threat Model — Golf Commerce Platform

**Phase:** 01 — Planning and Architecture  
**Status:** Initial threat-model draft; engineering/security review required.  
**Scope:** Single-vendor storefront, staff/admin, REST API, PostgreSQL, object storage, payment provider and own-team delivery.

## 1. Assets to protect
- Customer identity, contact details, addresses and order history.
- Staff identities, privileged sessions and role assignments.
- Product catalogue, price records, stock balances and stock movements.
- Orders, invoices, payment references, refunds and reconciliation records.
- Delivery assignments, customer address and proof-of-delivery records.
- API credentials, signing secrets, database credentials and cloud secrets.
- Audit logs, backups, source code and deployment pipeline.

## 2. Trust boundaries
1. Public browser to storefront.
2. Storefront/admin browser to API.
3. API to PostgreSQL.
4. API to object storage/CDN.
5. API to payment gateway and incoming webhook endpoint.
6. Admin/staff identity boundary.
7. Delivery staff mobile/browser boundary.
8. CI/CD pipeline to staging and production.

All client-supplied values are untrusted. Server must recalculate price, tax, delivery eligibility and inventory; client cannot authoritatively set order/payment status.

## 3. Threat scenarios and mitigations

| Threat | Example impact | Required controls | Verification evidence |
|---|---|---|---|
| Broken object-level authorization | Customer reads another order/address | Owner checks in every API query; opaque IDs are not a control | Cross-account negative API tests |
| Staff privilege escalation | Catalog user grants self finance rights | Separate role-management permission; no self-elevation; audit | Role-change authorization tests |
| Account takeover | Attacker accesses customer/staff account | Secure password hashing, rate limits, recovery controls, staff MFA, session revocation | Authentication abuse tests |
| Price tampering | Browser submits lower price | Server-side price calculation and immutable order price snapshot | Tampered checkout request test |
| Overselling | Concurrent buyers purchase last unit | Transactional reservation, row locking/atomic update, idempotency | Concurrent checkout test |
| Forged payment callback | Fake paid order | Verify signature, provider event identity, amount/currency/order match, idempotency | Invalid/replayed webhook tests |
| Duplicate webhook | Double fulfilment or duplicate refund | Store provider event ID; idempotent state transition | Replay same event test |
| Malicious product upload | Stored XSS or malware in media | MIME/content validation, size limits, safe image processing, isolated storage | Upload security tests |
| Sensitive data exposure | PII leaked in logs/export | Data minimization, masking, restricted export, log scrubbing | Log and export review |
| CSRF/session abuse | Unauthorized staff action | Secure cookies, SameSite, CSRF controls as applicable, origin checks | Browser security tests |
| Injection/XSS | Data theft or unauthorized action | Parameterized DB access, output encoding, input validation, CSP | SAST/DAST and manual tests |
| Secrets leak | Gateway/database compromise | Secret manager, CI secret scan, rotation, least privilege | Secret scanning and rotation drill |
| Supply-chain compromise | Vulnerable dependency enters production | Lockfiles, dependency scanning, review updates, build provenance | CI dependency report |
| Backup compromise | Customer/order data exposure | Encryption, access separation, retention, restore testing | Backup access review and restore evidence |
| Delivery data misuse | Staff sees unrelated customer address | Assignment-scoped access and minimum data | Unassigned-job negative test |
| Admin action repudiation | Unexplained stock/refund change | Append-only audit trail with actor, target, reason, timestamp | Audit completeness test |
| Denial of service | Checkout/search unavailable | Rate limits, bounded queries, CDN/WAF options, capacity alerts | Load and rate-limit tests |

## 4. Security design requirements
- Deny by default for staff permissions.
- Enforce both role permission and resource ownership/assignment.
- Use short-lived access sessions and safe refresh/session revocation design.
- MFA required for privileged staff roles; recovery path must not bypass it trivially.
- Rate-limit login, recovery, OTP, search, checkout and webhook abuse surfaces.
- Validate request schema and reject unknown privileged fields.
- Protect state-changing browser requests against CSRF where cookie auth is used.
- Restrict CORS to approved origins; configure security headers and CSP.
- Use TLS; encrypt backups and sensitive stored data where appropriate.
- Separate production and non-production credentials and data.
- No secrets, customer data, raw card data, passwords or OTPs in logs.
- Webhooks must verify signature, timestamp/replay protections where supported, event ID, amount, currency and referenced order.
- Apply database least privilege and migration account separation from runtime account where feasible.
- Keep admin audit records protected from ordinary admin modification/deletion.

## 5. Abuse and fraud controls to design
- Checkout velocity limits and duplicate-order protection.
- Coupon/promotion abuse controls only if promotions enter scope.
- Inventory reservation expiry and suspicious repeated reservation monitoring.
- Refund thresholds and dual approval for high-value/manual refunds.
- COD order confirmation and cash handover reconciliation if COD is enabled.
- Delivery proof access and retention restrictions.
- Manual price/stock override requires reason and audit event.

## 6. Security test plan
- Authentication and recovery abuse cases.
- Horizontal and vertical authorization tests.
- CSRF, XSS, injection and file upload tests.
- Price, stock and shipping fee tampering tests.
- Concurrent checkout and idempotency tests.
- Forged, duplicate, delayed and out-of-order webhook tests.
- Staff role changes and session revocation tests.
- PII masking, export and log leakage checks.
- Dependency, secret and container/image scans.
- Backup restore and incident-response exercise.

## 7. Residual risks / owner decisions
- Identity provider/auth implementation not selected.
- Payment gateway webhook capabilities depend on selected provider.
- Hosting network/WAF and secrets services not selected.
- Staff device management and offboarding process not defined.
- COD, delivery proof and refund thresholds require operational policy.
- Security test/penetration-test budget and owner not assigned.

## 8. Acceptance gate
Do not claim production security readiness until the chosen architecture is implemented, threat scenarios are tested, critical/high findings are resolved, and the security owner signs the evidence.
