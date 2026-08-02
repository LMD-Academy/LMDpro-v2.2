# domain

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/makerskills/domain))

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/domain

Installation

CommandPrompt

`$ npx skills add https://github.com/coreyhaines31/makerskills --skill domain`

SKILL.md

# /domain — Brainstorm + check available .com domains

Multi-tool workflow to find a great, affordable, available .com for a new project. Built on Laura Roeder's rule: **work backwards from what's actually available — don't fall in love with a name first** ([source](https://lauraroeder.com/how-i-nabbed-the-com-for-my-bootstrapped-startup-without-spending-a-million-bucks-6dc35c4606e9)).

Defaults to `.com` only. Only deviate (.dev, .co, .io, .ai) if the project is dev-tooling-only or the user explicitly asks.

## Step 0 — Environment checks

Verify these before proceeding (surface install commands if missing, don't try to install silently):

| Tool | Check | Install if missing |
| --- | --- | --- |
| Vercel CLI | `vercel whoami` | `npm i -g vercel && vercel login` |
| whois | `which whois` | `brew install whois` (macOS) |
| Domainr API key | `[ -n "$DOMAINR_API_KEY" ]` | Get free key at rapidapi.com/domainr/api/domainr, add to `~/.zshenv` |
| Namecheap API | `[ -n "$NAMECHEAP_API_KEY" ] && [ -n "$NAMECHEAP_API_USER" ] && [ -n "$NAMECHEAP_CLIENT_IP" ]` | Enable API at ap.[www.namecheap.com/settings/tools/apiaccess/](http://www.namecheap.com/settings/tools/apiaccess/), add 3 env vars, whitelist your IP |

Domainr + Namecheap are optional — the workflow degrades gracefully without them (skips the corresponding cross-check steps).

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

[Gen Agent Trust HubPass](/coreyhaines31/makerskills/domain/security/agent-trust-hub)[SocketPass](/coreyhaines31/makerskills/domain/security/socket)[SnykWarn](/coreyhaines31/makerskills/domain/security/snyk)
