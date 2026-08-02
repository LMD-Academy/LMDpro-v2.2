--- source: https://ai.google.dev/edge/mediapipe/solutions/vision/image_segmenter/android ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [MediaPipe](https://developers.google.com/edge/mediapipe/solutions/guide)

Send feedback

# Image segmentation guide for Android Stay organized with collections Save and categorize content based on your preferences.



The MediaPipe Image Segmenter task lets you divide images into regions based on predefined
categories for applying visual effects such as background blurring. These
instructions show you how to use the Image Segmenter with Android apps. The code
example described in these instructions is available on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/image_segmentation/android).
For more information about the capabilities, models, and configuration options
of this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/vision/image_segmenter/index).

## Code example

The MediaPipe Tasks code example contains two simple implementations of a
Image Segmenter app for Android:

* [Image Segmenter with a category mask](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/image_segmentation/android/category_mask)
* [Image Segmenter with a confidence mask](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/image_segmentation/android/confidence_mask)

The examples use the camera on a physical Android device to
perform image segmentation on a live camera feed, or you can choose images and
videos from the device gallery. You can use the apps as a starting point for
your own Android app, or refer to them when modifying an existing app. The
Image Segmenter example code is hosted on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/image_segmentation/android).

The following sections refer to the
[Image Segmenter with a category mask](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/image_segmentation/android/category_mask)
app.

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
2. Optionally, configure your git instance to use sparse checkout,
   so you have only the files for the Image Segmenter example app:

   ```
   cd mediapipe-samples
   git sparse-checkout init --cone
   git sparse-checkout set examples/image_segmentation/android
   ```

After creating a local version of the example code, you can import the project
into Android Studio and run the app. For instructions, see the
[Setup Guide for Android](/mediapipe/solutions/setup_android#example_code).

### Key components

The following files contain the crucial code for this image
segmentation example application:

* [ImageSegmenterHelper.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/image_segmentation/android/category_mask/app/src/main/java/com/google/mediapipe/examples/imagesegmenter/ImageSegmenterHelper.kt) -
  Initializes the Image Segmenter task and handles the model and delegate
  selection.
* [CameraFragment.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/image_segmentation/android/category_mask/app/src/main/java/com/google/mediapipe/examples/imagesegmenter/fragments/CameraFragment.kt) -
  Provides the user interface and control code for a camera.
* [GalleryFragment.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/image_segmentation/android/category_mask/app/src/main/java/com/google/mediapipe/examples/imagesegmenter/fragments/GalleryFragment.kt) -
  Provides the user interface and control code for selecting image and video
  files.
* [OverlayView.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/image_segmentation/android/category_mask/app/src/main/java/com/google/mediapipe/examples/imagesegmenter/OverlayView.kt) -
  Handles and formats the segmentation results.

## Setup

This section describes key steps for setting up your development environment and
code projects to use Image Segmenter. For general information on
setting up your development environment for using MediaPipe tasks, including
platform version requirements, see the
[Setup guide for Android](/mediapipe/solutions/setup_android).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Dependencies

Image Segmenter uses the `com.google.mediapipe:tasks-vision` library. Add this
dependency to the `build.gradle` file of your
Android app development project. Import the required dependencies with
the following code:

```
dependencies {
    ...
    implementation 'com.google.mediapipe:tasks-vision:latest.release'
}
```

### Model

The MediaPipe Image Segmenter task requires a trained model that is compatible with this
task. For more information on available trained models for Image Segmenter, see
the task overview [Models section](https://developers.google.com/edge/mediapipe/solutions/vision/image_segmenter/index#models).

Select and download the model, and then store it within your project directory:

```
<dev-project-root>/src/main/assets
```

**Note:** This location is recommended because the Android build system
automatically checks this directory for file resources.

Use the `BaseOptions.Builder.setModelAssetPath()` method to specify the path
used by the model. This method is referred to in the code example in the next
section.

In the Image Segmenter
[example code](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/image_segmentation/android/category_mask),
the model is defined in the [`ImageSegmenterHelper.kt`](https://github.com/googlesamples/mediapipe/blob/main/examples/image_segmentation/android/category_mask/app/src/main/java/com/google/mediapipe/examples/imagesegmenter/ImageSegmenterHelper.kt)
class in the `setupImageSegmenter()` function.

## Create the task

You can use the `createFromOptions` function to create the task. The
`createFromOptions` function accepts configuration options including mask output
types. For more information on task configuration, see
[Configuration options](#configuration_options).

The Image Segmenter task supports the following input data types: still images,
video files, and live video streams. You must specify the running mode
corresponding to your input data type when creating the task. Choose the tab
for your input data type to see how to create that task.

### Image

```
ImageSegmenterOptions options =
  ImageSegmenterOptions.builder()
    .setBaseOptions(
      BaseOptions.builder().setModelAssetPath("model.tflite").build())
    .setRunningMode(RunningMode.IMAGE)
    .setOutputCategoryMask(true)
    .setOutputConfidenceMasks(false)
    .build();
imagesegmenter = ImageSegmenter.createFromOptions(context, options);
```

### Video

```
ImageSegmenterOptions options =
  ImageSegmenterOptions.builder()
    .setBaseOptions(
      BaseOptions.builder().setModelAssetPath("model.tflite").build())
    .setRunningMode(RunningMode.VIDEO)
    .setOutputCategoryMask(true)
    .setOutputConfidenceMasks(false)
    .build();
imagesegmenter = ImageSegmenter.createFromOptions(context, options);
```

### Live stream

```
ImageSegmenterOptions options =
  ImageSegmenterOptions.builder()
    .setBaseOptions(
      BaseOptions.builder().setModelAssetPath("model.tflite").build())
    .setRunningMode(RunningMode.LIVE_STREAM)
    .setOutputCategoryMask(true)
    .setOutputConfidenceMasks(false)
    .setResultListener((result, inputImage) -> {
         // Process the segmentation result here.
    })
    .setErrorListener((result, inputImage) -> {
         // Process the segmentation errors here.
    })
    .build()
imagesegmenter = ImageSegmenter.createFromOptions(context, options)
```

**Note:** If you use the live stream mode, make sure to register a result listener
when creating the task. The listener is called whenever the task has finished
processing a video frame with the segmentation result and the input image as
parameters.

The Image Segmenter example code implementation allows the user to switch between
processing modes. The approach makes the task creation code more complicated and
may not be appropriate for your use case. You can see this code in the
[`ImageSegmenterHelper`](https://github.com/googlesamples/mediapipe/blob/main/examples/image_segmentation/android/category_mask/app/src/main/java/com/google/mediapipe/examples/imagesegmenter/ImageSegmenterHelper.kt)
class by the `setupImageSegmenter()` function.

### Configuration options

This task has the following configuration options for Android apps:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
||  |  |  |  |
| --- | --- | --- | --- |
| `runningMode` | Sets the running mode for the task. There are three modes:    IMAGE: The mode for single image inputs.    VIDEO: The mode for decoded frames of a video.    LIVE\_STREAM: The mode for a livestream of input data, such as from a camera. In this mode, resultListener must be called to set up a listener to receive results asynchronously. | {`IMAGE, VIDEO, LIVE_STREAM`} | `IMAGE` |
| `outputCategoryMask` | If set to `True`, the output includes a segmentation mask as a uint8 image, where each pixel value indicates the winning category value. | {`True, False`} | `False` |
 `outputConfidenceMasks` | If set to `True`, the output includes a segmentation mask as a float value image, where each float value represents the confidence score map of the category. | {`True, False`} | `True` |
| `displayNamesLocale` | Sets the language of labels to use for display names provided in the metadata of the task's model, if available. Default is `en` for English. You can add localized labels to the metadata of a custom model using the [TensorFlow Lite Metadata Writer API](https://www.tensorflow.org/lite/models/convert/metadata_writer_tutorial) | Locale code | en |
| `resultListener` | Sets the result listener to receive the segmentation results asynchronously when the image segmenter is in the `LIVE_STREAM` mode. Can only be used when running mode is set to `LIVE_STREAM` | N/A | N/A |
| `errorListener` | Sets an optional error listener. | N/A | Not set |

## Prepare data

Image Segmenter works with images, video file and live stream video. The task
handles the data input preprocessing, including resizing, rotation and value
normalization.

You need to convert the input image or frame to a
`com.google.mediapipe.framework.image.MPImage` object before passing it to the
Image Segmenter.

### Image

```
import com.google.mediapipe.framework.image.BitmapImageBuilder;
import com.google.mediapipe.framework.image.MPImage;

// Load an image on the user’s device as a Bitmap object using BitmapFactory.

// Convert an Android’s Bitmap object to a MediaPipe’s Image object.
Image mpImage = new BitmapImageBuilder(bitmap).build();
```

### Video

```
import com.google.mediapipe.framework.image.BitmapImageBuilder;
import com.google.mediapipe.framework.image.MPImage;

// Load a video file on the user's device using MediaMetadataRetriever

// From the video’s metadata, load the METADATA_KEY_DURATION and
// METADATA_KEY_VIDEO_FRAME_COUNT value. You’ll need them
// to calculate the timestamp of each frame later.

// Loop through the video and load each frame as a Bitmap object.

// Convert the Android’s Bitmap object to a MediaPipe’s Image object.
Image mpImage = new BitmapImageBuilder(frame).build();
```

### Live stream

```
import com.google.mediapipe.framework.image.MediaImageBuilder;
import com.google.mediapipe.framework.image.MPImage;

// Create a CameraX’s ImageAnalysis to continuously receive frames
// from the device’s camera. Configure it to output frames in RGBA_8888
// format to match with what is required by the model.

// For each Android’s ImageProxy object received from the ImageAnalysis,
// extract the encapsulated Android’s Image object and convert it to
// a MediaPipe’s Image object.
android.media.Image mediaImage = imageProxy.getImage()
Image mpImage = new MediaImageBuilder(mediaImage).build();
```

In the Image Segmenter example code, the data preparation is handled in the
[`ImageSegmenterHelper`](https://github.com/googlesamples/mediapipe/blob/main/examples/image_segmentation/android/category_mask/app/src/main/java/com/google/mediapipe/examples/imagesegmenter/ImageSegmenterHelper.kt)
class by the `segmentLiveStreamFrame()` function.

## Run the task

You call a different `segment` function based on the running mode you are using.
The Image Segmenter function returns the identified segment regions within the
input image or frame.

### Image

```
ImageSegmenterResult segmenterResult = imagesegmenter.segment(image);
```

### Video

```
// Calculate the timestamp in milliseconds of the current frame.
long frame_timestamp_ms = 1000 * video_duration * frame_index / frame_count;

// Run inference on the frame.
ImageSegmenterResult segmenterResult =
    imagesegmenter.segmentForVideo(image, frameTimestampMs);
```

### Live stream

```
// Run inference on the frame. The segmentations results will be available via
// the `resultListener` provided in the `ImageSegmenterOptions` when the image
// segmenter was created.
imagesegmenter.segmentAsync(image, frameTimestampMs);
```

Note the following:

* When running in the video mode or the live stream mode, you must also
  provide the timestamp of the input frame to the Image Segmenter task.
* When running in the image or the video mode, the Image Segmenter task
  blocks the current thread until it finishes processing the input image or
  frame. To avoid blocking the user interface, execute the processing in a
  background thread.
* When running in the live stream mode, the Image Segmenter task doesn’t block
  the current thread but returns immediately. It will invoke its result
  listener with the detection result every time it has finished processing an
  input frame. If the `segmentAsync` function is called when the Image Segmenter
  task is busy processing another frame, the task ignores the new input frame.

In the Image Segmenter example code, the `segment` functions are defined in the
[`ImageSegmenterHelper.kt`](https://github.com/googlesamples/mediapipe/blob/main/examples/image_segmentation/android/category_mask/app/src/main/java/com/google/mediapipe/examples/imagesegmenter/ImageSegmenterHelper.kt)
file.

## Handle and display results

Upon running inference, the Image Segmenter task returns an `ImageSegmenterResult`
object which contains the results of the segmentation task. The content of the
output depends on the `outputType` you set when you
[configured](#configuration_options) the task.

The following sections show examples of the output data from this task:

### Category confidence

The following images show a visualization of the task output for a category
confidence mask. The confidence mask output contains float values between
`[0, 1]`.

![Two girls riding a horse and one girl walking beside the horse](https://developers.google.com/edge/mediapipe/images/solutions/image-segmenter-example-input.jpg)
![The image mask that outlines the shape of the girls and horse from the previous photograph. The left half of the image's outline is captured, but the right half of the image is not](https://developers.google.com/edge/mediapipe/images/solutions/image-segmenter-confidence-output.png)

**Original image and category confidence mask output. Source image from the
[Pascal VOC 2012](https://www.kaggle.com/datasets/huanghanchina/pascal-voc-2012)
dataset.**

**Note:** In the second, output image, the floating point output values are scaled
to values in the `[0, 255]` range and converted to a uint8 data type.

### Category value

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






Send feedback