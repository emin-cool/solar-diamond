"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";

const FONT_STYLES = [
  { id: "classic", label: "Classic Serif", className: "font-serif" },
  { id: "elegant", label: "Elegant Script", className: "font-serif italic" },
  { id: "modern", label: "Modern Sans", className: "font-sans uppercase tracking-[0.1em]" },
] as const;

const MAX_LENGTH = 20;

export function EngravingModule() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [font, setFont] = useState<(typeof FONT_STYLES)[number]["id"]>(
    FONT_STYLES[0].id,
  );
  const inputId = useId();
  const activeFont = FONT_STYLES.find((f) => f.id === font) ?? FONT_STYLES[0];

  return (
    <div className="border border-navy/15">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-5 py-4 text-left text-navy transition-colors hover:text-gold"
      >
        <span className="font-sans text-[11px] tracking-[0.14em] uppercase">
          Add Personal Engraving (+$50)
        </span>
        <ChevronDown
          className={cn(
            "size-4 shrink-0 transition-transform duration-300",
            open && "rotate-180",
          )}
          strokeWidth={1.5}
        />
      </button>

      {open && (
        <div className="border-t border-navy/15 px-5 py-5">
          <label
            htmlFor={inputId}
            className="font-sans text-[10px] tracking-[0.16em] text-navy/50 uppercase"
          >
            Engraving Text
          </label>
          <input
            id={inputId}
            type="text"
            maxLength={MAX_LENGTH}
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="e.g. Forever & Always"
            className="mt-2 h-11 w-full border border-navy/20 bg-ivory px-3 font-sans text-sm text-navy placeholder:text-navy/35 focus:border-gold focus:outline-none"
          />
          <p className="mt-1 font-sans text-[10px] text-navy/40">
            {text.length}/{MAX_LENGTH} characters
          </p>

          <p className="mt-5 font-sans text-[10px] tracking-[0.16em] text-navy/50 uppercase">
            Font Style
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {FONT_STYLES.map((style) => (
              <button
                key={style.id}
                type="button"
                onClick={() => setFont(style.id)}
                aria-pressed={font === style.id}
                className={cn(
                  "border px-3 py-2 font-sans text-xs transition-colors",
                  font === style.id
                    ? "border-navy bg-navy text-ivory"
                    : "border-navy/20 text-navy hover:border-navy",
                )}
              >
                {style.label}
              </button>
            ))}
          </div>

          <div className="mt-5 flex min-h-16 items-center justify-center bg-champagne/25 px-4 py-5 text-center">
            <p className={cn("text-lg text-navy", activeFont.className)}>
              {text.trim() || "Your engraving preview"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
