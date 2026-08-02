# watch-video

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/makerskills/watch-video/security/snyk))

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[watch-video](/coreyhaines31/makerskills/watch-video)/Snyk

Warn

Audited by Snyk on Jul 11, 2026

Risk Level: MEDIUM

Full Analysis

MEDIUM W011: Third-party content exposure detected (indirect prompt injection risk).

* Third-party content exposure detected (high risk: 0.75). Yes—when the user supplies an outsider video URL (e.g., YouTube/Loom/Vimeo/Riverside/X/IG/TikTok), the workflow fetches platform-provided transcripts and/or downloads the video and then feeds the resulting transcript text (outsider-authored speech captions) into the LLM during the visual/multimodal “Per-frame batch prompt” and summary synthesis.

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
