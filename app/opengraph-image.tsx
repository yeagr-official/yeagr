import { ImageResponse } from "next/og";

export const alt = "YEAGR — The open network for travel";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#090D14",
          color: "#F4F1E9",
          padding: 62,
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(244,241,233,0.055) 1px, transparent 1px), linear-gradient(rgba(244,241,233,0.055) 1px, transparent 1px)",
            backgroundSize: "58px 58px",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -100,
            top: -110,
            width: 540,
            height: 540,
            borderRadius: 999,
            border: "1px solid rgba(210,155,85,0.2)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 48,
            top: 66,
            width: 280,
            height: 280,
            borderRadius: 999,
            border: "1px dashed rgba(244,241,233,0.12)",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
            <svg width="62" height="62" viewBox="0 0 100 100">
              <polygon
                points="50,8 59.4,37.06 89.95,37.02 65.22,54.94 74.69,83.97 50,66 25.31,83.97 34.78,54.94 10.05,37.02 40.6,37.06"
                fill="#E4E8EE"
              />
            </svg>
            <div style={{ fontSize: 42, fontWeight: 800 }}>YEAGR</div>
          </div>
          <div
            style={{
              border: "1px solid rgba(210,155,85,0.32)",
              padding: "10px 14px",
              color: "#D29B55",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "0.14em",
            }}
          >
            OPEN TRAVEL / SYSTEM 01
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            maxWidth: 900,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 80,
              lineHeight: 0.94,
              fontWeight: 800,
              letterSpacing: "-0.055em",
            }}
          >
            Travel broke the sound barrier.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 7,
              color: "#D29B55",
              fontSize: 80,
              lineHeight: 0.94,
              fontWeight: 800,
              letterSpacing: "-0.055em",
            }}
          >
            Distribution hasn&apos;t.
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 30,
          }}
        >
          <div
            style={{
              display: "flex",
              maxWidth: 780,
              color: "rgba(244,241,233,0.62)",
              fontSize: 23,
              lineHeight: 1.35,
            }}
          >
            The open network connecting people, places, suppliers, merchants,
            developers and AI agents.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ color: "#D29B55", fontSize: 14, fontWeight: 700 }}>
              BREAK THE BARRIER
            </span>
            <span
              style={{
                width: 42,
                height: 1,
                background: "#D29B55",
              }}
            />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
