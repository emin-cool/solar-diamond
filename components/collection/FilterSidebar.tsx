"use client";

import {
  BadgeCheck,
  ChevronDown,
  CircleDot,
  Eye,
  Gem,
  Palette,
  Shapes,
  Tag,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { FILTER_FACETS } from "@/lib/filters";
import { cn } from "@/lib/utils";

const FACET_ICONS: Record<string, ReactNode> = {
  "carat-weight": <Gem className="size-4" strokeWidth={1.5} />,
  "diamond-cut": <Shapes className="size-4" strokeWidth={1.5} />,
  "color-grade": <Palette className="size-4" strokeWidth={1.5} />,
  clarity: <Eye className="size-4" strokeWidth={1.5} />,
  "metal-type": <CircleDot className="size-4" strokeWidth={1.5} />,
  certificate: <BadgeCheck className="size-4" strokeWidth={1.5} />,
  "price-range": <Tag className="size-4" strokeWidth={1.5} />,
};

export interface FilterSidebarProps {
  className?: string;
}

/**
 * Facet accordion — UI only for now (build-order step 4). Selections don't
 * yet filter the product grid; that lands with the Storefront API in step 8.
 */
export function FilterSidebar({ className }: FilterSidebarProps) {
  const [openFacets, setOpenFacets] = useState<Set<string>>(new Set());

  const toggleFacet = (id: string) => {
    setOpenFacets((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className={className}>
      <h2 className="font-serif text-xl text-navy">Filters</h2>
      <p className="mt-1 font-sans text-[10px] tracking-[0.16em] text-navy/45 uppercase">
        Refine Selection
      </p>

      <div className="mt-6 divide-y divide-navy/10 border-y border-navy/10">
        {FILTER_FACETS.map((facet) => {
          const isOpen = openFacets.has(facet.id);
          return (
            <div key={facet.id}>
              <button
                type="button"
                onClick={() => toggleFacet(facet.id)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between py-4 text-left text-navy transition-colors hover:text-gold"
              >
                <span className="flex items-center gap-3">
                  <span className="text-gold">{FACET_ICONS[facet.id]}</span>
                  <span className="font-sans text-[11px] tracking-[0.14em] uppercase">
                    {facet.label}
                  </span>
                </span>
                <ChevronDown
                  className={cn(
                    "size-4 shrink-0 transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                  strokeWidth={1.5}
                />
              </button>

              {isOpen && (
                <div className="flex flex-col gap-3 pb-5 pl-7">
                  {facet.options.map((option) => (
                    <label
                      key={option.label}
                      className="flex cursor-pointer items-center justify-between gap-3 font-sans text-sm text-navy/75 hover:text-navy"
                    >
                      <span className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          className="size-3.5 rounded-none border-navy/30 text-gold accent-gold"
                        />
                        {option.label}
                      </span>
                      <span className="font-sans text-xs text-navy/40">
                        {option.count}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Button
        variant="secondary"
        size="sm"
        fullWidth
        className="mt-6"
        onClick={() => setOpenFacets(new Set())}
      >
        Reset All
      </Button>
    </div>
  );
}
