--- source: https://skills.sh/coreyhaines31/marketingskills/directory-submissions/security/agent-trust-hub ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[directory-submissions](/coreyhaines31/marketingskills/directory-submissions)/Gen Agent Trust Hub

# directory-submissions

Pass

Audited by Gen Agent Trust Hub on May 14, 2026

Risk Level: SAFE

Full Analysis

* **[COMMAND\_EXECUTION]:** The skill instructs the agent to use `curl -sIL [URL]` to verify backlink status. This is a standard network operation used for the skill's primary purpose of tracking directory submissions.
* **[INDIRECT\_PROMPT\_INJECTION]:** The skill exhibits an indirect prompt injection surface as it processes untrusted user data (product descriptions and URLs) and uses them in conjunction with a network tool.
* **Ingestion points:** User-provided product details, taglines, and directory listing URLs defined in the workflow steps in `SKILL.md`.
* **Boundary markers:** No explicit delimiters or instructions are used to separate user-provided content from the agent's instructions.
* **Capability inventory:** Use of `curl` in `SKILL.md` to perform network requests.
* **Sanitization:** No input validation or sanitization is performed on the user-provided URLs before they are passed to the `curl` command.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   May 14, 2026, 11:06 PM