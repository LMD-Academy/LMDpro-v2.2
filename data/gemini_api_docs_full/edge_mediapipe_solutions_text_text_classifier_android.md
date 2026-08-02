# Text classification guide for Android Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/mediapipe/solutions/text/text_classifier/android))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

The MediaPipe Text Classifier task lets you classify text into a set of defined categories,
such as positive or negative sentiment. The categories are determined the model
you use and how that model was trained. These instructions show you how to use
the Text Classifier with Android apps.

You can see this task in action by viewing the
[demo](https://google-ai-edge.github.io/mediapipe-samples-web/#/text/text_classifier).
For more information about the capabilities, models, and
configuration options of this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/text/text_classifier/index).

## Code example

The example code for Text Classifier provides a simple implementation of this
task for your reference. This code help you test this task and get started on
building your own text classification app. You can browse the
[Text Classifier example code](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/text_classification/android)
on GitHub.

### Download the code

The following instructions show you how to create a local copy of the example
code using the [git](https://git-scm.com/) version control command line tool.

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

To download the example code:

1. Clone the git repository using the following command:

   ```
   git clone https://github.com/google-ai-edge/mediapipe-samples
   ```
2. Optionally, configure your git instance to use sparse checkout,
   so you have only the files for the Text Classifier example app:

   ```
   cd mediapipe-samples
   git sparse-checkout init --cone
   git sparse-checkout set examples/text_classification/android
   ```

For instruction on how to setup and run an example with Android Studio,
see the example code setup instructions in the
[Setup Guide for Android](/mediapipe/solutions/setup_android#example_code).

### Key components

The following files contain the crucial code for the text classification
example app:

* [TextClassifierHelper.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/text_classification/android/app/src/main/java/com/google/mediapipe/examples/textclassifier/TextClassifierHelper.kt) -
  Initializes the text classifier and handles the model selection.
* [MainActivity.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/text_classification/android/app/src/main/java/com/google/mediapipe/examples/textclassifier/MainActivity.kt) -
  Implements the application, including calling `TextClassifierHelper` and
  `ResultsAdapter`.
* [ResultsAdapter.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/text_classification/android/app/src/main/java/com/google/mediapipe/examples/textclassifier/ResultsAdapter.kt) -
  Handles and formats the results.

## Setup

This section describes key steps for setting up your development environment and
code projects specifically to use Text Classifier. For general information on
setting up your development environment for using MediaPipe Tasks, including
platform version requirements, see the
[Setup guide for Android](/mediapipe/solutions/setup_android).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Dependencies

Text Classifier uses the `com.google.mediapipe:tasks-text` libraries. Add this
dependency to the `build.gradle` file of your Android app development project.
You can import the required dependencies with the following code:

```
dependencies {
    implementation 'com.google.mediapipe:tasks-text:latest.release'
}
```

### Model

The MediaPipe Text Classifier task requires a trained model that is compatible with this
task. For more information on available trained models for Text Classifier, see
the task overview [Models section](https://developers.google.com/edge/mediapipe/solutions/text/text_classifier/index#models).

Select and download a model, and then store it within your project `assets`
directory:

```
<dev-project-root>/src/main/assets
```

**Note:** This location is recommended, because the Android build system
automatically checks this directory for file resources.

Use the `BaseOptions.Builder.setModelAssetPath()` method to specify the path
of the model to use. For a code example, see the next section.

## Create the task

Use one of the Text Classifier `TextClassifier.createFrom...()` functions to
prepare the task for running inferences. You can use the `createFromFile()`
function with a relative or absolute path to the trained model file. The code
example below demonstrates using the `TextClassifier.createFromOptions()`
function. For more information on the available configuration options, see
[Configuration options](#configuration_options).

The following code demonstrates how to build and configure this task.

```
// no directory path required if model file is in src/main/assets:
String currentModel = "text_classifier_model.tflite";

fun initClassifier() {
    val baseOptionsBuilder = BaseOptions.builder()
        .setModelAssetPath(currentModel)
    try {
        val baseOptions = baseOptionsBuilder.build()
        val optionsBuilder = TextClassifier.TextClassifierOptions.builder()
            .setBaseOptions(baseOptions)
        val options = optionsBuilder.build()
        textClassifier = TextClassifier.createFromOptions(context, options)
    } catch (e: IllegalStateException) { // exception handling
    }
}
```

You can see an example of how to create a task in the code example
[TextClassifierHelper](https://github.com/googlesamples/mediapipe/blob/main/examples/text_classification/android/app/src/main/java/com/google/mediapipe/examples/textclassifier/TextClassifierHelper.kt#L38-L58)
class `initClassifier()` function.

### Configuration options

This task has the following configuration options for Android apps:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `displayNamesLocale` | Sets the language of labels to use for display names provided in the metadata of the task's model, if available. Default is `en` for English. You can add localized labels to the metadata of a custom model using the [TensorFlow Lite Metadata Writer API](https://ai.google.dev/edge/lite/models/metadata_writer_tutorial#natural_language_classifiers) Locale code | en | |
| `maxResults` | Sets the optional maximum number of top-scored classification results to return. If < 0, all available results will be returned. | Any positive numbers | `-1` |
| `scoreThreshold` | Sets the prediction score threshold that overrides the one provided in the model metadata (if any). Results below this value are rejected. | Any float | Not set |
| `categoryAllowlist` | Sets the optional list of allowed category names. If non-empty, classification results whose category name is not in this set will be filtered out. Duplicate or unknown category names are ignored. This option is mutually exclusive with `categoryDenylist` and using both results in an error. | Any strings | Not set |
| `categoryDenylist` | Sets the optional list of category names that are not allowed. If non-empty, classification results whose category name is in this set will be filtered out. Duplicate or unknown category names are ignored. This option is mutually exclusive with `categoryAllowlist` and using both results in an error. | Any strings | Not set |

## Prepare data

Text Classifier works with text (`String`) data. The task handles the data input
preprocessing, including tokenization and tensor preprocessing.

All preprocessing is handled within the `classify()` function. There is no need
for additional preprocessing of the input text beforehand.

```
String inputText = "The input text to be classified.";
```

## Run the task

The Text Classifier uses the `TextClassifier.classify()` function to run
inferences. Use a separate execution thread for executing the classification
to avoid blocking the Android user interface thread with your app.

The following code demonstrates how to execute the processing with the task
model using a separate execution thread.

```
    fun classify(text: String) {
        executor = ScheduledThreadPoolExecutor(1)

        executor.execute {
            val results = textClassifier.classify(text)
            listener.onResult(results)
        }
    }
```

You can see an example of how to run a task in the code example
[TextClassifierHelper](https://github.com/googlesamples/mediapipe/blob/main/examples/text_classification/android/app/src/main/java/com/google/mediapipe/examples/textclassifier/TextClassifierHelper.kt#L61-L75)
class `classify()` function.

## Handle and display results

The Text Classifier outputs a `TextClassifierResult` which contains the list
of possible categories for the input text. The categories are defined by the
the model you use, so if you want different categories, pick a different model,
or retrain an existing one.

The following shows an example of the output data from this task:

```
TextClassificationResult:
  Classification #0 (single classification head):
    ClassificationEntry #0:
      Category #0:
        category name: "positive"
        score: 0.8904
        index: 0
      Category #1:
        category name: "negative"
        score: 0.1096
        index: 1
```

This result has been obtained by running the [BERT-classifier](https://storage.googleapis.com/mediapipe-assets/bert_text_classifier.tflite) on the input text:
`"an imperfect but overall entertaining mystery"`.

You can see an example of how to display results in the code example
[ResultsAdapter](https://github.com/googlesamples/mediapipe/blob/main/examples/text_classification/android/app/src/main/java/com/google/mediapipe/examples/textclassifier/ResultsAdapter.kt#L30-L50)
class and `ViewHolder` inner class.

Send feedback
