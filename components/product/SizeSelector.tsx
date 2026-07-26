"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const SIZES = ["4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8"] as const;

export function SizeSelector() {
  const [selected, setSelected] = useState<(typeof SIZES)[number]>("6");

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="font-sans text-[10px] tracking-[0.16em] text-navy/50 uppercase">
          Select Size — US {selected}
        </p>
        <a
          href="/size-guide"
          className="font-sans text-[10px] tracking-[0.1em] text-navy/50 underline underline-offset-2 hover:text-gold"
        >
          Size Guide
        </a>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {SIZES.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => setSelected(size)}
            aria-pressed={selected === size}
            className={cn(
              "flex h-10 min-w-10 items-center justify-center border px-2 font-sans text-xs transition-colors",
              selected === size
                ? "border-navy bg-navy text-ivory"
                : "border-navy/20 text-navy hover:border-navy",
            )}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
