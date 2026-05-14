import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "VBM Elektro AS – Autorisert elektriker i Bærum, Oslo og Asker"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1A1A1A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              background: "#E1342B",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ color: "white", fontSize: "24px", fontWeight: 700 }}>V</div>
          </div>
          <div style={{ color: "white", fontSize: "28px", fontWeight: 700, letterSpacing: "-0.5px" }}>
            VBM Elektro AS
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              color: "#E1342B",
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Autorisert elektriker
          </div>
          <div
            style={{
              color: "white",
              fontSize: "64px",
              fontWeight: 800,
              letterSpacing: "-2px",
              lineHeight: 1.1,
            }}
          >
            Elektrikeren du kan stole på
          </div>
          <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "26px", fontWeight: 400 }}>
            Elbillader · Renovering · Smarthus · Service
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "18px" }}>
            Bærum · Oslo · Asker · Drammen
          </div>
          <div
            style={{
              background: "#E1342B",
              color: "white",
              fontSize: "18px",
              fontWeight: 700,
              padding: "12px 28px",
              borderRadius: "8px",
            }}
          >
            90 63 31 18
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
