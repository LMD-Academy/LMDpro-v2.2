--- source: https://ai.google.dev/edge/mediapipe/solutions/text/text_embedder/android ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [MediaPipe](https://developers.google.com/edge/mediapipe/solutions/guide)

Send feedback

# Text embedding guide for Android Stay organized with collections Save and categorize content based on your preferences.



The MediaPipe Text Embedder task lets you create a numeric representation of text data to
capture its semantic meaning. These instructions show you how to use the
Text Embedder with Android apps.

For more information about the capabilities, models, and configuration options
of this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/text/text_embedder/index).

## Code example

The MediaPipe Tasks example code is a simple implementation of a Text Embedder
app for Android. The example evaluates the semantic similarities between two
pieces of text, and requires either a physical Android device or an Android
emulator.

You can use the app as a starting point for your own Android app, or refer to it
when modifying an existing app. The Text Embedder example code is hosted on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/text_embedder/android).

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
   only the files for the Text Embedder example app:

   ```
   cd mediapipe-samples
   git sparse-checkout init --cone
   git sparse-checkout set examples/text_embedder/android
   ```

After creating a local version of the example code, you can import the project
into Android Studio and run the app. For instructions, see the [Setup Guide for
Android](/mediapipe/solutions/setup_android#example_code).

### Key components

The following files contain the crucial code for this text embedder example
application:

* [TextEmbedderHelper.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/text_embedder/android/app/src/main/java/com/google/mediapipe/examples/textembedder/TextEmbedderHelper.kt):
  Initializes the text embedder and handles the model and delegate selection.
* [MainActivity.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/text_embedder/android/app/src/main/java/com/google/mediapipe/examples/textembedder/MainActivity.kt):
  Implements the application and assembles the user interface components.

## Setup

This section describes key steps for setting up your development environment and
code projects specifically to use Text Embedder. For general information on
setting up your development environment for using MediaPipe tasks, including
platform version requirements, see the [Setup guide for
Android](/mediapipe/solutions/setup_android).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Dependencies

Text Embedder uses the `com.google.mediapipe:tasks-text` libraries. Add this
dependency to the `build.gradle` file of your Android app development project.
You can import the required dependencies with the following code:

```
dependencies {
    implementation 'com.google.mediapipe:tasks-text:latest.release'
}
```

### Model

The MediaPipe Text Embedder task requires a trained model that is compatible with this
task. For more information on available trained models for Text Embedder, see
the task overview [Models section](https://developers.google.com/edge/mediapipe/solutions/text/text_embedder/index#models).

Select and download the model, and then store it within your project directory:

```
<dev-project-root>/src/main/assets
```

**Note:** The Android build system automatically checks the project directory for
file resources.

Specify the path of the model within the `ModelAssetPath` parameter. In the
example code, the model is defined in the `setupTextEmbedder()` function in
[TextEmbedderHelper.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/text_embedder/android/app/src/main/java/com/google/mediapipe/examples/textembedder/TextEmbedderHelper.kt)
file:

Use the `BaseOptions.Builder.setModelAssetPath()` function to specify the path
used by the model. This method is referred to in the code example in the next
section.

## Create the task

You can use one of the `createFrom...()` functions to create the task. The
`createFromOptions()` function accepts configuration options to set the embedder
options. You can also initialize the task using the `createFromFile()` factory
function. The `createFromFile()` function accepts a relative or absolute path to
the trained model file. For more information on configuration options, see
[Configuration options](#configuration_options).

The following code demonstrates how to build and configure this task.

```
val baseOptions = baseOptionsBuilder.build()
val optionsBuilder =
    TextEmbedderOptions.builder().setBaseOptions(baseOptions)
val options = optionsBuilder.build()
textEmbedder = TextEmbedder.createFromOptions(context, options)
```

The example code implementation sets the text embedder options in the
`setupTextEmbedder()` function in the
[TextEmbedderHelper.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/text_embedder/android/app/src/main/java/com/google/mediapipe/examples/textembedder/TextEmbedderHelper.kt)
file.

### Configuration options

This task has the following configuration options for Android apps:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `l2_normalize` | Whether to normalize the returned feature vector with L2 norm. Use this option only if the model does not already contain a native L2\_NORMALIZATION TFLite Op. In most cases, this is already the case and L2 normalization is thus achieved through TFLite inference with no need for this option. | `Boolean` | `False` |
| `quantize` | Whether the returned embedding should be quantized to bytes via scalar quantization. Embeddings are implicitly assumed to be unit-norm and therefore any dimension is guaranteed to have a value in [-1.0, 1.0]. Use the l2\_normalize option if this is not the case. | `Boolean` | `False` |

## Prepare data

Text Embedder works with text (`String`) data. The task handles the data input
preprocessing, including tokenization and tensor preprocessing. All
preprocessing is handled within the `embed()` function. There is no need for
additional preprocessing of the input text beforehand.

```
val inputText = "The input text to be embedded."
```

## Run the task

The Text Embedder uses the `embed` function to trigger inferences. For text
embedding, this means returning the embedding vectors for the input text.

The following code demonstrates how execute the processing with the task model.

```
textEmbedder?.let {
    val firstEmbed =
        it.embed(firstText).embeddingResult().embeddings().first()
    val secondEmbed =
        it.embed(secondText).embeddingResult().embeddings().first()
    ...
}
```

In the example code, the `embed` function is called in the
[TextEmbedderHelper.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/text_embedder/android/app/src/main/java/com/google/mediapipe/examples/textembedder/TextEmbedderHelper.kt)
file.

## Handle and display results

Upon running inference, the Text Embedder task returns an `TextEmbedderResult`
object that contains a list of embeddings (either floating point or
scalar-quantized) for the input text.

The following shows an example of the output data from this task:

```
TextEmbedderResult:
  Embedding #0 (sole embedding head):
    float_embedding: {0.2345f, 0.1234f, ..., 0.6789f}
    head_index: 0
```

You can compare the semantic similarity of two embeddings using the
`TextEmbedder.cosineSimilarity` function. See the following code for an example.

```
val similarity = TextEmbedder.cosineSimilarity(firstEmbed, secondEmbed)
```

In the example code, the `TextEmbedder.cosineSimilarity()` function is called in the
[TextEmbedderHelper.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/text_embedder/android/app/src/main/java/com/google/mediapipe/examples/textembedder/TextEmbedderHelper.kt)
file.






Send feedback