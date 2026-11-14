# Roles, Permissions and Administrative Access Matrix

**Phase:** 01 — Planning and Architecture  
**Status:** Draft for business/security approval  
**Principle:** API-side authorization is mandatory. UI visibility is not a security boundary.

## 1. Role definitions

- **Customer:** manages own profile, addresses, cart and orders.
- **Super Admin:** manages system settings and assigns roles; emergency access is audited.
- **Catalog Manager:** manages product content, categories, variants and media.
- **Inventory Manager:** receives stock, adjusts inventory and investigates stock movements.
- **Order Manager:** processes orders, fulfillment and permitted cancellations.
- **Delivery Staff:** sees only assigned deliveries and records delivery events.
- **Customer Support:** handles customer enquiries and limited order support.
- **Finance/Accounts:** reviews payment, invoice, refund and reconciliation data.

No shared staff login. Each person must have an individual identity. Privileged access should use MFA.

## 2. Permission matrix (draft)

Legend: R=read, C=create, U=update, D=delete/archive, A=approve, X=export. "Own" means only the authenticated customer's records. "Assigned" means only delivery jobs assigned to the staff member.

| Resource/action | Customer | Super Admin | Catalog | Inventory | Order | Delivery | Support | Finance |
|---|---|---|---|---|---|---|---|---|
| Public catalog | R | R | R | R | R | R | R | R |
| Own profile/address | R/U Own | R | — | — | — | — | limited R | — |
| Other customer PII | — | restricted R | — | — | limited R | assigned minimal R | limited R | billing-only R |
| Product content | — | R | R/C/U/D | R | R | — | R | R |
| Publish product | — | A | draft/update | — | — | — | — | tax-data review |
| Categories/attributes | — | R/U | R/C/U/D | R | R | — | — | — |
| SKU/barcode | — | R | C/U draft | R | R | minimal R | — | R |
| Inventory balance | availability R | R | R | R/C/U | R | assigned availability | limited R | R |
| Stock adjustments | — | A/R | — | C/U with reason | — | — | — | R |
| Stock movement history | — | R | — | R | R | assigned limited | — | R |
| Cart/checkout | own | support view only | — | — | support view | — | limited support | — |
| Order details | own | R | — | limited R | R/U | assigned minimal R/U event | limited R | R |
| Cancel order | request own | A | — | — | U per policy | — | request/escalate | refund review |
| Assign delivery | — | A | — | — | C/U | — | — | — |
| Delivery status/proof | own status R | R | — | — | R | U assigned | limited R | — |
| Payment records | own summary | R | — | — | limited R | — | limited masked R | R |
| Refund initiation | request | A | — | — | request | — | request | C/U per policy |
| Refund approval | — | A | — | — | — | — | — | A (separation of duties) |
| Invoice/tax config | own invoice R | A | — | — | — | — | — | R/C/U |
| User/role management | — | C/U/D | — | — | — | — | — | — |
| Audit logs | — | R | own actions R | own actions R | own actions R | own actions R | own actions R | relevant R |
| Store policies/settings | — | A/U | content draft | — | workflow config draft | — | help content draft | tax config draft |

This is a least-privilege proposal, not a final access grant. "Super Admin" should not routinely perform day-to-day finance actions; sensitive changes should require independent review.

## 3. Required authorization rules
1. Every API route declares a permission and resource ownership/assignment rule.
2. Customer order/address access is scoped to authenticated user ID.
3. Delivery staff access is scoped to currently assigned delivery ID; no customer browsing.
4. Catalog staff cannot alter stock quantity unless separately granted.
5. Inventory staff cannot approve their own high-risk adjustments above an approved threshold.
6. Refund initiator and approver should be separate where staffing permits.
7. Staff cannot grant themselves roles or elevate permissions.
8. Sensitive exports require a separate permission, reason, audit record and minimum necessary fields.
9. Mask phone/email/payment references in screens where full data is unnecessary.
10. All admin changes record actor, timestamp, target, before/after values where safe, and reason.
11. Deactivated staff sessions and tokens must be revoked.
12. Break-glass admin use must be time-limited, alerted and reviewed.

## 4. Suggested permission keys

- catalog.product.read / create / update / archive / publish
- catalog.category.manage
- catalog.attribute.manage
- catalog.media.manage
- inventory.balance.read
- inventory.adjustment.create / approve
- inventory.movement.read
- order.read / update / cancel
- delivery.assign / delivery.assigned.read / delivery.event.update
- payment.read / payment.reconcile
- refund.request / refund.approve
- invoice.read / invoice.issue / tax_config.manage
- customer.pii.read_limited / customer.export
- user.manage / role.manage
- audit.read
- settings.manage

Use policy-based checks for ownership, assignment and data masking in addition to role permission keys.

## 5. Audit events
At minimum record:
- Login success/failure, MFA events, password resets and role changes.
- Product creation, edits, publication, archive and price changes.
- SKU creation/import failures and barcode changes.
- Stock adjustments, transfers, reservations and releases.
- Order status transitions, cancellation and manual overrides.
- Delivery assignment, proof-of-delivery upload and status changes.
- Payment webhook events, reconciliation exceptions and refund actions.
- Customer data exports, policy changes and admin configuration changes.

Do not log passwords, OTPs, access tokens, card data or unnecessary personal data.

## 6. Approval questions
1. Which staff members need each role?
2. Who is authorized to publish products and approve price changes?
3. Who can adjust stock and what adjustment threshold needs second approval?
4. Who can cancel orders after packing/dispatch?
5. Who can initiate and approve refunds?
6. Can delivery staff collect COD? If yes, how is cash handed over and reconciled?
7. Who can view/export customer phone, email and addresses?
8. Who is the accountable Super Admin and backup approver?

## 7. Acceptance criteria
- Every role has a named business owner.
- Permission matrix is signed off.
- API test cases cover allowed and denied actions for every sensitive resource.
- Customer ownership and delivery assignment isolation tests pass.
- Privileged actions are audited and exports are restricted.
- MFA and session revocation are tested for staff/admin accounts.
