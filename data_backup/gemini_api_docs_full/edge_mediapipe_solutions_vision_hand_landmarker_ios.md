--- source: https://ai.google.dev/edge/mediapipe/solutions/vision/hand_landmarker/ios ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [MediaPipe](https://developers.google.com/edge/mediapipe/solutions/guide)

Send feedback

# Hand landmarks detection guide for iOS Stay organized with collections Save and categorize content based on your preferences.



The MediaPipe Hand Landmarker task lets you detect the landmarks of the hands in an image.
These instructions show you how to use the Hand Landmarker with iOS apps. The code
sample described in these instructions is available on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/hand_landmarker/ios).

For more information about the capabilities, models, and configuration options
of this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/vision/hand_landmarker/index).

## Code example

The MediaPipe Tasks example code is a basic implementation of a Hand Landmarker
app for iOS. The example uses the camera on a physical iOS device to detect hand
landmarks in a continuous video stream. The app can also detect hand landmarks
in images and videos from the device gallery.

You can use the app as a starting point for your own iOS app, or refer to it
when modifying an existing app. The Hand Landmarker example code is hosted on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/hand_landmarker/ios).

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
   only the files for the Hand Landmarker example app:

   ```
   cd mediapipe-samples
   git sparse-checkout init --cone
   git sparse-checkout set examples/hand_landmarker/ios/
   ```

After creating a local version of the example code, you can install the
MediaPipe task library, open the project using Xcode and run the app. For
instructions, see the [Setup Guide for iOS](/mediapipe/solutions/setup_ios).

### Key components

The following files contain the crucial code for the Hand Landmarker example
application:

* [HandLandmarkerService.swift](https://github.com/googlesamples/mediapipe/blob/main/examples/hand_landmarker/ios/HandLandmarker/Services/HandLandmarkerService.swift):
  Initializes the Hand Landmarker, handles the model selection, and runs
  inference on the input data.
* [CameraViewController.swift](https://github.com/googlesamples/mediapipe/blob/main/examples/hand_landmarker/ios/HandLandmarker/ViewContoller/CameraViewController.swift):
  Implements the UI for the live camera feed input mode and visualizes the
  results.
* [MediaLibraryViewController.swift](https://github.com/googlesamples/mediapipe/blob/main/examples/hand_landmarker/ios/HandLandmarker/ViewContoller/MediaLibraryViewController.swift):
  Implements the UI for the still image and video file input mode and
  visualizes the results.

## Setup

This section describes key steps for setting up your development environment and
code projects to use Hand Landmarker. For general information on setting up your
development environment for using MediaPipe tasks, including platform version
requirements, see the [Setup guide for iOS](/mediapipe/solutions/setup_ios).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Dependencies

Hand Landmarker uses the `MediaPipeTasksVision` library, which must be installed
using CocoaPods. The library is compatible with both Swift and Objective-C apps
and does not require any additional language-specific setup.

For instructions to install CocoaPods on macOS, refer to the [CocoaPods
installation guide](https://guides.CocoaPods.org/using/getting-started.html).
For instructions on how to create a `Podfile` with the necessary pods for your
app, refer to [Using
CocoaPods](https://guides.cocoapods.org/using/using-cocoapods.html).

Add the MediaPipeTasksVision pod in the `Podfile` using the following code:

```
target 'MyHandLandmarkerApp' do
  use_frameworks!
  pod 'MediaPipeTasksVision'
end
```

If your app includes unit test targets, refer to the [Set Up Guide for
iOS](/mediapipe/solutions/setup_ios) for additional information on setting up
your `Podfile`.

**Note:** The following sections provide code examples in both Swift and
Objective-C. When applicable, the explanations refer to the Swift method names.

### Model

The MediaPipe Hand Landmarker task requires a trained model that is compatible
with this task. For more information about the available trained models for
Hand Landmarker, see the task overview [Models
section](https://developers.google.com/mediapipe/solutions/vision/hand_landmarker/index#models).

Select and download a model, and add it to your project directory using Xcode.
For instructions on how to add files to your Xcode project, refer to [Managing
files and folders in your Xcode
project](https://developer.apple.com/documentation/xcode/managing-files-and-folders-in-your-xcode-project).

Use the `BaseOptions.modelAssetPath` property to specify the path to the model
in your app bundle. For a code example, see the next section.

## Create the task

You can create the Hand Landmarker task by calling one of its initializers. The
`HandLandmarker(options:)` initializer accepts values for the configuration
options.

If you don't need a Hand Landmarker initialized with customized configuration
options, you can use the `HandLandmarker(modelPath:)` initializer to create an
Hand Landmarker with the default options. For more information about configuration
options, see [Configuration Overview](#configuration).

The Hand Landmarker task supports 3 input data types: still images, video files
and live video streams. By default, `HandLandmarker(modelPath:)` initializes a
task for still images. If you want your task to be initialized to process video
files or live video streams, use `HandLandmarker(options:)` to specify the video
or livestream running mode. The livestream mode also requires the additional
`handLandmarkerLiveStreamDelegate` configuration option, which enables the
Hand Landmarker to deliver hand landmarker results to the delegate asynchronously.

Choose the tab corresponding to your running mode to see how to create the task
and run inference.

### Swift

### Image

```
import MediaPipeTasksVision

let modelPath = Bundle.main.path(forResource: "hand_landmarker",
                                      ofType: "task")

let options = HandLandmarkerOptions()
options.baseOptions.modelAssetPath = modelPath
options.runningMode = .image
options.minHandDetectionConfidence = minHandDetectionConfidence
options.minHandPresenceConfidence = minHandPresenceConfidence
options.minTrackingConfidence = minHandTrackingConfidence
options.numHands = numHands

let handLandmarker = try HandLandmarker(options: options)
```

### Video

```
import MediaPipeTasksVision

let modelPath = Bundle.main.path(forResource: "hand_landmarker",
                                      ofType: "task")

let options = HandLandmarkerOptions()
options.baseOptions.modelAssetPath = modelPath
options.runningMode = .video
options.minHandDetectionConfidence = minHandDetectionConfidence
options.minHandPresenceConfidence = minHandPresenceConfidence
options.minTrackingConfidence = minHandTrackingConfidence
options.numHands = numHands

let handLandmarker = try HandLandmarker(options: options)
```

### Livestream

```
import MediaPipeTasksVision

// Class that conforms to the `HandLandmarkerLiveStreamDelegate` protocol and
// implements the method that the hand landmarker calls once it finishes
// performing landmarks detection in each input frame.
class HandLandmarkerResultProcessor: NSObject, HandLandmarkerLiveStreamDelegate {

  func handLandmarker(
    _ handLandmarker: HandLandmarker,
    didFinishDetection result: HandLandmarkerResult?,
    timestampInMilliseconds: Int,
    error: Error?) {

    // Process the hand landmarker result or errors here.

  }
}

let modelPath = Bundle.main.path(
  forResource: "hand_landmarker",
  ofType: "task")

let options = HandLandmarkerOptions()
options.baseOptions.modelAssetPath = modelPath
options.runningMode = .liveStream
options.minHandDetectionConfidence = minHandDetectionConfidence
options.minHandPresenceConfidence = minHandPresenceConfidence
options.minTrackingConfidence = minHandTrackingConfidence
options.numHands = numHands

// Assign an object of the class to the `handLandmarkerLiveStreamDelegate`
// property.
let processor = HandLandmarkerResultProcessor()
options.handLandmarkerLiveStreamDelegate = processor

let handLandmarker = try HandLandmarker(options: options)
```

### Objective-C

### Image

```
@import MediaPipeTasksVision;

NSString *modelPath = [[NSBundle mainBundle] pathForResource:@"hand_landmarker"
                                                      ofType:@"task"];

MPPHandLandmarkerOptions *options = [[MPPHandLandmarkerOptions alloc] init];
options.baseOptions.modelAssetPath = modelPath;
options.runningMode = MPPRunningModeImage;
options.minHandDetectionConfidence = minHandDetectionConfidence;
options.minHandPresenceConfidence = minHandPresenceConfidence;
options.minTrackingConfidence = minHandTrackingConfidence;
options.numHands = numHands;

MPPHandLandmarker *handLandmarker =
  [[MPPHandLandmarker alloc] initWithOptions:options error:nil];
```

### Video

```
@import MediaPipeTasksVision;

NSString *modelPath = [[NSBundle mainBundle] pathForResource:@"hand_landmarker"
                                                      ofType:@"task"];

MPPHandLandmarkerOptions *options = [[MPPHandLandmarkerOptions alloc] init];
options.baseOptions.modelAssetPath = modelPath;
options.runningMode = MPPRunningModeVideo;
options.minHandDetectionConfidence = minHandDetectionConfidence;
options.minHandPresenceConfidence = minHandPresenceConfidence;
options.minTrackingConfidence = minHandTrackingConfidence;
options.numHands = numHands;

MPPHandLandmarker *handLandmarker =
  [[MPPHandLandmarker alloc] initWithOptions:options error:nil];
```

### Livestream

```
@import MediaPipeTasksVision;

// Class that conforms to the `MPPHandLandmarkerLiveStreamDelegate` protocol
// and implements the method that the hand landmarker calls once it finishes
// performing landmarks detection in each input frame.

@interface APPHandLandmarkerResultProcessor : NSObject 

@end

@implementation APPHandLandmarkerResultProcessor

-   (void)handLandmarker:(MPPHandLandmarker *)handLandmarker
    didFinishDetectionWithResult:(MPPHandLandmarkerResult *)handLandmarkerResult
         timestampInMilliseconds:(NSInteger)timestampInMilliseconds
                           error:(NSError *)error {

    // Process the hand landmarker result or errors here.

}

@end

NSString *modelPath = [[NSBundle mainBundle] pathForResource:@"hand_landmarker"
                                                      ofType:@"task"];

MPPHandLandmarkerOptions *options = [[MPPHandLandmarkerOptions alloc] init];
options.baseOptions.modelAssetPath = modelPath;
options.runningMode = MPPRunningModeLiveStream;
options.minHandDetectionConfidence = minHandDetectionConfidence;
options.minHandPresenceConfidence = minHandPresenceConfidence;
options.minTrackingConfidence = minHandTrackingConfidence;
options.numHands = numHands;

// Assign an object of the class to the `handLandmarkerLiveStreamDelegate`
// property.
APPHandLandmarkerResultProcessor *processor =
  [APPHandLandmarkerResultProcessor new];
options.handLandmarkerLiveStreamDelegate = processor;

MPPHandLandmarker *handLandmarker =
  [[MPPHandLandmarker alloc] initWithOptions:options error:nil];
```

**Note:** If you use the video mode or livestream mode, Hand Landmarker uses tracking
to avoid triggering palm detection model on every frame, which helps reduce
latency.

### Configuration options

This task has the following configuration options for iOS apps:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `running_mode` | Sets the running mode for the task. There are three modes:    IMAGE: The mode for single image inputs.    VIDEO: The mode for decoded frames of a video.    LIVE\_STREAM: The mode for a livestream of input data, such as from a camera. In this mode, resultListener must be called to set up a listener to receive results asynchronously. In this mode, `handLandmarkerLiveStreamDelegate` must be set to an instance of a class that implements the `HandLandmarkerLiveStreamDelegate` to receive the hand landmark detection results asynchronously. | {`RunningMode.image, RunningMode.video, RunningMode.liveStream`} | `RunningMode.image` |
| `numHands` | The maximum number of hands detected by the Hand landmark detector. | `Any integer > 0` | `1` |
| `minHandDetectionConfidence` | The minimum confidence score for the hand detection to be considered successful in palm detection model. | `0.0 - 1.0` | `0.5` |
| `minHandPresenceConfidence` | The minimum confidence score for the hand presence score in the hand landmark detection model. In Video mode and Live stream mode, if the hand presence confidence score from the hand landmark model is below this threshold, Hand Landmarker triggers the palm detection model. Otherwise, a lightweight hand tracking algorithm determines the location of the hand(s) for subsequent landmark detections. | `0.0 - 1.0` | `0.5` |
| `minTrackingConfidence` | The minimum confidence score for the hand tracking to be considered successful. This is the bounding box IoU threshold between hands in the current frame and the last frame. In Video mode and Stream mode of Hand Landmarker, if the tracking fails, Hand Landmarker triggers hand detection. Otherwise, it skips the hand detection. | `0.0 - 1.0` | `0.5` |
| `result_listener` | Sets the result listener to receive the detection results asynchronously when the hand landmarker is in live stream mode. Only applicable when running mode is set to `LIVE_STREAM` | N/A | N/A |

When the running mode is set to livestream, the Hand Landmarker requires the
additional `handLandmarkerLiveStreamDelegate` configuration option, which
enables the Hand Landmarker to deliver hand landmarks detection results
asynchronously. The delegate must implement the
`handLandmarker(_:didFinishDetection:timestampInMilliseconds:error:)` method,
which the Hand Landmarker calls after processing the hand landmarks detection
results for each frame.

| Option name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `handLandmarkerLiveStreamDelegate` | Enables Hand Landmarker to receive the hand landmark detection results asynchronously in livestream mode. The class whose instance is set to this property must implement the `handLandmarker(_:didFinishDetection:timestampInMilliseconds:error:)` method. | Not applicable | Not set |

## Prepare data

You need to convert the input image or frame to an `MPImage` object before
passing it to the Hand Landmarker. `MPImage` supports different types of iOS image
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
values. Hand Landmarker does not support mirrored orientations like `.upMirrored`,
`.downMirrored`, `.leftMirrored`, `.rightMirrored`.

For more information about `UIImage`, refer to the [UIImage Apple Developer
Documentation](https://developer.apple.com/documentation/uikit/uiimage).

### CVPixelBuffer

The `CVPixelBuffer` format is well-suited for applications that generate frames
and use the iOS [CoreImage](https://developer.apple.com/documentation/coreimage)
framework for processing.

The `CVPixelBuffer` format is well-suited for the following running modes:

* Images: apps that generate `CVPixelBuffer` images after some processing
  using iOS's `CoreImage` framework can be sent to the Hand Landmarker in the
  image running mode.
* Videos: video frames can be converted to the `CVPixelBuffer` format for
  processing, and then sent to the Hand Landmarker in video mode.
* livestream: apps using an iOS camera to generate frames may be converted
  into the `CVPixelBuffer` format for processing before being sent to the
  Hand Landmarker in livestream mode.

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

To run the Hand Landmarker, use the `detect()` method specific to the assigned
running mode:

* Still image: `detect(image:)`
* Video: `detect(videoFrame:timestampInMilliseconds:)`
* Livestream: `detectAsync(image:timestampInMilliseconds:)`

### Swift

### Image

```
let result = try handLandmarker.detect(image: image)
```

### Video

```
let result = try handLandmarker.detect(
    videoFrame: image,
    timestampInMilliseconds: timestamp)
```

### Livestream

```
try handLandmarker.detectAsync(
  image: image,
  timestampInMilliseconds: timestamp)
```

### Objective-C

### Image

```
MPPHandLandmarkerResult *result =
  [handLandmarker detectInImage:image error:nil];
```

### Video

```
MPPHandLandmarkerResult *result =
  [handLandmarker detectInVideoFrame:image
             timestampInMilliseconds:timestamp
                               error:nil];
```

### Livestream

```
BOOL success =
  [handLandmarker detectAsyncInImage:image
             timestampInMilliseconds:timestamp
                               error:nil];
```

The Hand Landmarker code example shows the implementations of each of these modes
in more detail. The example code allows the user to switch between processing
modes, which may not be required for your use case.

Note the following:

* When running in video mode or livestream mode, you must also provide the
  timestamp of the input frame to the Hand Landmarker task.
* When running in image or video mode, the Hand Landmarker task blocks the
  current thread until it finishes processing the input image or frame. To
  avoid blocking the current thread, execute the processing in a background
  thread using iOS
  [Dispatch](https://developer.apple.com/documentation/dispatch) or
  [NSOperation](https://developer.apple.com/documentation/foundation/nsoperation)
  frameworks.
* When running in livestream mode, the Hand Landmarker task returns immediately
  and doesn't block the current thread. It invokes the
  `handLandmarker(_:didFinishDetection:timestampInMilliseconds:error:)` method
  with the hand landmarker result after processing each input frame. The
  Hand Landmarker invokes this method asynchronously on a dedicated serial
  dispatch queue. For displaying results on the user interface, dispatch the
  results to the main queue after processing the results. If the `detectAsync`
  function is called when the Hand Landmarker task is busy processing another
  frame, the Hand Landmarker ignores the new input frame.

## Handle and display results

Upon running inference, the Hand Landmarker task returns a `HandLandmarkerResult`
which contains hand landmarks in image coordinates, hand landmarks in world
coordinates and handedness(left/right hand) of the detected hands.

The following shows an example of the output data from this task:

The `HandLandmarkerResult` output contains three components. Each component is an array, where each element contains the following results for a single detected hand:

* Handedness

  Handedness represents whether the detected hands are left or right hands.
* Landmarks

  There are 21 hand landmarks, each composed of `x`, `y` and `z` coordinates. The
  `x` and `y` coordinates are normalized to [0.0, 1.0] by the image width and
  height, respectively. The `z` coordinate represents the landmark depth, with
  the depth at the wrist being the origin. The smaller the value, the closer the
  landmark is to the camera. The magnitude of `z` uses roughly the same scale as
  `x`.
* World Landmarks

  The 21 hand landmarks are also presented in world coordinates. Each landmark
  is composed of `x`, `y`, and `z`, representing real-world 3D coordinates in
  meters with the origin at the hand’s geometric center.

```
HandLandmarkerResult:
  Handedness:
    Categories #0:
      index        : 0
      score        : 0.98396
      categoryName : Left
  Landmarks:
    Landmark #0:
      x            : 0.638852
      y            : 0.671197
      z            : -3.41E-7
    Landmark #1:
      x            : 0.634599
      y            : 0.536441
      z            : -0.06984
    ... (21 landmarks for a hand)
  WorldLandmarks:
    Landmark #0:
      x            : 0.067485
      y            : 0.031084
      z            : 0.055223
    Landmark #1:
      x            : 0.063209
      y            : -0.00382
      z            : 0.020920
    ... (21 world landmarks for a hand)
```

The following image shows a visualization of the task output:

![A hand in a thumbs up motion with the skeletal structure of the hand mapped out](/static/mediapipe/images/solutions/gesture-recognizer.png)






Send feedback