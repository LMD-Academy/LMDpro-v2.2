--- source: https://skills.sh/coreyhaines31/makerskills/decide/security/agent-trust-hub ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[decide](/coreyhaines31/makerskills/decide)/Gen Agent Trust Hub

# decide

Pass

Audited by Gen Agent Trust Hub on Jul 16, 2026

Risk Level: SAFECOMMAND\_EXECUTIONPROMPT\_INJECTION

Full Analysis

* **[COMMAND\_EXECUTION]:** The skill performs local file system management by creating configuration directories and migrating files from the skill's reference folder to the user's local configuration directory at `~/.config/makerskills/`. This is used for establishing persistent storage for the decision logs.
* **[PROMPT\_INJECTION]:** The skill presents an attack surface for indirect prompt injection because it ingests and processes untrusted user data (decision details and question responses) which are subsequently archived.
* **Ingestion points:** Step 1 and Step 3 in SKILL.md capture user-provided decision framing and verbatim answers to diagnostic questions.
* **Boundary markers:** No explicit delimiters or instructions are provided to the agent to treat this ingested data as potentially untrusted instructions.
* **Capability inventory:** The skill allows the agent to write files to the local file system and move existing files between directories.
* **Sanitization:** No sanitization or escaping is applied to the user input; the skill explicitly requires capturing responses verbatim to preserve the integrity of the user's 'first instinct'.
* **[SAFE]:** The skill does not perform any network operations, download external code, or utilize obfuscated content. Its operations are restricted to the local environment and are consistent with its stated purpose as a productivity and decision-logging tool.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jul 16, 2026, 12:16 PM