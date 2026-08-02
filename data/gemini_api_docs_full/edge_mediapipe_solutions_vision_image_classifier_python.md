# Image classification guide for Python Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/mediapipe/solutions/vision/image_classifier/python))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

The MediaPipe Image Classifier task lets you perform classification on images. You can use
this task to identify what an image represents among a set of categories defined
at training time. These instructions show you how to use the Image Classifier
with Python.

You can see this task in action by viewing the [Web
demo](https://google-ai-edge.github.io/mediapipe-samples-web/#/vision/image_classifier). For
more information about the capabilities, models, and configuration options of
this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/vision/image_classifier/index).

## Code example

The example code for Image Classifier provides a complete implementation of this
task in Python for your reference. This code helps you test this task and get
started on building your own image classifier. You can view, run, and edit the
Image Classifier [example
code](https://colab.research.google.com/github/googlesamples/mediapipe/blob/main/examples/image_classification/python/image_classifier.ipynb)
using just your web browser.

If you are implementing the Image Classifier for Raspberry Pi, refer to the
[Raspberry Pi example
app](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/image_classification/raspberry_pi).

## Setup

This section describes key steps for setting up your development environment and
code projects specifically to use Image Classifier. For general information on
setting up your development environment for using MediaPipe tasks, including
platform version requirements, see the [Setup guide for
Python](/mediapipe/solutions/setup_python).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Packages

The Image Classifier task the mediapipe pip package. You can install the
dependency with the following:

```
$ python -m pip install mediapipe
``` ### Imports

Import the following classes to access the Image Classifier task functions:

```python
import mediapipe as mp
from mediapipe.tasks import python
from mediapipe.tasks.python import vision
```

### Model

The MediaPipe Image Classifier task requires a trained model that is compatible with this
task. For more information on available trained models for Image Classifier, see
the task overview [Models section](https://developers.google.com/edge/mediapipe/solutions/vision/image_classifier/index#models).

Select and download a model, and then store it in a local directory. You can use
the recommended
[EfficientNet-Lite0](https://www.kaggle.com/models/tensorflow/efficientnet/tfLite/lite0-int8/2)
model.

```
model_path = '/absolute/path/to/efficientnet_lite0_int8_2.tflite'
```

Specify the path of the model within the Model Name parameter, as shown below:

```
base_options = BaseOptions(model_asset_path=model_path)
```

## Create the task

Use the `create_from_options` function to create the task. The
`create_from_options` function accepts configuration options including running
mode, display names locale, max number of results, confidence threshold,
category allow list, and deny list. For more information on configuration
options, see [Configuration Overview](#configuration).

The Image Classifier task supports 3 input data types: still images, video files
and live video streams. Choose the tab corresponding to your input data type to
see how to create the task and run inference.

### Image

```
import mediapipe as mp

BaseOptions = mp.tasks.BaseOptions
ImageClassifier = mp.tasks.vision.ImageClassifier
ImageClassifierOptions = mp.tasks.vision.ImageClassifierOptions
VisionRunningMode = mp.tasks.vision.RunningMode

options = ImageClassifierOptions(
    base_options=BaseOptions(model_asset_path='/path/to/model.tflite'),
    max_results=5,
    running_mode=VisionRunningMode.IMAGE)

with ImageClassifier.create_from_options(options) as classifier:
  # The classifier is initialized. Use it here.
  # ...
```

### Video

```
import mediapipe as mp

BaseOptions = mp.tasks.BaseOptions
ImageClassifier = mp.tasks.vision.ImageClassifier
ImageClassifierOptions = mp.tasks.vision.ImageClassifierOptions
VisionRunningMode = mp.tasks.vision.RunningMode

options = ImageClassifierOptions(
    base_options=BaseOptions(model_asset_path='/path/to/model.tflite'),
    max_results=5,
    running_mode=VisionRunningMode.VIDEO)

with ImageClassifier.create_from_options(options) as classifier:
  # The classifier is initialized. Use it here.
  # ...
```

### Live stream

```
import mediapipe as mp

BaseOptions = mp.tasks.BaseOptions
ImageClassifierResult = mp.tasks.vision.ImageClassifier.ImageClassifierResult
ImageClassifier = mp.tasks.vision.ImageClassifier
ImageClassifierOptions = mp.tasks.vision.ImageClassifierOptions
VisionRunningMode = mp.tasks.vision.RunningMode

def print_result(result: ImageClassifierResult, output_image: mp.Image, timestamp_ms: int):
    print('ImageClassifierResult result: {}'.format(result))

options = ImageClassifierOptions(
    base_options=BaseOptions(model_asset_path='/path/to/model.tflite'),
    running_mode=VisionRunningMode.LIVE_STREAM,
    max_results=5,
    result_callback=print_result)

with ImageClassifier.create_from_options(options) as classifier:
  # The classifier is initialized. Use it here.
  # ...
```

For a complete example of creating a Image Classifier for use with an image, see
the [code
example](https://colab.research.google.com/github/googlesamples/mediapipe/blob/main/examples/image_classification/python/image_classifier.ipynb#scrollTo=Iy4r2_ePylIa).

### Configuration options

This task has the following configuration options for Python applications:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `running_mode` | Sets the running mode for the task. There are three modes:    IMAGE: The mode for single image inputs.    VIDEO: The mode for decoded frames of a video.    LIVE\_STREAM: The mode for a livestream of input data, such as from a camera. In this mode, resultListener must be called to set up a listener to receive results asynchronously. | {`IMAGE, VIDEO, LIVE_STREAM`} | `IMAGE` |
| `display_names_locale` | Sets the language of labels to use for display names provided in the metadata of the task's model, if available. Default is `en` for English. You can add localized labels to the metadata of a custom model using the [TensorFlow Lite Metadata Writer API](https://ai.google.dev/edge/lite/models/metadata_writer_tutorial) | Locale code | en |
| `max_results` | Sets the optional maximum number of top-scored classification results to return. If < 0, all available results will be returned. | Any positive numbers | `-1` |
| `score_threshold` | Sets the prediction score threshold that overrides the one provided in the model metadata (if any). Results below this value are rejected. | Any float | Not set |
| `category_allowlist` | Sets the optional list of allowed category names. If non-empty, classification results whose category name is not in this set will be filtered out. Duplicate or unknown category names are ignored. This option is mutually exclusive with `category_denylist` and using both results in an error. | Any strings | Not set |
| `category_denylist` | Sets the optional list of category names that are not allowed. If non-empty, classification results whose category name is in this set will be filtered out. Duplicate or unknown category names are ignored. This option is mutually exclusive with `category_allowlist` and using both results in an error. | Any strings | Not set |
| `result_callback` | Sets the result listener to receive the classification results asynchronously when the Image Classifier is in the live stream mode. Can only be used when running mode is set to `LIVE_STREAM` | N/A | Not set |

## Prepare data

Prepare your input as an image file or a numpy array, then convert it to a
`mediapipe.Image` object. If your input is a video file or live stream from a
webcam, you can use an external library such as
[OpenCV](https://github.com/opencv/opencv) to load your input frames as numpy
arrays.

**Note:** The Image Classifier task automatically resizes, pads, and normalizes the
input image to match with the input requirement of its model.

The following examples explain and show how to prepare data for processing for
each of the available data types

### Image

```
import mediapipe as mp

# Load the input image from an image file.
mp_image = mp.Image.create_from_file('/path/to/image')

# Load the input image from a numpy array.
mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=numpy_image)
```

### Video

```
import mediapipe as mp

# Use OpenCV’s VideoCapture to load the input video.

# Load the frame rate of the video using OpenCV’s CV_CAP_PROP_FPS
# You’ll need it to calculate the timestamp for each frame.

# Loop through each frame in the video using VideoCapture#read()

# Convert the frame received from OpenCV to a MediaPipe’s Image object.
mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=numpy_frame_from_opencv)
```

### Live stream

```
import mediapipe as mp

# Use OpenCV’s VideoCapture to start capturing from the webcam.

# Create a loop to read the latest frame from the camera using VideoCapture#read()

# Convert the frame received from OpenCV to a MediaPipe’s Image object.
mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=numpy_frame_from_opencv)
```

## Run the task

You can call the classify function corresponding to your running mode to trigger
inferences. The Image Classifier API will return the possible categories for the
object within the input image or frame.

### Image

```
# Perform image classification on the provided single image.
classification_result = classifier.classify(mp_image)
```

### Video

```
# Calculate the timestamp of the current frame
frame_timestamp_ms = 1000 * frame_index / video_file_fps

# Perform image classification on the video frame.
classification_result = classifier.classify_for_video(mp_image, frame_timestamp_ms)
```

### Live stream

```
# Send the latest frame to perform image classification.
# Results are sent to the `result_callback` provided in the `ImageClassifierOptions`.
classifier.classify_async(mp_image, frame_timestamp_ms)
```

Note the following:

* When running in the video mode or the live stream mode, you must also
  provide the Image Classifier task the timestamp of the input frame.
* When running in the image or the video model, the Image Classifier task will
  block the current thread until it finishes processing the input image or
  frame.
* When running in the live stream mode, the Image Classifier task doesn’t block
  the current thread but returns immediately. It will invoke its result
  listener with the classification result every time it has finished
  processing an input frame. If the `classifyAsync` function is called when
  the Image Classifier task is busy processing another frame, the task ignores
  the new input frame.

For a complete example of creating a Image Classifier for use with an image, see
the [code
example](https://colab.research.google.com/github/googlesamples/mediapipe/blob/main/examples/image_classification/python/image_classifier.ipynb#scrollTo=Iy4r2_ePylIa).

## Handle and display results

Upon running inference, the Image Classifier task returns an
`ImageClassifierResult` object which contains the list of possible categories
for the objects within the input image or frame.

The following shows an example of the output data from this task:

```
ImageClassifierResult:
 Classifications #0 (single classification head):
  head index: 0
  category #0:
   category name: "/m/01bwb9"
   display name: "Passer domesticus"
   score: 0.91406
   index: 671
  category #1:
   category name: "/m/01bwbt"
   display name: "Passer montanus"
   score: 0.00391
   index: 670
```

This result has been obtained by running the [Bird Classifier](https://www.kaggle.com/models/google/aiy/tfLite/vision-classifier-birds-v1/3)
on:

![Close-up photograph of a house sparrow](/static/mediapipe/images/solutions/image-classifier.jpg)

The Image Classifier example code demonstrates how to display the classification
results returned from the task, see the [code
example](https://colab.research.google.com/github/googlesamples/mediapipe/blob/main/examples/image_classification/python/image_classifier.ipynb#scrollTo=Iy4r2_ePylIa)
for details.

Send feedback
