# create-skill

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/makerskills/create-skill/security/agent-trust-hub))

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[create-skill](/coreyhaines31/makerskills/create-skill)/Gen Agent Trust Hub

Pass

Audited by Gen Agent Trust Hub on Jun 30, 2026

Risk Level: SAFECOMMAND\_EXECUTIONEXTERNAL\_DOWNLOADSDATA\_EXFILTRATIONPROMPT\_INJECTION

Full Analysis

* **[COMMAND\_EXECUTION]:** The skill executes shell commands to automate the version control process for newly created skills.
* Evidence: `SKILL.md` contains the command `cd <target-repo> && git add -A && git commit -m "Add <name> skill: <one-line purpose>" && git push`.
* Context: This behavior is required to automate the commit and push workflow within the user's local skill repositories.
* **[EXTERNAL\_DOWNLOADS]:** The skill retrieves data from external URLs to process video content and references external guidance.
* Evidence: The `from-video` mode utilizes the `watch-video` tool with a user-provided URL. It also links to the `anthropics/skills` repository and `agentskills.io`.
* Context: Fetching video data is central to the workflow extraction feature, and the external links provide schema guidance.
* **[DATA\_EXFILTRATION]:** The skill transmits local project data to remote Git servers.
* Evidence: The integration of `git push` in the scaffolding workflow.
* Context: This is the expected method for publishing the generated skill files to a remote repository.
* **[PROMPT\_INJECTION]:** The skill possesses a surface for indirect prompt injection as it processes untrusted content into executable instructions.
* **Ingestion points:** Data enters through video transcripts (`from-video`), user-pasted text dumps (`from-dump`), and previous conversation history (`from-chat`).
* **Boundary markers:** The instructions do not specify the use of delimiters or 'ignore' warnings when interpolating extracted content into the new `SKILL.md` file.
* **Capability inventory:** The skill has the ability to write to the file system and execute shell commands (`git`).
* **Sanitization:** No explicit sanitization or filtering is mentioned for the content extracted from external sources before it is written into the new skill's instruction set.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jun 30, 2026, 07:57 PM
