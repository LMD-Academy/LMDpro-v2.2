# unstuck

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/makerskills/unstuck/security/agent-trust-hub))

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[unstuck](/coreyhaines31/makerskills/unstuck)/Gen Agent Trust Hub

Pass

Audited by Gen Agent Trust Hub on Jul 15, 2026

Risk Level: SAFEPROMPT\_INJECTIONCOMMAND\_EXECUTION

Full Analysis

* **[PROMPT\_INJECTION]:** The skill contains strong behavioral directives that override an agent's standard response logic. Specifically, the 'Agent fast path' section instructs the agent to 'Refuse to take no for an answer' and run lateral-thinking techniques 'BEFORE reporting a dead end' to the user. While intended for task persistence, this is a direct modification of default AI safety/reporting behaviors.
* **[COMMAND\_EXECUTION]:** The skill relies on file system operations to maintain state and archives. It specifies writing to '${MAKERSKILLS\_CONFIG:-$HOME/.config/makerskills}/unstuck/archive/' and requires the agent to create directories and write Markdown files locally. This involves environment variable expansion and persistent local storage of session context.
* **[PROMPT\_INJECTION]:** The skill exhibits surface area for indirect prompt injection. It processes untrusted user input (specifically 'The goal' and 'The wall') in a multi-step analysis workflow (Assumption Autopsy, Triaged Techniques) without explicit boundary markers or sanitization. Malicious instructions embedded in the 'wall' description could potentially influence the agent's reasoning during the technique execution phase.
* **[DATA\_EXFILTRATION]:** While no network exfiltration is present, the skill persists raw session data, including the user's goals and technical blocks, into a predictable local configuration directory in plain text. This could lead to local data exposure if the 'wall' contains sensitive environment details, error messages with credentials, or internal paths.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jul 15, 2026, 07:02 AM
