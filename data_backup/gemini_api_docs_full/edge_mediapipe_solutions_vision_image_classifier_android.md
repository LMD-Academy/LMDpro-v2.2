--- source: https://ai.google.dev/edge/mediapipe/solutions/vision/image_classifier/android ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [MediaPipe](https://developers.google.com/edge/mediapipe/solutions/guide)

Send feedback

# Image classification guide for Android Stay organized with collections Save and categorize content based on your preferences.



The MediaPipe Image Classifier task lets you perform classification on images. You can use this task to identify what an image represents among a set of categories defined at training time. These instructions show you how to use the Image Classifier
with Android apps. The code sample described in these instructions is available
on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/image_classification/android).

You can see this task in action by viewing the [Web demo](https://google-ai-edge.github.io/mediapipe-samples-web/#/vision/image_classifier).
For more information about the capabilities, models, and configuration options
of this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/vision/image_classifier/index).

## Code example

The MediaPipe Tasks example code is a simple implementation of a Image Classifier
app for Android. The example uses the camera on a physical Android device to
continuously classify objects, and can also use images and videos from the
device gallery to statically classify objects.

You can use the app as a starting point for your own Android app, or refer to it
when modifying an existing app. The Image Classifier example code is hosted on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/image_classification/android).

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
   so you have only the files for the Image Classifier example app:

   ```
   cd mediapipe-samples
   git sparse-checkout init --cone
   git sparse-checkout set examples/image_classification/android
   ```

After creating a local version of the example code, you can import the project
into Android Studio and run the app. For instructions, see the
[Setup Guide for Android](/mediapipe/solutions/setup_android#example_code).

### Key components

The following files contain the crucial code for this image
classification example application:

* [ImageClassifierHelper.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/image_classification/android/app/src/main/java/com/google/mediapipe/examples/imageclassification/ImageClassifierHelper.kt) -
  Initializes the image classifier and handles the model and delegate
  selection.
* [MainActivity.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/image_classification/android/app/src/main/java/com/google/mediapipe/examples/imageclassification/MainActivity.kt) -
  Implements the application, including calling `ImageClassificationHelper` and
  `ClassificationResultsAdapter`.
* [ClassificationResultsAdapter.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/image_classification/android/app/src/main/java/com/google/mediapipe/examples/imageclassification/fragments/ClassificationResultsAdapter.kt) -
  Handles and formats the results.

## Setup

This section describes key steps for setting up your development environment and
code projects to use Image Classifier. For general information on
setting up your development environment for using MediaPipe tasks, including
platform version requirements, see the
[Setup guide for Android](/mediapipe/solutions/setup_android).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Dependencies

Image Classifier uses the `com.google.mediapipe:tasks-vision` library. Add this
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

The MediaPipe Image Classifier task requires a trained model that is compatible with this
task. For more information on available trained models for Image Classifier, see
the task overview [Models section](https://developers.google.com/edge/mediapipe/solutions/vision/image_classifier/index#models).

Select and download the model, and then store it within your project directory:

```
<dev-project-root>/src/main/assets
```

**Note:** This location is recommended because the Android build system
automatically checks this directory for file resources.

Use the `BaseOptions.Builder.setModelAssetPath()` method to specify the path
used by the model. This method is referred to in the code example in the next
section.

In the
Image Classifier [example code](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/image_classification/android),
the model is defined in the [`ImageClassifierHelper.kt`](https://github.com/googlesamples/mediapipe/blob/main/examples/image_classification/android/app/src/main/java/com/google/mediapipe/examples/imageclassification/ImageClassifierHelper.kt#L88-L95)
file.

## Create the task

You can use the `createFromOptions` function to create the task. The
`createFromOptions` function accepts configuration options including running
mode, display names locale, max number of results, confidence threshold,
and a category allow list or deny list. For more information on configuration
options, see [Configuration Overview](#configuration).

The Image Classifier task supports 3 input data types: still images, video files,
and live video streams. You need to specify the running mode corresponding to
your input data type when creating the task. Choose the tab corresponding to
your input data type to see how to create the task and run inference.

### Image

```
ImageClassifierOptions options =
  ImageClassifierOptions.builder()
    .setBaseOptions(
      BaseOptions.builder().setModelAssetPath("model.tflite").build())
    .setRunningMode(RunningMode.IMAGE)
    .setMaxResults(5)
    .build();
imageClassifier = ImageClassifier.createFromOptions(context, options);
```

### Video

```
ImageClassifierOptions options =
  ImageClassifierOptions.builder()
    .setBaseOptions(
      BaseOptions.builder().setModelAssetPath("model.tflite").build())
    .setRunningMode(RunningMode.VIDEO)
    .setMaxResults(5)
    .build();
imageClassifier = ImageClassifier.createFromOptions(context, options);
```

### Live stream

```
ImageClassifierOptions options =
  ImageClassifierOptions.builder()
    .setBaseOptions(
      BaseOptions.builder().setModelAssetPath("model.tflite").build())
    .setRunningMode(RunningMode.LIVE_STREAM)
    .setMaxResults(5)
    .setResultListener((result, inputImage) -> {
         // Process the classification result here.
    })
    .setErrorListener((result, inputImage) -> {
         // Process the classification errors here.
    })
    .build()
imageClassifier = ImageClassifier.createFromOptions(context, options)
```

**Note:** If you use the live stream mode, make sure to register a result listener
when creating the task. The listener is called whenever the task has finished
processing a video frame with the classification result and the input image as
parameters.

The Image Classifier example code implementation allows the user to switch between
processing modes. The approach makes the task creation code more complicated and
may not be appropriate for your use case. You can see this code in the
`setupImageClassifier()` function of the
[`ImageClassifierHelper.kt`](https://github.com/googlesamples/mediapipe/blob/main/examples/image_classification/android/app/src/main/java/com/google/mediapipe/examples/imageclassification/ImageClassifierHelper.kt#L112-L125)
file.

### Configuration options

This task has the following configuration options for Android apps:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `runningMode` | Sets the running mode for the task. There are three modes:    IMAGE: The mode for single image inputs.    VIDEO: The mode for decoded frames of a video.    LIVE\_STREAM: The mode for a livestream of input data, such as from a camera. In this mode, resultListener must be called to set up a listener to receive results asynchronously. | {`IMAGE, VIDEO, LIVE_STREAM`} | `IMAGE` |
| `displayNamesLocale` | Sets the language of labels to use for display names provided in the metadata of the task's model, if available. Default is `en` for English. You can add localized labels to the metadata of a custom model using the [TensorFlow Lite Metadata Writer API](https://ai.google.dev/edge/lite/models/metadata_writer_tutorial) | Locale code | en |
| `maxResults` | Sets the optional maximum number of top-scored classification results to return. If < 0, all available results will be returned. | Any positive numbers | `-1` |
| `scoreThreshold` | Sets the prediction score threshold that overrides the one provided in the model metadata (if any). Results below this value are rejected. | Any float | Not set |
| `categoryAllowlist` | Sets the optional list of allowed category names. If non-empty, classification results whose category name is not in this set will be filtered out. Duplicate or unknown category names are ignored. This option is mutually exclusive with `categoryDenylist` and using both results in an error. | Any strings | Not set |
| `categoryDenylist` | Sets the optional list of category names that are not allowed. If non-empty, classification results whose category name is in this set will be filtered out. Duplicate or unknown category names are ignored. This option is mutually exclusive with `categoryAllowlist` and using both results in an error. | Any strings | Not set |
| `resultListener` | Sets the result listener to receive the classification results asynchronously when the Image Classifier is in the live stream mode. Can only be used when running mode is set to `LIVE_STREAM` | N/A | Not set |
| `errorListener` | Sets an optional error listener. | N/A | Not set |

## Prepare data

Image Classifier works with images, video file and live stream video. The task
handles the data input preprocessing, including resizing, rotation and value
normalization.

You need to convert the input image or frame to a
`com.google.mediapipe.framework.image.MPImage` object before passing it to the
Image Classifier.

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

In the
Image Classifier example code, the data preparation is handled in the
[`ImageClassifierHelper.kt`](https://github.com/googlesamples/mediapipe/blob/main/examples/image_classification/android/app/src/main/java/com/google/mediapipe/examples/imageclassification/ImageClassifierHelper.kt#L154-L184)
file.

## Run the task

You can call the `classify` function corresponding to your running mode to trigger inferences. The Image Classifier API returns the possible categories for the object within the input image or frame.

### Image

```
ImageClassifierResult classifierResult = imageClassifier.classify(image);
```

### Video

```
// Calculate the timestamp in milliseconds of the current frame.
long frame_timestamp_ms = 1000 * video_duration * frame_index / frame_count;

// Run inference on the frame.
ImageClassifierResult classifierResult =
    imageClassifier.classifyForVideo(image, frameTimestampMs);
```

### Live stream

```
// Run inference on the frame. The classifications results will be available 
// via the `resultListener` provided in the `ImageClassifierOptions` when 
// the image classifier was created.
imageClassifier.classifyAsync(image, frameTimestampMs);
```

Note the following:

* When running in the video mode or the live stream mode, you must also
  provide the timestamp of the input frame to the Image Classifier task.
* When running in the image or the video mode, the Image Classifier task
  blocks the current thread until it finishes processing the input image or
  frame. To avoid blocking the user interface, execute the processing in a
  background thread.
* When running in the live stream mode, the Image Classifier task doesn’t block
  the current thread but returns immediately. It will invoke its result
  listener with the detection result every time it has finished processing an
  input frame. If the `classifyAsync` function is called when the Image Classifier
  task is busy processing another frame, the task ignores the new input frame.

In the
Image Classifier example code, the `classify` functions are defined in the
[`ImageClassifierHelper.kt`](https://github.com/googlesamples/mediapipe/blob/main/examples/image_classification/android/app/src/main/java/com/google/mediapipe/examples/imageclassification/ImageClassifierHelper.kt)
file.

## Handle and display results

Upon running inference, the Image Classifier task returns an `ImageClassifierResult` object which contains the list of possible categories for the objects within the input image or frame.

The following shows an example of the output data from this task:

```
ImageClassifierResult:
 Classifications #0 (single classification head):
  head index: 0
  category #0:
   category name: "/m/01bwb9"
   display name: "Passer domesticus"
   score: 0.91406
   index: 671
  category #1:
   category name: "/m/01bwbt"
   display name: "Passer montanus"
   score: 0.00391
   index: 670
```

This result has been obtained by running the [Bird Classifier](https://www.kaggle.com/models/google/aiy/tfLite/vision-classifier-birds-v1/3)
on:

![Close-up photograph of a house sparrow](/static/mediapipe/images/solutions/image-classifier.jpg)

In the
Image Classifier example code, the `ClassificationResultsAdapter` class in the
[`ClassificationResultsAdapter.kt`](https://github.com/googlesamples/mediapipe/blob/main/examples/image_classification/android/app/src/main/java/com/google/mediapipe/examples/imageclassification/fragments/ClassificationResultsAdapter.kt#L35-L45)
file handles the results:

```
fun updateResults(imageClassifierResult: ImageClassifierResult? = null) {
    categories = MutableList(adapterSize) { null }
    if (imageClassifierResult != null) {
        val sortedCategories = imageClassifierResult.classificationResult()
            .classifications()[0].categories().sortedBy { it.index() }
        val min = kotlin.math.min(sortedCategories.size, categories.size)
        for (i in 0 until min) {
            categories[i] = sortedCategories[i]
        }
    }
}
```






Send feedback