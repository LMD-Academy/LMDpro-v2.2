--- source: https://ai.google.dev/edge/mediapipe/solutions/text/language_detector ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [MediaPipe](https://developers.google.com/edge/mediapipe/solutions/guide)

Send feedback

# Language detection guide Stay organized with collections Save and categorize content based on your preferences.



![Example UI that shows an input sentence in French that is correctly
identified as French in the output.](/static/mediapipe/images/solutions/examples/language_detector.png)

The MediaPipe Language Detector task lets you identify the language of a piece of text. This
task operates on text data with a machine learning (ML) model and outputs a list
of predictions, where each prediction consists of an
[ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code
and a probability.

[Try it!arrow\_forward](https://google-ai-edge.github.io/mediapipe-samples-web/#/text/language_detector)

## Get Started

Start using this task by following one of these implementation guides for your
target platform. These platform-specific guides walk you through a basic
implementation of this task, including a recommended model, and code example
with recommended configuration options:

* **Android** - [Code example](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/language_detector/android) - [Guide](https://developers.google.com/edge/mediapipe/solutions/text/language_detector/android)
* **Python** - [Code example](https://colab.research.google.com/github/googlesamples/mediapipe/blob/main/examples/language_detector/python/%5BMediaPipe_Python_Tasks%5D_Language_Detector.ipynb) - [Guide](https://developers.google.com/edge/mediapipe/solutions/text/language_detector/python)
* **Web** - [Code example](https://github.com/google-ai-edge/mediapipe-samples-web/blob/main/src/tasks/language-detector.ts) - [Guide](https://developers.google.com/edge/mediapipe/solutions/text/language_detector/web_js)

## Task details

This section describes the capabilities, inputs, outputs, and configuration
options of this task.

### Features

* **Score threshold** - Filter results based on prediction scores
* **Label allowlist and denylist** - Specify the categories detected

| Task inputs | Task outputs |
| --- | --- |
| Language Detector accepts the following input data type:   * String | Language Detector outputs a list of predictions containing:     + Language code: An ISO 639-1 (https://en.wikipedia.org/wiki/List\_of\_ISO\_639-1\_codes)   language / locale code (e.g. "en" for English, "uz" for Uzbek, "ja-Latn” for   Japanese (romaji)) as a string.  + Probability: the confidence score for this prediction, expressed as a   probability between zero and one as floating point value. |

### Configurations options

This task has the following configuration options:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `max_results` | Sets the optional maximum number of top-scored language predictions to return. If this value is less than zero, all available results are returned. | Any positive numbers | `-1` |
| `score_threshold` | Sets the prediction score threshold that overrides the one provided in the model metadata (if any). Results below this value are rejected. | Any float | Not set |
| `category_allowlist` | Sets the optional list of allowed language codes. If non-empty, language predictions whose language code is not in this set will be filtered out. This option is mutually exclusive with `category_denylist` and using both results in an error. | Any strings | Not set |
| `category_denylist` | Sets the optional list of language codes that are not allowed. If non-empty, language predictions whose language code is in this set will be filtered out. This option is mutually exclusive with `category_allowlist` and using both results in an error. | Any strings | Not set |

## Models

We offer a default, recommended model when you start developing with this task.

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Language detector model (recommended)

This model is built to be lightweight (315 KB) and uses embedding-based, neural
network classification architecture. The model identifies language using an
[ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language
code, and can identify 110 languages. For a list of languages supported by the
model, see the
[label file](https://storage.googleapis.com/mediapipe-tasks/language_detector/labels.txt),
which lists languages by their ISO 639-1 code.

| Model name | Input shape | Quantization type | Model card | Versions |
| --- | --- | --- | --- | --- |
| [Language Detector](https://storage.googleapis.com/mediapipe-models/language_detector/language_detector/float32/1/language_detector.tflite) string UTF-8 | none (float32) | [info](https://storage.googleapis.com/mediapipe-assets/LanguageDetector%20Model%20Card.pdf) | [Latest](https://storage.googleapis.com/mediapipe-models/language_detector/language_detector/float32/1/language_detector.tflite) || |

## Task benchmarks

Here's the task benchmarks for the whole pipeline based on the above
pre-trained models. The latency result is the average latency on Pixel 6 using
CPU / GPU.

| Model Name | CPU Latency | GPU Latency |
| --- | --- | --- |
| Language Detector | 0.31ms | - ||






Send feedback