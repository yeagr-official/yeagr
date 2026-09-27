"use client";

import Link from "next/link";
import type { Guide } from "@/data/guides";
import { captureEvent } from "@/lib/analytics";

type GuideCardProps = {
  guide: Guide;
  surface?: string;
};

export function GuideCard({ guide, surface = "guide_card" }: GuideCardProps) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      onClick={() =>
        captureEvent("guide_card_clicked", {
          guide_slug: guide.slug,
          guide_title: guide.title,
          guide_eyebrow: guide.eyebrow,
          surface,
        })
      }
      className="scan-card rounded-lg p-5 transition hover:-translate-y-1 hover:shadow-flight"
    >
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-jetstream">
        {guide.eyebrow}
      </p>
      <h3 className="mt-4 text-xl font-semibold text-runway">
        {guide.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-runway/64">{guide.summary}</p>
      <p className="mt-5 font-mono text-xs font-semibold text-runway/45">
        {guide.readTime}
      </p>
    </Link>
  );
}
