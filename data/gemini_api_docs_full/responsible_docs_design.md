# Design a responsible approach

[//]: # (source: [ai.google.dev](https://ai.google.dev/responsible/docs/design))

Adding GenAI to your application can bring tremendous power and value to your
users, but it also requires a keen eye to maintain the safety and privacy that
your users expect.

## Design for safety

Each GenAI-enable feature presents opportunities to design layers of safety. As
shown in the following figure, one way you can think about safety is to put the
AI model that enables this feature in the center. This model should be:

* [Aligned](/responsible/docs/alignment) to perform its assigned task;
* [Protected by safeguards](/responsible/docs/safeguards) to make sure that out-of-bounds
  inputs and outputs are rejected; and
* [Evaluated](/responsible/docs/evaluation#red-teaming) holistically to assess how the model and
  system respond to safety-impacting interactions.

![Functional diagram of responsible AI practices](/static/responsible/images/rai-overview.png)

Check out the
["Creating Responsible AI Products" session](https://io.google/2024/explore/874ba32a-d612-4685-a544-998196fda830/) from
Google I/O 2024 to learn more about design considerations, thought exercises,
and prototyping methods that can help accelerate your responsible development
practices.

Additionally, you can learn best practices and see examples for:

* [Defining the policies](#define-policies) that will govern how AI behaves in
  your application;
* Creating [transparency artifacts](#transparency-artifacts) to communicate
  your responsible approach to your users; and
* [Securing your application](#secure-ai) against malicious use.

Above all, remember that a sound approach to safety and responsibility is one
that is self-reflective and adaptive to technical, cultural, and process
challenges. Engage yourself and your team in regular critical reviews of your
approach to ensure the best outcomes.

## Define system-level policies

Content safety policies define what types of harmful content are not permitted
in an online platform. You may be familiar with content policies from platforms
like [YouTube](https://www.youtube.com/howyoutubeworks/policies/community-guidelines/) or [Google Play](https://play.google/developer-content-policy/). Content
policies for generative AI applications are similar: They define what type of
content your application shouldn't generate and they guide how to tune models
and which appropriate safeguards to add.

Your policies should reflect your application's use case. For example, a
generative AI product intended to offer ideas for family activities based on
community suggestions might have a policy that prohibits the generation of
content that is violent in nature, as it could be harmful to users. Conversely,
an application that summarizes science fiction story ideas proposed by users may
want to allow generation of violence, since it's a subject of many stories in
this genre.

Your safety policies should prohibit the generation of content that is harmful
to users or illegal, and should specify what types of generated content meet
that bar for your application. You may also want to consider including
exceptions for educational, documentary, scientific, or artistic content that
might otherwise be considered harmful.

Defining clear policies with a highly granular level of detail, including
exceptions to the policy with examples, is fundamental to building a responsible
product. Your policies are used at each step of your model development. For data
cleaning or labeling, imprecision can lead to mislabeled data, over-removal, or
under-removal of data which will impact your model's safety responses. For
evaluation purposes, ill-defined policies will lead to high inter-rater
variance, making it more difficult to know if your model meets your safety
standards.

### Hypothetical policies (for illustration only)

The following are some examples of policies you might consider using for your
application, provided they match your use case.

| **Policy category** | **Policy** |
| --- | --- |
| Sensitive Personally Identifiable Information (SPII) | The application will not recite sensitive and personally identifiable information (e.g., email, credit card number, or social security number of a private individual). |
| Hate Speech | The application will not generate negative or harmful content targeting identity and/or protected attributes (e.g., racial slurs, promotion of discrimination, calls to violence against protected groups). |
| Harassment | The application will not generate malicious, intimidating, bullying, or abusive content targeting another individual (e.g., physical threats, denial of tragic events, disparaging victims of violence). |
| Dangerous Content | The application will not generate instructions or advice on harming oneself and/or others (e.g., accessing or building firearms and explosive devices, promotion of terrorism, instructions for suicide). |
| Sexually Explicit | The application will not generate content that contains references to sexual acts or other lewd content (e.g., sexually graphic descriptions, content aimed at causing arousal). |
| Enabling Access to Harmful Goods and Services | The application will not generate content that promotes or enables access to potentially harmful goods, services, and activities (e.g., facilitating access to promoting gambling, pharmaceuticals, fireworks, sexual services). |
| Malicious Content | The application will not generate instructions for performing illegal or deceptive activities (e.g., generating phishing scams, spam or content intended for mass solicitation, jailbreaking methods). |

## Transparency artifacts

Documentation is a key method of achieving transparency for developers,
governments, policy actors, and end users of your product. This can entail
releasing detailed technical reports or model, data, and system cards that
appropriately make public essential information based on safety and other model
evaluations. Transparency artifacts are more than communication vehicles; they
also offer guidance for AI researchers, deployers, and downstream developers on
the responsible use of the model. The information is helpful for end users of
your product as well, who want to understand details about the model.

Some transparency guidelines to consider:

* Be clear with users when they are engaging with an experimental
  generative AI technology and highlight the possibility of unexpected model
  behavior.
* Offer thorough documentation on how the generative AI service or product
  works using understandable language. Consider publishing structured
  transparency artifacts such as model cards. These cards provide the
  intended use of your model and summarize evaluations that have been
  performed throughout model development.
* Show people how they can offer feedback and how they're in control, such
  as:
  + Providing mechanisms to help users validate fact-based questions
  + Thumbs up and down icons for user feedback
  + Links to report problems and offer support for rapid response to
    user feedback
  + User control for storing or deleting user activity

## Secure AI Systems

GenAI-enabled applications present [complex attack surfaces](https://eprint.iacr.org/2024/855.pdf)
that necessitate more diverse mitigations than conventional applications.
Google's [Secure AI Framework (SAIF)](https://safety.google/cybersecurity-advancements/saif/) provides a holistic
conceptual framework to consider how to design your GenAI-enabled application
for secure uses. This framework can help you assess how to employ
[alignment](/responsible/docs/alignment), [adversarial evaluation](/responsible/docs/evaluation#red-teaming), and
[safeguards](/responsible/docs/safeguards) effectively to help secure your application,
though remember that these are only the starting blocks. Additional changes to
organization practices, monitoring, and alerting are likely to be required to
achieve your security goals for your specific use case and context.

## Developer resources

Examples of generative AI policies:

* Cloud [Gemini API](https://cloud.google.com/vertex-ai/docs/generative-ai/multimodal/configure-safety-attributes#safety_attribute_definitions) and [PaLM API](https://cloud.google.com/vertex-ai/docs/generative-ai/configure-safety-attributes-palm#attribute-descriptions) provides a
  list of safety attributes that can serve as a basis to build safety
  policies.
* Example of policies included in the
  [2023 Google AI Principles Progress Update](https://storage.googleapis.com/gweb-uniblog-publish-prod/documents/2023_Google_AI_Principles_Progress_Update.pdf#page=11).
* The [MLCommons](https://mlcommons.org/) Association, an engineering consortium built on
  a philosophy of open collaboration to improve AI systems, references 6
  hazards on which they evaluate models on AI safety as part of their
  [AI Safety Benchmark](https://mlcommons.org/benchmarks/ai-safety/general_purpose_ai_chat_benchmark/).

There is no single template for transparency artifacts across the
industry, but existing [model cards](https://modelcards.withgoogle.com/about) can serve as a starting point
to create your own:

* [Gemma's model card](/gemma/docs/model_card)
* Model card template from the [original model card paper](https://arxiv.org/abs/1810.03993)
* [Model cards from Google Cloud APIs](https://modelcards.withgoogle.com/about)

### Additional References

* [Model cards for model reporting](https://arxiv.org/abs/1810.03993)
* [Model Cards](https://modelcards.withgoogle.com/about)
* [Data Cards: Purposeful and transparent dataset documentation for responsible AI](https://arxiv.org/abs/2204.01075)
* [Data Cards Playbook](https://sites.research.google/datacardsplaybook/)
* [Bard with specifically tuned Gemini Pro system card](https://storage.googleapis.com/gweb-uniblog-publish-prod/documents/2023_Google_AI_Principles_Progress_Update.pdf#page=42)
* [The Frontier Model Forum resources on red teaming](https://www.frontiermodelforum.org/uploads/2023/10/FMF-AI-Red-Teaming.pdf)

Send feedback
