// Palette hex values, mirrored from the `@theme` block in app/globals.css.
// Icon/OG-image generators (app/icon.tsx, app/apple-icon.tsx,
// app/opengraph-image.tsx) render via next/og outside of CSS, so they can't
// read the CSS custom properties directly — keep this file in sync with
// globals.css instead.
export const colors = {
  black: "#000000",
  white: "#ffffff",
  dustyOrange: "#af7b67",
  green: "#7a8475",
  warmGray: "#d6ccc5",
} as const;
