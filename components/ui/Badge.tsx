import { BadgeCheck } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { Certificate } from "@/lib/types";

const variants = {
  /** Sits on top of product imagery — product cards, gallery slides. */
  overlay: "bg-ivory/95 text-navy shadow-[0_1px_6px_rgba(18,20,28,0.08)]",
  /** Filled chip for darker surfaces. */
  solid: "bg-navy text-champagne",
  /** Chrome-free treatment used in the product detail spec block. */
  inline: "text-navy",
  /** Hairline outline, for filter and spec chips. */
  outline: "border border-navy/15 text-navy/70",
} as const;

export interface BadgeProps {
  children: ReactNode;
  variant?: keyof typeof variants;
  /** Pass `null` to suppress; defaults to the certification seal on `inline`. */
  icon?: ReactNode | null;
  className?: string;
}

/**
 * Small uppercase label. Its primary job is the GIA / HRD certification mark
 * that appears on every product surface — certification transparency is a
 * core trust signal for this business, so the badge is deliberately plain
 * and legible rather than decorative.
 */
export function Badge({
  children,
  variant = "overlay",
  icon,
  className,
}: BadgeProps) {
  const resolvedIcon =
    icon === undefined && variant === "inline" ? (
      <BadgeCheck className="size-4 text-gold" strokeWidth={1.5} />
    ) : (
      icon
    );

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1",
        "font-sans text-[10px] font-medium tracking-[0.16em] uppercase",
        variants[variant],
        variant === "inline" && "px-0",
        className,
      )}
    >
      {resolvedIcon}
      {children}
    </span>
  );
}

export interface CertificateBadgeProps {
  certificate: Certificate;
  variant?: BadgeProps["variant"];
  /** Spell it out ("GIA Certified") instead of just the mark. */
  verbose?: boolean;
  className?: string;
}

/** Convenience wrapper so callers pass a `Certificate` rather than free text. */
export function CertificateBadge({
  certificate,
  variant = "overlay",
  verbose = false,
  className,
}: CertificateBadgeProps) {
  return (
    <Badge variant={variant} className={className}>
      {verbose ? `${certificate} Certified` : certificate}
    </Badge>
  );
}
