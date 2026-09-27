import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Space_Grotesk, Space_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { PostHogPageview } from "@/components/posthog-pageview";
import { SiteHeader } from "@/components/site-header";
import {
  organizationJsonLd,
  siteConfig,
  websiteJsonLd,
} from "@/lib/seo";

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

const travelpayoutsScriptAttributes: Record<string, string> = {
  nowprocket: "",
  "data-noptimize": "1",
  "data-cfasync": "false",
  "data-wpfc-render": "false",
  "seraph-accel-crit": "1",
  "data-no-defer": "1",
};

const travelpayoutsScript = `(function () {
  var script = document.createElement("script");
  script.async = 1;
  script.src = "https://emrldtp.com/NTQxNDMw.js?t=541430";
  document.head.appendChild(script);
})();`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "YEAGR — The open network for travel",
    template: "%s | YEAGR",
  },
  applicationName: "yeagr",
  description: siteConfig.description,
  keywords: [
    "flight routes",
    "route intelligence",
    "airport connections",
    "airline routes",
    "smart travel planning",
    "fastest flights",
    "layover airports",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "YEAGR — The open network for travel",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "YEAGR — The open network for travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YEAGR — The open network for travel",
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "travel",
};

export const viewport: Viewport = {
  themeColor: "#090D14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>
          <PostHogPageview />
        </Suspense>
        <script
          id="travelpayouts-drive"
          {...travelpayoutsScriptAttributes}
          dangerouslySetInnerHTML={{ __html: travelpayoutsScript }}
        />
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
