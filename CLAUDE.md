# Solar Diamond — Project Context

## What This Is
An international luxury diamond & fine jewelry e-commerce site called **Solar Diamond**
(Instagram: @ssolar_diamond — "Gold & Diamond Jewellery from 0.001 to ∞ carat, HRD & GIA
Certified, Worldwide Delivery"). The brand concept is inspired by Tiffany & Co-level luxury
UX and merchandising strategy, but with a **fully original brand identity** — do not use
Tiffany Blue, Tiffany naming conventions, Tiffany packaging/trade dress, or any Tiffany
trademarked elements. The brand's own visual language is a "sun/light" theme — brilliance,
clarity, radiance — expressed through warm gold tones rather than Tiffany's cool blue.

**IMPORTANT:** The brand name is exactly "**Solar Diamond**" everywhere in the codebase —
in the logo, page titles, metadata, copy, component names where relevant. Never substitute
with any other name.

## Brand Identity (locked — do not deviate without asking)
- **Primary (gold accent):** `#C9A227`
- **Background (ivory):** `#FAF6EF`
- **Contrast (deep navy/near-black):** `#12141C`
- **Accent highlight (champagne):** `#E8D9B5`
- **Headline font:** Playfair Display (serif)
- **Body font:** Inter (sans-serif)
- **Design feel:** quiet luxury, generous white space, editorial photography-forward,
  minimal UI chrome, thin dividers instead of heavy borders, restrained micro-interactions.

## Tech Stack
- Next.js (App Router)
- Tailwind CSS — brand colors/fonts should be defined in `tailwind.config` as named
  tokens (`gold`, `ivory`, `navy`, `champagne`), not hardcoded hex values in components
- Target backend: Shopify Plus, **headless** via Storefront API (so the custom UI is
  never constrained by a stock Shopify theme). Build frontend first against mock data,
  wire up Storefront API once page structure is stable.
- Deployment target: Vercel

## Design Reference
All page designs were built in Google Stitch and exported to `design-reference/` as
desktop + mobile PNGs. Treat these as the visual source of truth for layout, spacing,
component structure, and copy tone — match them closely rather than inventing new
patterns. Files:
- `home-desktop.png` / `home-mobile.png`
- `collection-desktop.png` / `collection-mobile.png`
- `product-detail-desktop.png` / `product-detail-mobile.png`
- `cart-desktop.png` / `cart-mobile.png`
- `checkout-desktop.png` / `checkout-mobile.png`

## Page/Feature Scope
1. **Homepage** — hero, trust bar (GIA/HRD, Worldwide Delivery, Insured Shipping),
   curated collections grid, brand philosophy section, certification transparency
   section, Instagram strip, newsletter signup
2. **Collection/Listing page** — faceted filters (carat, cut, color, clarity, metal
   purity, metal color, certificate), sort, product grid with cert badges
3. **Product Detail page** — image gallery w/ 360° toggle, metal color selector, ring
   size selector, personal engraving module (text + font style + live preview),
   specs table, certificate link, accordion sections, related products
4. **Cart** — item list w/ engraving shown, gift options (gift wrap style selector +
   gift note), order summary, subtle bank-transfer-for-large-orders note
5. **Checkout** — contact, shipping (international country selector), delivery method
   (Standard Insured vs White-Glove Insured), payment (Credit Card tab / Bank Transfer
   tab with 2% instant discount + wire instructions flow + concierge note for large
   international transfers), order notes

## Build Order (follow this sequence, don't jump ahead)
1. Project scaffold: Next.js + Tailwind config with brand tokens + fonts
2. Shared components: Header, Footer, Button, Badge (GIA/HRD), ProductCard
3. Homepage (static/mock data)
4. Collection page (static/mock data, working filter UI even if not yet wired to
   real filtering logic)
5. Product Detail page (static/mock data)
6. Cart page (local/mock state)
7. Checkout page (UI only, no real payment processing yet)
8. Shopify Storefront API integration (products, cart, checkout handoff)

## Notes / Reminders
- Mobile-first: most traffic will be mobile, especially for product detail pages —
  build and test mobile layouts with the same care as desktop.
- Every price/high-value-cart-related decision (bank transfer discount, white-glove
  shipping, card limit note) is a deliberate trust-building feature for a
  high-average-order-value luxury business — preserve this copy/logic, don't simplify
  it away.
- Do not introduce Tiffany-associated colors, naming, or packaging references at any
  point in implementation, including in placeholder/mock content.
