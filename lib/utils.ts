import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names, resolving conflicts so that later classes win.
 * Used by shared components that accept a `className` override.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a price for display. Luxury pricing is always shown whole — no cents —
 * so a $12,400 ring reads as "$12,400" rather than "$12,400.00".
 */
export function formatPrice(amount: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
