--- source: https://ai.google.dev/edge/mediapipe/solutions/vision/pose_landmarker/ios ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [MediaPipe](https://developers.google.com/edge/mediapipe/solutions/guide)

Send feedback

# Pose landmark detection guide for iOS Stay organized with collections Save and categorize content based on your preferences.



The Pose Landmarker task lets you detect landmarks of human bodies in an image or
video. You can use this task to identify key body locations, analyze posture,
and categorize movements. This task uses machine learning (ML) models that work
with single images or video. The task outputs body pose landmarks in image
coordinates and in 3-dimensional world coordinates.

These instructions show you how to use the Pose Landmarker with iOS apps. The code
sample described in these instructions is available on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/pose_landmarker/ios).

You can see this task in action by viewing this [Web
demo](https://google-ai-edge.github.io/mediapipe-samples-web/#/vision/pose_landmarker).
For more information about the capabilities, models, and configuration options
of this task, see the
[Overview](https://developers.google.com/mediapipe/solutions/vision/pose_landmarker/index).

## Code example

The MediaPipe Tasks example code is a basic implementation of a Pose Landmarker
app for iOS. The example uses the camera on a physical iOS device to detect
detect poses in a continuous video stream. The app can also detect poses in
images and videos from the device gallery.

You can use the app as a starting point for your own iOS app, or refer to it
when modifying an existing app. The Pose Landmarker example code is hosted on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/pose_landmarker/ios).

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
   only the files for the Pose Landmarker example app:

   ```
   cd mediapipe-samples
   git sparse-checkout init --cone
   git sparse-checkout set examples/pose_landmarker/ios/
   ```

After creating a local version of the example code, you can install the
MediaPipe task library, open the project using Xcode and run the app. For
instructions, see the [Setup Guide for iOS](/mediapipe/solutions/setup_ios).

### Key components

The following files contain the crucial code for the Pose Landmarker example
application:

* [PoseLandmarkerService.swift](https://github.com/google-ai-edge/mediapipe-samples/blob/main/examples/pose_landmarker/ios/PoseLandmarker/Services/PoseLandmarkerService.swift):
  Initializes the landmarker, handles the model selection and runs inference
  on the input data.
* [CameraViewController](https://github.com/google-ai-edge/mediapipe-samples/blob/main/examples/pose_landmarker/ios/PoseLandmarker/ViewContoller/CameraViewController.swift):
  Implements the UI for the live camera feed input mode and visualizes the
  landmarks.
* [MediaLibraryViewController.swift](https://github.com/google-ai-edge/mediapipe-samples/blob/main/examples/pose_landmarker/ios/PoseLandmarker/ViewContoller/MediaLibraryViewController.swift):
  Implements the UI for the still image and video file input mode and
  visualizes the landmarks.

## Setup

This section describes key steps for setting up your development environment and
code projects to use Pose Landmarker. For general information on setting up your
development environment for using MediaPipe tasks, including platform version
requirements, see the [Setup guide for iOS](/mediapipe/solutions/setup_ios).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Dependencies

Pose Landmarker uses the `MediaPipeTasksVision` library, which must be installed
using CocoaPods. The library is compatible with both Swift and Objective-C apps
and does not require any additional language-specific setup.

For instructions to install CocoaPods on macOS, refer to the [CocoaPods
installation guide](https://guides.CocoaPods.org/using/getting-started.html).
For instructions on how to create a `Podfile` with the necessary pods for your
app, refer to [Using
CocoaPods](https://guides.CocoaPods.org/using/using-CocoaPods.html).

Add the MediaPipeTasksVision pod in the `Podfile` using the following code:

```
target 'MyPoseLandmarkerApp' do
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

The MediaPipe Pose Landmarker task requires a trained bundle that is compatible
with this task. For more information on available trained models for
Pose Landmarker, see the task overview [Models
section](https://developers.google.com/mediapipe/solutions/vision/pose_landmarker/index#models).

Use the [`download_models.sh`
script](https://github.com/google-ai-edge/mediapipe-samples/blob/main/examples/pose_landmarker/ios/RunScripts/download_models.sh)
to download the models and add it to your project directory using Xcode. For
instructions on how to add files to your Xcode project, refer to [Managing files
and folders in your Xcode
project](https://developer.apple.com/documentation/xcode/managing-files-and-folders-in-your-xcode-project).

Use the `BaseOptions.modelAssetPath` property to specify the path to the model
in your app bundle. For a code example, see the next section.

## Create the task

You can create the Pose Landmarker task by calling one of its initializers. The
`PoseLandmarker(options:)` initializer accepts values for the configuration
options.

If you don't need a Pose Landmarker initialized with customized configuration
options, you can use the `PoseLandmarker(modelPath:)` initializer to create an
Pose Landmarker with the default options. For more information about configuration
options, see [Configuration Overview](#configuration).

The Pose Landmarker task supports 3 input data types: still images, video files
and live video streams. By default, `PoseLandmarker(modelPath:)` initializes a
task for still images. If you want your task to be initialized to process video
files or live video streams, use `PoseLandmarker(options:)` to specify the video
or livestream running mode. The livestream mode also requires the additional
`poseLandmarkerLiveStreamDelegate` configuration option, which enables the
Pose Landmarker to deliver the pose landmark detection results to the delegate
asynchronously.

Choose the tab corresponding to your running mode to see how to create the task
and run inference.

### Swift

### Image

```
import MediaPipeTasksVision

let modelPath = Bundle.main.path(forResource: "pose_landmarker",
                                      ofType: "task")

let options = PoseLandmarkerOptions()
options.baseOptions.modelAssetPath = modelPath
options.runningMode = .image
options.minPoseDetectionConfidence = minPoseDetectionConfidence
options.minPosePresenceConfidence = minPosePresenceConfidence
options.minTrackingConfidence = minTrackingConfidence
options.numPoses = numPoses

let poseLandmarker = try PoseLandmarker(options: options)
```

### Video

```
import MediaPipeTasksVision

let modelPath = Bundle.main.path(forResource: "pose_landmarker",
                                      ofType: "task")

let options = PoseLandmarkerOptions()
options.baseOptions.modelAssetPath = modelPath
options.runningMode = .video
options.minPoseDetectionConfidence = minPoseDetectionConfidence
options.minPosePresenceConfidence = minPosePresenceConfidence
options.minTrackingConfidence = minTrackingConfidence
options.numPoses = numPoses

let poseLandmarker = try PoseLandmarker(options: options)
```

### Livestream

```
import MediaPipeTasksVision

// Class that conforms to the `PoseLandmarkerLiveStreamDelegate` protocol and
// implements the method that the pose landmarker calls once it finishes
// performing pose landmark detection in each input frame.
class PoseLandmarkerResultProcessor: NSObject, PoseLandmarkerLiveStreamDelegate {

  func poseLandmarker(
    _ poseLandmarker: PoseLandmarker,
    didFinishDetection result: PoseLandmarkerResult?,
    timestampInMilliseconds: Int,
    error: Error?) {

    // Process the pose landmarker result or errors here.

  }
}

let modelPath = Bundle.main.path(forResource: "pose_landmarker",
                                      ofType: "task")

let options = PoseLandmarkerOptions()
options.baseOptions.modelAssetPath = modelPath
options.runningMode = .liveStream
options.minPoseDetectionConfidence = minPoseDetectionConfidence
options.minPosePresenceConfidence = minPosePresenceConfidence
options.minTrackingConfidence = minTrackingConfidence
options.numPoses = numPoses

// Assign an object of the class to the `poseLandmarkerLiveStreamDelegate`
// property.
let processor = PoseLandmarkerResultProcessor()
options.poseLandmarkerLiveStreamDelegate = processor

let poseLandmarker = try PoseLandmarker(options: options)
```

### Objective-C

### Image

```
@import MediaPipeTasksVision;

NSString *modelPath = [[NSBundle mainBundle] pathForResource:@"pose_landmarker"
                                                      ofType:@"task"];

MPPPoseLandmarkerOptions *options = [[MPPPoseLandmarkerOptions alloc] init];
options.baseOptions.modelAssetPath = modelPath;
options.runningMode = MPPRunningModeImage;
options.minPoseDetectionConfidence = minPoseDetectionConfidence;
options.minPosePresenceConfidence = minPosePresenceConfidence;
options.minTrackingConfidence = minTrackingConfidence;
options.numPoses = numPoses;

MPPPoseLandmarker *poseLandmarker =
  [[MPPPoseLandmarker alloc] initWithOptions:options error:nil];
```

### Video

```
@import MediaPipeTasksVision;

NSString *modelPath = [[NSBundle mainBundle] pathForResource:@"pose_landmarker"
                                                      ofType:@"task"];

MPPPoseLandmarkerOptions *options = [[MPPPoseLandmarkerOptions alloc] init];
options.baseOptions.modelAssetPath = modelPath;
options.runningMode = MPPRunningModeVideo;
options.minPoseDetectionConfidence = minPoseDetectionConfidence;
options.minPosePresenceConfidence = minPosePresenceConfidence;
options.minTrackingConfidence = minTrackingConfidence;
options.numPoses = numPoses;

MPPPoseLandmarker *poseLandmarker =
  [[MPPPoseLandmarker alloc] initWithOptions:options error:nil];
```

### Livestream

```
@import MediaPipeTasksVision;

// Class that conforms to the `MPPPoseLandmarkerLiveStreamDelegate` protocol
// and implements the method that the pose landmarker calls once it finishes
// performing pose landmarks= detection in each input frame.

@interface APPPoseLandmarkerResultProcessor : NSObject 

@end

@implementation APPPoseLandmarkerResultProcessor

-   (void)poseLandmarker:(MPPPoseLandmarker *)poseLandmarker
    didFinishDetectionWithResult:(MPPPoseLandmarkerResult *)poseLandmarkerResult
         timestampInMilliseconds:(NSInteger)timestampInMilliseconds
                           error:(NSError *)error {

    // Process the pose landmarker result or errors here.

}

@end

NSString *modelPath = [[NSBundle mainBundle] pathForResource:@"pose_landmarker"
                                                      ofType:@"task"];

MPPPoseLandmarkerOptions *options = [[MPPPoseLandmarkerOptions alloc] init];
options.baseOptions.modelAssetPath = modelPath;
options.runningMode = MPPRunningModeLiveStream;
options.minPoseDetectionConfidence = minPoseDetectionConfidence;
options.minPosePresenceConfidence = minPosePresenceConfidence;
options.minTrackingConfidence = minTrackingConfidence;
options.numPoses = numPoses;

// Assign an object of the class to the `poseLandmarkerLiveStreamDelegate`
// property.
APPPoseLandmarkerResultProcessor *processor =
  [APPPoseLandmarkerResultProcessor new];
options.poseLandmarkerLiveStreamDelegate = processor;

MPPPoseLandmarker *poseLandmarker =
  [[MPPPoseLandmarker alloc] initWithOptions:options error:nil];
```

**Note:** If you use the video mode or livestream mode, Pose Landmarker uses
tracking to avoid triggering palm detection model on every frame, which helps
reduce latency.

### Configuration options

This task has the following configuration options for iOS apps:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `running_mode` | Sets the running mode for the task. There are three modes:    IMAGE: The mode for single image inputs.    VIDEO: The mode for decoded frames of a video.    LIVE\_STREAM: The mode for a livestream of input data, such as from a camera. In this mode, `poseLandmarkerLiveStreamDelegate` must be set to an instance of a class that implements the `PoseLandmarkerLiveStreamDelegate` to receive the results of performing pose landmark detection asynchronously. | {`RunningMode.image, RunningMode.video, RunningMode.liveStream`} | `RunningMode.image` |
| `num_poses` | The maximum number of poses that can be detected by the Pose Landmarker. | `Integer > 0` | `1` |
| `min_pose_detection_confidence` | The minimum confidence score for the pose detection to be considered successful. | `Float [0.0,1.0]` | `0.5` |
| `min_pose_presence_confidence` | The minimum confidence score of pose presence score in the pose landmark detection. | `Float [0.0,1.0]` | `0.5` |
| `min_tracking_confidence` | The minimum confidence score for the pose tracking to be considered successful. | `Float [0.0,1.0]` | `0.5` |
| `output_segmentation_masks` | Whether Pose Landmarker outputs a segmentation mask for the detected pose. | `Boolean` | `False` |
| `result_callback` | Sets the result listener to receive the landmarker results asynchronously when Pose Landmarker is in the live stream mode. Can only be used when running mode is set to `LIVE_STREAM` | `ResultListener` | `N/A` |

#### Livestream configuration

When the running mode is set to livestream, the Pose Landmarker requires the
additional `poseLandmarkerLiveStreamDelegate` configuration option, which
enables the Pose Landmarker to deliver pose landmark detection results
asynchronously. The delegate must implement the
`poseLandmarker(_:didFinishDetection:timestampInMilliseconds:error:)` method,
which the Pose Landmarker calls after processing the results of performing pose
landmark detection on each frame.

| Option name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `poseLandmarkerLiveStreamDelegate` | Enables Pose Landmarker to receive the results of performing pose landmark detection asynchronously in livestream mode. The class whose instance is set to this property must implement the `poseLandmarker(_:didFinishDetection:timestampInMilliseconds:error:)` method. | Not applicable | Not set |

## Prepare data

You need to convert the input image or frame to an `MPImage` object before
passing it to the Pose Landmarker. `MPImage` supports different types of iOS image
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
values. Pose Landmarker does not support mirrored orientations like `.upMirrored`,
`.downMirrored`, `.leftMirrored`, `.rightMirrored`.

For more information about `UIImage`, refer to the [UIImage Apple Developer
Documentation](https://developer.apple.com/documentation/uikit/uiimage).

### CVPixelBuffer

The `CVPixelBuffer` format is well-suited for applications that generate frames
and use the iOS [CoreImage](https://developer.apple.com/documentation/coreimage)
framework for processing.

The `CVPixelBuffer` format is well-suited for the following running modes:

* Images: apps that generate `CVPixelBuffer` images after some processing
  using iOS's `CoreImage` framework can be sent to the Pose Landmarker in the
  image running mode.
* Videos: video frames can be converted to the `CVPixelBuffer` format for
  processing, and then sent to the Pose Landmarker in video mode.
* livestream: apps using an iOS camera to generate frames may be converted
  into the `CVPixelBuffer` format for processing before being sent to the
  Pose Landmarker in livestream mode.

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

To run the Pose Landmarker, use the `detect()` method specific to the assigned
running mode:

* Still image: `detect(image:)`
* Video: `detect(videoFrame:timestampInMilliseconds:)`
* Livestream: `detectAsync(image:timestampInMilliseconds:)`

The following code samples show simple examples of how to run Pose Landmarker in
these different running modes:

### Swift

### Image

```
let result = try poseLandmarker.detect(image: image)
```

### Video

```
let result = try poseLandmarker.detect(
  videoFrame: image,
  timestampInMilliseconds: timestamp)
```

### Livestream

```
try poseLandmarker.detectAsync(
  image: image,
  timestampInMilliseconds: timestamp)
```

### Objective-C

### Image

```
MPPPoseLandmarkerResult *result =
  [poseLandmarker detectImage:image error:nil];
```

### Video

```
MPPPoseLandmarkerResult *result =
  [poseLandmarker detectVideoFrame:image
           timestampInMilliseconds:timestamp
                             error:nil];
```

### Livestream

```
BOOL success =
  [poseLandmarker detectAsyncImage:image
           timestampInMilliseconds:timestamp
                             error:nil];
```

The Pose Landmarker code example shows the implementations of each of these modes
in more detail `detect(image:)`, `detect(videoFrame:timestampInMilliseconds:)`,
and `detectAsync(image:timestampInMilliseconds:)`. The example code allows the
user to switch between processing modes which may not be required for your use
case.

Note the following:

* When running in video mode or livestream mode, you must also provide the
  timestamp of the input frame to the Pose Landmarker task.
* When running in image or video mode, the Pose Landmarker task blocks the
  current thread until it finishes processing the input image or frame. To
  avoid blocking the current thread, execute the processing in a background
  thread using iOS
  [Dispatch](https://developer.apple.com/documentation/dispatch) or
  [NSOperation](https://developer.apple.com/documentation/foundation/nsoperation)
  frameworks.
* When running in livestream mode, the Pose Landmarker task returns immediately
  and doesn't block the current thread. It invokes the
  `poseLandmarker(_:didFinishDetection:timestampInMilliseconds:error:)` method
  with the pose landmarker result after processing each input frame. The
  Pose Landmarker invokes this method asynchronously on a dedicated serial
  dispatch queue. For displaying results on the user interface, dispatch the
  results to the main queue after processing the results. If the `detectAsync`
  function is called when the Pose Landmarker task is busy processing another
  frame, the Pose Landmarker ignores the new input frame.

## Handle and display results

Upon running inference, the Pose Landmarker task returns a `PoseLandmarkerResult`
which contains the coordinates for each pose landmark.

The following shows an example of the output data from this task:

```
PoseLandmarkerResult:
  Landmarks:
    Landmark #0:
      x            : 0.638852
      y            : 0.671197
      z            : 0.129959
      visibility   : 0.9999997615814209
      presence     : 0.9999984502792358
    Landmark #1:
      x            : 0.634599
      y            : 0.536441
      z            : -0.06984
      visibility   : 0.999909
      presence     : 0.999958
    ... (33 landmarks per pose)
  WorldLandmarks:
    Landmark #0:
      x            : 0.067485
      y            : 0.031084
      z            : 0.055223
      visibility   : 0.9999997615814209
      presence     : 0.9999984502792358
    Landmark #1:
      x            : 0.063209
      y            : -0.00382
      z            : 0.020920
      visibility   : 0.999976
      presence     : 0.999998
    ... (33 world landmarks per pose)
  SegmentationMasks:
    ... (pictured below)
```

The output contains both normalized coordinates (`Landmarks`) and world
coordinates (`WorldLandmarks`) for each landmark.

The output contains the following normalized coordinates (`Landmarks`):

* `x` and `y`: Landmark coordinates normalized between 0.0 and 1.0 by the
  image width (`x`) and height (`y`).
* `z`: The landmark depth, with the depth at the midpoint of the hips as the
  origin. The smaller the value, the closer the landmark is to the camera. The
  magnitude of z uses roughly the same scale as `x`.
* `visibility`: The likelihood of the landmark being visible within the image.

The output contains the following world coordinates (`WorldLandmarks`):

* `x`, `y`, and `z`: Real-world 3-dimensional coordinates in meters, with the
  midpoint of the hips as the origin.
* `visibility`: The likelihood of the landmark being visible within the image.

The following image shows a visualization of the task output:

![A woman in a meditative pose. Her pose is highlighted with a wireframe that indicates the positioning of her limbs and torso](/static/mediapipe/images/solutions/examples/pose_detector.png)

The optional segmentation mask represents the likelihood of each pixel belonging
to a detected person. The following image is a segmentation mask of the
task output:

![Segmentation mask of the previous image that outlines the shape of the woman](/static/mediapipe/images/solutions/pose_detector_mask.png)

The Pose Landmarker example code demonstrates how to display the Pose Landmarker
results.






Send feedback