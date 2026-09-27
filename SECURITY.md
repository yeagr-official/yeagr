# Security Policy

YEAGR is early-stage software and should not yet be treated as production travel-commerce infrastructure.

## Reporting a vulnerability

Please do not open a public issue for a security vulnerability.

Email:

**security@yeagr.com**

Include enough information to reproduce and understand the issue. Please avoid accessing data that is not yours, disrupting services, or testing against third-party systems without authorization.

## Scope

The public repository currently includes the YEAGR website and experimental product work. Future protocol, connector, identity, order, and agent components may introduce additional security surfaces, and this policy will evolve with them.

## Secrets

Never commit:

- API keys
- supplier credentials
- private certificates
- payment credentials
- personal access tokens
- production secrets

Use environment variables and documented secret-management mechanisms instead.
