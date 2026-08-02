# Object detection task guide Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/mediapipe/solutions/vision/object_detector))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

![A cat and a dog that are highlighted with bounding boxes that are correctly labeled](/static/mediapipe/images/solutions/examples/object_detector.png)

The MediaPipe Object Detector task lets you detect the presence and location of
multiple classes of objects within images or videos. For example, an object
detector can locate dogs in an image. This task operates on image data
with a machine learning (ML) model, accepting static data or a continuous video
stream as input and outputting a list of detection results. Each detection
result represents an object that appears within the image or video.

[Try it!arrow\_forward](https://google-ai-edge.github.io/mediapipe-samples-web/#/vision/object_detector)

## Get Started

Start using this task by following one of these implementation guides for the
platform you are working on:

* **Android** - [Code example](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/object_detection/android) - [Guide](https://developers.google.com/edge/mediapipe/solutions/vision/object_detector/android)
* **Python** - [Code example](https://colab.research.google.com/github/googlesamples/mediapipe/blob/main/examples/object_detection/python/object_detector.ipynb) - [Guide](https://developers.google.com/edge/mediapipe/solutions/vision/object_detector/python)
* **Web** - [Code example](https://github.com/google-ai-edge/mediapipe-samples-web/blob/main/src/tasks/object-detector.ts) - [Guide](https://developers.google.com/edge/mediapipe/solutions/vision/object_detector/web_js)
* **iOS** - [Code example](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/object_detection/ios) - [Guide](https://developers.google.com/edge/mediapipe/solutions/vision/object_detector/ios)

These platform-specific guides walk you through a basic implementation of this
task, including a recommended model, and code example with recommended
configuration options.

## Task details

This section describes the capabilities, inputs, and outputs of this task.

### Features

* **Input image processing** - Processing includes image rotation, resizing,
  normalization, and color space conversion.
* **Label map locale** - Set the language used for display names
* **Score threshold** - Filter results based on prediction scores.
* **Top-k detection** - Filter the number detection results.
* **Label allowlist and denylist** - Specify the categories detected.

| Task inputs | Task outputs |
| --- | --- |
| The Object Detector API accepts an input of one of the following data types:    * Still images  * Decoded video frames  * Live video feed | The Object Detector API outputs the following results for detected objects:    * Category of object  * Probability score  * Bounding box coordinates |

### Configurations options

This task has the following configuration options:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `running_mode` | Sets the running mode for the task. There are three modes:    IMAGE: The mode for single image inputs.    VIDEO: The mode for decoded frames of a video.    LIVE\_STREAM: The mode for a livestream of input data, such as from a camera. In this mode, resultListener must be called to set up a listener to receive results asynchronously. | {`IMAGE, VIDEO, LIVE_STREAM`} | `IMAGE` |
| `display_names` | Sets the language of labels to use for display names provided in the metadata of the task's model, if available. Default is `en` for English. You can add localized labels to the metadata of a custom model using the [TensorFlow Lite Metadata Writer API](https://ai.google.dev/edge/lite/models/metadata_writer_tutorial) | Locale code | en |
| `max_results` | Sets the optional maximum number of top-scored detection results to return. | Any positive numbers | -1 (all results are returned) |
| `score_threshold` | Sets the prediction score threshold that overrides the one provided in the model metadata (if any). Results below this value are rejected. | Any float | Not set |
| `category_allowlist` | Sets the optional list of allowed category names. If non-empty, detection results whose category name is not in this set will be filtered out. Duplicate or unknown category names are ignored. This option is mutually exclusive with `category_denylist` and using both results in an error. | Any strings | Not set |
| `category_denylist` | Sets the optional list of category names that are not allowed. If non-empty, detection results whose category name is in this set will be filtered out. Duplicate or unknown category names are ignored. This option is mutually exclusive with `category_allowlist` and using both results in an error. | Any strings | Not set |

## Models

The Object Detector API requires an object detection model to be downloaded and
stored in your project directory. If you do not already have a model, start with
the default, recommended model. The other models presented in this section make
trade-offs between latency and accuracy.

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### EfficientDet-Lite0 model (Recommended)

The EfficientDet-Lite0 model uses an EfficientNet-Lite0 backbone with a 320x320
input size and BiFPN feature network. The model was trained with the [COCO
dataset](https://cocodataset.org/), a large-scale object detection dataset that
contains 1.5 million object instances and 80 object labels. See the
[full list](https://storage.googleapis.com/mediapipe-tasks/object_detector/labelmap.txt)
of supported labels. EfficientDet-Lite0 is available as an int8, float16, or
float32. This model is recommended because it strikes a balance between latency
and accuracy. It is both accurate and lightweight enough for many use cases.

| Model name | Input shape | Quantization type | Versions |
| --- | --- | --- | --- |
| [EfficientDet-Lite0 (int8)](https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite0/int8/latest/efficientdet_lite0.tflite) 320 x 320 | int8 | [Latest](https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite0/int8/latest/efficientdet_lite0.tflite) |||  |  |  |  |  |  |  |  | | --- | --- | --- | --- | --- | --- | --- | --- | | [EfficientDet-Lite0 (float 16)](https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite0/float16/latest/efficientdet_lite0.tflite) 320 x 320 | float 16 | [Latest](https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite0/float16/latest/efficientdet_lite0.tflite) |||  |  |  |  | | --- | --- | --- | --- | | [EfficientDet-Lite0 (float 32)](https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite0/float16/latest/efficientdet_lite0.tflite) | 320 x 320 | None (float32) | [Latest](https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite0/float32/latest/efficientdet_lite0.tflite) || | |

### EfficientDet-Lite2 model

The EfficientDet-Lite2 model uses an EfficientNet-Lite2 backbone with a 448x448
input size and BiFPN feature network. The model was trained with the [COCO
dataset](https://cocodataset.org/), a large-scale object detection dataset that
contains 1.5 million object instances and 80 object labels. See the [full
list](https://storage.googleapis.com/mediapipe-tasks/object_detector/labelmap.txt)
of supported labels. EfficientDet-Lite2 is available as an int8, float16, or
float32 model. This model is generally more accurate than EfficientDet-Lite0,
but is also slower and more memory intensive. This model is appropriate for use
cases where accuracy is a greater priority to speed and size.

| Model name | Input shape | Quantization type | Versions |
| --- | --- | --- | --- |
| [EfficientDet-Lite2 (int8)](https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite2/int8/latest/efficientdet_lite2.tflite) | 448 x 448 | int8 | [Latest](https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite2/int8/latest/efficientdet_lite2.tflite) |
| [EfficientDet-Lite2 (float 16)](https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite2/float16/latest/efficientdet_lite2.tflite) | 448 x 448 | float 16 | [Latest](https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite2/float16/latest/efficientdet_lite2.tflite) |
| [EfficientDet-Lite2 (float 32)](https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite2/float32/latest/efficientdet_lite2.tflite) | 448 x 448 | None (float32) | [Latest](https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite2/float32/latest/efficientdet_lite2.tflite) |

### SSD MobileNetV2 model

The SSD MobileNetV2 model uses a MobileNetV2 backbone with a 256x256 input size
and SSD feature network. The model was trained with the [COCO
dataset](https://cocodataset.org/), a large-scale object detection dataset that
contains 1.5 million object instances and 80 object labels. See the [full
list](https://storage.googleapis.com/mediapipe-tasks/object_detector/labelmap.txt)
of supported labels. SSD MobileNetV2 is available as an int8 and float 32 model.
This model is faster and lighter than EfficientDet-Lite0, but is also generally
less accurate. This model is appropriate for use cases that require a fast,
lightweight model that sacrifices some accuracy.

| Model name | Input shape | Quantization type | Versions |
| --- | --- | --- | --- |
| [SSDMobileNet-V2 (int8)](https://storage.googleapis.com/mediapipe-models/object_detector/ssd_mobilenet_v2/float16/latest/ssd_mobilenet_v2.tflite) | 256 x 256 | int8 | [Latest](https://storage.googleapis.com/mediapipe-models/object_detector/ssd_mobilenet_v2/float16/latest/ssd_mobilenet_v2.tflite) |
| [SSDMobileNet-V2 (float 32)](https://storage.googleapis.com/mediapipe-models/object_detector/ssd_mobilenet_v2/float32/latest/ssd_mobilenet_v2.tflite) | 256 x 256 | None (float32) | [Latest](https://storage.googleapis.com/mediapipe-models/object_detector/ssd_mobilenet_v2/float32/latest/ssd_mobilenet_v2.tflite) |

### Model requirements and metadata

This section describes the requirements for custom models if you decide to build
a model to use with this task. Custom models must be in
[TensorFlow Lite](https://developers.google.com/edge/lite/models/trained) format and must
include [metadata](https://developers.google.com/edge/lite/models/metadata_writer_tutorial#object_detectors)
describing the operating parameters of the model.

#### Design requirements

| Input | Shape | Description |
| --- | --- | --- |
| Input image | Float32 tensor of shape[1, height, width, 3] | The normalized input image. |

| Output | Shape | Description |
| --- | --- | --- |
| `detection_boxes` | Float32 tensor of shape [1, num\_boxes, 4] | Box location of each detected object. |
| `detection_classes` | Float32 tensor of shape [1, num\_boxes] | Indices of the class names for each detected object. |
| `detection_scores` | float32 tensor of shape [1, num\_boxes] | Prediction scores for each detected object. |
| `num_boxes` | Float32 tensor of size 1 | The number of detected boxes. |

#### Metadata requirements

| Parameter | Description | Description |
| --- | --- | --- |
| `input_norm_mean` | The mean value used in the input tensor normalization. | The normalized input image. |
| `input_norm_std` | The field norm used in the input tensor normalization. | Box location of each detected object. |
| `label_file_paths` | The paths to the category tensor label files. If the model does not have any label files, pass an empty list. | Indices of the class names for each detected object. |
| `score_calibration_md` | Information on the score calibration operation in the classification tensor. This parameter is not required if the model does not use score calibration. | Prediction scores for each detected object. |
| `num_boxes` | Float32 tensor of size 1 | The number of detected boxes. |

## Task benchmarks

Here's the task benchmarks for the above pre-trained models. The latency
result is the average latency on Pixel 6 using CPU / GPU.

| Model Name | CPU Latency | GPU Latency |
| --- | --- | --- |
| EfficientDet-Lite0 float32 model | 61.30ms | 27.83ms |
| EfficientDet-Lite0 float16 model | 53.97ms | 27.97ms |
| EfficientDet-Lite0 int8 model | 29.31ms | - |
| EfficientDet-Lite2 float32 model | 197.98ms | 41.15ms |
| EfficientDet-Lite2 float16 model | 198.77ms | 47.31ms |
| EfficientDet-Lite2 int8 model | 70.91ms | - |
| SSD MobileNetV2 float32 model | 36.30ms | 24.01ms |
| SSD MobileNetV2 float16 model | 37.35ms | 28.16ms |

Send feedback
