export type Guide = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  readTime: string;
  points: string[];
};

export const guides: Guide[] = [
  {
    slug: "best-layover-airports",
    title: "The best layover airports are not always the biggest",
    eyebrow: "Connection intelligence",
    summary:
      "A strong layover airport is easy to navigate, resilient during disruption, and useful when your plans change.",
    readTime: "5 min",
    points: [
      "Prioritize terminal simplicity over headline airport size.",
      "Look for high onward frequency when missing one flight would hurt.",
      "Give extra weight to hubs with clear wayfinding and realistic transfer times.",
    ],
  },
  {
    slug: "fastest-routes-vs-cheapest-routes",
    title: "When the cheapest flight is not the best value",
    eyebrow: "Route trade-offs",
    summary:
      "A low fare can hide a weak connection, poor arrival time, or avoidable airport friction.",
    readTime: "4 min",
    points: [
      "Compare total journey time, not just air time.",
      "Treat overnight layovers as a real cost.",
      "Value nonstop flights higher when arrival reliability matters.",
    ],
  },
  {
    slug: "how-to-choose-a-connection",
    title: "How to choose a cleaner connection",
    eyebrow: "Travel mechanics",
    summary:
      "Good connections are built from timing, terminal design, airline protection, and backup frequency.",
    readTime: "6 min",
    points: [
      "Avoid short connections at airports with terminal changes.",
      "Prefer same-airline or alliance-protected itineraries.",
      "Check whether the hub has another onward departure later that day.",
    ],
  },
  {
    slug: "why-airport-choice-matters",
    title: "Why airport choice matters more than most travelers think",
    eyebrow: "Airport strategy",
    summary:
      "The airport you choose can change the whole trip: transfer risk, ground time, fare options, and backup plans.",
    readTime: "5 min",
    points: [
      "City airports often beat distant airports even with a higher fare.",
      "Large hubs are powerful but can create hidden walking and queue time.",
      "Alternative airports can unlock cheaper or cleaner routings.",
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
