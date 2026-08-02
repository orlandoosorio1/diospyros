import { Montagu_Slab } from "next/font/google";
import localFont from "next/font/local";

export const montaguSlab = Montagu_Slab({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-heading",
  display: "swap",
});

export const monaSans = localFont({
  src: [
    {
      path: "../node_modules/mona-sans/woff2/Mona-Sans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../node_modules/mona-sans/woff2/Mona-Sans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
});
