"use client";

import Link from "next/link";
import type { Airline } from "@/data/airlines";
import { captureEvent } from "@/lib/analytics";
import { ScoreBar } from "@/components/score-bar";

type AirlineCardProps = {
  airline: Airline;
  surface?: string;
};

export function AirlineCard({
  airline,
  surface = "airline_card",
}: AirlineCardProps) {
  return (
    <Link
      href={`/airlines/${airline.slug}`}
      onClick={() =>
        captureEvent("airline_card_clicked", {
          airline_slug: airline.slug,
          airline_name: airline.name,
          airline_code: airline.code,
          airline_home: airline.home,
          route_strength: airline.routeStrength,
          surface,
        })
      }
      className="scan-card block rounded-lg p-5 transition hover:-translate-y-1 hover:shadow-flight"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-jetstream">
            {airline.code}
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-runway">
            {airline.name}
          </h3>
          <p className="mt-1 text-sm text-runway/55">{airline.home}</p>
        </div>
      </div>
      <p className="mt-5 text-sm leading-6 text-runway/64">{airline.summary}</p>
      <div className="mt-5">
        <ScoreBar score={airline.routeStrength} label="Route strength" />
      </div>
      <div className="mt-5 rounded-md bg-runway/5 p-3 text-sm text-runway/68">
        Best for {airline.bestFor}.
      </div>
    </Link>
  );
}
