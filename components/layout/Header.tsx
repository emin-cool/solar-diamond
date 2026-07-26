"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import type { NavItem } from "@/lib/types";
import { cn } from "@/lib/utils";

const DEFAULT_NAV: NavItem[] = [
  { label: "Collections", href: "/collections" },
  { label: "Bespoke", href: "/bespoke" },
  { label: "Heritage", href: "/heritage" },
  { label: "Sustainability", href: "/sustainability" },
];

export interface HeaderProps {
  navItems?: NavItem[];
  cartCount?: number;
  className?: string;
}

export function Header({
  navItems = DEFAULT_NAV,
  cartCount = 0,
  className,
}: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  // While the drawer is open: freeze the page behind it and let Escape close it.
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={cn("sticky top-0 z-50", className)}>
      {/* The blur lives on this inner bar, never on <header> itself: a
          backdrop-filter establishes a containing block for fixed-position
          descendants, which would trap the mobile drawer inside the 64px
          header instead of letting it cover the viewport. */}
      <div className="border-b border-navy/10 bg-ivory/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-12">
          {/* Mobile: drawer toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="-ml-2 p-2 text-navy transition-colors hover:text-gold lg:hidden"
          >
            <Menu className="size-5" strokeWidth={1.5} />
          </button>

          {/* Wordmark — centred on mobile, leading on desktop */}
          <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
            <Logo size="md" />
          </div>

          {/* Desktop navigation */}
          <nav
            aria-label="Primary"
            className="hidden lg:ml-14 lg:flex lg:flex-1 lg:items-center lg:gap-10"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "border-b pb-1 font-sans text-[11px] tracking-[0.18em] uppercase transition-colors duration-300",
                  isActive(item.href)
                    ? "border-gold text-gold"
                    : "border-transparent text-navy hover:text-gold",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Utility icons */}
          <div className="flex items-center gap-1 sm:gap-2">
            <IconLink
              href="/search"
              label="Search"
              className="hidden sm:inline-flex"
            >
              <Search className="size-5" strokeWidth={1.5} />
            </IconLink>
            <IconLink
              href="/wishlist"
              label="Wishlist"
              className="hidden sm:inline-flex"
            >
              <Heart className="size-5" strokeWidth={1.5} />
            </IconLink>
            <IconLink
              href="/account"
              label="Account"
              className="hidden sm:inline-flex"
            >
              <User className="size-5" strokeWidth={1.5} />
            </IconLink>
            <IconLink
              href="/cart"
              label={`Bag (${cartCount})`}
              className="-mr-2"
            >
              <ShoppingBag className="size-5" strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-gold font-sans text-[9px] font-medium text-navy">
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              )}
            </IconLink>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          menuOpen ? "visible" : "invisible",
        )}
        aria-hidden={!menuOpen}
      >
        <div
          onClick={closeMenu}
          className={cn(
            "absolute inset-0 bg-navy/30 transition-opacity duration-300",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "absolute inset-y-0 left-0 flex w-[82%] max-w-sm flex-col bg-ivory transition-transform duration-300 ease-out",
            menuOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex h-16 items-center justify-between border-b border-navy/10 px-5">
            <Logo size="sm" />
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="-mr-2 p-2 text-navy transition-colors hover:text-gold"
            >
              <X className="size-5" strokeWidth={1.5} />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex flex-col px-5 py-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={cn(
                  "border-b border-navy/8 py-4 font-serif text-2xl transition-colors",
                  isActive(item.href) ? "text-gold" : "text-navy",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex items-center gap-6 border-t border-navy/10 px-5 py-6">
            <IconLink href="/search" label="Search" onClick={closeMenu}>
              <Search className="size-5" strokeWidth={1.5} />
            </IconLink>
            <IconLink href="/wishlist" label="Wishlist" onClick={closeMenu}>
              <Heart className="size-5" strokeWidth={1.5} />
            </IconLink>
            <IconLink href="/account" label="Account" onClick={closeMenu}>
              <User className="size-5" strokeWidth={1.5} />
            </IconLink>
          </div>
        </div>
      </div>
    </header>
  );
}

function IconLink({
  href,
  label,
  className,
  onClick,
  children,
}: {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      onClick={onClick}
      className={cn(
        "relative inline-flex p-2 text-navy transition-colors duration-300 hover:text-gold",
        className,
      )}
    >
      {children}
    </Link>
  );
}
