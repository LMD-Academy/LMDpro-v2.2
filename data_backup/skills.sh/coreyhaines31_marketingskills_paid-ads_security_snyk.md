--- source: https://skills.sh/coreyhaines31/marketingskills/paid-ads/security/snyk ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[paid-ads](/coreyhaines31/marketingskills/paid-ads)/Snyk

# paid-ads

Warn

Audited by Snyk on Apr 22, 2026

Risk Level: MEDIUM

Full Analysis

MEDIUM W009: Direct money access capability detected (payment gateways, crypto, banking).

* Direct money access detected (high risk: 1.00). The skill is explicitly about managing paid advertising accounts and repeatedly references budgets, spend pacing, and changing budget allocations (e.g., "monthly/weekly budget", "Budget set correctly", "Spend vs. budget pacing", "increase budgets 20-30% at a time"). It also states the agent has "direct access to ad platform accounts" and points to specific ad-platform integrations (google-ads.md, meta-ads.md) in the tools registry. Because managing/updating ad spend budgets via ad platform APIs is a specific, financial-execution capability, this qualifies as Direct Financial Execution.

## Issues (1)

W009

MEDIUM

Direct money access capability detected (payment gateways, crypto, banking).

Audit Metadata

Risk Level
:   MEDIUM

Analyzed
:   Apr 22, 2026, 11:53 AM

Issues
:   1