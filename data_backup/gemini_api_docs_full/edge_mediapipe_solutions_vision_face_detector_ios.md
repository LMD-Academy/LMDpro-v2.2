--- source: https://ai.google.dev/edge/mediapipe/solutions/vision/face_detector/ios ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [MediaPipe](https://developers.google.com/edge/mediapipe/solutions/guide)

Send feedback

# Face detection guide for iOS Stay organized with collections Save and categorize content based on your preferences.



The Face Detector task lets you detect faces in an image or video. You can use
this task to locate faces and facial features within a frame. This task uses a
machine learning (ML) model that works with single images or a continuous stream
of images. The task outputs face locations, along with the following facial key
points: left eye, right eye, nose tip, mouth, left eye tragion, and right eye
tragion.

The code sample described in these instructions is available on [GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/face_detector/ios).
You can see this task in action by viewing this [Web
demo](https://google-ai-edge.github.io/mediapipe-samples-web/#/vision/face_detector). For more
information about the capabilities, models, and configuration options of this
task, see the
[Overview](https://developers.google.com/mediapipe/solutions/vision/face_detector).

## Code example

The MediaPipe Tasks example code is a simple implementation of a Face Detector
app for iOS. The example uses the camera on a physical Android device to detect
faces in a continuous video stream. The app can also detect faces in images and
videos from the device gallery.

You can use the app as a starting point for your own iOS app, or refer to it
when modifying an existing app. The Face Detector example code is hosted on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/face_detector/ios).

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
   only the files for the Face Detector example app:

   ```
   cd mediapipe-samples
   git sparse-checkout init --cone
   git sparse-checkout set examples/face_detector/ios/
   ```

After creating a local version of the example code, you can install the
MediaPipe task library, open the project using Xcode and run the app. For
instructions, see the [Setup Guide for iOS](/mediapipe/solutions/setup_ios).

### Key components

The following files contain the crucial code for the Face Detector example
application:

* [FaceDetectorService.swift](https://github.com/googlesamples/mediapipe/blob/main/examples/face_detector/ios/FaceDetector/Services/FaceDetectorService.swift):
  Initializes the detector, handles the model selection and runs inference on the input data..
* [CameraViewController](https://github.com/googlesamples/mediapipe/blob/main/examples/face_detector/ios/FaceDetector/ViewContoller/CameraViewController.swift):
  Implements the UI for the live camera feed input mode and visualizes the detection results.
* [MediaLibraryViewController.swift](https://github.com/googlesamples/mediapipe/blob/main/examples/face_detector/ios/FaceDetector/ViewContoller/CameraViewController.swift):
  Implements the UI for the still image and video file input mode and visualizes the detection results.

## Setup

This section describes key steps for setting up your development environment and
code projects to use Face Detector. For general information on setting up your
development environment for using MediaPipe tasks, including platform version
requirements, see the [Setup guide for iOS](/mediapipe/solutions/setup_ios).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Dependencies

Face Detector uses the `MediaPipeTasksVision` library, which must be installed
using CocoaPods. The library is compatible with both Swift and Objective-C apps
and does not require any additional language-specific setup.

For instructions to install CocoaPods on macOS, refer to the [CocoaPods
installation guide](https://guides.CocoaPods.org/using/getting-started.html).
For instructions on how to create a `Podfile` with the necessary pods for your
app, refer to [Using
CocoaPods](https://guides.CocoaPods.org/using/using-cocoapods.html).

Add the MediaPipeTasksVision pod in the `Podfile` using the following code:

```
target 'MyFaceDetectorApp' do
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

The MediaPipe Face Detector task requires a trained model that is compatible
with this task. For more information about the available trained models for
Face Detector, see the task overview [Models
section](https://developers.google.com/mediapipe/solutions/vision/face_detector/index#models).

Select and download a model, and add it to your project directory using Xcode.
For instructions on how to add files to your Xcode project, refer to [Managing
files and folders in your Xcode
project](https://developer.apple.com/documentation/xcode/managing-files-and-folders-in-your-xcode-project).

Use the `BaseOptions.modelAssetPath` property to specify the path to the model
in your app bundle. For a code example, see the next section.

## Create the task

You can create the Face Detector task by calling one of its initializers. The
`FaceDetector(options:)` initializer accepts values for the configuration
options.

If you don't need a Face Detector initialized with customized configuration
options, you can use the `FaceDetector(modelPath:)` initializer to create an
Face Detector with the default options. For more information about configuration
options, see [Configuration Overview](#configuration).

The Face Detector task supports 3 input data types: still images, video files
and live video streams. By default, `FaceDetector(modelPath:)` initializes a
task for still images. If you want your task to be initialized to process video
files or live video streams, use `FaceDetector(options:)` to specify the video
or livestream running mode. The livestream mode also requires the additional
`faceDetectorLiveStreamDelegate` configuration option, which enables the
Face Detector to deliver face detection results to the delegate asynchronously.

Choose the tab corresponding to your running mode to see how to create the task
and run inference.

### Swift

### Image

```
import MediaPipeTasksVision

let modelPath = Bundle.main.path(forResource: "model",
                                      ofType: "tflite")

let options = FaceDetectorOptions()
options.baseOptions.modelAssetPath = modelPath
options.runningMode = .image

let faceDetector = try FaceDetector(options: options)
```

### Video

```
import MediaPipeTasksVision

let modelPath = Bundle.main.path(forResource: "model",
                                      ofType: "tflite")

let options = FaceDetectorOptions()
options.baseOptions.modelAssetPath = modelPath
options.runningMode = .video

let faceDetector = try FaceDetector(options: options)
```

### Livestream

```
import MediaPipeTasksVision

// Class that conforms to the `FaceDetectorLiveStreamDelegate` protocol and
// implements the method that the face detector calls once it finishes
// detecting faces in each input frame.
class FaceDetectorResultProcessor: NSObject, FaceDetectorLiveStreamDelegate {

  func faceDetector(
    _ faceDetector: FaceDetector,
    didFinishDetection result: FaceDetectorResult?,
    timestampInMilliseconds: Int,
    error: Error?) {

    // Process the face detection result or errors here.

  }
}

let modelPath = Bundle.main.path(
  forResource: "model",
  ofType: "tflite")

let options = FaceDetectorOptions()
options.baseOptions.modelAssetPath = modelPath
options.runningMode = .liveStream

// Assign an object of the class to the `faceDetectorLiveStreamDelegate`
// property.
let processor = FaceDetectorResultProcessor()
options.faceDetectorLiveStreamDelegate = processor

let faceDetector = try FaceDetector(options: options)
```

### Objective-C

### Image

```
@import MediaPipeTasksVision;

NSString *modelPath = [[NSBundle mainBundle] pathForResource:@"model"
                                                      ofType:@"tflite"];

MPPFaceDetectorOptions *options = [[MPPFaceDetectorOptions alloc] init];
options.baseOptions.modelAssetPath = modelPath;
options.runningMode = MPPRunningModeImage;

MPPFaceDetector *faceDetector =
      [[MPPFaceDetector alloc] initWithOptions:options error:nil];
```

### Video

```
@import MediaPipeTasksVision;

NSString *modelPath = [[NSBundle mainBundle] pathForResource:@"model"
                                                      ofType:@"tflite"];

MPPFaceDetectorOptions *options = [[MPPFaceDetectorOptions alloc] init];
options.baseOptions.modelAssetPath = modelPath;
options.runningMode = MPPRunningModeVideo;

MPPFaceDetector *faceDetector =
      [[MPPFaceDetector alloc] initWithOptions:options error:nil];
```

### Livestream

```
@import MediaPipeTasksVision;

// Class that conforms to the `MPPFaceDetectorLiveStreamDelegate` protocol
// and implements the method that the face detector calls once it finishes
// detecting faces in each input frame.

@interface APPFaceDetectorResultProcessor : NSObject 

@end

@implementation APPFaceDetectorResultProcessor

-   (void)faceDetector:(MPPFaceDetector *)faceDetector
    didFinishDetectionWithResult:(MPPFaceDetectorResult *)faceDetectorResult
         timestampInMilliseconds:(NSInteger)timestampInMilliseconds
                           error:(NSError *)error {

    // Process the face detector result or errors here.

}

@end

NSString *modelPath = [[NSBundle mainBundle] pathForResource:@"model"
                                                      ofType:@"tflite"];

MPPFaceDetectorOptions *options = [[MPPFaceDetectorOptions alloc] init];
options.baseOptions.modelAssetPath = modelPath;
options.runningMode = MPPRunningModeLiveStream;

// Assign an object of the class to the `faceDetectorLiveStreamDelegate`
// property.
APPFaceDetectorResultProcessor *processor = [APPFaceDetectorResultProcessor new];
options.faceDetectorLiveStreamDelegate = processor;

MPPFaceDetector *faceDetector =
      [[MPPFaceDetector alloc] initWithOptions:options error:nil];
```

**Note:** If you use the video mode or livestream mode, Face Detector uses
tracking to avoid triggering the detection model on every frame, which helps
reduce latency.

### Configuration options

This task has the following configuration options for iOS apps:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `runningMode` | Sets the running mode for the task. There are three modes:    IMAGE: The mode for single image inputs.    VIDEO: The mode for decoded frames of a video.    LIVE\_STREAM: The mode for a livestream of input data, such as from a camera. In this mode, resultListener must be called to set up a listener to receive results asynchronously. | {`RunningMode.image, RunningMode.video, RunningMode.liveStream`} | `RunningMode.image` |
| `minDetectionConfidence` | The minimum confidence score for the face detection to be considered successful. | `Float [0,1]` | `0.5` |
| `minSuppressionThreshold` | The minimum non-maximum-suppression threshold for face detection to be considered overlapped. | `Float [0,1]` | `0.3` |

#### Livestream configuration

When the running mode is set to livestream, the Face Detector requires the
additional `faceDetectorLiveStreamDelegate` configuration option, which enables
the face detector to deliver detection results asynchronously. The delegate
implements the
`faceDetector(_:didFinishDetection:timestampInMilliseconds:error:)` method,
which the Face Detector calls after processing the face detection results for
each frame.

| Option name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `faceDetectorLiveStreamDelegate` | Enables Face Detector to receive face detection results asynchronously in livestream mode. The class whose instance is set to this property must implement the `faceDetector(_:didFinishDetection:timestampInMilliseconds:error:)` method. | Not applicable | Not set |

## Prepare data

You need to convert the input image or frame to an `MPImage` object before
passing it to the Face Detector. `MPImage` supports different types of iOS image
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
values. Face Detector does not support mirrored orientations like `.upMirrored`,
`.downMirrored`, `.leftMirrored`, `.rightMirrored`.

For more information about `UIImage`, refer to the [UIImage Apple Developer
Documentation](https://developer.apple.com/documentation/uikit/uiimage).

### CVPixelBuffer

The `CVPixelBuffer` format is well-suited for applications that generate frames
and use the iOS [CoreImage](https://developer.apple.com/documentation/coreimage)
framework for processing.

The `CVPixelBuffer` format is well-suited for the following running modes:

* Images: apps that generate `CVPixelBuffer` images after some processing
  using iOS's `CoreImage` framework can be sent to the Face Detector in the
  image running mode.
* Videos: video frames can be converted to the `CVPixelBuffer` format for
  processing, and then sent to the Face Detector in video mode.
* livestream: apps using an iOS camera to generate frames may be converted
  into the `CVPixelBuffer` format for processing before being sent to the
  Face Detector in livestream mode.

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

To run the Face Detector, use the `detect()` method specific to the assigned
running mode:

* Still image: `detect(image:)`
* Video: `detect(videoFrame:timestampInMilliseconds:)`
* Livestream: `detectAsync(image:timestampInMilliseconds:)`

The Face Detector returns the detected faces within the input image or frame.

The following code samples show simple examples of how to run Face Detector in
these different running modes:

### Swift

### Image

```
let result = try faceDetector.detect(image: image)
```

### Video

```
let result = try faceDetector.detect(
  videoFrame: image,
  timestampInMilliseconds: timestamp)
```

### Livestream

```
try faceDetector.detectAsync(
  image: image,
  timestampInMilliseconds: timestamp)
```

### Objective-C

### Image

```
MPPFaceDetectorResult *result = [faceDetector detectInImage:image
                                                      error:nil];
```

### Video

```
MPPFaceDetectorResult *result = [faceDetector detectInVideoFrame:image
                                         timestampInMilliseconds:timestamp
                                                           error:nil];
```

### Livestream

```
BOOL success = [faceDetector detectAsyncInImage:image
                        timestampInMilliseconds:timestamp
                                          error:nil];
```

The Face Detector code example shows the implementations of each of these modes
in more detail `detect(image:)`, `detect(videoFrame:timestampInMilliseconds:)`,
and `detectAsync(image:timestampInMilliseconds:)`. The example code allows the
user to switch between processing modes which may not be required for your use
case.

Note the following:

* When running in video mode or livestream mode, you must also provide the
  timestamp of the input frame to the Face Detector task.
* When running in image or video mode, the Face Detector task blocks the
  current thread until it finishes processing the input image or frame. To
  avoid blocking the current thread, execute the processing in a background
  thread using iOS
  [Dispatch](https://developer.apple.com/documentation/dispatch) or
  [NSOperation](https://developer.apple.com/documentation/foundation/nsoperation)
  frameworks.
* When running in livestream mode, the Face Detector task returns immediately
  and doesn't block the current thread. It invokes the
  `faceDetector(_:didFinishDetection:timestampInMilliseconds:error:)` method
  with the face detection result after processing each input frame. The
  Face Detector invokes this method asynchronously on a dedicated serial
  dispatch queue. For displaying results on the user interface, dispatch the
  results to the main queue after processing the results. If the `detectAsync`
  function is called when the Face Detector task is busy processing another
  frame, the Face Detector ignores the new input frame.

## Handle and display results

Upon running inference, the Face Detector task returns an `FaceDetectorResult`
object which contains the bounding boxes for the detected faces and a confidence
score for each detected face.

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

The Face Detector example code demonstrates how to display the results. See the
[code example](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/face_detector/ios) for details.






Send feedback