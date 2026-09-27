import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { PageEvent } from "@/components/page-event";
import { RouteCard } from "@/components/route-card";
import { ScoreBar } from "@/components/score-bar";
import { SectionHeading } from "@/components/section-heading";
import { TrackedLink } from "@/components/tracked-link";
import { airports, getAirport } from "@/data/airports";
import { routes } from "@/data/routes";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  buildPageMetadata,
  itemListJsonLd,
} from "@/lib/seo";

type PageParams = Promise<{ iata: string }>;

export function generateStaticParams() {
  return airports.map((airport) => ({ iata: airport.iata.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { iata } = await params;
  const airport = getAirport(iata);

  if (!airport) {
    return {};
  }

  return buildPageMetadata({
    title: `${airport.name} (${airport.iata}) Connection Profile`,
    description: `${airport.summary} Use Yeagr to check ${airport.iata} connection quality, transfer friction, best use cases, and related flight routes.`,
    path: `/airports/${airport.iata.toLowerCase()}`,
    keywords: [
      `${airport.name} airport`,
      `${airport.iata} airport`,
      `${airport.city} airport connections`,
      `${airport.iata} layover`,
      "airport connection quality",
    ],
  });
}

export default async function AirportDetailPage({ params }: { params: PageParams }) {
  const { iata } = await params;
  const airport = getAirport(iata);

  if (!airport) {
    notFound();
  }

  const relatedRoutes = routes.filter((route) => route.airports.includes(airport.iata));

  return (
    <main>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Airports", path: "/airports" },
            {
              name: `${airport.name} (${airport.iata})`,
              path: `/airports/${airport.iata.toLowerCase()}`,
            },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Airport",
            name: airport.name,
            iataCode: airport.iata,
            url: absoluteUrl(`/airports/${airport.iata.toLowerCase()}`),
            description: airport.summary,
            address: {
              "@type": "PostalAddress",
              addressLocality: airport.city,
              addressCountry: airport.country,
            },
          },
          itemListJsonLd({
            name: `Routes involving ${airport.iata}`,
            description: `Routes where ${airport.name} is an origin, destination, or meaningful connection point.`,
            items: relatedRoutes.map((route) => ({
              name: `${route.originCity} to ${route.destinationCity}`,
              path: `/routes/${route.slug}`,
              description: route.summary,
            })),
          }),
        ]}
      />
      <PageEvent
        eventName="airport_detail_viewed"
        properties={{
          page_type: "airport_detail",
          airport_iata: airport.iata,
          airport_name: airport.name,
          airport_city: airport.city,
          airport_country: airport.country,
          airport_type: airport.type,
          connection_score: airport.connectionScore,
          friction: airport.friction,
          related_route_count: relatedRoutes.length,
        }}
      />
      <section className="relative overflow-hidden bg-runway text-cloud">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_0%,rgba(200,149,78,0.22),transparent_26rem)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1fr_0.7fr] lg:px-8">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-brass">
              Airport profile
            </p>
            <h1 className="mt-5 text-5xl font-bold leading-tight text-cloud sm:text-6xl">
              {airport.name}
            </h1>
            <p className="mt-4 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-cloud/48">
              {airport.iata} - {airport.city}, {airport.country}
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-cloud/68">
              {airport.summary}
            </p>
          </div>
          <div className="rounded-md border border-cloud/12 bg-cloud/[0.06] p-5 text-cloud shadow-flight">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-brass">
              Connection score
            </p>
            <p className="mt-4 font-mono text-6xl font-semibold text-cloud">
              {airport.connectionScore}
            </p>
            <div className="mt-8">
              <ScoreBar score={airport.connectionScore} inverse />
            </div>
            <div className="mt-6 grid gap-3 text-sm text-cloud/68">
              <p>
                <span className="text-cloud">Best for:</span> {airport.bestFor}
              </p>
              <p>
                <span className="text-cloud">Watch out:</span> {airport.watchOut}
              </p>
              <p>
                <span className="text-cloud">Friction:</span> {airport.friction}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Routes"
            title={`Routes shaped by ${airport.iata}.`}
            description="These routes use the airport as an origin, destination, or meaningful connection point. The goal is not airport trivia; it is knowing whether the hub helps the trip."
          />
          <TrackedLink
            href="/routes"
            eventName="cta_clicked"
            eventProperties={{
              cta: "browse_all_routes",
              surface: "airport_detail_routes",
              airport_iata: airport.iata,
              destination: "/routes",
            }}
            className="w-fit rounded-md border border-runway/12 px-4 py-2 text-sm font-semibold text-runway transition hover:bg-runway hover:text-cloud"
          >
            Browse all routes
          </TrackedLink>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {relatedRoutes.length ? (
            relatedRoutes.map((route) => <RouteCard key={route.slug} route={route} />)
          ) : (
            <p className="rounded-lg border border-runway/10 bg-white/62 p-5 text-runway/64">
              Route coverage for this airport is coming soon.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
