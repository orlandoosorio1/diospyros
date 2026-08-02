import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";
import { colors } from "@/lib/colors";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Reads the existing symbol mark at request time (rather than duplicating
// its path data here) so this stays in sync with the source SVG.
function readSymbolMarkDataUri() {
  const svg = readFileSync(
    join(process.cwd(), "public/logos/diospyros-symbol-black.svg"),
  ).toString("base64");
  return `data:image/svg+xml;base64,${svg}`;
}

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: colors.white,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={readSymbolMarkDataUri()}
          width={124}
          height={124}
          alt=""
        />
      </div>
    ),
    { ...size },
  );
}
