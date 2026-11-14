# Data Classification, Retention and Lifecycle Plan

**Phase:** 01 — Planning and Architecture  
**Status:** Draft for privacy/legal and operations review; retention periods are not approved.

## 1. Classification levels
- **Public:** approved product content, public policies and public support contacts.
- **Internal:** non-public operational documentation and aggregate operational metrics.
- **Confidential:** customer profile, contact details, addresses, order history, staff records and supplier commercial information.
- **Restricted:** authentication secrets, session tokens, payment secrets, security logs, privileged audit evidence and backup encryption keys.

## 2. Data inventory

| Data group | Examples | Classification | Main access |
|---|---|---|---|
| Public catalogue | Product title, description, approved images | Public | Public read; Catalog Manager write |
| Customer identity | Name, email, phone, login identifier | Confidential | Customer own; limited support |
| Customer address | Delivery/billing address | Confidential | Customer own; assigned order/delivery only |
| Cart | Product, variant, quantity | Confidential | Customer own; service processing |
| Order | Items, amount, status, address snapshot | Confidential | Customer own; permitted order/support/finance roles |
| Payment reference | Provider transaction ID, status, masked method | Confidential | Finance; limited order/support view |
| Invoice/tax record | Invoice number, seller and recipient tax fields | Confidential | Customer own invoice; Finance |
| Delivery proof | Delivery event, OTP result/signature/photo if approved | Confidential/Restricted depending on proof | Assigned delivery and authorized operations |
| Staff identity | Work email, role, status | Confidential | Super Admin and authorized HR/operations |
| Authentication material | Password hash, session/refresh token, MFA secret | Restricted | Auth service only |
| Audit/security events | Actor, action, IP/device metadata, event details | Restricted | Security/admin/authorized auditors |
| Supplier records | Supplier contacts, purchase terms | Confidential | Authorized procurement/inventory/finance |
| Product media originals | Supplier files, licensed photos | Internal/Confidential | Catalog team |

## 3. Lifecycle requirements
1. Collect only fields needed for a defined purpose.
2. Tell users what is collected, why, and which service providers process it.
3. Keep customer and staff access scoped to their role and relationship.
4. Record data source and consent/notice evidence where applicable.
5. Provide correction/update workflows for inaccurate account/address data.
6. Define retention and deletion schedules by data category and legal/accounting need.
7. Apply legal holds and statutory recordkeeping exceptions before deletion.
8. Delete or anonymize data in production systems and address backup expiry/restore procedures.
9. Restrict exports and record requester, purpose, fields and timestamp.
10. Review vendor processors, subprocessors, access and deletion commitments.

## 4. Retention schedule — decisions required

| Data | Proposed rule | Period | Approval |
|---|---|---|---|
| Abandoned carts | Delete/anonymize when no longer needed | TBD | Business/privacy |
| Customer profile | Retain while account active; handle closure requests subject to lawful retention | TBD | Legal/privacy |
| Addresses | Retain while needed for fulfilment/support; order snapshot separately | TBD | Legal/privacy |
| Order/invoice/tax records | Retain for applicable statutory/accounting period | Accountant/legal to specify | Pending |
| Payment event/reconciliation | Retain for finance, dispute and statutory needs | TBD | Finance/legal |
| Delivery proof | Minimum necessary period for dispute/operations | TBD | Operations/privacy |
| Support complaints | Retain for grievance handling and defensible recordkeeping | TBD | Legal/support |
| Security/audit logs | Retain according to security and legal needs | TBD | Security/legal |
| Staff access logs | Retain for security/offboarding investigations | TBD | Security/HR |
| Backups | Rotation and expiry schedule; deletion subject to backup lifecycle | TBD | Technical owner |

Do not insert arbitrary retention durations. Obtain legal, tax and operational requirements, then encode approved schedules.

## 5. Data subject request workflow
- Receive request through a published verified channel.
- Create request reference and timestamp.
- Verify identity proportionately; avoid collecting extra identity data.
- Classify request (access, correction, erasure, grievance or other applicable request).
- Identify systems/vendors containing the data.
- Apply legal retention exceptions and record rationale.
- Complete approved action and communicate outcome within applicable statutory timelines.
- Keep a minimal audit record of the request and action.

## 6. Incident and breach readiness
- Define incident intake and severity.
- Preserve relevant evidence securely.
- Restrict access and rotate compromised credentials.
- Assess affected data, people, processors and legal notification obligations.
- Assign a single incident lead and legal/privacy contact.
- Record decisions, timeline, containment, recovery and follow-up.
- Test contact lists and incident runbook before production.

## 7. Technical controls
- Encryption in transit; encryption at rest where supported and appropriate.
- Separate secrets from application data and source control.
- Mask PII in admin/support lists by default.
- Use synthetic data in development and test.
- Avoid logging full address, tokens, passwords, OTPs or payment secrets.
- Use scoped storage access for delivery proof and private documents.
- Export files should be time-limited, access-controlled and audited.
- Deletion jobs should be observable and safely retryable.

## 8. Approval checklist
- [ ] Privacy notice and collection purposes approved.
- [ ] Data inventory reviewed against actual forms and integrations.
- [ ] Legal retention schedule approved for each data group.
- [ ] Data subject request and grievance owners assigned.
- [ ] Processor/vendor list and contracts reviewed.
- [ ] Delivery proof type, access and retention approved.
- [ ] Incident/breach response and escalation tested.
- [ ] Backup expiry and deletion implications approved.
