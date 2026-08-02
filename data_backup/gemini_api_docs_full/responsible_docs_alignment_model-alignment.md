--- source: https://ai.google.dev/responsible/docs/alignment/model-alignment ---

* [Home](https://ai.google.dev/)
* [Responsible Generative AI Toolkit](https://ai.google.dev/responsible)
* [Docs](https://ai.google.dev/responsible/docs)

Send feedback

# Model Alignment



Creating a prompt for an artificial intelligence (AI) model, such as Gemini or
Gemma, that perfectly captures a your intent can be a non-trivial task. Often,
you must write a prompt by hand and then test it in a variety of use cases to
ensure it fits your needs. Based on the results, you might make targeted updates
to the prompt: changing some words in one place, adding a new sentence in
another. This process is not very principled and may not lead to the best
results.

Google has [developed a method](https://arxiv.org/abs/2310.15428) that uses LLMs to
automatically update a [prompt template](/responsible/docs/alignment#prompt-templates) based on
feedback you provide about the model's output in plain language. Your feedback,
along with the prompt and the model's output, are sent to an LLM that updates
the prompt to better align with your intended behavior.

This method available in two ways:

* The open source [`model-alignment` Python library](https://pypi.org/project/model-alignment/) lets you
  flexibly incorporate this approach into your software and workflows.
* A [version of this approach](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/ai-powered-prompt-writing#refine_prompts) is integrated into Vertex
  AI Studio, letting you use this workflow with just a few clicks.

## Open-Source Library

Model Alignment is an [open-source Python library](https://github.com/pair-code/model-alignment), released as a
[package on PyPI](https://pypi.org/project/model-alignment/) that enables alignment of prompts from human
feedback through an API. The library is based on our research into
[prompt updating through human feedback](https://arxiv.org/abs/2310.15428) and
[automatic classifier creation from labeled-data](https://arxiv.org/abs/2403.04894).

**Curate prompt templates for Gemma using the Model Alignment library**

|  |  |
| --- | --- |
|  | [Start Google Colab](https://colab.research.google.com/github/pair-code/model-alignment/blob/main/notebooks/Gemma_for_Model_Alignment.ipynb) |

This library supports two workflows for automatically updating prompt templates:

1. **Iterative updates from principles**. This workflow uses an LLM to distill
   [guidelines](https://arxiv.org/abs/2212.08073) either from indirect critiques of the
   model's output, or from direct edits of the model output. You can
   iteratively create one or more guidelines before sending them to the LLM,
   which updates the prompt template to adhere to those guidelines. You can
   also hand-curate guidelines and include them alongside LLM-distilled ones.
2. **Direct critique of model outputs**. This workflow takes your feedback
   about the entire model output and feeds it, along with the prompt and model
   output, directly to the LLM to generate an updated prompt template.

These two workflows may both be useful for you application. The notable
trade-off is the presence of guidelines, which can be a useful, concrete process
artifact that can help inform, for example, your approach to
[transparency](/responsible/docs/design#transparency-artifacts).

![Model alignment flow chart](/static/responsible/images/model-alignment-flow.png)

**Figure 1.** This flowchart illustrates where and how the two Model Alignment
library workflows diverge to enable guideline-driven or direct updates to your
prompt templates. Note that the process is iterative, and these workflows are
not mutually exclusive, you can switch between them at any time.

Check out the [Colab notebook](https://colab.research.google.com/github/pair-code/model-alignment/blob/main/notebooks/Gemma_for_Model_Alignment.ipynb) that uses [Gemini](https://ai.google.dev/gemini-api) to
align prompts for [Gemma 2](https://ai.google.dev/gemma) using both workflows.

## Alignment in Vertex AI Studio

Google's [Vertex AI Studio](https://console.cloud.google.com/vertex-ai/studio/freeform) has added a
["refine prompt"](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/ai-powered-prompt-writing#refine_prompts) feature based on the *direct* workflow
from the Model Alignment open source library to compliment its authoring,
running, evaluation, and comparison tools.

After running a prompt, you can provide feedback on ways in which the model
should behave differently, and Vertex AI Studio uses [Gemini](https://ai.google.dev/gemini-api) to draft
a rewrite. You can accept the proposed changes and re-run the updated prompt
with a click of a button, or update your feedback and have Gemini draft another
candidate.

![Model alignment in Vertex AI Studio](/static/responsible/images/vertex-refine-prompt.png)

**Figure 2.** The "refine prompt" feature of Vertex AI Studio being used to
update a prompt based on user feedback.

## Links

Explore model alignment for yourself:

* Run this [Colab notebook](https://colab.research.google.com/github/pair-code/model-alignment/blob/main/notebooks/Gemma_for_Model_Alignment.ipynb) that uses Gemini to align various
  prompts for our open-weights Gemma 2 model using both alignment approaches.
* Try the "refine prompt" model alignment feature in
  [Vertex AI Studio](https://console.cloud.google.com/vertex-ai/studio/freeform).




Send feedback