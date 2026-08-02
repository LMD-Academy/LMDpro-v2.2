# cloud-audit

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/cybersecurity-skills/cloud-audit/security/agent-trust-hub))

[skills](/)/[coreyhaines31](/coreyhaines31)/[cybersecurity-skills](/coreyhaines31/cybersecurity-skills)/[cloud-audit](/coreyhaines31/cybersecurity-skills/cloud-audit)/Gen Agent Trust Hub

Pass

Audited by Gen Agent Trust Hub on Jul 8, 2026

Risk Level: SAFECOMMAND\_EXECUTION

Full Analysis

* **[COMMAND\_EXECUTION]:** The skill uses the Bash tool to execute standard cloud management CLI commands (`aws`, `gcloud`, `az`) to retrieve infrastructure configurations for auditing purposes.
* **[DATA\_EXPOSURE]:** The skill accesses sensitive information such as IAM policies, service account lists, and credential reports. This access is consistent with the primary purpose of performing a security audit and does not involve unauthorized data transmission.
* **[INDIRECT\_PROMPT\_INJECTION]:** The skill processes external data in the form of cloud CLI outputs and Infrastructure as Code (IaC) files like Terraform or CloudFormation. While these are untrusted inputs, the skill's logic is focused on pattern matching (e.g., searching for wildcard permissions or public buckets) rather than executing instructions found within that data.
* **Ingestion points:** Reads Infrastructure as Code files (Terraform, CloudFormation, Pulumi) and processes output from cloud CLI tools.
* **Boundary markers:** No specific delimiters are used to separate user data from instructions.
* **Capability inventory:** Uses Bash, Read, and Grep tools to analyze the gathered configuration data.
* **Sanitization:** No explicit sanitization of the analyzed cloud configuration data is performed.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jul 8, 2026, 12:46 AM
