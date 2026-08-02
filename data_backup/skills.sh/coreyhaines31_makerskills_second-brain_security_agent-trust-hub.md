--- source: https://skills.sh/coreyhaines31/makerskills/second-brain/security/agent-trust-hub ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[second-brain](/coreyhaines31/makerskills/second-brain)/Gen Agent Trust Hub

# second-brain

Pass

Audited by Gen Agent Trust Hub on Jul 11, 2026

Risk Level: SAFEPROMPT\_INJECTIONCOMMAND\_EXECUTION

Full Analysis

* **[PROMPT\_INJECTION]:** The skill fetches external content from URLs in 'capture' mode. This untrusted data is then saved and later processed in 'compile' and 'query' modes. This creates an attack surface for indirect prompt injection where malicious instructions embedded in captured web pages could influence the agent's behavior.
* **Ingestion points**: URL content fetching in `SKILL.md` (Step 3: capture).
* **Boundary markers**: None explicitly defined in the templates (`references/templates/raw.md`) or instructions.
* **Capability inventory**: File read/write, shell execution (`grep`, `pandoc`).
* **Sanitization**: Not specified in the instructions.
* **[PROMPT\_INJECTION]:** The skill is instructed to treat the vault's local `CLAUDE.md` file as the 'authoritative schema' and trust it over its own internal configuration. If the agent accesses a vault containing a malicious `CLAUDE.md` file, that file could contain instructions designed to override the agent's behavior and safety guidelines.
* **[COMMAND\_EXECUTION]:** The skill utilizes shell commands including `grep` for file discovery and `pandoc` for document rendering. While these are used for intended functionality (vault maintenance and artifact generation), they represent a capability that requires careful handling of file paths and user-provided inputs to avoid command injection.
* **[COMMAND\_EXECUTION]:** Documentation within the skill (`references/schema.md`) mentions the use of `sudo tlmgr` for installing TeX Live dependencies. Although intended as a user setup instruction, recommending `sudo` commands introduces a potential privilege escalation risk if the agent attempts to run these commands autonomously.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jul 11, 2026, 09:45 PM