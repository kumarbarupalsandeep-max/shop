# Storefront and Admin Page Wireframes

Phase 02 — UI/UX and Brand Design System. Structural wireframes in text; final visual design awaits brand and scope approvals.

## Home page
1. Optional announcement strip.
2. Header with logo placeholder, shop navigation, search, account and cart.
3. Editorial hero: original campaign image, concise headline, primary CTA and optional secondary CTA.
4. Category discovery grid: approved launch categories only.
5. Featured/new arrivals product row.
6. Editorial story block with approved copy and image rights.
7. Service reassurance strip only after shipping, returns, payment and support claims are approved.
8. Newsletter/community block only after consent and channel approval.
9. Footer with support, policies and company information.

## Category / product listing page
- Breadcrumb, category heading and description.
- Result count and sort control.
- Desktop filter sidebar; mobile filter drawer with selected count and clear-all.
- Product grid: 4 columns wide desktop, 3 medium desktop, 2 tablet/mobile depending on viewport.
- Pagination or approved load-more behavior; loading, empty and error states.

## Search results
- Search query visible and editable.
- Result count, sort and filters.
- Product grid and no-results state with query correction and approved category links.

## Product detail
- Desktop two-column layout: media gallery left, purchase information right.
- Mobile stacked gallery then purchase details; sticky purchase action only after usability testing.
- Title, model/SKU, price, stock, variants, quantity and add-to-cart.
- Details: description, specifications, included items, delivery, returns and warranty.

## Cart
- Item image/title/variant/price/quantity/remove.
- Stock and price revalidation feedback.
- Order summary with subtotal and API-calculated charges.
- Promo code only if promotions are approved; checkout CTA and empty cart state.

## Checkout
- Clear contact, delivery address, delivery method, payment and review steps.
- Show serviceability and complete payable amount before final submit.
- Prevent duplicate submissions; show processing state.
- Do not claim success until server confirmation.

## Account and orders
- Account navigation: profile, addresses, orders and support.
- Order list with status/date/total.
- Order detail with item, address snapshot, payment state, delivery timeline and invoice when available.
- Clear no-orders and error states.

## Admin dashboard
- Separate admin shell with side navigation and top utility bar.
- Summary cards only for role-authorized metrics.
- Recent orders, low-stock signals and exceptions only when backed by API data.
- New-store empty state; no fake charts or live-looking sample metrics.

## Admin product management
- Product table with status, SKU count, category, price range and updated date.
- Create/edit flow: basic info -> categories/attributes -> variants/SKUs -> media -> review/publish.
- Draft, review, published and archived states.
- Preview before publish; validation and duplicate SKU checks.

## Admin inventory and orders
- Inventory table: SKU, product/variant, on-hand, reserved, available and last movement.
- Adjustment form requires reason; approval thresholds await policy.
- Order queue filters by state and age.
- Order detail shows event history and authorized actions.
- Delivery assignment restricted to active staff and approved operational zones.

## Admin responsive behavior
- Desktop-first data density with tablet fallback.
- On mobile, tables become prioritized cards or controlled horizontal scroll with labels.
- Never hide critical order/stock status solely to fit the viewport.