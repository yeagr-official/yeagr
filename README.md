# YEAGR

> **Travel broke the sound barrier. Distribution hasn't.**

YEAGR is an open travel infrastructure project exploring a common, programmable layer between travel supply and the people, products, developers, and AI agents that want to use it.

The long-term idea is simple:

**suppliers connect once → builders connect once → travel becomes easier to program**

YEAGR is early. The repository currently contains the public YEAGR web experience and travel-data product surfaces. The open protocol, canonical offer/order model, connector interfaces, registry, SDKs, and agent-native tooling are the next major build layers.

## Why YEAGR

Travel is full of great products, but the infrastructure underneath them is fragmented across supplier APIs, standards, aggregators, legacy systems, and bespoke integrations.

A developer building a new travel product should not have to become an expert in every underlying distribution system.

YEAGR is designed around a different model:

```text
SUPPLY
Air · Stay · Rail · Ferry · Experiences · Local
                │
                ▼
┌──────────────────────────────────────────────┐
│                    YEAGR                     │
│                                              │
│  Travel Graph · Canonical Offers · Orders    │
│  Discovery · Identity · Capabilities         │
│  Connectors · Agent-native interfaces        │
└──────────────────────────────────────────────┘
                │
                ▼
DEMAND
Apps · Merchants · Creators · Developers · AI agents · Travellers
```

YEAGR should abstract fragmentation before attempting to eliminate it. Existing infrastructure can remain underneath the network while builders get a cleaner interface above it.

## Principles

- **Open** — the network should be possible to build on without unnecessary permission.
- **Interoperable** — work with existing and future travel systems rather than demanding a clean-slate industry.
- **Programmable** — expose travel through developer-friendly contracts and tooling.
- **Agent-native** — treat software agents as first-class participants in discovery and commerce.
- **Supplier-first** — let suppliers express richer products without forcing everything into old abstractions.
- **Human** — connect infrastructure to why people actually travel: intent, places, people, experiences, and memory.

## What we are building

The target architecture is a set of composable layers:

1. **Canonical travel model** — common entities for suppliers, products, places, offers, orders, entitlements, journeys, experiences, relationships, and memories.
2. **Offer + Order protocol** — a consistent interface over heterogeneous supplier systems.
3. **Connector framework** — adapters for NDC, direct airline APIs, hotel APIs, rail, ferry, experiences, aggregators, and legacy distribution.
4. **Supplier registry** — discoverable capabilities and connection metadata.
5. **Travel Graph** — structured relationships between people, places, journeys, suppliers, intent, and memories.
6. **Developer SDKs** — TypeScript first, followed by additional languages where useful.
7. **Agent interface** — structured tools for AI systems to discover, compare, assemble, and eventually transact against travel supply.

A future API could feel like:

```ts
const offers = await yeagr.search({
  from: "DUB",
  intent: "warm, creative, affordable",
  dates: "flexible",
  duration: "3 weeks"
});

return offers.best();
```

That example describes the direction of the project, not a production API that exists today.

## Current repository

Today this repository contains the YEAGR website and route-intelligence surfaces used to explore the product direction in public.

### Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Static export
- Cloudflare Pages
- PostHog

### Run locally

```bash
git clone https://github.com/yeagr-official/yeagr.git
cd yeagr
npm install
npm run dev
```

Production build:

```bash
npm run build:cloudflare
```

Lint:

```bash
npm run lint
```

## Roadmap

### Now
- Public YEAGR product narrative
- Travel-data and route surfaces
- Architecture and protocol design
- Canonical entity model
- Contributor and governance foundations

### Next
- `yeagr-schema`
- Offer API contracts
- Order API contracts
- Connector interface
- Supplier capability registry
- Local sandbox
- TypeScript SDK
- First reference connectors
- Developer documentation

### Later
- Agent-native travel tools
- Rich supplier/product capabilities
- Identity and permission primitives
- Travel Graph services
- Hosted YEAGR network services
- Additional SDKs and ecosystem tooling

## First meaningful milestone

The first infrastructure milestone is deliberately concrete:

```text
Supplier A
   │
   ▼
 YEAGR
   │
   ▼
Merchant B
   │
   ▼
Customer
```

Merchant B should be able to work with the travel product without needing to care whether Supplier A speaks NDC, OpenTravel, a proprietary API, or another underlying protocol.

## Open source direction

YEAGR is being developed in public.

The intended model is:

- open specifications and canonical schemas
- open reference implementations and SDKs where practical
- portable local development
- no mandatory dependency on a single cloud provider
- hosted services may exist, but the protocol should not require them
- governance should make independent implementations possible

See [CONTRIBUTING.md](./CONTRIBUTING.md) for how to get involved.

## Who this is for

We would especially like to hear from:

- travel infrastructure engineers
- airline and hotel technologists
- NDC / Offers & Orders practitioners
- API and distributed-systems engineers
- AI agent developers
- travel startup founders
- rail, ferry, mobility, and experience-platform engineers
- developers who have had to integrate too many travel APIs

## Project status

**Early-stage / active development.**

The vision is larger than the implementation today. We will keep the repository explicit about what is production, experimental, proposed, or roadmap-only.

That distinction matters.

## Links

- Website: https://www.yeagr.com
- GitHub: https://github.com/yeagr-official/yeagr
- Contact: hello@yeagr.com

---

**Break the barrier.**
