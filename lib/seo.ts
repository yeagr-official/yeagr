import type { Metadata } from "next";

const defaultSiteUrl = "https://www.yeagr.com";

export const siteConfig = {
  name: "Yeagr",
  url: process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl,
  description:
    "YEAGR is building the open network for travel: a programmable layer connecting people, places, suppliers, merchants, developers and AI agents.",
  defaultImage: "/opengraph-image",
  creator: "Yeagr",
};

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function canonicalPath(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  type = "website",
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  type?: "article" | "website";
  keywords?: string[];
}): Metadata {
  const canonical = canonicalPath(path);
  const url = absoluteUrl(canonical);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type,
      images: [
        {
          url: siteConfig.defaultImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — the open network for travel`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.defaultImage],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function itemListJsonLd({
  name,
  description,
  items,
}: {
  name: string;
  description: string;
  items: Array<{ name: string; path: string; description?: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(item.path),
      name: item.name,
      description: item.description,
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: absoluteUrl(path),
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
