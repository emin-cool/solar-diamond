import type { CartLineItem } from "@/lib/types";

/** Seed data for the cart page's local mock state (build-order step 6). */
export const MOCK_CART_ITEMS: CartLineItem[] = [
  {
    id: "cart-1",
    productSlug: "helios-solitaire",
    name: "The Helios Solitaire",
    image: "/images/mock/helios-solitaire.png",
    price: 4250,
    specs: ["1.50 CT", "Round", "D", "VVS1"],
    metal: "18K Yellow Gold",
    size: "6",
    engraving: "A & L Forever",
    quantity: 1,
  },
  {
    id: "cart-2",
    productSlug: "aura-oval-pave",
    name: "Aura Oval Pavé",
    image: "/images/mock/aura-oval-pave.png",
    price: 6800,
    specs: ["2.00 CT", "Oval", "E", "IF"],
    metal: "Platinum",
    size: "6.5",
    quantity: 1,
  },
];
