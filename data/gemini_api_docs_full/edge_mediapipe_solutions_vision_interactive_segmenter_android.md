# Interactive image segmentation guide for Android Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/mediapipe/solutions/vision/interactive_segmenter/android))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

The MediaPipe Interactive Image Segmenter task takes a location in an image, estimates the boundaries of
an object at that location, and returns the segmentation for the object as
image data. These instructions show you how to use the Interactive Image Segmenter with
Android apps. The code example described in these instructions is available on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/interactive_segmentation/android).
For more information about the capabilities, models, and configuration options
of this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/vision/interactive_segmenter/index).

## Code example

The MediaPipe Tasks code example is a simple implementation of a Interactive Image Segmenter
app for Android.
The example works with images selected from the device gallery.

You can use the app as a starting point for your own Android app, or refer to it
when modifying an existing app. The Interactive Image Segmenter example code is hosted on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/interactive_segmentation/android).

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
   so you have only the files for the Interactive Image Segmenter example app:

   ```
   cd mediapipe-samples
   git sparse-checkout init --cone
   git sparse-checkout set examples/interactive_segmentation/android
   ```

After creating a local version of the example code, you can import the project
into Android Studio and run the app. For instructions, see the
[Setup Guide for Android](/mediapipe/solutions/setup_android#example_code).

### Key components

The following files contain the crucial code for this image
segmentation example application:

* [InteractiveSegmentationHelper.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/interactive_segmentation/android/app/src/main/java/com/mediapipe/example/interactivesegmentation/InteractiveSegmentationHelper.kt) -
  Initializes the Interactive Image Segmenter task and handles the model and delegate
  selection.
* [OverlayView.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/interactive_segmentation/android/app/src/main/java/com/mediapipe/example/interactivesegmentation/OverlayView.kt) -
  Handles and formats the segmentation results.

## Setup

This section describes key steps for setting up your development environment and
code projects to use Interactive Image Segmenter. For general information on
setting up your development environment for using MediaPipe tasks, including
platform version requirements, see the
[Setup guide for Android](/mediapipe/solutions/setup_android).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Dependencies

Interactive Image Segmenter uses the `com.google.mediapipe:tasks-vision` library. Add this
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

The MediaPipe Interactive Image Segmenter task requires a trained model that is compatible with this
task. For more information on available trained models for Interactive Image Segmenter, see
the task overview [Models section](https://developers.google.com/edge/mediapipe/solutions/vision/interactive_segmenter/index#models).

Select and download the model, and then store it within your project directory:

```
<dev-project-root>/src/main/assets
```

**Note:** This location is recommended because the Android build system
automatically checks this directory for file resources.

Use the `BaseOptions.Builder.setModelAssetPath()` method to specify the path
used by the model. This method is shown in the code example in the next
section.

In the Interactive Image Segmenter
[example code](https://github.com/googlesamples/mediapipe/blob/main/examples/interactive_segmentation/android),
the model is defined in the [`InteractiveSegmenterHelper.kt`](https://github.com/googlesamples/mediapipe/blob/main/examples/interactive_segmentation/android/app/src/main/java/com/mediapipe/example/interactivesegmentation/InteractiveSegmentationHelper.kt)
class in the `setupInteractiveSegmenter()` function.

## Create the task

You can use the `createFromOptions` function to create the task. The
`createFromOptions` function accepts configuration options including
mask output types. For more information on configuration
options, see [Configuration Overview](#configuration).

```
InteractiveSegmenterOptions options =
  InteractiveSegmenterOptions.builder()
    .setBaseOptions(
      BaseOptions.builder().setModelAssetPath("model.tflite").build())
    .setOutputCategoryMask(true)
    .setOutputConfidenceMasks(false)
    .setResultListener((result, inputImage) -> {
         // Process the segmentation result here.
    })
    .setErrorListener(exception -> {
         // Process the segmentation errors here.
    })    
    .build();
interactivesegmenter = InteractiveSegmenter.createFromOptions(context, options);
```

For a more detailed example of setting up this task, see the
[`InteractiveSegmenterHelper`](https://github.com/googlesamples/mediapipe/blob/main/examples/interactive_segmentation/android/app/src/main/java/com/mediapipe/example/interactivesegmentation/InteractiveSegmentationHelper.kt)
class `setupInteractiveSegmenter()` function.

### Configuration options

This task has the following configuration options for Android apps:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `outputCategoryMask` | If set to `True`, the output includes a segmentation mask as a uint8 image, where each pixel value indicates if the pixel is part of the object located at the area of interest. | {`True, False`} | `False` |
 `outputConfidenceMasks` | If set to `True`, the output includes a segmentation mask as a float value image, where each float value represents the confidence that the pixel is part of the object located at the area of interest. | {`True, False`} | `True` || `displayNamesLocale` | Sets the language of labels to use for display names provided in the metadata of the task's model, if available. Default is `en` for English. You can add localized labels to the metadata of a custom model using the [TensorFlow Lite Metadata Writer API](https://ai.google.dev/edge/lite/models/metadata_writer_tutorial) Locale code | en | |
| `errorListener` | Sets an optional error listener. | N/A | Not set |

## Prepare data

Interactive Image Segmenter works with images, and the task handles the data input
preprocessing, including resizing, rotation and value normalization.
You need to convert the input image to a
`com.google.mediapipe.framework.image.MPImage` object before passing it to the
task.

```
import com.google.mediapipe.framework.image.BitmapImageBuilder;
import com.google.mediapipe.framework.image.MPImage;

// Load an image on the user’s device as a Bitmap object using BitmapFactory.

// Convert an Android’s Bitmap object to a MediaPipe’s Image object.
MPImage mpImage = new BitmapImageBuilder(bitmap).build();
```

In the Interactive Image Segmenter example code, the data preparation is handled in the
[`InteractiveSegmenterHelper`](https://github.com/googlesamples/mediapipe/blob/main/examples/interactive_segmentation/android/app/src/main/java/com/mediapipe/example/interactivesegmentation/InteractiveSegmentationHelper.kt)
class by the `segment()` function.

## Run the task

Call the `segment` function to run the prediction and generate segments.
The Interactive Image Segmenter task returns the identified segment regions within the
input image.

```
RegionOfInterest roi = RegionOfInterest.create(
    NormalizedKeypoint.create(
        normX * it.width,
        normY * it.height
    )
);

ImageSegmenterResult segmenterResult = interactivesegmenter.segment(image, roi);
```

In the Interactive Image Segmenter example code, the `segment` functions are defined in the
[`InteractiveSegmenterHelper.kt`](https://github.com/googlesamples/mediapipe/blob/main/examples/interactive_segmentation/android/app/src/main/java/com/mediapipe/example/interactivesegmentation/InteractiveSegmentationHelper.kt)
file.

## Handle and display results

Upon running inference, the Interactive Image Segmenter task returns an
`ImageSegmenterResult` object which contains the results of the
segmentation task. The content of the output may include a category mask,
confidence mask, or both, depending on what you set when you
[configured](#configuration_options) the task.

The following sections further explain the output data from this task:

### Category mask

The following images show a visualization of the task output for a category
value mask with a point area of interest indicated. Each pixel is a `uint8`
value indicating if the pixel is part of the object located at the area of
interest. The black and white circle on the second image indicates the selected
area of interest.

![A dog standing amidst a pile of leaves](https://developers.google.com/edge/mediapipe/images/solutions/interactive-segmenter-input.jpg)
![The outlined shape of the dog from the previous image](https://developers.google.com/edge/mediapipe/images/solutions/interactive-segmenter-output-cate-mask.png)

**Original image and category mask output. Source image from the
[Pascal VOC 2012](https://www.kaggle.com/datasets/huanghanchina/pascal-voc-2012)
dataset.**

### Confidence mask

The output for a confidence mask contains float values between `[0, 1]` for
each image input channel. Higher values indicate a higher confidence that
the image pixel is part of the object located at the area of interest.

Send feedback
