--- source: https://skills.sh/coreyhaines31/makerskills/social-fetch ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/social-fetch

# social-fetch

Installation

CommandPrompt

`$ npx skills add https://github.com/coreyhaines31/makerskills --skill social-fetch`

SKILL.md

# /social-fetch — Pull any social post by URL

Normalized fetcher for social posts across platforms. Detects platform from URL, tries strategies in order, returns the same JSON shape regardless of source.

## Step 1 — Detect platform

| URL pattern | Platform |
| --- | --- |
| `x.com/<user>/status/<id>` or `twitter.com/<user>/status/<id>` | **x** (Twitter) |
| `linkedin.com/posts/<slug>` or `linkedin.com/feed/update/urn:li:activity:<id>` | **linkedin** |
| `linkedin.com/in/<handle>` (profile, recent activity) | **linkedin-profile** |
| `instagram.com/p/<id>` or `instagram.com/reel/<id>` | **instagram** |
| `tiktok.com/@<user>/video/<id>` | **tiktok** |
| `bsky.app/profile/<handle>/post/<rkey>` | **bluesky** |
| `reddit.com/r/<sub>/comments/<id>/...` | **reddit** |
| `<mastodon-instance>/@<user>/<id>` (e.g. mastodon.social, hachyderm.io) | **mastodon** |
| `threads.net/@<user>/post/<id>` | **threads** |
| `news.ycombinator.com/item?id=<id>` | **hn** |
| `youtube.com/watch?v=<id>` or `youtu.be/<id>` | → defer to `watch-video` |

Show more

Installs

86

Repository

[coreyhaines31/m…erskills](https://github.com/coreyhaines31/makerskills "coreyhaines31/makerskills")

GitHub Stars

226

First Seen

Jul 6, 2026

Security Audits

[Gen Agent Trust HubWarn](/coreyhaines31/makerskills/social-fetch/security/agent-trust-hub)[SocketPass](/coreyhaines31/makerskills/social-fetch/security/socket)[SnykWarn](/coreyhaines31/makerskills/social-fetch/security/snyk)