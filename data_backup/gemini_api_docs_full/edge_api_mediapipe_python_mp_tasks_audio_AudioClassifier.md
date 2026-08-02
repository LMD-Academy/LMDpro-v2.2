--- source: https://ai.google.dev/edge/api/mediapipe/python/mp/tasks/audio/AudioClassifier ---

# mp.tasks.audio.AudioClassifier



[View source on GitHub](https://github.com/google/mediapipe/blob/master/mediapipe/tasks/python/audio/audio_classifier.py#L165-L456) |

Class that performs audio classification on audio data.

```
mp.tasks.audio.AudioClassifier(
    lib: mp.tasks.vision.drawing_styles.face_landmarker.serial_dispatcher.SerialDispatcher,
    handle: ctypes.c_void_p,
    dispatcher: mp.tasks.vision.drawing_styles.face_landmarker.async_result_dispatcher.AsyncResultDispatcher,
    async_callback: _C_TYPES_RESULT_CALLBACK
)
```



This API expects a TFLite model with mandatory TFLite Model Metadata that
contains the mandatory AudioProperties of the solo input audio tensor and the
optional (but recommended) category labels as AssociatedFiles with type
TENSOR\_AXIS\_LABELS per output classification tensor.

| Input tensor | |
| (kTfLiteFloat32) | |

* input audio buffer of size `[batch * samples]`.
* batch inference is not supported (`batch` is required to be 1).
* for multi-channel models, the channels must be interleaved.

At least one output tensor with:
(kTfLiteFloat32)

* `[1 x N]` array with `N` represents the number of categories.
* optional (but recommended) category labels as AssociatedFiles with type
  TENSOR\_AXIS\_LABELS, containing one label per line. The first such
  AssociatedFile (if any) is used to fill the `category_name` field of the
  results. The `display_name` field is filled from the AssociatedFile (if
  any) whose locale matches the `display_names_locale` field of the
  `AudioClassifierOptions` used at creation time ("en" by default, i.e.
  English). If none of these are available, only the `index` field of the
  results will be filled.

| Args | |

|  |  |
| --- | --- |
| `lib` | The serial dispatcher for the audio classifier task. |
| `handle` | The handle to the audio classifier task. |
| `dispatcher` | The async result dispatcher for the audio classifier task. |
| `async_callback` | The C callback for processing audio stream data. |

## Methods

### `classify`

[View source](https://github.com/google/mediapipe/blob/master/mediapipe/tasks/python/audio/audio_classifier.py#L297-L358)

```
classify(
    audio_clip: mp.tasks.components.containers.AudioData
) -> list[AudioClassifierResult]
```

Performs audio classification on the provided audio clip.

The audio clip is represented as a MediaPipe AudioData. The method accepts
audio clips with various length and audio sample rate. It's required to
provide the corresponding audio sample rate within the `AudioData` object.

The input audio clip may be longer than what the model is able to process
in a single inference. When this occurs, the input audio clip is split into
multiple chunks starting at different timestamps. For this reason, this
function returns a vector of ClassificationResult objects, each associated
ith a timestamp corresponding to the start (in milliseconds) of the chunk
data that was classified, e.g:

ClassificationResult #0 (first chunk of data):
timestamp\_ms: 0 (starts at 0ms)
classifications #0 (single head model):
category #0:
category\_name: "Speech"
score: 0.6
category #1:
category\_name: "Music"
score: 0.2
ClassificationResult #1 (second chunk of data):
timestamp\_ms: 800 (starts at 800ms)
classifications #0 (single head model):
category #0:
category\_name: "Speech"
score: 0.5
category #1:
category\_name: "Silence"
score: 0.1

| Args | |

|  |  |
| --- | --- |
| `audio_clip` | MediaPipe AudioData. |

| Returns | |
| An `AudioClassifierResult` object that contains a list of classification result objects, each associated with a timestamp corresponding to the start (in milliseconds) of the chunk data that was classified. | |

| Raises | |

|  |  |
| --- | --- |
| `ValueError` | If any of the input arguments is invalid, such as the sample rate is not provided in the `AudioData` object. |
| `RuntimeError` | If audio classification failed to run. |

### `classify_async`

[View source](https://github.com/google/mediapipe/blob/master/mediapipe/tasks/python/audio/audio_classifier.py#L360-L399)

```
classify_async(
    audio_block: mp.tasks.components.containers.AudioData,
    timestamp_ms: int
) -> None
```

Sends audio data (a block in a continuous audio stream) to perform audio classification.

Only use this method when the AudioClassifier is created with the audio
stream running mode. The input timestamps should be monotonically increasing
for adjacent calls of this method. This method will return immediately after
the input audio data is accepted. The results will be available via the
`result_callback` provided in the `AudioClassifierOptions`. The
`classify_async` method is designed to process auido stream data such as
microphone input.

The input audio data may be longer than what the model is able to process
in a single inference. When this occurs, the input audio block is split
into multiple chunks. For this reason, the callback may be called multiple
times (once per chunk) for each call to this function.

The `result_callback` provides:

* An `AudioClassifierResult` object that contains a list of
  classifications.
* The input timestamp in milliseconds.

| Args | |

|  |  |
| --- | --- |
| `audio_block` | MediaPipe AudioData. |
| `timestamp_ms` | The timestamp of the input audio data in milliseconds. |

| Raises | |

|  |  |
| --- | --- |
| `ValueError` | If any of the followings: |

1) The sample rate is not provided in the `AudioData` object or the
provided sample rate is inconsistent with the previously received.
2) The current input timestamp is smaller than what the audio
classifier has already processed.

### `close`

[View source](https://github.com/google/mediapipe/blob/master/mediapipe/tasks/python/audio/audio_classifier.py#L429-L435)

```
close()
```

Shuts down the MediaPipe task instance.

### `create_audio_record`

[View source](https://github.com/google/mediapipe/blob/master/mediapipe/tasks/python/audio/audio_classifier.py#L401-L427)

```
create_audio_record(
    num_channels: int, sample_rate: int, required_input_buffer_size: int
) -> audio_record.AudioRecord
```

Creates an AudioRecord instance to record audio stream.

The returned AudioRecord instance is initialized and client needs to call
the appropriate method to start recording.

Note that MediaPipe Audio tasks will up/down sample automatically to fit the
sample rate required by the model. The default sample rate of the MediaPipe
pretrained audio model, Yamnet is 16kHz.

| Args | |

|  |  |
| --- | --- |
| `num_channels` | The number of audio channels. |
| `sample_rate` | The audio sample rate. |
| `required_input_buffer_size` | The required input buffer size in number of float elements. |

| Returns | |
| An AudioRecord instance. | |

| Raises | |

|  |  |
| --- | --- |
| `ValueError` | If there's a problem creating the AudioRecord instance. |

### `create_from_model_path`

[View source](https://github.com/google/mediapipe/blob/master/mediapipe/tasks/python/audio/audio_classifier.py#L215-L238)

```
@classmethod
create_from_model_path(
    model_path: str
) -> 'AudioClassifier'
```

Creates an `AudioClassifier` object from a TensorFlow Lite model and the default `AudioClassifierOptions`.

Note that the created `AudioClassifier` instance is in audio clips mode, for
classifying on independent audio clips.

| Args | |

|  |  |
| --- | --- |
| `model_path` | Path to the model. |

| Returns | |
| `AudioClassifier` object that's created from the model file and the default `AudioClassifierOptions`. | |

| Raises | |

|  |  |
| --- | --- |
| `ValueError` | If failed to create `AudioClassifier` object from the provided file such as invalid file path. |
| `RuntimeError` | If other types of error occurred. |

### `create_from_options`

[View source](https://github.com/google/mediapipe/blob/master/mediapipe/tasks/python/audio/audio_classifier.py#L240-L295)

```
@classmethod
create_from_options(
    options: mp.tasks.audio.AudioClassifierOptions
) -> 'AudioClassifier'
```

Creates the `AudioClassifier` object from audio classifier options.

| Args | |

|  |  |
| --- | --- |
| `options` | Options for the audio classifier task. |

| Returns | |
| `AudioClassifier` object that's created from `options`. | |

| Raises | |

|  |  |
| --- | --- |
| `ValueError` | If failed to create `AudioClassifier` object from `AudioClassifierOptions` such as missing the model. |
| `RuntimeError` | If other types of error occurred. |

### `__enter__`

[View source](https://github.com/google/mediapipe/blob/master/mediapipe/tasks/python/audio/audio_classifier.py#L437-L439)

```
__enter__()
```

Returns `self` upon entering the runtime context.

### `__exit__`

[View source](https://github.com/google/mediapipe/blob/master/mediapipe/tasks/python/audio/audio_classifier.py#L441-L453)

```
__exit__(
    exc_type, exc_value, traceback
)
```

Shuts down the MediaPipe task instance on exit of the context manager.

| Args | |

|  |  |
| --- | --- |
| `exc_type` | The exception type that caused the exit. |
| `exc_value` | The exception value that caused the exit. |
| `traceback` | The exception traceback that caused the exit. |

| Raises | |

|  |  |
| --- | --- |
| `RuntimeError` | If the MediaPipe TextClassifier task failed to close. |