# copy-editing

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/marketingskills/copy-editing/security/agent-trust-hub))

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[copy-editing](/coreyhaines31/marketingskills/copy-editing)/Gen Agent Trust Hub

Pass

Audited by Gen Agent Trust Hub on May 14, 2026

Risk Level: SAFE

Full Analysis

* **[SAFE]:** The skill provides a structured 'Seven Sweeps' framework for text editing and conversion optimization. All provided files consist of markdown instructions, reference documentation, or JSON evaluation data with no malicious intent detected.
* **[DATA\_EXPOSURE]:** The skill instructs the agent to check for `.agents/product-marketing-context.md` (or `.claude/product-marketing-context.md`) to inform its editing process. This is a standard and safe practice for retrieving project-specific context and does not involve exfiltrating sensitive data or accessing restricted system files.
* **[INDIRECT\_PROMPT\_INJECTION]:** The skill's primary purpose is to process and edit user-supplied marketing copy, which constitutes an ingestion point for untrusted data.
* **Ingestion points**: User-provided marketing copy described in the skill's purpose and evaluation prompts.
* **Boundary markers**: None explicitly defined to delimit user input from instructions.
* **Capability inventory**: The skill does not define or use any tools, scripts, or subprocesses; its output is limited to text responses within the chat context.
* **Sanitization**: No sanitization or validation of the input text is performed.
  Given the lack of dangerous capabilities (such as file-writing or network access), the risk of indirect injection is confined to the immediate conversation and is considered negligible.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   May 14, 2026, 11:58 AM
