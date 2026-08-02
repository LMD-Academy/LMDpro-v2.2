--- source: https://skills.sh/coreyhaines31/marketingskills/competitor-profiling/security/agent-trust-hub ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[competitor-profiling](/coreyhaines31/marketingskills/competitor-profiling)/Gen Agent Trust Hub

# competitor-profiling

Pass

Audited by Gen Agent Trust Hub on May 14, 2026

Risk Level: SAFE

Full Analysis

* **[SAFE]:** The skill operates as intended for competitive intelligence. It leverages legitimate external services through defined MCP tools and maintains data locally without unauthorized exfiltration.
* **[PROMPT\_INJECTION]:** The skill possesses a standard vulnerability surface for indirect prompt injection due to its core functionality of processing external website content.
* **Ingestion points**: Untrusted data is pulled from arbitrary competitor URLs via the `firecrawl_scrape` tool as described in Phase 1 of the `SKILL.md` file.
* **Boundary markers**: The synthesis instructions in `SKILL.md` do not include specific delimiters or warnings to the model to ignore potential instructions embedded in the scraped text.
* **Capability inventory**: The agent is instructed to write files to the local `competitor-profiles/` directory, which is a necessary capability for the skill's stated purpose.
* **Sanitization**: There are no instructions for sanitizing or filtering the scraped content before it is processed by the model to generate the final reports.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   May 14, 2026, 11:06 PM