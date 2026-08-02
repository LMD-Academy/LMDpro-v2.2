--- source: https://skills.sh/coreyhaines31/marketingskills/churn-prevention/security/snyk ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[churn-prevention](/coreyhaines31/marketingskills/churn-prevention)/Snyk

# churn-prevention

Warn

Audited by Snyk on May 15, 2026

Risk Level: MEDIUM

Full Analysis

MEDIUM W009: Direct money access capability detected (payment gateways, crypto, banking).

* Direct money access detected (high risk: 1.00). The skill is explicitly focused on recovering failed payments and configuring dunning/retries and references specific payment gateways and tools (Stripe, Chargebee, Paddle, Recurly, Braintree) and the `stripe` CLI for subscription management and dunning config. Because it is specifically designed around payment-provider integrations and payment recovery (not generic browser or API tooling), it meets the definition of direct financial execution capability.

## Issues (1)

W009

MEDIUM

Direct money access capability detected (payment gateways, crypto, banking).

Audit Metadata

Risk Level
:   MEDIUM

Analyzed
:   May 15, 2026, 02:29 AM

Issues
:   1