import type { ReactNode } from "react";

export interface InfoSectionProps {
  title: string;
  children: ReactNode;
}

/** A titled block of body copy, used to build out simple legal/info pages. */
export function InfoSection({ title, children }: InfoSectionProps) {
  return (
    <section className="border-t border-navy/10 py-8 first:border-t-0 first:pt-0">
      <h2 className="font-serif text-xl text-navy">{title}</h2>
      <div className="mt-3 flex flex-col gap-3 font-sans text-sm leading-relaxed text-navy/65">
        {children}
      </div>
    </section>
  );
}
