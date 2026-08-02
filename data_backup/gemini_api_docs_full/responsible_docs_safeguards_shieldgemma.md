--- source: https://ai.google.dev/responsible/docs/safeguards/shieldgemma ---

* [Home](https://ai.google.dev/)
* [Responsible Generative AI Toolkit](https://ai.google.dev/responsible)
* [Docs](https://ai.google.dev/responsible/docs)

Send feedback

# ShieldGemma



[ShieldGemma](/gemma/docs/shieldgemma) is a set of ready-made, instruction-tuned, open
weights safety classifiers built on the Gemma family of models to determine
whether text or images violate a safety policy across input and output.
ShieldGemma is trained to identify across key harms across different models, see
the model cards for more information.

* ShieldGemma 2 for image content moderation: Available in 4B. See the
  [model card](/gemma/docs/shieldgemma/model_card_2) for more details.
* ShieldGemma 1 for text content moderation: Available in 2B, 9B, and
  27B—allowing you to balance speed, performance, and generalizability
  to suit your needs across any deployment. See the
  [model card](/gemma/docs/shieldgemma/model_card) for more details.

**Note:** While ShieldGemma is trained on key harms, it may be
generalizable to other harms related to your use case. It's important to
experiment and regularly assess how well ShieldGemma fits your needs.

**Safeguard your models with ShieldGemma**

|  |  |  |  |
| --- | --- | --- | --- |
|  | [Image moderation: ShieldGemma 2 in Transformers](https://colab.research.google.com/github/google-gemini/gemma-cookbook/blob/main/responsible/shieldgemma2_on_huggingface.ipynb) | [Text moderation: ShieldGemma in Transformers](https://colab.research.google.com/github/google-gemini/gemma-cookbook/blob/main/responsible/shieldgemma_on_huggingface.ipynb) | [Text moderation: ShieldGemma in Keras](https://colab.research.google.com/github/google-gemini/gemma-cookbook/blob/main/responsible/shieldgemma_on_keras.ipynb) |

You can use ShieldGemma models in the following frameworks.

* [KerasNLP](https://keras.io/keras_nlp/), with model checkpoints available from
  [Kaggle](https://www.kaggle.com/search?q=shieldgemma+in%3Amodels).
* [Hugging Face Transformers](https://github.com/huggingface/transformers), with model checkpoints available
  from [Hugging Face Hub](https://huggingface.co/collections/google/shieldgemma-release-66a20efe3c10ef2bd5808c79).




Send feedback