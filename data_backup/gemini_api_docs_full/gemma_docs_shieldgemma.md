--- source: https://ai.google.dev/gemma/docs/shieldgemma ---

**Gemma 4** released with text, audio and image input and long up to 256K context window! [**Learn more**](/gemma/docs/core)

* [Home](https://ai.google.dev/)
* [Gemma](https://ai.google.dev/gemma)
* [Models](https://deepmind.google/models/gemma)
* [Docs](https://ai.google.dev/gemma/docs)

Send feedback




## ShieldGemma

ShieldGemma is a set of instruction tuned models for evaluating the safety of text and images against a set of defined safety policies. You can use
this model as part of a larger implementation of a generative AI application to help
evaluate and prevent generative AI applications from violating safety policies. The ShieldGemma family of models is provided with open weights to allow you to fine-tune it
for your specific use case.

ShieldGemma 2 is a 4B parameter model built to label images for safety.

ShieldGemma 1 is built on [Gemma 2](/gemma/docs/core) in 2B, 9B, and
27B parameter sizes.

* verified\_user

  #### Content safety evaluation

  Evaluate the safety of prompt input and output responses against a set of defined safety policies.
* [build](https://huggingface.co/collections/google/shieldgemma-67d130ef8da6af884072a789)

  #### [Tuneable, open models](https://huggingface.co/collections/google/shieldgemma-67d130ef8da6af884072a789)

  ShieldGemma models are provided with open weights and can be fine-tuned for your specific use case.

## ShieldGemma 2

### [View the model card](https://ai.google.dev/gemma/docs/shieldgemma/model_card_2)

ShieldGemma's 2 model card contains detailed information about the model implementation, evaluations, model usage and limitations, and more.

### [View on Kaggle](https://www.kaggle.com/models/google/shieldgemma-2)

View more code, Colab notebooks, information, and discussions about ShieldGemma on Kaggle.

### [View on HuggingFace](https://huggingface.co/google/shieldgemma-2-4b-it)

Run a working example for using ShieldGemma to evaluate images.

## ShieldGemma 1

### [View the model card](https://ai.google.dev/gemma/docs/shieldgemma/model_card)

ShieldGemma's model card contains detailed information about the model implementation, evaluations, model usage and limitations, and more.

### [View on Kaggle](https://www.kaggle.com/models/google/shieldgemma)

View more code, Colab notebooks, information, and discussions about ShieldGemma on Kaggle.

### [Run in Colab](https://colab.research.google.com/github/google-gemini/gemma-cookbook/blob/main/responsible/shieldgemma_on_keras.ipynb)

Run a working example for using ShieldGemma to evaluate text prompt input and output.