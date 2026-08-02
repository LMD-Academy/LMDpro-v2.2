# Image embedding guide for Python Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/mediapipe/solutions/vision/image_embedder/python))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

The MediaPipe Image Embedder task lets you convert image data into a numeric representation
to accomplish ML-related image processing tasks, such as comparing the
similarity of two images. These instructions show you how to use the
Image Embedder with Python.

For more information about the capabilities, models, and configuration options
of this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/vision/image_embedder/index).

## Code example

The example code for Image Embedder provides a complete implementation of this
task in Python for your reference. This code helps you test this task and get
started on building your own image embedder. You can view, run, and edit the
Image Embedder [example
code](https://colab.sandbox.google.com/github/googlesamples/mediapipe/blob/main/examples/image_embedder/python/image_embedder.ipynb)
using just your web browser with Google Colab. You can view the source code for
this example on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/image_embedder/python).

## Setup

This section describes key steps for setting up your development environment and
code projects specifically to use Image Embedder. For general information on
setting up your development environment for using MediaPipe tasks, including
platform version requirements, see the [Setup guide for
Python](/mediapipe/solutions/setup_python).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Packages

The Image Embedder task the mediapipe pip package. You can install the dependency
with the following:

```
$ python -m pip install mediapipe
```

### Imports

Import the following classes to access the Image Embedder task functions:

```
import mediapipe as mp
from mediapipe.tasks import python
from mediapipe.tasks.python import vision
```

### Model

The MediaPipe Image Embedder task requires a trained model that is compatible with this
task. For more information on available trained models for Image Embedder, see
the task overview [Models section](https://developers.google.com/edge/mediapipe/solutions/vision/image_embedder/index#models).

Select and download a model, and then store it in a local directory. You can use
the recommended
[MobileNetV3](https://storage.googleapis.com/mediapipe-tasks/image_embedder/mobilenet_v3_small_075_224_embedder.tflite)
model.

```
model_path = '/absolute/path/to/mobilenet_v3_small_075_224_embedder.tflite'
```

Specify the path of the model within the `model_asset_path` parameter, as shown below:

```
base_options = BaseOptions(model_asset_path=model_path)
```

## Create the task

You can use the `create_from_options` function to create the task. The
`create_from_options` function accepts configuration options to set the embedder
options. For more information on configuration options, see [Configuration
Overview](#configuration).

The Image Embedder task supports 3 input data types: still images, video files
and live video streams. Choose the tab corresponding to your input data type to
see how to create the task and run inference.

### Image

```
import mediapipe as mp

BaseOptions = mp.tasks.BaseOptions
ImageEmbedder = mp.tasks.vision.ImageEmbedder
ImageEmbedderOptions = mp.tasks.vision.ImageEmbedderOptions
VisionRunningMode = mp.tasks.vision.RunningMode

options = ImageEmbedderOptions(
    base_options=BaseOptions(model_asset_path='/path/to/model.tflite'),
    quantize=True,
    running_mode=VisionRunningMode.IMAGE)

with ImageEmbedder.create_from_options(options) as embedder:
  # The embedder is initialized. Use it here.
  # ...
```

### Video

```
import mediapipe as mp

BaseOptions = mp.tasks.BaseOptions
ImageEmbedder = mp.tasks.vision.ImageEmbedder
ImageEmbedderOptions = mp.tasks.vision.ImageEmbedderOptions
VisionRunningMode = mp.tasks.vision.RunningMode

options = ImageEmbedderOptions(
    base_options=BaseOptions(model_asset_path='/path/to/model.tflite'),
    quantize=True,
    running_mode=VisionRunningMode.VIDEO)

with ImageEmbedder.create_from_options(options) as embedder:
  # The embedder is initialized. Use it here.
  # ...
```

### Live stream

```
import mediapipe as mp

BaseOptions = mp.tasks.BaseOptions
ImageEmbedderResult = mp.tasks.vision.ImageEmbedder.ImageEmbedderResult
ImageEmbedder = mp.tasks.vision.ImageEmbedder
ImageEmbedderOptions = mp.tasks.vision.ImageEmbedderOptions
VisionRunningMode = mp.tasks.vision.RunningMode

def print_result(result: ImageEmbedderResult, output_image: mp.Image, timestamp_ms: int):
    print('ImageEmbedderResult result: {}'.format(result))

options = ImageEmbedderOptions(
    base_options=BaseOptions(model_asset_path='/path/to/model.tflite'),
    running_mode=VisionRunningMode.LIVE_STREAM,
    quantize=True,
    result_callback=print_result)

with ImageEmbedder.create_from_options(options) as embedder:
  # The embedder is initialized. Use it here.
  # ...
```

### Configuration options

This task has the following configuration options for Python applications:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `running_mode` | Sets the running mode for the task. There are three modes:    IMAGE: The mode for single image inputs.    VIDEO: The mode for decoded frames of a video.    LIVE\_STREAM: The mode for a livestream of input data, such as from a camera. In this mode, resultListener must be called to set up a listener to receive results asynchronously. | {`IMAGE, VIDEO, LIVE_STREAM`} | `IMAGE` |
| `l2_normalize` | Whether to normalize the returned feature vector with L2 norm. Use this option only if the model does not already contain a native L2\_NORMALIZATION TFLite Op. In most cases, this is already the case and L2 normalization is thus achieved through TFLite inference with no need for this option. | `Boolean` | `False` |
| `quantize` | Whether the returned embedding should be quantized to bytes via scalar quantization. Embeddings are implicitly assumed to be unit-norm and therefore any dimension is guaranteed to have a value in [-1.0, 1.0]. Use the l2\_normalize option if this is not the case. | `Boolean` | `False` |
| `result_callback` | Sets the result listener to receive the embedding results asynchronously when the Image Embedder is in the live stream mode. Can only be used when running mode is set to `LIVE_STREAM` | N/A | Not set |

## Prepare data

Prepare your input as an image file or a numpy array, then convert it to a
`mediapipe.Image` object. If your input is a video file or live stream from a
webcam, you can use an external library such as
[OpenCV](https://github.com/opencv/opencv) to load your input frames as numpy
arrays.

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

**Note:** The Image Embedder task automatically resizes, pads, and normalizes the
input image to match with the input requirement of its model.

## Run the task

You can call the embed function corresponding to your running mode to trigger
inferences. The Image Embedder API will return the embedding vectors for the
input image or frame.

### Image

```
# Perform image embedding on the provided single image.
embedding_result = embedder.embed(mp_image)
```

### Video

```
# Calculate the timestamp of the current frame
frame_timestamp_ms = 1000 * frame_index / video_file_fps

# Perform image embedding on the video frame.
embedding_result = embedder.embed_for_video(mp_image, frame_timestamp_ms)
```

### Live stream

```
# Send the latest frame to perform image embedding.
# Results are sent to the `result_callback` provided in the `ImageEmbedderOptions`.
embedder.embed_async(mp_image, frame_timestamp_ms)
```

Note the following:

* When running in the video mode or the live stream mode, you must also
  provide the Image Embedder task the timestamp of the input frame.
* When running in the image or the video model, the Image Embedder task will
  block the current thread until it finishes processing the input image or
  frame.
* When running in the live stream mode, the Image Embedder task doesn’t block
  the current thread but returns immediately. It will invoke its result
  listener with the embedding result every time it has finished processing an
  input frame. If the `embedAsync` function is called when the Image Embedder
  task is busy processing another frame, the task ignores the new input frame.

## Handle and display results

Upon running inference, the Image Embedder task returns an `ImageEmbedderResult`
object which contains the list of possible categories for the objects within the
input image or frame.

The following shows an example of the output data from this task:

```
ImageEmbedderResult:
  Embedding #0 (sole embedding head):
    float_embedding: {0.0, 0.0, ..., 0.0, 1.0, 0.0, 0.0, 2.0}
    head_index: 0
```

This result was obtained by embedding the following image:

![Medium shot of an exotic cat](/static/mediapipe/images/solutions/image-embedder.jpg)

You can compare the similarity of two embeddings using the
`ImageEmbedder.cosine_similarity` function. See the following code for an
example.

```
# Compute cosine similarity.
similarity = ImageEmbedder.cosine_similarity(
  embedding_result.embeddings[0],
  other_embedding_result.embeddings[0])
```

Send feedback
