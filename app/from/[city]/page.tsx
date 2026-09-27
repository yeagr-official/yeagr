import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PageEvent } from "@/components/page-event";
import { RouteCard } from "@/components/route-card";
import { SectionHeading } from "@/components/section-heading";
import { TrackedLink } from "@/components/tracked-link";
import { routes, routesFrom } from "@/data/routes";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  itemListJsonLd,
} from "@/lib/seo";

type PageParams = Promise<{ city: string }>;

const originCities = Array.from(
  new Set(routes.map((route) => route.originCity.toLowerCase().replace(/\s+/g, "-"))),
);

export function generateStaticParams() {
  return originCities.map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { city } = await params;
  const cityName = city.replace(/-/g, " ");
  const displayCity = cityName.replace(/\b\w/g, (letter) => letter.toUpperCase());

  return buildPageMetadata({
    title: `Best Flight Routes from ${displayCity} - Yeagr Route Board`,
    description: `Find smarter flight routes from ${displayCity}, including fast options, clean connections, airline choices, and airport trade-offs.`,
    path: `/from/${city}`,
    keywords: [
      `flights from ${displayCity}`,
      `best routes from ${displayCity}`,
      `${displayCity} flight routes`,
      "route intelligence",
    ],
  });
}

export default async function FromCityPage({ params }: { params: PageParams }) {
  const { city } = await params;
  const cityRoutes = routesFrom(city);
  const cityName = city.replace(/-/g, " ");
  const displayCity = cityName.replace(/\b\w/g, (letter) => letter.toUpperCase());

  return (
    <main>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: `From ${displayCity}`, path: `/from/${city}` },
          ]),
          itemListJsonLd({
            name: `Best routes from ${displayCity}`,
            description: `Curated route intelligence for flights departing ${displayCity}.`,
            items: cityRoutes.map((route) => ({
              name: `${route.originCity} to ${route.destinationCity}`,
              path: `/routes/${route.slug}`,
              description: route.summary,
            })),
          }),
        ]}
      />
      <PageEvent
        eventName="origin_city_page_viewed"
        properties={{
          page_type: "origin_city",
          city: displayCity,
          route_count: cityRoutes.length,
        }}
      />
      <section className="relative overflow-hidden bg-runway text-cloud">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_0%,rgba(200,149,78,0.18),transparent_26rem)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-brass">
            Origin board
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-tight text-cloud sm:text-6xl">
            Best routes from {displayCity}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-cloud/68">
            Compare where nonstop, hub, value, and low-friction choices make
            sense when {displayCity} is your starting point.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Available flight plans"
          title="Depart with the trade-offs visible."
          description="Origin pages collect the strongest route options from a city and show where speed, connection quality, and value diverge."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {cityRoutes.length ? (
            cityRoutes.map((route) => <RouteCard key={route.slug} route={route} />)
          ) : (
            <div className="scan-card rounded-lg p-5">
              <p className="text-runway/64">No curated routes from this city yet.</p>
              <TrackedLink
                href="/routes"
                eventName="cta_clicked"
                eventProperties={{
                  cta: "browse_all_routes",
                  surface: "origin_city_empty_state",
                  city: displayCity,
                  destination: "/routes",
                }}
                className="mt-5 inline-flex rounded-md bg-runway px-4 py-2 text-sm font-semibold text-cloud"
              >
                Browse all routes
              </TrackedLink>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
