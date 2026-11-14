# Phase 01 — Business and Architecture Decision Workbook

**Status:** Prepared for decision-owner completion. No decision below is approved by this document.
**Project baseline:** Single-vendor golf commerce for India; golf balls, apparel, footwear, bags and accessories; own delivery direction; Next.js/React, NestJS REST and PostgreSQL planning baseline.
**Rule:** Record the decision, evidence, accountable owner and approval date. If unresolved, record it as deferred with an owner and due date. Do not turn a recommendation into a business rule.

## How to use this workbook
1. The named business owner assigns one accountable decision-maker to each row.
2. The decision-maker selects an option or writes a different approved choice.
3. Attach source evidence where relevant (stock list, supplier specification, accountant/legal advice, provider quote).
4. Record approver, date and any constraints.
5. Update the Phase 01 plan and dependent specifications only after approval.

## A. Launch scope and assortment

| ID | Decision to record | Options / evidence needed | Owner | Approval record |
|---|---|---|---|---|
| D01 | Legal seller and customer-facing brand identity | Legal entity name/address; public brand spelling; logo usage rights; domain; official support contacts | Business owner | Pending |
| D02 | Product condition | New-only / new + pre-owned. If pre-owned: grading, inspection, authenticity, warranty and return process | Business + inventory | Pending |
| D03 | P0 assortment | Confirm golf balls, apparel, footwear, bags, accessories against first stock list; decide clubs, junior and electronics separately | Business + inventory | Pending |
| D04 | Category taxonomy | Approve category/subcategory tree and which categories are hidden until stocked | Catalog owner | Pending |
| D05 | Variant and SKU rules | Review category matrix; approve SKU format, uniqueness, immutability, size systems, pack quantity and variant combinations | Inventory + catalog | Pending |
| D06 | Product content readiness | Supplier source, accurate specs, images/usage rights, barcode, country-of-origin/importer data, warranty and care content | Inventory + catalog | Pending |

## B. Customer, staff and operating rules

| ID | Decision to record | Options / evidence needed | Owner | Approval record |
|---|---|---|---|---|
| D07 | Customer identity and checkout | Guest checkout yes/no; sign-in methods; email/mobile verification; account recovery and MFA policy | Business + security | Pending |
| D08 | Staff roles and named access | Approve role matrix; assign named users; define who can publish, adjust stock, cancel orders, initiate/approve refunds and export PII | Business + security | Pending |
| D09 | Delivery operating model | Serviceable PIN codes/areas, delivery days/hours, fee and ETA rules, failed delivery, proof-of-delivery, COD cash collection/reconciliation | Operations | Pending |
| D10 | Customer support and grievance | Support channels, business hours, complaint acknowledgement/response targets, escalation owner and public contact details | Operations + legal | Pending |

## C. Finance, policy and compliance decisions

| ID | Decision to record | Options / evidence needed | Owner | Approval record |
|---|---|---|---|---|
| D11 | Payment methods and gateway | Provider shortlist/quote; UPI/cards/netbanking/wallets; COD yes/no; settlement and reconciliation process; webhook/refund support | Finance + business | Pending |
| D12 | GST, HSN and invoices | GST registration details; accountant-approved HSN/tax mapping; invoice numbering; e-invoice applicability; credit note process | Accountant + finance | Pending |
| D13 | Customer policies | Shipping, cancellation, returns, exchange, refund, warranty, damaged/incorrect item and grievance policies | Business + legal | Pending |
| D14 | Privacy and retention | Privacy notice owner; purposes and data minimization; retention/deletion schedule; rights requests; processor list; incident escalation | Legal/privacy owner | Pending |

## D. Technical, budget and launch constraints

| ID | Decision to record | Options / evidence needed | Owner | Approval record |
|---|---|---|---|---|
| D15 | Hosting and region | Compare managed app + DB, cloud services and self-managed VPS; region, security, support, backup/restore, portability | Technical owner | Pending |
| D16 | Media and communications providers | Object storage/CDN; email/SMS/WhatsApp providers; security controls, delivery, retention and current quotes | Technical + operations | Pending |
| D17 | Budget and timeline | Approved one-time/monthly budget, launch target, staffing and maintenance capacity | Business owner | Pending |
| D18 | Service and recovery targets | Availability, p95 performance, RPO/RTO, backup frequency/retention, incident response and rollback authority | Technical + operations | Pending |
| D19 | Acceptance and handoff | Approve final page/workflow inventory, measurable tests, browser/device matrix, accessibility target and sign-off owners | Product owner | Pending |

## E. Architecture review record

The following remain planning baselines, not automatically approved implementation decisions:

| ADR | Baseline | Review question | Status |
|---|---|---|---|
| ADR-001 | Single-vendor model | Confirm legal seller identity and initial exclusions | Business direction confirmed; identity pending |
| ADR-002 | Next.js + React | Confirm team capability, hosting compatibility and version policy | Engineering review pending |
| ADR-003 | NestJS REST | Confirm module boundaries, API contract and validation/error conventions | Engineering review pending |
| ADR-004 | PostgreSQL | Confirm operations owner, backup/restore and migration policy | Engineering review pending |
| ADR-005 | No Redis initially | Revisit only if a measured need exists | Proposed |
| ADR-006 | INR stored as integer paise | Finance approves rounding, discount and tax calculation policy | Pending |
| ADR-007 | Transactional order/stock integrity | Engineering validates reservation, concurrency and recovery model | Pending |
| ADR-008 | Payment adapter + verified idempotent webhooks | Select provider and verify provider-specific flows | Provider pending |
| ADR-009 | Object storage + CDN | Select provider after region, access and cost review | Provider pending |

## F. Phase 01 exit checklist

- [ ] D01–D19 have an approved decision or a documented deferral with owner and due date.
- [ ] Launch scope, product condition and first assortment are approved.
- [ ] Category, attribute, variant and SKU rules are approved against real planned inventory.
- [ ] Role/permission matrix is approved and named staff access is assigned.
- [ ] Customer/admin page and workflow inventory is approved.
- [ ] Architecture decisions and operational ownership are reviewed.
- [ ] Delivery, payment, GST/invoice, returns/refunds and support policies are approved or explicitly deferred.
- [ ] Privacy/legal review has an accountable owner and documented actions.
- [ ] Budget, launch target, hosting, backup and service targets are approved.
- [ ] Measurable acceptance criteria and phase dependencies are signed off.
- [ ] Business owner records final Phase 01 approval.

**Exit rule:** Phase 01 remains in progress until every required item is approved or explicitly deferred with accountable owner and date, and the business owner signs the exit record. The existence of this workbook is documentation progress only.
