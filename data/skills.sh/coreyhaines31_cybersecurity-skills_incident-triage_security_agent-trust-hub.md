# incident-triage

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/cybersecurity-skills/incident-triage/security/agent-trust-hub))

[skills](/)/[coreyhaines31](/coreyhaines31)/[cybersecurity-skills](/coreyhaines31/cybersecurity-skills)/[incident-triage](/coreyhaines31/cybersecurity-skills/incident-triage)/Gen Agent Trust Hub

Pass

Audited by Gen Agent Trust Hub on Jul 8, 2026

Risk Level: SAFE

Full Analysis

* **[COMMAND\_EXECUTION]:** The skill includes instructions to execute standard system administration and forensics commands (e.g., `ps auxf`, `ss -tupn`, `lsof`, `journalctl`) to gather evidence and analyze system state during security incident triage. These commands are used to collect local system information for analysis and are consistent with the skill's primary purpose of incident response.
* **[DATA\_EXPOSURE]:** While the skill accesses system state information (running processes, network connections, logged-in users), this data is intended for local triage and evidence preservation. There are no patterns suggesting the exfiltration of this data to external or unauthorized destinations.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jul 8, 2026, 12:46 AM
