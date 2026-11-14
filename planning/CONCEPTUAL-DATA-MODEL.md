# Conceptual Data Model and Entity Relationships

**Phase:** 01 — Planning and Architecture  
**Status:** Logical model proposal; not a production database schema.

## 1. Core entity groups

### Identity and access
- User: customer or staff identity, authentication linkage, active state.
- Role: named permission bundle.
- Permission: atomic action identifier.
- UserRole: user-to-role assignment with audit metadata.
- RolePermission: role-to-permission mapping.
- Address: customer-owned address; snapshot into an order at purchase time.

### Catalogue
- Category: hierarchical navigation taxonomy.
- Brand: optional controlled brand record.
- Product: shared product content, slug, category and publication state.
- ProductVariant: actual purchasable configuration, unique SKU and barcode.
- AttributeDefinition: type, label, allowed values, unit and filterable flag.
- ProductAttributeValue: product-level values.
- VariantAttributeValue: variant-driving values.
- ProductMedia: object storage key, alt text, sort order and rights/source metadata.

### Inventory and fulfilment
- StockLocation: warehouse/store only if multi-location is approved.
- InventoryBalance: SKU/location on-hand and reserved quantities.
- StockMovement: immutable receipt, adjustment, reservation, release, sale or return event.
- Supplier / GoodsReceipt: optional procurement and receiving records.
- Delivery / DeliveryEvent: assignment, status, attempt, proof reference and actor.

### Commerce and finance
- Cart / CartItem: active shopping intent; price is revalidated.
- Order / OrderItem: purchase record and immutable product/price/tax/address snapshots.
- Payment / PaymentEvent: provider references, amount, currency, event ID and lifecycle.
- Refund: requested/approved/processed amount and references.
- Invoice: issued document and invoice number series.
- SupportCase: customer grievance/complaint, status, owner and timeline.
- AuditEvent: actor, action, target, timestamp, reason and safe before/after representation.

## 2. Relationship outline
- User 1-to-many Address.
- User 1-to-many Order.
- Category 1-to-many Product; category may have parent category.
- Product 1-to-many ProductVariant.
- Product 1-to-many ProductMedia.
- ProductVariant 1-to-many InventoryBalance by stock location.
- ProductVariant 1-to-many StockMovement.
- Cart 1-to-many CartItem; CartItem references ProductVariant.
- Order 1-to-many OrderItem; OrderItem references product/variant identity but retains immutable snapshots.
- Order 1-to-many PaymentEvent and DeliveryEvent through their parent records.
- Order 0-to-many Refund and 0-to-1 or 1-to-many Invoice depending on accounting rules.
- User many-to-many Role through UserRole; Role many-to-many Permission through RolePermission.
- User 1-to-many SupportCase; SupportCase may reference Order.
- Staff User 1-to-many AuditEvent.

## 3. Important integrity constraints
- SKU unique and immutable once used in an order.
- Product slug unique among active/public route identities.
- Order number and invoice number unique under approved numbering scope.
- Monetary values stored as integer minor units (INR paise) plus currency.
- Order item stores title, SKU, variant description, quantity, unit price, discount and tax snapshot.
- Order address is a snapshot; changing address book must not rewrite historic orders.
- Inventory movements are append-only; corrections use compensating movement, not destructive edits.
- Payment provider event IDs are unique per provider account to prevent duplicate processing.
- Idempotency keys have unique scope and expiry/retention rules.
- Audit events cannot be edited by ordinary application roles.
- Referential deletion rules preserve historical order and financial records.

## 4. Inventory consistency proposal
- available = on_hand - reserved - blocked (if blocked stock is adopted).
- Reservation and order creation must be atomic.
- A reservation has an expiry and a release/commit lifecycle.
- Every stock change creates a movement record with reason, actor and source reference.
- Return stock is quarantined until inspection and explicit restock action.
- Multi-location transfer is represented as paired outbound/inbound movements.

## 5. Data model decisions still open
- Guest checkout identity model.
- Single stock location vs multiple stock locations.
- Product brand as required vs optional.
- Variant option schema: normalized attribute tables vs JSON with controlled validation.
- Invoice cardinality and credit/debit note requirements.
- Supplier procurement and goods receipt module scope.
- Order/payment event retention and audit immutability approach.
- Pre-owned condition grading and per-unit serial/condition tracking if pre-owned is approved.

## 6. Implementation gate
Do not generate migrations solely from this conceptual model. First approve business rules, then design normalized schema, constraints, migration plan and concurrency tests in Phase 03.
