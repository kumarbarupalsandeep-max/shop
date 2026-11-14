# Phase 01 — Project Planning and Architecture

**Status:** In progress  
**Completion:** 0/9 phases complete. Phase 01 is not complete until business decisions and acceptance evidence are approved.

## 1. Project definition

Build a single-vendor golf e-commerce platform for customers in India. The initial confirmed assortment is golf balls, apparel, footwear, bags, and accessories. Fulfilment is intended to be handled by the business's own delivery team.

### Confirmed planning baseline
- Business model: single vendor; no third-party seller marketplace in the initial scope.
- Market: India.
- Product groups: golf balls, apparel, footwear, bags, accessories.
- Fulfilment direction: own delivery team.
- Storefront: Next.js + React.
- API: NestJS REST.
- Database: PostgreSQL.
- Redis: excluded until a concrete measured need exists.

### Not yet approved
- Brand name, logo, visual identity and domain.
- Whether pre-owned equipment is in initial launch scope.
- Exact category taxonomy, product attributes, SKU and variant conventions.
- Price, discount, tax, shipping and inventory rules.
- Customer, admin, warehouse/inventory and delivery role permissions.
- Payment gateway, supported payment methods and COD.
- Delivery zones, serviceability, fees, delivery estimates and proof-of-delivery process.
- GST registration details, HSN/tax mapping, invoice numbering and accounting workflow.
- Returns, exchanges, cancellations, refunds and warranty policies.
- Hosting, deployment region, backup/restore, monitoring and budget.
- Customer support channels, service hours and escalation process.

Do not implement assumptions above as fixed business rules until approved.

## 2. Goals and launch boundary

### P0 launch goals
1. Customers can browse categories, search products, inspect product details and see accurate availability.
2. Customers can create accounts, manage addresses, add products to cart and complete checkout.
3. The system creates reliable orders with immutable product/price/tax snapshots.
4. Authorized staff can manage products, variants, images, stock and orders.
5. Payment processing is secure, verified server-side and reconciled.
6. Own-team delivery users can see and update only their assigned deliveries.
7. Admin actions are permission-controlled and auditable.
8. The platform has operational monitoring, backups, security checks and tested recovery procedures.

### Explicit initial exclusions (unless separately approved)
- Multi-vendor marketplace, seller onboarding and seller settlements.
- Native mobile applications.
- International selling and multi-currency checkout.
- AI recommendations, complex loyalty, subscriptions and advanced personalization.
- Live third-party logistics integrations.
- Pre-owned/trade-in workflows until the business confirms condition grading, inspection, warranty and return rules.

## 3. User roles — draft for approval

| Role | Intended access | Approval status |
|---|---|---|
| Customer | Browse, account, addresses, cart, checkout, own orders | Draft |
| Super Admin | System configuration and all admin functions | Draft |
| Catalog Manager | Products, categories, attributes, media, publication | Draft |
| Inventory Manager | Stock, adjustments, stock history | Draft |
| Order Manager | Orders, fulfillment coordination, permitted status changes | Draft |
| Delivery Staff | Assigned deliveries only; restricted status/proof updates | Draft |
| Customer Support | Customer/order lookup and approved support actions | Draft |
| Finance/Accounts | Payment and invoice views, reconciliation and exports | Draft |

A permission matrix must define read/create/update/delete/export actions and field-level restrictions. Enforce authorization in the API, not only by hiding UI controls.

## 4. Core customer pages and workflows — draft

### Storefront
- Home
- Shop all / category listing
- Search results
- Brand listing (only if multi-brand assortment is approved)
- Product details
- Cart
- Checkout
- Order confirmation
- Sign in / sign up / password recovery
- Account profile and address book
- Order history and order details
- Contact / help
- About
- Shipping, returns, privacy, terms and cancellation policy pages

### Admin
- Admin sign-in
- Overview dashboard
- Product and category management
- Product variants / SKU management
- Product image/media management
- Inventory and stock adjustment
- Orders and fulfillment
- Customer lookup
- Delivery assignment and tracking
- Payment / refund / reconciliation views
- User, role and permission management
- Audit log
- Store settings and policy content

Page inventory is a planning draft; confirm before UI/UX sign-off.

## 5. Architecture baseline

### Logical components
- Next.js/React storefront for customer-facing web pages.
- NestJS REST API as the trusted business-logic boundary.
- PostgreSQL as the primary transactional data store.
- Object storage/CDN for product images and static assets (provider undecided).
- Payment gateway integration behind a server-side adapter (provider undecided).
- Email/SMS/WhatsApp notifications through approved providers (providers undecided).
- CI pipeline, application hosting, secrets management, logs, metrics and backups (providers undecided).

### Architecture principles
1. The server calculates price, tax, discount, delivery fee and order totals; never trust browser totals.
2. Store money as integer minor units (paise) with explicit currency; avoid floating-point arithmetic.
3. Store timestamps in UTC and render local time for the user.
4. Use database transactions for order creation and inventory reservation.
5. Make payment webhooks signature-verified, idempotent and replay-safe.
6. Keep order item snapshots so later product edits do not rewrite historical purchases.
7. Use least privilege and server-side authorization for every protected action.
8. Keep secrets out of source control; validate environment configuration at startup.
9. Record audit events for privileged changes and sensitive operational actions.
10. Design accessible, responsive UI states: loading, empty, error, validation and success.

## 6. Conceptual data model — initial

| Entity | Purpose | Important considerations |
|---|---|---|
| User | Customer and staff identities | Status, verified contact, auth data separated |
| Role / Permission | Authorization | Explicit permission matrix and role assignment |
| Address | Customer delivery/billing addresses | Snapshot address into each order |
| Category | Product navigation taxonomy | Parent-child hierarchy, active state |
| Brand | Optional brand taxonomy | Include only if assortment needs it |
| Product | Sellable product description | Slug, title, description, status, SEO |
| ProductVariant | Actual purchasable SKU | Attributes, SKU uniqueness, price |
| ProductImage | Product media | Sort order, alt text, storage key |
| Inventory | Available/reserved/on-hand stock | Per SKU and location if multiple locations |
| StockMovement | Stock audit trail | Reason, actor, quantity delta |
| Cart / CartItem | Shopping intent | Revalidate prices and stock at checkout |
| Order / OrderItem | Purchase record | Immutable snapshots and state transitions |
| Payment / PaymentEvent | Payment lifecycle | Provider IDs, idempotency, reconciliation |
| Delivery / DeliveryEvent | Own-team fulfilment | Assigned staff, event history, proof |
| Refund | Money returned | Approval, gateway reference, status |
| AuditLog | Administrative accountability | Actor, action, target, timestamp |

This is conceptual, not a final schema. SKU and variant design depends on actual golf products. Examples to investigate include apparel size/colour, footwear size, glove handedness/size, club handedness/shaft/flex/loft, and ball pack quantity; only relevant attributes should be approved and implemented.

## 7. India-specific compliance and operations checklist

Research baseline:
- Consumer Protection (E-Commerce) Rules, 2020 and applicable amendments: customer disclosures, grievance handling, fair practices and seller/business information need legal review.
- Government PIB announcement dated 10 September 2026 says the Consumer Protection (E-Commerce) (Amendment) Rules, 2026 take effect on 1 January 2027 and address grievance handling, search results, sponsored listings, price reductions, dark patterns and seller disclosures. Build configurable disclosure and audit capability; obtain legal review before launch.
- GST invoice fields and applicability must be validated with the business's GST/accounting advisor. Product HSN and tax rates must not be guessed.
- Digital Personal Data Protection Act, 2023 and Digital Personal Data Protection Rules, 2025: review commencement/transition timelines and obligations before launch. Design data minimization, clear notices, purpose limitation, consent where applicable, rights handling, retention and processor controls.
- Publish clear shipping, cancellation, return/refund, warranty and grievance contact policies approved by the business.
- Avoid deceptive UI patterns: no hidden fees, false urgency, preselected add-ons or misleading discounts.

This checklist is product-planning guidance, not legal or tax advice.

## 8. Security and privacy baseline
- TLS for all production traffic.
- Secure password hashing and account recovery; MFA for privileged staff is recommended.
- Server-side RBAC and ownership checks on every protected resource.
- Rate limiting and abuse protection for login, OTP, search and checkout endpoints.
- Input validation, output encoding, CSRF protections where applicable, secure cookies and strict CORS.
- Payment card data should be handled by the gateway's hosted/approved flow; do not store raw card data.
- Verify webhook signatures, deduplicate events and preserve event logs.
- Encrypt backups and restrict access to production data.
- Minimize customer data, define retention/deletion processes and vendor processor agreements.
- Security logging must not leak passwords, tokens, payment secrets or unnecessary personal data.

## 9. Delivery roadmap and dependencies

| Phase | Deliverable | Gate |
|---|---|---|
| 01 Planning & Architecture | Approved scope, rules, architecture and acceptance criteria | Business sign-off |
| 02 UI/UX & Brand | Approved design system, storefront/admin flows and responsive states | Design sign-off |
| 03 Engineering Foundation | Reproducible monorepo, CI, DB migrations, auth/RBAC, health and observability | Technical checks pass |
| 04 Catalog & Storefront | Admin catalog workflows and customer discovery experience | Catalog UAT |
| 05 Accounts & Commerce | Accounts, cart, checkout, orders, stock safety | End-to-end commerce tests |
| 06 Payments & Delivery | Gateway, webhooks, delivery operations and reconciliation | Payment/delivery UAT |
| 07 P1 Modules | Approved returns, promotions, reviews, notifications, analytics, CMS | Per-module approval |
| 08 Quality & Launch | Security, performance, recovery, UAT, production runbooks | Launch approval |
| 09 P2 Optimization | Measured post-launch enhancements | Business case and release gate |

## 10. Phase 01 open-decision register

| ID | Decision required | Why it matters | Owner / status |
|---|---|---|---|
| D01 | Business/brand name, logo, domain | Legal identity, UI and email | Client approval pending |
| D02 | New-only or include pre-owned | Condition grading, warranty, returns, inventory | Pending |
| D03 | Category taxonomy and product attributes | Catalog schema and filters | Pending |
| D04 | SKU and variant convention | Stock, price and fulfillment | Pending |
| D05 | Admin roles and permission matrix | Security and workflows | Pending |
| D06 | Launch delivery areas and operating rules | Serviceability, charges, ETA | Pending |
| D07 | Payment gateway, methods and COD | Checkout and reconciliation | Pending |
| D08 | GSTIN, HSN, tax and invoice rules | Correct billing and accounting | Advisor/client confirmation |
| D09 | Returns, exchanges, cancellations, refunds, warranty | Customer policies and order states | Pending |
| D10 | Hosting, storage, CDN, email/SMS providers | Architecture and operating cost | Pending |
| D11 | Budget, timeline and launch target | Delivery planning | Pending |
| D12 | Support channels, hours and escalation | Customer operations | Pending |
| D13 | Privacy notice, retention and data-rights process | Data protection | Legal review pending |

## 11. Phase 01 acceptance criteria

Phase 01 can be marked complete only when:
- [ ] Single-vendor scope and explicit exclusions are approved.
- [ ] Initial assortment and pre-owned decision are approved.
- [ ] Product category, attributes, SKU and variant rules are approved.
- [ ] Customer/admin/staff roles and detailed permission matrix are approved.
- [ ] Storefront and admin page/workflow inventory is approved.
- [ ] Architecture, stack, integrations and hosting assumptions are approved.
- [ ] Conceptual data model and data lifecycle are reviewed.
- [ ] Delivery, payment, GST/invoice, returns/refunds and support policies are resolved or explicitly deferred with owners.
- [ ] Security/privacy and India compliance review is assigned and documented.
- [ ] Measurable acceptance criteria and phase dependencies are approved.
- [ ] Business owner records approval; unresolved items are not silently treated as decisions.

## 12. Immediate next actions
1. Confirm business decisions D01–D13, starting with launch scope and new/pre-owned.
2. Validate golf-specific category and variant matrix against actual planned inventory.
3. Produce a detailed permission matrix and page/workflow map.
4. Review architecture and deployment choices against budget and expected launch traffic.
5. Record approval or explicitly defer each open decision.
6. Start Phase 02 only after Phase 01 exit criteria are met.

## Sources
- Government of India, Consumer Protection (E-Commerce) Rules, 2020: https://consumeraffairs.gov.in/pages/consumer-protection-acts
- PIB, Consumer Protection (E-Commerce) Amendment Rules, 2026 announcement (10 Sep 2026): https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2308759
- CBIC GST invoice rules: https://cbic-gst.gov.in/gst-invoice-rules.html
- CBIC GST sectoral FAQs: https://cbic-gst.gov.in/hindi/sectoral-faq.html
- MeitY, Digital Personal Data Protection Act, 2023: https://www.meity.gov.in/writereaddata/files/Digital%20Personal%20Data%20Protection%20Act%202023.pdf
- MeitY, Digital Personal Data Protection Rules, 2025: https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa


## 13. Additional Phase 01 deliverables
- [Golf Catalog, Attributes, Variants and SKU Standard](./planning/CATALOG-ATTRIBUTES-SKU-MATRIX.md) — draft, inventory-owner approval pending.
- [Roles and Permissions Matrix](./planning/ROLES-PERMISSIONS-MATRIX.md) — draft, business/security approval pending.
- [Storefront, Admin, Order and Delivery Workflow Map](./planning/WORKFLOW-MAP.md) — draft, operational policy approval pending.
- [India Compliance and Operational Readiness](./research/INDIA-COMPLIANCE-READINESS.md) — official Gazette/CBIC/MeitY research baseline; professional review pending.

These documents advance planning but do not close Phase 01 approval gates. Product-specific values, policies, tax codes and legal applicability must be confirmed by the appropriate business owner/advisor.
