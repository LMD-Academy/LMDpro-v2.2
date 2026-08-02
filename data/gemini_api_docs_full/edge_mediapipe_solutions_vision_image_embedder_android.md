# Image embedding guide for Android Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/mediapipe/solutions/vision/image_embedder/android))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

The MediaPipe Image Embedder task lets you convert image data into a numeric representation
to accomplish ML-related image processing tasks, such as comparing the
similarity of two images. These instructions show you how to use the
Image Embedder with Android apps.

For more information about the capabilities, models, and configuration options
of this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/vision/image_embedder/index).

## Code example

The MediaPipe Tasks example code is a simple implementation of a Image Embedder
app for Android. The example uses the camera on a physical Android device to
continuously embed images, and can also run the embedder on image files stored
on the device.

You can use the app as a starting point for your own Android app, or refer to it
when modifying an existing app. The Image Embedder example code is hosted on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/image_embedder/android).

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
2. Optionally, configure your git instance to use sparse checkout, so you have
   only the files for the Image Embedder example app:

   ```
   cd mediapipe-samples
   git sparse-checkout init --cone
   git sparse-checkout set examples/image_embedder/android
   ```

After creating a local version of the example code, you can import the project
into Android Studio and run the app. For instructions, see the [Setup Guide for
Android](/mediapipe/solutions/setup_android#example_code).

### Key components

The following files contain the crucial code for this image embedder example
application:

* [ImageEmbedderHelper.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/image_embedder/android/app/src/main/java/com/google/mediapipe/examples/imageembedder/ImageEmbedderHelper.kt): Initializes the image embedder and handles the model and delegate
  selection.
* [MainActivity.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/image_embedder/android/app/src/main/java/com/google/mediapipe/examples/imageembedder/MainActivity.kt): Implements the application and assembles the user interface components.

## Setup

This section describes key steps for setting up your development environment and
code projects to use Image Embedder. For general information on setting up your
development environment for using MediaPipe tasks, including platform version
requirements, see the [Setup guide for
Android](/mediapipe/solutions/setup_android).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Dependencies

Image Embedder uses the `com.google.mediapipe:tasks-vision` library. Add this
dependency to the `build.gradle` file of your Android app development project.
Import the required dependencies with the following code:

```
dependencies {
    ...
    implementation 'com.google.mediapipe:tasks-vision:latest.release'
}
```

### Model

The MediaPipe Image Embedder task requires a trained model that is compatible with this
task. For more information on available trained models for Image Embedder, see
the task overview [Models section](https://developers.google.com/edge/mediapipe/solutions/vision/image_embedder/index#models).

Select and download the model, and then store it within your project directory:

```
<dev-project-root>/src/main/assets
```

**Note:** This location is recommended because the Android build system
automatically checks this directory for file resources.

Specify the path of the model within the `ModelAssetPath` parameter. In the
example code, the model is defined in the `setupImageEmbedder()` function in
[ImageEmbedderHelper.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/image_embedder/android/app/src/main/java/com/google/mediapipe/examples/imageembedder/ImageEmbedderHelper.kt)
file:

Use the `BaseOptions.Builder.setModelAssetPath()` method to specify the path
used by the model. This method is referred to in the code example in the next
section.

## Create the task

You can use the `createFromOptions` function to create the task. The
`createFromOptions` function accepts configuration options to set the embedder
options. For more information on configuration options, see [Configuration
Overview](#configuration).

The Image Embedder task supports 3 input data types: still images, video files,
and live video streams. You need to specify the running mode corresponding to
your input data type when creating the task. Choose the tab corresponding to
your input data type to see how to create the task and run inference.

### Image

```
ImageEmbedderOptions options =
  ImageEmbedderOptions.builder()
    .setBaseOptions(
      BaseOptions.builder().setModelAssetPath("model.tflite").build())
    .setQuantize(true)
    .setRunningMode(RunningMode.IMAGE)
    .build();
imageEmbedder = ImageEmbedder.createFromOptions(context, options);
```

### Video

```
ImageEmbedderOptions options =
  ImageEmbedderOptions.builder()
    .setBaseOptions(
      BaseOptions.builder().setModelAssetPath("model.tflite").build())
    .setQuantize(true)
    .setRunningMode(RunningMode.VIDEO)
    .build();
imageEmbedder = ImageEmbedder.createFromOptions(context, options);
```

### Live stream

```
ImageEmbedderOptions options =
  ImageEmbedderOptions.builder()
    .setBaseOptions(
      BaseOptions.builder().setModelAssetPath("model.tflite").build())
    .setQuantize(true)
    .setRunningMode(RunningMode.LIVE_STREAM)
    .setResultListener((result, inputImage) -> {
         // Process the embedding result here.
    })
    .build();
imageEmbedder = ImageEmbedder.createFromOptions(context, options);
```

**Note:** If you use the live stream mode, you’ll need to register a result listener
when creating the task. The listener is called whenever the task has finished
processing a video frame with the embedding result and the input image as
parameters.

The example code implementation allows the user to switch between processing
modes. The approach makes the task creation code more complicated and may not be
appropriate for your use case. You can see this code in the
`setupImageEmbedder()` function in the
[ImageEmbedderHelper.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/image_embedder/android/app/src/main/java/com/google/mediapipe/examples/imageembedder/ImageEmbedderHelper.kt#L41)
file.

### Configuration options

This task has the following configuration options for Android apps:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `runningMode` | Sets the running mode for the task. There are three modes:    IMAGE: The mode for single image inputs.    VIDEO: The mode for decoded frames of a video.    LIVE\_STREAM: The mode for a livestream of input data, such as from a camera. In this mode, resultListener must be called to set up a listener to receive results asynchronously. | {`IMAGE, VIDEO, LIVE_STREAM`} | `IMAGE` |
| `l2_normalize` | Whether to normalize the returned feature vector with L2 norm. Use this option only if the model does not already contain a native L2\_NORMALIZATION TFLite Op. In most cases, this is already the case and L2 normalization is thus achieved through TFLite inference with no need for this option. | `Boolean` | `False` |
| `quantize` | Whether the returned embedding should be quantized to bytes via scalar quantization. Embeddings are implicitly assumed to be unit-norm and therefore any dimension is guaranteed to have a value in [-1.0, 1.0]. Use the l2\_normalize option if this is not the case. | `Boolean` | `False` |
| `resultListener` | Sets the result listener to receive the embedding results asynchronously when the Image Embedder is in the live stream mode. Can only be used when running mode is set to `LIVE_STREAM` | N/A | Not set |
| `errorListener` | Sets an optional error listener. | N/A | Not set |

## Prepare data

Image Embedder works with images, video file and live stream video. The task
handles the data input preprocessing, including resizing, rotation and value
normalization.

You need to convert the input image or frame to a
`com.google.mediapipe.framework.image.MPImage` object before passing it to the
Image Embedder task.

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

In the example code, the data preparation is handled in the
[ImageEmbedderHelper.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/image_embedder/android/app/src/main/java/com/google/mediapipe/examples/imageembedder/ImageEmbedderHelper.kt)
file.

## Run the task

You can call the `embed` function corresponding to your running mode to trigger
inferences. The Image Embedder API returns the embedding vectors for the input
image or frame.

### Image

```
ImageEmbedderResult embedderResult = imageEmbedder.embed(image);
```

### Video

```
// Calculate the timestamp in milliseconds of the current frame.
long frame_timestamp_ms = 1000 * video_duration * frame_index / frame_count;

// Run inference on the frame.
ImageEmbedderResult embedderResult =
    imageEmbedder.embedForVideo(image, frameTimestampMs);
```

### Live stream

```
// Run inference on the frame. The embedding results will be available
// via the `resultListener` provided in the `ImageEmbedderOptions` when
// the image embedder was created.
imageEmbedder.embedAsync(image, frameTimestampMs);
```

Note the following:

* When running in the video mode or the live stream mode, you must also
  provide the timestamp of the input frame to the Image Embedder task.
* When running in the image or the video mode, the Image Embedder task will
  block the current thread until it finishes processing the input image or
  frame. To avoid blocking the current thread, execute the processing in a
  background thread.
* When running in the live stream mode, the Image Embedder task doesn’t block
  the current thread but returns immediately. It will invoke its result
  listener with the detection result every time it has finished processing an
  input frame. If the `embedAsync` function is called when the Image Embedder
  task is busy processing another frame, the task ignores the new input frame.

In the example code, the `embed` function is defined in the
[ImageEmbedderHelper.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/image_embedder/android/app/src/main/java/com/google/mediapipe/examples/imageembedder/ImageEmbedderHelper.kt#L90)
file.

## Handle and display results

Upon running inference, the Image Embedder task returns an `ImageEmbedderResult`
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
`ImageEmbedder.cosineSimilarity` function. See the following code for an
example.

```
// Compute cosine similarity.
double similarity = ImageEmbedder.cosineSimilarity(
  result.embeddingResult().embeddings().get(0),
  otherResult.embeddingResult().embeddings().get(0));
```

Send feedback
