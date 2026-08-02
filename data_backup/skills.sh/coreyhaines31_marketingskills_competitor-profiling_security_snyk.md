--- source: https://skills.sh/coreyhaines31/marketingskills/competitor-profiling/security/snyk ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[competitor-profiling](/coreyhaines31/marketingskills/competitor-profiling)/Snyk

# competitor-profiling

Warn

Audited by Snyk on May 14, 2026

Risk Level: MEDIUM

Full Analysis

MEDIUM W011: Third-party content exposure detected (indirect prompt injection risk).

* Third-party content exposure detected (high risk: 0.90). The SKILL.md Research Process explicitly requires scraping competitor URLs and review pages using Firecrawl (firecrawl\_map, firecrawl\_scrape, firecrawl\_search) and pulling public SEO/market data via DataForSEO, so the agent will ingest and act on untrusted third‑party web content (e.g., competitor sites, G2/Capterra, public pages) that can materially influence its analysis and subsequent actions.

---

MEDIUM W012: Unverifiable external dependency detected (runtime URL that controls agent).

* Potentially malicious external URL detected (high risk: 0.80). The skill explicitly calls Firecrawl to scrape user-supplied competitor URLs at runtime (e.g., any https:// fetched via firecrawl\_scrape) and then injects that raw scraped content into the model context to drive profile synthesis, so those external URLs directly control the agent's prompts and are a required dependency.

## Issues (2)

W011

MEDIUM

Third-party content exposure detected (indirect prompt injection risk).

W012

MEDIUM

Unverifiable external dependency detected (runtime URL that controls agent).

Audit Metadata

Risk Level
:   MEDIUM

Analyzed
:   May 14, 2026, 11:06 PM

Issues
:   2