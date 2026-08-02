# Image segmentation guide for iOS Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/mediapipe/solutions/vision/image_segmenter/ios))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

The Image Segmenter task lets you divide images into regions based on predefined
categories, and apply visual effects like background blurring. These
instructions show you how to use the Image Segmenter with iOS apps.

The code sample described in these instructions is available on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/image_segmentation/ios).

You can see this task in action by viewing the [Web
demo](https://google-ai-edge.github.io/mediapipe-samples-web/#/vision/image_segmenter).
For more information about the capabilities, models, and configuration options
of this task, see the
[Overview](https://ai.google.dev/edge/mediapipe/solutions/vision/image_segmenter).

## Code example

The MediaPipe Tasks code example contains a simple implementation of an
Image Segmenter app for iOS.

The example implements an image segmenter that outputs category masks. It uses
the camera on a physical iOS device to perform image segmentation on a live
camera feed, or on images and videos from the device gallery.

You can use the app as a starting point for your own iOS app, or refer to it
when modifying an existing app. The Image Segmenter example code is hosted on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/image_segmentation/ios).

### Download the code

The following instructions show you how to create a local copy of the example
code using the [git](https://git-scm.com) command line tool.

To download the example code:

1. Clone the git repository using the following command:

   ```
   git clone https://github.com/google-ai-edge/mediapipe-samples/
   ```
2. Optionally, configure your git instance to use sparse checkout, so you have
   only the files for the Image Segmenter example app:

   ```
   cd mediapipe-samples
   git sparse-checkout init --cone
   git sparse-checkout set examples/image_segmentation/ios/
   ```

After creating a local version of the example code, you can install the
MediaPipe task library, open the project using Xcode and run the app. For
instructions, see the [Setup Guide for iOS](/mediapipe/solutions/setup_ios).

### Key components

The following files contain the crucial code for the Image Segmenter example
application:

* [ImageSegmenterService.swift](https://github.com/google-ai-edge/mediapipe-samples/blob/main/examples/image_segmentation/ios/ImageSegmenter/Services/ImageSegmenterService.swift):
  Initializes the Image Segmenter, handles the model selection, and runs
  inference on the input data.
* [CameraViewController.swift](https://github.com/google-ai-edge/mediapipe-samples/blob/main/examples/image_segmentation/ios/ImageSegmenter/ViewContoller/CameraViewController.swift):
  Implements the UI for the live camera feed input mode and visualizes the
  results.
* [MediaLibraryViewController.swift](https://github.com/google-ai-edge/mediapipe-samples/blob/main/examples/image_segmentation/ios/ImageSegmenter/ViewContoller/MediaLibraryViewController.swift)
  Implements the UI for the still image and video file input mode and
  visualizes the results.

## Setup

This section describes key steps for setting up your development environment and
code projects to use Image Segmenter. For general information on setting up your
development environment for using MediaPipe tasks, including platform version
requirements, see the [Setup guide for iOS](/mediapipe/solutions/setup_ios).

### Dependencies

Image Segmenter uses the `MediaPipeTasksVision` library, which must be installed
using CocoaPods. The library is compatible with both Swift and Objective-C apps
and does not require any additional language-specific setup.

For instructions to install CocoaPods on macOS, refer to the [CocoaPods
installation guide](https://guides.CocoaPods.org/using/getting-started.html).
For instructions on how to create a `Podfile` with the necessary pods for your
app, refer to [Using
CocoaPods](https://guides.CocoaPods.org/using/using-CocoaPods.html).

Add the MediaPipeTasksVision pod in the `Podfile` using the following code:

```
target 'MyImageSegmenterApp' do
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

The MediaPipe Image Segmenter task requires a trained model that is compatible
with this task. For more information about the available trained models for
Image Segmenter, see the task overview [Models
section](https://ai.google.dev/edge/mediapipe/solutions/vision/image_segmenter/index#models).

Select and download a model, and add it to your project directory using Xcode.
For instructions on how to add files to your Xcode project, refer to [Managing
files and folders in your Xcode
project](https://developer.apple.com/documentation/xcode/managing-files-and-folders-in-your-xcode-project).

Use the `BaseOptions.modelAssetPath` property to specify the path to the model
in your app bundle. For a code example, see the next section.

## Create the task

You can create the Image Segmenter task by calling one of its initializers. The
`ImageSegmenter(options:)` initializer accepts values for the configuration
options.

If you don't need an Image Segmenter initialized with customized configuration
options, you can use the `ImageSegmenter(modelPath:)` initializer to create an
Image Segmenter with the default options. For more information about configuration
options, see [Configuration Overview](#configuration).

The Image Segmenter task supports 3 input data types: still images, video files
and live video streams. By default, `ImageSegmenter(modelPath:)` initializes a
task for still images. If you want your task to be initialized to process video
files or live video streams, use `ImageSegmenter(options:)` to specify the video
or livestream running mode. The livestream mode also requires the additional
`imageSegmenterLiveStreamDelegate` configuration option, which enables the
Image Segmenter to deliver image segmentation results to the delegate
asynchronously.

Choose the tab corresponding to your running mode to see how to create the task
and run inference.

### Swift

### Image

```
import MediaPipeTasksVision

let modelPath = Bundle.main.path(forResource: "model",
                                      ofType: "tflite")

let options = ImageSegmenterOptions()
options.baseOptions.modelAssetPath = modelPath
options.runningMode = .image
options.shouldOutputCategoryMask = true
options.shouldOutputConfidenceMasks = false

let imageSegmenter = try ImageSegmenter(options: options)
```

### Video

```
import MediaPipeTasksVision

let modelPath = Bundle.main.path(forResource: "model",
                                      ofType: "tflite")

let options = ImageSegmenterOptions()
options.baseOptions.modelAssetPath = modelPath
options.runningMode = .video
options.shouldOutputCategoryMask = true
options.shouldOutputConfidenceMasks = false

let imageSegmenter = try ImageSegmenter(options: options)
```

### Livestream

```
import MediaPipeTasksVision

// Class that conforms to the `imageSegmenterLiveStreamDelegate` protocol and
// implements the method that the image segmenter calls once it finishes
// performing segmentation of each input frame.
class ImageSegmenterResultProcessor: NSObject, ImageSegmenterLiveStreamDelegate {

  func imageSegmenter(
    _ imageSegmenter: ImageSegmenter,
    didFinishSegmentation result: ImageSegmenterResult?,
    timestampInMilliseconds: Int,
    error: Error?) {

    // Process the image segmentation result or errors here.

  }
}

let modelPath = Bundle.main.path(forResource: "model",
                                      ofType: "tflite")

let options = ImageSegmenterOptions()
options.baseOptions.modelAssetPath = modelPath
options.runningMode = .liveStream
options.shouldOutputCategoryMask = true
options.shouldOutputConfidenceMasks = false

// Set `imageSegmenterLiveStreamDelegate` to the object of the class that
// confirms to the `ImageSegmenterLiveStreamDelegate` protocol.
let processor = ImageSegmenterResultProcessor()
options.imageSegmenterLiveStreamDelegate = processor

let imageSegmenter = try ImageSegmenter(options: options)
```

### Objective-C

### Image

```
@import MediaPipeTasksVision;

NSString *modelPath = [[NSBundle mainBundle] pathForResource:@"model"
                                                      ofType:@"tflite"];

MPPImageSegmenterOptions *options = [[MPPImageSegmenterOptions alloc] init];
options.baseOptions.modelAssetPath = modelPath;
options.runningMode = MPPRunningModeImage;
options.shouldOutputCategoryMask = YES;
options.shouldOutputConfidenceMasks = NO;

MPPImageSegmenter *imageSegmenter =
  [[MPPImageSegmenter alloc] initWithOptions:options error:nil];
```

### Video

```
@import MediaPipeTasksVision;

NSString *modelPath = [[NSBundle mainBundle] pathForResource:@"model"
                                                      ofType:@"tflite"];

MPPImageSegmenterOptions *options = [[MPPImageSegmenterOptions alloc] init];
options.baseOptions.modelAssetPath = modelPath;
options.runningMode = MPPRunningModeVideo;
options.shouldOutputCategoryMask = YES;
options.shouldOutputConfidenceMasks = NO;

MPPImageSegmenter *imageSegmenter =
  [[MPPImageSegmenter alloc] initWithOptions:options error:nil];
```

### Livestream

```
@import MediaPipeTasksVision;

// Class that conforms to the `MPPImageSegmenterLiveStreamDelegate` protocol
// and implements the method that the image segmenter calls once it finishes
// performing segmentation of each input frame.

@interface APPImageSegmenterResultProcessor : NSObject 

@end

@implementation APPImageSegmenterResultProcessor

-   (void)imageSegmenter:(MPPImageSegmenter *)imageSegmenter
    didFinishSegmentationWithResult:(MPPImageSegmenterResult *)imageSegmenterResult
         timestampInMilliseconds:(NSInteger)timestampInMilliseconds
                           error:(NSError *)error {

    // Process the image segmentation result or errors here.

}

@end

NSString *modelPath = [[NSBundle mainBundle] pathForResource:@"model"
                                                      ofType:@"tflite"];

MPPImageSegmenterOptions *options = [[MPPImageSegmenterOptions alloc] init];
options.baseOptions.modelAssetPath = modelPath;
options.runningMode = MPPRunningModeLiveStream;
options.shouldOutputCategoryMask = YES;
options.shouldOutputConfidenceMasks = NO;

// Set `imageSegmenterLiveStreamDelegate` to the object of the class that
// confirms to the `MPPImageSegmenterLiveStreamDelegate` protocol.
APPImageSegmenterResultProcessor *processor =
  [APPImageSegmenterResultProcessor new];
options.imageSegmenterLiveStreamDelegate = processor;

MPPImageSegmenter *imageSegmenter =
  [[MPPImageSegmenter alloc] initWithOptions:options error:nil];
```

The Image Segmenter example code implementation allows the user to switch between
processing modes. The approach makes the task creation code more complicated and
may not be appropriate for your use case.

### Configuration options

This task has the following configuration options for iOS apps:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
||  |  |  |  |
| --- | --- | --- | --- |
| `runningMode` | Sets the running mode for the task. There are three modes:    IMAGE: The mode for single image inputs.    VIDEO: The mode for decoded frames of a video.    LIVE\_STREAM: The mode for a livestream of input data, such as from a camera. In this mode, `ImageSegmenterLiveStreamDelegate` must be set to an instance of a class that implements the `ImageSegmenterLiveStreamDelegate` to receive the segmentation results asynchronously. | {`RunningMode.image, RunningMode.video, RunningMode.liveStream`} | `RunningMode.image` |
| `shouldOutputCategoryMask` | If set to `True`, the output includes a segmentation mask as a uint8 image, where each pixel value indicates the winning category value. | {`True, False`} | `False` |
 `shouldOutputConfidenceMasks` | If set to `True`, the output includes a segmentation mask as a float value image, where each float value represents the confidence score map of the category. | {`True, False`} | `True` |
| `displayNamesLocale` | Sets the language of labels to use for display names provided in the metadata of the task's model, if available. Default is `en` for English. You can add localized labels to the metadata of a custom model using the [TensorFlow Lite Metadata Writer API](https://www.tensorflow.org/lite/models/convert/metadata_writer_tutorial) | Locale code | en |
| `result_callback` | Sets the result listener to receive the segmentation results asynchronously when the image segmenter is in the `LIVE_STREAM` mode. Can only be used when running mode is set to `LIVE_STREAM` | N/A | N/A |

When the running mode is set to `LIVE_STREAM`, the Image Segmenter requires the
additional `imageSegmenterLiveStreamDelegate` configuration option, which
enables the Image Segmenter to deliver image segmentation results asynchronously.
The delegate must implement the
`imageSegmenter(_:didFinishSegmentation:timestampInMilliseconds:error:)` method,
which the Image Segmenter calls after processing the results of performing
segmentation on each frame.

| Option name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `imageSegmenterLiveStreamDelegate` | Enables Image Segmenter to receive the results of performing image segmentation asynchronously in livestream mode. The class whose instance is set to this property must implement the `imageSegmenter(_:didFinishSegmentation:timestampInMilliseconds:error:)` method. | Not applicable | Not set |

## Prepare data

You need to convert the input image or frame to an `MPImage` object before
passing it to the Image Segmenter. `MPImage` supports different types of iOS image
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
values. Image Segmenter does not support mirrored orientations like `.upMirrored`,
`.downMirrored`, `.leftMirrored`, `.rightMirrored`.

For more information about `UIImage`, refer to the [UIImage Apple Developer
Documentation](https://developer.apple.com/documentation/uikit/uiimage).

### CVPixelBuffer

The `CVPixelBuffer` format is well-suited for applications that generate frames
and use the iOS [CoreImage](https://developer.apple.com/documentation/coreimage)
framework for processing.

The `CVPixelBuffer` format is well-suited for the following running modes:

* Images: apps that generate `CVPixelBuffer` images after some processing
  using iOS's `CoreImage` framework can be sent to the Image Segmenter in the
  image running mode.
* Videos: video frames can be converted to the `CVPixelBuffer` format for
  processing, and then sent to the Image Segmenter in video mode.
* livestream: apps using an iOS camera to generate frames may be converted
  into the `CVPixelBuffer` format for processing before being sent to the
  Image Segmenter in livestream mode.

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

To run the Image Segmenter, use the `segment()` method specific to the assigned
running mode:

* Still image: `segment(image:)`
* Video: `segment(videoFrame:timestampInMilliseconds:)`
* Livestream: `segmentAsync(image:timestampInMilliseconds:)`

The following code samples show simple examples of how to run Image Segmenter in
these different running modes:

### Swift

### Image

```
let result = try imageSegmenter.segment(image: image)
```

### Video

```
let result = try imageSegmenter.segment(
  videoFrame: image,
  timestampInMilliseconds: timestamp)
```

### Live stream

```
try imageSegmenter.segmentAsync(
  image: image,
  timestampInMilliseconds: timestamp)
```

### Objective-C

### Image

```
MPPImageSegmenterResult *result =
  [imageSegmenter segmentImage:image error:nil];
```

### Video

```
MPPImageSegmenterResult *result =
  [imageSegmenter segmentVideoFrame:image
            timestampInMilliseconds:timestamp
                              error:nil];
```

### Live stream

```
BOOL success =
  [imageSegmenter segmentAsyncImage:image
            timestampInMilliseconds:timestamp
                              error:nil];
```

The Image Segmenter code example shows the implementations of each of these modes
in more detail `segment(image:)`,
`segment(videoFrame:timestampInMilliseconds:)`, and
`segmentAsync(image:timestampInMilliseconds:)`.

Note the following:

* When running in video mode or live stream mode, you must also provide the
  timestamp of the input frame to the Image Segmenter task.
* When running in image or video mode, the Image Segmenter task blocks the
  current thread until it finishes processing the input image or frame. To
  avoid blocking the current thread, execute the processing in a background
  thread using iOS
  [Dispatch](https://developer.apple.com/documentation/dispatch) or
  [NSOperation](https://developer.apple.com/documentation/foundation/nsoperation)
  frameworks.
* When running in live stream mode, the Image Segmenter task returns immediately
  and doesn't block the current thread. It invokes the
  `imageSegmenter(_:didFinishSegmentation:timestampInMilliseconds:error:)`
  method with the image segmenter after processing each input frame. The
  Image Segmenter invokes this method asynchronously on a dedicated serial
  dispatch queue. For displaying results on the user interface, dispatch the
  results to the main queue after processing the results. If the
  `segmentAsync` function is called when the Image Segmenter task is busy
  processing another frame, the Image Segmenter ignores the new input frame.

## Handle and display results

Upon running inference, the Image Segmenter task returns a `ImageSegmenterResult`
object which contains the results of the segmentation task. The content of the
output depends on the output type you set when you
[configured](https://ai.google.dev/edge/mediapipe/solutions/vision/image_segmenter/ios#configuration_options)
the task.

The following images show a visualization of the task output for a category
value mask. The category mask range is `[0, 255]` and each pixel value
represents the winning category index of the model output. The winning category
index is has the highest score among the categories the model can recognize.

![Two girls riding a horse and one girl walking beside the horse](https://developers.google.com/edge/mediapipe/images/solutions/image-segmenter-example-input.jpg)
![The image mask that outlines the shape of the girls and horse from the previous image. The shape of all three girls and the horse are masked accurately](https://developers.google.com/edge/mediapipe/images/solutions/image-segmenter-category-output.jpg)

**Original image and category mask output. Source image from the
[Pascal VOC 2012](https://www.kaggle.com/datasets/huanghanchina/pascal-voc-2012)
dataset.**

**Note:** In the second, output image, the pixel values are multiplied by 10 to
increase contrast and improve the visualization.

The Image Segmenter example code demonstrates how to display the Image Segmenter
results, see the [code
example](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/image_segmentation/ios)
for details.

Send feedback
