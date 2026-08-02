# disk-forensics

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/cybersecurity-skills/disk-forensics/security/agent-trust-hub))

[skills](/)/[coreyhaines31](/coreyhaines31)/[cybersecurity-skills](/coreyhaines31/cybersecurity-skills)/[disk-forensics](/coreyhaines31/cybersecurity-skills/disk-forensics)/Gen Agent Trust Hub

Pass

Audited by Gen Agent Trust Hub on Jul 8, 2026

Risk Level: SAFE

Full Analysis

* **[COMMAND\_EXECUTION]:** The skill instructs the agent to use standard system utilities (e.g., `fdisk`, `mount`, `stat`, `strings`) and forensic tools (e.g., Sleuth Kit, `foremost`, `bulk_extractor`) to analyze disk images. These are used within their intended purpose for forensic analysis.
* **[INDIRECT\_PROMPT\_INJECTION]:** The skill processes untrusted external data from disk images, system logs, and browser history which could theoretically contain malicious prompts. However, this is inherent to the forensic use case.
* Ingestion points: Disk images, file systems, log files (`/var/log/*`), browser history, and registry hives.
* Boundary markers: Not present.
* Capability inventory: File system listing, file reading, metadata extraction, and pattern searching using tools like `grep` and `strings` via the `Bash` tool.
* Sanitization: Not present; the skill focuses on raw evidence recovery and analysis.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jul 8, 2026, 12:46 AM
