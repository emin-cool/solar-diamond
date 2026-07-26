import type { Product } from "@/lib/types";

/**
 * Placeholder catalogue used until the Shopify Storefront API is wired up
 * (build-order step 8). Imagery is temporarily cropped from the Stitch design
 * comps in `design-reference/` and should be replaced with real product
 * photography before launch.
 */
export const MOCK_PRODUCTS: Product[] = [
  {
    id: "sd-001",
    slug: "helios-solitaire",
    name: "The Helios Solitaire",
    price: 4250,
    image: "/images/mock/helios-solitaire.png",
    specs: ["1.5 CT", "D COLOR", "VVS1"],
    certificate: "GIA",
  },
  {
    id: "sd-002",
    slug: "aura-oval-pave",
    name: "Aura Oval Pavé",
    price: 6800,
    image: "/images/mock/aura-oval-pave.png",
    specs: ["2.0 CT", "E COLOR", "IF"],
    certificate: "HRD",
  },
  {
    id: "sd-003",
    slug: "zenith-emerald",
    name: "Zenith Emerald",
    price: 5400,
    image: "/images/mock/zenith-emerald.png",
    specs: ["1.8 CT", "F COLOR", "VS1"],
    certificate: "GIA",
  },
  {
    id: "sd-004",
    slug: "celestial-pear",
    name: "Celestial Pear",
    price: 3950,
    image: "/images/mock/celestial-pear.png",
    specs: ["1.2 CT", "D COLOR", "VVS2"],
    certificate: "HRD",
  },
  {
    id: "sd-005",
    slug: "lumina-cushion",
    name: "Lumina Cushion",
    price: 8200,
    image: "/images/mock/lumina-cushion.png",
    specs: ["2.5 CT", "G COLOR", "VVS1"],
    certificate: "GIA",
  },
  {
    id: "sd-006",
    slug: "radiant-bezel",
    name: "Radiant Bezel",
    price: 5100,
    image: "/images/mock/radiant-bezel.png",
    specs: ["1.7 CT", "E COLOR", "VS2"],
    certificate: "GIA",
  },
];
