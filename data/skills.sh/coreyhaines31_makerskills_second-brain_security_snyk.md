# second-brain

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/makerskills/second-brain/security/snyk))

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[second-brain](/coreyhaines31/makerskills/second-brain)/Snyk

Warn

Audited by Snyk on Jul 11, 2026

Risk Level: MEDIUM

Full Analysis

MEDIUM W011: Third-party content exposure detected (indirect prompt injection risk).

* Third-party content exposure detected (high risk: 0.75). Yes—during the **capture** step, the workflow fetches URL content at runtime (“fetch the article content … and save the readable text”), which is then ingested into the vault as readable prose and later read/compiled into LLM context; this is outsider-authored public web content.

## Issues (1)

W011

MEDIUM

Third-party content exposure detected (indirect prompt injection risk).

Audit Metadata

Risk Level
:   MEDIUM

Analyzed
:   Jul 11, 2026, 09:45 PM

Issues
:   1
