--- source: https://ai.google.dev/edge/mediapipe/solutions/vision/face_detector ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [MediaPipe](https://developers.google.com/edge/mediapipe/solutions/guide)

Send feedback

# Face detection guide Stay organized with collections Save and categorize content based on your preferences.



![Three people with their faces highlighted with bounding boxes](/static/mediapipe/images/solutions/examples/face_detector.png)

The MediaPipe Face Detector task lets you detect faces in an image or video. You can use
this task to locate faces and facial features within a frame. This task uses a
machine learning (ML) model that works with single images or a continuous
stream of images. The task outputs face locations, along with the following
facial key points: left eye, right eye, nose tip, mouth, left eye tragion, and
right eye tragion.

[Try it!arrow\_forward](https://google-ai-edge.github.io/mediapipe-samples-web/#/vision/face_detector)

## Get Started

Start using this task by following one of these implementation guides for your
target platform. These platform-specific guides walk you through a basic
implementation of this task, including a recommended model, and code example
with recommended configuration options:

* **Android** - [Code
  example](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/face_detector/android) - [Guide](https://developers.google.com/edge/mediapipe/solutions/vision/face_detector/android)
* **Python** - [Code
  example](https://colab.sandbox.google.com/github/googlesamples/mediapipe/blob/main/examples/face_detector/python/face_detector.ipynb)- [Guide](https://developers.google.com/edge/mediapipe/solutions/vision/face_detector/python)
* **Web** - [Code
  example](https://github.com/google-ai-edge/mediapipe-samples-web/blob/main/src/tasks/face-detector.ts) - [Guide](https://developers.google.com/edge/mediapipe/solutions/vision/face_detector/web_js)
* **iOS** - [Code
  example](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/face_detector/ios) - [Guide](https://developers.google.com/edge/mediapipe/solutions/vision/face_detector/ios)

## Task details

This section describes the capabilities, inputs, outputs, and configuration
options of this task.

### Features

* **Input image processing** - Processing includes image rotation, resizing,
  normalization, and color space conversion.
* **Score threshold** - Filter results based on prediction scores.

| Task inputs | Task outputs |
| --- | --- |
| The Face Detector accepts an input of one of the following data types:   * Still images  * Decoded video frames  * Live video feed | The Face Detector outputs the following results:   * Bounding boxes for detected faces in an image frame.  * Coordinates for 6 face landmarks for each detected face. |

### Configurations options

This task has the following configuration options:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `running_mode` | Sets the running mode for the task. There are three modes:    IMAGE: The mode for single image inputs.    VIDEO: The mode for decoded frames of a video.    LIVE\_STREAM: The mode for a livestream of input data, such as from a camera. In this mode, resultListener must be called to set up a listener to receive results asynchronously. | {`IMAGE, VIDEO, LIVE_STREAM`} | `IMAGE` |
| `min_detection_confidence` | The minimum confidence score for the face detection to be considered successful. | `Float [0,1]` | `0.5` |
| `min_suppression_threshold` | The minimum non-maximum-suppression threshold for face detection to be considered overlapped. | `Float [0,1]` | `0.3` |
| `result_callback` | Sets the result listener to receive the detection results asynchronously when the Face Detector is in the live stream mode. Can only be used when running mode is set to `LIVE_STREAM`. | `N/A` | `Not set` |

## Models

Face detection models can vary depending on their intended use cases, such as
short-range and long-range detection. Models also typically make trade-offs
between performance, accuracy, resolution, and resource requirements, and in
some cases, include additional features.

The models listed in this section are variants of BlazeFace, a lightweight and
accurate face detector optimized for mobile GPU inference. BlazeFace models are
suitable for applications like 3D facial keypoint estimation, expression
classification, and face region segmentation. BlazeFace uses a lightweight
feature extraction network similar to
[MobileNetV1/V2](https://arxiv.org/abs/1704.04861).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### BlazeFace (short-range)

A lightweight model for detecting single or multiple faces within selfie-like
images from a smartphone camera or webcam. The model is optimized for
front-facing phone camera images at short range. The model architecture uses a
Single Shot Detector (SSD) convolutional network technique with a custom
encoder. For more information, see the research paper on
[Single Shot MultiBox Detector](https://arxiv.org/abs/1512.02325).

| Model name | Input shape | Quantization type | Model Card | Versions |
| --- | --- | --- | --- | --- |
| [BlazeFace (short-range)](https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/latest/blaze_face_short_range.tflite) | 128 x 128 | float 16 | [info](https://storage.googleapis.com/mediapipe-assets/MediaPipe%20BlazeFace%20Model%20Card%20(Short%20Range).pdf) | [Latest](https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/latest/blaze_face_short_range.tflite) |

### BlazeFace (full-range)

A relatively lightweight model for detecting single or multiple faces within
images from a smartphone camera or webcam. The model is optimized for full-range
images, like those taken with a back-facing phone camera images. The model
architecture uses a technique similar to a
[CenterNet](https://arxiv.org/abs/1904.08189) convolutional network with a
custom encoder.

| Model name | Input shape | Quantization type | Model Card | Versions |
| --- | --- | --- | --- | --- |
| [BlazeFace (full-range)](https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_full_range/float16/latest/blaze_face_full_range.tflite) | 128 x 128 | float 16 | [info](https://storage.googleapis.com/mediapipe-assets/MediaPipe%20BlazeFace%20Model%20Card%20(Full%20Range).pdf) | [Latest](https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_full_range/float16/latest/blaze_face_full_range.tflite) |

### BlazeFace Sparse (full-range)

A lighter version of the regular full-range BlazeFace model, roughly 60% smaller
in size. The model is optimized for full-range images, like those taken with a
back-facing phone camera images. The model architecture uses a technique similar
to a [CenterNet](https://arxiv.org/abs/1904.08189) convolutional network with a
custom encoder.

| Model name | Input shape | Quantization type | Model Card | Versions |
| --- | --- | --- | --- | --- |
| [BlazeFace Sparse (full-range)](https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_full_range/float16/latest/blaze_face_full_range_sparse.tflite) | 128 x 128 | float 16 | [info](https://storage.googleapis.com/mediapipe-assets/MediaPipe%20BlazeFace%20Sparse%20Model%20Card%20(Full%20Range).pdf) | [Latest](https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_full_range/float16/latest/blaze_face_full_range_sparse.tflite) |

## Task benchmarks

Here's the task benchmarks for the whole pipeline based on the above
pre-trained models. The latency result is the average latency on Pixel 6 using
CPU / GPU.

| Model Name | CPU Latency | GPU Latency |
| --- | --- | --- |
| BlazeFace (short-range) | 2.94ms | 7.41ms |






Send feedback