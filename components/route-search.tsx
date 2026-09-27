"use client";

import { captureEvent } from "@/lib/analytics";

export function RouteSearch() {
  return (
    <form
      action="/routes"
      onSubmit={(event) => {
        const formData = new FormData(event.currentTarget);
        const origin = String(formData.get("from") || "").trim();
        const destination = String(formData.get("to") || "").trim();

        captureEvent("route_search_submitted", {
          origin: origin || undefined,
          destination: destination || undefined,
          source: "route_search_form",
        });
      }}
      className="rounded-md bg-cloud p-2 shadow-flight"
    >
      <div className="flex gap-1 px-1 pt-1">
        {["Flights", "Routes", "Connections"].map((item, index) => (
          <span
            key={item}
            className={
              index === 0
                ? "rounded-t-sm bg-white px-4 py-2 font-display text-sm font-semibold text-runway"
                : "rounded-t-sm px-4 py-2 font-display text-sm font-semibold text-runway/48"
            }
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-2 grid gap-px overflow-hidden rounded-sm bg-runway/12 md:grid-cols-[1fr_1fr_auto]">
        <label className="bg-white px-5 py-4">
          <span className="block font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-runway/45">
            From
          </span>
          <input
            name="from"
            placeholder="London"
            className="mt-1 w-full bg-transparent font-display text-xl font-semibold text-runway outline-none placeholder:text-runway/35"
          />
        </label>
        <label className="relative bg-white px-5 py-4">
          <span className="absolute -left-4 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-runway text-brass md:flex">
            <svg width="14" height="14" viewBox="0 0 100 100" aria-hidden="true">
              <polygon
                points="50,8 59.4,37.06 89.95,37.02 65.22,54.94 74.69,83.97 50,66 25.31,83.97 34.78,54.94 10.05,37.02 40.6,37.06"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="block font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-runway/45">
            To
          </span>
          <input
            name="to"
            placeholder="Tokyo"
            className="mt-1 w-full bg-transparent font-display text-xl font-semibold text-runway outline-none placeholder:text-runway/35"
          />
        </label>
        <button
          type="submit"
          className="bg-runway px-7 py-5 font-display text-base font-semibold text-cloud transition hover:bg-graphite"
        >
          Search
        </button>
      </div>
    </form>
  );
}
