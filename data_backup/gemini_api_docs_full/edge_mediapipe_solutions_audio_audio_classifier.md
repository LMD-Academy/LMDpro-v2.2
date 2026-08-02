--- source: https://ai.google.dev/edge/mediapipe/solutions/audio/audio_classifier ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [MediaPipe](https://developers.google.com/edge/mediapipe/solutions/guide)

Send feedback

# Audio classification guide Stay organized with collections Save and categorize content based on your preferences.



![Waveform of a bird call superimposed over a photograph of the
bird whose call the waveform matches.](/static/mediapipe/images/solutions/examples/audio_classifier.png)

The MediaPipe Audio Classifier task lets you classify audio clips into a set of defined
categories, such as guitar music, a train whistle, or a bird's song. The
categories are defined during the training of the model. This task operates on
audio data with a machine learning (ML) model as independent audio clips or a
continuous stream and outputs a list of potential categories ranked by
descending probability score.

[Try it!arrow\_forward](https://google-ai-edge.github.io/mediapipe-samples-web/#/audio/audio_classifier)

## Get Started

Start using this task by following one of these implementation guides for your
target platform. These platform-specific guides walk you through a basic
implementation of this task, including a recommended model, and code example
with recommended configuration options:

* **Android** - [Code example](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/audio_classifier/android) - [Guide](https://developers.google.com/edge/mediapipe/solutions/audio/audio_classifier/android)
* **Python** - [Code example](https://colab.sandbox.google.com/github/googlesamples/mediapipe/blob/main/examples/audio_classifier/python/audio_classification.ipynb) [Guide](https://developers.google.com/edge/mediapipe/solutions/audio/audio_classifier/python)
* **Web** - [Code example](https://github.com/google-ai-edge/mediapipe-samples-web/blob/main/src/tasks/audio-classifier.ts) - [Guide](https://developers.google.com/edge/mediapipe/solutions/audio/audio_classifier/web_js)

These platform-specific guides walk you through a basic implementation of this
task, including a recommended model, and code example with recommended
configuration options.

## Task details

This section describes the capabilities, inputs, outputs, and configuration
options of this task.

### Features

* **Input audio processing** - Processing includes audio resampling,
  buffering, framing, and fourier transform.
* **Label map locale** - Set the language used for display names
* **Score threshold** - Filter results based on prediction scores.
* **Top-k detection** - Filter the number detection results.
* **Label allowlist and denylist** - Specify the categories detected.

| Task inputs | Task outputs |
| --- | --- |
| Input can be one of the following data types:   * Audio clips * Audio stream | Audio Classifier outputs a list of categories containing:   * Category index: the index of the category in the model outputs * Score: the confidence score for this category, usually a probability in [0,1] * Category name (optional): the name of the category as specified in the TFLite Model Metadata, if available * Category display name (optional): a display name for the category as specified in the TFLite Model Metadata, in the language specified through display names locale options, if available |

### Configurations options

This task has the following configuration options:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `running_mode` | Sets the running mode for the task. Audio Classifier has two modes:    AUDIO\_CLIPS: The mode for running the audio task on independent audio clips.    AUDIO\_STREAM: The mode for running the audio task on an audio stream, such as from microphone. In this mode, resultListener must be called to set up a listener to receive the classification results asynchronously. | {`AUDIO_CLIPS, AUDIO_STREAM`} | `AUDIO_CLIPS` |
| `display_names_locale` | Sets the language of labels to use for display names provided in the metadata of the task's model, if available. Default is `en` for English. You can add localized labels to the metadata of a custom model using the [TensorFlow Lite Metadata Writer API](https://ai.google.dev/edge/lite/models/metadata_writer_tutorial#audio_classifiers) Locale code | en | |
| `max_results` | Sets the optional maximum number of top-scored classification results to return. If < 0, all available results will be returned. | Any positive numbers | `-1` |
| `score_threshold` | Sets the prediction score threshold that overrides the one provided in the model metadata (if any). Results below this value are rejected. | [0.0, 1.0] | Not set |
| `category_allowlist` | Sets the optional list of allowed category names. If non-empty, classification results whose category name is not in this set will be filtered out. Duplicate or unknown category names are ignored. This option is mutually exclusive with `category_denylist` and using both results in an error. | Any strings | Not set |
| `category_denylist` | Sets the optional list of category names that are not allowed. If non-empty, classification results whose category name is in this set will be filtered out. Duplicate or unknown category names are ignored. This option is mutually exclusive with `category_allowlist` and using both results in an error. | Any strings | Not set |
| `result_callback` | Sets the result listener to receive the classification results asynchronously when the Audio Classifier is in the audio stream mode. Can only be used when running mode is set to `AUDIO_STREAM` | N/A | Not set |

**Note:** The `resultListener` is dependent on `runningMode`. Only set the
`resultListener` when `runningMode` is set to `AUDIO_STREAM`.**Note:** The category allowlist and denylist are mutually exclusive.

## Models

The Audio Classifier requires an audio classification model to be downloaded and
stored in your project directory. Start with the
default, recommended model for your target platform when you start developing
with this task. The other available models typically make trade-offs between
performance, accuracy, resolution, and resource requirements, and in some cases,
include additional features.

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Yamnet model (recommended)

The Yamnet model is an audio event classifier trained on the
[AudioSet](https://research.google.com/audioset/) dataset to predict audio
events defined in the AudioSet data. For information on the audio events
recognized by this model, see the model
[labels list](https://storage.googleapis.com/mediapipe-tasks/audio_classifier/yamnet_label_list.txt).

| Model name | Input shape | Quantization type | Versions |
| --- | --- | --- | --- |
| [YamNet](https://storage.googleapis.com/mediapipe-models/audio_classifier/yamnet/float32/latest/yamnet.tflite) 1 x 15600 | None (float32) | [Latest](https://storage.googleapis.com/mediapipe-models/audio_classifier/yamnet/float32/latest/yamnet.tflite) | |

## Task benchmarks

Here's the task benchmarks for the whole pipeline based on the above
pre-trained models. The latency result is the average latency on Pixel 6 using
CPU / GPU.

| Model Name | CPU Latency | GPU Latency |
| --- | --- | --- |
| YamNet | 12.29ms | - ||






Send feedback