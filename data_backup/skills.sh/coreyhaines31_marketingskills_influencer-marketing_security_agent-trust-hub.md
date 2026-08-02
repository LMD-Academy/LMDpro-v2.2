--- source: https://skills.sh/coreyhaines31/marketingskills/influencer-marketing/security/agent-trust-hub ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[influencer-marketing](/coreyhaines31/marketingskills/influencer-marketing)/Gen Agent Trust Hub

# influencer-marketing

Pass

Audited by Gen Agent Trust Hub on Jul 22, 2026

Risk Level: SAFE

Full Analysis

* **[SAFE]:** The skill is composed of purely instructional content and evaluation data. It does not contain any executable scripts, binaries, or automated shell commands.
* **[SAFE]:** The skill provides guidance on compliance and disclosure (FTC regulations), which enhances the safety and legality of the marketing activities it describes.
* **[SAFE]:** External references to marketing tools (e.g., SparkToro, Modash) and social media platforms are for legitimate business purposes and do not involve unauthorized network operations or data exfiltration.
* **[PROMPT\_INJECTION]:** The skill defines a surface for indirect prompt injection by instructing the agent to read external social media content (comments and posts) and local context files. However, this risk is inherent to the marketing research task, and the skill itself lacks the dangerous capabilities (like shell execution or file-system modification) required to exploit such an injection. Iingestion points: social media data (via tools) and local context files; boundary markers: none; capability inventory: strategic advice only, no subprocess calls or file-writing; sanitization: none.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jul 22, 2026, 06:11 PM