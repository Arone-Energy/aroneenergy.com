# aroneenergy.com (new site)

The new Arone Energy / LUMINAR website. Vite + React + Tailwind, styled with the
same brand system as the aronetech.com landing app (`apps/landing` in QviewAI-Deploy).

The old static site in `../public` is untouched and keeps serving until this one is approved.

## Run

```bash
cd web
npm install
npm run dev       # http://localhost:5174
npm run build     # outputs dist/
npm run preview   # serves dist/ on http://localhost:4174
```

Docker (same pattern as apps/landing: node build stage, nginx:alpine with SPA fallback):

```bash
docker build -t aroneenergy-web .
docker run -p 8080:80 aroneenergy-web
```

## Where things live

- `src/data/products.js`: all product data (names, specs, bullets, WhatsApp messages).
  Each product has `specsConfirmed`. When false, the card shows its `placeholderNote`.
- `src/data/contact.js`: WhatsApp number, email, Instagram, company name, link builders.
- `src/sections/`: one file per home page section (Hero, Why, Products, Use cases, How it works, Order).
- `src/components/`: nav, footer, logo, section heading.
- `src/pages/`: routes (`/` and the 404). Add new pages in `src/App.jsx`.
- `src/assets/images/`: optimized WebP images. Do not add the old videos from `../public/video`.
- `public/og/luminar-max-og.jpg`: social share image (1200x675).
- `tailwind.config.js`: mirrors the landing app theme. Change tokens there first, then copy here.

## Before launch

- [ ] Owner confirms LUMINAR PRO specs (currently "Specifications coming soon"), then fill
      `powerRating`, `batteryCapacity`, `specLine`, `specHighlights` and set `specsConfirmed: true`.
- [ ] Owner confirms LUMINAR MEGAPACK specs (5 to 10kW, up to 40kWh and its bullets, copied from
      aronetech.com/luminar), then set `specsConfirmed: true` and clear `placeholderNote`.
- [ ] Owner confirms LUMINAR MAX bullets (3kVA / 2,000Wh are confirmed; bullets came from the old
      /luminar MAX tiers).
- [ ] Confirm the claims reused from aronetech.com/luminar (LiFePO4, 5 to 7 year lifespan,
      "We confirm within 24 hours", "We deliver across Nigeria").
- [ ] Confirm `info@aroneenergy.com` is the right enquiry inbox.
- [ ] Deploy the container and point aroneenergy.com / www.aroneenergy.com DNS and nginx at it
      (cut over from the old static `public/` site).
- [ ] Recreate `robots.txt` / `sitemap.xml` in `web/public/` if still wanted (the old ones live in `../public`).
- [ ] Remove the /luminar page from aronetech.com (or redirect it to https://www.aroneenergy.com/).
