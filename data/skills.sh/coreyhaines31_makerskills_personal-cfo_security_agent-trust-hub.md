# personal-cfo

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/makerskills/personal-cfo/security/agent-trust-hub))

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[personal-cfo](/coreyhaines31/makerskills/personal-cfo)/Gen Agent Trust Hub

Pass

Audited by Gen Agent Trust Hub on Jul 11, 2026

Risk Level: SAFE

Full Analysis

* **[COMMAND\_EXECUTION]:** The skill instructs the agent to manage a local archive of financial scenarios. This involves creating directories and moving existing files from temporary paths to a permanent archive at `~/.config/makerskills/personal-cfo/archive/`. These actions are consistent with the skill's stated purpose of providing persistent storage for financial modeling results.
* **[DATA\_EXFILTRATION]:** The skill handles potentially sensitive financial information, including income, purchase prices, and rental estimates. Analysis confirms this data is processed and stored entirely on the local file system within the user's `~/Documents` and `~/.config` folders. No external network requests, remote API calls, or data exfiltration patterns were identified.
* **[PROMPT\_INJECTION]:** The skill features an attack surface for indirect prompt injection as it processes user-provided data to generate reports and file system structures.
* **Ingestion points:** User inputs gathered via the structured questionnaire in `references/templates/house.md` (e.g., property nicknames, scenario descriptions).
* **Boundary markers:** The skill encourages a structured batch approach for data gathering but lacks explicit 'ignore embedded instructions' warnings for the processing of user strings.
* **Capability inventory:** The agent has permissions to write to the file system, create new directories, and move files.
* **Sanitization:** There are no explicit instructions for the agent to sanitize or escape user-provided strings before using them in file paths or markdown reports.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jul 11, 2026, 09:45 PM
