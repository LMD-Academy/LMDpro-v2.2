--- source: https://ai.google.dev/edge/mediapipe/solutions/vision/interactive_segmenter ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [MediaPipe](https://developers.google.com/edge/mediapipe/solutions/guide)

Send feedback

# Interactive image segmentation task guide Stay organized with collections Save and categorize content based on your preferences.



![Side by side images that show a photograph of a chair in one image and then the same image with the chair highlighted to indicate that the model has detected the chair](/static/mediapipe/images/solutions/examples/interactive-segmenter.png)

The MediaPipe Interactive Image Segmenter task lets you divide an image into two regions: a selected
object and everything else. The task takes a location in an image, estimates the
boundaries of an object at that location, and returns image data defining the
area of the object. You can use this task to interactively select an object in
an image and use the output to apply effects to the image, such as color
overlays highlighting the object or blurring the background around it. This task
operates on image data with a machine learning (ML) model and you can use it on
single images, video files, or a continuous video stream.

[Try it!arrow\_forward](https://google-ai-edge.github.io/mediapipe-samples-web/#/vision/interactive_segmenter)

## Get Started

Start using this task by following one of these implementation guides for your
target platform. These platform-specific guides walk you through a basic
implementation of this task, including a recommended model, and code example
with recommended configuration options:

* **Android** -
  [Code example](https://github.com/googlesamples/mediapipe/blob/main/examples/interactive_segmentation/android) -
  [Guide](https://developers.google.com/edge/mediapipe/solutions/vision/interactive_segmenter/android)
* **Python** -
  [Code example](https://colab.sandbox.google.com/github/googlesamples/mediapipe/blob/main/examples/interactive_segmentation/python/interactive_segmenter.ipynb) -
  [Guide](https://developers.google.com/edge/mediapipe/solutions/vision/interactive_segmenter/python)
* **Web** -
  [Code example](https://github.com/google-ai-edge/mediapipe-samples-web/blob/main/src/tasks/interactive-segmenter.ts) -
  [Guide](https://developers.google.com/edge/mediapipe/solutions/vision/interactive_segmenter/web_js)

## Task details

This section describes the capabilities, inputs, outputs, and configuration
options of this task.

### Features

* **Input image processing** - Processing includes image rotation, resizing,
  normalization, and color space conversion.

| Task inputs | Task outputs |
| --- | --- |
| * Point of interest coordinates for an object in an image * Image file to be processed | Interactive Image Segmenter outputs segmented image data, which can include one or both of the following, depending on the configuration options you set:    * `CATEGORY_MASK`: a list containing a segmented mask   as a uint8 format image. Each pixel value indicates if it is part of the   object located at the area of interest.  * `CONFIDENCE_MASK`: a list of channels containing a   segmented mask with pixel values in float32 format. Each pixel value   indicates the level of confidence that it is part of the object located   at the area of interest. |

### Configurations options

This task has the following configuration options:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `output_category_mask` | If set to `True`, the output includes a segmentation mask as a uint8 image, where each pixel value indicates if the pixel is part of the object located at the area of interest. | {`True, False`} | `False` |
 `output_confidence_masks` | If set to `True`, the output includes a segmentation mask as a float value image, where each float value represents the confidence that the pixel is part of the object located at the area of interest. | {`True, False`} | `True` || `display_names_locale` | Sets the language of labels to use for display names provided in the metadata of the task's model, if available. Default is `en` for English. You can add localized labels to the metadata of a custom model using the [TensorFlow Lite Metadata Writer API](https://ai.google.dev/edge/lite/models/metadata_writer_tutorial) Locale code | en | |

## Models

The Interactive Image Segmenter can be used with more than one ML model. Start with the
default, recommended model for your target platform when you start developing
with this task. The other available models typically make trade-offs between
performance, accuracy, resolution, and resource requirements, and in some cases,
include additional features.

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### MagicTouch model (recommended)

This model identifies segments given image coordinates for an area of interest.
The model uses a Convolutional Neural Network, similar to a
[MobileNetV3](https://www.kaggle.com/models?query=mobilenet-v3)
architecture, with a customized decoder.

| Model name | Input shape | Quantization type | Model Card | Versions |
| --- | --- | --- | --- | --- |
| [MagicTouch](https://storage.googleapis.com/mediapipe-models/interactive_segmenter/magic_touch/float32/latest/magic_touch.tflite) 512 x 512 x 4 | None (float32) | [info](https://storage.googleapis.com/mediapipe-assets/Model%20Card%20MagicTouch.pdf) | [Latest](https://storage.googleapis.com/mediapipe-models/interactive_segmenter/magic_touch/float32/latest/magic_touch.tflite) || |

## Task benchmarks

Here's the task benchmarks for the whole pipeline based on the above
pre-trained models. The latency result is the average latency on Pixel 6 using
CPU / GPU.

| Model Name | CPU Latency | GPU Latency |
| --- | --- | --- |
| MagicTouch | 130.11ms | 67.25ms ||






Send feedback