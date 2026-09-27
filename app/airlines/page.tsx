import { AirlineCard } from "@/components/airline-card";
import { JsonLd } from "@/components/json-ld";
import { PageEvent } from "@/components/page-event";
import { SectionHeading } from "@/components/section-heading";
import { airlines } from "@/data/airlines";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  itemListJsonLd,
} from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Airline Network Intelligence - Route Strength by Carrier",
  description:
    "Compare airlines by route strength, hub role, network usefulness, and the trips where each carrier makes the most sense.",
  path: "/airlines",
  keywords: [
    "airline route strength",
    "best airlines by route",
    "airline network guide",
    "airline hub strategy",
  ],
});

export default function AirlinesPage() {
  const sortedAirlines = [...airlines].sort(
    (a, b) => b.routeStrength - a.routeStrength,
  );
  const leadingAirline = sortedAirlines[0];

  return (
    <main>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Airlines", path: "/airlines" },
          ]),
          itemListJsonLd({
            name: "Airlines ranked by route usefulness",
            description:
              "Airlines compared by route strength, network role, and travel trade-offs.",
            items: sortedAirlines.map((airline) => ({
              name: airline.name,
              path: `/airlines/${airline.slug}`,
              description: airline.summary,
            })),
          }),
        ]}
      />
      <PageEvent
        eventName="airlines_index_viewed"
        properties={{
          page_type: "airlines_index",
          airline_count: sortedAirlines.length,
        }}
      />
      <section className="relative overflow-hidden bg-ink text-cloud">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,#13233F,#13233F_13px,#101D34_13px,#101D34_26px)] opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/28 via-ink/72 to-ink" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:px-8">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-brass">
              Network map
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-tight text-cloud sm:text-6xl">
              Choose the carrier for the route, not the logo.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-cloud/68">
              A strong airline is only strong when the network fits the trip.
              Yeagr ranks carriers by route usefulness, hub leverage, and the
              corridors where they make the itinerary sharper.
            </p>
          </div>
          {leadingAirline ? (
            <div className="rounded-md border border-cloud/12 bg-cloud/[0.06] p-5 shadow-flight">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-brass">
                Strongest launch network
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-cloud">
                {leadingAirline.name}
              </h2>
              <p className="mt-2 font-mono text-sm text-cloud/52">
                {leadingAirline.code} - {leadingAirline.home}
              </p>
              <p className="mt-5 font-display text-6xl font-bold text-cloud">
                {leadingAirline.routeStrength}
              </p>
              <p className="mt-3 text-sm leading-6 text-cloud/64">
                Route strength across hub leverage, coverage, and practical
                itinerary usefulness.
              </p>
            </div>
          ) : null}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ranked carriers"
          title="Airline choice is route architecture."
          description="Use airline pages to see when a carrier creates a better flight plan, cleaner connection, stronger value play, or more resilient backup option."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {sortedAirlines.map((airline) => (
            <AirlineCard key={airline.slug} airline={airline} />
          ))}
        </div>
      </section>
    </main>
  );
}
