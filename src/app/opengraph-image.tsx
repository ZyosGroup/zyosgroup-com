import { ImageResponse } from "next/og";
import { TAGLINE_SHORT, SITE } from "@/lib/site";

// Edge-rendered dynamic OG image — fixes the inherited "no og:image" gap.
// Single brand card used as the default for every route that doesn't
// override with its own opengraph-image.tsx.

export const runtime = "edge";
export const alt = `${SITE.name}, ${TAGLINE_SHORT}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0F1B3F",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(124, 215, 220, 0.18), transparent 55%), radial-gradient(circle at 85% 75%, rgba(124, 215, 220, 0.10), transparent 50%)",
          color: "#ffffff",
          padding: "72px 88px",
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${SITE.url}/brand/logo-horizontal-white.png`}
            alt={SITE.name}
            width={320}
            height={80}
            style={{ display: "block", objectFit: "contain" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 76,
              fontWeight: 600,
              lineHeight: 1.04,
              letterSpacing: -1.5,
              maxWidth: 1000,
            }}
          >
            Agentic transformation built for ROI.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#AFC8E5",
              lineHeight: 1.35,
              maxWidth: 900,
            }}
          >
            Assess maturity. Architect the right solution. Infuse AI into
            operations, measured against business performance.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#7CD7DC",
            letterSpacing: 1.6,
            textTransform: "uppercase",
          }}
        >
          <div>{SITE.domain}</div>
          <div>Consulting · Solutions · Zyos OS</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
