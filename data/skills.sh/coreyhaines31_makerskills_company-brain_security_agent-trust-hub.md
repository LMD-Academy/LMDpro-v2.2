# company-brain

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/makerskills/company-brain/security/agent-trust-hub))

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[company-brain](/coreyhaines31/makerskills/company-brain)/Gen Agent Trust Hub

Pass

Audited by Gen Agent Trust Hub on Jul 7, 2026

Risk Level: SAFECOMMAND\_EXECUTIONPROMPT\_INJECTION

Full Analysis

* **[COMMAND\_EXECUTION]:** The skill instructions direct the agent to use standard system utilities including `git` for version control, `grep` for searching the knowledge base, and `pandoc` for generating PDF documents from markdown files. These commands are used for their intended purpose of managing a file-based wiki. The `pandoc` command specifically references a local stylesheet at `~/.local/share/makerskills/render.css`.
* **[PROMPT\_INJECTION]:** The skill presents a surface for indirect prompt injection because it processes content contributed by multiple team members or ingested from automated external sources (e.g., call transcripts).
* **Ingestion points**: Reads markdown files from multiple structured directories within the vault path (e.g., `people/`, `meetings/`, `sops/`, `decisions/`, `customer-language/`, `recurring-questions/`, `sales-objections/`).
* **Boundary markers**: Uses markdown headers (e.g., `## Sources`, `## Details`) to structure content, but lacks specific instructions to disregard potentially malicious commands embedded within the raw data ingested from external transcripts or multi-author sources.
* **Capability inventory**: Perform file reads and writes within the vault path, execute local shell commands (`git`, `grep`, `pandoc`), and utilize the `deep-research` tool for external queries.
* **Sanitization**: There are no instructions for sanitizing or escaping the content of captured transcripts or notes before they are processed by the agent.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jul 7, 2026, 12:56 PM
