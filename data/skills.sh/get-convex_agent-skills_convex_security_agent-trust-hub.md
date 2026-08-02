# convex

[//]: # (source: [skills.sh](https://skills.sh/get-convex/agent-skills/convex/security/agent-trust-hub))

[skills](/)/[get-convex](/get-convex)/[agent-skills](/get-convex/agent-skills)/[convex](/get-convex/agent-skills/convex)/Gen Agent Trust Hub

Pass

Audited by Gen Agent Trust Hub on May 2, 2026

Risk Level: SAFE

Full Analysis

* **[SAFE]:** The skill acts as a directory for more specialized Convex skills and follows standard development practices for the Convex platform. No malicious code, obfuscation, or data exfiltration patterns were detected.
* **[COMMAND\_EXECUTION]:** The skill recommends the command `npx convex ai-files install`. This executes the official Convex CLI to manage project-specific AI guidance files. As this tool is provided by the vendor (get-convex) and is standard for the platform, it is considered safe.
* **[EXTERNAL\_DOWNLOADS]:** The skill references official documentation at `docs.convex.dev` and a ruleset at `convex.link`. These are established domains for the Convex service and are used here to provide legitimate configuration data.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   May 2, 2026, 04:21 AM
