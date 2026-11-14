# Hosting, Budget and Operations Decision Brief

**Phase:** 01 — Planning and Architecture
**Status:** Options and decision criteria only; no vendor selected.

## 1. Deployment options

| Option | Shape | Advantages | Risks / trade-offs |
|---|---|---|---|
| Managed application + managed PostgreSQL | Managed Next.js/API hosting with managed relational DB and object storage | Lower operations burden, faster launch | Vendor limits, region/data residency and recurring cost need review |
| Cloud platform services | App/container services, managed DB, object storage, CDN, secrets and monitoring | Flexible, scalable, strong infrastructure controls | More setup, IAM/network complexity and cost management |
| Self-managed VPS | One or more virtual servers with database and reverse proxy | Potentially lower initial bill, full control | Patching, backups, failover, monitoring and security become team responsibility |

Planning recommendation: prefer managed PostgreSQL and managed secrets/backups for the first production release if budget allows. Do not choose a provider until team capability, region, data protection, support and total monthly cost are compared.

## 2. Vendor selection checklist
- India region availability and data-transfer costs.
- PostgreSQL backup, point-in-time recovery and restore support.
- TLS, private networking, firewall and secret management.
- Object storage lifecycle, image delivery and CDN pricing.
- Logs, metrics, alerts and retention pricing.
- Deployment rollback and environment separation.
- Support response times and incident transparency.
- Data export and exit/migration path.
- Tax invoice/GST billing and payment terms.
- Expected cost at low, expected and peak traffic.

## 3. Budget worksheet

| Cost line | Monthly estimate | One-time estimate | Owner/status |
|---|---:|---:|---|
| Storefront hosting | TBD | TBD | Pending quote |
| API hosting | TBD | TBD | Pending quote |
| PostgreSQL | TBD | TBD | Pending quote |
| Object storage/CDN | TBD | TBD | Pending quote |
| Domain/DNS/TLS | TBD | TBD | Pending |
| Email/SMS/WhatsApp | TBD | TBD | Provider not selected |
| Payment gateway | Transaction-based | Setup if any | Gateway not selected |
| Monitoring/error tracking | TBD | TBD | Pending |
| Security review/penetration test | TBD | TBD | Scope pending |
| Maintenance/operations | TBD | TBD | Owner not assigned |

Do not publish fabricated cost estimates. Obtain current quotes and model expected order volume, product-image traffic and transaction fees.

## 4. Operations ownership
- Technical owner: not named.
- Database/backup owner: not named.
- Catalog owner: not named.
- Inventory and receiving owner: not named.
- Order and delivery operations owner: not named.
- Finance/reconciliation owner: not named.
- Customer support/grievance owner: not named.
- Security/privacy escalation owner: not named.

## 5. Service targets to decide
- Storefront/API availability target and support hours.
- RPO and RTO.
- Backup frequency and retention.
- Incident severity definitions and escalation contacts.
- Performance targets for mobile pages and API p95 latency.
- Peak traffic/order assumptions.
- Deployment window and rollback authority.

## 6. Approval gate
Hosting and budget workstream can be considered documented when a shortlist, cost worksheet and selection criteria exist. It cannot be approved until current vendor quotes, business budget and a named technical operator are recorded.