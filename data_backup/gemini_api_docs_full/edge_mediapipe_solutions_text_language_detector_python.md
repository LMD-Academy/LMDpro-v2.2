--- source: https://ai.google.dev/edge/mediapipe/solutions/text/language_detector/python ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [MediaPipe](https://developers.google.com/edge/mediapipe/solutions/guide)

Send feedback

# Language detection guide for Python Stay organized with collections Save and categorize content based on your preferences.



The MediaPipe Language Detector task lets you identify the language of a piece of text. These
instructions show you how to use the Language Detector with Python. The code sample
described in these instructions is available on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/language_detector/python).

You can see this task in action by viewing the
[demo](https://google-ai-edge.github.io/mediapipe-samples-web/#/text/language_detector).
For more information about the capabilities, models, and configuration options
of this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/text/language_detector/index).

## Code example

The example code for Language Detector provides a complete implementation of this
task in Python for your reference. This code helps you test this task and get
started on building your own language detection feature. You can view, run, and
edit the Language Detector
[example code](https://colab.research.google.com/github/googlesamples/mediapipe/blob/main/examples/language_detector/python/%5BMediaPipe_Python_Tasks%5D_Language_Detector.ipynb)
using just your web browser.

## Setup

This section describes key steps for setting up your development environment and
code projects specifically to use Language Detector. For general information on
setting up your development environment for using MediaPipe tasks, including
platform version requirements, see the
[Setup guide for Python](/mediapipe/solutions/setup_python).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Packages

Language Detector uses the mediapipe pip package. You can install the dependency
with the following:

```
$ python -m pip install mediapipe
```

### Imports

Import the following classes to access the Language Detector task functions:

```
import mediapipe as mp
from mediapipe.tasks import python
from mediapipe.tasks.python import text
```

### Model

The MediaPipe Language Detector task requires a trained model that is compatible with this
task. For more information on available trained models for Language Detector, see
the task overview [Models](https://developers.google.com/edge/mediapipe/solutions/text/language_detector/index#models) section.

Select and download the model, and then store it within your project directory:

```
model_path = '/absolute/path/to/language_detector.tflite'
```

Specify the path of the model with the `BaseOptions` object `model_asset_path`
parameter, as shown below:

```
base_options = BaseOptions(model_asset_path=model_path)
```

## Create the task

The MediaPipe Language Detector task uses the `create_from_options` function to set up the
task. The `create_from_options` function accepts values for configuration
options to set the detector options. You can also initialize the task using
the `create_from_model_path` factory function. The `create_from_model_path`
function accepts a relative or absolute path to the trained model file.
For more information on configuring tasks, see
[Configuration options](#configuration_options).

The following code demonstrates how to build and configure this task.

```
base_options = python.BaseOptions(model_asset_path=model_path)
options = text.LanguageDetectorOptions(base_options=base_options)
```

### Configuration options

This task has the following configuration options for Python applications:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `max_results` | Sets the optional maximum number of top-scored language predictions to return. If this value is less than zero, all available results are returned. | Any positive numbers | `-1` |
| `score_threshold` | Sets the prediction score threshold that overrides the one provided in the model metadata (if any). Results below this value are rejected. | Any float | Not set |
| `category_allowlist` | Sets the optional list of allowed language codes. If non-empty, language predictions whose language code is not in this set will be filtered out. This option is mutually exclusive with `category_denylist` and using both results in an error. | Any strings | Not set |
| `category_denylist` | Sets the optional list of language codes that are not allowed. If non-empty, language predictions whose language code is in this set will be filtered out. This option is mutually exclusive with `category_allowlist` and using both results in an error. | Any strings | Not set |

## Prepare data

Language Detector works with text (`str`) data. The task handles the data input
preprocessing, including tokenization and tensor preprocessing. All
preprocessing is handled within the `detect` function. There is no need for
additional preprocessing of the input text beforehand.

```
input_text = 'The input text to be classified.'
```

## Run the task

The Language Detector uses the `detect` function to trigger inferences. For language
detection, this means returning the possible languages for the input text.

The following code demonstrates how to execute the processing with the task
model.

```
with python.text.LanguageDetector.create_from_options(options) as detector:
  detection_result = detector.detect(input_text)
```

## Handle and display results

The Language Detector outputs a `LanguageDetectorResult` consisting of a list of
language predictions along with the probabilities for those predictions.
The following shows an example of the output data from this task:

```
LanguageDetectorResult:
  LanguagePrediction #0:
    language_code: "fr"
    probability: 0.999781
```

This result has been obtained by running the model on the input text:
`"Il y a beaucoup de bouches qui parlent et fort peu de têtes qui pensent."`.

For an example of the code required to process and visualize the results
of this task, see the
[Python sample app](https://colab.research.google.com/github/googlesamples/mediapipe/blob/main/examples/language_detector/python/%5BMediaPipe_Python_Tasks%5D_Language_Detector.ipynb).






Send feedback