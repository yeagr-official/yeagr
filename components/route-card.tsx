"use client";

import Link from "next/link";
import type { Route } from "@/data/routes";
import { captureEvent } from "@/lib/analytics";
import { ScoreBar } from "@/components/score-bar";

type RouteCardProps = {
  route: Route;
  featured?: boolean;
  surface?: string;
};

export function RouteCard({
  route,
  featured = false,
  surface = "route_card",
}: RouteCardProps) {
  return (
    <Link
      href={`/routes/${route.slug}`}
      onClick={() =>
        captureEvent("route_card_clicked", {
          route_slug: route.slug,
          origin_city: route.originCity,
          destination_city: route.destinationCity,
          origin_code: route.originCode,
          destination_code: route.destinationCode,
          route_signal: route.signal,
          route_score: route.score,
          featured,
          surface,
        })
      }
      className={
        featured
          ? "group dark-panel block rounded-lg p-5 text-cloud shadow-flight transition hover:-translate-y-1"
          : "group scan-card block rounded-lg p-5 transition hover:-translate-y-1 hover:shadow-flight"
      }
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p
            className={
              featured
                ? "font-mono text-xs font-semibold uppercase tracking-[0.18em] text-signal"
                : "font-mono text-xs font-semibold uppercase tracking-[0.18em] text-jetstream"
            }
          >
            {route.signal}
          </p>
          <h3
            className={
              featured
                ? "mt-3 text-2xl font-semibold text-cloud"
                : "mt-3 text-2xl font-semibold text-runway"
            }
          >
            {route.originCity} to {route.destinationCity}
          </h3>
        </div>
        <div
          className={
            featured
              ? "rounded-md border border-cloud/14 px-3 py-2 font-mono text-sm font-semibold text-cloud"
              : "rounded-md border border-runway/10 px-3 py-2 font-mono text-sm font-semibold text-runway"
          }
        >
          {route.originCode}-{route.destinationCode}
        </div>
      </div>

      <div className="route-line my-6 h-8">
        <div
          className={
            featured
              ? "absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-cloud px-2 py-1 font-mono text-xs font-semibold text-runway"
              : "absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-runway px-2 py-1 font-mono text-xs font-semibold text-cloud"
          }
        >
          {route.originCode}
        </div>
        <div
          className={
            featured
              ? "absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-signal px-2 py-1 font-mono text-xs font-semibold text-runway"
              : "absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-signal px-2 py-1 font-mono text-xs font-semibold text-runway"
          }
        >
          {route.destinationCode}
        </div>
      </div>

      <p className={featured ? "text-sm leading-6 text-cloud/68" : "text-sm leading-6 text-runway/64"}>
        {route.summary}
      </p>

      <div className="mt-5 grid gap-3 border-t border-current/10 pt-5 sm:grid-cols-3">
        {[route.fastest, route.bestValue, route.lowestFriction].map((option) => (
          <div key={option.label}>
            <p className={featured ? "text-xs text-cloud/48" : "text-xs text-runway/48"}>
              {option.label}
            </p>
            <p className={featured ? "mt-1 font-mono text-sm font-semibold text-cloud" : "mt-1 font-mono text-sm font-semibold text-runway"}>
              {option.time}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <ScoreBar score={route.score} inverse={featured} />
      </div>
    </Link>
  );
}
