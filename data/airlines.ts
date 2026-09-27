export type Airline = {
  slug: string;
  name: string;
  code: string;
  home: string;
  networkRole: string;
  routeStrength: number;
  bestFor: string;
  tradeoff: string;
  summary: string;
};

export const airlines: Airline[] = [
  {
    slug: "finnair",
    name: "Finnair",
    code: "AY",
    home: "Helsinki",
    networkRole: "Northern bridge between Europe and Asia",
    routeStrength: 86,
    bestFor: "cleaner Europe to North Asia connections",
    tradeoff: "smaller long-haul network than Gulf or mega hubs",
    summary:
      "Finnair is useful when Helsinki creates a shorter, calmer connection between Europe and Asia.",
  },
  {
    slug: "qatar-airways",
    name: "Qatar Airways",
    code: "QR",
    home: "Doha",
    networkRole: "Global one-stop connector",
    routeStrength: 92,
    bestFor: "value-rich long-haul one-stop itineraries",
    tradeoff: "some trips involve overnight or late-night transfer windows",
    summary:
      "Qatar Airways is one of the strongest default options when a one-stop routing beats an expensive nonstop.",
  },
  {
    slug: "singapore-airlines",
    name: "Singapore Airlines",
    code: "SQ",
    home: "Singapore",
    networkRole: "Premium Asia-Pacific connector",
    routeStrength: 93,
    bestFor: "Asia-Pacific reliability and premium long-haul service",
    tradeoff: "not always the shortest geography for Europe to Australia",
    summary:
      "Singapore Airlines pairs a strong hub with a polished network, especially for Asia-Pacific trips.",
  },
  {
    slug: "emirates",
    name: "Emirates",
    code: "EK",
    home: "Dubai",
    networkRole: "Scale-heavy east-west long-haul operator",
    routeStrength: 89,
    bestFor: "wide long-haul coverage through Dubai",
    tradeoff: "larger hub can mean longer transfer walks",
    summary:
      "Emirates is a powerful option when Dubai creates a simple one-stop route across continents.",
  },
  {
    slug: "british-airways",
    name: "British Airways",
    code: "BA",
    home: "London",
    networkRole: "London-centered long-haul gateway",
    routeStrength: 82,
    bestFor: "nonstop reach from London and premium cabins",
    tradeoff: "Heathrow friction can matter on tight transfers",
    summary:
      "British Airways is strongest when London is your origin, destination, or the only practical nonstop gateway.",
  },
  {
    slug: "klm",
    name: "KLM",
    code: "KL",
    home: "Amsterdam",
    networkRole: "European feeder and global connector",
    routeStrength: 83,
    bestFor: "European city access and single-ticket connections",
    tradeoff: "Schiphol disruption can affect connection quality",
    summary:
      "KLM remains useful for connecting smaller European cities into a broad long-haul network.",
  },
];

export function getAirline(slug: string) {
  return airlines.find((airline) => airline.slug === slug);
}
