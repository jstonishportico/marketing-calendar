import type { Metadata } from "next";
import { Figtree, Hepta_Slab } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const heptaSlab = Hepta_Slab({
  variable: "--font-hepta",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Portico GTM Dashboard",
  description: "Weekly GTM dashboard for Portico.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${heptaSlab.variable}`}>
        {children}
      </body>
    </html>
  );
}
