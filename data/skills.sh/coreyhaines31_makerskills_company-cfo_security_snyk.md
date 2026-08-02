# company-cfo

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/makerskills/company-cfo/security/snyk))

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[company-cfo](/coreyhaines31/makerskills/company-cfo)/Snyk

Warn

Audited by Snyk on Jul 2, 2026

Risk Level: MEDIUM

Full Analysis

MEDIUM W009: Direct money access capability detected (payment gateways, crypto, banking).

* Direct money access detected (high risk: 1.00). The skill is explicitly a company CFO workflow and names specific financial tools/APIs (Mercury CLI, Plaid, Stripe API, Paddle, LemonSqueezy, Plane, Deel, Gusto, Rippling, Ramp, Brex, Divvy, etc.). It instructs wiring those sources and pulling bank balances, transaction lists, payroll and payout data and verifies distributions. Because it is specifically designed for company financial operations and integrates with banking/payment/payroll APIs (categories listed in the Core Rule for direct financial execution), it poses Direct Financial Execution authority risk.

## Issues (1)

W009

MEDIUM

Direct money access capability detected (payment gateways, crypto, banking).

Audit Metadata

Risk Level
:   MEDIUM

Analyzed
:   Jul 2, 2026, 04:04 AM

Issues
:   1
