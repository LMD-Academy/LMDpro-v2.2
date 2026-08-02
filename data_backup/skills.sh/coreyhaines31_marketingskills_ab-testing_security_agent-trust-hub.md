--- source: https://skills.sh/coreyhaines31/marketingskills/ab-testing/security/agent-trust-hub ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[ab-testing](/coreyhaines31/marketingskills/ab-testing)/Gen Agent Trust Hub

# ab-testing

Pass

Audited by Gen Agent Trust Hub on May 14, 2026

Risk Level: SAFE

Full Analysis

* **[SAFE]:** The skill consists of markdown-based instructional content, hypothesis frameworks, and documentation templates. It does not contain executable scripts, shell commands, or obfuscated payloads.
* **[EXTERNAL\_DOWNLOADS]:** The skill provides links to several well-known third-party A/B testing calculators and tools, including those from Evan Miller, Optimizely, and VWO. These are established industry resources and are documented here as safe references for the intended functionality.
* **[INDIRECT\_PROMPT\_INJECTION]:** The skill contains instructions to ingest data from local project files to gather product marketing context.
* **Ingestion points**: Reads files such as `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` if they exist.
* **Boundary markers**: No explicit delimiters or warnings to ignore embedded instructions are present when reading these context files.
* **Capability inventory**: The skill is limited to text generation and analysis within the agent's conversation. It does not have access to subprocess execution, file writing, or network transmission tools.
* **Sanitization**: No specific validation or escaping is applied to the content of the ingested files before they are processed by the agent.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   May 14, 2026, 05:12 AM