import Link from "next/link";
import { cn } from "@/lib/utils";

const tones = {
  gold: "text-gold",
  navy: "text-navy",
  ivory: "text-ivory",
} as const;

const sizes = {
  sm: "text-sm tracking-[0.28em]",
  md: "text-lg tracking-[0.3em] sm:text-xl",
  lg: "text-2xl tracking-[0.32em] sm:text-3xl",
} as const;

export interface LogoProps {
  /** Omit to render as plain text (e.g. inside the footer). */
  href?: string;
  tone?: keyof typeof tones;
  size?: keyof typeof sizes;
  className?: string;
}

/**
 * The Solar Diamond wordmark. Stored in title case so screen readers and the
 * accessible name stay readable; the uppercase look is purely presentational.
 */
export function Logo({
  href = "/",
  tone = "gold",
  size = "md",
  className,
}: LogoProps) {
  const wordmark = (
    <span
      className={cn(
        "font-serif whitespace-nowrap uppercase",
        tones[tone],
        sizes[size],
        className,
      )}
    >
      Solar Diamond
    </span>
  );

  if (!href) return wordmark;

  return (
    <Link
      href={href}
      aria-label="Solar Diamond — home"
      className="transition-opacity duration-300 hover:opacity-70"
    >
      {wordmark}
    </Link>
  );
}
