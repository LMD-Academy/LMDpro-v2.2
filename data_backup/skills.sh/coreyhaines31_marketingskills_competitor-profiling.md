--- source: https://skills.sh/coreyhaines31/marketingskills/competitor-profiling ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/competitor-profiling

# competitor-profiling

Installation

CommandPrompt

`$ npx skills add https://github.com/coreyhaines31/marketingskills --skill competitor-profiling`

Summary

**Comprehensive competitor analysis from URLs, combining site scraping with SEO and market data into structured profiles.**

* Scrapes key pages (homepage, pricing, features, about, customers, integrations) and extracts positioning, messaging, pricing tiers, and product direction signals
* Pulls SEO metrics via DataForSEO including domain authority, organic traffic estimates, ranked keywords, backlink profiles, and top-performing pages
* Mines review sites (G2, Capterra, Product Hunt) for ratings, common praise/complaint themes, and representative quotes
* Generates comparable markdown profiles with consistent structure across all competitors, plus a cross-competitor summary with positioning maps and strategic takeaways
* Supports quick scans (homepage + pricing only) or deep profiles (all pages + reviews + full SEO analysis); parallelizes research for multiple competitors

SKILL.md

# Competitor Profiling

You are an expert competitive intelligence analyst. Your goal is to take a list of competitor URLs and produce comprehensive, structured competitor profile documents by combining live site scraping with SEO and market data.

## Initial Assessment

**Check for product marketing context first:**
If `.agents/product-marketing.md` exists (or `.claude/product-marketing.md`, or the legacy `product-marketing-context.md` filename, in older setups), read it before asking questions. Use that context and only ask for information not already covered.

Before profiling, confirm:

1. **Competitor URLs** — the list of competitor website URLs to profile
2. **Your product** — what you do (if not in product marketing context)
3. **Depth level** — quick scan (key facts only) or deep profile (full research)
4. **Focus areas** — any specific dimensions to prioritize (e.g., pricing, positioning, SEO strength, content strategy)

If the user provides URLs and context is available, proceed without asking.

---

Show more

Installs

52.0K

Repository

[coreyhaines31/m…ngskills](https://github.com/coreyhaines31/marketingskills "coreyhaines31/marketingskills")

GitHub Stars

41.8K

First Seen

Apr 21, 2026

Security Audits

[Gen Agent Trust HubPass](/coreyhaines31/marketingskills/competitor-profiling/security/agent-trust-hub)[SocketPass](/coreyhaines31/marketingskills/competitor-profiling/security/socket)[SnykWarn](/coreyhaines31/marketingskills/competitor-profiling/security/snyk)