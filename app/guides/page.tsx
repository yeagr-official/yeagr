import { GuideCard } from "@/components/guide-card";
import { JsonLd } from "@/components/json-ld";
import { PageEvent } from "@/components/page-event";
import { SectionHeading } from "@/components/section-heading";
import { guides } from "@/data/guides";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  itemListJsonLd,
} from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Yeagr Field Notes - Aviation-First Travel Guides",
  description:
    "Read Yeagr field notes on flight routes, layovers, airport choice, airline networks, and smarter aviation-first travel planning.",
  path: "/guides",
  keywords: [
    "flight route guides",
    "aviation travel guides",
    "layover guide",
    "airport choice guide",
    "smart flight planning",
  ],
});

export default function GuidesPage() {
  return (
    <main>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
          ]),
          itemListJsonLd({
            name: "Yeagr aviation-first travel guides",
            description:
              "Guides for smarter flight routing, layovers, airport choice, and travel efficiency.",
            items: guides.map((guide) => ({
              name: guide.title,
              path: `/guides/${guide.slug}`,
              description: guide.summary,
            })),
          }),
        ]}
      />
      <PageEvent
        eventName="guides_index_viewed"
        properties={{ page_type: "guides_index", guide_count: guides.length }}
      />
      <section className="relative overflow-hidden bg-ink text-cloud">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,#13233F,#13233F_13px,#101D34_13px,#101D34_26px)] opacity-70" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-brass">
            Field notes
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-tight text-cloud sm:text-6xl">
            Sharper travel calls, written for the cockpit.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-cloud/68">
            Practical guidance on route choice, layover judgment, airport
            friction, and airline networks. No generic inspiration filler.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Latest briefs"
          title="Guides that make the flight plan clearer."
          description="Every guide should help a traveler make a faster, cleaner, or more commercially sensible route decision."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} surface="guides_index" />
          ))}
        </div>
      </section>
    </main>
  );
}
