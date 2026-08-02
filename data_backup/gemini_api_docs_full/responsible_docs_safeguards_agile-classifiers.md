--- source: https://ai.google.dev/responsible/docs/safeguards/agile-classifiers ---

* [Home](https://ai.google.dev/)
* [Responsible Generative AI Toolkit](https://ai.google.dev/responsible)
* [Docs](https://ai.google.dev/responsible/docs)

Send feedback

# Agile Classifiers: Customized content policy classifiers



[Agile classifiers](https://arxiv.org/pdf/2302.06541.pdf) is an efficient and flexible method
for creating custom content policy classifiers by tuning models, such as Gemma,
to fit your needs. They also allow you complete control over where and how they
are deployed.

**Gemma Agile Classifier Tutorials**

|  |  |  |
| --- | --- | --- |
|  | [Start Codelab](https://codelabs.developers.google.com/codelabs/responsible-ai/agile-classifiers) | [Start Google Colab](https://colab.research.google.com/github/google-gemini/gemma-cookbook/blob/main/responsible/agile_classifiers.ipynb) |

The [codelab](https://codelabs.developers.google.com/codelabs/responsible-ai/agile-classifiers) and
[tutorial](/gemma/docs/agile_classifiers) use [LoRA](https://arxiv.org/abs/2106.09685) to fine-tune a Gemma
model to act as a content policy classifier using the [KerasNLP](https://keras.io/keras_nlp/)
library. Using only 200 examples from the [ETHOS dataset](https://paperswithcode.com/dataset/ethos), this
classifier achieves an [F1 score](https://en.wikipedia.org/wiki/F-score) of 0.80 and [ROC-AUC score](https://developers.google.com/machine-learning/crash-course/classification/roc-and-auc#AUC)
of 0.78, which compares favorably to state of the art
[leaderboard results](https://paperswithcode.com/sota/hate-speech-detection-on-ethos-binary). When trained on the 800 examples,
like the other classifiers on the leaderboard, the Gemma-based agile classifier
achieves an F1 score of 83.74 and a ROC-AUC score of 88.17. You can adapt the
tutorial instructions to further refine this classifier, or to create your own
custom safety classifier safeguards.




Send feedback