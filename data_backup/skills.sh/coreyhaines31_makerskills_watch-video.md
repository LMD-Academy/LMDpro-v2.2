--- source: https://skills.sh/coreyhaines31/makerskills/watch-video ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/watch-video

# watch-video

Installation

CommandPrompt

`$ npx skills add https://github.com/coreyhaines31/makerskills --skill watch-video`

SKILL.md

# /watch-video — Transcribe and analyze any video at the depth you choose

Replaces and broadens the prior `youtube-transcript` skill. YouTube is now one of many sources; depth is user-controlled.

## Step 1 — Parse input

Accept:

* **YouTube**: full URL, `youtu.be/<id>`, `youtube.com/shorts/<id>`, raw 11-char ID
* **Loom**: `loom.com/share/<id>` or `loom.com/embed/<id>`
* **Vimeo**: `vimeo.com/<id>`
* **Riverside**: download URL or local file
* **Zoom**: local `.mp4` from a downloaded recording
* **X / IG / TikTok video**: URL — defers to `social-fetch` for metadata, uses yt-dlp for the file
* **Local file**: any path to an `.mp4` / `.mov` / `.webm` / `.mkv`

Detect source from URL pattern or file extension. If ambiguous, ask.

## Step 2 — Parse depth mode

Show more

Installs

119

Repository

[coreyhaines31/m…erskills](https://github.com/coreyhaines31/makerskills "coreyhaines31/makerskills")

GitHub Stars

226

First Seen

Jun 30, 2026

Security Audits

[Gen Agent Trust HubWarn](/coreyhaines31/makerskills/watch-video/security/agent-trust-hub)[SocketPass](/coreyhaines31/makerskills/watch-video/security/socket)[SnykWarn](/coreyhaines31/makerskills/watch-video/security/snyk)