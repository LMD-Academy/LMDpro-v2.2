--- source: https://skills.sh/coreyhaines31/makerskills/toolify/security/snyk ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[toolify](/coreyhaines31/makerskills/toolify)/Snyk

# toolify

Warn

Audited by Snyk on Jul 11, 2026

Risk Level: MEDIUM

Full Analysis

MEDIUM W011: Third-party content exposure detected (indirect prompt injection risk).

* Third-party content exposure detected (high risk: 0.75). SKILL.md Step 2 (“Fetch official setup docs”) uses `WebFetch` or `context7:query-docs` to pull *current official quickstart* at runtime, which can involve fetching public web content (outsider-authored text) and then reading it into the agent context.

---

MEDIUM W012: Unverifiable external dependency detected (runtime URL that controls agent).

* Potentially malicious external URL detected (high risk: 0.90). The skill explicitly performs a runtime fetch of the live official quickstart using WebFetch / context7 (WebFetch ), and that fetched documentation is read and used to drive scaffolding and pin SDK versions, so external content directly controls the generated prompts/instructions ().

---

MEDIUM W009: Direct money access capability detected (payment gateways, crypto, banking).

* Direct money access detected (high risk: 1.00). The skill explicitly targets payment gateway integrations (names Stripe, LemonSqueezy, Paddle), includes payment-specific scaffolding (webhook signature verification, customer model, event handlers), and provides payment smoke-test examples using a Stripe secret key. It also references a Stripe-specific recipe. These are concrete, payment-focused integrations (payment gateway APIs) that would enable an agent to execute or wire up financial operations.

## Issues (3)

W011

MEDIUM

Third-party content exposure detected (indirect prompt injection risk).

W012

MEDIUM

Unverifiable external dependency detected (runtime URL that controls agent).

W009

MEDIUM

Direct money access capability detected (payment gateways, crypto, banking).

Audit Metadata

Risk Level
:   MEDIUM

Analyzed
:   Jul 11, 2026, 09:45 PM

Issues
:   3