# Responsive, Accessibility and Interaction Standards

Phase 02 — UI/UX and Brand Design System. Proposed standards; test evidence required before sign-off.

## Responsive breakpoints
- Small: 0–639px.
- Medium: 640–899px.
- Large: 900–1199px.
- Wide: 1200px and above.
These are starting points; validate content-driven layouts.

## Layout rules
- Main content max width 80rem with fluid side gutters.
- Product grids: 2 columns on most small screens, 2–3 medium, 3–4 wide depending on card width.
- Filters use a drawer on mobile and sidebar on wide layouts.
- Compact mobile header; full navigation at desktop.
- Aim for tap targets of at least 44 by 44 CSS pixels.
- Prevent horizontal page overflow at 320 CSS px.
- Support zoom/reflow; avoid fixed-height text containers.
- Keep checkout summary understandable on narrow screens.

## Accessibility baseline
Target WCAG 2.2 AA, subject to formal audit.
- Semantic landmarks and logical heading order.
- All functions available by keyboard.
- Visible focus not obscured by sticky headers or drawers.
- Text contrast meets applicable WCAG AA thresholds.
- Colour is never the only carrier of status.
- Labels, instructions and errors are associated with inputs.
- Accessible names for icon-only controls.
- Dialog focus moves inside, remains managed, closes safely and returns to trigger.
- Menus and accordions support expected keyboard behavior.
- Product image alt text conveys useful identity; decorative imagery uses empty alt.
- Respect reduced-motion preferences.
- Avoid autoplay; provide pause/controls for moving content.

## Interaction and feedback
- Buttons show hover/focus/pressed/disabled/loading states.
- Forms validate on submit and communicate errors in text.
- Async actions prevent accidental duplicate submissions.
- Add-to-cart feedback announces success and exposes a cart action.
- Filters communicate selected count and offer clear-all.
- Network failures preserve user-entered data where safe.
- Destructive admin actions explain target and consequence.

## Test matrix
- Viewports: 320px, 375px, 390px, 768px, 1024px, 1280px and 1440px.
- Keyboard-only navigation.
- Screen-reader spot checks on navigation, product selection, cart and checkout.
- 200% zoom/reflow.
- Reduced motion enabled.
- Slow network and failed image/API responses.
- Current supported Chrome, Edge, Firefox and Safari once support policy is agreed.

## Phase 02 acceptance evidence
- Annotated page layouts and component inventory.
- Design tokens and component states.
- Responsive screenshots for agreed viewports.
- Accessibility review and issues register.
- Product-owner sign-off on visual direction.
- Brand-owner approval of logo, palette, typography, imagery and content before branded production implementation.