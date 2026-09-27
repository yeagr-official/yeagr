import type { Config } from "tailwindcss";

/**
 * YEAGR REBRAND — drop-in replacement for tailwind.config.ts
 *
 * Strategy: keep the existing token NAMES so no className across the app
 * needs to change — only the values are repointed to the new brand system
 * (Altitude Navy + Brushed Silver + Brass). Two new tokens are added:
 * `silver` (the metallic star / hairlines) and `ink` (deepest navy).
 *
 * Old -> New value map:
 *   runway    #101214 -> #11203D  (Altitude Navy — primary dark + text)
 *   cloud     #F7F8F6 -> #F2EFE8  (Contrail White — light surface, warmer)
 *   altitude  #D8DDE2 -> #C2C8D2  (Brushed Silver mid)
 *   graphite  #22272B -> #0B1426  (Midnight Ink — hovers / deepest panel)
 *   jetstream #1F6FFF -> #C8954E  (Brass — primary accent, was blue)
 *   signal    #B8FF4D -> #C8954E  (Brass — was lime green)
 *   amber     #FFB84D -> #E2703A  (Boom Orange — rare energy, <5% of a view)
 */

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        runway: "#11203D",   // Altitude Navy — primary dark surface + ink text
        cloud: "#F2EFE8",    // Contrail White — primary light surface
        altitude: "#C2C8D2", // Brushed Silver (mid)
        graphite: "#0B1426", // Midnight Ink — hover / deepest panel
        jetstream: "#C8954E",// Brass — primary accent (formerly blue)
        signal: "#C8954E",   // Brass — accent (formerly lime green)
        amber: "#E2703A",    // Boom Orange — rare high-energy accent
        // new brand tokens:
        silver: "#C2C8D2",   // metallic star + hairlines
        ink: "#0B1426",      // deepest navy
        brass: "#C8954E",    // explicit accent alias
      },
      fontFamily: {
        // wired to the next/font CSS variables set in app/layout.tsx
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        flight: "0 24px 80px rgba(11, 20, 38, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
