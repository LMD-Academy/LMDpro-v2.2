# recon

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/cybersecurity-skills/recon/security/snyk))

[skills](/)/[coreyhaines31](/coreyhaines31)/[cybersecurity-skills](/coreyhaines31/cybersecurity-skills)/[recon](/coreyhaines31/cybersecurity-skills/recon)/Snyk

Warn

Audited by Snyk on Jul 8, 2026

Risk Level: MEDIUM

Full Analysis

MEDIUM W011: Third-party content exposure detected (indirect prompt injection risk).

* Third-party content exposure detected (high risk: 0.75). SKILL.md’s required workflow runs runtime commands like `curl` to fetch certificate-transparency results (`https://crt.sh/...`) and uses search-engine dorking/Wayback/public repo discovery, which ingests outsider-authored free text (public web content) into the agent context via command outputs.

## Issues (1)

W011

MEDIUM

Third-party content exposure detected (indirect prompt injection risk).

Audit Metadata

Risk Level
:   MEDIUM

Analyzed
:   Jul 8, 2026, 12:46 AM

Issues
:   1
