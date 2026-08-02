import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { colors } from "@/lib/colors";
import { montaguSlab, monaSans } from "./fonts";
import "./globals.css";

// TODO: set NEXT_PUBLIC_SITE_URL to the production domain once the site is
// live — this only resolves OG/canonical URLs against localhost until then.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const title = "Diospyros Capital";
const description =
  "Diospyros Capital makes direct investments in private companies and real assets, built from more than four decades of working with the world's most demanding materials.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: title,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: colors.black,
  colorScheme: "dark",
};

// Marks <html> as JS-enabled before first paint so reveal animations only
// hide content once we can guarantee they'll un-hide it (see .reveal in
// globals.css). Without this, a failed/slow hydration would leave sections
// permanently invisible.
const enableJsScript = "document.documentElement.classList.add('js')";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montaguSlab.variable} ${monaSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: enableJsScript }} />
      </head>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
