--- source: https://skills.sh/coreyhaines31/makerskills/slide-deck ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/slide-deck

# slide-deck

Installation

CommandPrompt

`$ npx skills add https://github.com/coreyhaines31/makerskills --skill slide-deck`

SKILL.md

# /slide-deck — Draft, update, convert, and export branded React decks

Authors React/TypeScript decks for `${SLIDE_DECK_REPO:-$HOME/code/your-slide-deck-site}/src/app/slides/<slug>/page.tsx` using the user's slide system. Branded output (no separate HTML pipeline) — when portable HTML/PDF is needed, export mode snapshots the rendered React deck via Playwright so the output is brand-perfect.

## Modes (pick one before Step 1)

| Mode | Invocation | Goal |
| --- | --- | --- |
| **new** | `/slide-deck new <topic>` (default) | Draft a new deck from a brief |
| **update** | `/slide-deck update <slug>` | Modify an existing deck (with overflow guards) |
| **ppt** | `/slide-deck ppt <path-to-pptx>` | Convert a legacy PPTX into a React deck |
| **export** | `/slide-deck export <slug> [html|pdf|vercel]` | Snapshot a deck to HTML, PDF, or Vercel URL |

For `update`, `ppt`, and `export`, skip to the corresponding mode section below. For `new`, continue through Steps 1–8.

---

## Step 1 — Capture the brief (ask all at once)

Show more

Installs

116

Repository

[coreyhaines31/m…erskills](https://github.com/coreyhaines31/makerskills "coreyhaines31/makerskills")

GitHub Stars

226

First Seen

Jun 30, 2026

Security Audits

[Gen Agent Trust HubPass](/coreyhaines31/makerskills/slide-deck/security/agent-trust-hub)[SocketPass](/coreyhaines31/makerskills/slide-deck/security/socket)[SnykPass](/coreyhaines31/makerskills/slide-deck/security/snyk)