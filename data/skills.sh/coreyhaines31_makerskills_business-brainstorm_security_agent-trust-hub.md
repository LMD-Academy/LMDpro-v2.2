# business-brainstorm

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/makerskills/business-brainstorm/security/agent-trust-hub))

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[business-brainstorm](/coreyhaines31/makerskills/business-brainstorm)/Gen Agent Trust Hub

Pass

Audited by Gen Agent Trust Hub on Jul 11, 2026

Risk Level: SAFE

Full Analysis

* **[COMMAND\_EXECUTION]:** The skill composes with external tools such as `/domain` for checking website availability and `/deep-research` for performing market validation and competitive landscape analysis. These calls are part of the intended workflow for validating business ideas.
* **[DATA\_EXFILTRATION]:** The skill reads from specific local configuration files (e.g., `${MAKERSKILLS_CONFIG:-$HOME/.config/makerskills}/business-brainstorm/portfolio.local.md`) and project memory files (`project_*.md`) to evaluate 'portfolio fit'. This access is contained to the local environment and used to ensure new ideas complement the user's existing assets.
* **[PROMPT\_INJECTION]:** The skill processes user-supplied business descriptions as untrusted input. It mitigates potential risks by applying a rigid, structured evaluation framework (problem, audience, wedge, etc.) and enforcing a strict output template, which minimizes the opportunity for malicious input to override the agent's logic.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jul 11, 2026, 11:16 AM
