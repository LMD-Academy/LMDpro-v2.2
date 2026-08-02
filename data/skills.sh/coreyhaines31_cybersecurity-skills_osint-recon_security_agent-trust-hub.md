# osint-recon

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/cybersecurity-skills/osint-recon/security/agent-trust-hub))

[skills](/)/[coreyhaines31](/coreyhaines31)/[cybersecurity-skills](/coreyhaines31/cybersecurity-skills)/[osint-recon](/coreyhaines31/cybersecurity-skills/osint-recon)/Gen Agent Trust Hub

Pass

Audited by Gen Agent Trust Hub on Jul 8, 2026

Risk Level: SAFECOMMAND\_EXECUTIONEXTERNAL\_DOWNLOADSPROMPT\_INJECTION

Full Analysis

* **[PROMPT\_INJECTION]:** The skill is vulnerable to indirect prompt injection because it ingests and processes data from external, untrusted sources such as web search results and public record databases.
* **Ingestion points:** Web search results, web fetch responses, and data retrieved from the `crt.sh` certificate transparency log.
* **Boundary markers:** None; the skill does not use delimiters or instructions to ignore potential commands embedded in the collected data.
* **Capability inventory:** The agent can execute shell commands via the `Bash` tool and write information to the file system using the `Write` tool.
* **Sanitization:** No sanitization or validation of the external content is performed before it is analyzed or included in reports.
* **[COMMAND\_EXECUTION]:** The skill provides instructions for using various command-line utilities to perform infrastructure and file analysis.
* **Evidence:** Documented use of `whois`, `dig`, and `exiftool` within the `Bash` tool environment.
* **[EXTERNAL\_DOWNLOADS]:** Fetches reconnaissance data from a well-known certificate transparency service.
* **Evidence:** The skill uses `curl` to query `https://crt.sh` for subdomain mapping.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jul 8, 2026, 12:46 AM
