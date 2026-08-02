--- source: https://ai.google.dev/edge/mediapipe/solutions/audio/audio_classifier/android ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [MediaPipe](https://developers.google.com/edge/mediapipe/solutions/guide)

Send feedback

# Audio classification guide for Android Stay organized with collections Save and categorize content based on your preferences.



The MediaPipe Audio Classifier task lets you perform classification on audio data. You can
use this task to identify sound events from a set of trained categories. These
instructions show you how to use the Audio Classifier with Android apps.

For more information about the capabilities, models, and configuration options
of this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/audio/audio_classifier/index).

## Code example

The MediaPipe Tasks example code is a simple implementation of a Audio Classifier
app for Android. The example uses the microphone on a physical Android device to
continuously classify sounds, and can also run the classifier on sound files
stored on the device.

You can use the app as a starting point for your own Android app, or refer to it
when modifying an existing app. The Audio Classifier example code is hosted on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/audio_classifier/android).

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
   so you have only the files for the Audio Classifier example app:

   ```
   cd mediapipe-samples
   git sparse-checkout init --cone
   git sparse-checkout set examples/audio_classifier/android
   ```

After creating a local version of the example code, you can import the project
into Android Studio and run the app. For instructions, see the
[Setup Guide for Android](/mediapipe/solutions/setup_android#example_code).

### Key components

The following files contain the crucial code for this audio
classification example application:

* [AudioClassifierHelper.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/audio_classifier/android/app/src/main/java/com/google/mediapipe/examples/audioclassifier/AudioClassifierHelper.kt) -
  Initializes the audio classifier and handles the model and delegate
  selection.
* [RecorderFragment.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/audio_classifier/android/app/src/main/java/com/google/mediapipe/examples/audioclassifier/fragment/RecorderFragment.kt) -
  Creates the user interface and control code for live audio recording.
* [LibraryFragment.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/audio_classifier/android/app/src/main/java/com/google/mediapipe/examples/audioclassifier/fragment/LibraryFragment.kt) -
  Creates the user interface and control code for selecting audio files.
* [ProbabilitiesAdapter.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/audio_classifier/android/app/src/main/java/com/google/mediapipe/examples/audioclassifier/fragment/ProbabilitiesAdapter.kt) -
  Handles and formats the classifier's prediction results.

## Setup

This section describes key steps for setting up your development environment and
code projects specifically to use Audio Classifier. For general information on
setting up your development environment for using MediaPipe tasks, including
platform version requirements, see the
[Setup guide for Android](/mediapipe/solutions/setup_android).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Dependencies

Audio Classifier uses the `com.google.mediapipe:tasks-audio` library. Add this
dependency to the `build.gradle` file of your
Android app development project. Import the required dependencies with
the following code:

```
dependencies {
    ...
    implementation 'com.google.mediapipe:tasks-audio:latest.release'
}
```

### Model

The MediaPipe Audio Classifier task requires a trained model that is compatible with this
task. For more information on available trained models for Audio Classifier, see
the task overview [Models section](https://developers.google.com/edge/mediapipe/solutions/audio/audio_classifier/index#models).

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
Audio Classifier [example code](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/audio_classifier/android),
the model is defined in the [`AudioClassifierHelper.kt`](https://github.com/googlesamples/mediapipe/blob/2b9de6135a098e81b7153377b70dda2570e30c62/examples/audio_classifier/android/app/src/main/java/com/google/mediapipe/examples/audioclassifier/AudioClassifierHelper.kt#L76)
file.

## Create the task

You can use the `createFromOptions` function to create the task. The
`createFromOptions` function accepts configuration options including running
mode, display names locale, max number of results, confidence threshold,
and a category allow list or deny list. For more information on configuration
options, see [Configuration Overview](#configuration).

The Audio Classifier task supports the following input data types: audio clips
and audio streams. You need to specify the running mode corresponding to
your input data type when creating a task. Choose the tab corresponding to
your input data type to see how to create the task and run inference.

### Audio clips

```
AudioClassifierOptions options =
    AudioClassifierOptions.builder()
        .setBaseOptions(
            BaseOptions.builder().setModelAssetPath("model.tflite").build())
        .setRunningMode(RunningMode.AUDIO_CLIPS)
        .setMaxResults(5)
        .build();
audioClassifier = AudioClassifier.createFromOptions(context, options);
```

### Audio stream

```
AudioClassifierOptions options =
    AudioClassifierOptions.builder()
        .setBaseOptions(
            BaseOptions.builder().setModelAssetPath("model.tflite").build())
        .setRunningMode(RunningMode.AUDIO_STREAM)
        .setMaxResults(5)
        .setResultListener(audioClassifierResult -> {
             // Process the classification result here.
        })
        .build();
audioClassifier = AudioClassifier.createFromOptions(context, options);
```

The Audio Classifier example code implementation allows the user to switch between
processing modes. The approach makes the task creation code more complicated and
may not be appropriate for your use case. You can see the mode switching code
in the `initClassifier()` function of the
[`AudioClassifierHelper`](https://github.com/googlesamples/mediapipe/blob/2b9de6135a098e81b7153377b70dda2570e30c62/examples/audio_classifier/android/app/src/main/java/com/google/mediapipe/examples/audioclassifier/AudioClassifierHelper.kt).

### Configuration options

This task has the following configuration options for Android apps:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `runningMode` | Sets the running mode for the task. Audio Classifier has two modes:    AUDIO\_CLIPS: The mode for running the audio task on independent audio clips.    AUDIO\_STREAM: The mode for running the audio task on an audio stream, such as from microphone. In this mode, resultListener must be called to set up a listener to receive the classification results asynchronously. | {`AUDIO_CLIPS, AUDIO_STREAM`} | `AUDIO_CLIPS` |
| `displayNamesLocale` | Sets the language of labels to use for display names provided in the metadata of the task's model, if available. Default is `en` for English. You can add localized labels to the metadata of a custom model using the [TensorFlow Lite Metadata Writer API](https://ai.google.dev/edge/lite/models/metadata_writer_tutorial#audio_classifiers) Locale code | en | |
| `maxResults` | Sets the optional maximum number of top-scored classification results to return. If < 0, all available results will be returned. | Any positive numbers | `-1` |
| `scoreThreshold` | Sets the prediction score threshold that overrides the one provided in the model metadata (if any). Results below this value are rejected. | [0.0, 1.0] | Not set |
| `categoryAllowlist` | Sets the optional list of allowed category names. If non-empty, classification results whose category name is not in this set will be filtered out. Duplicate or unknown category names are ignored. This option is mutually exclusive with `categoryDenylist` and using both results in an error. | Any strings | Not set |
| `categoryDenylist` | Sets the optional list of category names that are not allowed. If non-empty, classification results whose category name is in this set will be filtered out. Duplicate or unknown category names are ignored. This option is mutually exclusive with `categoryAllowlist` and using both results in an error. | Any strings | Not set |
| `resultListener` | Sets the result listener to receive the classification results asynchronously when the Audio Classifier is in the audio stream mode. Can only be used when running mode is set to `AUDIO_STREAM` | N/A | Not set |
| `errorListener` | Sets an optional error listener. | N/A | Not set |

## Prepare data

Audio Classifier works with audio clips and audio streams. The task
handles the data input preprocessing, including resampling, buffering, and framing.
However, you must convert the input audio data to a
`com.google.mediapipe.tasks.components.containers.AudioData` object before passing it to the Audio Classifier task.

### Audio clips

```
import com.google.mediapipe.tasks.components.containers.AudioData;

// Load an audio on the user’s device as a float array.

// Convert a float array to a MediaPipe’s AudioData object.
AudioData audioData =
    AudioData.create(
        AudioData.AudioDataFormat.builder()
            .setNumOfChannels(numOfChannels)
            .setSampleRate(sampleRate)
            .build(),
        floatData.length);
audioData.load(floatData);
```

### Audio stream

```
import android.media.AudioRecord;
import com.google.mediapipe.tasks.components.containers.AudioData;

AudioRecord audioRecord =
    audioClassifier.createAudioRecord(/* numChannels= */ 1, /* sampleRate= */ 16000);
audioRecord.startRecording();

...

// To get a one second clip from the AudioRecord object:
AudioData audioData =
    AudioData.create(
        16000 /*sample counts per second*/);
        AudioData.AudioDataFormat.create(audioRecord.getFormat()),
audioData.load(audioRecord)
```

## Run the task

You can call the `classify` function corresponding to your running mode to
trigger inferences. The Audio Classifier API returns the possible categories for
the audio events recognized within the input audio data.

### Audio clips

```
AudioClassifierResult classifierResult = audioClassifier.classify(audioData);
```

### Audio stream

```
// Run inference on the audio block. The classifications results will be available
// via the `resultListener` provided in the `AudioClassifierOptions` when
// the audio classifier was created.
audioClassifier.classifyAsync(audioBlock, timestampMs);
```

Note the following:

* When running in the audio stream mode, you must also provide the
  Audio Classifier task with a timestamp to track what audio data within
  the stream was used for the inference.
* When running in the audio clips model, the Audio Classifier task blocks
  the current thread until it finishes processing the input audio.
  To avoid blocking user interface responses, execute processing in a
  background thread.

You can see an example of running Audio Classifier with audio clips, see the
`AudioClassifierHelper` class in the
[code example](https://github.com/googlesamples/mediapipe/blob/main/examples/audio_classifier/android/app/src/main/java/com/google/mediapipe/examples/audioclassifier/AudioClassifierHelper.kt).

## Handle and display results

After running an inference, the Audio Classifier task returns an list of possible
categories for the audio events within the input audio. The following listing
shows an example of the output data from this task:

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

In an Android app, the task returns a `ClassificationResult` which contains a
list of `AudioClassifierResult` objects, representing predictions for an
audio event, including the category label and confidence score.

### Audio clips

```
// In the audio clips mode, the classification results are for the entire audio
// clip. The results are timestamped AudioClassifierResult objects, each
// classifying an interval of the entire audio clip that starts at
// ClassificationResult.timestampMs().get().

for (ClassificationResult result : audioClassifierResult.classificationResults()) {
  // Audio interval start timestamp:
  result.timestampMs().get();
  // Classification result of the audio interval.
  result.classifications();
}
```

### Audio stream

```
// In the audio stream mode, the classification results list only contains one
// element, representing the classification result of the audio block that
// starts at ClassificationResult.timestampMs in the audio stream.

ClassificationResult result = audioClassifierResult.classificationResults().get(0);
// The audio block start timestamp
audioClassifierResult.timestampMs();
// Alternatively, the same timestamp can be retrieved from
// result.timestampMs().get();

// Classification result.
result.classifications();
```

You can see an example of how to display the classification
results returned from this task in the `ProbabilitiesAdapter` class of the
[code example](https://github.com/googlesamples/mediapipe/blob/main/examples/audio_classifier/android/app/src/main/java/com/google/mediapipe/examples/audioclassifier/fragment/ProbabilitiesAdapter.kt).






Send feedback