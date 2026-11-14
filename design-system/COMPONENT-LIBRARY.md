# Component Library Specification

Phase 02 — UI/UX and Brand Design System. Draft specification; visual QA and product-owner approval pending.

## Foundations
Use semantic tokens from tokens.css. Components must not hard-code brand colours, spacing, radii or shadows. Share accessibility foundations across storefront and admin, but keep their navigation and layout density distinct.

## Global storefront shell
- Announcement bar: optional operational message.
- Header: logo placeholder, primary navigation, search, account and cart.
- Mobile header: compact logo placeholder, menu, search and cart; keyboard-operable drawer.
- Footer: help/contact, policy links, newsletter only after privacy review, and social links only for official accounts.
- Breadcrumbs show hierarchy and current page.

## Core components
| Component | Required anatomy | States / behavior |
|---|---|---|
| Button | Label, optional icon | Primary, secondary, tertiary, destructive; hover, focus, pressed, disabled, loading |
| Text field | Label, input, hint/error | Default, focus, invalid, disabled, read-only |
| Search box | Input, clear, submit | Empty, typing, suggestions, no results, loading, error |
| Category tile | Image, label, optional description | Default, hover/focus; one accessible link |
| Product card | Image, title, price, variant hint, availability, action | Default, sale, out of stock, multiple variants, loading |
| Price block | Current price, optional MRP/discount | Tax messaging only after policy approval |
| Variant selector | Label and available options | Selected, unavailable, disabled; reject invalid combination |
| Quantity control | Decrease, value, increase | Min/max and accessible name |
| Badge | Short status text | Sale/new/low stock only when backed by data; never colour-only |
| Filter group | Label, options, selected count | Expanded/collapsed, selected, clear, no results |
| Sort select | Label and allowlisted options | Current selection and keyboard support |
| Breadcrumb | Parent links and current location | Responsive overflow handling |
| Accordion | Trigger and panel | Expanded/collapsed, keyboard support |
| Modal/drawer | Title, content, close action | Focus management, escape close, return focus |
| Toast/alert | Message and optional action | Success, warning, error, info; accessible announcement |
| Pagination | Previous/next and page controls | Current, disabled, compact mobile mode |
| Skeleton | Content-shaped placeholder | Loading only; never replace error state |
| Empty/error state | Message and next action | Empty cart, no results, network/service failure |
| Trust strip | Shipping/returns/support/payment reassurance | Show only claims approved and fulfilable |

## Product card rules
- Consistent image ratio and neutral image background.
- Product name readable at 2–3 lines without layout jumping.
- Discounts derive from verified price fields.
- Show variant prompt when selection is required; do not imply one-click add without valid options.
- Out-of-stock products must not appear purchasable.
- Wishlist excluded until scope and account/guest behavior are approved.
- Never fabricate ratings, review counts, stock urgency or delivery promises.

## Product detail page
- Media gallery with thumbnails and meaningful alt text.
- Product title, accurate brand/model/SKU, price and availability.
- Variant selection, quantity and add-to-cart.
- Description, specifications, included items, care/warranty and delivery/returns only from approved data.
- Mobile purchase action must remain reachable without obscuring content.

## Admin component differences
- Dense data tables with search, filters, sorting and pagination.
- Status and permission labels are textual, not colour-only.
- Forms show required fields and validation.
- Destructive actions require confirmation and explain impact.
- Audit metadata visible only to authorized roles.

## Content and imagery
- Use licensed or original golf photography and product assets.
- Product thumbnails should use clean backgrounds; campaign hero can use editorial golf imagery.
- Use responsive image sources, modern formats and lazy loading below the fold.
- Never hotlink competitor assets or use logos without authorization.