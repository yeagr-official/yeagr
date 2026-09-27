# Protocol Direction

This document sketches the first YEAGR protocol surface. It is intentionally small and will evolve through issues and pull requests.

## Objective

A buyer should be able to discover and consume a travel product without needing to understand the supplier's underlying protocol.

## v0.1 surface

```http
POST /v1/offers/search
GET  /v1/offers/{offer_id}
POST /v1/orders
GET  /v1/orders/{order_id}
PATCH /v1/orders/{order_id}
```

## Offer search

Example request:

```json
{
  "travellers": [{ "type": "adult" }],
  "intent": {
    "origin": "DUB",
    "destination": "TYO"
  },
  "dates": {
    "departure": "2026-11-10"
  }
}
```

Example normalized response:

```json
{
  "offers": [
    {
      "id": "off_01J...",
      "supplier": {
        "id": "sup_...",
        "type": "airline"
      },
      "product": {
        "type": "air"
      },
      "price": {
        "amount": 742.18,
        "currency": "EUR"
      },
      "includes": ["transport"],
      "source": {
        "protocol": "ndc",
        "supplier_offer_id": "..."
      }
    }
  ]
}
```

## Design rules

- Canonical fields should be stable and broadly useful.
- Supplier-specific richness should remain expressible through extensions.
- Source identifiers should remain traceable.
- Money should never be represented with floating-point assumptions in production protocol code.
- Requests that may be retried should support idempotency.
- Error responses should be machine-readable.
- Asynchronous order changes should use webhooks/events.
- Capabilities must be discoverable rather than assumed.

## Versioning

The first public schemas should use explicit semantic versions.

Breaking changes require a new major version.

Before v1.0, schemas may move quickly, but each change should include examples and migration notes.

## Open questions

The community should help decide:

- extension namespacing;
- capability discovery;
- offer expiry semantics;
- price guarantees;
- order state model;
- identity and delegated authorization;
- seller/supplier commercial metadata;
- cross-vertical journey composition;
- agent permissions.

Open an issue with the `[Proposal]` prefix for protocol discussions.
