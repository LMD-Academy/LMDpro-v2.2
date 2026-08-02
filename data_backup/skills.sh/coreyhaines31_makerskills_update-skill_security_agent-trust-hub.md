--- source: https://skills.sh/coreyhaines31/makerskills/update-skill/security/agent-trust-hub ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[update-skill](/coreyhaines31/makerskills/update-skill)/Gen Agent Trust Hub

# update-skill

Pass

Audited by Gen Agent Trust Hub on Jun 30, 2026

Risk Level: SAFECOMMAND\_EXECUTION

Full Analysis

* **[COMMAND\_EXECUTION]:** The skill uses `grep` and `bash` loops in `SKILL.md` and `references/propagation.md` to identify affected skill files across the local filesystem and sibling repositories. These commands are used for content discovery and do not involve untrusted input or risky operations. Evidence: `grep -rln "<key terms>" ~/code/makerskills/skills/` and `for repo in ...; do grep ...; done`.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jun 30, 2026, 07:57 PM