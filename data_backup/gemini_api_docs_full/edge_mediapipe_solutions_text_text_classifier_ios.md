--- source: https://ai.google.dev/edge/mediapipe/solutions/text/text_classifier/ios ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [MediaPipe](https://developers.google.com/edge/mediapipe/solutions/guide)

Send feedback

# Text classification guide for iOS Stay organized with collections Save and categorize content based on your preferences.



The Text Classifier task lets you classify text into a set of defined categories,
such as positive or negative sentiment. The categories are determined based on
the model you use and how that model was trained. These instructions show you
how to use the Text Classifier in iOS apps. The code sample described in these
instructions is available on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/text_classification/ios).

You can see this task in action by viewing this [Web
demo](https://google-ai-edge.github.io/mediapipe-samples-web/#/text/text_classifier). For
more information about the capabilities, models, and configuration options of
this task, see the
[Overview](https://developers.google.com/mediapipe/solutions/text/text_classifier/index).

## Code example

The MediaPipe Tasks example code is a basic implementation of a Text Classifier
app for iOS.

You can use the app as a starting point for your own iOS app, or refer to it
when modifying an existing app. You can refer to the Text Classifier example code
on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/text_classification/ios).

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
   only the files for the Text Classifier example app:

   ```
   cd mediapipe-samples
   git sparse-checkout init --cone
   git sparse-checkout set examples/text_classification/ios/
   ```

After creating a local version of the example code, you can install the
MediaPipe task library, open the project using Xcode, and run the app. For
instructions, see the [Setup Guide for iOS](/mediapipe/solutions/setup_ios).

### Key components

The following files contain the crucial code for the Text Classifier example
application:

* [TextClassifierHelper.swift](https://github.com/googlesamples/mediapipe/blob/main/examples/text_classification/ios/TextClassifier/Helper/TextClassifierHelper.swift):
  Initializes the text classifier and handles the model selection.
* [ViewController.swift](https://github.com/googlesamples/mediapipe/blob/main/examples/text_classification/ios/TextClassifier/ViewController.swift):
  Implements the UI and formats the results.

## Setup

This section describes key steps for setting up your development environment and
code projects to use Text Classifier. For general information on setting up your
development environment for using MediaPipe tasks, including platform version
requirements, see the [Setup guide for iOS](/mediapipe/solutions/setup_ios).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Dependencies

Text Classifier uses the `MediaPipeTasksText` library, which must be installed
using CocoaPods. The library is compatible with both Swift and Objective-C apps
and does not require any additional language-specific setup.

For instructions to install CocoaPods on macOS, refer to the [CocoaPods
installation guide](https://guides.CocoaPods.org/using/getting-started.html).
For instructions on how to create a `Podfile` with the necessary pods for your
app, refer to [Using
CocoaPods](https://guides.CocoaPods.org/using/using-cocoapods.html).

Add the MediaPipeTasksText pod in the `Podfile` using the following code:

```
target 'MyTextClassifierApp' do
  use_frameworks!
  pod 'MediaPipeTasksText'
end
```

If your app includes unit test targets, refer to the [Set Up Guide for
iOS](/mediapipe/solutions/setup_ios) for additional information on setting up
your `Podfile`.

**Note:** The following sections provide code examples in both Swift and
Objective-C. When applicable, the explanations refer to the Swift method names.

### Model

The MediaPipe Text Classifier task requires a trained model that is compatible
with this task. For more information about the available trained models for
Text Classifier, see the task overview [Models
section](https://developers.google.com/mediapipe/solutions/text/text_classifier/index#models).

Select and download a model, and add it to your project directory using Xcode.
For instructions on how to add files to your Xcode project, refer to [Managing
files and folders in your Xcode
project](https://developer.apple.com/documentation/xcode/managing-files-and-folders-in-your-xcode-project).

Use the `BaseOptions.modelAssetPath` property to specify the path to the model
in your app bundle. For a code example, see the next section.

## Create the task

You can create the Text Classifier task by calling one of its initializers. The
`TextClassifier(options:)` initializer sets values for the configuration
options.

If you don't need a Text Classifier initialized with customized configuration
options, you can use the `TextClassifier(modelPath:)` initializer to create a
Text Classifier with the default options. For more information about configuration
options, see [Configuration Overview](#configuration).

The following code demonstrates how to build and configure this task.

### Swift

```
import MediaPipeTasksText

let modelPath = Bundle.main.path(forResource: "model",
                                      ofType: "tflite")

let options = TextClassifierOptions()
options.baseOptions.modelAssetPath = modelPath
options.scoreThreshold = 0.6

let textClassifier = try TextClassifier(options: options)
```

### Objective-C

```
@import MediaPipeTasksText;

NSString *modelPath = [[NSBundle mainBundle] pathForResource:@"model"
                                                      ofType:@"tflite"];

MPPTextClassifierOptions *options = [[MPPTextClassifierOptions alloc] init];
options.baseOptions.modelAssetPath = modelPath;
options.scoreThreshold = 0.6;

MPPTextClassifier *textClassifier =
      [[MPPTextClassifier alloc] initWithOptions:options error:nil];
```

### Configuration options

This task has the following configuration options for iOS apps:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `displayNamesLocale` | Sets the language of labels to use for display names provided in the metadata of the task's model, if available. Default is `en` for English. You can add localized labels to the metadata of a custom model using the [TensorFlow Lite Metadata Writer API](https://ai.google.dev/edge/lite/models/metadata_writer_tutorial#natural_language_classifiers) Locale code | en | |
| `maxResults` | Sets the optional maximum number of top-scored classification results to return. If < 0, all available results will be returned. | Any positive numbers | `-1` |
| `scoreThreshold` | Sets the prediction score threshold that overrides the one provided in the model metadata (if any). Results below this value are rejected. | Any float | Not set |
| `categoryAllowlist` | Sets the optional list of allowed category names. If non-empty, classification results whose category name is not in this set will be filtered out. Duplicate or unknown category names are ignored. This option is mutually exclusive with `categoryDenylist` and using both results in an error. | Any strings | Not set |
| `categoryDenylist` | Sets the optional list of category names that are not allowed. If non-empty, classification results whose category name is in this set will be filtered out. Duplicate or unknown category names are ignored. This option is mutually exclusive with `categoryAllowlist` and using both results in an error. | Any strings | Not set |

## Prepare data

Text Classifier works with text data. The task handles the data input
preprocessing, including tokenization and tensor preprocessing.

All preprocessing is handled within the `classify(text:)` function. There is no
need for additional preprocessing of the input text beforehand.

### Swift

```
let text = "The input text to be classified."
```

### Objective-C

```
NSString *text = @"The input text to be classified.";
```

## Run the task

To run the Text Classifier, use the `classify(text:)` method. The Text Classifier
returns the possible categories for the input text.

### Swift

```
let result = try textClassifier.classify(text: text)
```

### Objective-C

```
MPPTextClassifierResult *result = [textClassifier classifyText:text
                                                          error:nil];
```

**Note**: The task blocks the current thread until it finishes running inference
on the text. To avoid blocking the current thread, execute the processing in a
background thread using iOS
[Dispatch](https://developer.apple.com/documentation/dispatch) or
[NSOperation](https://developer.apple.com/documentation/foundation/nsoperation)
frameworks.

## Handle and display results

Upon running inference, the Text Classifier task returns a `TextClassifierResult`
object which contains the list of possible categories for the input text. The
categories are defined by the model you use, so if you want different
categories, pick a different model, or retrain an existing one.

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

The
[ViewController.swift](https://github.com/googlesamples/mediapipe/blob/main/examples/text_classification/ios/TextClassifier/ViewController.swift)
file in the example code demonstrates how to display the detection results
returned from the task.






Send feedback