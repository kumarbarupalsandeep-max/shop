# Phase 04 — Product Catalog and Storefront

**Status:** In progress — initial database/catalog API and customer storefront pages committed; CI/API smoke verification and owner approvals pending.
**Dependencies:** Phase 03 foundation remains open (CI build fix pushed; next CI run pending, security audit findings unresolved, runtime Docker/browser checks not yet evidenced). Phase 01 catalog/SKU matrix and Phase 02 design system remain drafts pending owner approval. Implement reversible, draft-only catalog functionality; do not publish real products or infer business policies.

## Objective
Deliver a working golf-specific catalog foundation and customer product-discovery experience for the confirmed single-vendor India launch scope: golf balls, apparel, footwear, bags and accessories.

## Evidence and scope basis
- planning/CATALOG-ATTRIBUTES-SKU-MATRIX.md: product/variant/SKU principles, category-specific fields and unresolved inventory-owner decisions.
- planning/PAGE-INVENTORY-ACCEPTANCE.md: Home, Category/PLP, Search and Product Detail requirements.
- planning/WORKFLOW-MAP.md: customer product discovery and inventory/price revalidation workflow.
- research/REFERENCE-WEBSITE-AUDIT.md: reusable patterns only; no copying of competitor assets, text or product data.
- design-system/PHASE-02-PLAN.md and design-system/PAGE-WIREFRAMES.md: provisional visual and interaction direction; brand approval remains pending.

## P0 boundaries
1. Work only with new products in the five confirmed product groups.
2. Golf clubs/package sets, pre-owned, trade-in, repair, loyalty, gift cards, reviews, ratings, wishlist and personalization are not assumed P0.
3. Product and variant records start as drafts; no sample products are represented as real inventory.
4. A publish operation must be blocked unless product content, sellable SKU, approved price, stock policy, required disclosures and media rights are verified.
5. Never invent HSN, GST rate, warranty, product performance, size conversion or supplier data.
6. Use INR amounts as integer paise in persistence/API calculations; do not use floating-point currency.
7. SKU uniqueness and immutability are enforced at the database layer; SKU pattern remains provisional until inventory/accounting approval.
8. Product images must be owned/licensed assets with alt text; competitor media is prohibited.

## Proposed workstreams
| ID | Workstream | Deliverable | Status |
|---|---|---|---|
| P04-01 | Catalog domain review | Approved product/variant/category/attribute/SKU contract | Draft reviewed; owner approval pending |
| P04-02 | Database schema and migrations | SQL migrations 001–003; checksum-checked migration runner; draft launch categories | Source committed; 001–002 applied in CI; 003 verification pending |
| P04-03 | Catalog read API | GET categories, paginated/searchable products, product detail | Implemented; API smoke test pending |
| P04-04 | Filter/facet contract | Filterable attribute definitions and GET facets endpoint; allowlisted title/newest sort | API metadata endpoint committed; interactive attribute filtering pending |
| P04-05 | Catalog admin APIs | Draft create/edit, media metadata and review/publish workflow with RBAC | Not started |
| P04-06 | Storefront home | Original responsive golf shop homepage and category discovery | Source committed; browser/screenshots and brand approval pending |
| P04-07 | Category/product listing | Server-rendered listing with search, category filter, sort and empty states | Source committed; pagination controls, facet UI and browser QA pending |
| P04-08 | Product detail | Server-rendered product detail, variant summaries, price/availability and policy placeholders | Source committed; media delivery, selection/cart and browser QA pending |
| P04-09 | Catalog data import | CSV template and field/import safety guide | Documentation committed; dry-run importer/API pending |
| P04-10 | Catalog QA and UAT | API tests, responsive screenshots, accessibility checks and catalog-owner sign-off | Not started |

## API contract proposal
All routes are versioned below /api/v1.
- GET /catalog/categories — active categories and safe hierarchy.
- GET /catalog/products?page=1&limit=20&category=<slug>&q=<term>&sort=<allowlisted> — published products only; safe filters and pagination.
- GET /catalog/products/:slug — published product detail and purchasable variant summaries only.
- GET /catalog/facets?category=<slug> — only approved/filterable attributes for that category.
- Staff-only endpoints (after Phase 03 authentication/RBAC is implemented): create/update draft product, attach media metadata, submit for review, approve/publish, archive, and import dry-run.
- Admin mutations must record actor, timestamp and reason; API authorization is mandatory and must not rely on UI hiding.

Response contract:
- Money is { amountPaise: integer, currency: "INR" }.
- Product availability is a controlled status derived from inventory; never expose internal stock counts unless approved.
- Product variants contain stable variant ID and SKU internally; expose SKU only if the business approves customer visibility.
- Search/filter/sort inputs are validated, bounded and parameterized.
- Pagination has a maximum page size and stable ordering.
- Draft/unpublished products never appear in public endpoints.

## Database design principles
- Use UUID primary keys and unique normalized slug/SKU constraints.
- Product is shared content; ProductVariant represents a separately purchasable SKU.
- Category and attribute definitions are controlled records, not free-form query parameters.
- Store media storage key, alt text, media type and sort order; binary media is stored in approved object storage, not PostgreSQL.
- Store price history/effective periods and audit actor; use integer paise.
- Inventory balances and stock movements are distinct; availability must be concurrency-safe before checkout is implemented in Phase 05.
- Preserve archived SKU/product references for historical order integrity.
- Migration tool, retention and production backup policy must be approved under Phase 03 before production use.

## Definition of done
1. Product/category/variant/attribute/SKU rules are signed off by product and inventory owners.
2. Reviewed migrations install from an empty database and upgrade safely.
3. Catalog read API returns correct pagination, category/search filters, detail and facets.
4. Public API never leaks draft products or unauthorized internal data.
5. Admin catalog actions are protected by server-side roles and audited.
6. Duplicate SKUs and invalid variant combinations are rejected.
7. Product page and listing render correctly on mobile/tablet/desktop with loading, empty and error states.
8. Keyboard, screen-reader and WCAG 2.2 AA checks are recorded; no conformance claim without evidence.
9. Catalog import validates files, produces a dry-run report and rejects duplicates without partial writes.
10. Automated API/integration tests and CI build pass; product owner UAT and Phase 04 sign-off recorded.

## Current blockers and owner decisions
- Actual first 20–50 products, brands, suppliers, product content and licensed images.
- Final category tree and optional categories (junior apparel, gloves, electronics etc.).
- Inventory locations, stock ownership and initial stock rules.
- SKU pattern and barcode/GTIN availability.
- Supplier-provided size charts, shoe size systems and category-specific attribute values.
- Finance approval for price, tax category and HSN.
- Brand/legal name, domain, final visual tokens and design approver.
- Phase 03 authentication/RBAC, migration runner and CI/security gates.
- Hosting/object-storage choice for product images.

## Implementation evidence added 14 November 2026
- Database migrations: db/migrations/001_catalog_foundation.sql, 002_catalog_attribute_definitions.sql, 003_seed_draft_launch_categories.sql.
- Migration runner: backend/src/database/migrate.ts; run with npm run db:migrate after PostgreSQL is available.
- Public read API: backend/src/catalog/catalog.controller.ts and catalog.service.ts; registered through CatalogModule.
- Customer pages: frontend/app/page.tsx, frontend/app/shop/page.tsx and frontend/app/product/[slug]/page.tsx.
- Import template and instructions: catalog/import-template.csv and catalog/IMPORT-GUIDE.md.
- CI has passed lint, typecheck, production build and migrations on an earlier commit. The API smoke test failed to connect to the background-started process; the workflow now starts the compiled Node entrypoint directly and uses bounded curl timeouts with startup diagnostics. A green run on the current source is still required.

## Current limitations
This plan is a requirements-to-implementation baseline, not a completed catalog. No real product data, live pricing, stock, supplier relationship, tax advice or product imagery is created by this document. Owner decisions and test evidence are required before marking Phase 04 complete.
