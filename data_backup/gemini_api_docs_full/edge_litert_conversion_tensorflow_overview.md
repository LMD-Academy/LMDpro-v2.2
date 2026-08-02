--- source: https://ai.google.dev/edge/litert/conversion/tensorflow/overview ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [LiteRT](https://developers.google.com/edge/litert)

Send feedback

# TensorFlow Model conversion overview Stay organized with collections Save and categorize content based on your preferences.



The machine learning (ML) models you use with LiteRT are originally built and
trained using TensorFlow core libraries and tools. Once you've built a model
with TensorFlow core, you can convert it to a smaller, more efficient ML model
format called a LiteRT model. This section provides guidance for converting your
TensorFlow models to the LiteRT model format.

**Note:** If you don't have a model to convert yet, see the [Models
overview](https://developers.google.com/edge/litert/conversion/tensorflow/pretrained_models) page for guidance on choosing or building models.

## Conversion workflow

Converting TensorFlow models to LiteRT format can take a few paths depending on
the content of your ML model. As the first step of that process, you should
evaluate your model to determine if it can be directly converted. This
evaluation determines if the content of the model is supported by the standard
LiteRT runtime environments based on the TensorFlow operations it uses. If your
model uses operations outside of the supported set, you have the option to
refactor your model or use advanced conversion techniques.

The diagram below shows the high level steps in converting a model.

![TFLite conversion workflow](https://developers.google.com/edge/litert/images/convert/convert_workflow_diag.png)

**Figure 1.** LiteRT conversion workflow.

The following sections outline the process of evaluating and converting models
for use with LiteRT.

### Input model formats

You can use the converter with the following input model formats:

* [SavedModel](https://www.tensorflow.org/guide/saved_model)
  (***recommended***): A TensorFlow model saved as a set of files on disk.
* [Keras model](https://www.tensorflow.org/guide/keras/overview): A model
  created using the high level Keras API.
* [Keras H5
  format](https://www.tensorflow.org/guide/keras/save_and_serialize#keras_h5_format):
  A light-weight alternative to SavedModel format supported by Keras API.
* [Models built from concrete
  functions](https://www.tensorflow.org/guide/intro_to_graphs): A model
  created using the low level TensorFlow API.

You can save both the Keras and concrete function models as a SavedModel and
convert using the recommeded path.

**Note:** To avoid errors during inference, include signatures when exporting to the
SavedModel format. The TensorFlow converter supports converting TensorFlow
model's input/output specifications to LiteRT models. See the topic on [adding
signatures](https://developers.google.com/edge/litert/conversion/tensorflow/signatures).

If you have a Jax model, you can use the `TFLiteConverter.experimental_from_jax`
API to convert it to the LiteRT format. Note that this API is subject to change
while in experimental mode.

### Conversion evaluation

Evaluating your model is an important step before attempting to convert it. When
evaluating, you want to determine if the contents of your model is compatible
with the LiteRT format. You should also determine if your model is a good fit
for use on mobile and edge devices in terms of the size of data the model uses,
its hardware processing requirements, and the model's overall size and
complexity.

For many models, the converter should work out of the box. However, LiteRT
builtin operator library supports a subset of TensorFlow core operators, which
means some models may need additional steps before converting to LiteRT.
Additionally some operations that are supported by LiteRT have restricted usage
requirements for performance reasons. See the [operator
compatibility](https://developers.google.com/edge/litert/conversion/tensorflow/ops_compatibility) guide to determine if your model needs to be
refactored for conversion.

**Key Point:** Most models can be directly converted to LiteRT format. Some models
may require refactoring or use of advanced conversion techniques to make them
compatible.

### Model conversion

The LiteRT converter takes a TensorFlow model and generates a LiteRT model (an
optimized [FlatBuffer](https://google.github.io/flatbuffers/) format identified
by the `.tflite` file extension). You can load a SavedModel or directly convert
a model you create in code.

The converter takes 3 main flags (or options) that customize the conversion for
your model:

1. [Compatibility flags](https://developers.google.com/edge/litert/conversion/tensorflow/ops_compatibility) allow you to specify whether the
   conversion should allow custom operators.
2. [Optimization flags](https://developers.google.com/edge/litert/conversion/tensorflow/quantization/model_optimization) allow you to specify the type of
   optimization to apply during conversion. The most commonly used optimization
   technique is [post-training quanitization](https://developers.google.com/edge/litert/conversion/tensorflow/quantization/post_training_quant).
3. [Metadata flags](https://developers.google.com/edge/litert/conversion/tensorflow/metadata) allow you to add metadata to the converted
   model which makes it easier to create platform specific wrapper code when
   deploying models on devices.

You can convert your model using the [Python API](https://developers.google.com/edge/litert/conversion/tensorflow/convert_tf#python_api) or
the [Command line](https://developers.google.com/edge/litert/conversion/tensorflow/convert_tf#cmdline) tool. See the [Convert TF
model](https://developers.google.com/edge/litert/conversion/tensorflow/convert_tf) guide for step by step instructions on running the
converter on your model.

Typically you would convert your model for the standard LiteRT [runtime
environment](https://developers.google.com/edge/litert/android/index#runtime) or the [Google Play services runtime
environment](https://developers.google.com/edge/litert/android/play_services) for LiteRT (Beta). Some advanced use
cases require customization of model runtime environment, which require
additional steps in the conversion proceess. See the [advanced runtime
environment](https://developers.google.com/edge/litert/android#adv_runtime) section of the Android overview for more
guidance.

## Advanced conversion

If you run into [errors](https://developers.google.com/edge/litert/conversion/tensorflow/convert_tf#conversion_errors) while running the
converter on your model, it's most likely that you have an operator
compatibility issue. Not all TensorFlow operations are supported by TensorFlow
Lite. You can work around these issues by refactoring your model, or by using
advanced conversion options that allow you to create a modified LiteRT format
model and a custom runtime environment for that model.

* See the [Model compatibility overview](https://developers.google.com/edge/litert/conversion/tensorflow/ops_compatibility) for more
  information on TensorFlow and LiteRT model compatibility considerations.
* Topics under the Model compatibility overview cover advanced techniques for
  refactoring your model, such as the [Select operators](https://developers.google.com/edge/litert/conversion/tensorflow/ops_select) guide.
* For full list of operations and limitations see [LiteRT Ops
  page](https://www.tensorflow.org/mlir/tfl_ops).

## Next steps

* See the [convert TF models](https://developers.google.com/edge/litert/conversion/tensorflow/convert_tf) guide to quickly get started on
  converting your model.
* See the [optimization overview](https://developers.google.com/edge/litert/conversion/tensorflow/quantization/model_optimization) for guidance on how to
  optimize your converted model using techniques like [post-training
  quanitization](https://developers.google.com/edge/litert/conversion/tensorflow/quantization/post_training_quantization).
* See the [Adding metadata overview](https://developers.google.com/edge/litert/conversion/tensorflow/metadata) to learn how to add metadata
  to your models. Metadata provides other uses a description of your model as
  well as information that can be leveraged by code generators.






Send feedback