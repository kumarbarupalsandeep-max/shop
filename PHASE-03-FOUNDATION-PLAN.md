# Phase 03 — Platform and Engineering Foundation

**Status:** In progress — provisional engineering scaffold committed; runtime verification and approval pending.
**Dependency note:** Phase 01 architecture and Phase 02 brand/design approval gates remain open. This phase uses the proposed Next.js + React, NestJS REST and PostgreSQL baseline only as reversible groundwork.

## Objective
Create a repeatable local development foundation for the customer web workspace, API service and PostgreSQL without inventing business policies or creating production data structures prematurely.

## Workstreams
| ID | Workstream | Deliverable | Status |
|---|---|---|---|
| P03-01 | Repository and workspace layout | npm workspaces, frontend/backend and shared TypeScript baseline | Scaffold committed; install/test pending |
| P03-02 | Runtime and package baseline | Node/npm engine requirements and dependency ranges | Draft committed; dependency audit pending |
| P03-03 | Environment configuration | .env.example, .gitignore and local-only credentials guidance | Draft committed; secret scan pending |
| P03-04 | Local database infrastructure | Docker Compose PostgreSQL 16 and healthcheck | Committed; Docker runtime test pending |
| P03-05 | API foundation | NestJS bootstrap, /api/v1 prefix, validation and CORS | Scaffold committed; runtime test pending |
| P03-06 | Health and readiness | Liveness route and DB-aware readiness route | Scaffold committed; integration test pending |
| P03-07 | Storefront foundation | Next.js App Router shell and responsive base page | Scaffold committed; build/browser test pending |
| P03-08 | Database migration strategy | Approval-gated migration policy | Documented; tool selection pending |
| P03-09 | CI foundation | GitHub Actions install, typecheck and build workflow | Committed; workflow execution pending |
| P03-10 | Engineering quality gates | Lint, typecheck, build, security/dependency checks | Partially scaffolded; execution pending |

## Local setup
1. Install Node.js 20.11+ and npm 10+.
2. Copy .env.example to .env; keep local values local.
3. Run npm install.
4. Start PostgreSQL: docker compose up -d postgres.
5. Start both applications: npm run dev.
6. Storefront: http://localhost:3000.
7. API liveness: http://localhost:3001/api/v1/health.
8. API readiness (requires PostgreSQL): http://localhost:3001/api/v1/health/ready.

## Safety and scope
- Docker credentials are local development defaults only; never deploy them.
- No real customer data, production secrets, payment credentials or live integrations.
- No domain schema/migrations until business data rules are approved.
- No Redis until measured need.
- No production deployment or hosting provider selected.
- Health/readiness endpoints expose operational status only, not secrets or database details.

## Definition of done
1. Clean checkout and npm install succeed on supported Node.
2. PostgreSQL starts and passes container healthcheck.
3. API liveness returns HTTP 200.
4. Readiness returns HTTP 200 with DB available and HTTP 503 when DB unavailable.
5. Storefront starts and renders on desktop and mobile widths.
6. Typecheck, lint and build pass in CI.
7. Dependency and secret scans are clean or reviewed findings are tracked.
8. Environment separation, migration strategy and onboarding are documented.
9. Engineering owner approves stack/version baseline and deployment assumptions.
10. Phase 03 exit sign-off is recorded.

## Current limitations
This is a source scaffold only. GitHub file operations did not run npm, Docker, browser, CI or security scanners. Do not mark runtime/build/CI checks passed until actual execution evidence is attached.
