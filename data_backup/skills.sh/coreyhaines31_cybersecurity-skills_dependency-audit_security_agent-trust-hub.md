--- source: https://skills.sh/coreyhaines31/cybersecurity-skills/dependency-audit/security/agent-trust-hub ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[cybersecurity-skills](/coreyhaines31/cybersecurity-skills)/[dependency-audit](/coreyhaines31/cybersecurity-skills/dependency-audit)/Gen Agent Trust Hub

# dependency-audit

Pass

Audited by Gen Agent Trust Hub on Jul 8, 2026

Risk Level: SAFEPROMPT\_INJECTION

Full Analysis

* **[PROMPT\_INJECTION]:** The skill exhibits a surface for indirect prompt injection by design, as it must ingest and process untrusted data from local project files.
* **Ingestion points:** The skill reads various manifest files (e.g., `package.json`, `requirements.txt`, `Gemfile`, `go.mod`) and CI/CD configurations (`.github/workflows`) which could contain malicious instructions embedded in package names, versions, or metadata.
* **Boundary markers:** The instructions do not explicitly mandate the use of delimiters or 'ignore embedded instructions' warnings when the agent interpolates the content of these files into its context.
* **Capability inventory:** The agent is granted access to powerful tools including `Bash` (for executing audit commands), `Read` (for file system access), and `WebSearch` (for looking up CVE details), which could be misused if a malicious instruction in a manifest file is followed.
* **Sanitization:** There are no specific instructions provided to validate, sanitize, or escape the content read from external files before the agent analyzes them.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jul 8, 2026, 12:46 AM