--- source: https://skills.sh/privacy ---

# Privacy

What skills.sh collects, why, and how it's used.

## Install telemetry

When the open-source skills CLI installs a skill, it sends an install event to our ingestion endpoint containing:

* The skill identifier (owner / repo / skill name)
* The agent name (e.g. claude-code, cursor, gemini-cli)
* A coarse timestamp
* A short fingerprint (IP-derived hash and JA4) used only for hourly deduplication so a single install can't be replayed to inflate counts

We do not collect personal information, session content, prompts, tool calls, or anything else from your agent.

## How telemetry is used

We use install events only to compute aggregate counts surfaced on this site (leaderboard rank, install totals, per-agent breakdowns, and trending tabs). The deduplication fingerprint is discarded after the hourly aggregation runs and never appears in any public data.

## Site analytics

This site uses Vercel Analytics and Speed Insights to measure page performance and visitor counts. These tools do not use cookies or persistent identifiers and aggregate visit data at the host level.

## Public data

Skill listings, install counts, and security audit results displayed on this site are public. Anything visible on a skill page is also available through the [public API](/docs/api).

## Opting out

The skills CLI can be run with telemetry disabled. See the [CLI documentation](/docs/cli) for the relevant flag and environment variable. Disabling telemetry has no effect on functionality; install counts simply will not include your installs.

## Contact

Privacy questions and data deletion requests: [contact page](/contact).