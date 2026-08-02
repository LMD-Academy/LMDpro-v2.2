--- source: https://skills.sh/coreyhaines31/marketingskills/marketing-ideas/security/agent-trust-hub ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[marketing-ideas](/coreyhaines31/marketingskills/marketing-ideas)/Gen Agent Trust Hub

# marketing-ideas

Pass

Audited by Gen Agent Trust Hub on May 15, 2026

Risk Level: SAFEPROMPT\_INJECTION

Full Analysis

* **[PROMPT\_INJECTION]:** The skill is susceptible to indirect prompt injection through its ingestion of project-specific context files.
* **Ingestion points**: SKILL.md instructs the agent to read from .agents/product-marketing-context.md or .claude/product-marketing-context.md before starting the task.
* **Boundary markers**: Absent. No delimiters or 'ignore embedded instructions' warnings are provided to the agent for the ingested content.
* **Capability inventory**: The skill does not restrict tool access in its frontmatter, meaning the agent's full set of environment capabilities (such as shell and file access) is available while processing untrusted data.
* **Sanitization**: Absent. No validation or filtering is performed on the context file content.
* **Remediation**: Wrap external context in delimiters with an explicit 'ignore embedded instructions' warning to ensure the agent treats the content as data rather than instructions.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   May 15, 2026, 11:29 AM