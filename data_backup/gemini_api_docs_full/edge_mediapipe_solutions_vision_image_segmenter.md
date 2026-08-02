--- source: https://ai.google.dev/edge/mediapipe/solutions/vision/image_segmenter ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [MediaPipe](https://developers.google.com/edge/mediapipe/solutions/guide)

Send feedback

# Image segmentation guide Stay organized with collections Save and categorize content based on your preferences.



![Side-by-side examples of a close-up photograph of a man next to the image mask outlining the shape of the man](/static/mediapipe/images/solutions/examples/image_segmentation.png)

The MediaPipe Image Segmenter task lets you divide images into regions based on predefined
categories. You can use this functionality to identify specific objects or
textures, and then apply visual effects such as background blurring. This task
includes several models specifically trained for segmenting people and their
features within image data, including:

* Person and background
* Person's hair only
* Person's hair, face, skin, clothing, and accessories

This task operates on image data with a machine learning (ML) model with single
images or a continuous video stream. It outputs a list of segmented regions,
representing objects or areas in an image, depending on the [model](#models) you
choose.

[Try it!arrow\_forward](https://google-ai-edge.github.io/mediapipe-samples-web/#/vision/image_segmenter)

## Get Started

Start using this task by following one of these implementation guides for your
target platform. These platform-specific guides walk you through a basic
implementation of this task, including a recommended model, and code example
with recommended configuration options:

* **Android** - [Code
  example](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/image_segmentation/android) - [Guide](https://developers.google.com/edge/mediapipe/solutions/vision/image_segmenter/android)
* **Python** - [Code example](https://colab.research.google.com/github/googlesamples/mediapipe/blob/main/examples/image_segmentation/python/image_segmentation.ipynb)
  [Guide](https://developers.google.com/edge/mediapipe/solutions/vision/image_segmenter/python)
* **Web** - [Code
  example](https://github.com/google-ai-edge/mediapipe-samples-web/blob/main/src/tasks/image-segmenter.ts) - [Guide](https://developers.google.com/edge/mediapipe/solutions/vision/image_segmenter/web_js)

## Task details

This section describes the capabilities, inputs, outputs, and configuration
options of this task.

### Features

* **Input image processing** - Processing includes image rotation, resizing,
  normalization, and color space conversion.

| Task inputs | Task outputs |
| --- | --- |
| Input can be one of the following data types:   * Still images  * Decoded video frames  * Live video feed | Image Segmenter outputs segmented image data, which can include one or both of the following, depending on the configuration options you set:    * `CATEGORY_MASK`: a list containing a segmented mask   as a uint8 format image. Each pixel value indicates if it is part of a specific segment category supported by the model.  * `CONFIDENCE_MASK`: a list of channels containing a   segmented mask with pixel values in float32 format. Each pixel value indicates the level of confidence that it is part of a specific category   supported by the model. |

### Configurations options

This task has the following configuration options:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
||  |  |  |  |
| --- | --- | --- | --- |
| `running_mode` | Sets the running mode for the task. There are three modes:    IMAGE: The mode for single image inputs.    VIDEO: The mode for decoded frames of a video.    LIVE\_STREAM: The mode for a livestream of input data, such as from a camera. In this mode, resultListener must be called to set up a listener to receive results asynchronously. | {`IMAGE, VIDEO, LIVE_STREAM`} | `IMAGE` |
| `output_category_mask` | If set to `True`, the output includes a segmentation mask as a uint8 image, where each pixel value indicates the winning category value. | {`True, False`} | `False` |
 `output_confidence_masks` | If set to `True`, the output includes a segmentation mask as a float value image, where each float value represents the confidence score map of the category. | {`True, False`} | `True` |
| `display_names_locale` | Sets the language of labels to use for display names provided in the metadata of the task's model, if available. Default is `en` for English. You can add localized labels to the metadata of a custom model using the [TensorFlow Lite Metadata Writer API](https://www.tensorflow.org/lite/models/convert/metadata_writer_tutorial) | Locale code | en |
| `result_callback` | Sets the result listener to receive the segmentation results asynchronously when the image segmenter is in the `LIVE_STREAM` mode. Can only be used when running mode is set to `LIVE_STREAM` | N/A | N/A |

## Models

The Image Segmenter can be used with more than one ML model. Most of the following
segmentation models are built and trained to perform segmentation with images of
people. However, the [DeepLab-v3](#deeplab-v3)  model is built as a general
purpose image segmenter. Select the model that fits best for your application.

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Selfie segmentation model

This model can segment the portrait of a person, and can be used for replacing
or modifying the background in an image. The model output two categories,
background at index 0 and person at index 1. This model has versions with
different input shapes including square version and a landscape version which
may be more efficient for applications where the input is always that shape,
such as video calls.

| Model name | Input shape | Quantization type | Model Card | Versions |
| --- | --- | --- | --- | --- |
| [SelfieSegmenter (square)](https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_segmenter/float16/latest/selfie_segmenter.tflite) | 256 x 256 | float 16 | [info](https://storage.googleapis.com/mediapipe-assets/Model%20Card%20MediaPipe%20Selfie%20Segmentation.pdf) | [Latest](https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_segmenter/float16/latest/selfie_segmenter.tflite) |
| [SelfieSegmenter (landscape)](https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_segmenter_landscape/float16/latest/selfie_segmenter_landscape.tflite) | 144 x 256 | float 16 | [info](https://storage.googleapis.com/mediapipe-assets/Model%20Card%20MediaPipe%20Selfie%20Segmentation.pdf) | [Latest](https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_segmenter_landscape/float16/latest/selfie_segmenter_landscape.tflite) |

### Hair segmentation model

This model takes an image of a person, locates the hair on their head, and
outputs a image segmentation map for their hair. You can use this model for
recoloring hair or applying other hair effects. The model outputs the following
segmentation categories:

```
0 - background
1 - hair
```

| Model name | Input shape | Quantization type | Model Card | Versions |
| --- | --- | --- | --- | --- |
| [HairSegmenter](https://storage.googleapis.com/mediapipe-models/image_segmenter/hair_segmenter/float32/latest/hair_segmenter.tflite) 512 x 512 | None (float32) | [info](https://storage.googleapis.com/mediapipe-assets/Model%20Card%20-%20Hair%20Segmentation.pdf) | [Latest](https://storage.googleapis.com/mediapipe-models/image_segmenter/hair_segmenter/float32/latest/hair_segmenter.tflite) | |

### Multi-class selfie segmentation model

This model takes an image of a person, locates areas for different areas such as
hair, skin, and clothing, and outputs an image segmentation map for these items.
You can use this model for applying various effects to people in images or
video. The model outputs the following segmentation categories:

```
0 - background
1 - hair
2 - body-skin
3 - face-skin
4 - clothes
5 - others (accessories)
```

| Model name | Input shape | Quantization type | Model Card | Versions |
| --- | --- | --- | --- | --- |
| [SelfieMulticlass (256 x 256)](https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_multiclass_256x256/float32/latest/selfie_multiclass_256x256.tflite) | 256 x 256 | None (float32) | [info](https://storage.googleapis.com/mediapipe-assets/Model%20Card%20Multiclass%20Segmentation.pdf) | [Latest](https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_multiclass_256x256/float32/latest/selfie_multiclass_256x256.tflite) |

### DeepLab-v3 model

This model identifies segments for a number of categories, including background,
person, cat, dog, and potted plant. The model uses atrous spatial pyramid
pooling to capture longer range information. For more information, see
[DeepLab-v3](https://tfhub.dev/tensorflow/lite-model/deeplabv3/latest/metadata/2).

| Model name | Input shape | Quantization type | Versions |
| --- | --- | --- | --- |
| [DeepLab-V3](https://storage.googleapis.com/mediapipe-models/image_segmenter/deeplab_v3/float32/latest/deeplab_v3.tflite) | 257 x 257 | None (float32) | [Latest](https://storage.googleapis.com/mediapipe-models/image_segmenter/deeplab_v3/float32/latest/deeplab_v3.tflite) |

## Task benchmarks

Here's the task benchmarks for the whole pipeline based on the above pre-trained
models. The latency result is the average latency on Pixel 6 using CPU / GPU.

| Model Name | CPU Latency | GPU Latency |
| --- | --- | --- |
| SelfieSegmenter (square) | 33.46ms | 35.15ms |
| SelfieSegmenter (landscape) | 34.19ms | 33.55ms |
| HairSegmenter | 57.90ms | 52.14ms |
| SelfieMulticlass (256 x 256) | 217.76ms | 71.24ms |
| DeepLab-V3 | 123.93ms | 103.30ms |






Send feedback