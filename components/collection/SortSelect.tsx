"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { SORT_OPTIONS } from "@/lib/filters";

export function SortSelect() {
  const [value, setValue] = useState<(typeof SORT_OPTIONS)[number]>(
    SORT_OPTIONS[0],
  );
  const id = useId();

  return (
    <div className="flex items-center gap-2">
      <label
        htmlFor={id}
        className="font-sans text-[10px] tracking-[0.16em] text-navy/50 uppercase"
      >
        Sort By
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(event) =>
            setValue(event.target.value as (typeof SORT_OPTIONS)[number])
          }
          className="appearance-none border-none bg-transparent py-1 pr-5 font-sans text-[11px] font-medium tracking-[0.1em] text-navy uppercase focus:outline-none"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute top-1/2 right-0 size-3.5 -translate-y-1/2 text-navy/50"
          strokeWidth={1.5}
        />
      </div>
    </div>
  );
}
