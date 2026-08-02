--- source: https://ai.google.dev/edge/mediapipe/solutions/text/text_embedder/python ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [MediaPipe](https://developers.google.com/edge/mediapipe/solutions/guide)

Send feedback

# Text embedding guide for Python Stay organized with collections Save and categorize content based on your preferences.



The MediaPipe Text Embedder task lets you create a numeric representation of text data to
capture its semantic meaning. These instructions show you how to use the
Text Embedder with Python.

For more information about the capabilities, models, and configuration options
of this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/text/text_embedder/index).

## Code example

The example code for Text Embedder provides a complete implementation of this
task in Python for your reference. This code helps you test this task and get
started on building your own text embedder. You can view, run, and edit the
Text Embedder [example
code](https://colab.sandbox.google.com/github/googlesamples/mediapipe/blob/main/examples/text_embedder/python/text_embedder.ipynb)
using just your web browser with Google Colab. You can view the source code for
this example on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/text_embedder/python).

## Setup

This section describes key steps for setting up your development environment and
code projects specifically to use Text Embedder. For general information on
setting up your development environment for using MediaPipe tasks, including
platform version requirements, see the [Setup guide for
Python](/mediapipe/solutions/setup_python).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Packages

Text Embedder uses the mediapipe pip package. You can install the dependency
with the following:

```
$ python -m pip install mediapipe
```

### Imports

Import the following classes to access the Text Embedder task functions:

```
import mediapipe as mp
from mediapipe.tasks import python
from mediapipe.tasks.python import text
```

### Model

The MediaPipe Text Embedder task requires a trained model that is compatible with this
task. For more information on available trained models for Text Embedder, see
the task overview [Models section](https://developers.google.com/edge/mediapipe/solutions/text/text_embedder/index#models).

Select and download a model, and then store it in a local directory. You can use
the recommended
[UniversalSentenceEncoder](https://storage.googleapis.com/mediapipe-tasks/text_embedder/universal_sentence_encoder.tflite)
model.

```
model_path = '/absolute/path/to/universal_sentence_encoder.tflite'
```

Specify the path of the model within the `model_asset_path` parameter, as shown below:

```
base_options = BaseOptions(model_asset_path=model_path)
```

## Create the task

The MediaPipe Text Embedder task uses the `create_from_options` function to set up the
task. The `create_from_options` function accepts values for configuration
options to set the embedder options. You can also initialize the task using the
`create_from_model_path` factory function. The `create_from_model_path` function
accepts a relative or absolute path to the trained model file. For more
information on configuration options, see
[Configuration options](#configuration_options).

The following code demonstrates how to build and configure this task.

```
import mediapipe as mp

BaseOptions = mp.tasks.BaseOptions
TextEmbedder = mp.tasks.text.TextEmbedder
TextEmbedderOptions = mp.tasks.text.TextEmbedderOptions

# For creating a text embedder instance:
options = TextEmbedderOptions(
    base_options=BaseOptions(model_asset_path=model_path),
    quantize=True)
text_embedder = TextEmbedder.create_from_options(options)
```

### Configuration options

This task has the following configuration options for Python applications:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `l2_normalize` | Whether to normalize the returned feature vector with L2 norm. Use this option only if the model does not already contain a native L2\_NORMALIZATION TFLite Op. In most cases, this is already the case and L2 normalization is thus achieved through TFLite inference with no need for this option. | `Boolean` | `False` |
| `quantize` | Whether the returned embedding should be quantized to bytes via scalar quantization. Embeddings are implicitly assumed to be unit-norm and therefore any dimension is guaranteed to have a value in [-1.0, 1.0]. Use the l2\_normalize option if this is not the case. | `Boolean` | `False` |

## Prepare data

Text Embedder works with text (`str`) data. The task handles the data input
preprocessing, including tokenization and tensor preprocessing.

All preprocessing is handled within the `embed` function. There is no need
for additional preprocessing of the input text beforehand.

```
input_text = "The input text to be embedded."
```

## Run the task

The Text Embedder uses the `embed` function to trigger inferences. For text
embedding, this means returning the embedding vectors for the input text.

The following code demonstrates how execute the processing with the task model.

```
# Perform text embedding on the provided input text.
embedding_result = text_embedder.embed(input_text)
```

## Handle and display results

The Text Embedder outputs a `TextEmbedderResult` that contains a list of
embeddings (either floating-point or scalar-quantized) for the input text.

The following shows an example of the output data from this task:

```
TextEmbedderResult:
  Embedding #0 (sole embedding head):
    float_embedding: {0.2345f, 0.1234f, ..., 0.6789f}
    head_index: 0
```

You can compare the semantic similarity of two embeddings using the
`TextEmbedder.cosine_similarity` function. See the following code for an
example.

```
# Compute cosine similarity.
similarity = TextEmbedder.cosine_similarity(
  embedding_result.embeddings[0],
  other_embedding_result.embeddings[0])
```






Send feedback