--- source: https://skills.sh/coreyhaines31/marketingskills/prospecting/security/agent-trust-hub ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[prospecting](/coreyhaines31/marketingskills/prospecting)/Gen Agent Trust Hub

# prospecting

Pass

Audited by Gen Agent Trust Hub on Jul 13, 2026

Risk Level: SAFEEXTERNAL\_DOWNLOADSCOMMAND\_EXECUTIONPROMPT\_INJECTION

Full Analysis

* **[EXTERNAL\_DOWNLOADS]:** The skill utilizes several well-known and trusted third-party services for data enrichment and verification, including Apollo, ZoomInfo, Clay, Clearbit, and GitHub. These are documented for legitimate lead research purposes.
* **[COMMAND\_EXECUTION]:** References a bundled CLI utility, `github-prospects.js`, used to process GitHub developer data. The execution is scoped to specific discovery tasks and utilizes the agent's environment.
* **[PROMPT\_INJECTION]:** The skill has an indirect prompt injection surface because it processes untrusted data from external business websites (via Firecrawl or Browserbase) and public directories.
* **Ingestion points:** Extraction of content from individual prospect websites and public search results.
* **Boundary markers:** The instructions guide the agent to format output in structured markdown tables and CSVs, though they do not specify explicit delimiters for the raw extracted text.
* **Capability inventory:** Capability to write CSV files and execute a bundled Node.js script for data processing.
* **Sanitization:** No explicit sanitization or filtering of the extracted website content is defined within the prompt instructions, which is common for data-gathering skills.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jul 13, 2026, 08:07 PM