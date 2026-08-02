# deep-research

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/makerskills/deep-research/security/agent-trust-hub))

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[deep-research](/coreyhaines31/makerskills/deep-research)/Gen Agent Trust Hub

Warn

Audited by Gen Agent Trust Hub on Jul 11, 2026

Risk Level: MEDIUMDATA\_EXFILTRATIONCOMMAND\_EXECUTIONPROMPT\_INJECTION

Full Analysis

* **[DATA\_EXFILTRATION]:** The skill accesses highly sensitive local data through the following mechanisms:
  + It executes `grep` against `~/.claude/memory/` to retrieve historical user context and prior decisions.
  + It accesses and reads from `${MAKERSKILLS_CONFIG:-$HOME/.config/makerskills}/deep-research/archive/`.
  + The skill simultaneously uses network-enabled tools (`WebSearch`, `WebFetch`, `agent-browser`) which could potentially receive or process fragments of this sensitive local data during the synthesis phase.
* **[COMMAND\_EXECUTION]:** The skill utilizes shell-level commands and filesystem operations to manage its research corpus:
  + Uses `grep` for searching local directories (`~/.claude/memory/` and archive paths).
  + Performs filesystem writes to save research briefs to `~/.config/makerskills/deep-research/archive/`.
  + Instructs a file migration operation: "move those files into the archive directory first" if an old structure exists.
* **[PROMPT\_INJECTION]:** The skill is susceptible to indirect prompt injection (Category 8) due to its core function of processing untrusted web data:
  + **Ingestion points:** Untrusted data enters the agent via `WebSearch`, `WebFetch`, and the `agent-browser` tool which hits arbitrary URLs.
  + **Boundary markers:** There are no instructions provided to wrap external content in delimiters or to ignore potential instructions embedded in the fetched web pages.
  + **Capability inventory:** The agent has the ability to read private user memory via `grep`, interact with the Notion API (using `$NOTION_API_KEY`), and write to the local filesystem.
  + **Sanitization:** The instructions do not define any sanitization or validation steps for content retrieved from the web before it is synthesized into the final brief.

Audit Metadata

Risk Level
:   MEDIUM

Analyzed
:   Jul 11, 2026, 09:45 PM
