# Interactive image segmentation guide for Python Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/mediapipe/solutions/vision/interactive_segmenter/python))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

The MediaPipe Interactive Image Segmenter task takes a location in an image, estimates the boundaries of
an object at that location, and returns the segmentation for the object as image
data. These instructions show you how to use the Interactive Image Segmenter with the Python
language. For more information about the capabilities, models, and configuration
options of this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/vision/interactive_segmenter/index).

## Code example

The example code for Interactive Image Segmenter provides a complete implementation of this
task in Python for your reference. This code helps you test this task and get
started on building your own interactive image segmentation application. You can
view, run, and edit the Interactive Image Segmenter
[example code](https://colab.research.google.com/github/googlesamples/mediapipe/blob/main/examples/interactive_segmentation/python/interactive_segmenter.ipynb)
using just your web browser.

## Setup

This section describes key steps for setting up your development environment and
code projects specifically to use Interactive Image Segmenter. For general information on
setting up your development environment for using MediaPipe tasks, including
platform version requirements, see the
[Setup guide for Python](/mediapipe/solutions/setup_python).
You can review the source code for this example on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/interactive_segmentation/python)

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Packages

The MediaPipe Interactive Image Segmenter task requires the `mediapipe` package. You can install the
required dependencies with the following command:

```
$ python -m pip install mediapipe
```

### Imports

Import the following classes to access the Interactive Image Segmenter task functions:

```
import mediapipe as mp
from mediapipe.tasks import python
from mediapipe.tasks.python import vision
```

### Model

The MediaPipe Interactive Image Segmenter task requires a trained model that is compatible with this
task. For more information on available trained models for Interactive Image Segmenter, see
the task overview [Models](https://developers.google.com/edge/mediapipe/solutions/vision/interactive_segmenter/index#models) section.

Select and download the model, and then store it within your project directory:

```
model_path = '/absolute/path/to/model.tflite'
```

Specify the path of the model within the `model_asset_path` parameter, as shown
below:

```
base_options = BaseOptions(model_asset_path=model_path)
```

## Create the task

The MediaPipe Interactive Image Segmenter task uses the `create_from_options` function to
set up the task. The `create_from_options` function accepts values
for configuration options to handle. For more information on configuration
options, see [Configuration options](#configuration_options).
The following code demonstrates how to build and configure this task.

```
BaseOptions = mp.tasks.BaseOptions
InteractiveSegmenter = mp.tasks.vision.InteractiveSegmenter
InteractiveSegmenterOptions = mp.tasks.vision.InteractiveSegmenterOptions
VisionRunningMode = mp.tasks.vision.RunningMode

# Create a image segmenter instance with the image mode:
options = InteractiveSegmenterOptions(
    base_options=BaseOptions(model_asset_path='/path/to/model.task'),
    running_mode=VisionRunningMode.IMAGE,
    output_type=InteractiveSegmenterOptions.OutputType.CATEGORY_MASK)
with InteractiveSegmenter.create_from_options(options) as segmenter:
# segmenter is initialized and ready to use
```

### Configuration options

This task has the following configuration options for Python applications:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `output_category_mask` | If set to `True`, the output includes a segmentation mask as a uint8 image, where each pixel value indicates if the pixel is part of the object located at the area of interest. | {`True, False`} | `False` |
 `output_confidence_masks` | If set to `True`, the output includes a segmentation mask as a float value image, where each float value represents the confidence that the pixel is part of the object located at the area of interest. | {`True, False`} | `True` || `display_names_locale` | Sets the language of labels to use for display names provided in the metadata of the task's model, if available. Default is `en` for English. You can add localized labels to the metadata of a custom model using the [TensorFlow Lite Metadata Writer API](https://ai.google.dev/edge/lite/models/metadata_writer_tutorial) Locale code | en | |

## Prepare data

Prepare your input as an image file or a numpy array,
then convert it to a `mediapipe.Image` object.

```
# Load the input image from an image file.
mp_image = mp.Image.create_from_file('/path/to/image')

# Load the input image from a numpy array.
mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=numpy_image)
```

For a code example showing preparation of data for Interactive Image Segmenter, see the
[code example](https://colab.research.google.com/github/googlesamples/mediapipe/blob/main/examples/interactive_segmentation/python/interactive_segmenter.ipynb).

## Run the task

The Interactive Image Segmenter uses the `segment` function to trigger inferences. For image
segmentation, this includes preprocessing input data, running segmentation model
and postprocessing the raw model outputs to the segmented masks.

The following code example shows how to execute processing with the task model.

```
RegionOfInterest = vision.InteractiveSegmenterRegionOfInterest
# Perform image segmentation on the provided single image.
# The image segmenter must be created with the image mode.
roi = RegionOfInterest(format=RegionOfInterest.Format.KEYPOINT,
                          keypoint=NormalizedKeypoint(x, y))
segmented_masks = segmenter.segment(mp_image, roi)
```

For a more complete example of running Interactive Image Segmenter inferences, see the
[code example](https://colab.research.google.com/github/googlesamples/mediapipe/blob/main/examples/interactive_segmentation/python/interactive_segmenter.ipynb).

## Handle and display results

The output results for Interactive Image Segmenter is a list of `Image` data, and may
include a category mask, confidence masks, or both, depending on what you set
when you [configured](#configuration_options) the task. If you set
`output_category_mask` to `True`, the output is a list containing single
segmented mask as an uint8 image. The pixel value indicates if it is part of the
object at the area of interest. recognized category index of the input image. If
you set `output_confidence_masks` to `True`, the output is a list of channels
containing pixel values within the range `[0,1]` representing the confidence
score of the pixel belonging to the object at the area of interest.

The following sections further explain the output data from this task:

### Category mask

The following images show a visualization of the task output for a category
value mask with a point area of interest indicated. Each pixel is a `uint8`
value indicating if the pixel is part of the object located at the area of
interest. The black and white circle on the second image indicates the selected
area of interest.

![A dog standing amidst a pile of leaves](https://developers.google.com/edge/mediapipe/images/solutions/interactive-segmenter-input.jpg)
![The outlined shape of the dog from the previous image](https://developers.google.com/edge/mediapipe/images/solutions/interactive-segmenter-output-cate-mask.png)

**Original image and category mask output. Source image from the
[Pascal VOC 2012](https://www.kaggle.com/datasets/huanghanchina/pascal-voc-2012)
dataset.**

### Confidence mask

The output for a confidence mask contains float values between `[0, 1]` for
each image input channel. Higher values indicate a higher confidence that
the image pixel is part of the object located at the area of interest.

Send feedback
