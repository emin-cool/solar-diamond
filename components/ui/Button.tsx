import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

const variants = {
  /** Primary commitment action — "Add to Bag", "Proceed to Checkout". */
  primary: "bg-navy text-gold hover:bg-navy/85",
  /** Companion action next to a primary — "Wishlist", "Consultation". */
  secondary:
    "border border-navy/20 text-navy hover:border-navy hover:bg-navy hover:text-ivory",
  /** Quiet, gold-keyed action used for pagination — "Load More". */
  outline: "border border-gold/60 text-gold hover:bg-gold hover:text-navy",
  /** Editorial inline link — "Learn Our Process →". */
  link: "h-auto border-b border-navy/25 px-0 pb-1 text-navy hover:border-gold hover:text-gold",
  /** Sits on top of hero imagery. */
  onImage:
    "border border-ivory/70 bg-ivory/10 text-ivory backdrop-blur-sm hover:bg-ivory hover:text-navy",
} as const;

const sizes = {
  sm: "h-9 px-5 text-[10px]",
  md: "h-12 px-8 text-[11px]",
  lg: "h-14 px-10 text-xs",
} as const;

interface BaseProps {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Shared action element. Renders a `<Link>` when `href` is supplied, otherwise
 * a `<button>`. All variants share the same uppercase, wide-tracked treatment —
 * the restraint is what makes them read as luxury rather than retail.
 */
export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  icon,
  iconPosition = "right",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-3 font-sans font-medium uppercase",
    "tracking-[0.18em] whitespace-nowrap transition-colors duration-300",
    "disabled:pointer-events-none disabled:opacity-40",
    sizes[size],
    variants[variant],
    fullWidth && "w-full",
    className,
  );

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span aria-hidden className="shrink-0">
          {icon}
        </span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span aria-hidden className="shrink-0">
          {icon}
        </span>
      )}
    </>
  );

  if (rest.href !== undefined) {
    const { href, ...anchorProps } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {content}
      </Link>
    );
  }

  const { href: _href, ...buttonProps } = rest as ButtonAsButton;
  void _href;
  return (
    <button className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
