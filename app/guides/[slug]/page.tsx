import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { PageEvent } from "@/components/page-event";
import { RouteCard } from "@/components/route-card";
import { SectionHeading } from "@/components/section-heading";
import { TrackedLink } from "@/components/tracked-link";
import { getGuide, guides } from "@/data/guides";
import { routes } from "@/data/routes";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  buildPageMetadata,
} from "@/lib/seo";

type PageParams = Promise<{ slug: string }>;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    return {};
  }

  return buildPageMetadata({
    title: guide.title,
    description: guide.summary,
    path: `/guides/${guide.slug}`,
    type: "article",
    keywords: [
      guide.eyebrow,
      "flight route guide",
      "smart travel planning",
      "aviation travel guide",
    ],
  });
}

export default async function GuideDetailPage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  return (
    <main>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: guide.title, path: `/guides/${guide.slug}` },
          ]),
          articleJsonLd({
            title: guide.title,
            description: guide.summary,
            path: `/guides/${guide.slug}`,
          }),
        ]}
      />
      <PageEvent
        eventName="guide_detail_viewed"
        properties={{
          page_type: "guide_detail",
          guide_slug: guide.slug,
          guide_title: guide.title,
          guide_eyebrow: guide.eyebrow,
          read_time: guide.readTime,
        }}
      />
      <section className="relative overflow-hidden bg-ink text-cloud">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,#13233F,#13233F_13px,#101D34_13px,#101D34_26px)] opacity-[0.72]" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/22 via-ink/72 to-ink" />
        <div className="relative mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:px-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-brass">
            {guide.eyebrow}
          </p>
          <h1 className="mt-5 text-5xl font-bold leading-tight text-cloud sm:text-6xl">
            {guide.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-cloud/68">{guide.summary}</p>
          <p className="mt-6 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cloud/48">
            {guide.readTime}
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5">
          {guide.points.map((point, index) => (
            <section key={point} className="scan-card rounded-lg p-5">
              <p className="font-mono text-xs font-semibold text-jetstream">
                0{index + 1}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-runway">
                {point}
              </h2>
              <p className="mt-4 text-base leading-7 text-runway/64">
                Use this as a route filter. A flight that looks good in a search
                result still needs to pass the Yeagr test: clear timing, useful
                airport choice, and a connection that does not create avoidable risk.
              </p>
            </section>
          ))}
        </div>
      </article>

      <section className="border-y border-runway/10 bg-white/52">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Apply it"
              title="Use the field note on real routes."
              description="Yeagr guides are designed to turn into practical route decisions, not sit separately as travel inspiration."
            />
            <TrackedLink
              href="/guides"
              eventName="cta_clicked"
              eventProperties={{
                cta: "all_guides",
                surface: "guide_detail_apply_it",
                guide_slug: guide.slug,
                destination: "/guides",
              }}
              className="w-fit rounded-md border border-runway/12 px-4 py-2 text-sm font-semibold text-runway transition hover:bg-runway hover:text-cloud"
            >
              All guides
            </TrackedLink>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {routes.slice(0, 3).map((route) => (
              <RouteCard key={route.slug} route={route} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
