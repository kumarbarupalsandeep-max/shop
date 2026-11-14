# Technical Architecture and Decision Records

**Phase:** 01 — Planning and Architecture  
**Status:** Proposed baseline; owner/engineering approval pending.

## 1. System context

Proposed logical flow:
- Customer Browser -> Next.js Storefront -> NestJS REST API.
- Staff Browser -> Admin UI -> NestJS REST API.
- NestJS API -> PostgreSQL, object storage, payment gateway adapter, notification adapter, observability and own-delivery workflow.

The API is the trusted boundary for authorization, price calculation, stock, orders, payment state and delivery state. The browser must not be trusted for final totals or privileged actions.

## 2. Proposed deployment topology

- Storefront and admin web application: deployable Next.js application.
- API: separately deployable NestJS service.
- PostgreSQL: managed database preferred for production, subject to budget and provider review.
- Product media: private write path with public/CDN delivery for approved published assets.
- Secrets: managed secret store or deployment environment secrets; never source control.
- CI: lint, type-check, unit tests, integration tests, build and migration validation.
- Observability: structured logs, error tracking, metrics, uptime checks and alerting.
- Backups: automated encrypted backups, retention policy and tested restore procedure.

Provider, region, network layout, WAF, CDN, object storage and deployment strategy remain open decisions.

## 3. Decision records

### ADR-001: Single-vendor initial model
**Decision:** Plan for one legal seller/business operating the catalog and fulfillment.  
**Reason:** This is the confirmed project brief.  
**Consequence:** No seller onboarding, marketplace commissions or seller settlements in P0.  
**Status:** Confirmed project direction; legal entity details pending.

### ADR-002: Storefront framework
**Proposal:** Next.js + React.  
**Reason:** Supports server rendering, route-level rendering, responsive storefront and shared component architecture.  
**Trade-offs:** Requires framework/version discipline and deployment compatibility checks.  
**Status:** Planning baseline; engineering approval pending.

### ADR-003: API framework
**Proposal:** NestJS REST API.  
**Reason:** Modular TypeScript service with explicit controllers, validation, guards and testable modules.  
**Trade-offs:** Must avoid unnecessary abstraction and keep API contracts stable.  
**Status:** Planning baseline; engineering approval pending.

### ADR-004: Primary database
**Proposal:** PostgreSQL.  
**Reason:** Relational consistency and transactions fit orders, variants, stock, payments and audit history.  
**Trade-offs:** Schema migrations, indexing, backups and connection management must be operated properly.  
**Status:** Planning baseline; engineering approval pending.

### ADR-005: Redis
**Decision:** Do not include Redis at initial foundation unless a measured use case requires it.  
**Reason:** Avoid operational complexity before evidence of need.  
**Status:** Proposed.

### ADR-006: Money representation
**Proposal:** Store INR amounts as integer paise with currency code and explicit rounding policy.  
**Reason:** Avoid floating-point errors in prices, tax and payment reconciliation.  
**Status:** Engineering/finance review pending.

### ADR-007: Order and inventory integrity
**Proposal:** Use database transactions and explicit inventory reservation/stock movement records.  
**Reason:** Prevent overselling and maintain an auditable stock ledger.  
**Status:** Engineering review pending.

### ADR-008: Payment integration
**Proposal:** Provider adapter; use provider-hosted/approved payment collection; verify signed webhooks and process idempotently.  
**Reason:** Minimize PCI exposure and avoid trusting client redirects.  
**Status:** Gateway selection pending.

### ADR-009: Media storage
**Proposal:** Object storage with image validation and CDN delivery.  
**Reason:** Keep large media out of the relational database and support responsive product images.  
**Status:** Provider and budget pending.

## 4. API boundary and module proposal

- AuthModule: identity, session, password recovery, staff MFA.
- UsersModule: customer/staff profile and address access.
- CatalogModule: categories, brands, products, attributes, variants, media.
- InventoryModule: stock balances, reservations and movements.
- CartModule: cart and server-side price/stock revalidation.
- OrdersModule: order creation, snapshots and state machine.
- PaymentsModule: provider adapter, webhooks, refunds, reconciliation.
- DeliveryModule: assignment, delivery events and proof.
- SupportModule: grievance/complaint workflow.
- AdminModule: staff management and policy-controlled settings.
- AuditModule: immutable security/business audit events.
- NotificationsModule: email/SMS/WhatsApp adapter after provider selection.

Each module owns its business rules and persistence boundary; cross-module state changes use explicit application services and transactions/events.

## 5. API conventions
- Prefix: /api/v1 for externally consumed versioned endpoints.
- JSON request/response with schema validation.
- Consistent error response: machine code, safe message, request/correlation ID, field errors where appropriate.
- Pagination: bounded page/limit or cursor; enforce maximum page size.
- Filtering and sorting use allowlisted fields only.
- Authentication and authorization documented per endpoint.
- Idempotency keys required for checkout/order/payment-sensitive operations.
- Rate limits on authentication, OTP, search and checkout.
- OpenAPI specification generated from source and checked in CI.
- Avoid exposing internal database IDs where opaque public identifiers are more appropriate.

## 6. Initial API resource outline (not final contract)

| Resource | Candidate endpoints | Access |
|---|---|---|
| Health | GET /health, GET /ready | Public/internal split |
| Catalog | GET /api/v1/categories, GET /api/v1/products, GET /api/v1/products/:slug | Public |
| Auth | POST /api/v1/auth/register, /login, /logout, /forgot-password | Public with rate limits |
| Account | GET/PATCH /api/v1/me, addresses CRUD | Authenticated owner |
| Cart | GET/POST/PATCH/DELETE /api/v1/cart/items | Authenticated/guest policy TBD |
| Checkout | POST /api/v1/checkout/quote, POST /api/v1/orders | Authenticated or approved guest flow |
| Orders | GET /api/v1/me/orders, GET /api/v1/me/orders/:id | Owner |
| Admin catalog | POST/PATCH /api/v1/admin/products, publish/archive | Catalog permissions |
| Inventory | GET /api/v1/admin/inventory, POST /adjustments | Inventory permissions |
| Payments | POST /api/v1/payments/webhook/:provider | Signature verified |
| Delivery | GET assigned jobs, POST delivery events | Assigned delivery staff |
| Support | POST /api/v1/support/complaints, admin triage | Customer/staff permissions |

Endpoint names are illustrative; finalize OpenAPI contract in Phase 03 after approved workflows.

## 7. Environment separation
- Local: synthetic test data, local database, sandbox integrations.
- Test/staging: isolated accounts, masked or synthetic data, gateway sandbox.
- Production: least privilege, restricted network access, managed secrets, backups and monitored deployments.
- Never copy production personal data into developer laptops or test fixtures without approved masking and controls.

## 8. Architecture exit checks
- Engineering owner approves framework versions and repository layout.
- Hosting/provider and deployment topology selected with budget.
- Database migration and backup/restore strategy reviewed.
- API versioning, auth, error and idempotency standards approved.
- Payment, notification and storage provider choices recorded or explicitly deferred.
- Architecture threat model and production observability plan reviewed.
