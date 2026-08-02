# Text classification guide for Python Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/mediapipe/solutions/text/text_classifier/python))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

The MediaPipe Text Classifier task lets you classify text into a set of defined categories,
such as positive or negative sentiment. The categories are determined the model
you use and how that model was trained. These instructions show you how to use
the Text Classifier with Python.

You can see this task in action by viewing the
[Web demo](https://google-ai-edge.github.io/mediapipe-samples-web/#/text/text_classifier).
For more information about the capabilities, models, and
configuration options of this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/text/text_classifier/index).

## Code example

The example code for Text Classifier provides a complete implementation of this
task in Python for your reference. This code helps you test this task and get
started on building your own text classification app. You can view, run, and
edit the Text Classifier
[example code](https://colab.research.google.com/github/googlesamples/mediapipe/blob/main/examples/text_classification/python/text_classifier.ipynb)
using just your web browser.

If you are implementing the Text Classifier for Raspberry Pi, refer to the
[Raspberry Pi example
app](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/text_classification/raspberry_pi).

## Setup

This section describes key steps for setting up your development environment and
code projects specifically to use Text Classifier. For general information on
setting up your development environment for using MediaPipe Tasks, including
platform version requirements, see the
[Setup guide for Python](/mediapipe/solutions/setup_python).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Packages

Text Classifier uses the mediapipe pip package. You can install
these dependencies with the following:

```
$ python -m pip install mediapipe
```

### Imports

Import the following classes to access the Text Classifier task functions:

```
from mediapipe.tasks import python
from mediapipe.tasks.python import text
```

### Model

The MediaPipe Text Classifier task requires a trained model that is compatible with this
task. For more information on available trained models for Text Classifier, see
the task overview [Models section](https://developers.google.com/edge/mediapipe/solutions/text/text_classifier/index#models).

Select and download a model, and then store it in a local directory:

```
model_path = '/absolute/path/to/text_classifier.tflite'
```

Specify the path of the model with the `BaseOptions` object `model_asset_path`
parameter, as shown below:

```
base_options = BaseOptions(model_asset_path=model_path)
```

## Create the task

The MediaPipe Text Classifier task uses the `create_from_options` function to set up the
task. The `create_from_options` function accepts values for configuration
options to set the classifier options. You can also initialize the task using
the `create_from_model_path` factory function. The `create_from_model_path`
function accepts a relative or absolute path to the trained model file.
For more information on configuration options, see
[Configuration options](#configuration_options).

The following code demonstrates how to build and configure this task.

```
base_options = python.BaseOptions(model_asset_path=model_path)
options = text.TextClassifierOptions(base_options=base_options)

with python.text.TextClassifier.create_from_options(options) as classifier:
  classification_result = classifier.classify(text)
```

### Configuration options

This task has the following configuration options for Android apps:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `display_names_locale` | Sets the language of labels to use for display names provided in the metadata of the task's model, if available. Default is `en` for English. You can add localized labels to the metadata of a custom model using the [TensorFlow Lite Metadata Writer API](https://ai.google.dev/edge/lite/models/metadata_writer_tutorial#natural_language_classifiers) Locale code | en | |
| `max_results` | Sets the optional maximum number of top-scored classification results to return. If < 0, all available results will be returned. | Any positive numbers | `-1` |
| `score_threshold` | Sets the prediction score threshold that overrides the one provided in the model metadata (if any). Results below this value are rejected. | Any float | Not set |
| `category_allowlist` | Sets the optional list of allowed category names. If non-empty, classification results whose category name is not in this set will be filtered out. Duplicate or unknown category names are ignored. This option is mutually exclusive with `category_denylist` and using both results in an error. | Any strings | Not set |
| `category_denylist` | Sets the optional list of category names that are not allowed. If non-empty, classification results whose category name is in this set will be filtered out. Duplicate or unknown category names are ignored. This option is mutually exclusive with `category_allowlist` and using both results in an error. | Any strings | Not set |

## Prepare data

Text Classifier works with text (`str`) data. The task handles the data input
preprocessing, including tokenization and tensor preprocessing.

All preprocessing is handled within the `classify` function. There is no need
for additional preprocessing of the input text beforehand.

```
input_text = 'The input text to be classified.'
```

## Run the task

The Text Classifier uses the `classify` function to trigger inferences. For text
classification, this means returning the possible categories for the input text.

The following code demonstrates how to execute the processing with the task
model.

```
with python.text.TextClassifier.create_from_options(options) as classifier:
  classification_result = classifier.classify(text)
```

## Handle and display results

The Text Classifier outputs a `TextClassifierResult` object containing a list
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

Send feedback
