# Language detection guide for Android Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/mediapipe/solutions/text/language_detector/android))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

The MediaPipe Language Detector task lets you identify the language of a piece of text. These
instructions show you how to use the Language Detector with Android apps. The code
sample described in these instructions is available on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/language_detector/android).

You can see this task in action by viewing the
[demo](https://google-ai-edge.github.io/mediapipe-samples-web/#/text/language_detector).
For more information about the capabilities, models, and configuration options
of this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/text/language_detector/index).

## Code example

The example code for Language Detector provides a simple implementation of this
task for your reference. This code help you test this task and get started on
building your own language detection feature. You can browse the
[Language Detector example code](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/language_detector/android)
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
   so you have only the files for the Language Detector example app:

   ```
   cd mediapipe-samples
   git sparse-checkout init --cone
   git sparse-checkout set examples/languagedetector/android
   ```

For instruction on how to setup and run an example with Android Studio,
see the example code setup instructions in the
[Setup Guide for Android](/mediapipe/solutions/setup_android#example_code).

### Key components

The following files contain the crucial code for the text classification
example app:

* [LanguageDetectorHelper.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/language_detector/android/app/src/main/java/com/google/mediapipe/examples/languagedetector/LanguageDetectorHelper.kt) -
  Initializes the language detector and handles the model selection.
* [ResultsAdapter.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/language_detector/android/app/src/main/java/com/google/mediapipe/examples/languagedetector/ResultsAdapter.kt) -
  Handles and formats the detection results.
* [MainActivity.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/language_detector/android/app/src/main/java/com/google/mediapipe/examples/languagedetector/MainActivity.kt) -
  Implements the application, including calling `LanguageDetectorHelper` and
  `ResultsAdapter`.

## Setup

This section describes key steps for setting up your development environment and
code projects specifically to use Language Detector. For general information on
setting up your development environment for using MediaPipe tasks, including
platform version requirements, see the
[Setup guide for Android](/mediapipe/solutions/setup_android).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Dependencies

Language Detector uses the `com.google.mediapipe:tasks-text` libraries. Add this
dependency to the `build.gradle` file of your Android app development project.
You can import the required dependencies with the following code:

```
dependencies {
    implementation 'com.google.mediapipe:tasks-text:latest.release'
}
```

### Model

The MediaPipe Language Detector task requires a trained model that is compatible with this
task. For more information on available trained models for Language Detector, see
the task overview [Models section](https://developers.google.com/edge/mediapipe/solutions/text/language_detector/index#models).

Select and download the model, and then store it within your project directory:

```
<dev-project-root>/src/main/assets
```

Specify the path of the model within the `ModelName` parameter.

## Create the task

You can use one of the `createFrom...()` functions to create the task. The
`createFromOptions()` function accepts configuration options for the language
detector. You can also initialize the task using the `createFromFile()` factory
function. The `createFromFile()` function accepts a relative or absolute path to
the trained model file. For more information on configuring tasks, see
[Configuration options](#configuration_options).

The following code demonstrates how to create and configure this task.

```
// For creating a language detector instance:
LanguageDetectorOptions options =
       LanguageDetectorOptions.builder()
       .setBaseOptions(
          BaseOptions.builder()
            .setModelAssetPath(modelPath)
            .build()
          )
       .build();
LanguageDetector languageDetector = LanguageDetector.createFromOptions(context, options);
```

You can see an example of how to create a task in the code example
[LanguageDetectorHelper](https://github.com/googlesamples/mediapipe/blob/main/examples/language_detector/android/app/src/main/java/com/google/mediapipe/examples/languagedetector/LanguageDetectorHelper.kt)
class `initDetector()` function.

### Configuration options

This task has the following configuration options for Android apps:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `maxResults` | Sets the optional maximum number of top-scored language predictions to return. If this value is less than zero, all available results are returned. | Any positive numbers | `-1` |
| `scoreThreshold` | Sets the prediction score threshold that overrides the one provided in the model metadata (if any). Results below this value are rejected. | Any float | Not set |
| `categoryAllowlist` | Sets the optional list of allowed language codes. If non-empty, language predictions whose language code is not in this set will be filtered out. This option is mutually exclusive with `categoryDenylist` and using both results in an error. | Any strings | Not set |
| `categoryDenylist` | Sets the optional list of language codes that are not allowed. If non-empty, language predictions whose language code is in this set will be filtered out. This option is mutually exclusive with `categoryAllowlist` and using both results in an error. | Any strings | Not set |

## Prepare data

Language Detector works with text (`String`) data. The task handles the data input
preprocessing, including tokenization and tensor preprocessing. All
preprocessing is handled within the `detect()` function. There is no need for
additional preprocessing of the input text beforehand.

```
String inputText = "Some input text for the language detector";
```

## Run the task

The Language Detector uses the `LanguageDetector.detect()` method to process input
text and predict the language of the text. You should use a separate execution
thread for executing the detection to avoid blocking the Android user
interface thread with your app.

The following code demonstrates how to execute the processing with the task
model using a separate execution thread.

```
// Predict the language of the input text.
fun classify(text: String) {
    executor = ScheduledThreadPoolExecutor(1)

    executor.execute {
        val results = languageDetector.detect(text)
        listener.onResult(results)
    }
}
```

You can see an example of how to run a task in the code example
[LanguageDetectorHelper](https://github.com/googlesamples/mediapipe/blob/main/examples/language_detector/android/app/src/main/java/com/google/mediapipe/examples/languagedetector/LanguageDetectorHelper.kt)
class `detect()` function.

## Handle and display results

The Language Detector outputs a `LanguageDetectorResult` consisting of a list of
language predictions along with the probabilities for those predictions. The
language categories are defined in the model, see the task overview
[Models section](https://developers.google.com/edge/mediapipe/solutions/text/language_detector/index#models) for details on the model you are using.

The following shows an example of the output data from this task:

```
LanguageDetectorResult:
  LanguagePrediction #0:
    language_code: "fr"
    probability: 0.999781
```

This result has been obtained by running the model on the input text:
`"Il y a beaucoup de bouches qui parlent et fort peu de têtes qui pensent."`.

You can see an example of how to display results in the code example
[ResultsAdapter](https://github.com/googlesamples/mediapipe/blob/main/examples/language_detector/android/app/src/main/java/com/google/mediapipe/examples/languagedetector/ResultsAdapter.kt)
class and `ViewHolder` inner class.

Send feedback
