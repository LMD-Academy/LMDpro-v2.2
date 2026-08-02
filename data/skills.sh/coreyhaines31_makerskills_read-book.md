# read-book

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/makerskills/read-book))

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/read-book

Installation

CommandPrompt

`$ npx skills add https://github.com/coreyhaines31/makerskills --skill read-book`

SKILL.md

# /read-book — Extract structured notes from books and long PDFs

Sibling to `watch-video`. Same content-consumption pattern: ingest → chunk → extract → optionally capture to second-brain.

## Step 1 — Parse input

Accept:

* **PDF**: file path (Claude reads PDFs natively in chunks via `Read pages:"X-Y"`)
* **EPUB / MOBI**: file path (needs `pandoc` or `ebook-convert` to extract — see `references/sources.md`)
* **Markdown / .txt**: file path (read directly)
* **Pasted text**: just use what was pasted
* **URL** to public-domain text: `WebFetch` (Project Gutenberg, archive.org, etc.)

Detect type from file extension. If ambiguous, ask.

## Step 2 — Parse mode

Show more

Installs

126

Repository

[coreyhaines31/m…erskills](https://github.com/coreyhaines31/makerskills "coreyhaines31/makerskills")

GitHub Stars

226

First Seen

Jun 30, 2026

Security Audits

[Gen Agent Trust HubWarn](/coreyhaines31/makerskills/read-book/security/agent-trust-hub)[SocketPass](/coreyhaines31/makerskills/read-book/security/socket)[SnykWarn](/coreyhaines31/makerskills/read-book/security/snyk)
