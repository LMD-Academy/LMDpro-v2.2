# seo-audit

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/marketingskills/seo-audit/security/snyk))

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[seo-audit](/coreyhaines31/marketingskills/seo-audit)/Snyk

Warn

Audited by Snyk on May 14, 2026

Risk Level: MEDIUM

Full Analysis

MEDIUM W011: Third-party content exposure detected (indirect prompt injection risk).

* Third-party content exposure detected (high risk: 0.90). The SKILL.md audit workflow explicitly instructs the agent to fetch and inspect public site content (e.g., "Check robots.txt", "XML Sitemap", "site:domain.com check", and the Schema Markup Detection Limitation that references using web\_fetch/curl and browser tools), meaning it will read untrusted/public webpages and use their content to drive audit findings and recommendations.

## Issues (1)

W011

MEDIUM

Third-party content exposure detected (indirect prompt injection risk).

Audit Metadata

Risk Level
:   MEDIUM

Analyzed
:   May 14, 2026, 10:01 AM

Issues
:   1
