# Audio classification guide for Python Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/mediapipe/solutions/audio/audio_classifier/python))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

The MediaPipe Audio Classifier task lets you perform classification on audio data. You can
use this task to identify sound events from a set of trained categories. These
instructions show you how to use the Audio Classifier with Python.

For more information about the capabilities, models, and configuration options
of this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/audio/audio_classifier/index).

## Code example

The example code for Audio Classifier provides a complete implementation of this
task in Python for your reference. This code helps you test this task and get
started on building your own audio classifier. You can view, run, and edit the
Audio Classifier [example
code](https://colab.research.google.com/github/googlesamples/mediapipe/blob/main/examples/audio_classifier/python/audio_classification.ipynb)
using just your web browser with Google Colab. You can view the source code for
this example on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/audio_classifier/python).

If you are implementing the Audio Classifier for Raspberry Pi, refer to
the [Raspberry Pi example
app](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/audio_classifier/raspberry_pi).

## Setup

This section describes key steps for setting up your development environment and
code projects specifically to use Audio Classifier. For general information on
setting up your development environment for using MediaPipe tasks, including
platform version requirements, see the [Setup guide for
Python](/mediapipe/solutions/setup_python).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Packages

The Audio Classifier task the mediapipe pip package. You can install the
dependency with the following:

```
$ python -m pip install mediapipe
```

### Imports

Import the following classes to access the Audio Classifier task functions:

```
import mediapipe as mp
from mediapipe.tasks import python
from mediapipe.tasks.python import audio
```

### Model

The MediaPipe Audio Classifier task requires a trained model that is compatible with this
task. For more information on available trained models for Audio Classifier, see
the task overview [Models section](https://developers.google.com/edge/mediapipe/solutions/audio/audio_classifier/index#models).

Select and download a model, and then store it in a local directory. You can use
the recommended
[Yamnet](https://tfhub.dev/google/lite-model/yamnet/classification/tflite/1?lite-format=tflite)
model.

```
model_path = '/absolute/path/to/lite-model_yamnet_classification_tflite_1.tflite'
```

Specify the path of the model within the Model Name parameter, as shown below:

```
base_options = BaseOptions(model_asset_path=model_path)
```

## Create the task

Use the `create_from_options` function to create the task. The
`create_from_options` function accepts configuration options including running
mode, display names locale, max number of results, confidence threshold,
category allow list, and deny list. For more information on configuration
options, see [Configuration Overview](#configuration).

The Audio Classifier task supports audio clips and audio streams as input. You
must specify the running mode corresponding to your input data type when
creating the task. Choose the tab corresponding to your input data type to see
how to create the task and run inference.

### Audio clips

```
AudioClassifier = mp.tasks.audio.AudioClassifier
AudioClassifierOptions = mp.tasks.audio.AudioClassifierOptions
AudioRunningMode = mp.tasks.audio.RunningMode
BaseOptions = mp.tasks.BaseOptions

options = AudioClassifierOptions(
    base_options=BaseOptions(model_asset_path='/path/to/model.tflite'),
    max_results=5,
    running_mode=AudioRunningMode.AUDIO_CLIPS)

with AudioClassifier.create_from_options(options) as classifier:
  # The classifier is initialized. Use it here.
  # ...
```

### Audio stream

```
AudioClassifier = mp.tasks.audio.AudioClassifier
AudioClassifierOptions = mp.tasks.audio.AudioClassifierOptions
AudioClassifierResult = mp.tasks.audio.AudioClassifierResult
AudioRunningMode = mp.tasks.audio.RunningMode
BaseOptions = mp.tasks.BaseOptions

def print_result(result: AudioClassifierResult, timestamp_ms: int):
    print(AudioClassifierResult result: {}’.format(result))

options = AudioClassifierOptions(
    base_options=BaseOptions(model_asset_path='/path/to/model.tflite'),
    running_mode=AudioRunningMode.AUDIO_STREAM,
    max_results=5,
    result_callback=print_result)

with AudioClassifier.create_from_options(options) as classifier:
  # The classifier is initialized. Use it here.
  # ...
```

For a complete example of creating a Audio Classifier for use with audio, see the
[code
example](https://colab.research.google.com/github/googlesamples/mediapipe/blob/main/examples/audio_classifier/python/audio_classification.ipynb).

### Configuration options

This task has the following configuration options for Python applications:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `running_mode` | Sets the running mode for the task. Audio Classifier has two modes:    AUDIO\_CLIPS: The mode for running the audio task on independent audio clips.    AUDIO\_STREAM: The mode for running the audio task on an audio stream, such as from microphone. In this mode, resultListener must be called to set up a listener to receive the classification results asynchronously. | {`AUDIO_CLIPS, AUDIO_STREAM`} | `AUDIO_CLIPS` |
| `display_names_locale` | Sets the language of labels to use for display names provided in the metadata of the task's model, if available. Default is `en` for English. You can add localized labels to the metadata of a custom model using the [TensorFlow Lite Metadata Writer API](https://ai.google.dev/edge/lite/models/metadata_writer_tutorial#audio_classifiers) Locale code | en | |
| `max_results` | Sets the optional maximum number of top-scored classification results to return. If < 0, all available results will be returned. | Any positive numbers | `-1` |
| `score_threshold` | Sets the prediction score threshold that overrides the one provided in the model metadata (if any). Results below this value are rejected. | [0.0, 1.0] | Not set |
| `category_allowlist` | Sets the optional list of allowed category names. If non-empty, classification results whose category name is not in this set will be filtered out. Duplicate or unknown category names are ignored. This option is mutually exclusive with `category_denylist` and using both results in an error. | Any strings | Not set |
| `category_denylist` | Sets the optional list of category names that are not allowed. If non-empty, classification results whose category name is in this set will be filtered out. Duplicate or unknown category names are ignored. This option is mutually exclusive with `category_allowlist` and using both results in an error. | Any strings | Not set |
| `result_callback` | Sets the result listener to receive the classification results asynchronously when the Audio Classifier is in the audio stream mode. Can only be used when running mode is set to `AUDIO_STREAM` | N/A | Not set |

## Prepare data

Audio Classifier works with audio clips and audio streams. The task handles the
data input preprocessing, including resampling, buffering, and framing.

Prepare your input as an audio file or a numpy array, then convert it to a
MediaPipe `AudioData` object. You can use an external library such as
[SciPy](https://scipy.org/) to load your input audios as numpy arrays.

The following examples explain and show how to prepare data for processing for
each of the available data types:

### Audio clips

```
import numpy as np
from scipy.io import wavfile

AudioData = mp.tasks.components.containers.AudioData

sample_rate, buffer = wavfile.read('/path/to/audio.wav')
audio_data = AudioData.create_from_array(
    buffer.astype(float) / np.iinfo(np.int16).max, sample_rate)
```

### Audio stream

```
import numpy as np

AudioData = mp.tasks.components.containers.AudioData

# Read microphone data as np arrays, then call

audio_data = AudioData.create_from_array(
    buffer.astype(float) / np.iinfo(np.int16).max, sample_rate)
```

**Note:** The Audio Classifier task automatically resampling, buffering, and framing
the input audio to match with the input requirement of its model.

## Run the task

You call the classify function corresponding to your running mode to trigger
inferences. The Audio Classifier API returns the possible categories for the audio
events within the input audio buffer.

### Audio clips

```
# Perform audio classification on the provided audio clip.
audio_classifier_result_list = classifier.classify(audio_data)
```

### Audio stream

```
# Send live audio data to perform audio classification.
# Results are sent to the `result_callback` provided in the `AudioClassifierOptions`
classifier.classify_async(audio_data, timestamp_ms)
```

Note the following:

* When running in the audio stream mode, you must also provide the
  Audio Classifier task the timestamp of the input audio data.
* When running in the audio clips model, the Audio Classifier task will block the
  current thread until it finishes processing the input audio.

For a more complete example of running Audio Classifier with audio clips, see the
[code
example](https://colab.research.google.com/github/googlesamples/mediapipe/blob/main/examples/audio_classifier/python/audio_classification.ipynb).

## Handle and display results

Upon running inference, the Audio Classifier task returns an
`AudioClassifierResult` object which contains the list of possible categories
for the audio events within the input audio.

The following shows an example of the output data from this task:

```
AudioClassifierResult:
  Timestamp in microseconds: 100
  ClassificationResult #0:
    Timestamp in microseconds: 100  
    Classifications #0 (single classification head):
      head index: 0
      category #0:
        category name: "Speech"
        score: 0.6
        index: 0
      category #1:
        category name: "Music"
        score: 0.2
        index: 1
```

The Audio Classifier example code demonstrates how to display the classification
results returned from this task, see the [code
example](https://colab.research.google.com/github/googlesamples/mediapipe/blob/main/examples/audio_classifier/python/audio_classification.ipynb)
for details.

Send feedback
