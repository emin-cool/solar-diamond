import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Solar Diamond — Gold & Diamond Jewellery",
    template: "%s | Solar Diamond",
  },
  description:
    "Solar Diamond — gold and diamond jewellery from 0.001 to ∞ carat. HRD & GIA certified, insured worldwide delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-ivory text-navy">
        {children}
      </body>
    </html>
  );
}
