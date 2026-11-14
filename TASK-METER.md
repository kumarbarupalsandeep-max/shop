# Project Task Meter

**Repository:** https://github.com/kumarbarupalsandeep-max/shop  
**Last updated:** 14 November 2026  
**Overall phase completion:** 0 / 9 phases formally complete

A phase counts as complete only after deliverables, verification evidence and required approvals are recorded. Research/documentation progress is not the same as a completed production feature.

## Phase status

| Phase | Name | Status | Completion gate |
|---|---|---|---|
| 01 | Planning and Architecture | In progress | Business decisions and plan approval |
| 02 | UI/UX and Brand Design | Blocked by Phase 01 gate | Approved scope and brand |
| 03 | Engineering Foundation | Not started | Architecture and security decisions |
| 04 | Catalog and Storefront | Not started | Approved taxonomy and SKU rules |
| 05 | Accounts and Commerce Core | Not started | Approved checkout/order rules |
| 06 | Payments, Delivery and Operations | Not started | Gateway, tax and delivery policies |
| 07 | P1 Business Modules | Draft only | Module-level approval |
| 08 | Quality, Security and Launch | Not started | Production readiness evidence |
| 09 | P2 Enhancements | Not started | Post-launch goals and approval |

## Phase 01 work items

| ID | Work item | Status |
|---|---|---|
| P01-01 | Confirm business model, market and initial product groups | Done — from project brief |
| P01-02 | Establish technical stack baseline | Done — planning baseline |
| P01-03 | Create repository overview and phase roadmap | Done |
| P01-04 | Draft architecture, conceptual data model and security baseline | Done — draft |
| P01-05 | Research Indian e-commerce, GST and privacy considerations | Done — research baseline; legal review pending |
| P01-06 | Review four golf retail reference websites | Done — public-page snapshot |
| P01-07 | Approve brand, logo and domain | Pending owner input |
| P01-08 | Approve new-only vs new + pre-owned scope | Pending owner input |
| P01-09 | Approve categories, attributes, SKU and variant rules | Pending owner input |
| P01-10 | Approve roles and detailed permission matrix | Pending owner input |
| P01-11 | Approve delivery, payments, GST/invoice and return policies | Pending owner/advisor input |
| P01-12 | Approve hosting, budget, operations and measurable acceptance criteria | Pending owner input |

**Phase 01 document/research work:** 6 of 12 items have draft or research deliverables.  
**Phase 01 formal completion:** Not complete. Approval-dependent items remain open.

## Current blockers
1. Business owner decisions: brand, launch assortment and new/pre-owned.
2. SKU/variant design requires actual sellable product list.
3. Delivery zones and service model require operating details.
4. Gateway, COD and GST invoice design require provider/accounting decisions.
5. Return, cancellation, refund and warranty policies require approval.
6. Hosting and budget are unknown.

## Execution rules
- Continue independent research and preparatory work while decisions are pending.
- Do not invent approved policies or mark draft decisions as final.
- Do not start dependent implementation that would hard-code unresolved business rules.
- Update this meter whenever a verifiable deliverable is added.
- Show completed, pending, blocked and reason separately.


## Latest research update
- [x] Second-pass Golfoy review: customer program, gift cards, trade-in, custom products, advanced bag filters, specialist golf equipment.
- [x] Added verified Golfoy source URLs and separated competitor claims from independent facts.
- [x] Updated the reference-site audit with implications for scope and P1/later modules.


## 14 November 2026 — additional Phase 01 work completed
- [x] Draft golf category tree and category-specific attribute/variant matrix.
- [x] Draft SKU convention, uniqueness rules and product publication checklist.
- [x] Draft staff roles, permission matrix, API authorization rules and audit-event list.
- [x] Draft customer, inventory, order, payment, delivery and grievance workflows.
- [x] Rechecked the official Gazette notification for Consumer Protection (E-Commerce) Amendment Rules, 2026 and added compliance-readiness requirements.
- [x] Added a compliance-readiness document covering consumer disclosures, grievance handling, search/sponsored placement, price reductions, invoices, imported goods, GST and DPDP staging.

### Revised Phase 01 work status
- Planning/research artefacts created: **9 of 12 workstreams have draft/research artefacts** (P01-01 through P01-06, plus draft deliverables for P01-09, P01-10 and research inputs for P01-11). P01-07, P01-08 and P01-12 still need owner decisions or sign-off; policy approvals in P01-11 remain pending.
- Formal Phase 01 approval: **Pending**. Draft documents are not approvals.

### Remaining approval / evidence gates
1. Brand identity and domain.
2. Confirm launch assortment: new-only vs new + pre-owned; confirm clubs/package sets.
3. Validate category tree and SKU/variant rules against actual first-stock list.
4. Name staff/role owners and approve permission thresholds and segregation of duties.
5. Confirm delivery area, service hours, delivery fees/ETA, proof-of-delivery and COD cash controls.
6. Select payment provider/methods and confirm webhook/refund/reconciliation operations.
7. Accountant approval for GST registration, HSN, tax configuration, invoice and e-invoice applicability.
8. Approve returns, cancellation, refund and warranty policies.
9. Confirm hosting, storage, CDN, messaging vendors, budget and launch target.
10. Legal/privacy review and named owner for Consumer E-Commerce Rules 2026 readiness and DPDP staged commencement.
11. Approve page inventory, measurable acceptance criteria and Phase 01 exit sign-off.


## Additional Phase 01 architecture work
- [x] Draft logical system architecture, deployment topology and nine architecture decision records.
- [x] Draft API module boundaries, versioning, security, pagination, idempotency and endpoint outline.
- [x] Draft non-functional requirements for performance, availability, recovery, security, privacy, accessibility, data integrity and observability.
- [x] Define release acceptance gates and identify service-level targets requiring business approval.

**Artefact progress:** 10 of 12 Phase 01 workstreams now have draft/research artefacts. This is a documentation-progress count only; approvals, actual inventory validation and business policies remain outstanding. Formal Phase 01 completion remains pending.

### Remaining Phase 01 blockers
- Brand/legal identity and domain approval.
- New-only vs pre-owned decision; confirm clubs/package sets and first sellable inventory list.
- Validate taxonomy, variants and SKU convention against actual supplier/product data.
- Named staff owners and approved permission/segregation thresholds.
- Delivery zones, operating hours, fees, ETA, proof-of-delivery and COD cash controls.
- Gateway selection, payment/refund/reconciliation rules.
- Accountant-approved GSTIN, HSN, tax, invoice and e-invoice applicability.
- Approved return, exchange, cancellation, refund and warranty policy.
- Hosting/provider, budget, launch target, RPO/RTO and performance targets.
- Legal/privacy review and implementation owner for 2026 E-Commerce Rules and DPDP staged commencement.
- Business approval of page inventory, acceptance criteria and Phase 01 exit sign-off.


## Latest Phase 01 work — 14 November 2026
- [x] Created customer storefront and admin page inventory with measurable acceptance checks.
- [x] Created a brand identity and launch assortment decision pack.
- [x] Created hosting/deployment options, vendor selection criteria, budget worksheet and operations ownership register.

### Workstream reconciliation
The Phase 01 workstream IDs P01-01 through P01-12 remain the formal meter. The new documents provide supporting detail for P01-03, P01-04, P01-07, P01-08, P01-11 and P01-12; they do not add extra completed workstreams or count as owner approvals.

**Document/research coverage:** all 12 workstreams now have a documented baseline, research input, or explicit decision register. **Formal Phase 01 completion: still pending.** P01-07, P01-08, P01-09, P01-10, P01-11 and P01-12 still require applicable owner/advisor validation or approval; the others also require formal phase sign-off and evidence.

### Outstanding owner inputs
1. Legal seller name, public brand name, logo, domain and brand approver.
2. New-only vs pre-owned; confirm clubs, junior range, personalization and actual first-stock list.
3. Validate category attributes and SKU/variant rules against supplier data.
4. Name role owners; approve publish, stock adjustment, cancellation, refund and export permissions.
5. Confirm delivery area, hours, fee/ETA, proof-of-delivery and COD cash reconciliation.
6. Select payment provider and approve webhook, refund and settlement reconciliation process.
7. Accountant approval for GST registration, HSN, tax categories, invoice and e-invoice applicability.
8. Approve shipping, cancellation, return, exchange, refund and warranty policy.
9. Compare hosting quotes; approve budget, technical owner, RPO/RTO, uptime and performance targets.
10. Legal/privacy review and accountable owner for applicable E-Commerce Rules 2026 and DPDP obligations.
11. Approve final page list, acceptance tests, support hours and Phase 01 exit sign-off.


## Additional Phase 01 security and data-model work — 14 November 2026
- [x] Created security threat model with trust boundaries, abuse scenarios, mitigations and verification plan.
- [x] Created data classification, data inventory, lifecycle and retention decision register.
- [x] Created conceptual entity relationship and integrity-constraint model for catalogue, identity, inventory, orders, payments, delivery and audit.

**Documentation coverage:** 12 / 12 Phase 01 workstreams now have a documented baseline, research input or explicit decision/approval register. This is 100% documentation coverage only — not 100% Phase 01 completion.

**Formal Phase 01 status:** In progress / approval-gated. The business decisions, advisor reviews, technical validation and recorded sign-off listed below remain open. No dependent production implementation has been falsely marked complete.

### Remaining phase exit gates
1. Business owner confirms legal seller identity, customer-facing brand, logo, domain and design approver.
2. Business owner confirms new-only/pre-owned scope, clubs and first actual product inventory list.
3. Inventory owner validates category attributes, variant options, SKU rules and product source data.
4. Business/security owners approve staff roles, named users, privilege thresholds and separation of duties.
5. Operations owner approves delivery zones, fees/ETA, delivery hours, proof method and COD handling or explicitly excludes COD.
6. Business/finance selects payment gateway and approves payment, refund, settlement and reconciliation workflows.
7. Accountant approves GST registration, HSN, tax configuration, invoice numbering and e-invoice applicability.
8. Business/legal approves cancellation, shipping, returns, exchange, refund, warranty and grievance policies.
9. Technical owner compares current hosting quotes and approves budget, provider, backup, RPO/RTO, uptime and performance targets.
10. Privacy/legal owner approves privacy notice, data purposes, retention schedule, rights handling, processors and incident obligations.
11. Product owner approves final customer/admin page inventory, measurable acceptance tests and Phase 01 exit sign-off.


# Phase 02 — UI/UX and Brand Design System
**Status:** In progress — neutral design groundwork. Phase 01 business approvals remain separate and are not implied by this work.

## Phase 02 meter
| ID | Workstream | Evidence | Status |
|---|---|---|---|
| P02-01 | Benchmark research | [Benchmark audit](./research/PHASE-02-DESIGN-BENCHMARKS.md) | Draft complete; Golfoy inspection blocked |
| P02-02 | Visual direction | [Tokens](./design-system/tokens.css) | Provisional; brand approval pending |
| P02-03 | Design foundations | [Tokens](./design-system/tokens.css) | Draft complete |
| P02-04 | Component library | [Component specification](./design-system/COMPONENT-LIBRARY.md) | Draft complete |
| P02-05 | Storefront wireframes | [Page wireframes](./design-system/PAGE-WIREFRAMES.md) | Draft complete |
| P02-06 | Admin wireframes | [Page wireframes](./design-system/PAGE-WIREFRAMES.md) | Draft complete |
| P02-07 | Responsive system | [Responsive standards](./design-system/RESPONSIVE-ACCESSIBILITY.md) | Draft complete; visual testing pending |
| P02-08 | Accessibility | [Accessibility standards](./design-system/RESPONSIVE-ACCESSIBILITY.md) | Draft complete; audit pending |
| P02-09 | Design QA | Screenshot/annotated visual evidence | Not started |
| P02-10 | Approval and handoff | Brand/product owner sign-off and implementation handoff | Pending |

**Document/specification progress:** 8/10 workstreams have draft deliverables (80%). This is not a tested or approved design completion percentage.

### Phase 02 blockers and next work
1. Confirm legal/customer-facing brand name, logo, official palette, typography and domain.
2. Confirm final P0 assortment and product image/content rights.
3. Produce high-fidelity visual comps and annotated interaction states for each approved page.
4. Run responsive screenshots and keyboard/screen-reader checks across the agreed viewport/browser matrix.
5. Resolve accessibility findings against W3C WCAG 2.2 AA; no conformance claim until evidence exists.
6. Obtain product-owner and brand-owner approval and complete design-to-development handoff.

### Phase 01 carry-over
Phase 01 remains approval-gated. Its documented decision list and business approvals must be closed independently; Phase 02 groundwork does not mark Phase 01 complete.


## Phase 02 — UI/UX and Brand Design System (updated 14 November 2026)
**Status:** In progress. A clickable visual prototype has been committed; browser rendering, screenshot-based visual QA, accessibility audit and owner approval remain open.

### Newly delivered prototype
- [Storefront and admin prototype](./design-system/prototypes/index.html)
- [Prototype CSS](./design-system/prototypes/prototype.css)
- [Prototype JavaScript](./design-system/prototypes/prototype.js)
- [Prototype QA record](./design-system/PROTOTYPE-QA.md)

### Updated Phase 02 task meter
| ID | Workstream | Current evidence | Status |
|---|---|---|---|
| P02-01 | Benchmark research | [Updated benchmark notes](./research/PHASE-02-DESIGN-BENCHMARKS.md) | Draft complete; Golfoy evidence gap remains |
| P02-02 | Visual direction | [Neutral fictional-brand prototype](./design-system/prototypes/index.html) and [tokens](./design-system/tokens.css) | Draft only; official brand approval pending |
| P02-03 | Design foundations | [Tokens](./design-system/tokens.css) | Draft complete |
| P02-04 | Component library | [Component library](./design-system/COMPONENT-LIBRARY.md) | Draft complete |
| P02-05 | Storefront wireframes | [Clickable storefront prototype](./design-system/prototypes/index.html) | Draft prototype; page review pending |
| P02-06 | Admin wireframes | [Admin overview prototype](./design-system/prototypes/index.html) | Draft prototype; role/workflow review pending |
| P02-07 | Responsive system | [Responsive CSS](./design-system/prototypes/prototype.css) and [standards](./design-system/RESPONSIVE-ACCESSIBILITY.md) | CSS breakpoints drafted; real viewport QA pending |
| P02-08 | Accessibility | [Standards](./design-system/RESPONSIVE-ACCESSIBILITY.md) and [QA record](./design-system/PROTOTYPE-QA.md) | Source checklist only; manual/automated audit pending |
| P02-09 | Design QA | [Prototype QA record](./design-system/PROTOTYPE-QA.md) | Source-level review recorded; browser screenshots and cross-browser tests pending |
| P02-10 | Approval and handoff | [Phase 02 plan](./design-system/PHASE-02-PLAN.md) | Pending brand/product owner inputs and sign-off |

**Documentation/workstream draft coverage:** 9/10 have written or prototype evidence (90%). This is a deliverable-coverage count only, not a claim of tested completion. Formal Phase 02 completion remains blocked by visual QA, accessibility verification, brand/product owner approval and final handoff.

### Current blockers
1. Official legal/customer-facing brand name, logo, palette, typography and domain.
2. Final P0 assortment and approved product content/image rights.
3. Browser-rendered screenshots at 320, 375, 390, 768, 1024, 1280 and 1440 CSS px.
4. Keyboard, screen-reader, contrast and WCAG 2.2 AA evaluation.
5. Product owner and brand owner sign-off; final implementation handoff.

### Safety boundary
The prototype uses a fictional placeholder brand and illustrative product names/prices. Cart actions are local demo interactions only. Checkout submission, payment, authentication, order creation, inventory and admin authorization are not connected. Do not treat the prototype as production commerce.


## Phase 03 — Platform and Engineering Foundation (updated 14 November 2026)
**Status:** In progress. Source scaffold has been committed to the repository; no local runtime, Docker, browser, build or CI execution evidence has been collected yet.

### Deliverables
- [Phase 03 plan and definition of done](./PHASE-03-FOUNDATION-PLAN.md)
- [Root npm workspace](./package.json), [frontend workspace](./frontend/package.json), [backend workspace](./backend/package.json)
- [Next.js storefront shell](./frontend/app/page.tsx) and [responsive styles](./frontend/app/globals.css)
- [NestJS API bootstrap](./backend/src/main.ts), [health endpoints](./backend/src/health/health.controller.ts) and [PostgreSQL connection check](./backend/src/database/database.service.ts)
- [Docker Compose PostgreSQL](./docker-compose.yml), [.env.example](./.env.example), [migration policy](./db/migrations/README.md)
- [GitHub Actions CI workflow](./.github/workflows/ci.yml)

### Phase 03 task meter
| ID | Workstream | Evidence | Status |
|---|---|---|---|
| P03-01 | Repository/workspaces | [Root package](./package.json), frontend/backend folders | Scaffold committed |
| P03-02 | Runtime/dependency baseline | Workspace package manifests and TypeScript configs | Draft committed; install/audit pending |
| P03-03 | Environment/secrets hygiene | [.env.example](./.env.example), [.gitignore](./.gitignore) | Draft committed; secret scan pending |
| P03-04 | Local PostgreSQL | [docker-compose.yml](./docker-compose.yml) | Committed; Docker execution pending |
| P03-05 | API foundation | [NestJS bootstrap](./backend/src/main.ts) | Committed; runtime pending |
| P03-06 | Health/readiness | [Health controller](./backend/src/health/health.controller.ts) | Committed; DB integration pending |
| P03-07 | Storefront shell | [Next.js page](./frontend/app/page.tsx) | Committed; browser/build pending |
| P03-08 | Migration strategy | [Migration policy](./db/migrations/README.md) | Documented; tool decision pending |
| P03-09 | CI foundation | [GitHub Actions](./.github/workflows/ci.yml) | Workflow committed; execution pending |
| P03-10 | Quality/security gates | Typecheck/build/lint scripts and CI job | Scaffolded; all checks pending |

**Scaffold coverage:** 10/10 workstreams have a starter artifact (100% scaffold coverage). **Verified execution: 0/10.** Phase 03 is not complete. Do not confuse committed source files with tested functionality.

### Required verification before Phase 03 can close
1. Run npm install on supported Node/npm and commit lockfile.
2. Fix any dependency, TypeScript, lint or build failures; record successful CI run.
3. Start PostgreSQL with Docker Compose and verify its healthcheck.
4. Start API; verify liveness HTTP 200, DB readiness HTTP 200, and DB-down readiness HTTP 503.
5. Start Next.js and inspect desktop/mobile browser rendering.
6. Run dependency and secret scans and review all findings.
7. Approve stack, migration tool, environment separation and operational ownership.
8. Record engineering sign-off.

**Known boundary:** no production credentials, real customer records, payment gateway, authentication, order processing, production migrations or deployment provider has been added.


### CI execution note — 14 November 2026
- First Foundation CI run stopped during Node setup; install, typecheck and build steps were skipped.
- Removed npm cache configuration while no lockfile exists and pushed a workflow correction.
- [Latest CI run](https://github.com/kumarbarupalsandeep-max/shop/actions/runs/43568343313) was still in progress at the last check. No successful build is claimed yet.
- Once CI finishes, resolve any install/type/build failures, add a reviewed lockfile and repeat verification.


## Phase 03 — CI failure analysis and correction (14 November 2026)
The first full GitHub Actions run reached install and typecheck successfully, then failed during Next.js build because the storefront brand link used a raw anchor for internal navigation. The source has been corrected to use next/link. The earlier run also reported 13 dependency audit findings (2 low, 10 moderate, 1 high); these are not considered resolved and require a lockfile-backed audit and remediation review.

Latest verification workflow after the fix: [Foundation CI run](https://github.com/kumarbarupalsandeep-max/shop/actions/runs/43568938181). At the last check it was still in progress; no green CI claim is made. The workflow now runs lint, typecheck and build. Docker/PostgreSQL runtime, API integration, browser screenshots, accessibility and security scans remain pending.

## Phase 04 — Product Catalog and Storefront (started 14 November 2026)
**Status:** In progress — scope and implementation plan committed; no catalog API/schema/UI implementation claimed yet.
- [Phase 04 delivery plan](./PHASE-04-CATALOG-AND-STOREFRONT-PLAN.md)
- [Catalog attributes and SKU matrix](./planning/CATALOG-ATTRIBUTES-SKU-MATRIX.md)
- [Page inventory and acceptance](./planning/PAGE-INVENTORY-ACCEPTANCE.md)
- [Workflow map](./planning/WORKFLOW-MAP.md)
- [Reference website audit](./research/REFERENCE-WEBSITE-AUDIT.md)

| ID | Workstream | Current evidence | Status |
|---|---|---|---|
| P04-01 | Catalog domain review | Existing draft catalog/SKU matrix reviewed | Draft reviewed; owner approval pending |
| P04-02 | Database schema/migrations | Schema design and migration gate in Phase 04 plan | Not started |
| P04-03 | Catalog read API | Endpoint contract in Phase 04 plan | Not started |
| P04-04 | Filter/facet contract | Category-aware filter requirements in plan | Not started |
| P04-05 | Catalog admin APIs | Draft/review/publish requirements in plan; RBAC dependency | Not started |
| P04-06 | Storefront home | Existing engineering placeholder only | Not started |
| P04-07 | Category/listing/search | Page inventory and acceptance requirements | Not started |
| P04-08 | Product detail | Page inventory and variant requirements | Not started |
| P04-09 | Catalog import | Dry-run and duplicate-SKU requirement in plan | Not started |
| P04-10 | Catalog QA/UAT | Acceptance criteria defined; test evidence absent | Not started |

**Phase 04 planning coverage:** 1/10 workstreams reviewed with a plan artifact; implementation and verification 0/10. Not a completion percentage.

**Phase 04 blockers:** actual product/brand/supplier data, licensed images, inventory rules, SKU pattern approval, finance-approved price/HSN/tax data, final category decisions, and Phase 03 authentication/RBAC and migration foundation.


## Phase 03 — Engineering foundation verification update (14 November 2026)

### Verified in GitHub Actions on the catalog foundation commit
- npm dependency installation: passed.
- Workspace lint: passed.
- API and storefront TypeScript checks: passed.
- API and storefront production build: passed.
- PostgreSQL 16 service startup and migration runner: passed for migrations 001 and 002.
- API smoke test: failed — the workflow's background npm launch did not leave the API listening on port 3001. The workflow was changed to start the compiled Node entrypoint directly, bound every curl request with timeouts and added startup-log diagnostics. Re-run is pending.

### Current Phase 03 checklist
| ID | Workstream | Evidence/status |
|---|---|---|
| P03-01 | Workspaces | Root/frontend/backend workspaces committed; install passed |
| P03-02 | Runtime/dependencies | Node 22.11+ and npm 10.9+ baseline; install passed; lockfile and dependency review pending |
| P03-03 | Environment/secrets | Templates committed; secret scan and production secret handling pending |
| P03-04 | PostgreSQL | PostgreSQL 16 CI service healthy; local Docker Compose and restore testing pending |
| P03-05 | API foundation | Build passed; live API smoke pending |
| P03-06 | Health/readiness | Routes compiled; runtime health/readiness check pending |
| P03-07 | Storefront foundation | Build passed on earlier commit; current responsive/browser review pending |
| P03-08 | Migration strategy | Checksum migration runner added; migrations 001–002 applied in CI; 003 and production approval pending |
| P03-09 | CI | Lint/typecheck/build/migrations passed; API smoke failed; direct Node startup retry pending |
| P03-10 | Quality/security | Lint/type/build passed; npm install reported 13 audit findings (2 low, 10 moderate, 1 high); lockfile-backed audit/remediation pending |

**Phase 03 is not complete.** Runtime smoke, dependency/secret scans, local setup, operational recovery and engineering sign-off remain open.

## Phase 04 — Product Catalog and Storefront progress (14 November 2026)

**Status:** In progress. Initial read-only catalog API, SQL migrations and customer storefront pages are committed. No live catalog data or purchasing functionality is enabled.

### New implementation links
- [Phase 04 plan](./PHASE-04-CATALOG-AND-STOREFRONT-PLAN.md)
- [Catalog migrations](./db/migrations/)
- [Migration runner](./backend/src/database/migrate.ts)
- [Catalog API controller](./backend/src/catalog/catalog.controller.ts)
- [Catalog API service](./backend/src/catalog/catalog.service.ts)
- [Storefront homepage](./frontend/app/page.tsx)
- [Shop listing/search page](./frontend/app/shop/page.tsx)
- [Product detail page](./frontend/app/product/[slug]/page.tsx)
- [Catalog import template](./catalog/import-template.csv) and [import guide](./catalog/IMPORT-GUIDE.md)

| ID | Workstream | Status | Remaining |
|---|---|---|---|
| P04-01 | Catalog domain/SKU rules | Draft reviewed | Inventory and product-owner approval |
| P04-02 | Database schema/migrations | Source committed; 001–002 applied in CI | Verify 003, fresh install/re-run and production migration approval |
| P04-03 | Public catalog read API | Routes implemented | Live API smoke, query integration tests and response review |
| P04-04 | Filter/facet contract | Attribute definition table and facets endpoint implemented | Apply facet values to product search and connect UI controls |
| P04-05 | Admin catalog APIs | Not started | Depends on Phase 03 authentication/RBAC and audit trail |
| P04-06 | Storefront homepage | Source implemented | Browser screenshots, responsive and design-owner QA |
| P04-07 | Listing/search | Search/category/sort and empty state implemented | Pagination controls, facet UI and browser QA |
| P04-08 | Product detail | Server-rendered detail and variant summaries implemented | Approved media delivery, selectable variants, cart integration later |
| P04-09 | CSV import | Template and guide committed | Dry-run importer, validation and atomic write tests |
| P04-10 | QA/UAT | Acceptance criteria documented | API/UI/accessibility tests, screenshots and owner sign-off |

**Phase 04 implementation coverage:** starter code/docs exist for 8/10 workstreams; P04-05 and P04-10 remain unimplemented. This is not a completion percentage. Phase 04 is not 100% complete.

### Data and approval boundary
The three draft launch category records are intentionally seeded with status=draft and do not appear in public category results. No real products, brands, SKU, supplier claims, prices, tax values, stock, licensed product images or customer orders have been invented or loaded. Admin publication stays unavailable until RBAC and owner approval are complete.
