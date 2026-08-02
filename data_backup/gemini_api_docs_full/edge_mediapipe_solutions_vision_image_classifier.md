--- source: https://ai.google.dev/edge/mediapipe/solutions/vision/image_classifier ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [MediaPipe](https://developers.google.com/edge/mediapipe/solutions/guide)

Send feedback

# Image classification task guide Stay organized with collections Save and categorize content based on your preferences.



![An animal correctly labeled as a flamingo with a 95% confidence rating](/static/mediapipe/images/solutions/examples/image_classifier.png)

The MediaPipe Image Classifier task lets you perform classification on images. You can use this task to identify what an image represents among a set of categories defined at training time. This task operates on image data with a machine learning (ML) model as static data or a continuous stream and outputs a list of potential categories ranked by descending probability score.

[Try it!arrow\_forward](https://google-ai-edge.github.io/mediapipe-samples-web/#/vision/image_classifier)

## Get Started

Start using this task by following one of these implementation guides for your
target platform. These platform-specific guides walk you through a basic
implementation of this task, using a recommended model, and provide code examples
with the recommended configuration options:

* **Android** - [Code example](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/image_classification/android) - [Guide](https://developers.google.com/edge/mediapipe/solutions/vision/image_classifier/android)
* **Python** - [Code example](https://colab.research.google.com/github/googlesamples/mediapipe/blob/main/examples/image_classification/python/image_classifier.ipynb) - [Guide](https://developers.google.com/edge/mediapipe/solutions/vision/image_classifier/python)
* **Web** - [Code example](https://github.com/google-ai-edge/mediapipe-samples-web/blob/main/src/tasks/image-classifier.ts) - [Guide](https://developers.google.com/edge/mediapipe/solutions/vision/image_classifier/web_js)
* **iOS** - [Code example](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/image_classification/ios) - [Guide](https://developers.google.com/edge/mediapipe/solutions/vision/image_classifier/ios)

**Note:** If you are interested in creating a custom Image classifier using your
own dataset, refer to the [Image classifier customization](https://developers.google.com/edge/mediapipe/solutions/customization/image_classifier)
tutorial.

## Task details

This section describes the capabilities, inputs, outputs, and configuration
options of this task.

### Features

* **Input image processing** - Processing includes image rotation, resizing,
  normalization, and color space conversion.
* **Region of interest** - Perform classification on a region of the image
  instead of the whole image.
* **Label map locale** - Set the language used for display names.
* **Score threshold** - Filter results based on prediction scores.
* **Top-k classification** - Limit the number of classification results.
* **Label allowlist and denylist** - Specify the categories classified.

| Task inputs | Task outputs |
| --- | --- |
| Input can be one of the following data types:   * Still images  * Decoded video frames  * Live video feed | Image Classifier outputs a list of categories containing:   * Category index: the index of the category in the model outputs  * Score: the confidence score for this category, usually a probability in [0,1]  * Category name (optional): the name of the category as specified in the TFLite Model Metadata, if available  * Category display name (optional): a display name for the category as specified in the TFLite Model Metadata, in the language specified through display names locale options, if available |

**Note:** This task supports modification of the provided ML models and custom models.
For more information on using modified or custom models for this task,
see [Custom models](#custom_models).

### Configurations options

This task has the following configuration options:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `running_mode` | Sets the running mode for the task. There are three modes:    IMAGE: The mode for single image inputs.    VIDEO: The mode for decoded frames of a video.    LIVE\_STREAM: The mode for a livestream of input data, such as from a camera. In this mode, resultListener must be called to set up a listener to receive results asynchronously. | {`IMAGE, VIDEO, LIVE_STREAM`} | `IMAGE` |
| `display_names_locale` | Sets the language of labels to use for display names provided in the metadata of the task's model, if available. Default is `en` for English. You can add localized labels to the metadata of a custom model using the [TensorFlow Lite Metadata Writer API](https://ai.google.dev/edge/lite/models/metadata_writer_tutorial) | Locale code | en |
| `max_results` | Sets the optional maximum number of top-scored classification results to return. If < 0, all available results will be returned. | Any positive numbers | `-1` |
| `score_threshold` | Sets the prediction score threshold that overrides the one provided in the model metadata (if any). Results below this value are rejected. | Any float | Not set |
| `category_allowlist` | Sets the optional list of allowed category names. If non-empty, classification results whose category name is not in this set will be filtered out. Duplicate or unknown category names are ignored. This option is mutually exclusive with `category_denylist` and using both results in an error. | Any strings | Not set |
| `category_denylist` | Sets the optional list of category names that are not allowed. If non-empty, classification results whose category name is in this set will be filtered out. Duplicate or unknown category names are ignored. This option is mutually exclusive with `category_allowlist` and using both results in an error. | Any strings | Not set |
| `result_callback` | Sets the result listener to receive the classification results asynchronously when the Image Classifier is in the live stream mode. Can only be used when running mode is set to `LIVE_STREAM` | N/A | Not set |

**Note:** The `resultListener` is dependent on `runningMode`. Only set the
`resultListener` when `runningMode` is set to `LIVE_STREAM`.**Note:** The category allowlist and denylist are mutually exclusive.

## Models

The Image Classifier requires an image classification model to be downloaded and
stored in your project directory. Start with the
default, recommended model for your target platform when you start developing
with this task. The other available models typically make trade-offs between
performance, accuracy, resolution, and resource requirements, and in some cases,
include additional features.

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### EfficientNet-Lite0 model (recommended)

The EfficientNet-Lite0 model uses an EfficientNet architecture and was trained
using [ImageNet](https://www.image-net.org) to recognize 1,000 classes, such as
trees, animals, food, vehicles, person etc. See the [full
list](https://storage.googleapis.com/mediapipe-tasks/image_classifier/labels.txt)
of supported labels. EfficientNet-Lite0 is available as an int8 and float 32
model. This model is recommended because it strikes a balance between latency
and accuracy. It is both accurate and lightweight enough for many use cases.

| Model name | Input shape | Quantization type | Versions |
| --- | --- | --- | --- |
| [EfficientNet-Lite0 (int8)](https://storage.googleapis.com/mediapipe-models/image_classifier/efficientnet_lite0/int8/latest/efficientnet_lite0.tflite) | 224 x 224 | int8 | [Latest](https://storage.googleapis.com/mediapipe-models/image_classifier/efficientnet_lite0/int8/latest/efficientnet_lite0.tflite) |
| [EfficientNet-Lite0 (float 32)](https://storage.googleapis.com/mediapipe-models/image_classifier/efficientnet_lite0/float32/latest/efficientnet_lite0.tflite) | 224 x 224 | None (float32) | [Latest](https://storage.googleapis.com/mediapipe-models/image_classifier/efficientnet_lite0/float32/latest/efficientnet_lite0.tflite) |

### EfficientNet-Lite2 model

The EfficientNet-Lite2 model uses an EfficientNet architecture and was trained
using [ImageNet](https://www.image-net.org) to recognize 1,000 classes, such as
trees, animals, food, vehicles, person etc. See the [full
list](https://storage.googleapis.com/mediapipe-tasks/image_classifier/labels.txt)
of supported labels. EfficientNet-Lite2 is available as an int8 and float 32
model. This model is generally more accurate than EfficientNet-Lite0, but is
also slower and more memory intensive. This model is appropriate for use cases
where accuracy is a higher priority than speed or size.

| Model name | Input shape | Quantization type | Versions |
| --- | --- | --- | --- |
| [EfficientNet-Lite2 (int8)](https://storage.googleapis.com/mediapipe-models/image_classifier/efficientnet_lite2/float32/latest/efficientnet_lite2.tflite) | 224 x 224 | int8 | [Latest](https://storage.googleapis.com/mediapipe-models/image_classifier/efficientnet_lite2/float32/latest/efficientnet_lite2.tflite) |
| [EfficientNet-Lite2 (float 32)](https://storage.googleapis.com/mediapipe-models/image_classifier/efficientnet_lite2/float32/latest/efficientnet_lite2.tflite) | 224 x 224 | None (float32) | [Latest](https://storage.googleapis.com/mediapipe-models/image_classifier/efficientnet_lite2/float32/latest/efficientnet_lite2.tflite) |

### Task benchmarks

Here's the task benchmarks for the whole pipeline based on the above
pre-trained models. The latency result is the average latency on Pixel 6 using
CPU / GPU.

| Model Name | CPU Latency | GPU Latency |
| --- | --- | --- |
| EfficientNet-Lite0 (float 32) | 23.52ms | 18.90ms |
| EfficientNet-Lite0 (int8) | 10.08ms | - |
| EfficientNet-Lite2 (float 32) | 44.17ms | 22.20ms |
| EfficientNet-Lite2 (int8) | 19.43ms | - |

### Custom models

You can use a customized ML model with this task if you want to improve or alter
the capabilities of the provided models. You can use Model Maker to modify the
existing models or build a model using tools like TensorFlow. Custom models used
with MediaPipe must be in
[TensorFlow Lite](https://www.tensorflow.org/lite/models) format and must
include specific
[metadata](https://www.tensorflow.org/lite/models/convert/metadata) describing
the operating parameters of the model. You should consider using Model Maker to
modify the provided models for this task before building your own.

If you are interested in creating a custom Image classifier using your
own dataset, start with the [Image classifier customization](https://developers.google.com/edge/mediapipe/solutions/customization/image_classifier)
tutorial.






Send feedback