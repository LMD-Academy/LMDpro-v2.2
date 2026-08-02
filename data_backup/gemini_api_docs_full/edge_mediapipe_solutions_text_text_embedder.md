--- source: https://ai.google.dev/edge/mediapipe/solutions/text/text_embedder ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [MediaPipe](https://developers.google.com/edge/mediapipe/solutions/guide)

Send feedback

# Text embedding guide Stay organized with collections Save and categorize content based on your preferences.



![Two example sentences that show the corresponding embeddings for each
word in the sentences as an array.](/static/mediapipe/images/solutions/examples/text_embedder.png)

The MediaPipe Text Embedder task lets you create a numeric representation of text data to
capture its semantic meaning. This functionality is frequently used to compare
the semantic similarity of two pieces of text using mathematical comparison
techniques such as Cosine Similarity. This task operates on text data with a
machine learning (ML) model, and outputs a numeric representation of the text
data as a list of high-dimensional feature vectors, also known as embedding
vectors, in either floating-point or quantized form.

[Try it!arrow\_forward](https://google-ai-edge.github.io/mediapipe-samples-web/#/text/text_embedder)

## Get Started

Start using this task by following one of these implementation guides for your
target platform. These platform-specific guides walk you through a basic
implementation of this task, including a recommended model, and code example
with recommended configuration options:

* **Android** - [Code
  example](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/text_embedder/android) - [Guide](https://developers.google.com/edge/mediapipe/solutions/text/text_embedder/android)
* **Python** - [Code
  example](https://colab.sandbox.google.com/github/googlesamples/mediapipe/blob/main/examples/text_embedder/python/text_embedder.ipynb) - [Guide](https://developers.google.com/edge/mediapipe/solutions/text/text_embedder/python)
* **Web** - [Code example](https://github.com/google-ai-edge/mediapipe-samples-web/blob/main/src/tasks/text-embedder.ts) - [Guide](https://developers.google.com/edge/mediapipe/solutions/text/text_embedder/web_js)

## Task details

This section describes the capabilities, inputs, outputs, and configuration
options of this task.

### Features

* **Input text processing** - Supports out-of-graph tokenization for models
  without in-graph tokenization.
* **Embedding similarity computation** - Built-in utility function to compute
  the [cosine similarity](https://en.wikipedia.org/wiki/Cosine_similarity)
  between two feature vectors.
* **Quantization** - Supports scalar quantization for the feature vectors.

| Task inputs | Task outputs |
| --- | --- |
| Text Embedder accepts the following input data type:   * String | Text Embedder outputs a list of embeddings consisting of:   * Embedding: the feature vector itself, either in floating-point form or   scalar-quantized.  * Head index: the index for the head that produced this embedding.  * Head name (optional): the name of the head that produced this embedding. |

### Configurations options

This task has the following configuration options:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `l2_normalize` | Whether to normalize the returned feature vector with L2 norm. Use this option only if the model does not already contain a native L2\_NORMALIZATION TFLite Op. In most cases, this is already the case and L2 normalization is thus achieved through TFLite inference with no need for this option. | `Boolean` | `False` |
| `quantize` | Whether the returned embedding should be quantized to bytes via scalar quantization. Embeddings are implicitly assumed to be unit-norm and therefore any dimension is guaranteed to have a value in [-1.0, 1.0]. Use the l2\_normalize option if this is not the case. | `Boolean` | `False` |

## Models

We offer a default, recommended model when you start developing with this task.

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Universal Sentence Encoder model (recommended)

This model uses a [dual encoder architecture](https://aclanthology.org/2022.emnlp-main.640.pdf)
and was trained on various question-answer datasets.

Consider the following pairs of sentences:

* ("it's a charming and often affecting journey", "what a great and fantastic trip")
* ("I like my phone", "I hate my phone")
* ("This restaurant has a great gimmick", "We need to double-check the details of our plan")

The text embeddings in the first two pairs will have a higher cosine similarity
than the embeddings in the third pair because the first two pairs of sentences
share a common topic of "trip sentiment" and "phone opinion" respectively while
the third pair of sentences do not share a common topic.

Note that although the two sentences in the second pair have opposing sentiments,
they have a high similarity score because they share a common topic.

| Model name | Input shape | Quantization type | Versions |
| --- | --- | --- | --- |
| [Universal Sentence Encoder](https://storage.googleapis.com/mediapipe-models/text_embedder/universal_sentence_encoder/float32/latest/universal_sentence_encoder.tflite) string, string, string | None (float32) | [Latest](https://storage.googleapis.com/mediapipe-models/text_embedder/universal_sentence_encoder/float32/latest/universal_sentence_encoder.tflite) || |

## Task benchmarks

Here's the task benchmarks for the whole pipeline based on the above
pre-trained models. The latency result is the average latency on Pixel 6 using
CPU / GPU.

| Model Name | CPU Latency | GPU Latency |
| --- | --- | --- |
| Universal Sentence Encoder | 18.21ms | - ||






Send feedback