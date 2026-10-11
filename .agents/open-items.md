# aroneenergy.com: open items (as of 2026-10-11)

This repo only. The QView AI platform and aronetech.com keep their own list in
the QviewAI-Deploy repo (`.agents/context.md`, section 7); do not mix them.

## Content waiting on the team
- Orders page: its address, so each product card can link straight to the
  product's order page (WhatsApp ordering stays as a second option).
- Battery figures: the site shows PRO 500Wh to 1kWh and MAX 2,000Wh; the
  product sheet says PRO 1,000Wh and MAX 1,500Wh ("3.0" models). Confirm which
  are current before adding the sheet's details (what each powers, backup time,
  1-year warranty, charge time, next-day delivery).
- Social links: LinkedIn and any other Arone Energy accounts. Each one added to
  `SOCIAL_LINKS` in `web/src/data/contact.js` appears as a footer row.
- Testimonials: real quotes with permission (`web/src/data/testimonials.js`;
  the section stays hidden until it has one).
- Use-case photos in everyday Nigerian settings (barber shop, tailor, family),
  and replacements for the two placeholder images mentioned in the review.
- Second shop owner's name, if they agree to be named.

## Checks
- "Built in Nigeria" copy says LUMINAR is assembled and tested in Nsukka with
  local support: confirm it is accurate.
- After the next deploy, confirm the cache headers and the clean-up `sw.js` are
  live on www.aroneenergy.com.
