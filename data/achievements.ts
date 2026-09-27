export type AchievementTrack = "passenger" | "crew" | "shared";

export type Rank = {
  level: number;
  name: string;
  threshold: string;
  description: string;
};

export type MissionPatch = {
  slug: string;
  name: string;
  code: string;
  track: AchievementTrack;
  rarity: "Core" | "Advanced" | "Elite";
  summary: string;
  unlock: string;
};

export type FlightLogStat = {
  label: string;
  value: string;
  detail: string;
};

export type UserTrack = {
  slug: "passenger" | "crew";
  label: string;
  title: string;
  description: string;
  metrics: string[];
  verification: string;
};

export const ranks: Rank[] = [
  {
    level: 1,
    name: "Ground Crew",
    threshold: "Start a flight log",
    description: "Set home airports, route preferences, and the first watchlist.",
  },
  {
    level: 2,
    name: "Cadet",
    threshold: "Log 3 routes",
    description: "Build an early travel profile from saved or imported trips.",
  },
  {
    level: 3,
    name: "Navigator",
    threshold: "Earn 5 patches",
    description: "Show clear route habits across airports, airlines, and connections.",
  },
  {
    level: 4,
    name: "Flight Officer",
    threshold: "Score 80+ route discipline",
    description: "Consistently choose cleaner, faster, or more resilient flight plans.",
  },
  {
    level: 5,
    name: "Captain",
    threshold: "Log 25 routes",
    description: "A mature passenger profile with reliable airport and route signals.",
  },
  {
    level: 6,
    name: "Test Pilot",
    threshold: "Beat route benchmarks",
    description: "Find smarter detours and prove them with time, value, or friction wins.",
  },
  {
    level: 7,
    name: "Barrier Breaker",
    threshold: "Sustain 90+ route discipline",
    description: "A top-tier travel profile built on efficient route choices.",
  },
];

export const missionPatches: MissionPatch[] = [
  {
    slug: "mach-one",
    name: "Mach 1",
    code: "M1",
    track: "shared",
    rarity: "Core",
    summary: "First verified trip or saved route in Yeagr.",
    unlock: "Log one completed trip or save one route plan.",
  },
  {
    slug: "clean-connection",
    name: "Clean Connection",
    code: "CC",
    track: "passenger",
    rarity: "Core",
    summary: "A layover that clears the Yeagr comfort threshold.",
    unlock: "Log a connection with a 75+ connection quality score.",
  },
  {
    slug: "smart-detour",
    name: "Smart Detour",
    code: "SD",
    track: "passenger",
    rarity: "Advanced",
    summary: "A one-stop route that beats the obvious choice on value or timing.",
    unlock: "Choose a Yeagr-recommended detour that beats the benchmark.",
  },
  {
    slug: "hub-master",
    name: "Hub Master",
    code: "HM",
    track: "shared",
    rarity: "Advanced",
    summary: "Repeatedly uses the same airport with strong outcomes.",
    unlock: "Log five efficient trips through one hub.",
  },
  {
    slug: "red-eye-veteran",
    name: "Red-Eye Veteran",
    code: "RV",
    track: "passenger",
    rarity: "Core",
    summary: "Knows when an overnight flight is worth the fatigue trade-off.",
    unlock: "Log three overnight flights with positive arrival timing.",
  },
  {
    slug: "standby-strategist",
    name: "Standby Strategist",
    code: "SS",
    track: "crew",
    rarity: "Advanced",
    summary: "Crew commute planning with backup frequency and margin.",
    unlock: "Save three crew commute plans with backup options.",
  },
  {
    slug: "base-commuter",
    name: "Base Commuter",
    code: "BC",
    track: "crew",
    rarity: "Core",
    summary: "Tracks repeat positioning routes between home and base.",
    unlock: "Create a home-to-base commute profile.",
  },
  {
    slug: "reserve-ready",
    name: "Reserve Ready",
    code: "RR",
    track: "crew",
    rarity: "Elite",
    summary: "Plans travel with recovery windows and schedule uncertainty.",
    unlock: "Build a crew plan with time margin, alternates, and hub backups.",
  },
  {
    slug: "barrier-breaker",
    name: "Barrier Breaker",
    code: "BB",
    track: "shared",
    rarity: "Elite",
    summary: "Sustains elite route discipline across saved and completed trips.",
    unlock: "Hold a 90+ route discipline score across 10 logged trips.",
  },
];

export const sampleFlightLogStats: FlightLogStat[] = [
  {
    label: "Route discipline",
    value: "87",
    detail: "Favors cleaner routes over fragile headline fares.",
  },
  {
    label: "Time saved",
    value: "18h",
    detail: "Against the slowest reasonable benchmark.",
  },
  {
    label: "Airports logged",
    value: "14",
    detail: "Across home, hub, destination, and connection roles.",
  },
  {
    label: "Patches earned",
    value: "9",
    detail: "Passenger, crew, and shared flight-log achievements.",
  },
];

export const userTracks: UserTrack[] = [
  {
    slug: "passenger",
    label: "Passenger layer",
    title: "For travelers who want sharper flight choices.",
    description:
      "Passenger profiles reward better route behavior: cleaner layovers, time saved, airport choices, value wins, and destinations reached with less friction.",
    metrics: [
      "Route discipline score",
      "Saved routes and completed trips",
      "Airport stamps and hub mastery",
      "Time saved versus route benchmarks",
    ],
    verification: "Trips can start as self-logged, then become verified through email, calendar, PDF, or booking import.",
  },
  {
    slug: "crew",
    label: "Crew layer",
    title: "For airline crew, commuters, and aviation professionals.",
    description:
      "Crew profiles focus on positioning, base commute planning, standby resilience, airport familiarity, and practical route margin. It is a professional travel layer, not an airline-issued credential.",
    metrics: [
      "Home-to-base commute plans",
      "Backup flight depth",
      "Connection and report-time margin",
      "Verified crew status for community features",
    ],
    verification:
      "Crew status should be opt-in and verified later with a work email, manual review, or approved credential check.",
  },
];
