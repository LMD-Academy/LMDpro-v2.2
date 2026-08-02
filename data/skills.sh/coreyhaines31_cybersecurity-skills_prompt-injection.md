# prompt-injection

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/cybersecurity-skills/prompt-injection))

[skills](/)/[coreyhaines31](/coreyhaines31)/[cybersecurity-skills](/coreyhaines31/cybersecurity-skills)/prompt-injection

Installation

CommandPrompt

`$ npx skills add https://github.com/coreyhaines31/cybersecurity-skills --skill prompt-injection`

SKILL.md

# Prompt Injection — AI/LLM Security Audit

Audit applications that use AI features, LLM integrations, or AI agents for prompt injection, privilege escalation, and authorization bypass vulnerabilities.

## Background

Prompt injection is the #1 vulnerability in LLM-integrated applications (OWASP Top 10 for LLMs, LLM01). It occurs when untrusted input influences the instructions an LLM follows, causing it to ignore its system prompt, leak secrets, or take unauthorized actions.

**Three attack classes:**

* **Direct injection:** Attacker provides malicious input directly to the LLM (e.g., chat input, form field processed by AI)
* **Indirect injection:** Attacker plants malicious instructions in data the LLM will later consume (e.g., web pages, emails, documents, database records, tool outputs, RAG chunks)
* **Cross-privilege injection:** Lower-privileged user plants injection in shared data that a higher-privileged user's AI session consumes, escalating privileges through the AI layer

## Methodology

### Step 1: Map the AI Attack Surface

Identify every place the application uses AI. This includes direct LLM API calls AND higher-level AI features:

Show more

Installs

8

Repository

[coreyhaines31/c…y-skills](https://github.com/coreyhaines31/cybersecurity-skills "coreyhaines31/cybersecurity-skills")

GitHub Stars

28

First Seen

Jul 8, 2026

Security Audits

[Gen Agent Trust HubPass](/coreyhaines31/cybersecurity-skills/prompt-injection/security/agent-trust-hub)[SocketPass](/coreyhaines31/cybersecurity-skills/prompt-injection/security/socket)[SnykPass](/coreyhaines31/cybersecurity-skills/prompt-injection/security/snyk)
