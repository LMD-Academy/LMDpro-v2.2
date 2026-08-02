--- source: https://skills.sh/coreyhaines31/makerskills/domain/security/snyk ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[domain](/coreyhaines31/makerskills/domain)/Snyk

# domain

Warn

Audited by Snyk on Jul 6, 2026

Risk Level: MEDIUM

Full Analysis

MEDIUM W009: Direct money access capability detected (payment gateways, crypto, banking).

* Direct money access detected (high risk: 1.00). The skill explicitly includes commands and API calls that perform purchases: it requires Namecheap API credentials (env checks) and shows a Namecheap API curl to create/register a domain, and it calls the registrar CLI command `vercel domains buy <domain>.com`. Those are concrete "send transaction / charge money" operations (purchase domain registration), so the skill grants direct financial execution capability.

## Issues (1)

W009

MEDIUM

Direct money access capability detected (payment gateways, crypto, banking).

Audit Metadata

Risk Level
:   MEDIUM

Analyzed
:   Jul 6, 2026, 05:19 PM

Issues
:   1