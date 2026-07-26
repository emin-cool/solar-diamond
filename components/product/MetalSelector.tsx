"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const METAL_OPTIONS = [
  { id: "yellow-gold", label: "18K Yellow Gold", swatch: "#C9A227" },
  { id: "white-gold", label: "18K White Gold / Platinum", swatch: "#D9D6CE" },
  { id: "rose-gold", label: "18K Rose Gold", swatch: "#E3B7A0" },
] as const;

/** Best-effort mapping from the product's descriptive metal field to a swatch. */
function defaultMetalId(metal?: string): (typeof METAL_OPTIONS)[number]["id"] {
  const value = metal?.toLowerCase() ?? "";
  if (value.includes("rose")) return "rose-gold";
  if (value.includes("white") || value.includes("platinum")) return "white-gold";
  return "yellow-gold";
}

export interface MetalSelectorProps {
  defaultMetal?: string;
}

export function MetalSelector({ defaultMetal }: MetalSelectorProps) {
  const [selected, setSelected] = useState(defaultMetalId(defaultMetal));
  const activeLabel = METAL_OPTIONS.find((option) => option.id === selected)?.label;

  return (
    <div>
      <p className="font-sans text-[10px] tracking-[0.16em] text-navy/50 uppercase">
        Select Metal — <span className="text-navy">{activeLabel}</span>
      </p>
      <div className="mt-3 flex items-center gap-3">
        {METAL_OPTIONS.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => setSelected(option.id)}
            aria-pressed={selected === option.id}
            aria-label={option.label}
            className={cn(
              "flex size-8 items-center justify-center rounded-full transition-shadow",
              selected === option.id
                ? "ring-2 ring-navy ring-offset-2 ring-offset-ivory"
                : "ring-1 ring-navy/15 ring-offset-2 ring-offset-ivory hover:ring-navy/40",
            )}
          >
            <span
              className="size-6 rounded-full"
              style={{ backgroundColor: option.swatch }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
