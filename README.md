# Golf Commerce Platform

A single-vendor golf e-commerce platform for the India market.

## Project status

- Active phase: **Phase 01 — Project Planning and Architecture**
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
| 02 | UI/UX and Brand Design System | Not started |
| 03 | Platform and Engineering Foundation | Not started |
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
