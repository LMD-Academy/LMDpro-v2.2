# recon

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/cybersecurity-skills/recon/security/agent-trust-hub))

[skills](/)/[coreyhaines31](/coreyhaines31)/[cybersecurity-skills](/coreyhaines31/cybersecurity-skills)/[recon](/coreyhaines31/cybersecurity-skills/recon)/Gen Agent Trust Hub

Fail

Audited by Gen Agent Trust Hub on Jul 8, 2026

Risk Level: HIGHCOMMAND\_EXECUTIONREMOTE\_CODE\_EXECUTIONEXTERNAL\_DOWNLOADSPROMPT\_INJECTION

Full Analysis

* **[COMMAND\_EXECUTION]:** The skill instructions use the `$ARGUMENTS` placeholder directly within shell command strings passed to the `Bash` tool. This pattern is highly susceptible to command injection if user input contains shell metacharacters such as `;`, `&&`, `|`, or backticks.
* Evidence in `SKILL.md`: `dig any $ARGUMENTS`, `dig axfr @ns-server $ARGUMENTS`, `whois $ARGUMENTS`, and `nmap -sC -sV -oN scan-results.txt $ARGUMENTS`.
* Evidence in `SKILL.md`: `curl -s "https://crt.sh/?q=%25.$ARGUMENTS&output=json"`. In this instance, unsanitized input could break out of the URL string to execute additional bash commands.
* **[REMOTE\_CODE\_EXECUTION]:** Due to the command injection vulnerabilities in the shell commands, an attacker could achieve arbitrary code execution on the system running the agent.
* **[EXTERNAL\_DOWNLOADS]:** The methodology references multiple external security tools (e.g., `testssl.sh`, `sslyze`, `gobuster`, `feroxbuster`, `dirsearch`). While standard in the security industry, these represent unverified external dependencies that the skill assumes are available or can be executed.
* **[PROMPT\_INJECTION]:** The skill exhibits an attack surface for indirect prompt injection via its data collection features.
* Ingestion points: Uses `WebSearch` and `WebFetch` to gather external data.
* Boundary markers: Absent. The skill does not define delimiters or provide instructions to ignore commands embedded in fetched web content.
* Capability inventory: The skill has access to `Bash` for command execution and `Write` for file system modification.
* Sanitization: Absent. External content is correlated and analyzed in Phase 3 without sanitization or escaping.

Recommendations

* AI detected serious security threats

Audit Metadata

Risk Level
:   HIGH

Analyzed
:   Jul 8, 2026, 12:46 AM
