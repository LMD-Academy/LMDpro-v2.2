--- source: https://ai.google.dev/edge/mediapipe/solutions/vision/face_landmarker/ios ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [MediaPipe](https://developers.google.com/edge/mediapipe/solutions/guide)

Send feedback

# Face landmark detection guide for iOS Stay organized with collections Save and categorize content based on your preferences.



The MediaPipe Face Landmarker task lets you detect face landmarks and facial
expressions in images and videos. You can use this task to identify human facial
expressions, apply facial filters and effects, and create virtual avatars. This
task uses machine learning (ML) models that can work with single images, videos
or a continuous stream of images. The task outputs 3-dimensional face landmarks,
blendshape scores (coefficients representing facial expression) to infer
detailed facial surfaces in real-time, and transformation matrices to perform
the transformations required for effects rendering.

The code sample described in these instructions is available on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/face_landmarker/ios).
You can see this task in action by viewing this [Web
demo](https://google-ai-edge.github.io/mediapipe-samples-web/#/vision/face_landmarker).
For more information about the capabilities, models, and configuration options
of this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/vision/face_landmarker/index).

## Code example

The MediaPipe Tasks example code is a basic implementation of a Face Landmarker
app for iOS. The example uses the camera on a physical iOS device to detect face
landmarks in a continuous video stream. The app can also detect face landmarks
in images and videos from the device gallery.

You can use the app as a starting point for your own iOS app, or refer to it
when modifying an existing app. The Face Landmarker example code is hosted on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/face_landmarker).

### Download the code

The following instructions show you how to create a local copy of the example
code using the [git](https://git-scm.com) command line tool.

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
   git sparse-checkout set examples/face_landmarker/ios
   ```

After creating a local version of the example code, you can install the
MediaPipe task library, open the project using Xcode and run the app. For
instructions, see the [Setup Guide for iOS](/mediapipe/solutions/setup_ios).

### Key components

The following files contain the crucial code for the Face Landmarker example
application:

* [FaceLandmarkerService.swift](https://github.com/google-ai-edge/mediapipe-samples/blob/main/examples/face_landmarker/ios/FaceLandmarker/Services/FaceLandmarkerService.swift):
  Initializes the Face Landmarker, handles the model selection, and runs
  inference on the input data.
* [CameraViewController.swift](https://github.com/google-ai-edge/mediapipe-samples/blob/main/examples/face_landmarker/ios/FaceLandmarker/ViewContoller/CameraViewController.swift):
  Implements the UI for the live camera feed input mode and visualizes the
  results.
* [MediaLibraryViewController.swift](https://github.com/google-ai-edge/mediapipe-samples/blob/main/examples/face_landmarker/ios/FaceLandmarker/ViewContoller/MediaLibraryViewController.swift):
  Implements the UI for the still image and video file input modes and
  visualizes the results.

## Setup

This section describes key steps for setting up your development environment and
code projects to use Face Landmarker. For general information on setting up your
development environment for using MediaPipe tasks, including platform version
requirements, see the [Setup guide for
iOS](/edge/mediapipe/solutions/setup_ios).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Dependencies

Face Landmarker uses the `MediaPipeTasksVision` library, which must be installed
using CocoaPods. The library is compatible with both Swift and Objective-C apps
and does not require any additional language-specific setup.

For instructions to install CocoaPods on MacOS, refer to the [CocoaPods
installation guide](https://guides.cocoapods.org/using/getting-started.html).
For instructions on how to create a `Podfile` with the necessary pods for your
app, refer to [Using
CocoaPods](https://guides.cocoapods.org/using/using-cocoapods.html).

Add the `MediaPipeTasksVision` pod in the `Podfile` using the following code:

```
target 'MyFaceLandmarkerApp' do
  use_frameworks!
  pod 'MediaPipeTasksVision'
end
```

If your app includes unit test targets, refer to the [Set Up Guide for
iOS](/edge/mediapipe/solutions/setup_ios) for additional information on setting
up your `Podfile`.

**Note:** The following sections provide code examples in both Swift and
Objective-C. When applicable, the explanations refer to the Swift method names.

### Model

The MediaPipe Face Landmarker task requires a trained model bundle that is
compatible with this task. For more information about the available trained
models for Face Landmarker, see the task overview [Models
section](https://developers.google.com/edge/mediapipe/solutions/vision/face_landmarker/index#models).

Select and download a model, and add it to your project directory using Xcode.
For instructions on how to add files to your Xcode project, refer to [Managing
files and folders in your Xcode
project](https://developer.apple.com/documentation/xcode/managing-files-and-folders-in-your-xcode-project).

Use the `BaseOptions.modelAssetPath` property to specify the path to the model
in your app bundle. For a code example, see the next section.

## Create the task

You can create the Face Landmarker task by calling one of its initializers. The
`FaceLandmarker(options:)` initializer accepts values for the configuration
options.

If you don't need a Face Landmarker initialized with customized configuration
options, you can use the `FaceLandmarker(modelPath:)` initializer to create a
Face Landmarker with the default options. For more information about configuration
options, see the [Configuration Overview](#configuration).

The Face Landmarker task supports 3 input data types: still images, video files
and live video streams. By default, `FaceLandmarker(modelPath:)` initializes a
task for still images. If you want your task to be initialized to process video
files or live video streams, use `FaceLandmarker(options:)` to specify the video
or livestream running mode. The livestream mode also requires the additional
`faceLandmarkerLiveStreamDelegate` configuration option, which enables the
Face Landmarker to deliver face landmarker results to the delegate asynchronously.

Choose the tab corresponding to your running mode to see how to create the task
and run inference.

### Swift

### Image

```
import MediaPipeTasksVision

let modelPath = Bundle.main.path(
  forResource: "face_landmarker",
  ofType: "task")

let options = FaceLandmarkerOptions()
options.baseOptions.modelAssetPath = modelPath
options.runningMode = .image
options.minFaceDetectionConfidence = minFaceDetectionConfidence
options.minFacePresenceConfidence = minFacePresenceConfidence
options.minTrackingConfidence = minTrackingConfidence
options.numFaces = numFaces

let faceLandmarker = try FaceLandmarker(options: options)
```

### Video

```
import MediaPipeTasksVision

let modelPath = Bundle.main.path(
  forResource: "face_landmarker",
  ofType: "task")

let options = FaceLandmarkerOptions()
options.baseOptions.modelAssetPath = modelPath
options.runningMode = .video
options.minFaceDetectionConfidence = minFaceDetectionConfidence
options.minFacePresenceConfidence = minFacePresenceConfidence
options.minTrackingConfidence = minTrackingConfidence
options.numFaces = numFaces

let faceLandmarker = try FaceLandmarker(options: options)
```

### Livestream

```
import MediaPipeTasksVision

// Class that conforms to the `FaceLandmarkerLiveStreamDelegate` protocol and
// implements the method that the face landmarker calls once it finishes
// performing face landmark detection in each input frame.
class FaceLandmarkerResultProcessor: NSObject, FaceLandmarkerLiveStreamDelegate {

  func faceLandmarker(
    _ faceLandmarker: FaceLandmarker,
    didFinishDetection result: FaceLandmarkerResult?,
    timestampInMilliseconds: Int,
    error: Error?) {

    // Process the face landmarker result or errors here.

  }
}

let modelPath = Bundle.main.path(
  forResource: "face_landmarker",
  ofType: "task")

let options = FaceLandmarkerOptions()
options.baseOptions.modelAssetPath = modelPath
options.runningMode = .liveStream
options.minFaceDetectionConfidence = minFaceDetectionConfidence
options.minFacePresenceConfidence = minFacePresenceConfidence
options.minTrackingConfidence = minTrackingConfidence
options.numFaces = numFaces

// Assign an object of the class to the `faceLandmarkerLiveStreamDelegate`
// property.
let processor = FaceLandmarkerResultProcessor()
options.faceLandmarkerLiveStreamDelegate = processor

let faceLandmarker = try FaceLandmarker(options: options)
```

### Objective-C

### Image

```
@import MediaPipeTasksVision;

NSString *modelPath = [[NSBundle mainBundle] pathForResource:@"face_landmarker"
                                                      ofType:@"task"];

MPPFaceLandmarkerOptions *options = [[MPPFaceLandmarkerOptions alloc] init];
options.baseOptions.modelAssetPath = modelPath;
options.runningMode = MPPRunningModeImage;
options.minFaceDetectionConfidence = minFaceDetectionConfidence;
options.minFacePresenceConfidence = minFacePresenceConfidence;
options.minTrackingConfidence = minTrackingConfidence;
options.numFaces = numFaces;

MPPFaceLandmarker *faceLandmarker =
  [[MPPFaceLandmarker alloc] initWithOptions:options error:nil];
```

### Video

```
@import MediaPipeTasksVision;

NSString *modelPath = [[NSBundle mainBundle] pathForResource:@"face_landmarker"
                                                      ofType:@"task"];

MPPFaceLandmarkerOptions *options = [[MPPFaceLandmarkerOptions alloc] init];
options.baseOptions.modelAssetPath = modelPath;
options.runningMode = MPPRunningModeVideo;
options.minFaceDetectionConfidence = minFaceDetectionConfidence;
options.minFacePresenceConfidence = minFacePresenceConfidence;
options.minTrackingConfidence = minTrackingConfidence;
options.numFaces = numFaces;

MPPFaceLandmarker *faceLandmarker =
  [[MPPFaceLandmarker alloc] initWithOptions:options error:nil];
```

### Livestream

```
@import MediaPipeTasksVision;

// Class that conforms to the `MPPFaceLandmarkerLiveStreamDelegate` protocol
// and implements the method that the face landmarker calls once it finishes
// performing face landmark detection in each input frame.
@interface APPFaceLandmarkerResultProcessor : NSObject 

@end

@implementation APPFaceLandmarkerResultProcessor

-   (void)faceLandmarker:(MPPFaceLandmarker *)faceLandmarker
    didFinishDetectionWithResult:(MPPFaceLandmarkerResult *)faceLandmarkerResult
         timestampInMilliseconds:(NSInteger)timestampInMilliseconds
                           error:(NSError *)error {

    // Process the face landmarker result or errors here.

}

@end

NSString *modelPath = [[NSBundle mainBundle] pathForResource:@"face_landmarker"
                                                      ofType:@"task"];

MPPFaceLandmarkerOptions *options = [[MPPFaceLandmarkerOptions alloc] init];
options.baseOptions.modelAssetPath = modelPath;
options.runningMode = MPPRunningModeLiveStream;
options.minFaceDetectionConfidence = minFaceDetectionConfidence;
options.minFacePresenceConfidence = minFacePresenceConfidence;
options.minTrackingConfidence = minTrackingConfidence;
options.numFaces = numFaces;

// Assign an object of the class to the `faceLandmarkerLiveStreamDelegate`
// property.
APPFaceLandmarkerResultProcessor *processor = [APPFaceLandmarkerResultProcessor new];
options.faceLandmarkerLiveStreamDelegate = processor;

MPPFaceLandmarker *faceLandmarker =
  [[MPPFaceLandmarker alloc] initWithOptions:options error:nil];
```

**Note:** If you use the video mode or livestream mode, Face Landmarker uses
tracking to avoid triggering the detection model on every frame, which helps
reduce latency.

### Configuration options

This task has the following configuration options for iOS apps:

| Option name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `runningMode` | Sets the running mode for the task. Face Landmarker has three modes:    IMAGE: The mode for single image inputs.    VIDEO: The mode for decoded frames of a video.    LIVE\_STREAM: The mode for a livestream of input data, such as from a camera. In this mode, `faceLandmarkerLiveStreamDelegate` must be set to an instance of a class that implements the `FaceLandmarkerLiveStreamDelegate` to receive the results of performing face landmark detection asynchronously. | {RunningMode.image, RunningMode.video, RunningMode.liveStream} | {RunningMode.image} |
| `numFaces` | The maximum number of faces that can be detected by the Face Landmarker. Smoothing is only applied when numFaces is set to 1. | Integer > 0 | 1 |
| `minFaceDetectionConfidence` | The minimum confidence score for the face detection to be considered successful. | Float [0.0,1.0] | 0.5 |
| `minFacePresenceConfidence` | The minimum confidence score of face presence score in the face landmark detection. | Float [0.0,1.0] | 0.5 |
| `minTrackingConfidence` | The minimum confidence score for the face tracking to be considered successful. | Float [0.0,1.0] | 0.5 |
| `outputFaceBlendshapes` | Whether FaceLandmarker outputs face blendshapes. Face blendshapes are used for rendering the 3D face model. | Bool | false |
| `outputFacialTransformationMatrixes` | Whether FaceLandmarker outputs the facial transformation matrix. FaceLandmarker uses the matrix to transform the face landmarks from a canonical face model to the detected face, so users can apply effects on the detected landmarks. | Bool | false |

When the running mode is set to `LIVE_STREAM`, the Face Landmarker requires the
additional `faceLandmarkerLiveStreamDelegate` configuration option, which
enables the Face Landmarker to deliver face landmark detection results
asynchronously. The delegate must implement the
`faceLandmarker(_:didFinishDetection:timestampInMilliseconds:error:)` method,
which the Face Landmarker calls after processing the results of performing face
landmark detection on each frame.

| Option name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `faceLandmarkerLiveStreamDelegate` | Enables Face Landmarker to receive the results of performing face landmark detection asynchronously in livestream mode. The class whose instance is set to this property must implement the `faceLandmarker(_:didFinishDetection:timestampInMilliseconds:error:)` method. | Not applicable | Not set |

## Prepare data

You need to convert the input image or frame to an `MPImage` object before
passing it to the Face Landmarker. `MPImage` supports different types of iOS image
formats, and can use them in any running mode for inference. For more
information about `MPImage`, refer to the
[MPImage API](/edge/api/mediapipe/swift/vision/Classes/MPImage).

Choose an iOS image format based on your use case and the running mode your
application requires.`MPImage` accepts the `UIImage`, `CVPixelBuffer`, and
`CMSampleBuffer` iOS image formats.

### UIImage

The `UIImage` format is well-suited for the following running modes:

* Images: images from an app bundle, user gallery, or file system formatted as
  `UIImage` images can be converted to an `MPImage` object.
* Videos: use [AVAssetImageGenerator](https://developer.apple.com/documentation/avfoundation/avassetimagegenerator)
  to extract video frames to the
  [CGImage](https://developer.apple.com/documentation/coregraphics/cgimage)
  format, then convert them to `UIImage` images.

### Swift

```
// Load an image on the user's device as an iOS `UIImage` object.

// Convert the `UIImage` object to a MediaPipe's Image object having the default
// orientation `UIImage.Orientation.up`.
let image = try MPImage(uiImage: image)
```

### Objective-C

```
// Load an image on the user's device as an iOS `UIImage` object.

// Convert the `UIImage` object to a MediaPipe's Image object having the default
// orientation `UIImageOrientationUp`.
MPImage *image = [[MPPImage alloc] initWithUIImage:image error:nil];
```

The example initializes an `MPImage` with the default
[UIImage.Orientation.Up](https://developer.apple.com/documentation/uikit/uiimage/orientation/up)
orientation. You can initialize an `MPImage` with any of the supported
[UIImage.Orientation](https://developer.apple.com/documentation/uikit/uiimage/orientation)
values. Face Landmarker does not support mirrored orientations like `.upMirrored`,
`.downMirrored`, `.leftMirrored`, `.rightMirrored`.

For more information about `UIImage`, refer to the [UIImage Apple Developer
Documentation](https://developer.apple.com/documentation/uikit/uiimage).

### CVPixelBuffer

The `CVPixelBuffer` format is well-suited for applications that generate frames
and use the iOS [CoreImage](https://developer.apple.com/documentation/coreimage)
framework for processing.

The `CVPixelBuffer` format is well-suited for the following running modes:

* Images: apps that generate `CVPixelBuffer` images after some processing
  using iOS's `CoreImage` framework can be sent to the Face Landmarker in the
  image running mode.
* Videos: video frames can be converted to the `CVPixelBuffer` format for
  processing, and then sent to the Face Landmarker in video mode.
* livestream: apps using an iOS camera to generate frames may be converted
  into the `CVPixelBuffer` format for processing before being sent to the
  Face Landmarker in livestream mode.

### Swift

```
// Obtain a CVPixelBuffer.

// Convert the `CVPixelBuffer` object to a MediaPipe's Image object having the default
// orientation `UIImage.Orientation.up`.
let image = try MPImage(pixelBuffer: pixelBuffer)
```

### Objective-C

```
// Obtain a CVPixelBuffer.

// Convert the `CVPixelBuffer` object to a MediaPipe's Image object having the
// default orientation `UIImageOrientationUp`.
MPImage *image = [[MPPImage alloc] initWithUIImage:image error:nil];
```

For more information about `CVPixelBuffer`, refer to the [CVPixelBuffer Apple
Developer
Documentation](https://developer.apple.com/documentation/corevideo/cvpixelbuffer-q2e).

### CMSampleBuffer

The `CMSampleBuffer` format stores media samples of a uniform media type, and is
well-suited for the livestream running mode. Live frames from iOS cameras are
asynchronously delivered in the `CMSampleBuffer` format by iOS
[AVCaptureVideoDataOutput](https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput).

### Swift

```
// Obtain a CMSampleBuffer.

// Convert the `CMSampleBuffer` object to a MediaPipe's Image object having the default
// orientation `UIImage.Orientation.up`.
let image = try MPImage(sampleBuffer: sampleBuffer)
```

### Objective-C

```
// Obtain a `CMSampleBuffer`.

// Convert the `CMSampleBuffer` object to a MediaPipe's Image object having the
// default orientation `UIImageOrientationUp`.
MPImage *image = [[MPPImage alloc] initWithSampleBuffer:sampleBuffer error:nil];
```

For more information about `CMSampleBuffer`, refer to the [CMSampleBuffer Apple
Developer
Documentation](https://developer.apple.com/documentation/coremedia/cmsamplebuffer-u71).

## Run the task

To run the Face Landmarker, use the `detect()` method specific to the assigned
running mode:

* Still image: `detect(image:)`
* Video: `detect(videoFrame:timestampInMilliseconds:)`
* Livestream: `detectAsync(image:timestampInMilliseconds:)`

The following code samples show basic examples of how to run Face Landmarker in
these different running modes:

### Swift

### Image

```
let result = try faceLandmarker.detect(image: image)
```

### Video

```
let result = try faceLandmarker.detect(
  videoFrame: image,
  timestampInMilliseconds: timestamp)
```

### Live stream

```
try faceLandmarker.detectAsync(
  image: image,
  timestampInMilliseconds: timestamp)
```

### Objective-C

### Image

```
MPPFaceLandmarkerResult *result =
  [faceLandmarker detectImage:image error:nil];
```

### Video

```
MPPFaceLandmarkerResult *result =
  [faceLandmarker detectVideoFrame:image
           timestampInMilliseconds:timestamp
                             error:nil];
```

### Livestream

```
BOOL success =
  [faceLandmarker detectAsyncImage:image
           timestampInMilliseconds:timestamp
                             error:nil];
```

The Face Landmarker code example shows the implementations of each of these modes
in more detail `detect(image:)`, `detect(videoFrame:timestampInMilliseconds:)`,
and `detectAsync(image:timestampInMilliseconds:)`. The example code allows the
user to switch between processing modes which may not be required for your use
case.

Note the following:

* When running in video mode or livestream mode, you must also provide the
  timestamp of the input frame to the Face Landmarker task.
* When running in image or video mode, the Face Landmarker task blocks the
  current thread until it finishes processing the input image or frame. To
  avoid blocking the current thread, execute the processing in a background
  thread using iOS
  [Dispatch](https://developer.apple.com/documentation/dispatch) or
  [NSOperation](https://developer.apple.com/documentation/foundation/nsoperation)
  frameworks. If your app is created using Swift, you can also use [Swift
  Concurrency](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/)
  for background thread execution.
* When running in livestream mode, the Face Landmarker task returns immediately
  and doesn't block the current thread. It invokes the
  `faceLandmarker(_:didFinishDetection:timestampInMilliseconds:error:)` method
  with the face landmark detection result after processing each input frame.
  The Face Landmarker invokes this method asynchronously on a dedicated serial
  dispatch queue. For displaying results on the user interface, dispatch the
  results to the main queue after processing the results.

## Handle and display results

Upon running inference, the Face Landmarker returns a `FaceLandmarkerResult` which
contains a face mesh for each detected face, with coordinates for each face
landmark. Optionally, the result object can also contain blendshapes, which
denote facial expressions, and facial transformation matrices to apply face
effects on the detected landmarks.

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
by the task, see
[FaceOverlay.swift](https://github.com/google-ai-edge/mediapipe-samples/blob/main/examples/face_landmarker/ios/FaceLandmarker/Views/FaceOverlay.swift)
for more details.






Send feedback