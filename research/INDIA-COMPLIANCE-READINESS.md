# India Compliance and Operational Readiness Notes

**Status:** Research baseline only; obtain qualified legal, tax and privacy review before launch.

## 1. Consumer Protection (E-Commerce) Rules — 2026 amendment

The Department of Consumer Affairs Gazette notification G.S.R. 789(E), dated 9 September 2026, says the Consumer Protection (E-Commerce) (Amendment) Rules, 2026 take effect on **1 January 2027**. The official PIB release is dated 10 September 2026.

Official sources:
- Gazette notification: https://consumeraffairs.gov.in/public/upload/files/E%20Commerce%20Amendment%20Rules%202026_1789128659.pdf
- PIB summary: https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2308759

The Gazette text includes:
- Clear and prominent legal name, principal geographic address, website details, customer-care and grievance-officer contact information.
- Grievance officer acknowledgement within 48 hours, providing a copy of the complaint as recorded, and redress within one month.
- Imported-goods importer identification and country-of-origin disclosure requirements in the specified context.
- Prohibition on misleading users by manipulating search results or indexes having regard to their query.
- Additional provisions in the full notification covering ranking, sponsored listings, price reductions and dark-pattern controls.

Implementation planning:
- Add a business identity/contact content module.
- Add a grievance intake, acknowledgement, escalation and closure log.
- Preserve audit evidence for search ranking and sponsored placement if used.
- Record price history if displaying price reductions; have counsel review exact prior-price calculation and presentation.
- Record importer and country-of-origin data where applicable.
- Review all checkout and merchandising flows for prohibited dark patterns.
- Before 1 January 2027, complete legal review and readiness testing for applicable provisions.

Do not assume every provision applies identically to this single-vendor inventory model; counsel should assess exact applicability and final notification wording.

## 2. GST invoice requirements

CBIC Rule 46 includes supplier name/address/GSTIN, unique consecutive invoice serial number for a financial year, date, recipient details where applicable, HSN, goods description, quantity/UQC, taxable value and tax particulars among invoice fields.

Official sources:
- CBIC invoice rules: https://cbic-gst.gov.in/gst-invoice-rules.html
- CBIC Tax Information Portal Rule 46: https://taxinformation.cbic.gov.in/content-page/explore-rules/1000136/1000001

System implications:
- Keep seller legal identity and GSTIN as approved configuration.
- Maintain HSN and tax category as finance-owned master data.
- Store invoice number series and financial-year rules with uniqueness controls.
- Keep order snapshot and invoice document immutable; issue credit/debit notes using approved process.
- Determine place of supply, intra/inter-state tax split, e-invoice applicability and delivery-address details with a GST advisor.
- Do not assume rates or HSN codes for golf goods.

## 3. DPDP Act and Rules commencement

The MeitY Gazette notification G.S.R. 843(E), 13 November 2025, stages commencement of DPDP Act provisions. The official DPDP Rules, 2025 notification G.S.R. 846(E), 13 November 2025, also stages commencement:
- Rules 1, 2 and 17–21 commence on publication.
- Rule 4 commences one year after publication.
- Rules 3, 5–16, 22 and 23 commence eighteen months after publication.

Official sources:
- DPDP Act commencement notification: https://www.meity.gov.in/static/uploads/2025/11/c56ceae6c383460ca69577428d36828b.pdf
- DPDP Rules, 2025 Gazette: https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf
- PIB explanation: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2190014

Planning implications:
- Maintain a data inventory: contact details, addresses, order history, support messages, staff identity and delivery proof.
- Define purposes, notice text, lawful processing basis, retention and deletion workflow.
- Limit staff access by role and record exports.
- Define processor/vendor agreements and breach escalation.
- Do not collect sensitive or unnecessary delivery proof.
- Confirm exact obligations and dates with privacy counsel; the staged dates must be checked against any later Gazette updates.

## 4. Compliance sign-off checklist
- [ ] Legal seller identity and public contact details approved.
- [ ] Grievance officer and complaint workflow owner assigned.
- [ ] E-Commerce Amendment 2026 applicability and 1 Jan 2027 readiness reviewed.
- [ ] Imported-product country-of-origin/importer data source defined where applicable.
- [ ] GST registration, HSN, rates, invoice format and e-invoice applicability reviewed by accountant.
- [ ] DPDP commencement and applicable obligations mapped to implementation milestones.
- [ ] Privacy notice, retention, deletion and rights-request process approved.
- [ ] Vendor/processor and security incident processes reviewed.
- [ ] Returns, cancellation, refund, warranty and shipping terms approved.
