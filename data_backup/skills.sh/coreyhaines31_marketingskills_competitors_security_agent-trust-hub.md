--- source: https://skills.sh/coreyhaines31/marketingskills/competitors/security/agent-trust-hub ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[competitors](/coreyhaines31/marketingskills/competitors)/Gen Agent Trust Hub

# competitors

Pass

Audited by Gen Agent Trust Hub on May 14, 2026

Risk Level: SAFE

Full Analysis

* **[DATA\_EXPOSURE]:** The skill instructions specify reading from local context files such as `.agents/product-marketing.md`, `.claude/product-marketing.md`, and `product-marketing-context.md`. This is a standard practice for gathering context and does not involve accessing sensitive system files or credentials.
* **[PROMPT\_INJECTION]:** The skill ingests untrusted data from the aforementioned context files to generate marketing content. While it lacks explicit boundary markers or sanitization for this external content, its capabilities are limited to text generation for marketing purposes, posing a negligible risk of indirect prompt injection.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   May 14, 2026, 05:12 AM