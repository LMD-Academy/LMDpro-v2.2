--- source: https://skills.sh/coreyhaines31/makerskills/paste ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/paste

# paste

Installation

CommandPrompt

`$ npx skills add https://github.com/coreyhaines31/makerskills --skill paste`

SKILL.md

# /paste — Clean content for any destination

Cleans terminal output (ANSI, box-drawing, prompt artifacts, etc.) and reformats per destination rules. Reads clipboard by default, writes back to clipboard + previews in chat.

## Step 1 — Get the content

In order:

1. If the user included content in the prompt (pasted, or referenced from earlier in the conversation), use that.
2. Else, read clipboard: `pbpaste`
3. If both empty, ask the user what to paste.

## Step 2 — Parse destination

Show more

Installs

106

Repository

[coreyhaines31/m…erskills](https://github.com/coreyhaines31/makerskills "coreyhaines31/makerskills")

GitHub Stars

226

First Seen

Jun 30, 2026

Security Audits

[Gen Agent Trust HubPass](/coreyhaines31/makerskills/paste/security/agent-trust-hub)[SocketPass](/coreyhaines31/makerskills/paste/security/socket)[SnykPass](/coreyhaines31/makerskills/paste/security/snyk)