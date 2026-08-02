--- source: https://skills.sh/coreyhaines31/makerskills/create-skill ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/create-skill

# create-skill

Installation

CommandPrompt

`$ npx skills add https://github.com/coreyhaines31/makerskills --skill create-skill`

SKILL.md

# /create-skill — Turn a workflow, brief, or chat into a skill

Replaces the prior `add-skill`. Primary use case: you've been iterating on a workflow in conversation (like this entire session) and now want to formalize it. Secondary: scaffold from a brief / data dump / fresh idea.

## Step 1 — Pick input mode

| Invocation | Mode | What it means |
| --- | --- | --- |
| `/create-skill` (mid-conversation) | **from-chat** (default) | Extract the skill from the workflow we've been discussing in this session. The most common case. |
| `/create-skill from-video <url-or-path>` | **from-video** | Corey recorded a Loom / Zoom / screen-share of himself doing a process. Skill calls `watch-video` (visual mode) to get transcript + key visual moments, then synthesizes the workflow into a SKILL.md. Best for visual workflows hard to describe in text. |
| `/create-skill from-dump` + pasted content | **from-dump** | User provides a brief, prior conversation transcript, exported chat, or notes. Skill structures it. |
| `/create-skill from-scratch <name>` | **from-scratch** | Fresh idea with no source material — interactive Q&A to flesh it out (the prior `add-skill` behavior). |

If unspecified and there's substantive recent conversation, default to **from-chat**. If the conversation is empty/short, ask which mode.

## Step 2 — Defer to Anthropic / community guidance for the schema

Don't reinvent SKILL.md format rules. For canonical guidance on frontmatter, description-writing, references/ structure, and skill best practices, this skill leans on:

Show more

Installs

1

Repository

[coreyhaines31/m…erskills](https://github.com/coreyhaines31/makerskills "coreyhaines31/makerskills")

GitHub Stars

226

First Seen

Jun 30, 2026

Security Audits

[Gen Agent Trust HubPass](/coreyhaines31/makerskills/create-skill/security/agent-trust-hub)[SocketPass](/coreyhaines31/makerskills/create-skill/security/socket)[SnykWarn](/coreyhaines31/makerskills/create-skill/security/snyk)