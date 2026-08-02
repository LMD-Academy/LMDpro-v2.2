# company-cfo

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/makerskills/company-cfo/security/agent-trust-hub))

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[company-cfo](/coreyhaines31/makerskills/company-cfo)/Gen Agent Trust Hub

Pass

Audited by Gen Agent Trust Hub on Jul 2, 2026

Risk Level: SAFECOMMAND\_EXECUTIONPROMPT\_INJECTION

Full Analysis

* **[COMMAND\_EXECUTION]:** The skill instructs the agent to use command-line tools like 'git' and 'gh' to manage the lifecycle of financial reports, including branch creation, commits, and pull requests. It also suggests using 'python3 -m http.server' to host a local forecasting projector.
* **[PROMPT\_INJECTION]:** The skill has an indirect prompt injection surface because it processes untrusted transaction data from external financial APIs. Ingestion points: Data is pulled from services such as Stripe, Mercury, Plane, and Deel as specified in Phase 1 of the monthly workflow. Boundary markers: No explicit markers or 'ignore' instructions are defined for delimiting the external data. Capability inventory: The skill can write files, execute shell commands (git, gh, python), and interact with external CLI tools. Sanitization: The instructions do not specify a method for sanitizing, escaping, or validating the data before inclusion in the final reports.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jul 2, 2026, 04:05 AM
