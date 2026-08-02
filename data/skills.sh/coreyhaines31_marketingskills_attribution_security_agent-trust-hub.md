# attribution

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/marketingskills/attribution/security/agent-trust-hub))

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[attribution](/coreyhaines31/marketingskills/attribution)/Gen Agent Trust Hub

Pass

Audited by Gen Agent Trust Hub on Jul 27, 2026

Risk Level: SAFEPROMPT\_INJECTION

Full Analysis

* **[SAFE]:** The skill does not contain any detected malicious patterns, obfuscation, or unauthorized access to sensitive system resources.
* **[PROMPT\_INJECTION]:** The skill involves processing untrusted data from external sources such as ad platform reports and third-party webhook payloads, which presents a surface for indirect prompt injection.
* **Ingestion points:** Marketing data from external ad platforms (SKILL.md) and webhook payloads from third-party tools (references/first-party-tracking.md).
* **Boundary markers:** The skill provides logic for reconciling conflicting data sources but does not define explicit delimiters for raw data processing.
* **Capability inventory:** No shell execution, arbitrary code evaluation, or unsafe subprocess calls were detected in the skill instructions or provided code snippets.
* **Sanitization:** The instructions explicitly include best practices for data normalization, anonymity guards to prevent PII leakage during identity merging, and webhook hardening measures such as signature verification and input validation.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jul 27, 2026, 07:08 PM
