# Face landmark detection guide for Android Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/mediapipe/solutions/vision/face_landmarker/android))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

The MediaPipe Face Landmarker task lets you detect face landmarks and facial expressions in
images and videos. You can use this task to identify human facial expressions,
apply facial filters and effects, and create virtual avatars. This task uses
machine learning (ML) models that can work with single images or a continuous
stream of images. The task outputs 3-dimensional face landmarks, blendshape
scores (coefficients representing facial expression) to infer detailed facial
surfaces in real-time, and transformation matrices to perform the
transformations required for effects rendering.

The code sample described in these instructions is available on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/face_landmarker/android).
For more information about the capabilities, models, and configuration options
of this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/vision/face_landmarker/index).

## Code example

The MediaPipe Tasks example code is a simple implementation of a Face Landmarker
app for Android. The example uses the camera on a physical Android device to
detect faces in a continuous video stream. The app can also detect faces in
images and videos from the device gallery.

You can use the app as a starting point for your own Android app, or refer to it
when modifying an existing app. The Face Landmarker example code is hosted on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/face_landmarker).

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
2. Optionally, configure your git instance to use sparse checkout, so you have
   only the files for the Face Landmarker example app:

   ```
   cd mediapipe-samples
   git sparse-checkout init --cone
   git sparse-checkout set examples/face_landmarker/android
   ```

After creating a local version of the example code, you can import the project
into Android Studio and run the app. For instructions, see the [Setup Guide for
Android](/mediapipe/solutions/setup_android#example_code).

### Key components

The following files contain the crucial code for this face landmarking example
application:

* [FaceLandmarkerHelper.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/face_landmarker/android/app/src/main/java/com/google/mediapipe/examples/facelandmarker/FaceLandmarkerHelper.kt) - Initializes the face landmarker and handles the model and delegate
  selection.
* [CameraFragment.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/face_landmarker/android/app/src/main/java/com/google/mediapipe/examples/facelandmarker/fragment/CameraFragment.kt) - Handles the device camera and processes the image and video input data.
* [GalleryFragment.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/face_landmarker/android/app/src/main/java/com/google/mediapipe/examples/facelandmarker/fragment/GalleryFragment.kt) - Interacts with `OverlayView` to display the output image or video.
* [OverlayView.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/face_landmarker/android/app/src/main/java/com/google/mediapipe/examples/facelandmarker/OverlayView.kt) - Implements the display with a face mesh for detected faces.

## Setup

This section describes key steps for setting up your development environment and
code projects specifically to use Face Landmarker. For general information on
setting up your development environment for using MediaPipe tasks, including
platform version requirements, see the [Setup guide for
Android](/mediapipe/solutions/setup_android).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Dependencies

The Face Landmarker task uses the `com.google.mediapipe:tasks-vision` library. Add
this dependency to the `build.gradle` file of your Android app:

```
dependencies {
    implementation 'com.google.mediapipe:tasks-vision:latest.release'
}
```

### Model

The MediaPipe Face Landmarker task requires a trained model bundle that is compatible with
this task. For more information on available trained models for Face Landmarker,
see the task overview [Models section](https://developers.google.com/edge/mediapipe/solutions/vision/face_landmarker/index#models).

Select and download the model, and store it within your project directory:

```
<dev-project-root>/src/main/assets
```

Specify the path of the model within the `ModelAssetPath` parameter. In the
example code, the model is defined in the
[`FaceLandmarkerHelper.kt`](https://github.com/googlesamples/mediapipe/blob/main/examples/face_landmarker/android/app/src/main/java/com/google/mediapipe/examples/facelandmarker/FaceLandmarkerHelper.kt)
file:

```
baseOptionsBuilder.setModelAssetPath(MP_FACE_LANDMARKER_TASK)
```

## Create the task

The MediaPipe Face Landmarker task uses the `createFromOptions()` function to set up the
task. The `createFromOptions()` function accepts values for the configuration
options. For more information on configuration options, see [Configuration
options](#configuration_options).

The Face Landmarker supports the following input data types: still images, video
files, and live video streams. You need to specify the running mode
corresponding to your input data type when creating the task. Choose the tab
for your input data type to see how to create the task and run
inference.

### Image

```
val baseOptionsBuilder = BaseOptions.builder().setModelAssetPath(MP_FACE_LANDMARKER_TASK)
val baseOptions = baseOptionBuilder.build()

val optionsBuilder = 
    FaceLandmarker.FaceLandmarkerOptions.builder()
        .setBaseOptions(baseOptionsBuilder.build())
        .setMinFaceDetectionConfidence(minFaceDetectionConfidence)
        .setMinTrackingConfidence(minFaceTrackingConfidence)
        .setMinFacePresenceConfidence(minFacePresenceConfidence)
        .setNumFaces(maxNumFaces)
        .setRunningMode(RunningMode.IMAGE)

val options = optionsBuilder.build()
FaceLandmarker = FaceLandmarker.createFromOptions(context, options)
```

### Video

```
val baseOptionsBuilder = BaseOptions.builder().setModelAssetPath(MP_FACE_LANDMARKER_TASK)
val baseOptions = baseOptionBuilder.build()

val optionsBuilder = 
    FaceLandmarker.FaceLandmarkerOptions.builder()
        .setBaseOptions(baseOptionsBuilder.build())
        .setMinFaceDetectionConfidence(minFaceDetectionConfidence)
        .setMinTrackingConfidence(minFaceTrackingConfidence)
        .setMinFacePresenceConfidence(minFacePresenceConfidence)
        .setNumFaces(maxNumFaces)
        .setRunningMode(RunningMode.VIDEO)

val options = optionsBuilder.build()
FaceLandmarker = FaceLandmarker.createFromOptions(context, options)
```

### Live stream

```
val baseOptionsBuilder = BaseOptions.builder().setModelAssetPath(MP_FACE_LANDMARKER_TASK)
val baseOptions = baseOptionBuilder.build()

val optionsBuilder = 
    FaceLandmarker.FaceLandmarkerOptions.builder()
        .setBaseOptions(baseOptionsBuilder.build())
        .setMinFaceDetectionConfidence(minFaceDetectionConfidence)
        .setMinTrackingConfidence(minFaceTrackingConfidence)
        .setMinFacePresenceConfidence(minFacePresenceConfidence)
        .setNumFaces(maxNumFaces)
        .setResultListener(this::returnLivestreamResult)
        .setErrorListener(this::returnLivestreamError)
        .setRunningMode(RunningMode.LIVE_STREAM)

val options = optionsBuilder.build()
FaceLandmarker = FaceLandmarker.createFromOptions(context, options)
```

**Note:** If you use the live stream mode, you’ll need to register a result listener
when creating the task. The task calls the listener when it finishes processing
a camera frame, with the detection result and the input image as parameters.**Note:** If you use the video mode or live stream mode, Face Landmarker uses tracking
to avoid triggering detection model on every frame, which helps reduce latency.

The Face Landmarker example code implementation allows the user to switch between
processing modes. The approach makes the task creation code more complicated and
may not be appropriate for your use case. You can see this code in the
`setupFaceLandmarker()` function in the
[`FaceLandmarkerHelper.kt`](https://github.com/googlesamples/mediapipe/blob/main/examples/face_landmarker/android/app/src/main/java/com/google/mediapipe/examples/facelandmarker/FaceLandmarkerHelper.kt)
file.

### Configuration options

This task has the following configuration options for Android apps:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `runningMode` | Sets the running mode for the task. There are three modes:    IMAGE: The mode for single image inputs.    VIDEO: The mode for decoded frames of a video.    LIVE\_STREAM: The mode for a livestream of input data, such as from a camera. In this mode, resultListener must be called to set up a listener to receive results asynchronously. | {`IMAGE, VIDEO, LIVE_STREAM`} | `IMAGE` |
| `numFaces` | The maximum number of faces that can be detected by the the `FaceLandmarker`. Smoothing is only applied when `num_faces` is set to 1. | `Integer > 0` | `1` |
| `minFaceDetectionConfidence` | The minimum confidence score for the face detection to be considered successful. | `Float [0.0,1.0]` | `0.5` |
| `minFacePresenceConfidence` | The minimum confidence score of face presence score in the face landmark detection. | `Float [0.0,1.0]` | `0.5` |
| `minTrackingConfidence` | The minimum confidence score for the face tracking to be considered successful. | `Float [0.0,1.0]` | `0.5` |
| `outputFaceBlendshapes` | Whether Face Landmarker outputs face blendshapes. Face blendshapes are used for rendering the 3D face model. | `Boolean` | `False` |
| `outputFacialTransformationMatrixes` | Whether FaceLandmarker outputs the facial transformation matrix. FaceLandmarker uses the matrix to transform the face landmarks from a canonical face model to the detected face, so users can apply effects on the detected landmarks. | `Boolean` | `False` |
| `resultListener` | Sets the result listener to receive the landmarker results asynchronously when FaceLandmarker is in the live stream mode. Can only be used when running mode is set to `LIVE_STREAM` | `ResultListener` | `N/A` |
| `errorListener` | Sets an optional error listener. | `ErrorListener` | `N/A` |

## Prepare data

Face Landmarker works with images, video files, and live video streams. The task
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

In the Face Landmarker example code, the data preparation is handled in the
[`FaceLandmarkerHelper.kt`](https://github.com/googlesamples/mediapipe/blob/main/examples/face_landmarker/android/app/src/main/java/com/google/mediapipe/examples/facelandmarker/FaceLandmarkerHelper.kt)
file.

## Run the task

Depending on the type of data your are working with, use the
`FaceLandmarker.detect...()` method that is specific to that data type. Use
`detect()` for individual images, `detectForVideo()` for frames in video files,
and `detectAsync()` for video streams. When you are performing detections on a
video stream, make sure you run the detections on a separate thread to avoid
blocking the user interface thread.

The following code samples show simple examples of how to run Face Landmarker
in these different data modes:

### Image

```
val result = FaceLandmarker.detect(mpImage)
```

### Video

```
val timestampMs = i * inferenceIntervalMs

FaceLandmarker.detectForVideo(mpImage, timestampMs)
    .let { detectionResult ->
        resultList.add(detectionResult)
    }
```

### Live stream

```
val mpImage = BitmapImageBuilder(rotatedBitmap).build()
val frameTime = SystemClock.uptimeMillis()

FaceLandmarker.detectAsync(mpImage, frameTime)
```

Note the following:

* When running in the video mode or the live stream mode, you must provide the
  timestamp of the input frame to the Face Landmarker task.
* When running in the image or the video mode, the Face Landmarker task blocks
  the current thread until it finishes processing the input image or frame. To
  avoid blocking the user interface, execute the processing in a background
  thread.
* When running in the live stream mode, the Face Landmarker task returns
  immediately and doesn’t block the current thread. It will invoke the result
  listener with the detection result every time it finishes processing an
  input frame.

In the Face Landmarker example code, the `detect`, `detectForVideo`, and
`detectAsync` functions are defined in the
[`FaceLandmarkerHelper.kt`](https://github.com/googlesamples/mediapipe/blob/main/examples/face_landmarker/android/app/src/main/java/com/google/mediapipe/examples/facelandmarker/FaceLandmarkerHelper.kt)
file.

## Handle and display results

The Face Landmarker returns a `FaceLandmarkerResult` object for each detection
run. The result object contains a face mesh for each detected face, with
coordinates for each face landmark. Optionally, the result object can also
contain blendshapes, which denote facial expressions, and a facial
transformation matrices to apply face effects on the detected landmarks.

The following shows an example of the output data from this task:

```
FaceLandmarkerResult:
  face_landmarks:
    NormalizedLandmark #0:
      x: 0.5971359014511108
      y: 0.485361784696579
      z: -0.038440968841314316
    NormalizedLandmark #1:
      x: 0.3302789330482483
      y: 0.29289937019348145
      z: -0.09489090740680695
    ... (478 landmarks for each face)
  face_blendshapes:
    browDownLeft: 0.8296722769737244
    browDownRight: 0.8096957206726074
    browInnerUp: 0.00035583582939580083
    browOuterUpLeft: 0.00035752105759456754
    ... (52 blendshapes for each face)
  facial_transformation_matrixes:
    [9.99158978e-01, -1.23036895e-02, 3.91213447e-02, -3.70770246e-01]
    [1.66496094e-02,  9.93480563e-01, -1.12779640e-01, 2.27719707e+01]
    ...
```

The following image shows a visualization of the task output:

![A man with the regions of his face geometrically mapped out to indicate his face's shape and dimensions](/static/mediapipe/images/solutions/face_landmarker_output.png)

The Face Landmarker example code demonstrates how to display the results returned
from the task, see the
[`OverlayView`](https://github.com/googlesamples/mediapipe/blob/main/examples/face_landmarker/android/app/src/main/java/com/google/mediapipe/examples/facelandmarker/OverlayView.kt)
class for more details.

Send feedback
