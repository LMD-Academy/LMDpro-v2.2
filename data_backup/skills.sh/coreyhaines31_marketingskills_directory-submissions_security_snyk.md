--- source: https://skills.sh/coreyhaines31/marketingskills/directory-submissions/security/snyk ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[directory-submissions](/coreyhaines31/marketingskills/directory-submissions)/Snyk

# directory-submissions

Warn

Audited by Snyk on May 14, 2026

Risk Level: MEDIUM

Full Analysis

MEDIUM W011: Third-party content exposure detected (indirect prompt injection risk).

* Third-party content exposure detected (high risk: 0.80). The skill explicitly requires fetching and inspecting live public directory pages (e.g., using curl to verify backlinks and checking listings) and lists many open third‑party URLs in references/submission-tracker-template.csv and references/directory-list.md (Product Hunt, G2, AlternativeTo, TAAFT, etc.), so the agent is expected to read and act on untrusted, user-generated web content as part of its workflow.

## Issues (1)

W011

MEDIUM

Third-party content exposure detected (indirect prompt injection risk).

Audit Metadata

Risk Level
:   MEDIUM

Analyzed
:   May 14, 2026, 11:06 PM

Issues
:   1