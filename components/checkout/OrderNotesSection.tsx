import { useId } from "react";

export function OrderNotesSection() {
  const id = useId();
  return (
    <section className="mt-10">
      <h2 className="font-serif text-2xl text-navy">Additional Information</h2>
      <div className="mt-6">
        <label
          htmlFor={id}
          className="font-sans text-[10px] tracking-[0.14em] text-navy/50 uppercase"
        >
          Order Notes (Optional)
        </label>
        <textarea
          id={id}
          name="orderNotes"
          rows={4}
          placeholder="Special delivery instructions, gifting occasion, etc."
          className="mt-2 w-full resize-none border border-navy/20 bg-ivory px-3 py-2 font-sans text-sm text-navy placeholder:text-navy/35 focus:border-gold focus:outline-none"
        />
      </div>
    </section>
  );
}
