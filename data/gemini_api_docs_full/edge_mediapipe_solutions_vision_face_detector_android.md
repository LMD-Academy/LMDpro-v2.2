# Face detection guide for Android Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/mediapipe/solutions/vision/face_detector/android))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

The MediaPipe Face Detector task lets you detect faces in an image or video. You can use
this task to locate faces and facial features within a frame. This task uses a
machine learning (ML) model that works with single images or a continuous
stream of images. The task outputs face locations, along with the following
facial key points: left eye, right eye, nose tip, mouth, left eye tragion, and
right eye tragion.

The code sample described in these instructions is available
on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/face_detector/android).
For more information about the capabilities, models, and
configuration options of this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/vision/face_detector/index).

## Code example

The MediaPipe Tasks example code is a simple implementation of a Face Detector
app for Android. The example uses the camera on a physical Android device to
detect faces in a continuous video stream. The app can also detect faces in images and videos from the device gallery.

You can use the app as a starting point for your own Android app, or refer to it
when modifying an existing app. The Face Detector example code is hosted on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/face_detector).

### Download the code

The following instructions show you how to create a local copy of the example
code using the [git](https://git-scm.com/) command line tool.

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

To download the example code:

1. Clone the git repository using the following command:

   ```
   git clone https://github.com/google-ai-edge/mediapipe-samples
   ```
2. Optionally, configure your git instance to use sparse checkout,
   so you have only the files for the Face Detector example app:

   ```
   cd mediapipe-samples
   git sparse-checkout init --cone
   git sparse-checkout set examples/face_detector/android
   ```

After creating a local version of the example code, you can import the project
into Android Studio and run the app. For instructions, see the
[Setup Guide for Android](/mediapipe/solutions/setup_android#example_code).

### Key components

The following files contain the crucial code for this face detection example
application:

* [FaceDetectorHelper.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/face_detector/android/app/src/main/java/com/google/mediapipe/examples/facedetection/FaceDetectorHelper.kt) -
  Initializes the face detector and handles the model and delegate
  selection.
* [CameraFragment.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/face_detector/android/app/src/main/java/com/google/mediapipe/examples/facedetection/fragments/CameraFragment.kt) -
  Handles the device camera and processes the image and video input data.
* [GalleryFragment.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/face_detector/android/app/src/main/java/com/google/mediapipe/examples/facedetection/fragments/GalleryFragment.kt) -
  Interacts with `OverlayView` to display the output image or video.
* [OverlayView.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/face_detector/android/app/src/main/java/com/google/mediapipe/examples/facedetection/OverlayView.kt) -
  Implements the display with bounding boxes for detected faces.

## Setup

This section describes key steps for setting up your development environment and
code projects specifically to use Face Detector. For general information on
setting up your development environment for using MediaPipe tasks, including
platform version requirements, see the
[Setup guide for Android](/mediapipe/solutions/setup_android).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Dependencies

The Face Detector task uses the `com.google.mediapipe:tasks-vision`
library. Add this dependency to the `build.gradle` file of your Android app:

```
dependencies {
    implementation 'com.google.mediapipe:tasks-vision:latest.release'
}
```

### Model

The MediaPipe Face Detector task requires a trained model bundle that is compatible with
this task. For more information on available trained models for Face Detector,
see the task overview [Models section](https://developers.google.com/edge/mediapipe/solutions/vision/face_detector/index#models).

Select and download the model, and store it within your project directory:

```
<dev-project-root>/src/main/assets
```

Specify the path of the model within the `ModelAssetPath` parameter. In the
example code,
the model is defined in the [`FaceDetectorHelper.kt`](https://github.com/googlesamples/mediapipe/blob/main/examples/face_detector/android/app/src/main/java/com/google/mediapipe/examples/facedetection/FaceDetectorHelper.kt)
file:

```
val modelName = "face_detection_short_range.tflite"
baseOptionsBuilder.setModelAssetPath(modelName)
```

## Create the task

The MediaPipe Face Detector task uses the `createFromOptions()` function to set up the
task. The `createFromOptions()` function accepts values for the configuration
options. For more information on configuration options, see
[Configuration options](#configuration_options).

The Face Detector supports the following input data types: still images, video files, and
live video streams. You need to specify the running mode corresponding to your
input data type when creating the task. Choose the tab corresponding to your
input data type to see how to create the task and run inference.

### Image

```
val baseOptionsBuilder = BaseOptions.builder().setModelAssetPath(modelName)
val baseOptions = baseOptionBuilder.build()

val optionsBuilder =
    FaceDetector.FaceDetectorOptions.builder()
        .setBaseOptions(baseOptionsBuilder.build())
        .setMinDetectionConfidence(threshold)
        .setRunningMode(RunningMode.IMAGE)

val options = optionsBuilder.build()

FaceDetector =
    FaceDetector.createFromOptions(context, options)
```

### Video

```
val baseOptionsBuilder = BaseOptions.builder().setModelAssetPath(modelName)
val baseOptions = baseOptionBuilder.build()

val optionsBuilder =
    FaceDetector.FaceDetectorOptions.builder()
        .setBaseOptions(baseOptionsBuilder.build())
        .setMinDetectionConfidence(threshold)
        .setRunningMode(RunningMode.VIDEO)

val options = optionsBuilder.build()

FaceDetector =
    FaceDetector.createFromOptions(context, options)
```

### Live stream

```
val baseOptionsBuilder = BaseOptions.builder().setModelAssetPath(modelName)
val baseOptions = baseOptionBuilder.build()

val optionsBuilder =
    FaceDetector.FaceDetectorOptions.builder()
        .setBaseOptions(baseOptionsBuilder.build())
        .setMinDetectionConfidence(threshold)
        .setResultListener(this::returnLivestreamResult)
        .setErrorListener(this::returnLivestreamError)
        .setRunningMode(RunningMode.LIVE_STREAM)

val options = optionsBuilder.build()

FaceDetector =
    FaceDetector.createFromOptions(context, options)
```

**Note:** If you use the live stream mode, you’ll need to register a result listener
when creating the task. The task calls the listener when it finishes
processing a video frame, with the detection result and the input image as
parameters.**Note:** If you use the video mode or live stream mode, Face Detector uses tracking to
avoid triggering palm detection model on every frame, which helps reduce latency.

The Face Detector example code implementation allows the user to switch between
processing modes. The approach makes the task creation code more complicated and
may not be appropriate for your use case. You can see this code in the
`setupFaceDetector()` function in the
[`FaceDetectorHelper.kt`](https://github.com/googlesamples/mediapipe/blob/main/examples/face_detector/android/app/src/main/java/com/google/mediapipe/examples/facedetection/FaceDetectorHelper.kt)
file.

### Configuration options

This task has the following configuration options for Android apps:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `runningMode` | Sets the running mode for the task. There are three modes:    IMAGE: The mode for single image inputs.    VIDEO: The mode for decoded frames of a video.    LIVE\_STREAM: The mode for a livestream of input data, such as from a camera. In this mode, resultListener must be called to set up a listener to receive results asynchronously. | {`IMAGE, VIDEO, LIVE_STREAM`} | `IMAGE` |
| `minDetectionConfidence` | The minimum confidence score for the face detection to be considered successful. | `Float [0,1]` | `0.5` |
| `minSuppressionThreshold` | The minimum non-maximum-suppression threshold for face detection to be considered overlapped. | `Float [0,1]` | `0.3` |
| `resultListener` | Sets the result listener to receive the detection results asynchronously when the Face Detector is in the live stream mode. Can only be used when running mode is set to `LIVE_STREAM`. | `N/A` | `Not set` |
| `errorListener` | Sets an optional error listener. | `N/A` | `Not set` |

## Prepare data

Face Detector works with images, video file and live video streams. The task
handles the data input preprocessing, including resizing, rotation and value
normalization.

The following code demonstrates how to hand off data for processing. These
samples include details on how to handle data from images, video files, and live
video streams.

### Image

```
import com.google.mediapipe.framework.image.BitmapImageBuilder
import com.google.mediapipe.framework.image.MPImage

// Convert the input Bitmap object to an MPImage object to run inference
val mpImage = BitmapImageBuilder(image).build()
```

### Video

```
import com.google.mediapipe.framework.image.BitmapImageBuilder
import com.google.mediapipe.framework.image.MPImage

val argb8888Frame =
    if (frame.config == Bitmap.Config.ARGB_8888) frame
    else frame.copy(Bitmap.Config.ARGB_8888, false)

// Convert the input Bitmap object to an MPImage object to run inference
val mpImage = BitmapImageBuilder(argb8888Frame).build()
```

### Live stream

```
import com.google.mediapipe.framework.image.BitmapImageBuilder
import com.google.mediapipe.framework.image.MPImage

// Convert the input Bitmap object to an MPImage object to run inference
val mpImage = BitmapImageBuilder(rotatedBitmap).build()
```

In the
Face Detector example code, the data preparation is handled in the
[`FaceDetectorHelper.kt`](https://github.com/googlesamples/mediapipe/blob/main/examples/face_detector/android/app/src/main/java/com/google/mediapipe/examples/facedetection/FaceDetectorHelper.kt)
file.

## Run the task

Depending on the type of data your are working with, use the
`faceDetector.detect...()` method that is specific to that data type. Use
`detect()` for individual images,
`detectForVideo()` for frames in video files, and
`detectAsync()` for video streams. When you are performing detections on a
video stream, make sure you run the detections on a separate thread to avoid
blocking the user interface thread.

The following code samples show simple examples of how to run Face Detector
in these different data modes:

### Image

```
val result = faceDetector.detect(mpImage)
```

### Video

```
val timestampMs = i * inferenceIntervalMs

faceDetector.detectForVideo(mpImage, timestampMs)
    .let { detectionResult ->
        resultList.add(detectionResult)
    }
```

### Live stream

```
val mpImage = BitmapImageBuilder(rotatedBitmap).build()
val frameTime = SystemClock.uptimeMillis()

faceDetector.detectAsync(mpImage, frameTime)
```

Note the following:

* When running in the video mode or the live stream mode, you must
  provide the timestamp of the input frame to the Face Detector task.
* When running in the image or the video mode, the Face Detector task
  blocks the current thread until it finishes processing the input image or
  frame. To avoid blocking the user interface, execute the processing in a
  background thread.
* When running in the live stream mode, the Face Detector task returns
  immediately and doesn’t block the current thread. It will invoke the result
  listener with the detection result every time it finishes processing an
  input frame. If the detection function is called when the Face Detector task
  is busy processing another frame, the task will ignore the new input frame.

In the
Face Detector example code, the `detect`, `detectForVideo`, and
`detectAsync` functions are defined in the
[`FaceDetectorHelper.kt`](https://github.com/googlesamples/mediapipe/blob/main/examples/face_detector/android/app/src/main/java/com/google/mediapipe/examples/facedetection/FaceDetectorHelper.kt)
file.

## Handle and display results

The Face Detector returns a `FaceDetectorResult` object for each detection
run. The result object contains bounding boxes for the detected faces and a
confidence score for each detected face.

The following shows an example of the output data from this task:

```
FaceDetectionResult:
  Detections:
    Detection #0:
      BoundingBox:
        origin_x: 126
        origin_y: 100
        width: 463
        height: 463
      Categories:
        Category #0:
          index: 0
          score: 0.9729152917861938
      NormalizedKeypoints:
        NormalizedKeypoint #0:
          x: 0.18298381567001343
          y: 0.2961040139198303
        NormalizedKeypoint #1:
          x: 0.3302789330482483
          y: 0.29289937019348145
        ... (6 keypoints for each face)
    Detection #1:
      BoundingBox:
        origin_x: 616
        origin_y: 193
        width: 430
        height: 430
      Categories:
        Category #0:
          index: 0
          score: 0.9251380562782288
      NormalizedKeypoints:
        NormalizedKeypoint #0:
          x: 0.6151331663131714
          y: 0.3713381886482239
        NormalizedKeypoint #1:
          x: 0.7460576295852661
          y: 0.38825345039367676
        ... (6 keypoints for each face)
```

The following image shows a visualization of the task output:

![Two children with bounding boxes around their faces](/static/mediapipe/images/solutions/face-detection-output.png)

For the image without bounding boxes, see the [original image](https://pixabay.com/photos/brother-sister-girl-family-boy-977170/).

The Face Detector example code demonstrates how to display the
results returned from the task, see the
[`OverlayView`](https://github.com/googlesamples/mediapipe/blob/main/examples/face_detector/android/app/src/main/java/com/google/mediapipe/examples/facedetection/OverlayView.kt)
class for more details.

Send feedback
