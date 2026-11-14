# Golf Catalog, Attributes, Variants and SKU Standard

**Phase:** 01 — Planning and Architecture  
**Status:** Draft for business and inventory-owner approval  
**Scope basis:** The currently confirmed launch product groups are golf balls, apparel, footwear, bags and accessories. Clubs and pre-owned items remain unconfirmed.

## 1. Catalog principles

1. Product = the shared product description; Variant = a specific purchasable SKU.
2. Create variants only when the customer can select a different purchasable option or inventory is tracked separately.
3. Do not create a separate SKU for purely descriptive content such as a marketing tag.
4. Every SKU must be unique, immutable after first use, and never recycled after archival.
5. Store prices, tax classification, HSN and inventory separately from the SKU code.
6. Use controlled attribute definitions and allowed values; avoid arbitrary free-text values for filterable fields.
7. Keep customer-facing attribute labels separate from internal keys.
8. Product media must include alt text and sort order. Do not upload competitor images or copied product descriptions.
9. Product data must identify its source and be reviewed before publication.
10. A product cannot be published without approved price, sellable SKU, stock policy, essential product details and required disclosures.

## 2. Proposed initial category tree

| Parent | Category | Initial status |
|---|---|---|
| Golf Equipment | Golf Balls | Confirmed group |
| Golf Apparel | Men's Apparel | Proposed subcategory |
| Golf Apparel | Women's Apparel | Proposed subcategory |
| Golf Apparel | Junior Apparel | Optional; confirm stock |
| Golf Footwear | Golf Shoes | Confirmed group |
| Golf Bags | Cart Bags | Candidate |
| Golf Bags | Stand Bags | Candidate |
| Golf Bags | Carry Bags | Candidate |
| Golf Bags | Travel Covers | Candidate |
| Accessories | Gloves | Candidate |
| Accessories | Headwear | Candidate |
| Accessories | Towels | Candidate |
| Accessories | Umbrellas | Candidate |
| Accessories | Tees and Ball Markers | Candidate |
| Accessories | Headcovers | Candidate |
| Accessories | Training Aids | Candidate |
| Accessories | Rangefinders / Electronics | Candidate; verify stock and warranty |
| Golf Clubs | Drivers / Irons / Wedges / Putters / Sets | Not confirmed for P0 |

Category names and hierarchy are proposed; do not publish empty categories simply because they appear here.

## 3. Category-specific attribute matrix

### 3.1 Golf balls
- Required candidate fields: brand, model, pack quantity, colour (if selectable), product description, construction/technology (if supplier provides), country of origin/importer data where applicable.
- Variant drivers: pack configuration and colour only when separate inventory/SKU exists.
- Filters: brand, price, pack quantity, colour, feel/compression only when reliably supplied.
- Avoid inventing compression, spin or construction claims.

### 3.2 Apparel
- Required candidate fields: apparel type, brand, product title, fabric/material, care instructions, fit, gender/collection only when applicable.
- Variant drivers: size and colour; add fit only if separately stocked.
- Size chart: supplier/manufacturer source and units must be recorded.
- Filters: category, brand, size, colour, fit, price, material.
- Do not assume universal S/M/L body measurements across brands.

### 3.3 Footwear
- Required candidate fields: shoe type, brand, model, upper/material, sole type, closure, care instructions, size system.
- Variant drivers: size, width and colour only where separately stocked.
- Size system: explicitly label UK/India, US or EU; do not silently convert.
- Filters: size, width, spikes/spikeless, colour, brand, price.
- Confirm whether shoe size availability is per pair and whether half sizes are stocked.

### 3.4 Bags
- Required candidate fields: bag type, material, dimensions, weight, carry/cart/stand design, divider count, pocket count, rain hood included, strap details.
- Variant drivers: colour and model where separately stocked.
- Filters: type, brand, colour, divider count, weight range, price.
- Use supplier specifications; do not infer divider count or dimensions from photos.

### 3.5 Accessories
- Common fields: accessory type, brand, material, dimensions, compatibility, care/safety instructions where relevant.
- Gloves: hand (left/right or left-hand golfer/right-hand golfer must be explicitly defined), size, material, weather/use category.
- Headwear: size/adjustability, colour, material.
- Umbrellas: canopy size, opening type, shaft/material, colour.
- Towels: dimensions, attachment type, material.
- Tees/markers: pack quantity, length/size, material.
- Headcovers: compatible club type, dimensions/fit, material.
- Training aids: intended use, skill level only if supplier-supported, included components.
- Electronics/rangefinders: model, measurement features, battery, water-resistance rating if documented, warranty and support details. Confirm legal/import and warranty handling before listing.

### 3.6 Clubs — optional scope, not approved
If added, candidate attributes may include club type, handedness, loft, lie, shaft model/material, shaft flex, length, grip, head/loft configuration and condition. A club set needs per-club composition and included accessories. Each materially different configuration may be a separate SKU. Require golf-product specialist validation; do not launch with guessed specifications.

## 4. Attribute data dictionary draft

| Attribute key | Data type | Example | Filterable? |
|---|---|---|---|
| brand_id | Reference | brand record | Yes |
| colour_id | Reference | navy | Yes |
| size_label | String/reference | M, UK 9 | Yes |
| size_system | Enum | UK, US, EU | Yes |
| hand_orientation | Enum | right-handed golfer / left-handed golfer | Yes |
| pack_quantity | Integer | 12 | Yes |
| shoe_width | Controlled string | standard, wide | Yes |
| spike_type | Enum | spiked, spikeless | Yes |
| divider_count | Integer | 14 | Yes |
| pocket_count | Integer | 8 | Optional |
| material | Controlled string | synthetic leather | Optional |
| dimensions | Structured numeric + unit | 90 × 30 × 25 cm | Optional |
| weight | Numeric + unit | 2.4 kg | Optional |
| compatibility | Controlled reference/text | selected club type | Optional |
| warranty_terms | Text/reference | supplier policy reference | No |
| country_of_origin | Country reference | supplier declared | Optional |
| hsn_code | Controlled code | accountant-approved code | No |
| tax_category_id | Reference | approved tax configuration | No |

Values above illustrate data types only; they are not real product specifications or tax determinations.

## 5. SKU proposal

Suggested human-readable pattern:
`GLF-{CATEGORY}-{SEQUENCE}-{VARIANT}`

Examples (illustrative only):
- `GLF-BAL-000001-01`
- `GLF-APP-000014-03`
- `GLF-FTW-000008-02`

Rules:
- Category abbreviations are controlled in a registry (BAL, APP, FTW, BAG, ACC; optional CLB).
- Sequence is generated centrally and never reused.
- Variant suffix is stable and assigned by the system.
- Do not encode price, discount, tax rate, supplier, size or colour into the SKU.
- SKU is not a substitute for barcode/GTIN; store manufacturer barcode separately when available.
- Enforce a database unique constraint and reject duplicate SKU imports.
- Changing a product title, category label, size chart or price must not silently change an existing SKU.
- Archived SKUs remain reserved for historical orders, returns and audit.

This pattern is a recommendation; confirm with inventory/accounting operations before adopting.

## 6. Product and variant data model proposal

### Product
- id (UUID), slug (unique), title, short_description, long_description
- category_id, optional brand_id
- status (draft, review, published, archived)
- product_type (physical)
- SEO fields, created_by, updated_by, timestamps
- product-level attribute values and content source

### ProductVariant
- id (UUID), product_id, sku (unique), barcode (nullable)
- option combination (structured attributes)
- variant status, weight/dimensions for shipping
- price reference or price record; do not store floating-point money
- timestamps and actor audit fields

### Related records
- ProductMedia: storage key, alt text, sort order, media type
- AttributeDefinition: key, label, data type, unit, filterable flag, allowed values
- VariantAttributeValue: variant, attribute, normalized value
- InventoryBalance: SKU/location, on-hand, reserved, available (derived or transactionally maintained)
- StockMovement: SKU, quantity delta, reason, source reference, actor, timestamp
- PriceRecord: amount in paise, currency INR, effective period, approval/audit reference

## 7. Product publication checklist
- [ ] Category and product title reviewed.
- [ ] Supplier/manufacturer data and source recorded.
- [ ] Correct variant options and SKU uniqueness checked.
- [ ] Product images are authorized, accurate and have alt text.
- [ ] Size chart and units verified where applicable.
- [ ] Price, tax classification and HSN approved by finance/accounting.
- [ ] Stock policy and initial stock entered by authorized staff.
- [ ] Warranty, origin/importer and required disclosures verified where applicable.
- [ ] Product description contains no unsupported performance/health/safety claims.
- [ ] Mobile product page and variant selection tested.

## 8. Open questions for inventory owner
1. Actual brands, suppliers and first 20–50 sellable products?
2. Are clubs/package sets in the initial assortment?
3. Are gloves included in the initial accessories range?
4. Which apparel size charts and footwear size systems will suppliers provide?
5. Will products be stocked in one store/warehouse or multiple stock locations?
6. Do suppliers provide GTIN/barcodes, HSN and country-of-origin data?
7. Are any products made-to-order or personalized?
8. Is pre-owned excluded from P0? Current recommendation: yes, pending approval.

## 9. Acceptance checks for this deliverable
- Category tree mapped to actual sellable inventory.
- Each category has required, optional and variant-driving attributes approved.
- Example products are tested for correct variant/SKU behavior.
- SKU generation and import duplicate handling approved.
- HSN/tax data owner identified; no rates guessed.
- Catalog Manager and Inventory Manager sign off.
