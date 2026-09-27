import { YeagrMarkFlat } from "@/components/logo";
import type { MissionPatch } from "@/data/achievements";

type MissionPatchProps = {
  patch: MissionPatch;
  inverse?: boolean;
};

const trackLabels: Record<MissionPatch["track"], string> = {
  passenger: "Passenger",
  crew: "Crew",
  shared: "Shared",
};

export function MissionPatchCard({ patch, inverse = false }: MissionPatchProps) {
  return (
    <div
      className={
        inverse
          ? "rounded-md border border-cloud/12 bg-cloud/[0.06] p-5 text-cloud"
          : "scan-card rounded-md p-5"
      }
    >
      <div className="flex items-start gap-4">
        <div
          className={
            inverse
              ? "relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-brass/70 bg-ink"
              : "relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-brass/60 bg-runway"
          }
        >
          <div className="absolute inset-2 rounded-full border border-cloud/18" />
          <YeagrMarkFlat className="h-7 w-7 text-brass" />
          <span className="absolute bottom-2 font-mono text-[9px] font-bold text-cloud">
            {patch.code}
          </span>
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            <span
              className={
                inverse
                  ? "rounded-sm border border-cloud/12 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-cloud/58"
                  : "rounded-sm border border-runway/10 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-runway/48"
              }
            >
              {trackLabels[patch.track]}
            </span>
            <span className="rounded-sm bg-brass px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-runway">
              {patch.rarity}
            </span>
          </div>
          <h3
            className={
              inverse
                ? "mt-4 text-xl font-semibold text-cloud"
                : "mt-4 text-xl font-semibold text-runway"
            }
          >
            {patch.name}
          </h3>
          <p
            className={
              inverse
                ? "mt-2 text-sm leading-6 text-cloud/64"
                : "mt-2 text-sm leading-6 text-runway/64"
            }
          >
            {patch.summary}
          </p>
          <p
            className={
              inverse
                ? "mt-4 font-mono text-xs leading-5 text-cloud/48"
                : "mt-4 font-mono text-xs leading-5 text-runway/48"
            }
          >
            Unlock: {patch.unlock}
          </p>
        </div>
      </div>
    </div>
  );
}
