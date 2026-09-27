import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AirportCard } from "@/components/airport-card";
import { AirlineCard } from "@/components/airline-card";
import { JsonLd } from "@/components/json-ld";
import { PageEvent } from "@/components/page-event";
import { RouteCard } from "@/components/route-card";
import { ScoreBar } from "@/components/score-bar";
import { SectionHeading } from "@/components/section-heading";
import { TrackedLink } from "@/components/tracked-link";
import { airlines, getAirline } from "@/data/airlines";
import { airports, getAirport } from "@/data/airports";
import { getRoute, routes } from "@/data/routes";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  buildPageMetadata,
  itemListJsonLd,
} from "@/lib/seo";

type PageParams = Promise<{ slug: string }>;

export function generateStaticParams() {
  return routes.map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = getRoute(slug);

  if (!route) {
    return {};
  }

  return buildPageMetadata({
    title: `${route.originCity} to ${route.destinationCity}: Fastest and Smartest Flight Routes`,
    description: `${route.summary} Use Yeagr to compare the fastest, best-value, and lowest-friction ways to fly ${route.originCode}-${route.destinationCode}.`,
    path: `/routes/${route.slug}`,
    keywords: [
      `${route.originCity} to ${route.destinationCity} flights`,
      `${route.originCode} to ${route.destinationCode}`,
      `best way to fly to ${route.destinationCity}`,
      "flight route comparison",
      "layover quality",
    ],
  });
}

export default async function RouteDetailPage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const route = getRoute(slug);

  if (!route) {
    notFound();
  }

  const routeAirports = route.airports
    .map((iata) => getAirport(iata))
    .filter((airport): airport is (typeof airports)[number] => Boolean(airport));
  const routeAirlines = route.airlines
    .map((airlineSlug) => getAirline(airlineSlug))
    .filter((airline): airline is (typeof airlines)[number] => Boolean(airline));
  const relatedRoutes = route.related
    .map((relatedSlug) => getRoute(relatedSlug))
    .filter((relatedRoute): relatedRoute is (typeof routes)[number] => Boolean(relatedRoute));
  const originCitySlug = route.originCity.toLowerCase().replace(/\s+/g, "-");
  const destinationCitySlug = route.destinationCity
    .toLowerCase()
    .replace(/\s+/g, "-");

  return (
    <main>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Routes", path: "/routes" },
            {
              name: `${route.originCity} to ${route.destinationCity}`,
              path: `/routes/${route.slug}`,
            },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: `${route.originCity} to ${route.destinationCity}: Best Flight Routes`,
            description: route.summary,
            url: absoluteUrl(`/routes/${route.slug}`),
            about: [
              `${route.originCity} to ${route.destinationCity} flights`,
              "Flight route comparison",
              "Airport connection quality",
            ],
          },
          itemListJsonLd({
            name: `${route.originCity} to ${route.destinationCity} route options`,
            description:
              "Fastest, best-value, and lowest-friction options for this flight route.",
            items: [route.fastest, route.bestValue, route.lowestFriction].map(
              (option) => ({
                name: `${option.label}: ${option.path}`,
                path: `/routes/${route.slug}`,
                description: `${option.time}. ${option.note}`,
              }),
            ),
          }),
        ]}
      />
      <PageEvent
        eventName="route_detail_viewed"
        properties={{
          page_type: "route_detail",
          route_slug: route.slug,
          origin_city: route.originCity,
          destination_city: route.destinationCity,
          origin_code: route.originCode,
          destination_code: route.destinationCode,
          route_signal: route.signal,
          route_score: route.score,
        }}
      />
      <section className="relative overflow-hidden bg-ink text-cloud">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,#13233F,#13233F_13px,#101D34_13px,#101D34_26px)] opacity-[0.76]" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/24 via-ink/72 to-ink" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:px-8">
          <div className="relative">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-brass">
              Mission profile
            </p>
            <h1 className="mt-5 text-5xl font-bold leading-tight text-cloud sm:text-6xl">
              {route.originCity} to {route.destinationCity} flight plan
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-cloud/68">
              {route.summary}
            </p>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              <div className="rounded-md border border-cloud/12 bg-cloud/[0.06] p-4">
                <p className="text-xs text-cloud/48">Signal</p>
                <p className="mt-1 font-semibold text-cloud">{route.signal}</p>
              </div>
              <div className="rounded-md border border-cloud/12 bg-cloud/[0.06] p-4">
                <p className="text-xs text-cloud/48">Distance</p>
                <p className="mt-1 font-mono font-semibold text-cloud">{route.distance}</p>
              </div>
              <div className="rounded-md border border-cloud/12 bg-cloud/[0.06] p-4">
                <p className="text-xs text-cloud/48">Airport pair</p>
                <p className="mt-1 font-mono font-semibold text-cloud">
                  {route.originCode}-{route.destinationCode}
                </p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <TrackedLink
                href={`/from/${originCitySlug}`}
                eventName="internal_seo_link_clicked"
                eventProperties={{
                  surface: "route_detail_city_links",
                  link_type: "origin_city",
                  route_slug: route.slug,
                  city: route.originCity,
                }}
                className="rounded-sm border border-cloud/16 bg-cloud/[0.06] px-4 py-2 text-sm font-semibold text-cloud transition hover:border-brass hover:text-brass"
              >
                Best routes from {route.originCity}
              </TrackedLink>
              <TrackedLink
                href={`/to/${destinationCitySlug}`}
                eventName="internal_seo_link_clicked"
                eventProperties={{
                  surface: "route_detail_city_links",
                  link_type: "destination_city",
                  route_slug: route.slug,
                  city: route.destinationCity,
                }}
                className="rounded-sm border border-cloud/16 bg-cloud/[0.06] px-4 py-2 text-sm font-semibold text-cloud transition hover:border-brass hover:text-brass"
              >
                Best ways to fly to {route.destinationCity}
              </TrackedLink>
            </div>
          </div>
          <div className="relative rounded-md border border-cloud/12 bg-cloud/[0.06] p-5 text-cloud shadow-flight">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-brass">
              Yeagr score
            </p>
            <p className="mt-4 font-mono text-6xl font-semibold text-cloud">{route.score}</p>
            <p className="mt-3 text-sm leading-6 text-cloud/64">
              Score based on speed, connection quality, airport friction, value,
              and resilience.
            </p>
            <div className="mt-8">
              <ScoreBar score={route.score} inverse />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Best ways to fly"
          title="Pick the flight plan, not the default result."
          description="The fastest, best-value, and cleanest route can each point to a different decision. Yeagr makes the trade-off explicit."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {[route.fastest, route.bestValue, route.lowestFriction].map((option) => (
            <div key={option.label} className="scan-card rounded-lg p-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-jetstream">
                {option.label}
              </p>
              <p className="mt-4 font-mono text-3xl font-semibold text-runway">
                {option.time}
              </p>
              <p className="mt-3 font-mono text-sm text-runway/48">{option.path}</p>
              <p className="mt-4 text-sm leading-6 text-runway/64">{option.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-runway/10 bg-white/52">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Decision notes"
            title="What changes the flight plan."
            description={route.watchOut}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {route.highlights.map((highlight, index) => (
              <div key={highlight} className="rounded-lg border border-runway/10 bg-cloud p-5">
                <p className="font-mono text-xs font-semibold text-jetstream">
                  0{index + 1}
                </p>
                <p className="mt-4 text-sm leading-6 text-runway/68">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {routeAirports.length ? (
        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Airport layer"
              title="Airports that shape this route."
            />
            <TrackedLink
              href="/airports"
              eventName="cta_clicked"
              eventProperties={{
                cta: "view_airports",
                surface: "route_detail_airport_layer",
                route_slug: route.slug,
                destination: "/airports",
              }}
              className="w-fit rounded-md border border-runway/12 px-4 py-2 text-sm font-semibold text-runway transition hover:bg-runway hover:text-cloud"
            >
              View airports
            </TrackedLink>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {routeAirports.map((airport) => (
              <AirportCard key={airport.iata} airport={airport} />
            ))}
          </div>
        </section>
      ) : null}

      {routeAirlines.length ? (
        <section className="border-y border-runway/10 bg-runway text-cloud">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-signal">
                Airline layer
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-cloud sm:text-4xl">
                Carriers worth checking first.
              </h2>
            </div>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {routeAirlines.map((airline) => (
                <div key={airline.slug} className="[&_a]:bg-cloud">
                  <AirlineCard airline={airline} />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {relatedRoutes.length ? (
        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Related" title="Similar route decisions." />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {relatedRoutes.map((relatedRoute) => (
              <RouteCard key={relatedRoute.slug} route={relatedRoute} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
