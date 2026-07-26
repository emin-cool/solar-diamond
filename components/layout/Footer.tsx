import Link from "next/link";
// lucide v1 dropped brand marks, so the comps' generic camera / @ / share
// glyphs are used instead — which is what the Stitch footer shows anyway.
import { AtSign, Camera, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { Logo } from "@/components/ui/Logo";
import type { FooterColumn } from "@/lib/types";
import { cn } from "@/lib/utils";

const DEFAULT_COLUMNS: FooterColumn[] = [
  {
    title: "The Story",
    links: [
      { label: "The Diamond Story", href: "/heritage" },
      { label: "Ethical Sourcing", href: "/sourcing" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Journal", href: "/journal" },
    ],
  },
  {
    title: "Assistance",
    links: [
      { label: "Bespoke Consultations", href: "/bespoke" },
      { label: "Shipping & Returns", href: "/shipping" },
      { label: "Care Guide", href: "/care" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Certification", href: "/certification" },
      { label: "Store Locator", href: "/stores" },
    ],
  },
];

const DEFAULT_SOCIALS: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/ssolar_diamond",
    icon: <Camera className="size-4" strokeWidth={1.5} />,
  },
  {
    label: "WhatsApp concierge",
    href: "https://wa.me/",
    icon: <MessageCircle className="size-4" strokeWidth={1.5} />,
  },
  {
    label: "Email the concierge",
    href: "mailto:concierge@solardiamond.com",
    icon: <AtSign className="size-4" strokeWidth={1.5} />,
  },
];

export interface FooterProps {
  columns?: FooterColumn[];
  tagline?: string;
  socials?: typeof DEFAULT_SOCIALS;
  className?: string;
}

export function Footer({
  columns = DEFAULT_COLUMNS,
  tagline = "Sustainably crafted brilliance for a conscious future.",
  socials = DEFAULT_SOCIALS,
  className,
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={cn("mt-auto bg-champagne/35", className)}>
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        {/* The brand column gets extra width: the wordmark's wide tracking
            makes it far wider than a plain 1fr column at the lg breakpoint. */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-8">
          {/* Brand block */}
          <div className="lg:pr-8">
            <Logo href="" tone="navy" size="sm" />
            <p className="mt-5 max-w-xs font-sans text-sm leading-relaxed text-navy/65">
              {tagline}
            </p>
            <div className="mt-6 flex items-center gap-4">
              {socials.map((social) => {
                const external = social.href.startsWith("http");
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="text-navy/70 transition-colors duration-300 hover:text-gold"
                  >
                    {social.icon}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="font-sans text-[11px] font-medium tracking-[0.2em] text-navy/50 uppercase">
                {column.title}
              </h2>
              <ul className="mt-5 space-y-3.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-navy/80 transition-colors duration-300 hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 border-t border-navy/10 pt-8">
          {/* Built as one string: JSX drops the space around a wrapped
              expression, which silently glued the year to the brand name. */}
          <p className="font-sans text-[10px] tracking-[0.16em] text-navy/50 uppercase">
            {`© ${year} Solar Diamond. All rights reserved. GIA & HRD certified.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
