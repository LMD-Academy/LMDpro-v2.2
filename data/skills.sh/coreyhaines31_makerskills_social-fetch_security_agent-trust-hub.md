# social-fetch

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/makerskills/social-fetch/security/agent-trust-hub))

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[social-fetch](/coreyhaines31/makerskills/social-fetch)/Gen Agent Trust Hub

Warn

Audited by Gen Agent Trust Hub on Jul 6, 2026

Risk Level: MEDIUMCOMMAND\_EXECUTIONDATA\_EXFILTRATIONEXTERNAL\_DOWNLOADSPROMPT\_INJECTION

Full Analysis

* **[COMMAND\_EXECUTION]:** The skill's strategy documentation in `references/strategies.md` provides shell command templates that incorporate variable parts of a URL, such as `<handle>`, `<rkey>`, `<instance>`, or `<id>`, into command strings. If these parameters are not rigorously escaped before the agent executes the shell commands, it creates an opportunity for command injection.
* **[DATA\_EXFILTRATION]:** To fulfill its primary function, the skill transmits user-provided social media URLs to external services, including ScrapeCreators and the well-known platform Apify. This involves sharing potentially private URL data with third-party infrastructure.
* **[EXTERNAL\_DOWNLOADS]:** The skill fetches data from various social media APIs and optionally downloads media files to the user's local directory at `~/Documents/social-fetches/`. These operations are conducted using standard tools like `curl` and `agent-browser`.
* **[PROMPT\_INJECTION]:** The skill is susceptible to Indirect Prompt Injection (Category 8) due to its data processing pipeline:
* **Ingestion points**: Fetches untrusted text and metadata from platforms such as X, Reddit, and LinkedIn as specified in `SKILL.md`.
* **Boundary markers**: The skill lacks clear delimiters or instructions to prevent the agent from being influenced by malicious content embedded within the fetched social media posts.
* **Capability inventory**: The execution environment allows for shell command execution and local file system modifications.
* **Sanitization**: There is no documented process for sanitizing or escaping the retrieved content before it is returned and used by other skills.

Audit Metadata

Risk Level
:   MEDIUM

Analyzed
:   Jul 6, 2026, 05:19 PM
