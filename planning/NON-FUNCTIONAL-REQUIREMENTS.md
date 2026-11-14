# Non-Functional Requirements and Release Acceptance Baseline

**Phase:** 01 — Planning and Architecture  
**Status:** Proposed targets for product/engineering approval. These are initial targets, not measured results.

## 1. Performance
- Product listing and product detail should target a good Core Web Vitals experience on representative mobile devices and Indian network conditions.
- Establish measured targets before launch: LCP, INP, CLS, API p95 latency, error rate and image payload size.
- Use responsive image formats/sizes and lazy loading for below-the-fold media.
- Paginate catalog results; avoid unbounded queries.
- Add database indexes based on measured query plans.
- Do not add Redis or other infrastructure without measured need.

**Proposed acceptance:** run Lighthouse and real-user monitoring on representative mobile/desktop pages; record baseline and agreed thresholds before production.

## 2. Availability and recovery
- Define target availability and support hours based on business budget and sales criticality.
- Automated database backups with encryption and access controls.
- Define Recovery Point Objective (RPO) and Recovery Time Objective (RTO) with business owner.
- Test restoration into an isolated environment before launch and periodically thereafter.
- Have a documented rollback and incident response runbook.

**Pending decisions:** uptime target, RPO, RTO, backup retention, on-call owner.

## 3. Security
- HTTPS/TLS in production.
- Secure password hashing; privileged staff MFA.
- Server-side RBAC plus resource ownership/assignment checks.
- Rate limiting for login, OTP, checkout, search and public APIs.
- Validate inputs; protect against injection, XSS, CSRF and insecure direct object references.
- Secure cookies, strict CORS, security headers and dependency scanning.
- Signed, idempotent webhooks; no card data stored by application.
- Secret scanning and no secrets in Git history.
- Audit sensitive admin and finance actions.

**Proposed acceptance:** automated dependency/secrets scans, authorization test suite, OWASP-focused security review and remediation of critical/high findings before launch.

## 4. Privacy and data lifecycle
- Collect only data required for the stated purpose.
- Separate customer, staff and operational data access.
- Define data retention and deletion schedules by data category.
- Mask PII in support and operational views where full detail is not required.
- Record customer-data exports and privileged access.
- Ensure backups and vendor processors are included in privacy/security review.

**Pending:** approved privacy notice, retention schedule, rights workflow and vendor processor inventory.

## 5. Accessibility and usability
- Keyboard-operable navigation, menus, filters, variant selectors and checkout.
- Visible focus state, semantic headings and labels.
- Text contrast and non-colour status indicators.
- Form errors described in text and associated with inputs.
- Product images have meaningful alt text; decorative images have empty alt.
- Responsive layouts for narrow mobile widths and zoom.
- Loading, empty, error, success and unavailable-stock states designed.

**Proposed acceptance:** WCAG 2.2 AA review of key customer journeys, with documented exceptions and remediation.

## 6. Data integrity
- Unique SKU, slug, invoice number and idempotency key constraints.
- Money stored as integer paise and currency code.
- UTC timestamps.
- Transactional stock reservation and order creation.
- Immutable order item, address and price/tax snapshots.
- Payment webhook replay and duplicate delivery tests.
- Stock movement ledger and auditable manual adjustments.
- Referential integrity and tested migrations.

## 7. Observability and support
- Structured application logs with correlation/request ID.
- Metrics for request latency, error rate, database health, queue/provider failures and payment reconciliation exceptions.
- Alerts for checkout failures, payment webhook backlog, inventory inconsistencies, delivery exceptions and service outages.
- Logs must exclude passwords, tokens, OTPs, raw payment data and unnecessary PII.
- Document severity, incident owner, escalation path and customer communication.

## 8. Browser and device coverage
- Agree supported current browser versions and minimum mobile viewport.
- Test current Chrome, Edge, Firefox and Safari where relevant to the target audience.
- Test touch input, keyboard-only navigation, slow network and image failure.
- Ensure checkout and account flows work on common Android devices.

## 9. Release gates
- [ ] Business acceptance tests pass.
- [ ] No open critical/high security findings.
- [ ] Backup restore and rollback procedure tested.
- [ ] Payment success/failure/duplicate webhook paths tested in sandbox.
- [ ] No oversell under concurrent checkout test.
- [ ] Accessibility and responsive review completed.
- [ ] Performance targets measured and accepted.
- [ ] Privacy/legal/tax disclosures approved.
- [ ] Monitoring, alerting and incident owners configured.
- [ ] Production smoke test and launch approval recorded.

## 10. Decisions to approve
1. Availability target and operating hours.
2. RPO, RTO and backup retention.
3. Performance thresholds and target device/network profile.
4. Supported browsers and minimum viewport.
5. Accessibility conformance target and exception process.
6. Security test depth and penetration-test requirement.
7. Support hours and incident escalation owner.
