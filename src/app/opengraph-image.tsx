import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Uddip Ranjan Das — Founder, Builder, Explorer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: monogram */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48",
              height: "48",
              borderRadius: "10px",
              backgroundColor: "#d97706",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 700,
              color: "#0a0a0a",
            }}
          >
            U.
          </div>
        </div>

        {/* Center: name + tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              color: "#fafafa",
              lineHeight: 1.1,
            }}
          >
            Uddip Ranjan Das
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#a1a1aa",
              lineHeight: 1.4,
            }}
          >
            Building companies, products, and systems.
          </div>
        </div>

        {/* Bottom: brands */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            fontSize: "16px",
            color: "#71717a",
            letterSpacing: "0.05em",
          }}
        >
          <span style={{ color: "#d97706" }}>Before Maps</span>
          <span>·</span>
          <span style={{ color: "#d97706" }}>Ms Paul Therapies</span>
          <span>·</span>
          <span style={{ color: "#d97706" }}>Hobie</span>
          <span>·</span>
          <span style={{ color: "#71717a" }}>uddipranjas.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
