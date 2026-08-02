# derive-client

[//]: # (source: [skills.sh](https://skills.sh/vercel-labs/agent-browser/derive-client))

[skills](/)/[vercel-labs](/vercel-labs)/[agent-browser](/vercel-labs/agent-browser)/derive-client

Installation

CommandPrompt

`$ npx skills add https://github.com/vercel-labs/agent-browser --skill derive-client`

SKILL.md

# Derive an API client from a recorded session

Driving a browser is the right tool for the first visit and the wrong tool for the hundredth. This skill records a site's network traffic once while you use it, then turns the captured requests into a standalone client (script, CLI, or library) that talks to the site's internal API directly.

The recording alone contains everything needed: agent-browser embeds text response bodies (JSON/HTML/JS) in the HAR by default, so endpoint shapes can be studied offline after the browser is closed.

## Workflow

```
1. Record     Start HAR capture, drive the flows you want in the client
2. Identify   Find the real API endpoints among the noise
3. Extract    Pull request shapes, response schemas, and auth material
4. Generate   Write the client, one function per flow
5. Verify     Call every endpoint for real before declaring done
```

## 1. Record

Show more

Installs

7

Repository

[vercel-labs/age…-browser](https://github.com/vercel-labs/agent-browser "vercel-labs/agent-browser")

GitHub Stars

39.3K

First Seen

7 days ago

Security Audits

[Gen Agent Trust HubPass](/vercel-labs/agent-browser/derive-client/security/agent-trust-hub)[SocketWarn](/vercel-labs/agent-browser/derive-client/security/socket)[SnykWarn](/vercel-labs/agent-browser/derive-client/security/snyk)
