import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { PageEvent } from "@/components/page-event";
import { RouteCard } from "@/components/route-card";
import { ScoreBar } from "@/components/score-bar";
import { SectionHeading } from "@/components/section-heading";
import { TrackedLink } from "@/components/tracked-link";
import { airlines, getAirline } from "@/data/airlines";
import { routes } from "@/data/routes";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  buildPageMetadata,
  itemListJsonLd,
} from "@/lib/seo";

type PageParams = Promise<{ slug: string }>;

export function generateStaticParams() {
  return airlines.map((airline) => ({ slug: airline.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const airline = getAirline(slug);

  if (!airline) {
    return {};
  }

  return buildPageMetadata({
    title: `${airline.name} Route Strength and Network Profile`,
    description: `${airline.summary} Use Yeagr to see when ${airline.name} is useful, where its network is strongest, and which smart routes feature it.`,
    path: `/airlines/${airline.slug}`,
    keywords: [
      `${airline.name} routes`,
      `${airline.name} network`,
      `${airline.code} airline`,
      "airline route strength",
      "airline network guide",
    ],
  });
}

export default async function AirlineDetailPage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const airline = getAirline(slug);

  if (!airline) {
    notFound();
  }

  const relatedRoutes = routes.filter((route) => route.airlines.includes(airline.slug));

  return (
    <main>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Airlines", path: "/airlines" },
            { name: airline.name, path: `/airlines/${airline.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Airline",
            name: airline.name,
            iataCode: airline.code,
            url: absoluteUrl(`/airlines/${airline.slug}`),
            description: airline.summary,
          },
          itemListJsonLd({
            name: `${airline.name} route coverage`,
            description: `Routes where ${airline.name} is a relevant routing choice.`,
            items: relatedRoutes.map((route) => ({
              name: `${route.originCity} to ${route.destinationCity}`,
              path: `/routes/${route.slug}`,
              description: route.summary,
            })),
          }),
        ]}
      />
      <PageEvent
        eventName="airline_detail_viewed"
        properties={{
          page_type: "airline_detail",
          airline_slug: airline.slug,
          airline_name: airline.name,
          airline_code: airline.code,
          airline_home: airline.home,
          route_strength: airline.routeStrength,
          related_route_count: relatedRoutes.length,
        }}
      />
      <section className="relative overflow-hidden bg-ink text-cloud">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,#13233F,#13233F_13px,#101D34_13px,#101D34_26px)] opacity-[0.76]" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/24 via-ink/72 to-ink" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1fr_0.7fr] lg:px-8">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-brass">
              Carrier profile
            </p>
            <h1 className="mt-5 text-5xl font-bold leading-tight text-cloud sm:text-6xl">
              {airline.name}
            </h1>
            <p className="mt-4 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-cloud/48">
              {airline.code} - {airline.home}
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-cloud/68">
              {airline.summary}
            </p>
          </div>
          <div className="rounded-md border border-cloud/12 bg-cloud/[0.06] p-5 text-cloud shadow-flight">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-brass">
              Route strength
            </p>
            <p className="mt-4 font-mono text-6xl font-semibold text-cloud">
              {airline.routeStrength}
            </p>
            <div className="mt-8">
              <ScoreBar score={airline.routeStrength} inverse />
            </div>
            <div className="mt-6 grid gap-3 text-sm text-cloud/68">
              <p>
                <span className="text-cloud">Role:</span> {airline.networkRole}
              </p>
              <p>
                <span className="text-cloud">Best for:</span> {airline.bestFor}
              </p>
              <p>
                <span className="text-cloud">Trade-off:</span> {airline.tradeoff}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Routes"
            title={`Routes where ${airline.name} is relevant.`}
            description="Use airline pages to understand when a carrier is a smart routing choice, not just a brand preference or loyalty habit."
          />
          <TrackedLink
            href="/airlines"
            eventName="cta_clicked"
            eventProperties={{
              cta: "browse_airlines",
              surface: "airline_detail_routes",
              airline_slug: airline.slug,
              destination: "/airlines",
            }}
            className="w-fit rounded-md border border-runway/12 px-4 py-2 text-sm font-semibold text-runway transition hover:bg-runway hover:text-cloud"
          >
            Browse airlines
          </TrackedLink>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {relatedRoutes.length ? (
            relatedRoutes.map((route) => <RouteCard key={route.slug} route={route} />)
          ) : (
            <p className="rounded-lg border border-runway/10 bg-white/62 p-5 text-runway/64">
              Route coverage for this airline is coming soon.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
