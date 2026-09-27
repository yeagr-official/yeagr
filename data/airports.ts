export type Airport = {
  iata: string;
  name: string;
  city: string;
  country: string;
  region: string;
  type: "hub" | "gateway" | "secondary";
  connectionScore: number;
  friction: "Low" | "Medium" | "High";
  bestFor: string;
  watchOut: string;
  summary: string;
};

export const airports: Airport[] = [
  {
    iata: "LHR",
    name: "Heathrow",
    city: "London",
    country: "United Kingdom",
    region: "Europe",
    type: "gateway",
    connectionScore: 82,
    friction: "Medium",
    bestFor: "high-frequency long-haul departures",
    watchOut: "terminal changes and peak-time immigration queues",
    summary:
      "London Heathrow is powerful when you need airline choice and premium long-haul frequency, but it rewards longer buffers.",
  },
  {
    iata: "HEL",
    name: "Helsinki Airport",
    city: "Helsinki",
    country: "Finland",
    region: "Europe",
    type: "hub",
    connectionScore: 91,
    friction: "Low",
    bestFor: "clean Europe to Asia connections",
    watchOut: "limited backup frequency on some long-haul routes",
    summary:
      "Helsinki is one of the cleanest northern connection plays for Asia-bound itineraries from Europe.",
  },
  {
    iata: "DOH",
    name: "Hamad International",
    city: "Doha",
    country: "Qatar",
    region: "Middle East",
    type: "hub",
    connectionScore: 90,
    friction: "Low",
    bestFor: "global one-stop routings with strong value",
    watchOut: "overnight connection timing on some routes",
    summary:
      "Doha is a high-performing transfer hub with strong network coverage and reliable one-stop long-haul options.",
  },
  {
    iata: "SIN",
    name: "Changi",
    city: "Singapore",
    country: "Singapore",
    region: "Asia",
    type: "hub",
    connectionScore: 94,
    friction: "Low",
    bestFor: "Asia-Pacific connections and premium layovers",
    watchOut: "longer detours for some Europe to Australia routings",
    summary:
      "Singapore Changi is the benchmark for low-friction connections, clear wayfinding, and useful stopovers.",
  },
  {
    iata: "AMS",
    name: "Schiphol",
    city: "Amsterdam",
    country: "Netherlands",
    region: "Europe",
    type: "hub",
    connectionScore: 84,
    friction: "Medium",
    bestFor: "European feeder connections",
    watchOut: "security and transfer pressure during disruption windows",
    summary:
      "Schiphol is an efficient European connector when operations are normal and buffers are realistic.",
  },
  {
    iata: "JFK",
    name: "John F. Kennedy International",
    city: "New York",
    country: "United States",
    region: "North America",
    type: "gateway",
    connectionScore: 74,
    friction: "High",
    bestFor: "transatlantic choice and nonstop coverage",
    watchOut: "terminal complexity and ground delays",
    summary:
      "JFK is a major gateway with huge route choice, but it is rarely the lowest-friction connection point.",
  },
  {
    iata: "DUB",
    name: "Dublin Airport",
    city: "Dublin",
    country: "Ireland",
    region: "Europe",
    type: "gateway",
    connectionScore: 79,
    friction: "Medium",
    bestFor: "US-bound trips with preclearance",
    watchOut: "morning bank congestion",
    summary:
      "Dublin is especially useful for transatlantic trips when US preclearance saves time on arrival.",
  },
  {
    iata: "DXB",
    name: "Dubai International",
    city: "Dubai",
    country: "United Arab Emirates",
    region: "Middle East",
    type: "hub",
    connectionScore: 87,
    friction: "Medium",
    bestFor: "large-scale east-west long-haul coverage",
    watchOut: "long walking distances and peak transfer banks",
    summary:
      "Dubai offers exceptional network breadth, especially for long-haul one-stop trips through the Middle East.",
  },
  {
    iata: "HND",
    name: "Haneda",
    city: "Tokyo",
    country: "Japan",
    region: "Asia",
    type: "gateway",
    connectionScore: 86,
    friction: "Low",
    bestFor: "Tokyo arrivals and domestic Japan access",
    watchOut: "higher fares versus some Narita options",
    summary:
      "Haneda is usually the cleanest Tokyo airport choice, especially when city access matters.",
  },
  {
    iata: "SFO",
    name: "San Francisco International",
    city: "San Francisco",
    country: "United States",
    region: "North America",
    type: "gateway",
    connectionScore: 78,
    friction: "Medium",
    bestFor: "Pacific routes and West Coast departures",
    watchOut: "weather-linked delays in some seasons",
    summary:
      "SFO is a strong Pacific gateway with useful nonstop coverage into Asia and Oceania.",
  },
  {
    iata: "SYD",
    name: "Sydney Kingsford Smith",
    city: "Sydney",
    country: "Australia",
    region: "Oceania",
    type: "gateway",
    connectionScore: 76,
    friction: "Medium",
    bestFor: "Australia arrivals and domestic onward travel",
    watchOut: "curfew constraints and domestic transfer timing",
    summary:
      "Sydney is Australia's primary international gateway, but onward timing should be checked carefully.",
  },
  {
    iata: "CDG",
    name: "Charles de Gaulle",
    city: "Paris",
    country: "France",
    region: "Europe",
    type: "hub",
    connectionScore: 75,
    friction: "High",
    bestFor: "French long-haul network access",
    watchOut: "terminal transfers and inconsistent connection experience",
    summary:
      "Paris CDG has strong network reach, but connection quality can vary widely by terminal pairing.",
  },
];

export function getAirport(iata: string) {
  return airports.find((airport) => airport.iata.toLowerCase() === iata.toLowerCase());
}
