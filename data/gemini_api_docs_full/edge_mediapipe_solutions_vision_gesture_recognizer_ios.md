# Gesture recognition guide for iOS Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/mediapipe/solutions/vision/gesture_recognizer/ios))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

The MediaPipe Gesture Recognizer task lets you recognize hand gestures in real time, and
provides the recognized hand gesture results and hand landmarks of the detected
hands. These instructions show you how to use the Gesture Recognizer
with iOS applications.

You can see this task in action by viewing the [Web
demo](https://google-ai-edge.github.io/mediapipe-samples-web/#/vision/gesture_recognizer) For
more information about the capabilities, models, and configuration options of
this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/vision/gesture_recognizer/index).

## Code example

The MediaPipe Tasks example code is a basic implementation of a Gesture Recognizer
app for iOS. The example uses the camera on a physical iOS device to to
continuously detect hand gestures, and can also use images and videos from the
device gallery to statically detect gestures.

You can use the app as a starting point for your own iOS app, or refer to it
when modifying an existing app. The Gesture Recognizer example code is hosted on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/gesture_recognizer/ios).

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
   only the files for the Gesture Recognizer example app:

   ```
   cd mediapipe-samples
   git sparse-checkout init --cone
   git sparse-checkout set examples/gesture_recognizer/ios/
   ```

After creating a local version of the example code, you can install the
MediaPipe task library, open the project using Xcode and run the app. For
instructions, see the [Setup Guide for iOS](/mediapipe/solutions/setup_ios).

### Key components

The following files contain the crucial code for the Gesture Recognizer example
application:

* [GestureRecognizerService.swift](https://github.com/googlesamples/mediapipe/blob/main/examples/gesture_recognizer/ios/GestureRecognizer/Services/GestureRecognizerService.swift): Initializes the Gesture Recognizer,
  handles the model selection, and runs inference on the input data.
* [CameraViewController.swift](https://github.com/googlesamples/mediapipe/blob/main/examples/gesture_recognizer/ios/GestureRecognizer/ViewContoller/CameraViewController.swift): Implements the UI for the live camera feed
  input mode and visualizes the results.
* [MediaLibraryViewController.swift](https://github.com/googlesamples/mediapipe/blob/main/examples/gesture_recognizer/ios/GestureRecognizer/ViewContoller/MediaLibraryViewController.swift): Implements the UI for the still image
  and video file input mode and visualizes the results.

## Setup

This section describes key steps for setting up your development environment and
code projects to use Gesture Recognizer. For general information on setting up your
development environment for using MediaPipe tasks, including platform version
requirements, see the [Setup guide for iOS](/mediapipe/solutions/setup_ios).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Dependencies

Gesture Recognizer uses the `MediaPipeTasksVision` library, which must be installed
using CocoaPods. The library is compatible with both Swift and Objective-C apps
and does not require any additional language-specific setup.

For instructions to install CocoaPods on macOS, refer to the [CocoaPods
installation guide](https://guides.CocoaPods.org/using/getting-started.html).
For instructions on how to create a `Podfile` with the necessary pods for your
app, refer to [Using
CocoaPods](https://guides.cocoapods.org/using/using-cocoapods.html).

Add the MediaPipeTasksVision pod in the `Podfile` using the following code:

```
target 'MyGestureRecognizerApp' do
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

The MediaPipe Gesture Recognizer task requires a trained model that is compatible
with this task. For more information about the available trained models for
Gesture Recognizer, see the task overview [Models
section](https://developers.google.com/mediapipe/solutions/vision/gesture_recognizer/index#models).

Select and download a model, and add it to your project directory using Xcode.
For instructions on how to add files to your Xcode project, refer to [Managing
files and folders in your Xcode
project](https://developer.apple.com/documentation/xcode/managing-files-and-folders-in-your-xcode-project).

Use the `BaseOptions.modelAssetPath` property to specify the path to the model
in your app bundle. For a code example, see the next section.

## Create the task

You can create the Gesture Recognizer task by calling one of its initializers. The
`GestureRecognizer(options:)` initializer accepts values for the configuration
options.

If you don't need a Gesture Recognizer initialized with customized configuration
options, you can use the `GestureRecognizer(modelPath:)` initializer to create a
Gesture Recognizer with the default options. For more information about configuration
options, see [Configuration Overview](#configuration).

The Gesture Recognizer task supports 3 input data types: still images, video files
and live video streams. By default, `GestureRecognizer(modelPath:)` initializes
a task for still images. If you want your task to be initialized to process
video files or live video streams, use `GestureRecognizer(options:)` to specify
the video or livestream running mode. The livestream mode also requires the
additional `gestureRecognizerLiveStreamDelegate` configuration option, which
enables the Gesture Recognizer to deliver gesture recognition results to the delegate
asynchronously.

Choose the tab corresponding to your running mode to see how to create the task
and run inference.

### Swift

### Image

```
import MediaPipeTasksVision

let modelPath = Bundle.main.path(forResource: "gesture_recognizer",
                                      ofType: "task")

let options = GestureRecognizerOptions()
options.baseOptions.modelAssetPath = modelPath
options.runningMode = .image
options.minHandDetectionConfidence = minHandDetectionConfidence
options.minHandPresenceConfidence = minHandPresenceConfidence
options.minTrackingConfidence = minHandTrackingConfidence
options.numHands = numHands

let gestureRecognizer = try GestureRecognizer(options: options)
```

### Video

```
import MediaPipeTasksVision

let modelPath = Bundle.main.path(forResource: "gesture_recognizer",
                                      ofType: "task")

let options = GestureRecognizerOptions()
options.baseOptions.modelAssetPath = modelPath
options.runningMode = .video
options.minHandDetectionConfidence = minHandDetectionConfidence
options.minHandPresenceConfidence = minHandPresenceConfidence
options.minTrackingConfidence = minHandTrackingConfidence
options.numHands = numHands

let gestureRecognizer = try GestureRecognizer(options: options)
```

### Livestream

```
import MediaPipeTasksVision

// Class that conforms to the `GestureRecognizerLiveStreamDelegate` protocol and
// implements the method that the gesture recognizer calls once it finishes
// performing recognizing hand gestures in each input frame.
class GestureRecognizerResultProcessor: NSObject, GestureRecognizerLiveStreamDelegate {

  func gestureRecognizer(
    _ gestureRecognizer: GestureRecognizer,
    didFinishRecognition result: GestureRecognizerResult?,
    timestampInMilliseconds: Int,
    error: Error?) {

    // Process the gesture recognizer result or errors here.

  }
}

let modelPath = Bundle.main.path(
  forResource: "gesture_recognizer",
  ofType: "task")

let options = GestureRecognizerOptions()
options.baseOptions.modelAssetPath = modelPath
options.runningMode = .liveStream
options.minHandDetectionConfidence = minHandDetectionConfidence
options.minHandPresenceConfidence = minHandPresenceConfidence
options.minTrackingConfidence = minHandTrackingConfidence
options.numHands = numHands

// Assign an object of the class to the `gestureRecognizerLiveStreamDelegate`
// property.
let processor = GestureRecognizerResultProcessor()
options.gestureRecognizerLiveStreamDelegate = processor

let gestureRecognizer = try GestureRecognizer(options: options)
```

### Objective-C

### Image

```
@import MediaPipeTasksVision;

NSString *modelPath =
  [[NSBundle mainBundle] pathForResource:@"gesture_recognizer"
                                  ofType:@"task"];

MPPGestureRecognizerOptions *options =
  [[MPPGestureRecognizerOptions alloc] init];
options.baseOptions.modelAssetPath = modelPath;
options.runningMode = MPPRunningModeImage;
options.minHandDetectionConfidence = minHandDetectionConfidence
options.minHandPresenceConfidence = minHandPresenceConfidence
options.minTrackingConfidence = minHandTrackingConfidence
options.numHands = numHands

MPPGestureRecognizer *gestureRecognizer =
      [[MPPGestureRecognizer alloc] initWithOptions:options error:nil];
```

### Video

```
@import MediaPipeTasksVision;

NSString *modelPath =
  [[NSBundle mainBundle] pathForResource:@"gesture_recognizer"
                                  ofType:@"task"];

MPPGestureRecognizerOptions *options =
  [[MPPGestureRecognizerOptions alloc] init];
options.baseOptions.modelAssetPath = modelPath;
options.runningMode = MPPRunningModeVideo;
options.minHandDetectionConfidence = minHandDetectionConfidence
options.minHandPresenceConfidence = minHandPresenceConfidence
options.minTrackingConfidence = minHandTrackingConfidence
options.numHands = numHands

MPPGestureRecognizer *gestureRecognizer =
      [[MPPGestureRecognizer alloc] initWithOptions:options error:nil];
```

### Livestream

```
@import MediaPipeTasksVision;

// Class that conforms to the `MPPGestureRecognizerLiveStreamDelegate` protocol
// and implements the method that the gesture recognizer calls once it finishes
// performing gesture recognition on each input frame.

@interface APPGestureRecognizerResultProcessor : NSObject 

@end

@implementation APPGestureRecognizerResultProcessor

-   (void)gestureRecognizer:(MPPGestureRecognizer *)gestureRecognizer
    didFinishRecognitionWithResult:(MPPGestureRecognizerResult *)gestureRecognizerResult
           timestampInMilliseconds:(NSInteger)timestampInMilliseconds
                             error:(NSError *)error {

    // Process the gesture recognizer result or errors here.

}

@end

NSString *modelPath =
  [[NSBundle mainBundle] pathForResource:@"gesture_recognizer"
                                  ofType:@"task"];

MPPGestureRecognizerOptions *options =
  [[MPPGestureRecognizerOptions alloc] init];
options.baseOptions.modelAssetPath = modelPath;
options.runningMode = MPPRunningModeLiveStream;
options.minHandDetectionConfidence = minHandDetectionConfidence
options.minHandPresenceConfidence = minHandPresenceConfidence
options.minTrackingConfidence = minHandTrackingConfidence
options.numHands = numHands

// Assign an object of the class to the `gestureRecognizerLiveStreamDelegate`
// property.
APPGestureRecognizerResultProcessor *processor =
  [APPGestureRecognizerResultProcessor new];
options.gestureRecognizerLiveStreamDelegate = processor;

MPPGestureRecognizer *gestureRecognizer =
      [[MPPGestureRecognizer alloc] initWithOptions:options error:nil];
```

**Note:** If you use the video mode or livestream mode, Gesture Recognizer uses
tracking to avoid triggering palm detection model on every frame, which helps
reduce latency.

### Configuration options

This task has the following configuration options for iOS apps:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `runningMode` | Sets the running mode for the task. There are three modes:    IMAGE: The mode for single image inputs.    VIDEO: The mode for decoded frames of a video.    LIVE\_STREAM: The mode for a livestream of input data, such as from a camera. In this mode, resultListener must be called to set up a listener to receive results asynchronously. In this mode, `gestureRecognizerLiveStreamDelegate` must be set to an instance of a class that implements the `GestureRecognizerLiveStreamDelegate` to receive the results of performing gesture recognition asynchronously. | {`RunningMode.image, RunningMode.video, RunningMode.liveStream`} | `RunningMode.image` |
| `num_hands` | The maximum number of hands can be detected by the `GestureRecognizer`. | `Any integer > 0` | `1` |
| `min_hand_detection_confidence` | The minimum confidence score for the hand detection to be considered successful in palm detection model. | `0.0 - 1.0` | `0.5` |
| `min_hand_presence_confidence` | The minimum confidence score of hand presence score in the hand landmark detection model. In Video mode and Live stream mode of Gesture Recognizer, if the hand presence confident score from the hand landmark model is below this threshold, it triggers the palm detection model. Otherwise, a lightweight hand tracking algorithm is used to determine the location of the hand(s) for subsequent landmark detection. | `0.0 - 1.0` | `0.5` |
| `min_tracking_confidence` | The minimum confidence score for the hand tracking to be considered successful. This is the bounding box IoU threshold between hands in the current frame and the last frame. In Video mode and Stream mode of Gesture Recognizer, if the tracking fails, Gesture Recognizer triggers hand detection. Otherwise, the hand detection is skipped. | `0.0 - 1.0` | `0.5` |
| `canned_gestures_classifier_options` | Options for configuring the canned gestures classifier behavior. The canned gestures are `["None", "Closed_Fist", "Open_Palm", "Pointing_Up", "Thumb_Down", "Thumb_Up", "Victory", "ILoveYou"]` - Display names locale: the locale to use for display names specified through the TFLite Model Metadata, if any. - Max results: the maximum number of top-scored classification results to return. If < 0, all available results will be returned. - Score threshold: the score below which results are rejected. If set to 0, all available results will be returned. - Category allowlist: the allowlist of category names. If non-empty, classification results whose category is not in this set will be filtered out. Mutually exclusive with denylist. - Category denylist: the denylist of category names. If non-empty, classification results whose category is in this set will be filtered out. Mutually exclusive with allowlist. | * Display names locale: `any string` * Max results: `any integer` * Score threshold: `0.0-1.0` * Category allowlist: `vector of strings` * Category denylist: `vector of strings` | * Display names locale: `"en"` * Max results: `-1` * Score threshold: `0` * Category allowlist: empty * Category denylist: empty |
| `custom_gestures_classifier_options` | Options for configuring the custom gestures classifier behavior. - Display names locale: the locale to use for display names specified through the TFLite Model Metadata, if any. - Max results: the maximum number of top-scored classification results to return. If < 0, all available results will be returned. - Score threshold: the score below which results are rejected. If set to 0, all available results will be returned. - Category allowlist: the allowlist of category names. If non-empty, classification results whose category is not in this set will be filtered out. Mutually exclusive with denylist. - Category denylist: the denylist of category names. If non-empty, classification results whose category is in this set will be filtered out. Mutually exclusive with allowlist. | * Display names locale: `any string` * Max results: `any integer` * Score threshold: `0.0-1.0` * Category allowlist: `vector of strings` * Category denylist: `vector of strings` | * Display names locale: `"en"` * Max results: `-1` * Score threshold: `0` * Category allowlist: empty * Category denylist: empty |
| `result_listener` | Sets the result listener to receive the classification results asynchronously when the gesture recognizer is in the live stream mode. Can only be used when running mode is set to `LIVE_STREAM` | `ResultListener` | N/A | N/A |

When the running mode is set to livestream, the Gesture Recognizer requires the
additional `gestureRecognizerLiveStreamDelegate` configuration option, which
enables the Gesture Recognizer to deliver gesture recognition results asynchronously.
The delegate must implement the
`gestureRecognizer(_:didFinishRecognition:timestampInMilliseconds:error:)`
method, which the Gesture Recognizer calls after processing the results of performing
gesture recognition on each frame.

| Option name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `gestureRecognizerLiveStreamDelegate` | Enables Gesture Recognizer to receive the gesture recognition results asynchronously in livestream mode. The class whose instance is set to this property must implement the `gestureRecognizer(_:didFinishRecognition:timestampInMilliseconds:error:)` method. | Not applicable | Not set |

## Prepare data

You need to convert the input image or frame to an `MPImage` object before
passing it to the Gesture Recognizer. `MPImage` supports different types of iOS image
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
values. Gesture Recognizer does not support mirrored orientations like `.upMirrored`,
`.downMirrored`, `.leftMirrored`, `.rightMirrored`.

For more information about `UIImage`, refer to the [UIImage Apple Developer
Documentation](https://developer.apple.com/documentation/uikit/uiimage).

### CVPixelBuffer

The `CVPixelBuffer` format is well-suited for applications that generate frames
and use the iOS [CoreImage](https://developer.apple.com/documentation/coreimage)
framework for processing.

The `CVPixelBuffer` format is well-suited for the following running modes:

* Images: apps that generate `CVPixelBuffer` images after some processing
  using iOS's `CoreImage` framework can be sent to the Gesture Recognizer in the
  image running mode.
* Videos: video frames can be converted to the `CVPixelBuffer` format for
  processing, and then sent to the Gesture Recognizer in video mode.
* livestream: apps using an iOS camera to generate frames may be converted
  into the `CVPixelBuffer` format for processing before being sent to the
  Gesture Recognizer in livestream mode.

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

To run the Gesture Recognizer, use the `recognize()` method specific to the assigned
running mode:

* Still image: `recognize(image:)`
* Video: `recognize(videoFrame:timestampInMilliseconds:)`
* Livestream: `recognizeAsync(image:timestampInMilliseconds:)`

The following code samples show basic examples of how to run Gesture Recognizer in
these different running modes:

### Swift

### Image

```
let result = try gestureRecognizer.recognize(image: image)
```

### Video

```
let result = try gestureRecognizer.recognize(
  videoFrame: image,
  timestampInMilliseconds: timestamp)
```

### Livestream

```
try gestureRecognizer.recognizeAsync(
  image: image,
  timestampInMilliseconds: timestamp)
```

### Objective-C

### Image

```
  MPPGestureRecognizerResult *result =
    [gestureRecognizer recognizeImage:mppImage
                                error:nil];
```

### Video

```
MPPGestureRecognizerResult *result =
  [gestureRecognizer recognizeVideoFrame:image
                 timestampInMilliseconds:timestamp
                                   error:nil];
```

### Livestream

```
BOOL success =
  [gestureRecognizer recognizeAsyncImage:image
                 timestampInMilliseconds:timestamp
                                   error:nil];
```

The example code allows the
user to switch between processing modes which may not be required for your use
case.

Note the following:

* When running in video mode or livestream mode, you must also provide the
  timestamp of the input frame to the Gesture Recognizer task.
* When running in image or video mode, the Gesture Recognizer task blocks the
  current thread until it finishes processing the input image or frame. To
  avoid blocking the current thread, execute the processing in a background
  thread using iOS
  [Dispatch](https://developer.apple.com/documentation/dispatch) or
  [NSOperation](https://developer.apple.com/documentation/foundation/nsoperation)
  frameworks.
* When running in livestream mode, the Gesture Recognizer task returns immediately
  and doesn't block the current thread. It invokes the
  `gestureRecognizer(_:didFinishRecognition:timestampInMilliseconds:error:)`
  method with the gesture recognition result after processing each input
  frame. The Gesture Recognizer invokes this method asynchronously on a dedicated
  serial dispatch queue. For displaying results on the user interface,
  dispatch the results to the main queue after processing the results. If the
  `recognizeAsync` function is called when the Gesture Recognizer task is busy
  processing another frame, the Gesture Recognizer ignores the new input frame.

## Handle and display results

Upon running inference, the Gesture Recognizer task returns a
`GestureRecognizerResult` which contains hand landmarks in image coordinates,
hand landmarks in world coordinates, handedness(left/right hand), and hand
gestures categories of the detected hands.

The following shows an example of the output data from this task:

The resulted `GestureRecognizerResult` contains four components, and each component is an array, where each element contains the detected result of a single detected hand.

* Handedness

  Handedness represents whether the detected hands are left or right hands.
* Gestures

  The recognized gesture categories of the detected hands.
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
GestureRecognizerResult:
  Handedness:
    Categories #0:
      index        : 0
      score        : 0.98396
      categoryName : Left
  Gestures:
    Categories #0:
      score        : 0.76893
      categoryName : Thumb_Up
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

The following images shows a visualization of the task output:

![A hand in a thumbs up motion with the skeletal structure of the hand mapped](/static/mediapipe/images/solutions/gesture-recognizer.png)

Send feedback
