--- source: https://skills.sh/coreyhaines31/marketingskills/product-marketing/security/agent-trust-hub ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[product-marketing](/coreyhaines31/marketingskills/product-marketing)/Gen Agent Trust Hub

# product-marketing

Pass

Audited by Gen Agent Trust Hub on May 14, 2026

Risk Level: SAFE

Full Analysis

* **[SAFE]:** The skill performs standard file operations within the project directory to manage a marketing context document.
* **[PROMPT\_INJECTION]:** Indirect prompt injection surface identified. The skill's 'Auto-draft' feature ingests data from local files (README, landing pages, package.json) to generate content. While these files are part of the user's codebase, instructions embedded in them could theoretically influence the agent's output.
* **Ingestion points:** README.md, package.json, and other marketing-related files in the repository.
* **Boundary markers:** None explicitly defined in the instructions for reading files.
* **Capability inventory:** File system read (codebase scanning) and file system write (creating `.agents/product-marketing.md`).
* **Sanitization:** No explicit sanitization of codebase content before processing.
* **[DATA\_EXPOSURE]:** The skill reads project metadata (package.json) and documentation. This is consistent with its stated purpose of drafting marketing context and does not involve accessing sensitive system files or credentials.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   May 14, 2026, 05:12 AM