# Solar Diamond

International luxury diamond & fine jewellery e-commerce storefront.
Next.js (App Router) + TypeScript + Tailwind CSS v4, targeting a headless
Shopify Plus backend via the Storefront API.

See [CLAUDE.md](./CLAUDE.md) for brand identity, scope and build order.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

| Path                | Purpose                                                    |
| ------------------- | ---------------------------------------------------------- |
| `app/`              | Route segments, layouts, `globals.css` design tokens       |
| `components/`       | Shared UI components (Header, Footer, ProductCard, …)      |
| `lib/`              | Helpers, mock data, future Storefront API client           |
| `public/images/`    | Static imagery                                             |
| `design-reference/` | Desktop + mobile PNG comps (visual source of truth)        |

## Design tokens

Tailwind v4 declares its theme in CSS, so the brand tokens live in the
`@theme` block of [`app/globals.css`](./app/globals.css):

| Token       | Value     | Utilities                             |
| ----------- | --------- | ------------------------------------- |
| `gold`      | `#C9A227` | `bg-gold`, `text-gold`, `border-gold` |
| `ivory`     | `#FAF6EF` | `bg-ivory`, `text-ivory`, …           |
| `navy`      | `#12141C` | `bg-navy`, `text-navy`, …             |
| `champagne` | `#E8D9B5` | `bg-champagne`, `text-champagne`, …   |

Fonts are loaded with `next/font/google` in `app/layout.tsx` and exposed as
`font-serif` (Playfair Display, headlines) and `font-sans` (Inter, body).

Never hardcode brand hex values in components — always use the tokens.
