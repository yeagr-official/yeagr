import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        runway: "#11203D",
        cloud: "#F2EFE8",
        altitude: "#C2C8D2",
        graphite: "#0B1426",
        jetstream: "#C8954E",
        signal: "#C8954E",
        amber: "#E2703A",
        silver: "#C2C8D2",
        ink: "#0B1426",
        brass: "#C8954E",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      boxShadow: {
        flight: "0 24px 80px rgba(11, 20, 38, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
