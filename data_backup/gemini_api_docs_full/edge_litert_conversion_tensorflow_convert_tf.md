--- source: https://ai.google.dev/edge/litert/conversion/tensorflow/convert_tf ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [LiteRT](https://developers.google.com/edge/litert)

Send feedback

# Convert TensorFlow models Stay organized with collections Save and categorize content based on your preferences.



This page describes how to convert a TensorFlow model to a LiteRT model (an
optimized [FlatBuffer](https://google.github.io/flatbuffers/) format identified
by the `.tflite` file extension) using the LiteRT converter.

**Note:** This guide assumes you've both [installed TensorFlow
2.x](https://www.tensorflow.org/install/pip#tensorflow-2-packages-are-available)
and trained models in TensorFlow 2.x. If your model is trained in TensorFlow
1.x, considering [migrating to TensorFlow
2.x](https://www.tensorflow.org/guide/migrate/tflite). To identify the installed
TensorFlow version, run `print(tf.__version__)`.

## Conversion workflow

The diagram below illustrations the high-level workflow for converting your
model:

![TFLite converter workflow](https://developers.google.com/edge/litert/images/convert/convert.png)

**Figure 1.** Converter workflow.

You can convert your model using one of the following options:

1. [Python API](#python_api) (***recommended***): This allows you to integrate
   the conversion into your development pipeline, apply optimizations, add
   metadata and many other tasks that simplify the conversion process.
2. [Command line](#cmdline): This only supports basic model conversion.

**Note:** In case you encounter any issues during model conversion, create a [GitHub
issue](https://github.com/tensorflow/tensorflow/issues/new?template=60-tflite-converter-issue.md).

## Python API

*Helper code: To learn more about the LiteRT converter API, run
`print(help(tf.lite.TFLiteConverter))`.*

Convert a TensorFlow model using
[`tf.lite.TFLiteConverter`](https://developers.google.com/edge/api/tflite/python/tf/lite/TFLiteConverter). A
TensorFlow model is stored using the SavedModel format and is generated either
using the high-level `tf.keras.*` APIs (a Keras model) or the low-level `tf.*`
APIs (from which you generate concrete functions). As a result, you have the
following three options (examples are in the next few sections):

* [`tf.lite.TFLiteConverter.from_saved_model()`](https://developers.google.com/edge/api/tflite/python/tf/lite/TFLiteConverter#from_saved_model)
  (**recommended**): Converts a
  [SavedModel](https://www.tensorflow.org/guide/saved_model).
* [`tf.lite.TFLiteConverter.from_keras_model()`](https://developers.google.com/edge/api/tflite/python/tf/lite/TFLiteConverter#from_keras_model):
  Converts a [Keras](https://www.tensorflow.org/guide/keras/overview) model.
* [`tf.lite.TFLiteConverter.from_concrete_functions()`](https://developers.google.com/edge/api/tflite/python/tf/lite/TFLiteConverter#from_concrete_functions):
  Converts [concrete
  functions](https://www.tensorflow.org/guide/intro_to_graphs).

### Convert a SavedModel (recommended)

The following example shows how to convert a
[SavedModel](https://www.tensorflow.org/guide/saved_model) into a TensorFlow
Lite model.

```
import tensorflow as tf

# Convert the model
converter = tf.lite.TFLiteConverter.from_saved_model(saved_model_dir) # path to the SavedModel directory
tflite_model = converter.convert()

# Save the model.
with open('model.tflite', 'wb') as f:
  f.write(tflite_model)
```

### Convert a Keras model

The following example shows how to convert a
[Keras](https://www.tensorflow.org/guide/keras/overview) model into a TensorFlow
Lite model.

```
import tensorflow as tf

# Create a model using high-level tf.keras.* APIs
model = tf.keras.models.Sequential([
    tf.keras.layers.Dense(units=1, input_shape=[1]),
    tf.keras.layers.Dense(units=16, activation='relu'),
    tf.keras.layers.Dense(units=1)
])
model.compile(optimizer='sgd', loss='mean_squared_error') # compile the model
model.fit(x=[-1, 0, 1], y=[-3, -1, 1], epochs=5) # train the model
# (to generate a SavedModel) tf.saved_model.save(model, "saved_model_keras_dir")

# Convert the model.
converter = tf.lite.TFLiteConverter.from_keras_model(model)
tflite_model = converter.convert()

# Save the model.
with open('model.tflite', 'wb') as f:
  f.write(tflite_model)
```

### Convert concrete functions

The following example shows how to convert [concrete
functions](https://www.tensorflow.org/guide/intro_to_graphs) into a LiteRT
model.

```
import tensorflow as tf

# Create a model using low-level tf.* APIs
class Squared(tf.Module):
  @tf.function(input_signature=[tf.TensorSpec(shape=[None], dtype=tf.float32)])
  def __call__(self, x):
    return tf.square(x)
model = Squared()
# (ro run your model) result = Squared(5.0) # This prints "25.0"
# (to generate a SavedModel) tf.saved_model.save(model, "saved_model_tf_dir")
concrete_func = model.__call__.get_concrete_function()

# Convert the model.

converter = tf.lite.TFLiteConverter.from_concrete_functions([concrete_func],
                                                            model)
tflite_model = converter.convert()

# Save the model.
with open('model.tflite', 'wb') as f:
  f.write(tflite_model)
```

### Other features

* Apply [optimizations](https://developers.google.com/edge/litert/conversion/tensorflow/quantization/model_optimization). A common optimization used is
  [post training quantization](https://developers.google.com/edge/litert/conversion/tensorflow/quantization/post_training_quantization), which can
  further reduce your model latency and size with minimal loss in accuracy.
* Add [metadata](https://developers.google.com/edge/litert/conversion/tensorflow/metadata), which makes it easier to create platform
  specific wrapper code when deploying models on devices.

### Conversion errors

The following are common conversion errors and their solutions:

* Error: `Some ops are not supported by the native TFLite runtime, you can
  enable TF kernels fallback using TF Select.`

  Solution: The error occurs as your model has TF ops that don't have a
  corresponding TFLite implementation. You can resolve this by [using the TF
  op in the TFLite model](https://developers.google.com/edge/litert/conversion/tensorflow/ops_select) (recommended). If you want to generate
  a model with TFLite ops only, you can either add a request for the missing
  TFLite op in [GitHub issue #21526](https://github.com/tensorflow/tensorflow/issues/21526) (leave a
  comment if your request hasn’t already been mentioned) or [create the TFLite
  op](https://developers.google.com/edge/litert/conversion/tensorflow/ops_custom#create_and_register_the_operator) yourself.
* Error: `.. is neither a custom op nor a flex op`

  Solution: If this TF op is:

  + Supported in TF: The error occurs because the TF op is missing from the
    [allowlist](https://developers.google.com/edge/litert/conversion/tensorflow/op_select_allowlist) (an exhaustive list of TF ops supported
    by TFLite). You can resolve this as follows:
  1. [Add missing ops to the
     allowlist](https://developers.google.com/edge/litert/conversion/tensorflow/op_select_allowlist#add_tensorflow_core_operators_to_the_allowed_list).
     2. [Convert the TF model to a TFLite model and run
     inference](https://developers.google.com/edge/litert/conversion/tensorflow/ops_select).
  + Unsupported in TF: The error occurs because TFLite is unaware of the
    custom TF operator defined by you. You can resolve this as follows:
  1. [Create the TF op](https://www.tensorflow.org/guide/create_op).
  2. [Convert the TF model to a TFLite
     model](https://developers.google.com/edge/litert/conversion/tensorflow/op_select_allowlist#users_defined_operators).
  3. [Create the TFLite op](https://developers.google.com/edge/litert/conversion/tensorflow/ops_custom#create_and_register_the_operator)
     and run inference by linking it to the TFLite runtime.

## Command Line Tool

**Note:** It is highly recommended that you use the [Python API](#python_api) listed
above instead, if possible.

If you've [installed TensorFlow 2.x from
pip](https://www.tensorflow.org/install/pip), use the `tflite_convert` command.
To view all the available flags, use the following command:

```
$ tflite_convert --help

`--output_file`. Type: string. Full path of the output file.
`--saved_model_dir`. Type: string. Full path to the SavedModel directory.
`--keras_model_file`. Type: string. Full path to the Keras H5 model file.
`--enable_v1_converter`. Type: bool. (default False) Enables the converter and flags used in TF 1.x instead of TF 2.x.

You are required to provide the `--output_file` flag and either the `--saved_model_dir` or `--keras_model_file` flag.
```

If you have the [TensorFlow 2.x
source](https://www.tensorflow.org/install/source) donwloaded and want to run
the converter from that source without building and installing the package, you
can replace '`tflite_convert`' with '`bazel run
tensorflow/lite/python:tflite_convert --`' in the command.

### Converting a SavedModel

```
tflite_convert \
  --saved_model_dir=/tmp/mobilenet_saved_model \
  --output_file=/tmp/mobilenet.tflite
```

### Converting a Keras H5 model

```
tflite_convert \
  --keras_model_file=/tmp/mobilenet_keras_model.h5 \
  --output_file=/tmp/mobilenet.tflite
```






Send feedback