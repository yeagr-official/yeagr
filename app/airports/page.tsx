import { AirportCard } from "@/components/airport-card";
import { JsonLd } from "@/components/json-ld";
import { PageEvent } from "@/components/page-event";
import { SectionHeading } from "@/components/section-heading";
import { airports } from "@/data/airports";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  itemListJsonLd,
} from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Airport Intelligence - Best Hubs for Smarter Flight Routes",
  description:
    "Rank major airports by connection quality, transfer friction, hub strength, recovery options, and usefulness for smarter flight routes.",
  path: "/airports",
  keywords: [
    "best connection airports",
    "airport connection quality",
    "airport transfer guide",
    "flight hub rankings",
  ],
});

export default function AirportsPage() {
  const sortedAirports = [...airports].sort(
    (a, b) => b.connectionScore - a.connectionScore,
  );
  const topAirport = sortedAirports[0];

  return (
    <main>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Airports", path: "/airports" },
          ]),
          itemListJsonLd({
            name: "Airports ranked by connection quality",
            description:
              "Major airports scored by hub role, transfer friction, and route usefulness.",
            items: sortedAirports.map((airport) => ({
              name: `${airport.name} (${airport.iata})`,
              path: `/airports/${airport.iata.toLowerCase()}`,
              description: airport.summary,
            })),
          }),
        ]}
      />
      <PageEvent
        eventName="airports_index_viewed"
        properties={{
          page_type: "airports_index",
          airport_count: sortedAirports.length,
        }}
      />
      <section className="relative overflow-hidden bg-runway text-cloud">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(200,149,78,0.22),transparent_24rem)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:px-8">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-brass">
              Airport control
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-tight text-cloud sm:text-6xl">
              Know the hubs before they decide your trip.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-cloud/68">
              The airport is not a footnote. It can save the route, slow the
              route, or break the connection. Yeagr ranks hubs by the travel
              mechanics that matter.
            </p>
          </div>
          {topAirport ? (
            <div className="rounded-md border border-cloud/12 bg-cloud/[0.06] p-5 shadow-flight">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-brass">
                Current benchmark
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-cloud">
                {topAirport.name}
              </h2>
              <p className="mt-2 font-mono text-sm text-cloud/52">
                {topAirport.iata} - {topAirport.city}
              </p>
              <p className="mt-5 font-display text-6xl font-bold text-cloud">
                {topAirport.connectionScore}
              </p>
              <p className="mt-3 text-sm leading-6 text-cloud/64">
                Connection score across transfer clarity, network role, and
                route usefulness.
              </p>
            </div>
          ) : null}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ranked hubs"
          title="The best airport is the one that keeps the route clean."
          description="Browse airports by connection quality, transfer friction, hub role, and the situations where each one actually helps."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {sortedAirports.map((airport) => (
            <AirportCard key={airport.iata} airport={airport} />
          ))}
        </div>
      </section>
    </main>
  );
}
