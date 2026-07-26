"use client";

import { SlidersHorizontal, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FilterSidebar } from "@/components/collection/FilterSidebar";
import { SortSelect } from "@/components/collection/SortSelect";
import { cn } from "@/lib/utils";

export function MobileFilterBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <div className="fixed inset-x-0 bottom-6 z-40 flex justify-center lg:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 font-sans text-[11px] font-medium tracking-[0.14em] text-gold uppercase shadow-lg shadow-navy/20"
        >
          <SlidersHorizontal className="size-4" strokeWidth={1.5} />
          Filter &amp; Sort
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          open ? "visible" : "invisible",
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-navy/30 transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 flex max-h-[85vh] flex-col overflow-y-auto rounded-t-2xl bg-ivory transition-transform duration-300 ease-out",
            open ? "translate-y-0" : "translate-y-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-navy/10 px-5 py-4">
            <SortSelect />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close filters"
              className="p-2 text-navy transition-colors hover:text-gold"
            >
              <X className="size-5" strokeWidth={1.5} />
            </button>
          </div>

          <FilterSidebar className="px-5 py-6" />

          <div className="sticky bottom-0 border-t border-navy/10 bg-ivory px-5 py-4">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="w-full bg-navy py-3.5 font-sans text-[11px] font-medium tracking-[0.14em] text-gold uppercase"
            >
              Show Results
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
