--- source: https://ai.google.dev/edge/mediapipe/solutions/vision/image_embedder/ios ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [MediaPipe](https://developers.google.com/edge/mediapipe/solutions/guide)

Send feedback

# Image embedding guide for iOS Stay organized with collections Save and categorize content based on your preferences.



The MediaPipe Image Embedder task lets you convert image data into a numeric
representation to accomplish ML-related image processing tasks, such as
comparing the similarity of two images.

The code sample described in these instructions is available on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/image_embedder/ios).
You can see this task in action by viewing this [Web
demo](https://google-ai-edge.github.io/mediapipe-samples-web/#/vision/image_embedder).
For more information about the capabilities, models, and configuration options
of this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/vision/image_embedder/index).

## Code example

The MediaPipe Tasks example code is a basic implementation of an Image Embedder
app for iOS. The example uses the camera on a physical iOS device to
continuously embed images, and can also run the embedder on image files from the
device gallery.

You can use the app as a starting point for your own iOS app, or refer to it
when modifying an existing app. The Image Embedder example code is hosted on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/image_embedder).

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
   only the files for the Image Embedder example app:

   ```
   cd mediapipe-samples
   git sparse-checkout init --cone
   git sparse-checkout set examples/image_embedder/ios
   ```

After creating a local version of the example code, you can install the
MediaPipe task library, open the project using Xcode and run the app. For
instructions, see the [Setup Guide for
iOS](/edge/mediapipe/solutions/setup_ios).

### Key components

The following files contain the crucial code for the Image Embedder example
application:

* [ImageEmbedderService.swift](https://github.com/google-ai-edge/mediapipe-samples/blob/main/examples/image_embedder/ios/ImageEmbedder/Services/ImageEmbedderService.swift):
  Initializes the Image Embedder, handles the model selection, and runs
  inference on the input data.
* [CameraViewController.swift](https://github.com/google-ai-edge/mediapipe-samples/blob/main/examples/image_embedder/ios/ImageEmbedder/ViewContoller/CameraViewController.swift):
  Implements the UI for the live camera feed input mode and visualizes the
  results.
* [MediaLibraryViewController.swift](https://github.com/google-ai-edge/mediapipe-samples/blob/main/examples/image_embedder/ios/ImageEmbedder/ViewContoller/MediaLibraryViewController.swift):
  Implements the UI for the still image input mode and visualizes the results.

## Setup

This section describes key steps for setting up your development environment and
code projects to use Image Embedder. For general information on setting up your
development environment for using MediaPipe tasks, including platform version
requirements, see the [Setup guide for
iOS](/edge/mediapipe/solutions/setup_ios).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Dependencies

Image Embedder uses the `MediaPipeTasksVision` library, which must be installed
using CocoaPods. The library is compatible with both Swift and Objective-C apps
and does not require any additional language-specific setup.

For instructions to install CocoaPods on macOS, refer to the [CocoaPods
installation guide](https://guides.CocoaPods.org/using/getting-started.html).
For instructions on how to create a `Podfile` with the necessary pods for your
app, refer to [Using
CocoaPods](https://guides.cocoapods.org/using/using-cocoapods.html).

Add the `MediaPipeTasksVision` pod in the `Podfile` using the following code:

```
target 'MyImageEmbedderApp' do
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

The MediaPipe Image Embedder task requires a trained model that is compatible
with this task. For more information about the available trained models for
Image Embedder, see the [Models section](https://developers.google.com/edge/mediapipe/solutions/vision/image_embedder/index#models).

Select and download a model, and add it to your project directory using Xcode.
For instructions on how to add files to your Xcode project, refer to [Managing
files and folders in your Xcode
project](https://developer.apple.com/documentation/xcode/managing-files-and-folders-in-your-xcode-project).

Use the `BaseOptions.modelAssetPath` property to specify the path to the model
in your app bundle.

## Create the task

You can create the Image Embedder task by calling one of its initializers. The
`ImageEmbedder(options:)` initializer accepts values for the configuration
options.

If you don't need an Image Embedder initialized with customized configuration
options, you can use the `ImageEmbedder(modelPath:)` initializer to create an
Image Embedder with the default options. For more information about configuration
options, see [Configuration Overview](#configuration).

The Image Embedder task supports 3 input data types: still images, video files
and live video streams. By default, `ImageEmbedder(modelPath:)` initializes a
task for still images. If you want your task to be initialized to process video
files or live video streams, use `ImageEmbedder(options:)` to specify the video
or livestream running mode. The livestream mode also requires the additional
`imageEmbedderLiveStreamDelegate` configuration option, which enables the
Image Embedder to deliver image embedding results to the delegate asynchronously.

Choose the tab corresponding to your running mode to see how to create the task
and run inference.

### Swift

### Image

```
import MediaPipeTasksVision

let modelPath = Bundle.main.path(
  forResource: "model",
  ofType: "tflite")

let options = ImageEmbedderOptions()
options.baseOptions.modelAssetPath = modelPath
options.quantize = true
options.l2Normalize = true

let imageEmbedder = try ImageEmbedder(options: options)
```

### Video

```
import MediaPipeTasksVision

let modelPath = Bundle.main.path(
  forResource: "model",
  ofType: "tflite")

let options = ImageEmbedderOptions()
options.baseOptions.modelAssetPath = modelPath
options.runningMode = .video
options.quantize = true
options.l2Normalize = true

let imageEmbedder = try ImageEmbedder(options: options)
```

### Livestream

```
import MediaPipeTasksVision

// Class that conforms to the `ImageEmbedderLiveStreamDelegate` protocol and
// implements the method that the image embedder calls once it finishes
// embedding each input frame.
class ImageEmbedderResultProcessor: NSObject, ImageEmbedderLiveStreamDelegate {

  func imageEmbedder(
    _ imageEmbedder: ImageEmbedder,
    didFinishEmbedding result: ImageEmbedderResult?,
    timestampInMilliseconds: Int,
    error: Error?) {

    // Process the image embedder result or errors here.

  }
}

let modelPath = Bundle.main.path(
  forResource: "model",
  ofType: "tflite")

let options = ImageEmbedderOptions()
options.baseOptions.modelAssetPath = modelPath
options.runningMode = .liveStream
options.quantize = true
options.l2Normalize = true

// Assign an object of the class to the `imageEmbedderLiveStreamDelegate`
// property.
let processor = ImageEmbedderResultProcessor()
options.imageEmbedderLiveStreamDelegate = processor

let imageEmbedder = try ImageEmbedder(options: options)
```

### Objective-C

### Image

```
@import MediaPipeTasksVision;

NSString *modelPath = [[NSBundle mainBundle] pathForResource:@"model"
                                                      ofType:@"tflite"];

MPPImageEmbedderOptions *options = [[MPPImageEmbedderOptions alloc] init];
options.baseOptions.modelAssetPath = modelPath;
options.runningMode = MPPRunningModeImage;
options.quantize = YES;
options.l2Normalize = YES;

MPPImageEmbedder *imageEmbedder =
  [[MPPImageEmbedder alloc] initWithOptions:options error:nil];
```

### Video

```
@import MediaPipeTasksVision;

NSString *modelPath = [[NSBundle mainBundle] pathForResource:@"model"
                                                      ofType:@"tflite"];

MPPImageEmbedderOptions *options = [[MPPImageEmbedderOptions alloc] init];
options.baseOptions.modelAssetPath = modelPath;
options.runningMode = MPPRunningModeVideo;
options.quantize = YES;
options.l2Normalize = YES;

MPPImageEmbedder *imageEmbedder =
  [[MPPImageEmbedder alloc] initWithOptions:options error:nil];
```

### Livestream

```
@import MediaPipeTasksVision;

// Class that conforms to the `MPPImageEmbedderLiveStreamDelegate` protocol
// and implements the method that the image embedder calls once it finishes
// embedding each input frame.
@interface APPImageEmbedderResultProcessor : NSObject 

@end

@implementation APPImageEmbedderResultProcessor

-   (void)imageEmbedder:(MPPImageEmbedder *)imageEmbedder
    didFinishEmbeddingWithResult:(MPPImageEmbedderResult *)imageEmbedderResult
         timestampInMilliseconds:(NSInteger)timestampInMilliseconds
                           error:(NSError *)error {

    // Process the image embedder result or errors here.

}

@end

NSString *modelPath = [[NSBundle mainBundle] pathForResource:@"model"
                                                      ofType:@"tflite"];

MPPImageEmbedderOptions *options = [[MPPImageEmbedderOptions alloc] init];
options.baseOptions.modelAssetPath = modelPath;
options.runningMode = MPPRunningModeLiveStream;
options.quantize = YES;
options.l2Normalize = YES;

// Assign an object of the class to the `imageEmbedderLiveStreamDelegate`
// property.
APPImageEmbedderResultProcessor *processor =
  [APPImageEmbedderResultProcessor new];
options.imageEmbedderLiveStreamDelegate = processor;

MPPImageEmbedder *imageEmbedder =
  [[MPPImageEmbedder alloc] initWithOptions:options error:nil];
```

### Configuration options

This task has the following configuration options for iOS apps:

| Option name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `runningMode` | Sets the running mode for the task. Image Embedder has three modes:    IMAGE: The mode for single image inputs.    VIDEO: The mode for decoded frames of a video.    LIVE\_STREAM: The mode for a livestream of input data, such as from a camera. In this mode, `imageEmbedderLiveStreamDelegate` must be set to an instance of a class that implements the `ImageEmbedderLiveStreamDelegate` to receive the results of embedding image frames asynchronously. | {RunningMode.image, RunningMode.video, RunningMode.liveStream} | {RunningMode.image} |
| `l2Normalize` | Whether to normalize the returned feature vector with L2 norm. Use this option only if the model does not already contain a native L2\_NORMALIZATION TFLite Op. In most cases, this is already the case and L2 normalization is thus achieved through TFLite inference with no need for this option. | Bool | false |
| `quantize` | Whether the returned embedding should be quantized to bytes via scalar quantization. Embeddings are implicitly assumed to be unit-norm and therefore any dimension is guaranteed to have a value in [-1.0, 1.0]. Use the l2Normalize option if this is not the case. | Bool | false |

When the running mode is set to livestream, the Image Embedder requires the
additional `imageEmbedderLiveStreamDelegate` configuration option, which enables
the Image Embedder to deliver image embedding results asynchronously. The
delegate must implement the
`imageEmbedder(_:didFinishEmbedding:timestampInMilliseconds:error:)` method,
which the Image Embedder calls after processing the results of embedding each
input image frame.

| Option name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `imageEmbedderLiveStreamDelegate` | Enables Image Embedder to receive the results of embedding images asynchronously in livestream mode. The class whose instance is set to this property must implement the `imageEmbedder(_:didFinishEmbedding:timestampInMilliseconds:error:)` method. | Not applicable | Not set |

## Prepare data

You need to convert the input image or frame to an `MPImage` object before
passing it to the Image Embedder. `MPImage` supports different types of iOS image
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
values. Image Embedder does not support mirrored orientations like `.upMirrored`,
`.downMirrored`, `.leftMirrored`, `.rightMirrored`.

For more information about `UIImage`, refer to the [UIImage Apple Developer
Documentation](https://developer.apple.com/documentation/uikit/uiimage).

### CVPixelBuffer

The `CVPixelBuffer` format is well-suited for applications that generate frames
and use the iOS [CoreImage](https://developer.apple.com/documentation/coreimage)
framework for processing.

The `CVPixelBuffer` format is well-suited for the following running modes:

* Images: apps that generate `CVPixelBuffer` images after some processing
  using iOS's `CoreImage` framework can be sent to the Image Embedder in the
  image running mode.
* Videos: video frames can be converted to the `CVPixelBuffer` format for
  processing, and then sent to the Image Embedder in video mode.
* livestream: apps using an iOS camera to generate frames may be converted
  into the `CVPixelBuffer` format for processing before being sent to the
  Image Embedder in livestream mode.

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

To run the Image Embedder, use the `embed()` method specific to the assigned
running mode:

* Still image: `embed(image:)`
* Video: `embed(videoFrame:timestampInMilliseconds:)`
* Livestream: `embedAsync(image:timestampInMilliseconds:)`

The following code samples show basic examples of how to run Image Embedder in
these different running modes:

### Swift

### Image

```
let result = try imageEmbedder.embed(image: image)
```

### Video

```
let result = try imageEmbedder.embed(
  videoFrame: image,
  timestampInMilliseconds: timestamp)
```

### Live stream

```
try imageEmbedder.embedAsync(
  image: image,
  timestampInMilliseconds: timestamp)
```

### Objective-C

### Image

```
MPPImageEmbedderResult *result =
  [imageEmbedder embedImage:image error:nil];
```

### Video

```
MPPImageEmbedderResult *result =
  [imageEmbedder embedVideoFrame:image
           timestampInMilliseconds:timestamp
                             error:nil];
```

### Live stream

```
BOOL success =
  [imageEmbedder embedAsyncImage:image
           timestampInMilliseconds:timestamp
                             error:nil];
```

The Image Embedder code example shows the implementations of each of these modes
in more detail `embed(image:)`, `embed(videoFrame:timestampInMilliseconds:)`,
and `embedAsync(image:timestampInMilliseconds:)`. The example code allows the
user to switch between processing modes which may not be required for your use
case.

Note the following:

* When running in video mode or livestream mode, you must also provide the
  timestamp of the input frame to the Image Embedder task.
* When running in image or video mode, the Image Embedder task blocks the
  current thread until it finishes processing the input image or frame. To
  avoid blocking the current thread, execute the processing in a background
  thread using iOS
  [Dispatch](https://developer.apple.com/documentation/dispatch) or
  [NSOperation](https://developer.apple.com/documentation/foundation/nsoperation)
  frameworks. If your app is created using Swift, you can also use [Swift
  Concurrency](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/)
  for background thread execution.
* When running in livestream mode, the Image Embedder task returns immediately
  and doesn't block the current thread. It invokes the
  `imageEmbedder(_:didFinishEmbedding:timestampInMilliseconds:error:)` method
  with the results, after embedding each input frame. The Image Embedder
  invokes this method asynchronously on a dedicated serial dispatch queue. For
  displaying results on the user interface, dispatch the results to the main
  queue after processing the results. If the `embedAsync` function is called
  when the Image Embedder task is busy processing another frame, the
  Image Embedder ignores the new input frame.

## Handle and display results

Upon running inference, the Image Embedder returns an `ImageEmbedderResult`
object that contains a list of embeddings (either floating point or
scalar-quantized) for the input image.

The following shows an example of the output data from this task:

```
ImageEmbedderResult:
  Embedding #0 (sole embedding head):
    float_embedding: {0.0, 0.0, ..., 0.0, 1.0, 0.0, 0.0, 2.0}
    head_index: 0
```

This result was obtained by embedding the following image:

![Medium shot of an exotic cat](/static/mediapipe/images/solutions/image-embedder.jpg)

You can compare the similarity of two embeddings using the
`ImageEmbedder.cosineSimilarity` function.

### Swift

```
let similarity = try ImageEmbedder.cosineSimilarity(
  embedding1: result.embeddingResult.embeddings[0],
  embedding2: otherResult.embeddingResult.embeddings[0])
```

### Objective-C

```
NSNumber *similarity = [MPPImageEmbedder
      cosineSimilarityBetweenEmbedding1:result.embeddingResult.embeddings[0]
                          andEmbedding2:otherResult.embeddingResult.embeddings[0]
                                  error:nil];
```






Send feedback