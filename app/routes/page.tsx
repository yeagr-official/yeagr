import { JsonLd } from "@/components/json-ld";
import { PageEvent } from "@/components/page-event";
import { RouteCard } from "@/components/route-card";
import { RouteSearch } from "@/components/route-search";
import { SectionHeading } from "@/components/section-heading";
import { routes } from "@/data/routes";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  itemListJsonLd,
} from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Flight Route Board - Fast, Low-Friction Flight Comparisons",
  description:
    "Use the Yeagr route board to compare fast, low-friction flight plans by journey time, fare value, airport quality, airline strength, and connection risk.",
  path: "/routes",
  keywords: [
    "flight route finder",
    "compare flight routes",
    "best way to fly",
    "fastest flight routes",
    "route intelligence",
  ],
});

export default function RoutesPage() {
  return (
    <main>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Routes", path: "/routes" },
          ]),
          itemListJsonLd({
            name: "Yeagr flight route finder",
            description:
              "Routes ranked by speed, value, connection quality, and travel friction.",
            items: routes.map((route) => ({
              name: `${route.originCity} to ${route.destinationCity}`,
              path: `/routes/${route.slug}`,
              description: route.summary,
            })),
          }),
        ]}
      />
      <PageEvent
        eventName="routes_index_viewed"
        properties={{ page_type: "routes_index", route_count: routes.length }}
      />
      <section className="relative overflow-hidden bg-ink text-cloud">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,#13233F,#13233F_13px,#101D34_13px,#101D34_26px)] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/22 via-ink/76 to-ink" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-brass">
              Route board
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-tight text-cloud sm:text-6xl">
              Find the flight plan that actually wins.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-cloud/68">
              Start with a city pair. Yeagr compares speed, value, friction,
              and connection quality so the smartest path is easier to see.
            </p>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              <div className="border-t border-brass/40 pt-4">
                <p className="font-display text-3xl font-bold text-cloud">
                  {routes.length}
                  <span className="text-brass">+</span>
                </p>
                <p className="mt-1 text-sm text-cloud/52">launch routes</p>
              </div>
              <div className="border-t border-brass/40 pt-4">
                <p className="font-display text-3xl font-bold text-cloud">3</p>
                <p className="mt-1 text-sm text-cloud/52">plans per route</p>
              </div>
              <div className="border-t border-brass/40 pt-4">
                <p className="font-display text-3xl font-bold text-cloud">0</p>
                <p className="mt-1 text-sm text-cloud/52">destination fluff</p>
              </div>
            </div>
          </div>
          <div className="self-center">
            <RouteSearch />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Active routes"
          title="Speed, value, and friction rarely agree."
          description="Each route is structured like a flight brief: fastest option, best-value option, lowest-friction option, and the trade-offs that matter before booking."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {routes.map((route, index) => (
            <RouteCard key={route.slug} route={route} featured={index === 0} />
          ))}
        </div>
      </section>
    </main>
  );
}
