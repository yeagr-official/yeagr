import type { MetadataRoute } from "next";
import { airlines } from "@/data/airlines";
import { airports } from "@/data/airports";
import { guides } from "@/data/guides";
import { routes } from "@/data/routes";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const now = new Date();

function entry(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "weekly",
) {
  return {
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const originCities = Array.from(
    new Set(routes.map((route) => route.originCity.toLowerCase().replace(/\s+/g, "-"))),
  );
  const destinationCities = Array.from(
    new Set(routes.map((route) => route.destinationCity.toLowerCase().replace(/\s+/g, "-"))),
  );

  return [
    entry("/", 1, "daily"),
    entry("/routes", 0.95, "daily"),
    entry("/airports", 0.85),
    entry("/airlines", 0.8),
    entry("/connections", 0.82),
    entry("/flight-log", 0.86),
    entry("/guides", 0.78),
    ...routes.map((route) => entry(`/routes/${route.slug}`, 0.92)),
    ...airports.map((airport) =>
      entry(`/airports/${airport.iata.toLowerCase()}`, 0.78),
    ),
    ...airlines.map((airline) => entry(`/airlines/${airline.slug}`, 0.74)),
    ...guides.map((guide) => entry(`/guides/${guide.slug}`, 0.76)),
    ...originCities.map((city) => entry(`/from/${city}`, 0.72)),
    ...destinationCities.map((city) => entry(`/to/${city}`, 0.72)),
  ];
}
