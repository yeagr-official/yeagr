"use client";

import Link from "next/link";
import type { Airport } from "@/data/airports";
import { captureEvent } from "@/lib/analytics";
import { ScoreBar } from "@/components/score-bar";

type AirportCardProps = {
  airport: Airport;
  surface?: string;
};

export function AirportCard({
  airport,
  surface = "airport_card",
}: AirportCardProps) {
  return (
    <Link
      href={`/airports/${airport.iata.toLowerCase()}`}
      onClick={() =>
        captureEvent("airport_card_clicked", {
          airport_iata: airport.iata,
          airport_name: airport.name,
          airport_city: airport.city,
          airport_country: airport.country,
          airport_type: airport.type,
          connection_score: airport.connectionScore,
          friction: airport.friction,
          surface,
        })
      }
      className="scan-card block rounded-lg p-5 transition hover:-translate-y-1 hover:shadow-flight"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-jetstream">
            {airport.type} airport
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-runway">
            {airport.city}
          </h3>
          <p className="mt-1 text-sm text-runway/55">{airport.name}</p>
        </div>
        <span className="rounded-md bg-runway px-3 py-2 font-mono text-sm font-semibold text-cloud">
          {airport.iata}
        </span>
      </div>
      <p className="mt-5 text-sm leading-6 text-runway/64">{airport.summary}</p>
      <div className="mt-5">
        <ScoreBar score={airport.connectionScore} label="Connection score" />
      </div>
      <div className="mt-5 rounded-md bg-runway/5 p-3 text-sm text-runway/68">
        Best for {airport.bestFor}.
      </div>
    </Link>
  );
}
