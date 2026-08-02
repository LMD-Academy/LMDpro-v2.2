--- source: https://skills.sh/coreyhaines31/cybersecurity-skills/prompt-injection/security/agent-trust-hub ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[cybersecurity-skills](/coreyhaines31/cybersecurity-skills)/[prompt-injection](/coreyhaines31/cybersecurity-skills/prompt-injection)/Gen Agent Trust Hub

# prompt-injection

Pass

Audited by Gen Agent Trust Hub on Jul 8, 2026

Risk Level: SAFE

Full Analysis

* **[PROMPT\_INJECTION]:** Automated flags for instruction override and prompt leaking (e.g., 'Ignore previous instructions', 'What is your system prompt?') are false positives. These strings are contained within 'Step 5' and 'Step 2' as example payloads to test applications, not as commands for the agent itself to execute.
* **[SAFE]:** The skill possesses a potential indirect prompt injection surface as it processes external files using Read and Grep tools to perform security reviews. This is inherent to its function as an auditing tool. Ingestion points: File reading via Read, Grep, and Glob tools; Boundary markers: None; Capability inventory: Bash, Write, WebSearch; Sanitization: None. No malicious patterns or behaviors were found.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jul 8, 2026, 12:47 AM