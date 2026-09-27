# YEAGR Architecture

YEAGR is being designed as an open abstraction layer across fragmented travel systems.

The architecture deliberately separates **protocol** from **hosting**. A YEAGR implementation should be able to run locally, in another cloud, or as part of an independent network participant.

## Layers

```text
Experiences
Apps · Marketplaces · Creators · AI agents · YEAGR surfaces
                         │
                         ▼
Discovery + Travel Graph
People · Places · Intent · Trips · Relationships · Memories
                         │
                         ▼
Commerce Protocol
Search · Offer · Order · Service
                         │
                         ▼
Connector Network
NDC · direct APIs · hotel APIs · rail · ferry · experiences · aggregators
                         │
                         ▼
Suppliers
Airlines · Hotels · Rail · Ferries · Local operators · Experience providers
```

## Canonical entities

The emerging core model includes:

- Person
- Place
- Supplier
- Product
- Experience
- Journey
- Offer
- Order
- Payment reference
- Entitlement
- Capability
- Relationship
- Memory

The goal is not to flatten every supplier into the lowest common denominator. The canonical model should support a stable shared core while preserving supplier-specific capabilities where needed.

## Offer model

A normalized offer should be able to express at minimum:

```ts
type Offer = {
  id: string
  supplier: {
    id: string
    type: string
  }
  product: {
    type: string
  }
  price: {
    amount: number
    currency: string
  }
  includes: string[]
  conditions?: {
    refundable?: boolean
    changeable?: boolean
  }
  source: {
    protocol: string
    supplierOfferId?: string
  }
}
```

This is illustrative architecture, not yet a frozen public specification.

## Connector contract

Connectors translate external systems into YEAGR contracts.

A connector should:

1. declare its capabilities;
2. accept a canonical request;
3. translate that request into the supplier protocol;
4. normalize the response;
5. preserve source identifiers and traceability;
6. expose errors consistently;
7. avoid leaking transport-specific behavior into the consumer API.

Potential connector families:

```text
connectors/
  air/
    ndc/
    direct/
    aggregators/
  stay/
    direct/
    aggregators/
  rail/
  ferry/
  experiences/
```

## Protocol direction

The first protocol surface should stay small:

```text
POST /v1/offers/search
GET  /v1/offers/:id
POST /v1/orders
GET  /v1/orders/:id
PATCH /v1/orders/:id
```

Webhooks should handle asynchronous order-state changes.

## Agent-native interface

AI systems should not need to scrape consumer websites to understand travel products.

YEAGR can eventually expose structured tools such as:

```text
search_destinations()
search_offers()
compare_offers()
build_trip()
price_trip()
create_order()
modify_order()
cancel_order()
```

The agent layer should use the same underlying contracts as human-facing applications.

## Portability

Core schemas and reference implementations should avoid hard dependencies on a single vendor.

Current website infrastructure uses Cloudflare, but future protocol/runtime work should remain portable. Local Docker-based development is a preferred baseline for infrastructure components.

## Standards

YEAGR should embrace useful existing standards rather than recreate them blindly.

Relevant standards and ecosystems include:

- IATA NDC
- IATA Offers & Orders
- OpenTravel Alliance models
- supplier-specific APIs
- established web standards such as OpenAPI, OAuth, JSON Schema, webhooks and OpenTelemetry

Any implementation work involving third-party standards must respect their licensing and access terms.

## What is not v0.1

The first YEAGR infrastructure milestone does **not** need to become:

- a PSS
- a GDS replacement
- a payment acquirer
- a BSP/ARC settlement system
- an interline accounting platform
- a revenue-accounting system
- a merchant of record

Those may interact with the network later. They are not prerequisites for proving the core abstraction.

## Design objective

A useful test for every architectural decision:

> Can Supplier A expose a product through YEAGR and can Merchant B consume it without Merchant B needing to understand Supplier A's underlying distribution technology?

If yes, YEAGR is reducing integration friction.
