"use client";

import { RotateCw } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface ImageGalleryProps {
  image: string;
  alt: string;
}

/**
 * Single product photo — no multi-angle photography exists yet, so there's
 * no thumbnail strip (reusing other products' photos as fake "angles" would
 * be misleading). The 360° toggle is a visual demo (slow continuous spin)
 * standing in for a real 360° capture.
 */
export function ImageGallery({ image, alt }: ImageGalleryProps) {
  const [spinning, setSpinning] = useState(false);

  return (
    <div className="relative aspect-square overflow-hidden bg-champagne/25">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="(min-width: 1024px) 45vw, 90vw"
        className={cn(
          "object-cover",
          spinning && "animate-[spin_14s_linear_infinite]",
        )}
      />
      <button
        type="button"
        onClick={() => setSpinning((prev) => !prev)}
        aria-pressed={spinning}
        className={cn(
          "absolute bottom-4 left-4 inline-flex items-center gap-2 bg-ivory/95 px-4 py-2",
          "font-sans text-[10px] font-medium tracking-[0.14em] uppercase transition-colors",
          spinning ? "text-gold" : "text-navy hover:text-gold",
        )}
      >
        <RotateCw className="size-3.5" strokeWidth={1.5} />
        360° View
      </button>
    </div>
  );
}
