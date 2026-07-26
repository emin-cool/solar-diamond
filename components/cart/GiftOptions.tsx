"use client";

import { Gift } from "lucide-react";
import { useId, useState } from "react";

const WRAP_STYLES = [
  "Solar Signature Box — Complimentary",
  "Champagne Ribbon Wrap",
  "Navy Velvet Pouch",
];

export function GiftOptions() {
  const [isGift, setIsGift] = useState(false);
  const [wrapStyle, setWrapStyle] = useState(WRAP_STYLES[0]);
  const [note, setNote] = useState("");
  const checkboxId = useId();
  const selectId = useId();
  const noteId = useId();

  return (
    <div className="bg-champagne/25 p-6 sm:p-8">
      <p className="flex items-center gap-2 font-sans text-[11px] font-medium tracking-[0.16em] text-navy uppercase">
        <Gift className="size-4 text-gold" strokeWidth={1.5} />
        Complimentary Gift Wrapping
      </p>
      <p className="mt-3 font-sans text-sm leading-relaxed text-navy/65">
        Each Solar Diamond piece arrives in our signature solar-inspired
        packaging, featuring a hand-tied ribbon and a certificate of
        sustainable origin.
      </p>

      <label
        htmlFor={checkboxId}
        className="mt-5 flex cursor-pointer items-center gap-2.5 font-sans text-sm text-navy"
      >
        <input
          id={checkboxId}
          type="checkbox"
          checked={isGift}
          onChange={(event) => setIsGift(event.target.checked)}
          className="size-4 rounded-none border-navy/30 text-gold accent-gold"
        />
        This is a Gift
      </label>

      {isGift && (
        <div className="mt-5 flex flex-col gap-4">
          <div>
            <label
              htmlFor={selectId}
              className="font-sans text-[10px] tracking-[0.16em] text-navy/50 uppercase"
            >
              Gift Wrap Style
            </label>
            <select
              id={selectId}
              value={wrapStyle}
              onChange={(event) => setWrapStyle(event.target.value)}
              className="mt-2 h-11 w-full border border-navy/20 bg-ivory px-3 font-sans text-sm text-navy focus:border-gold focus:outline-none"
            >
              {WRAP_STYLES.map((style) => (
                <option key={style} value={style}>
                  {style}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor={noteId}
              className="font-sans text-[10px] tracking-[0.16em] text-navy/50 uppercase"
            >
              Gift Note
            </label>
            <textarea
              id={noteId}
              value={note}
              onChange={(event) => setNote(event.target.value)}
              rows={3}
              placeholder="Write your message here…"
              className="mt-2 w-full resize-none border border-navy/20 bg-ivory px-3 py-2 font-sans text-sm text-navy placeholder:text-navy/35 focus:border-gold focus:outline-none"
            />
          </div>
        </div>
      )}
    </div>
  );
}
