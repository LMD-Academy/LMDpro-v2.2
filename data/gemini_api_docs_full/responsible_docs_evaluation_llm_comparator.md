# LLM Comparator

[//]: # (source: [ai.google.dev](https://ai.google.dev/responsible/docs/evaluation/llm_comparator))

Side-by-side evaluation has emerged as a common strategy for assessing the
quality and safety of responses from large language models (LLMs). Side-by-side
comparisons can be used to choose between two different models, two different
prompts for the same model, or even two different tunings of a model. However,
manually analyzing side-by-side comparison results can be cumbersome and
tedious.

The LLM Comparator is a [web app](http://pair-code.github.io/llm-comparator) with a companion
[Python library](https://pypi.org/project/llm-comparator/) that enables more effective, *scalable* analysis
of [side-by-side evaluations](https://cloud.google.com/vertex-ai/generative-ai/docs/models/side-by-side-eval) with interactive visualizations.
LLM Comparator helps you:

* **See *where* model performance differs**: You can slice the responses
  to identify subsets of the evaluation data where outputs meaningfully
  differ between two models.
* **Understand *why* it differs**: It is common to have a policy against
  which model performance and compliance is evaluated.
  [Side-by-side evaluation](https://cloud.google.com/vertex-ai/generative-ai/docs/models/side-by-side-eval) helps automate policy compliance
  assessments and provides rationales for which model is likely more
  compliant. LLM Comparator summarizes these reasons into several themes and
  highlights which model aligns better with each theme.
* **Examine *how* model outputs differ**: You can further investigate how
  the outputs from two models differ through built-in and user-defined
  comparison functions. The tool can highlight specific patterns in the text
  the models generated, providing a clear anchor to understand their
  differences.

![Example of the LLM Comparator interface](/static/responsible/images/llm-comparator.png)

**Figure 1.** LLM Comparator interface showing a comparison of the Gemma
Instruct 7B v1.1 model against v1.0

LLM Comparator helps you analyze side-by-side evaluation results. It
visually summarizes model performance from multiple angles, while letting you
interactively inspect individual model outputs for a deeper understanding.

Explore LLM Comparator for yourself:

* This [demo](http://pair-code.github.io/llm-comparator) compares the performance of Gemma Instruct 7B v1.1
  against the Gemma Instruct 7B v1.0 on the
  [Chatbot Arena Conversations](https://huggingface.co/datasets/lmsys/chatbot_arena_conversations) dataset.
* This [Colab notebook](https://colab.research.google.com/github/PAIR-code/llm-comparator/blob/main/python/notebooks/basic_demo.ipynb) uses the Python library to run a small
  side-by-side evaluation using the [Vertex AI API](https://cloud.google.com/vertex-ai/docs/reference), and loads the
  results into the LLM Comparator app in a cell.

For more about LLM Comparator, check out the [research paper](https://arxiv.org/abs/2402.10524) and
[GitHub repo](https://github.com/pair-code/llm-comparator).

Send feedback
