import { ImageResponse } from "next/og";

/**
 * YEAGR REBRAND — replacement for app/icon.tsx
 * Navy rounded tile + flat silver star. (ImageResponse can't do SVG gradients
 * reliably, so the favicon uses the FLAT star in light silver — that's the
 * intended small-size treatment anyway.)
 *
 * Apply the same navy-bg / silver-star / lowercase-"yeagr" treatment to:
 *   - app/opengraph-image.tsx  (1200x630)
 *   - app/twitter-image.tsx    (1200x630)
 * For the large OG images, add the wordmark "yeagr" (Space Grotesk 700,
 * #F6F4EF) and the tagline "Break the barrier." in Brass (#C8954E).
 */

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(150deg, #1B2E52, #0B1426)",
          borderRadius: 14,
        }}
      >
        <svg width="40" height="40" viewBox="0 0 100 100">
          <polygon
            points="50,8 59.4,37.06 89.95,37.02 65.22,54.94 74.69,83.97 50,66 25.31,83.97 34.78,54.94 10.05,37.02 40.6,37.06"
            fill="#E4E8EE"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
