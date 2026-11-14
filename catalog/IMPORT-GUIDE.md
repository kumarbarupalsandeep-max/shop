# Catalog CSV import template — draft only

This file defines the first import contract. It does not contain sample or real product records.

## File
- Template: import-template.csv
- Encoding: UTF-8
- Delimiter: comma
- One row represents one purchasable product variant.
- Repeated product fields across rows are grouped by product_slug.
- A product with multiple sizes/colours/pack options has one row per distinct SKU.

## Field rules
| Field | Rule |
|---|---|
| product_title | Required; reviewed customer-facing title |
| product_slug | Required; lowercase URL-safe unique slug |
| category_slug | Required; must match an approved active category |
| brand_slug | Optional until brand records are approved |
| short_description | Optional; no unsupported claims |
| description | Verified supplier/manufacturer content rewritten as original copy |
| attributes_json | JSON object using approved attribute keys only |
| variant_sku | Required; unique, immutable and never reused |
| barcode | Optional; GTIN/barcode as supplied and verified |
| variant_options_json | JSON object using category-approved variant drivers |
| weight_grams | Optional positive integer; supplier-verified |
| price_amount_paise | Required before publication; integer paise, finance-approved |
| currency | INR only for the current India launch baseline |
| image_storage_key | Optional until approved object storage integration exists |
| image_alt_text | Required when an image is supplied; accurate and concise |
| content_source | Supplier/manufacturer source or internal approval reference |

## Import safety rules
1. Import must first run in dry-run mode and return row-level errors.
2. Reject duplicate SKUs and duplicate product slugs; never silently overwrite existing products.
3. Reject unknown/inactive category and brand slugs.
4. Reject invalid JSON, unsupported attribute keys and invalid option combinations.
5. Reject non-integer, negative or floating-point paise values.
6. Do not publish imported products. All records begin in draft/review.
7. Do not activate stock or set live availability from this file.
8. Do not accept unlicensed images, competitor copy, guessed HSN/GST, size conversions or unsupported product claims.
9. A successful dry run is not an approval to publish.
10. Keep a source file hash, import actor, timestamp and result report when import execution is implemented.

## Current implementation boundary
The CSV template and rules are documentation only. The import API, transactional batch writer, duplicate handling tests, admin authentication/RBAC and audit trail are not implemented yet. Do not upload real supplier data until the import workflow and owner approvals are complete.
