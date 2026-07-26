"use client";

import { Plus } from "lucide-react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  title: string;
  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

/** Single-item-at-a-time collapsible list, used for product-detail copy blocks. */
export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn("divide-y divide-navy/10 border-t border-navy/10", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between py-5 text-left text-navy transition-colors hover:text-gold"
            >
              <span className="font-sans text-[11px] tracking-[0.16em] uppercase">
                {item.title}
              </span>
              <Plus
                className={cn(
                  "size-4 shrink-0 transition-transform duration-300",
                  isOpen && "rotate-45",
                )}
                strokeWidth={1.5}
              />
            </button>
            {isOpen && (
              <div className="pb-5 font-sans text-sm leading-relaxed text-navy/65">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
