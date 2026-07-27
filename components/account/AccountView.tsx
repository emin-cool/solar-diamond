"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Tab = "sign-in" | "create-account";

export function AccountView() {
  const [tab, setTab] = useState<Tab>("sign-in");
  const emailId = useId();
  const passwordId = useId();
  const nameId = useId();

  return (
    <div className="mx-auto max-w-sm px-5 py-20 sm:px-8">
      <h1 className="text-center font-serif text-3xl text-navy">Account</h1>

      <div className="mt-8 grid grid-cols-2 border-b border-navy/10">
        <button
          type="button"
          onClick={() => setTab("sign-in")}
          className={cn(
            "border-b py-3 font-sans text-[11px] tracking-[0.12em] uppercase transition-colors",
            tab === "sign-in"
              ? "border-navy text-navy"
              : "border-transparent text-navy/45 hover:text-navy",
          )}
        >
          Sign In
        </button>
        <button
          type="button"
          onClick={() => setTab("create-account")}
          className={cn(
            "border-b py-3 font-sans text-[11px] tracking-[0.12em] uppercase transition-colors",
            tab === "create-account"
              ? "border-navy text-navy"
              : "border-transparent text-navy/45 hover:text-navy",
          )}
        >
          Create Account
        </button>
      </div>

      <form
        onSubmit={(event) => event.preventDefault()}
        className="mt-8 flex flex-col gap-5"
      >
        {tab === "create-account" && (
          <div>
            <label
              htmlFor={nameId}
              className="font-sans text-[10px] tracking-[0.14em] text-navy/50 uppercase"
            >
              Full Name
            </label>
            <input
              id={nameId}
              type="text"
              required
              className="mt-2 h-11 w-full border border-navy/20 bg-ivory px-3 font-sans text-sm text-navy focus:border-gold focus:outline-none"
            />
          </div>
        )}
        <div>
          <label
            htmlFor={emailId}
            className="font-sans text-[10px] tracking-[0.14em] text-navy/50 uppercase"
          >
            Email Address
          </label>
          <input
            id={emailId}
            type="email"
            required
            className="mt-2 h-11 w-full border border-navy/20 bg-ivory px-3 font-sans text-sm text-navy focus:border-gold focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor={passwordId}
            className="font-sans text-[10px] tracking-[0.14em] text-navy/50 uppercase"
          >
            Password
          </label>
          <input
            id={passwordId}
            type="password"
            required
            className="mt-2 h-11 w-full border border-navy/20 bg-ivory px-3 font-sans text-sm text-navy focus:border-gold focus:outline-none"
          />
        </div>

        <Button type="submit" variant="primary" size="lg" fullWidth>
          {tab === "sign-in" ? "Sign In" : "Create Account"}
        </Button>
      </form>
    </div>
  );
}
