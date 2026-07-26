import { useId, type InputHTMLAttributes } from "react";

export interface FormFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
  label: string;
}

/** Underline-style input matching the checkout comps — label sits above a
 * borderless field with just a bottom hairline. */
export function FormField({ label, required, ...rest }: FormFieldProps) {
  const id = useId();
  return (
    <div>
      <label
        htmlFor={id}
        className="font-sans text-[10px] tracking-[0.14em] text-navy/50 uppercase"
      >
        {label}
        {required && " *"}
      </label>
      <input
        id={id}
        required={required}
        className="mt-2 h-10 w-full border-0 border-b border-navy/20 bg-transparent px-0 font-sans text-sm text-navy placeholder:text-navy/35 focus:border-gold focus:outline-none"
        {...rest}
      />
    </div>
  );
}
