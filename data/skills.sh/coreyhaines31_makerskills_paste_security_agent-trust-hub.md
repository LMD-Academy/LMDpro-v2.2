# paste

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/makerskills/paste/security/agent-trust-hub))

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[paste](/coreyhaines31/makerskills/paste)/Gen Agent Trust Hub

Pass

Audited by Gen Agent Trust Hub on Jul 2, 2026

Risk Level: SAFECOMMAND\_EXECUTION

Full Analysis

* **[COMMAND\_EXECUTION]:** The skill utilizes standard macOS system utilities `pbpaste` to retrieve clipboard content and `pbcopy` to write the reformatted text back to the system clipboard. It also uses the `open` command to launch a web browser for viewing HTML-formatted output stored in `/tmp/`.
* **[PROMPT\_INJECTION]:** The skill acts on untrusted data ingested from the system clipboard or user prompt (Indirect Prompt Injection surface). While it implements 'universal cleaning' to strip ANSI codes and terminal artifacts, it does not use explicit boundary markers to delimit user content from instructions. However, the mandatory 'Scan for secrets' step provides a robust defense against accidental processing of sensitive data.
* **[DATA\_EXFILTRATION]:** The skill references a specific local file path (`~/.claude/projects/-Users-coreyhaines/memory/feedback_social_link_placement.md`) to access user-specific preferences for link placement. This constitutes local file system access targeted at the agent's own project-specific memory.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jul 2, 2026, 04:04 AM
