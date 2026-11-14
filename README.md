# Golf Commerce Platform

A single-vendor golf e-commerce platform for the India market.

## Project status

- Active phase: **Phase 03 — Platform and Engineering Foundation (provisional scaffold; verification pending)**
- Completed phases: **0 / 9**
- Business model: Single vendor
- Fulfilment: Own delivery team (confirmed direction; operating rules pending approval)
- Stack baseline: Next.js + React storefront, NestJS REST API, PostgreSQL
- Redis: Not included until a measured requirement exists

> This repository is the project source of truth. A phase is complete only after its deliverables, acceptance criteria, verification evidence, and required business approval are recorded.

## Phase sequence

| # | Phase | Status |
|---|---|---|
| 01 | Project Planning and Architecture | In progress |
| 02 | UI/UX and Brand Design System | In progress |
| 03 | Platform and Engineering Foundation | In progress — source scaffold committed; runtime/CI verification pending |
| 04 | Product Catalog and Storefront | Not started |
| 05 | Customer Accounts and Commerce Core | Not started |
| 06 | Payments, Delivery, and Operations | Not started |
| 07 | P1 Business Modules | Requirements draft only |
| 08 | Quality, Security, and Production Launch | Not started |
| 09 | P2 Enhancements and Ongoing Optimization | Not started |

## Phase 01 documents

- [Phase 01 Plan](./PHASE-01-PLAN.md)
- [India and Golf Retail Research](./research/INDIA-ECOMMERCE-RESEARCH.md)

## Working rules

1. Do not mark a phase complete based on code existing alone.
2. Keep confirmed decisions separate from proposals and open questions.
3. Do not invent business policies, prices, SKUs, product data, legal details, or provider credentials.
4. Never commit secrets, live customer data, payment credentials, or production database credentials.
5. Verify builds, tests, migrations, security controls, and deployment claims with actual evidence.
6. Complete phases sequentially unless a documented dependency allows parallel groundwork.

## Local stack baseline

- Node.js 20.11 or newer and npm
- Docker Desktop with Docker Compose for local PostgreSQL
- Next.js + React
- NestJS REST API
- PostgreSQL

The stack is a planning baseline, not a claim that production infrastructure is already configured.


## Additional planning documents
- [Golf Catalog / SKU Matrix](./planning/CATALOG-ATTRIBUTES-SKU-MATRIX.md)
- [Roles and Permissions Matrix](./planning/ROLES-PERMISSIONS-MATRIX.md)
- [Workflow Map](./planning/WORKFLOW-MAP.md)
- [India Compliance Readiness](./research/INDIA-COMPLIANCE-READINESS.md)
- [Reference Website Audit](./research/REFERENCE-WEBSITE-AUDIT.md)
- [Task Meter](./TASK-METER.md)

- [Technical Architecture and Decision Records](./planning/TECHNICAL-ARCHITECTURE-ADRS.md)
- [Non-Functional Requirements](./planning/NON-FUNCTIONAL-REQUIREMENTS.md)

- [Page Inventory and Acceptance Criteria](./planning/PAGE-INVENTORY-ACCEPTANCE.md)
- [Brand and Launch Scope Decision Pack](./planning/BRAND-AND-LAUNCH-SCOPE-DECISIONS.md)
- [Hosting, Budget and Operations Options](./planning/HOSTING-BUDGET-OPERATIONS-OPTIONS.md)

- [Security Threat Model](./planning/SECURITY-THREAT-MODEL.md)
- [Data Classification and Retention Plan](./planning/DATA-CLASSIFICATION-RETENTION.md)
- [Conceptual Data Model](./planning/CONCEPTUAL-DATA-MODEL.md)


## Phase 02 — UI/UX and Brand Design System
- [Phase 02 Plan](./design-system/PHASE-02-PLAN.md)
- [Design Tokens](./design-system/tokens.css)
- [Component Library](./design-system/COMPONENT-LIBRARY.md)
- [Page Wireframes](./design-system/PAGE-WIREFRAMES.md)
- [Responsive and Accessibility Standards](./design-system/RESPONSIVE-ACCESSIBILITY.md)
- [Design Benchmark Research](./research/PHASE-02-DESIGN-BENCHMARKS.md)


## Phase 02 — UI/UX prototype
- [Interactive storefront and admin prototype](./design-system/prototypes/index.html)
- [Prototype styles](./design-system/prototypes/prototype.css)
- [Prototype interactions](./design-system/prototypes/prototype.js)
- [Prototype QA record and limitations](./design-system/PROTOTYPE-QA.md)
- [Phase 02 plan](./design-system/PHASE-02-PLAN.md)


## Phase 03 — Platform and Engineering Foundation
- [Phase 03 foundation plan](./PHASE-03-FOUNDATION-PLAN.md)
- [Local environment template](./.env.example)
- [Local PostgreSQL service](./docker-compose.yml)
- [Frontend workspace](./frontend/app/page.tsx)
- [NestJS API health controller](./backend/src/health/health.controller.ts)
- [Database migration policy](./db/migrations/README.md)


## Current active work
- **Phase 03 — Platform and Engineering Foundation:** source scaffold committed; CI build correction is being verified. Dependency audit and runtime checks remain open.
- **Phase 04 — Product Catalog and Storefront:** planning started; see [Phase 04 plan](./PHASE-04-CATALOG-AND-STOREFRONT-PLAN.md). Catalog implementation has not yet been marked complete.
- [Task meter and verification evidence](./TASK-METER.md)


## Phase 04 — Product Catalog and Storefront
- [Phase 04 plan and status](./PHASE-04-CATALOG-AND-STOREFRONT-PLAN.md)
- [Catalog API](./backend/src/catalog/)
- [Catalog database migrations](./db/migrations/)
- [Storefront home](./frontend/app/page.tsx)
- [Product listing/search](./frontend/app/shop/page.tsx)
- [Product detail](./frontend/app/product/[slug]/page.tsx)
- [Catalog import template](./catalog/import-template.csv)
- [Overall task meter](./TASK-METER.md)
