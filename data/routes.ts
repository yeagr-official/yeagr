export type RouteOption = {
  label: string;
  time: string;
  path: string;
  note: string;
};

export type Route = {
  slug: string;
  originCity: string;
  destinationCity: string;
  originCode: string;
  destinationCode: string;
  summary: string;
  score: number;
  signal: "Fastest" | "Best value" | "Lowest friction" | "Smart detour";
  distance: string;
  fastest: RouteOption;
  bestValue: RouteOption;
  lowestFriction: RouteOption;
  airports: string[];
  airlines: string[];
  highlights: string[];
  watchOut: string;
  related: string[];
};

export const routes: Route[] = [
  {
    slug: "london-to-tokyo",
    originCity: "London",
    destinationCity: "Tokyo",
    originCode: "LHR",
    destinationCode: "HND",
    summary:
      "A route where the smartest choice depends on whether you value speed, price, or connection calm.",
    score: 88,
    signal: "Smart detour",
    distance: "5,960 mi",
    fastest: {
      label: "Fastest",
      time: "13h 45m",
      path: "LHR - HEL - HND",
      note: "Helsinki keeps the connection compact and directionally efficient.",
    },
    bestValue: {
      label: "Best value",
      time: "16h 20m",
      path: "LHR - DOH - HND",
      note: "Usually competitive on fare with a strong hub experience.",
    },
    lowestFriction: {
      label: "Lowest friction",
      time: "14h 05m",
      path: "LHR - HND",
      note: "The nonstop wins when arrival certainty and simplicity matter.",
    },
    airports: ["LHR", "HEL", "DOH", "HND"],
    airlines: ["finnair", "qatar-airways", "british-airways"],
    highlights: [
      "Helsinki is the cleanest one-stop option from a route geometry perspective.",
      "Doha often improves fare value without creating a poor hub experience.",
      "Haneda usually beats Narita for Tokyo ground access.",
    ],
    watchOut: "A cheap two-stop fare can add avoidable friction and weak backup options.",
    related: ["paris-to-new-york", "san-francisco-to-tokyo"],
  },
  {
    slug: "new-york-to-london",
    originCity: "New York",
    destinationCity: "London",
    originCode: "JFK",
    destinationCode: "LHR",
    summary:
      "High frequency makes this a nonstop-first route, but airport and arrival timing still matter.",
    score: 91,
    signal: "Lowest friction",
    distance: "3,450 mi",
    fastest: {
      label: "Fastest",
      time: "6h 50m",
      path: "JFK - LHR",
      note: "The nonstop is almost always the cleanest operational choice.",
    },
    bestValue: {
      label: "Best value",
      time: "9h 35m",
      path: "JFK - DUB - LHR",
      note: "Dublin can create a fare advantage, but it adds connection risk.",
    },
    lowestFriction: {
      label: "Lowest friction",
      time: "7h 05m",
      path: "JFK - LHR",
      note: "Multiple daily departures create better recovery options.",
    },
    airports: ["JFK", "LHR", "DUB"],
    airlines: ["british-airways"],
    highlights: [
      "Nonstop frequency is the route's biggest advantage.",
      "Late departures can protect a full day in New York.",
      "London airport choice affects the real arrival time.",
    ],
    watchOut: "Very tight onward UK or Europe connections after a red-eye can be fragile.",
    related: ["paris-to-new-york", "london-to-tokyo"],
  },
  {
    slug: "singapore-to-sydney",
    originCity: "Singapore",
    destinationCity: "Sydney",
    originCode: "SIN",
    destinationCode: "SYD",
    summary:
      "A strong nonstop corridor where timing and arrival quality are more important than routing creativity.",
    score: 90,
    signal: "Fastest",
    distance: "3,910 mi",
    fastest: {
      label: "Fastest",
      time: "7h 40m",
      path: "SIN - SYD",
      note: "The nonstop keeps this route simple and resilient.",
    },
    bestValue: {
      label: "Best value",
      time: "9h 50m",
      path: "SIN - KUL - SYD",
      note: "A detour can save money, but usually costs too much time.",
    },
    lowestFriction: {
      label: "Lowest friction",
      time: "7h 45m",
      path: "SIN - SYD",
      note: "Changi plus a nonstop is the lowest-stress combination.",
    },
    airports: ["SIN", "SYD"],
    airlines: ["singapore-airlines"],
    highlights: [
      "A nonstop is normally worth prioritizing here.",
      "Changi makes pre-departure and recovery time easier.",
      "Sydney domestic onward connections need enough buffer.",
    ],
    watchOut: "Sydney curfew and domestic transfer timing can affect onward plans.",
    related: ["los-angeles-to-singapore", "amsterdam-to-bangkok"],
  },
  {
    slug: "dublin-to-dubai",
    originCity: "Dublin",
    destinationCity: "Dubai",
    originCode: "DUB",
    destinationCode: "DXB",
    summary:
      "A route where nonstop simplicity competes with creative one-stop savings through Europe.",
    score: 84,
    signal: "Lowest friction",
    distance: "3,690 mi",
    fastest: {
      label: "Fastest",
      time: "7h 30m",
      path: "DUB - DXB",
      note: "The nonstop removes transfer risk and is usually the cleanest answer.",
    },
    bestValue: {
      label: "Best value",
      time: "10h 55m",
      path: "DUB - AMS - DXB",
      note: "Amsterdam can unlock better fares when schedules line up.",
    },
    lowestFriction: {
      label: "Lowest friction",
      time: "7h 35m",
      path: "DUB - DXB",
      note: "A single long sector is easier than a short European connection.",
    },
    airports: ["DUB", "AMS", "DXB"],
    airlines: ["emirates", "klm"],
    highlights: [
      "The nonstop is materially simpler for families and business trips.",
      "Amsterdam can be useful when price sensitivity is high.",
      "Dubai arrivals can involve long walks even without a connection.",
    ],
    watchOut: "A cheaper one-stop can turn into a long day if the first leg is delayed.",
    related: ["new-york-to-london", "amsterdam-to-bangkok"],
  },
  {
    slug: "paris-to-new-york",
    originCity: "Paris",
    destinationCity: "New York",
    originCode: "CDG",
    destinationCode: "JFK",
    summary:
      "A dense transatlantic market where nonstop timing beats almost every connection idea.",
    score: 87,
    signal: "Lowest friction",
    distance: "3,630 mi",
    fastest: {
      label: "Fastest",
      time: "8h 10m",
      path: "CDG - JFK",
      note: "Nonstop frequency gives the route its strength.",
    },
    bestValue: {
      label: "Best value",
      time: "11h 10m",
      path: "CDG - DUB - JFK",
      note: "Dublin can sometimes reduce fare and simplify US arrival via preclearance.",
    },
    lowestFriction: {
      label: "Lowest friction",
      time: "8h 20m",
      path: "CDG - JFK",
      note: "Avoiding a connection is usually worth it on this corridor.",
    },
    airports: ["CDG", "JFK", "DUB"],
    airlines: ["british-airways"],
    highlights: [
      "Nonstop competition keeps this route efficient.",
      "Dublin preclearance can be useful if the fare is right.",
      "CDG terminal details matter for positioning flights.",
    ],
    watchOut: "Some cheap itineraries add an unnecessary European backtrack.",
    related: ["new-york-to-london", "london-to-tokyo"],
  },
  {
    slug: "amsterdam-to-bangkok",
    originCity: "Amsterdam",
    destinationCity: "Bangkok",
    originCode: "AMS",
    destinationCode: "BKK",
    summary:
      "A classic long-haul value route where Gulf hubs can beat the nonstop on price and comfort.",
    score: 85,
    signal: "Best value",
    distance: "5,720 mi",
    fastest: {
      label: "Fastest",
      time: "11h 05m",
      path: "AMS - BKK",
      note: "The nonstop is cleanest when priced reasonably.",
    },
    bestValue: {
      label: "Best value",
      time: "14h 35m",
      path: "AMS - DOH - BKK",
      note: "Doha frequently gives a strong balance of fare, comfort, and network reliability.",
    },
    lowestFriction: {
      label: "Lowest friction",
      time: "11h 10m",
      path: "AMS - BKK",
      note: "Choose nonstop when the fare gap is narrow.",
    },
    airports: ["AMS", "DOH"],
    airlines: ["klm", "qatar-airways"],
    highlights: [
      "The Gulf connection can be a rational value play.",
      "Schiphol departure reliability should be checked in busy periods.",
      "Arrival time in Bangkok can matter more than raw duration.",
    ],
    watchOut: "A very long layover erases much of the fare advantage.",
    related: ["london-to-tokyo", "dublin-to-dubai"],
  },
  {
    slug: "san-francisco-to-tokyo",
    originCity: "San Francisco",
    destinationCity: "Tokyo",
    originCode: "SFO",
    destinationCode: "HND",
    summary:
      "A Pacific gateway route where nonstop airport choice creates most of the value.",
    score: 89,
    signal: "Fastest",
    distance: "5,140 mi",
    fastest: {
      label: "Fastest",
      time: "11h 00m",
      path: "SFO - HND",
      note: "A nonstop into Haneda is the premium efficiency play.",
    },
    bestValue: {
      label: "Best value",
      time: "13h 45m",
      path: "SFO - SEA - HND",
      note: "One-stop savings can work if the layover is protected and short.",
    },
    lowestFriction: {
      label: "Lowest friction",
      time: "11h 05m",
      path: "SFO - HND",
      note: "No connection and better Tokyo access make this hard to beat.",
    },
    airports: ["SFO", "HND"],
    airlines: ["singapore-airlines"],
    highlights: [
      "Haneda access improves the real journey time.",
      "SFO has useful Pacific coverage but can face weather delays.",
      "Connections through other US hubs should be judged harshly.",
    ],
    watchOut: "A domestic US connection can add delay exposure before the long-haul sector.",
    related: ["london-to-tokyo", "los-angeles-to-singapore"],
  },
  {
    slug: "los-angeles-to-singapore",
    originCity: "Los Angeles",
    destinationCity: "Singapore",
    originCode: "LAX",
    destinationCode: "SIN",
    summary:
      "A long-range route where nonstop convenience competes with one-stop fare and schedule advantages.",
    score: 86,
    signal: "Smart detour",
    distance: "8,770 mi",
    fastest: {
      label: "Fastest",
      time: "17h 10m",
      path: "LAX - SIN",
      note: "The nonstop removes complexity from a very long trip.",
    },
    bestValue: {
      label: "Best value",
      time: "20h 25m",
      path: "LAX - HND - SIN",
      note: "Tokyo can create a useful break when price or timing works.",
    },
    lowestFriction: {
      label: "Lowest friction",
      time: "17h 20m",
      path: "LAX - SIN",
      note: "A single sector is still the cleanest operational answer.",
    },
    airports: ["SIN", "HND"],
    airlines: ["singapore-airlines"],
    highlights: [
      "The nonstop is demanding but efficient.",
      "A Tokyo connection can be rational if it improves fare and rest timing.",
      "Changi makes arrival and onward movement unusually easy.",
    ],
    watchOut: "Two-stop routings usually overcomplicate an already long journey.",
    related: ["singapore-to-sydney", "san-francisco-to-tokyo"],
  },
];

export function getRoute(slug: string) {
  return routes.find((route) => route.slug === slug);
}

export function routesFrom(city: string) {
  const normalized = decodeURIComponent(city).replace(/-/g, " ").toLowerCase();
  return routes.filter((route) => route.originCity.toLowerCase() === normalized);
}

export function routesTo(city: string) {
  const normalized = decodeURIComponent(city).replace(/-/g, " ").toLowerCase();
  return routes.filter((route) => route.destinationCity.toLowerCase() === normalized);
}
