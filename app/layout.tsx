import type { Metadata } from "next";
import type { ReactNode } from "react";
import { montaguSlab, monaSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diospyros Capital",
  description:
    "Diospyros Capital makes direct investments in private companies and real assets, built from more than four decades of working with the world's most demanding materials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${montaguSlab.variable} ${monaSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
