--- source: https://skills.sh/coreyhaines31/marketingskills/signup/security/agent-trust-hub ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[signup](/coreyhaines31/marketingskills/signup)/Gen Agent Trust Hub

# signup

Pass

Audited by Gen Agent Trust Hub on May 14, 2026

Risk Level: SAFEPROMPT\_INJECTION

Full Analysis

* **[PROMPT\_INJECTION]:** The skill accesses local project files (.agents/product-marketing.md and others) to gather context for its analysis. This ingestion of external data constitutes an indirect prompt injection surface.
* **Ingestion points:** .agents/product-marketing.md, .claude/product-marketing.md, and product-marketing-context.md.
* **Boundary markers:** Absent.
* **Capability inventory:** No dangerous capabilities detected (no shell execution, network access, or file modification).
* **Sanitization:** Absent.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   May 14, 2026, 05:12 AM