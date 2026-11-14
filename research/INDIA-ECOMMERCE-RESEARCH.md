# India E-Commerce and Golf Retail Research

**Project:** Golf Commerce Platform  
**Market:** India  
**Research date:** 14 November 2026  
**Purpose:** Planning inputs for Phase 01. This is research, not legal/tax advice or final business approval.

## 1. Project facts from the planning brief
- Single-vendor golf store.
- Initial product groups: golf balls, apparel, footwear, bags and accessories.
- Own delivery team is the intended fulfilment model.
- Proposed engineering baseline: Next.js/React, NestJS REST and PostgreSQL.

## 2. Reference-store review framework

Use the following sites as research benchmarks, not templates to copy:
- St Andrews Shop — premium brand presentation, collections and merchandising.
- Golfoy — Indian golf retail breadth, category navigation and customer retention ideas.
- Golf Mart India — multi-brand catalog structure, product options, offers and filters.
- Golf Garage — used/pre-owned equipment, trade-in, services and customer support.

For each reference, capture:
1. Navigation and category hierarchy.
2. Product card information and comparison cues.
3. Product detail attributes and variant selectors.
4. Search, filters and sorting.
5. Cart and checkout steps.
6. Delivery, returns and support disclosures.
7. Rewards, reviews, trade-in or service features.
8. Mobile behavior and accessibility.
9. Distinctive ideas worth learning from, without copying protected assets, text or UI.

Reference observations should be dated and rechecked before implementation because stores change.

## 3. India regulatory research

### 3.1 Consumer e-commerce rules
The Department of Consumer Affairs publishes the Consumer Protection (E-Commerce) Rules, 2020 and the 2021 amendment on its official consumer-protection page:
https://consumeraffairs.gov.in/pages/consumer-protection-acts

The PIB announcement of 10 September 2026 says the Consumer Protection (E-Commerce) (Amendment) Rules, 2026 will come into force on **1 January 2027**. The announcement identifies strengthened provisions covering consumer grievances, search results, sponsored listings, price reductions, dark patterns and seller disclosures:
https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2308759

Planning implications:
- Create clear business/seller identity and customer contact disclosures.
- Provide a grievance contact and trackable complaint workflow.
- Keep price, discount and sponsored placement representations truthful and auditable.
- Review search ranking, sponsored placements and dark-pattern risks before launch.
- Have Indian counsel confirm exact obligations, applicability and transition dates before production.

### 3.2 GST and invoices
CBIC invoice rules describe tax-invoice particulars such as supplier name/address/GSTIN, invoice number/date, recipient information where applicable, HSN, goods description, quantity, taxable value, tax rates and tax amounts:
https://cbic-gst.gov.in/gst-invoice-rules.html

CBIC sectoral FAQs discuss the distinction between own-account sales and supplies by other sellers through an e-commerce operator, including TCS treatment under the described circumstances:
https://cbic-gst.gov.in/hindi/sectoral-faq.html

Planning implications:
- Confirm the actual legal seller and GST registration setup.
- Store approved HSN and tax configuration per product/category where required.
- Build invoice numbering and immutable invoice records only after accountant approval.
- Do not hard-code tax percentages or assume TCS treatment without confirming the actual business model and current law.
- Have a qualified GST advisor validate invoice, place-of-supply, credit-note and e-invoice applicability.

### 3.3 Digital personal data
MeitY publishes the Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025:
- Act: https://www.meity.gov.in/writereaddata/files/Digital%20Personal%20Data%20Protection%20Act%202023.pdf
- Rules: https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa

Planning implications:
- Inventory the customer and staff personal data collected and why it is needed.
- Use clear privacy notices and appropriate consent/other lawful grounds.
- Minimize collection and restrict access by role.
- Define retention, deletion, grievance and rights-request workflows.
- Review vendors that process customer data and security incident procedures.
- Confirm the applicable commencement/transition timeline and exact requirements with counsel.

## 4. Golf catalog design research

A golf catalog needs structured product attributes rather than one generic size/color model. Candidate attributes to validate against actual stock:

| Product type | Candidate attributes |
|---|---|
| Golf balls | Brand, model, colour, number of balls/pack, construction, condition |
| Apparel | Size, colour, fit, gender/collection, material |
| Footwear | UK/US/EU size, width, colour, spikes/spikeless |
| Bags | Type, divider count, weight, pockets, stand/cart/travel |
| Gloves | Hand (left/right), size, material, weather use |
| Clubs (if stocked) | Club type, handedness, loft, shaft, flex, length, condition |
| Accessories | Accessory type, dimensions, compatibility, material |

These are candidate fields, not a final schema. Do not create variants for attributes that do not affect a sellable SKU. Confirm whether clubs and pre-owned equipment are part of launch assortment.

## 5. Business-model decisions requiring owner input
1. Is launch inventory new products only, or new plus pre-owned?
2. Are golf clubs included in launch assortment?
3. Is the catalog multi-brand, own-brand, or both?
4. Which Indian states/pincodes will be served at launch?
5. Will delivery be fully own-team, or will courier partners be used outside local zones?
6. Which payment gateway and payment methods are approved? Is COD allowed?
7. Who is the legal seller and what GST setup applies?
8. What are the approved return, exchange, cancellation, refund and warranty policies?
9. What is the support channel and grievance escalation owner?
10. What are budget, hosting preference and target launch date?

## 6. Product and UX recommendations for validation
- Make category and product search prominent.
- Use golf-specific filters rather than generic filters alone.
- Show exact size/handedness/shaft/pack options where relevant.
- Show stock availability and delivery estimate only when backed by serviceability/stock data.
- Display clear condition grading if pre-owned items are approved.
- Explain shipping, return and warranty terms before checkout.
- Use accessible labels, keyboard navigation, mobile layouts and meaningful image alt text.
- Keep customer checkout short, but show all costs before payment.
- Never fake reviews, discounts, stock scarcity or delivery promises.

## 7. Research limitations
This document records a regulatory and planning research baseline. It does not replace:
- A full legal review of the 2026 E-Commerce Amendment Rules and their commencement.
- GST/accounting advice on the actual seller, registration, product HSN/rates and invoice obligations.
- A current page-by-page audit of the four reference stores.
- Confirmation of product inventory, brands, suppliers, SKU list or business policies.

## 8. Official sources
1. Department of Consumer Affairs — Consumer Protection Acts and E-Commerce Rules: https://consumeraffairs.gov.in/pages/consumer-protection-acts
2. PIB — E-Commerce Amendment Rules 2026 announcement, 10 September 2026: https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2308759
3. CBIC — GST Invoice Rules: https://cbic-gst.gov.in/gst-invoice-rules.html
4. CBIC — GST Sectoral FAQs: https://cbic-gst.gov.in/hindi/sectoral-faq.html
5. MeitY — Digital Personal Data Protection Act, 2023: https://www.meity.gov.in/writereaddata/files/Digital%20Personal%20Data%20Protection%20Act%202023.pdf
6. MeitY — Digital Personal Data Protection Rules, 2025: https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa
