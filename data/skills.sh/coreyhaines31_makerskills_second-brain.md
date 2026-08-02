# second-brain

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/makerskills/second-brain))

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/second-brain

Installation

CommandPrompt

`$ npx skills add https://github.com/coreyhaines31/makerskills --skill second-brain`

SKILL.md

# /second-brain — Karpathy LLM Wiki workflow

Wraps an existing Second Brain in Obsidian (or any markdown-based vault). The wiki vault's CLAUDE.md is the authoritative schema — the skill orchestrates the operations the user has been doing manually.

## Mental model

Three layers, each with a clear role:

```
raw/      →  wiki/         →  outputs/
sources      compiled         generated
                              artifacts
```

* **raw/** — unprocessed source material. Articles, highlights, ideas, braindumps, tweets. Type-prefixed (`article-`, `idea-`, `highlights-`, `braindump-`, `note-`, `resource-`, `tweet-`). Never deleted — source of truth.
* **wiki/** — AI-compiled topic pages. One page per concept, not per source. Interlinked via `[[wikilinks]]`. `INDEX.md` at root.
* **outputs/** — generated artifacts from queries: research summaries, analyses, slide decks. Named descriptively.

Folders to leave alone during wiki ops: `Projects/`, `Daily/`, `Templates/`, `Inbox/`, `Notes/`, `Tasks.md`, `Kanban.md`, `Home.md`.

Show more

Installs

113

Repository

[coreyhaines31/m…erskills](https://github.com/coreyhaines31/makerskills "coreyhaines31/makerskills")

GitHub Stars

226

First Seen

Jun 30, 2026

Security Audits

[Gen Agent Trust HubPass](/coreyhaines31/makerskills/second-brain/security/agent-trust-hub)[SocketPass](/coreyhaines31/makerskills/second-brain/security/socket)[SnykWarn](/coreyhaines31/makerskills/second-brain/security/snyk)
