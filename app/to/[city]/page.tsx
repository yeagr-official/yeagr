import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PageEvent } from "@/components/page-event";
import { RouteCard } from "@/components/route-card";
import { SectionHeading } from "@/components/section-heading";
import { TrackedLink } from "@/components/tracked-link";
import { routes, routesTo } from "@/data/routes";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  itemListJsonLd,
} from "@/lib/seo";

type PageParams = Promise<{ city: string }>;

const destinationCities = Array.from(
  new Set(routes.map((route) => route.destinationCity.toLowerCase().replace(/\s+/g, "-"))),
);

export function generateStaticParams() {
  return destinationCities.map((city) => ({ city }));
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
    title: `Best Ways to Fly to ${displayCity} - Yeagr Route Board`,
    description: `Compare smarter flight routes to ${displayCity}, including fastest options, cleaner layovers, airport choices, and route trade-offs.`,
    path: `/to/${city}`,
    keywords: [
      `flights to ${displayCity}`,
      `best way to fly to ${displayCity}`,
      `${displayCity} flight routes`,
      "route intelligence",
    ],
  });
}

export default async function ToCityPage({ params }: { params: PageParams }) {
  const { city } = await params;
  const cityRoutes = routesTo(city);
  const cityName = city.replace(/-/g, " ");
  const displayCity = cityName.replace(/\b\w/g, (letter) => letter.toUpperCase());

  return (
    <main>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: `To ${displayCity}`, path: `/to/${city}` },
          ]),
          itemListJsonLd({
            name: `Best ways to fly to ${displayCity}`,
            description: `Curated route intelligence for flights arriving in ${displayCity}.`,
            items: cityRoutes.map((route) => ({
              name: `${route.originCity} to ${route.destinationCity}`,
              path: `/routes/${route.slug}`,
              description: route.summary,
            })),
          }),
        ]}
      />
      <PageEvent
        eventName="destination_city_page_viewed"
        properties={{
          page_type: "destination_city",
          city: displayCity,
          route_count: cityRoutes.length,
        }}
      />
      <section className="relative overflow-hidden bg-ink text-cloud">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,#13233F,#13233F_13px,#101D34_13px,#101D34_26px)] opacity-[0.72]" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/22 via-ink/72 to-ink" />
        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-brass">
            Arrival board
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-tight text-cloud sm:text-6xl">
            Best ways to fly to {displayCity}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-cloud/68">
            Compare the strongest ways into {displayCity}, including airport
            choice, hub strategy, timing, and connection quality.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Available flight plans"
          title="Arrive with fewer unknowns."
          description="Destination pages show the trade-offs behind the route: what is fastest, what is cleaner, and what is worth the detour."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {cityRoutes.length ? (
            cityRoutes.map((route) => <RouteCard key={route.slug} route={route} />)
          ) : (
            <div className="scan-card rounded-lg p-5">
              <p className="text-runway/64">No curated routes to this city yet.</p>
              <TrackedLink
                href="/routes"
                eventName="cta_clicked"
                eventProperties={{
                  cta: "browse_all_routes",
                  surface: "destination_city_empty_state",
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
