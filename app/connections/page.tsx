import { AirportCard } from "@/components/airport-card";
import { GuideCard } from "@/components/guide-card";
import { JsonLd } from "@/components/json-ld";
import { PageEvent } from "@/components/page-event";
import { RouteCard } from "@/components/route-card";
import { SectionHeading } from "@/components/section-heading";
import { airports } from "@/data/airports";
import { guides } from "@/data/guides";
import { routes } from "@/data/routes";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  itemListJsonLd,
} from "@/lib/seo";

const rules = [
  {
    title: "Short is not always better",
    body: "A 45-minute connection can be fragile at a complex hub. Yeagr favors realistic transfers over heroic ones.",
  },
  {
    title: "Hub quality changes value",
    body: "A one-stop fare is more attractive when the transfer airport is simple, resilient, and easy to navigate.",
  },
  {
    title: "Backup frequency matters",
    body: "The best connection has recovery options if the first flight arrives late.",
  },
];

export const metadata = buildPageMetadata({
  title: "Connection Quality - Best Layovers and Smarter Transfer Hubs",
  description:
    "Use Yeagr connection intelligence to compare layovers, transfer airports, hub quality, recovery options, and connection risk before choosing a one-stop flight.",
  path: "/connections",
  keywords: [
    "best layover airports",
    "flight connection quality",
    "airport transfer guide",
    "best flight connections",
    "layover risk",
  ],
});

export default function ConnectionsPage() {
  const bestConnectionAirports = [...airports]
    .sort((a, b) => b.connectionScore - a.connectionScore)
    .slice(0, 6);
  const connectionRoutes = routes.filter((route) => route.signal !== "Lowest friction");

  return (
    <main>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Connections", path: "/connections" },
          ]),
          itemListJsonLd({
            name: "Best airports for flight connections",
            description:
              "Transfer hubs ranked by connection quality and travel friction.",
            items: bestConnectionAirports.map((airport) => ({
              name: `${airport.name} (${airport.iata})`,
              path: `/airports/${airport.iata.toLowerCase()}`,
              description: airport.summary,
            })),
          }),
        ]}
      />
      <PageEvent
        eventName="connections_page_viewed"
        properties={{
          page_type: "connections",
          airport_count: bestConnectionAirports.length,
          route_count: connectionRoutes.length,
        }}
      />
      <section className="relative overflow-hidden bg-runway text-cloud">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_0%,rgba(200,149,78,0.22),transparent_26rem)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-brass">
              Connection quality
            </p>
            <h1 className="mt-5 text-5xl font-bold leading-tight text-cloud sm:text-6xl">
              The layover is not dead time. It is route risk.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-cloud/68">
              Yeagr treats transfers like a core part of the flight plan:
              timing, hub clarity, recovery options, and whether the stop
              actually improves the journey.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {rules.map((rule, index) => (
              <div
                key={rule.title}
                className="rounded-md border border-cloud/12 bg-cloud/[0.06] p-5"
              >
                <p className="font-mono text-xs font-semibold text-brass">
                  0{index + 1}
                </p>
                <h2 className="mt-4 text-xl font-semibold text-cloud">
                  {rule.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-cloud/64">{rule.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Transfer margin"
          title="Hubs that buy you time, clarity, and recovery."
          description="A good connection airport gives you room to move, clear routing through the terminal, and enough network depth to recover when the first leg slips."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {bestConnectionAirports.map((airport) => (
            <AirportCard key={airport.iata} airport={airport} />
          ))}
        </div>
      </section>

      <section className="border-y border-runway/10 bg-white/52">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Smart detours"
            title="Routes where the stop can beat the obvious choice."
            description="Some one-stop itineraries are slower on paper but better in practice once price, timing, hub quality, and arrival reliability are included."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {connectionRoutes.map((route) => (
              <RouteCard key={route.slug} route={route} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Field notes"
          title="Read the connection playbook."
          description="Practical guidance for judging layovers, transfer airports, and route resilience before the booking page narrows your options."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {guides.map((guide) => (
            <GuideCard
              key={guide.slug}
              guide={guide}
              surface="connections_guides"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
