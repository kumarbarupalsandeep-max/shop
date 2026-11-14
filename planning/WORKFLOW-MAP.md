# Storefront, Admin, Order and Delivery Workflow Map

**Phase:** 01 — Planning and Architecture  
**Status:** Draft; policy-dependent states need owner approval.

## 1. Customer journey

1. Visitor opens storefront.
2. Browses category or searches products.
3. Opens product detail and selects a valid purchasable variant.
4. System checks current price, publication status and stock.
5. Visitor adds item to cart.
6. Cart recalculates availability and current price.
7. Customer signs in or checks out according to approved guest-checkout policy.
8. Customer enters/selects delivery address.
9. Server checks serviceability and calculates delivery fee/tax from approved rules.
10. Customer reviews full payable amount and policy disclosures.
11. Customer selects an available payment method.
12. Server creates a pending order and reserves stock transactionally.
13. Payment is confirmed through trusted server-side gateway response/webhook, or COD order is accepted under approved rules.
14. Order is confirmed and customer receives notification.
15. Staff processes pick/pack and assigns own-team delivery.
16. Customer sees permitted order/delivery updates.
17. Delivery is completed with approved proof/event.
18. Invoice and final order history are available as configured.

## 2. Order state machine (proposal)

`DRAFT_CART -> PENDING_PAYMENT -> CONFIRMED -> PROCESSING -> PACKED -> OUT_FOR_DELIVERY -> DELIVERED`

Alternative terminal/exception states:
- `PAYMENT_FAILED`
- `CANCEL_REQUESTED`
- `CANCELLED`
- `DELIVERY_FAILED`
- `RETURN_REQUESTED` (only if return policy approved)
- `RETURN_APPROVED`
- `RETURN_RECEIVED`
- `REFUND_PENDING`
- `REFUNDED`

Rules:
- State transitions must be explicit and server-validated.
- No arbitrary status editing from the admin UI.
- Record actor, timestamp, reason and event history for every transition.
- A delivered order must not silently return to processing.
- Cancellation eligibility depends on fulfillment stage and approved policy.
- Returns/refunds remain policy-gated; do not expose unapproved promises.

## 3. Inventory lifecycle

- Receive stock against a supplier/receiving reference.
- Verify quantity, SKU, condition and damage.
- Post stock movement with reason and actor.
- Available stock is calculated from on-hand less reserved/blocked quantity.
- Checkout reservation uses a transaction and prevents overselling under concurrency.
- Reservation expires/releases after payment failure or timeout according to approved policy.
- Pick/pack decrements or commits stock at the approved stage; never double-decrement.
- Returns enter a separate quarantine/inspection state; do not automatically re-add to sellable stock.
- All manual adjustments require a reason and audit event.

## 4. Payment lifecycle

`CREATED -> PENDING -> AUTHORIZED/CAPTURED -> RECONCILED`

Failure/exception:
- `FAILED`, `CANCELLED`, `EXPIRED`, `REFUND_PENDING`, `PARTIALLY_REFUNDED`, `REFUNDED`, `DISPUTED`

Controls:
- Payment gateway is undecided; implement provider adapter only after selection.
- Verify webhook signature and event authenticity.
- Idempotency key prevents duplicate order/payment creation.
- Do not trust browser redirect as final payment confirmation.
- Reconcile gateway settlement reports against internal payment/order ledger.
- Never store raw card number, CVV or PIN.
- COD requires cash collection, receipt, staff handover and reconciliation rules before enabling.

## 5. Own-team delivery lifecycle

1. Order becomes eligible for dispatch after the approved payment/COD condition.
2. Order manager assigns delivery to an active delivery staff member.
3. Delivery staff sees only assigned delivery jobs and minimum necessary customer/address information.
4. Staff records pickup, out-for-delivery, attempt and final result.
5. Proof-of-delivery method is selected by business (OTP, signature, photo or other); privacy and consent controls required.
6. Failed attempt requires reason and next action.
7. COD collected (if enabled) is reconciled against cash handover.
8. Delivery completion updates order only through validated transition.

Open operational details: delivery zones, working hours, dispatch cut-off, ETA logic, service radius, failed attempt limits, proof method, cash handling, staff safety and escalation.

## 6. Customer support and grievance journey

- Customer submits issue through approved channel.
- System assigns ticket/reference and timestamps receipt.
- Support verifies identity proportionately and accesses only relevant customer/order data.
- Complaint is categorized (order, payment, delivery, product, return, privacy).
- Escalation owner and SLA are recorded.
- Resolution and customer communication are logged.
- Complaint data retention follows approved privacy policy.

The 2026 E-Commerce Amendment Rules specify acknowledgement within 48 hours and redress within one month for the grievance officer; legal counsel must validate applicability and operational implementation before launch.

## 7. Product lifecycle

`DRAFT -> REVIEW -> APPROVED -> PUBLISHED -> ARCHIVED`

- Draft products are not publicly visible.
- Review checks data source, images, variants, stock, pricing and compliance fields.
- Publish requires authorized approval.
- Price/stock changes are separately audited.
- Archive prevents new sales but preserves historic order references.

## 8. Workflow acceptance tests
- Customer cannot read another customer's order or address.
- Customer cannot checkout with unpublished or unavailable variant.
- Concurrent checkout cannot oversell last unit.
- Payment redirect without valid webhook/server confirmation does not mark paid.
- Duplicate webhook does not create duplicate payment/order effects.
- Delivery user cannot view unassigned delivery.
- Failed delivery preserves reason and event history.
- Stock return does not become sellable before inspection.
- Refund requires permitted approval and a gateway/internal reference.
- Every sensitive state change records actor and timestamp.
