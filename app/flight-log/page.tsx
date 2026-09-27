import { JsonLd } from "@/components/json-ld";
import { YeagrMark } from "@/components/logo";
import { MissionPatchCard } from "@/components/mission-patch";
import { PageEvent } from "@/components/page-event";
import { ScoreBar } from "@/components/score-bar";
import { SectionHeading } from "@/components/section-heading";
import { TrackedLink } from "@/components/tracked-link";
import {
  missionPatches,
  ranks,
  sampleFlightLogStats,
  userTracks,
} from "@/data/achievements";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  itemListJsonLd,
} from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Yeagr Flight Log - Passenger and Crew Route Achievements",
  description:
    "Yeagr Flight Log turns smarter travel into ranks, mission patches, airport stamps, route discipline, and separate passenger and crew achievement layers.",
  path: "/flight-log",
  keywords: [
    "flight log",
    "travel gamification",
    "airport badges",
    "flight achievements",
    "airline crew commute planning",
    "route discipline score",
  ],
});

const featuredPatches = missionPatches.slice(0, 6);
const crewPatches = missionPatches.filter((patch) => patch.track === "crew");

const intelligenceLoop = [
  {
    step: "01",
    title: "Save or import a trip",
    body: "Start with saved routes, manual trip logging, booking email import, calendar import, or a later browser companion.",
  },
  {
    step: "02",
    title: "Score the route",
    body: "Yeagr reads time, value, airport friction, connection margin, airline strength, and user preferences.",
  },
  {
    step: "03",
    title: "Award the signal",
    body: "Trips unlock ranks, mission patches, airport stamps, route records, and smarter recommendations.",
  },
];

export default function FlightLogPage() {
  return (
    <main>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Flight Log", path: "/flight-log" },
          ]),
          itemListJsonLd({
            name: "Yeagr mission patches",
            description:
              "Passenger, crew, and shared achievements for smarter aviation-first travel.",
            items: missionPatches.map((patch) => ({
              name: patch.name,
              path: "/flight-log",
              description: patch.summary,
            })),
          }),
        ]}
      />
      <PageEvent
        eventName="flight_log_page_viewed"
        properties={{
          page_type: "flight_log",
          patch_count: missionPatches.length,
          rank_count: ranks.length,
        }}
      />

      <section className="relative overflow-hidden bg-ink text-cloud">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,#13233F,#13233F_13px,#101D34_13px,#101D34_26px)] opacity-[0.76]" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/22 via-ink/70 to-ink" />
        <YeagrMark className="absolute -right-24 -top-16 h-[32rem] w-[32rem] opacity-[0.08]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[0.94fr_1.06fr] lg:px-8 lg:py-24">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-brass">
              Flight log
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight text-cloud sm:text-7xl">
              Turn smarter travel into a record.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-cloud/72 sm:text-xl">
              Yeagr rewards the behavior airlines do not: clean connections,
              efficient route choices, useful hubs, smart detours, and the
              skill of getting there with less friction.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <TrackedLink
                href="/routes"
                eventName="cta_clicked"
                eventProperties={{
                  cta: "start_with_route",
                  surface: "flight_log_hero",
                  destination: "/routes",
                }}
                className="rounded-sm bg-cloud px-5 py-3 text-sm font-semibold text-runway transition hover:bg-white"
              >
                Start with a route
              </TrackedLink>
              <TrackedLink
                href="/connections"
                eventName="cta_clicked"
                eventProperties={{
                  cta: "study_connections",
                  surface: "flight_log_hero",
                  destination: "/connections",
                }}
                className="rounded-sm border border-cloud/24 px-5 py-3 text-sm font-semibold text-cloud transition hover:border-brass hover:text-brass"
              >
                Study connections
              </TrackedLink>
            </div>
          </div>

          <div className="rounded-md border border-cloud/12 bg-cloud/[0.06] p-5 shadow-flight">
            <div className="flex items-start justify-between gap-5 border-b border-cloud/10 pb-5">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-brass">
                  Sample profile
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-cloud">
                  Passenger + crew ready
                </h2>
              </div>
              <div className="rounded-full border border-brass/60 bg-ink p-3">
                <YeagrMark className="h-10 w-10" />
              </div>
            </div>
            <div className="mt-5">
              <ScoreBar score={87} label="Route discipline" inverse />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {sampleFlightLogStats.map((stat) => (
                <div key={stat.label} className="rounded-sm border border-cloud/10 p-4">
                  <p className="font-display text-3xl font-bold text-cloud">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-cloud">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-cloud/52">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-runway/10 bg-runway text-cloud">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {userTracks.map((track) => (
              <div
                key={track.slug}
                className="rounded-md border border-cloud/12 bg-cloud/[0.05] p-6"
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                  {track.label}
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-cloud">
                  {track.title}
                </h2>
                <p className="mt-4 text-sm leading-6 text-cloud/64">
                  {track.description}
                </p>
                <div className="mt-6 grid gap-2">
                  {track.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="flex items-center gap-3 border-t border-cloud/10 pt-3 text-sm text-cloud/72"
                    >
                      <span className="h-2 w-2 rounded-full bg-brass" />
                      {metric}
                    </div>
                  ))}
                </div>
                <p className="mt-6 rounded-sm border border-brass/30 bg-ink/36 p-4 text-xs leading-5 text-cloud/56">
                  {track.verification}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Mission patches"
          title="Badges with route intelligence behind them."
          description="Patches should not reward random travel volume. They should reward route skill: better connections, smarter detours, airport mastery, crew commute planning, and resilient flight choices."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredPatches.map((patch) => (
            <MissionPatchCard key={patch.slug} patch={patch} />
          ))}
        </div>
      </section>

      <section className="border-y border-runway/10 bg-cloud">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Rank ladder"
              title="A progression system for sharper travelers."
              description="Ranks give users a reason to come back, import trips, and improve their route discipline over time."
            />
          </div>
          <div className="grid gap-3">
            {ranks.map((rank) => (
              <div
                key={rank.name}
                className="grid gap-4 rounded-md border border-runway/10 bg-white/62 p-4 sm:grid-cols-[auto_1fr_auto]"
              >
                <p className="font-mono text-sm font-bold text-brass">
                  LVL {rank.level}
                </p>
                <div>
                  <h3 className="font-display text-xl font-semibold text-runway">
                    {rank.name}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-runway/64">
                    {rank.description}
                  </p>
                </div>
                <p className="font-mono text-xs text-runway/48 sm:text-right">
                  {rank.threshold}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-cloud">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-brass">
                Crew layer
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-cloud sm:text-5xl">
                Built for passengers. Extendable to working crew.
              </h2>
              <p className="mt-5 text-base leading-7 text-cloud/64 sm:text-lg">
                Crew mode should understand commute reality: base positioning,
                report-time margin, standby backup depth, airport familiarity,
                and repeat routes. It should never replace airline systems,
                operational guidance, or official crew credentials.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {crewPatches.map((patch) => (
                <MissionPatchCard key={patch.slug} patch={patch} inverse />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Intel loop"
          title="How gamification improves the product."
          description="The game layer is also a data layer. Every saved route, imported trip, airport stamp, and patch gives Yeagr better signals for future recommendations."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {intelligenceLoop.map((item) => (
            <div key={item.step} className="scan-card rounded-md p-5">
              <p className="font-mono text-xs font-semibold text-brass">
                {item.step}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-runway">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-runway/64">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
