# ads

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/marketingskills/ads/security/snyk))

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[ads](/coreyhaines31/marketingskills/ads)/Snyk

Warn

Audited by Snyk on May 14, 2026

Risk Level: MEDIUM

Full Analysis

MEDIUM W009: Direct money access capability detected (payment gateways, crypto, banking).

* Direct money access detected (high risk: 1.00). The skill is explicitly about managing paid advertising campaigns and repeatedly instructs the agent to set, allocate, adjust, and scale ad budgets (e.g., "Budget set correctly", "increase budgets 20-30% at a time", "What's your monthly ad budget?", "Consolidate budget into winning combinations"). It also states the agent has "direct access to ad platform accounts" and references platform integration files (google-ads.md, meta-ads.md, etc.), implying callable integrations that can implement budget changes. Managing and updating ad spend budgets is listed in the policy as a direct financial execution capability. Therefore this skill grants the agent the ability to modify ad spend (move money via ad platform APIs).

## Issues (1)

W009

MEDIUM

Direct money access capability detected (payment gateways, crypto, banking).

Audit Metadata

Risk Level
:   MEDIUM

Analyzed
:   May 14, 2026, 05:12 AM

Issues
:   1
