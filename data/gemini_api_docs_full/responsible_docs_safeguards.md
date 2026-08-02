# Safeguard your models

[//]: # (source: [ai.google.dev](https://ai.google.dev/responsible/docs/safeguards))

Generative artificial intelligence (GenAI) products are relatively new and
their behaviors can vary more than earlier forms of software. The safeguards
that protect your product from misuse of GenAI capabilities must adapt in
kind. This guide describes how you can employ content policy compliance
checkers and watermarking tools to protect your GenAI-enabled products.

## Content policy compliance

Even with prior [tuning for safety](/responsible/docs/alignment#tuning) and a well designed
[prompt template](/responsible/docs/alignment#prompting), it is possible for your GenAI
product to output content that results in unintended harm. GenAI products often
rely on *input and output filtering* to ensure responsible model behavior. These
techniques check the data going into or coming out of the model complies with
your [policies](/responsible/docs/design#define-policies), often by performing additional
[safety training](/responsible/docs/alignment#tuning) to create a content classifier model.

Input classifiers are used to filter content that is directly or which might
induce your model generate content that violates your content policies. Input
filters often target adversarial attacks that try to circumvent your content
policies.

Output classifiers filter model output, catching generated content that violates
your safety policies. Careful monitoring of your content rejection behaviors can
surface new classes of prompts that can be used to augment or improve input
filters.

It's recommended to have classifiers that cover all of your content policies.
You may be able to achieve this using [ready-made classifiers](#ready-made), or
you may need to create [custom classifiers](#agile-classifiers) that support
your specific policies.

Balance is also key. Over-filtering can result in unintended harm, or reduce the
utility of the application; be sure to review the cases where over-filtering may
be happening. See the [safety evaluation guide](/responsible/docs/evaluation) for more.

### Ready-made content policy classifiers

Ready-made content classifiers add an additional layer of protection to the
model's inherent safety training, further mitigating the potential for certain
types of policy violations. They generally come in two varieties:

1. **Self-hosted classifiers**, such as [ShieldGemma](/responsible/docs/safeguards/shieldgemma), can
   be downloaded and hosted on a variety of architectures, including Cloud
   platforms like Google Cloud, privately-owned hardware, and some classifiers
   can even run on-device for mobile applications.
2. **API-based classifiers** are provided as services that offer high-volume,
   low-latency classification against a variety of policies. Google provides
   three services that may be of interest:
   * [Checks AI Safety](https://checks.google.com/ai-safety/?utm_source=GenAITK&utm_medium=Link&utm_campaign=AI_Toolkit) provides compliance assessments and
     dashboards supporting model evaluation and monitoring. The AI Safety
     tool is in open beta, [sign up](https://checks.google.com/onboarding/?utm_source=GenAITK&utm_medium=Link&utm_campaign=AITK_Onboarding) for news,
     access, and demos.
   * The [Text Moderation Service](https://cloud.google.com/natural-language/docs/moderating-text) is a Google Cloud API
     that analyzes text for safety violations, including harmful categories
     and sensitive topics, subject to [usage rates](https://cloud.google.com/natural-language/pricing).
   * The [Perspective API](https://developers.perspectiveapi.com/) is a free API that uses machine
     learning models to score the perceived impact a comment might have on a
     conversation. It provides scores that capture the probability of whether
     a comment is toxic, threatening, insulting, or off-topic.

It's important to evaluate how well ready-made classifiers meet your policy
goals, and qualitatively evaluate the failure cases.

### Custom content policy classifiers

Ready-made content policy classifiers are an excellent start, but they have
limitations, including:

* A fixed policy taxonomy that may not map to or cover all of your content
  policies.
* Hardware and connectivity requirements that may not be appropriate for the
  environment your GenAI-powered application will be deployed in.
* Pricing and other usage restrictions.

Custom content policy classifiers may be one way to address these limitations,
and the [agile classifiers](/responsible/docs/safeguards/agile-classifiers) method provides an
efficient and flexible framework for creating them. As this method tunes a model
for safety purposes, be sure to review the
[model tuning basics](/responsible/docs/alignment#tuning).

## Identify AI-generated content with SynthID Text watermarks

GenAI can generate a wider array of highly diverse content at scales previously
unimagined. While the majority of this use is for legitimate purposes, there is
concern that it could contribute to misinformation and misattribution problems.
Watermarking is one technique for mitigating these potential impacts. Watermarks
that are imperceptible to humans can be applied to AI-generated content, and
detection models can score arbitrary content to indicate the likelihood that it
has been watermarked.

[SynthID](https://deepmind.google/technologies/synthid/) is a Google DeepMind technology that watermarks and
identifies AI-generated content by embedding digital watermarks directly into
AI-generated images, audio, text or video. [SynthID Text](/responsible/docs/safeguards/synthid) is
available for production in [Hugging Face Transformers](https://huggingface.co/blog/synthid-text), check out
the [research paper](https://www.nature.com/articles/s41586-024-08025-4) and [docs](/responsible/docs/safeguards/synthid) to learn more
about how to use SynthID in your application.

[Google Cloud](https://cloud.google.com/blog/products/ai-machine-learning/vertex-ai-next-2023-announcements) provides SynthID watermarking capabilities for
other modalities, such as [Imagen-generated imagery](https://cloud.google.com/blog/products/ai-machine-learning/a-developers-guide-to-imagen-3-on-vertex-ai),
to Vertex AI customers.

## Best practices for setting up safeguards

Using safety classifiers as safeguards is strongly recommended. However,
guardrails can result in the generative model not producing anything for the
user, if the content is blocked. Applications need to be designed to handle this
case. Most popular chatbots handle this by providing canned answers ("I am
sorry, I am a language model, I can't help you with this request").

**Find the right balance between helpfulness and harmlessness**: When using
safety classifiers, it is important to understand that they will make mistakes,
including both false positives (e.g. claiming an output is unsafe when it is
not) and false negatives (failing to label an output as unsafe, when it is). By
evaluating classifiers with metrics like F1, Precision, Recall, and AUC-ROC, you
can determine how you would like to tradeoff false positive versus false
negative errors. By changing the threshold of classifiers, you help find an
ideal balance that avoids over-filtering outputs while still providing
appropriate safety.

**Check your classifiers for unintended biases:** Safety classifiers, like any
other ML model, can propagate unintended biases, such as socio-cultural
stereotypes. Applications need to be appropriately evaluated for potentially
problematic behaviors. In particular, content safety classifiers can
over-trigger on content related to identities that are more frequently the
target of abusive language online. As an example, when the Perspective API was
first launched, the model returned higher toxicity scores in comments
referencing certain identity groups ([blog](https://medium.com/jigsaw/unintended-bias-and-names-of-frequently-targeted-groups-8e0b81f80a23)). This over-triggering
behavior can happen because comments that mention identity terms for more
frequently targeted groups (e.g., words like "Black", "muslim", "feminist",
"woman", "gay", etc.) are more often toxic in nature. When datasets used to
train classifiers have significant imbalances for comments containing certain
words, classifiers can overgeneralize and consider all comments with those words
as being likely to be unsafe. Read how the Jigsaw team
[mitigated](https://medium.com/jigsaw/identifying-machine-learning-bias-with-updated-data-sets-7c36d6063a2c) this unintended bias.

## Developer Resources

* [SynthID](https://deepmind.google/technologies/synthid/): Tools for watermarking and identifying AI-generated
  content.
* [Checks AI Safety](https://checks.google.com/ai-safety/?utm_source=GenAITK&utm_medium=Link&utm_campaign=AI_Toolkit): AI safety compliance.
* [Perspective API](https://developers.perspectiveapi.com/): To identify toxic content.
* [Text moderation service](https://cloud.google.com/natural-language/docs/moderating-text): For Google Cloud customers.

Send feedback
