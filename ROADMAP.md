# YEAGR Roadmap

This roadmap describes direction, not commitments or release dates.

## Phase 0 — Public foundation

- [x] Official public repository
- [x] YEAGR public product narrative
- [x] Developer contribution guide
- [x] Architecture overview
- [x] CI for the current web application
- [ ] Finalize project licensing/governance
- [ ] Publish initial architecture decision records

## Phase 1 — Canonical model

- [ ] JSON Schema package
- [ ] Supplier
- [ ] Product
- [ ] Place
- [ ] Capability
- [ ] Offer
- [ ] Order
- [ ] Journey
- [ ] Experience
- [ ] Relationship
- [ ] Extension mechanism
- [ ] Versioning policy

## Phase 2 — Protocol

- [ ] OpenAPI 3.1 specification
- [ ] Offer search contract
- [ ] Offer retrieval
- [ ] Order creation
- [ ] Order retrieval
- [ ] Order modification
- [ ] Webhook event model
- [ ] Error model
- [ ] Idempotency model

## Phase 3 — Connectors

- [ ] Connector interface
- [ ] Connector test harness
- [ ] Capability declaration
- [ ] Reference air connector
- [ ] Reference accommodation connector
- [ ] Reference ferry/rail connector
- [ ] Mock supplier sandbox

## Phase 4 — Developer platform

- [ ] TypeScript SDK
- [ ] Local Docker sandbox
- [ ] Interactive API documentation
- [ ] Example travel application
- [ ] Conformance tests
- [ ] Supplier registry prototype

## Phase 5 — Agent-native travel

- [ ] Tool schemas
- [ ] Search/discovery tools
- [ ] Comparison tools
- [ ] Trip assembly
- [ ] Permission model
- [ ] MCP-compatible reference interface
- [ ] Agent evaluation harness

## Phase 6 — Travel Graph

- [ ] Graph entity model
- [ ] Person/place/journey relationships
- [ ] Intent representation
- [ ] Memory representation
- [ ] Privacy and user-control model
- [ ] Recommendation interfaces

## First protocol milestone

The first serious proof point remains:

> Supplier A → YEAGR → Merchant B → Customer

with Merchant B insulated from the supplier's underlying distribution technology.
