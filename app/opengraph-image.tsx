import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";
import { colors } from "@/lib/colors";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Same black-background + white-logo-lockup pairing already used in the
// Hero — reads the existing asset at request time rather than duplicating
// it, so this stays in sync with the source SVG.
function readLogoDataUri() {
  const svg = readFileSync(
    join(process.cwd(), "public/logos/diospyros-logo-white.svg"),
  ).toString("base64");
  return `data:image/svg+xml;base64,${svg}`;
}

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: colors.black,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={readLogoDataUri()} width={520} height={90} alt="" />
      </div>
    ),
    { ...size },
  );
}
