# Face detection guide for Web Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/mediapipe/solutions/vision/face_detector/web_js))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

The MediaPipe Face Detector task lets you detect faces in an image or video. You can use
this task to locate faces and facial features within a frame. This task uses a
machine learning (ML) model that works with single images or a continuous
stream of images. The task outputs face locations, along with the following
facial key points: left eye, right eye, nose tip, mouth, left eye tragion, and
right eye tragion.

These instructions show you how to use the Face Detector for web and JavaScript
apps. For more information about the capabilities, models, and configuration
options of this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/vision/face_detector/index).

## Code example

The example code for Face Detector provides a complete implementation of this
task in JavaScript for your reference. This code helps you test this task and get
started on building your own face detection app. You can view, run, and
edit the Face Detector
[example](https://stackblitz.com/https://github.com/google-ai-edge/mediapipe-samples-web/)
using just your web browser.

## Setup

This section describes key steps for setting up your development environment
specifically to use Face Detector. For general information on
setting up your web and JavaScript development environment, including
platform version requirements, see the
[Setup guide for web](/mediapipe/solutions/setup_web).

### JavaScript packages

Face Detector code is available through the MediaPipe `@mediapipe/tasks-vision`
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

The MediaPipe Face Detector task requires a trained model that is compatible with this
task. For more information on available trained models for Face Detector, see
the task overview [Models section](https://developers.google.com/edge/mediapipe/solutions/vision/face_detector/index#models).

Select and download a model, and then store it within your project directory:

```
<dev-project-root>/app/shared/models/
```

## Create the task

Use one of the Face Detector `createFrom...()` functions to
prepare the task for running inferences. Use the `createFromModelPath()`
function with a relative or absolute path to the trained model file.
If your model is already loaded into memory, you can use the
`createFromModelBuffer()` method.

The code example below demonstrates using the `createFromOptions()` function to
set up the task. The `createFromOptions` function allows you to customize the
Face Detector with configuration options. For more information on configuration
options, see [Configuration options](#configuration_options).

The following code demonstrates how to build and configure the task with custom
options:

```
const vision = await FilesetResolver.forVisionTasks(
  // path/to/wasm/root
  "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
);
const facedetector = await FaceDetector.createFromOptions(
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
| `option_var_1_web_js` | Sets the running mode for the task. There are two modes:    IMAGE: The mode for single image inputs.    VIDEO: The mode for decoded frames of a video or on a livestream of input data, such as from a camera. | {`IMAGE, VIDEO`} | `IMAGE` |
| `minDetectionConfidence` | The minimum confidence score for the face detection to be considered successful. | `Float [0,1]` | `0.5` |
| `minSuppressionThreshold` | The minimum non-maximum-suppression threshold for face detection to be considered overlapped. | `Float [0,1]` | `0.3` |

## Prepare data

Face Detector can detect faces in images in any format supported by the
host browser. The task also handles data input preprocessing, including
resizing, rotation and value normalization. To detect faces in videos,
you can use the API to quickly process one frame at a time, using the timestamp
of the frame to determine when the faces occur within the video.

## Run the task

The Face Detector uses the `detect()` (with running mode `image`) and
`detectForVideo()` (with running mode `video`) methods to trigger
inferences. The task processes the data, attempts to detect faces, and
then reports the results.

Calls to the Face Detector `detect()` and `detectForVideo()` methods run
synchronously and block the user interface thread. If you detect faces
in video frames from a device's camera, each detection blocks the main
thread. You can prevent this by implementing web workers to run the `detect()`
and `detectForVideo()` methods on another thread.

The following code demonstrates how execute the processing with the task model:

### Image

```
const image = document.getElementById("image") as HTMLImageElement;
const faceDetectorResult = faceDetector.detect(image);
```

### Video

```
await faceDetector.setOptions({ runningMode: "video" });

let lastVideoTime = -1;
function renderLoop(): void {
  const video = document.getElementById("video");

  if (video.currentTime !== lastVideoTime) {
    const detections = faceDetector.detectForVideo(video);
    processResults(detections);
    lastVideoTime = video.currentTime;
  }

  requestAnimationFrame(() => {
    renderLoop();
  });
}
```

For a more complete implementation of running an Face Detector task, see the
[example](https://github.com/google-ai-edge/mediapipe-samples-web/blob/main/src/workers/face-detector.worker.ts).

## Handle and display results

The Face Detector generates a face detector result object for each detection
run. The result object contains faces in image coordinates and faces in world
coordinates.

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
[example](https://github.com/google-ai-edge/mediapipe-samples-web/blob/main/src/tasks/face-detector.ts)

Send feedback
