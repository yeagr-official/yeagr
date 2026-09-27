# Contributing to YEAGR

YEAGR is early, and thoughtful contributors can still influence the foundations.

## Where help is useful

We are especially interested in contributors with experience in:

- travel distribution
- airline NDC and Offers & Orders
- hotel connectivity
- rail and ferry APIs
- API design
- TypeScript
- distributed systems
- JSON Schema / OpenAPI
- identity and permissions
- AI agent tooling
- developer experience

You do **not** need travel-industry experience to contribute.

## Before opening code

For architecture-level changes, open an issue first.

Good proposals explain:

1. the problem;
2. the users affected;
3. the proposed contract or behavior;
4. alternatives considered;
5. compatibility implications;
6. how the change can be tested.

## Local development

```bash
git clone https://github.com/yeagr-official/yeagr.git
cd yeagr
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

Before submitting a pull request:

```bash
npm run lint
npm run build:cloudflare
```

## Pull requests

Keep pull requests focused.

A strong PR should include:

- a clear title;
- a concise explanation of why the change exists;
- screenshots for visual changes;
- tests or validation steps where applicable;
- documentation updates when behavior or contracts change.

## Engineering principles

Prefer:

- explicit contracts over hidden behavior;
- small composable interfaces;
- backward-compatible evolution;
- portable implementations;
- observable systems;
- graceful handling of supplier differences;
- documented assumptions.

Avoid:

- coupling the protocol to one hosting vendor;
- inventing abstractions without real use cases;
- claiming roadmap functionality exists before it does;
- hiding supplier-specific capabilities behind misleading normalization.

## Protocol contributions

Schema and protocol work should include examples.

For example, a proposed Offer field should answer:

- which travel verticals need it?
- is it core or extension data?
- is it required or optional?
- how does it map from at least two different supplier models?
- what happens when a supplier cannot provide it?

## Community standard

Be rigorous about ideas and respectful toward people.

See [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

## Contact

For project-level conversations: hello@yeagr.com
