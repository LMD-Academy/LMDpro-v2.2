--- source: https://ai.google.dev/edge/mediapipe/solutions/vision/face_landmarker/web_js ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [MediaPipe](https://developers.google.com/edge/mediapipe/solutions/guide)

Send feedback

# Face landmark detection guide for Web Stay organized with collections Save and categorize content based on your preferences.



The MediaPipe Face Landmarker task lets you detect face landmarks and facial expressions in
images and videos. You can use this task to identify human facial expressions,
apply facial filters and effects, and create virtual avatars. This task uses
machine learning (ML) models that can work with single images or a continuous
stream of images. The task outputs 3-dimensional face landmarks, blendshape
scores (coefficients representing facial expression) to infer detailed facial
surfaces in real-time, and transformation matrices to perform the
transformations required for effects rendering.

These instructions show you how to use the Face Landmarker for web and JavaScript
apps. For more information about the capabilities, models, and configuration
options of this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/vision/face_landmarker/index).

## Code example

The example code for Face Landmarker provides a complete implementation of this
task in JavaScript for your reference. This code helps you test this task and get
started on building your own face landmarker app. You can view, run, and
edit the Face Landmarker
[example](https://stackblitz.com/https://github.com/google-ai-edge/mediapipe-samples-web/)
using just your web browser.

## Setup

This section describes key steps for setting up your development environment
specifically to use Face Landmarker. For general information on
setting up your web and JavaScript development environment, including
platform version requirements, see the
[Setup guide for web](/mediapipe/solutions/setup_web).

### JavaScript packages

Face Landmarker code is available through the MediaPipe `@mediapipe/tasks-vision`
[NPM](https://www.npmjs.com/search?q=%40mediapipe) package. You can
find and download these libraries by following the instructions in the platform
[Setup guide](/mediapipe/solutions/setup_web#downloads).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

You can install the required packages through NPM
using the following command:

```
npm install @mediapipe/tasks-vision
```

If you want to import the task code via a content delivery network (CDN)
service, add the following code in the <head> tag in your HTML file:

```
<!-- You can replace JSDeliver with another CDN if you prefer to -->
<head>
  <script src="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/vision_bundle.mjs"
    crossorigin="anonymous"></script>
</head>
```

### Model

The MediaPipe Face Landmarker task requires a trained model that is compatible with this
task. For more information on available trained models for Face Landmarker, see
the task overview [Models section](https://developers.google.com/edge/mediapipe/solutions/vision/face_landmarker/index#models).

Select and download a model, and then store it within your project directory:

```
<dev-project-root>/app/shared/models/
```

## Create the task

Use one of the Face Landmarker `createFrom...()` functions to
prepare the task for running inferences. Use the `createFromModelPath()`
function with a relative or absolute path to the trained model file.
If your model is already loaded into memory, you can use the
`createFromModelBuffer()` method.

The code example below demonstrates using the `createFromOptions()` function to
set up the task. The `createFromOptions` function allows you to customize the
Face Landmarker with configuration options. For more information, see
[Configuration options](#configuration_options).

The following code demonstrates how to build and configure the task with custom
options:

```
const vision = await FilesetResolver.forVisionTasks(
  // path/to/wasm/root
  "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
);
const faceLandmarker = await faceLandmarker.createFromOptions(
    vision,
    {
      baseOptions: {
        modelAssetPath: "path/to/model"
      },
      runningMode: runningMode
    });
```

### Configuration options

This task has the following configuration options for Web and JavaScript
applications:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `running_mode` | Sets the running mode for the task. There are two modes:    IMAGE: The mode for single image inputs.    VIDEO: The mode for decoded frames of a video or on a livestream of input data, such as from a camera. | {`IMAGE, VIDEO`} | `IMAGE` |
| `numFaces` | The maximum number of faces that can be detected by the the `FaceLandmarker`. Smoothing is only applied when `num_faces` is set to 1. | `Integer > 0` | `1` |
| `minFaceDetectionConfidence` | The minimum confidence score for the face detection to be considered successful. | `Float [0.0,1.0]` | `0.5` |
| `minFacePresenceConfidence` | The minimum confidence score of face presence score in the face landmark detection. | `Float [0.0,1.0]` | `0.5` |
| `minTrackingConfidence` | The minimum confidence score for the face tracking to be considered successful. | `Float [0.0,1.0]` | `0.5` |
| `outputFaceBlendshapes` | Whether Face Landmarker outputs face blendshapes. Face blendshapes are used for rendering the 3D face model. | `Boolean` | `False` |
| `outputFacialTransformationMatrixes` | Whether FaceLandmarker outputs the facial transformation matrix. FaceLandmarker uses the matrix to transform the face landmarks from a canonical face model to the detected face, so users can apply effects on the detected landmarks. | `Boolean` | `False` |

## Prepare data

Face Landmarker can detect faces in images in any format supported by the
host browser. The task also handles data input preprocessing, including
resizing, rotation and value normalization. To landmark faces in videos,
you can use the API to quickly process one frame at a time, using the timestamp
of the frame to determine when the faces occur within the video.

## Run the task

The Face Landmarker uses the `detect()` (with running mode `IMAGE`) and
`detectForVideo()` (with running mode `VIDEO`) methods to trigger
inferences. The task processes the data, attempts to landmark faces, and
then reports the results.

Calls to the Face Landmarker `detect()` and `detectForVideo()` methods run
synchronously and block the user interface thread. If you detect faces
in video frames from a device's camera, each detection blocks the main
thread. You can prevent this by implementing web workers to run the `detect()`
and `detectForVideo()` methods on another thread.

The following code demonstrates how execute the processing with the task model:

### Image

```
const image = document.getElementById("image") as HTMLImageElement;
const faceLandmarkerResult = faceLandmarker.detect(image);
```

### Video

```
await faceLandmarker.setOptions({ runningMode: "VIDEO" });

let lastVideoTime = -1;
function renderLoop(): void {
  const video = document.getElementById("video");

  if (video.currentTime !== lastVideoTime) {
    const faceLandmarkerResult = faceLandmarker.detectForVideo(video);
    processResults(detections);
    lastVideoTime = video.currentTime;
  }

  requestAnimationFrame(() => {
    renderLoop();
  });
}
```

For a more complete implementation of running an Face Landmarker task, see the
[example](https://github.com/google-ai-edge/mediapipe-samples-web/blob/main/src/workers/face-landmarker.worker.ts).

## Handle and display results

The Face Landmarker returns a result object for each detection
run. The result object contains a face mesh for each detected face, with
coordinates for each face landmark. Optionally, the result object can also
contain blendshapes, which denote facial expressions, and a facial
transformation matrix to apply face effects on the detected landmarks.

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

The Face Landmarker example code demonstrates how to display the
results returned from the task, see the
[example](https://github.com/google-ai-edge/mediapipe-samples-web/blob/main/src/tasks/face-landmarker.ts)






Send feedback