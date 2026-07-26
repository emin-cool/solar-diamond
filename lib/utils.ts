import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names, resolving conflicts so that later classes win.
 * Used by shared components that accept a `className` override.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
