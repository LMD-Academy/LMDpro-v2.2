--- source: https://ai.google.dev/edge/mediapipe/solutions/vision/object_detector/python ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [MediaPipe](https://developers.google.com/edge/mediapipe/solutions/guide)

Send feedback

# Object detection guide for Python Stay organized with collections Save and categorize content based on your preferences.



The MediaPipe Object Detector task lets you detect the presence and location of multiple
classes of objects. These instructions show you how to use the Object Detector
task in Python. The code example described in these instructions is available on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/object_detection/python).

You can see this task in action by viewing the [Web demo](https://google-ai-edge.github.io/mediapipe-samples-web/#/vision/object_detector). For more information about the capabilities, models, and
configuration options of this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/vision/object_detector/index).

## Code example

The example code for Object Detector provides a complete implementation of this
task in Python for your reference. This code helps you test this task and get
started on building your own text classification app. You can view, run, and
edit the [Object Detector example code](https://colab.research.google.com/github/googlesamples/mediapipe/blob/main/examples/object_detection/python/object_detector.ipynb)
using just your web browser.

If you are implementing the Object Detector for Raspberry Pi, refer to the
[Raspberry Pi example
app](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/object_detection/raspberry_pi).

## Setup

This section describes key steps for setting up your development environment and
code projects specifically to use Object Detector. For general information on
setting up your development environment for using MediaPipe tasks, including
platform version requirements, see the
[Setup guide for Python](/edge/mediapipe/solutions/setup_python).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Packages

The Object Detector task requires the mediapipe pip package. You can install the
required packages with the following commands:

```
$ python -m pip install mediapipe
```

### Imports

Import the following classes to access the Object Detector task functions:

```
import mediapipe as mp
from mediapipe.tasks import python
from mediapipe.tasks.python import vision
```

### Model

The MediaPipe Object Detector task requires a trained model that is compatible with this
task. For more information on available trained models for Object Detector, see
the task overview [Models section](https://developers.google.com/edge/mediapipe/solutions/vision/object_detector/index#models).

Select and download a model, and then store it in a local directory:

```
model_path = '/absolute/path/to/lite-model_efficientdet_lite0_detection_metadata_1.tflite'
```

Use the `BaseOptions` object `model_asset_path` parameter to specify the path
of the model to use. For a code example, see the next section.

## Create the task

Use the `create_from_options` function to create the task. The
`create_from_options` function accepts configuration options including running
mode, display names locale, max number of results, confidence threshold,
category allow list, and deny list. If you do not set a configuration option,
the task uses the default value. For more information on configuration options,
see [Configuration options](#configuration) section.

The Object Detector task supports several input data types: still images, video
files and live video streams. Choose the tab corresponding to your input data
type to see how to create the task and run inference.

### Image

```
import mediapipe as mp

BaseOptions = mp.tasks.BaseOptions
ObjectDetector = mp.tasks.vision.ObjectDetector
ObjectDetectorOptions = mp.tasks.vision.ObjectDetectorOptions
VisionRunningMode = mp.tasks.vision.RunningMode

options = ObjectDetectorOptions(
    base_options=BaseOptions(model_asset_path='/path/to/model.tflite'),
    max_results=5,
    running_mode=VisionRunningMode.IMAGE)

with ObjectDetector.create_from_options(options) as detector:
  # The detector is initialized. Use it here.
  # ...
```

### Video

```
import mediapipe as mp

BaseOptions = mp.tasks.BaseOptions
ObjectDetector = mp.tasks.vision.ObjectDetector
ObjectDetectorOptions = mp.tasks.vision.ObjectDetectorOptions
VisionRunningMode = mp.tasks.vision.RunningMode

options = ObjectDetectorOptions(
    base_options=BaseOptions(model_asset_path='/path/to/model.tflite'),
    max_results=5,
    running_mode=VisionRunningMode.VIDEO)

with ObjectDetector.create_from_options(options) as detector:
  # The detector is initialized. Use it here.
  # ...
```

### Live stream

```
import mediapipe as mp

BaseOptions = mp.tasks.BaseOptions
DetectionResult = mp.tasks.components.containers.detections.DetectionResult
ObjectDetector = mp.tasks.vision.ObjectDetector
ObjectDetectorOptions = mp.tasks.vision.ObjectDetectorOptions
VisionRunningMode = mp.tasks.vision.RunningMode

def print_result(result: DetectionResult, output_image: mp.Image, timestamp_ms: int):
    print('detection result: {}'.format(result))

options = ObjectDetectorOptions(
    base_options=BaseOptions(model_asset_path='/path/to/model.tflite'),
    running_mode=VisionRunningMode.LIVE_STREAM,
    max_results=5,
    result_callback=print_result)

with ObjectDetector.create_from_options(options) as detector:
  # The detector is initialized. Use it here.
  # ...
```

For a complete example of creating a Object Detector for use with an image, see the
[code example](https://colab.research.google.com/github/googlesamples/mediapipe/blob/main/examples/object_detection/python/object_detector.ipynb#scrollTo=Yl_Oiye4mUuo&line=2&uniqifier=1).

### Configuration options

This task has the following configuration options for Python applications:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `running_mode` | Sets the running mode for the task. There are three modes:    IMAGE: The mode for single image inputs.    VIDEO: The mode for decoded frames of a video.    LIVE\_STREAM: The mode for a livestream of input data, such as from a camera. In this mode, resultListener must be called to set up a listener to receive results asynchronously. | {`IMAGE, VIDEO, LIVE_STREAM`} | `IMAGE` |
| `display_names` | Sets the language of labels to use for display names provided in the metadata of the task's model, if available. Default is `en` for English. You can add localized labels to the metadata of a custom model using the [TensorFlow Lite Metadata Writer API](https://ai.google.dev/edge/lite/models/metadata_writer_tutorial) | Locale code | en |
| `max_results` | Sets the optional maximum number of top-scored detection results to return. | Any positive numbers | -1 (all results are returned) |
| `score_threshold` | Sets the prediction score threshold that overrides the one provided in the model metadata (if any). Results below this value are rejected. | Any float | Not set |
| `category_allowlist` | Sets the optional list of allowed category names. If non-empty, detection results whose category name is not in this set will be filtered out. Duplicate or unknown category names are ignored. This option is mutually exclusive with `category_denylist` and using both results in an error. | Any strings | Not set |
| `category_denylist` | Sets the optional list of category names that are not allowed. If non-empty, detection results whose category name is in this set will be filtered out. Duplicate or unknown category names are ignored. This option is mutually exclusive with `category_allowlist` and using both results in an error. | Any strings | Not set |

## Prepare data

Prepare your input as an image file or a numpy array,
then convert it to a `mediapipe.Image` object. If your input is a video file
or live stream from a webcam, you can use an external library such as
[OpenCV](https://github.com/opencv/opencv) to load your input frames as numpy
arrays.

**Note:** The Object Detector task automatically resizes, pads, and normalizes the
input image to match the input requirements of its model.

The following examples explain and show how to prepare data for processing
for each of the available data types:

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

You can call one of the detect functions to trigger inferences. The Object
Detector task will return the objects detected within the input image or frame.

### Image

```
# Perform object detection on the provided single image.
detection_result = detector.detect(mp_image)
```

### Video

```
# Calculate the timestamp of the current frame
frame_timestamp_ms = 1000 * frame_index / video_file_fps

# Perform object detection on the video frame.
detection_result = detector.detect_for_video(mp_image, frame_timestamp_ms)
```

### Live stream

```
# Send the latest frame to perform object detection.
# Results are sent to the `result_callback` provided in the `ObjectDetectorOptions`.
detector.detect_async(mp_image, frame_timestamp_ms)
```

For a complete example of running an Object Detector on an image, see the
[code example](https://colab.research.google.com/github/googlesamples/mediapipe/blob/main/examples/object_detection/python/object_detector.ipynb#scrollTo=Yl_Oiye4mUuo&line=2&uniqifier=1) for details.

Note the following:

* When running in the video mode or the live stream mode, you must also
  provide the Object Detector task the timestamp of the input frame.
* When running in the image or the video model, the Object Detector task will
  block the current thread until it finishes processing the input image or
  frame.
* When running in the live stream mode, the Object Detector task doesn’t block
  the current thread but returns immediately. It will invoke its result
  listener with the detection result every time it has finished processing an
  input frame. If the detect function is called when the Object Detector task
  is busy processing another frame, the new input frame will be ignored.

## Handle and display results

Upon running inference, the Object Detector task returns an
`ObjectDetectionResult` object which describes the objects that it has found in
the input image.

The following shows an example of the output data from this task:

```
ObjectDetectorResult:
 Detection #0:
  Box: (x: 355, y: 133, w: 190, h: 206)
  Categories:
   index       : 17
   score       : 0.73828
   class name  : dog
 Detection #1:
  Box: (x: 103, y: 15, w: 138, h: 369)
  Categories:
   index       : 17
   score       : 0.73047
   class name  : dog
```

The following image shows a visualization of the task output:

![Two dogs that are highlighted with bounding boxes](https://developers.google.com/edge/mediapipe/images/solutions/object-detection-output.png)

The Object Detector example code demonstrates how to display the detection
results returned from the task, see the
[code example](https://colab.research.google.com/github/googlesamples/mediapipe/blob/main/examples/object_detection/python/object_detector.ipynb#scrollTo=Yl_Oiye4mUuo&line=2&uniqifier=1)
for details.






Send feedback