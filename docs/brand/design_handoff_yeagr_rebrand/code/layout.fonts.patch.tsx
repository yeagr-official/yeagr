/**
 * YEAGR REBRAND — patch for app/layout.tsx
 *
 * Replace the font setup. The repo currently relies on Inter via the Tailwind
 * `font-sans` stack. Swap to the brand trio using next/font/google so fonts are
 * self-hosted at build (good for Core Web Vitals + the static export).
 *
 * 1) Add these imports at the top of app/layout.tsx:
 */

import { Space_Grotesk, Hanken_Grotesk, Space_Mono } from "next/font/google";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

/**
 * 2) Put the three variables on <html> (or <body>) so the CSS vars referenced by
 *    tailwind.config.ts + globals.css resolve. Replace the existing
 *    <html lang="en"> / <body ...> opening tags with:
 *
 *    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
 *      <body className="font-sans antialiased">
 *
 * 3) Update the brand strings in `metadata` while you're here:
 *    - title.default / openGraph / twitter:  "yeagr — break the barrier"
 *      (or keep "Find the smarter way to fly" as the SEO descriptor and use
 *       "Break the barrier." only as the on-page hero line)
 *
 * 4) viewport.themeColor: change "#101214" -> "#11203D"
 */
