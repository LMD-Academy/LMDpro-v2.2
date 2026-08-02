--- source: https://ai.google.dev/edge/litert/conversion/jax/overview ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [LiteRT](https://developers.google.com/edge/litert)

Send feedback

# LiteRT JAX Support Overview Stay organized with collections Save and categorize content based on your preferences.



LiteRT provides a path to convert JAX models for on-device inference by
leveraging the TensorFlow ecosystem. The process involves a
two-step conversion: first from JAX to TensorFlow SavedModel, and then from
SavedModel to the .tflite format.

## Conversion Process

1. **JAX to TensorFlow SavedModel using `jax2tf`:** The first step is to
   convert your JAX model into the TensorFlow SavedModel format. This is done
   using the `jax2tf` tool, which is an experimental JAX experimental feature.
   `jax2tf` allows you to convert JAX functions into TensorFlow graphs.

   For detailed instructions and examples on how to use `jax2tf`, please refer
   to the official `jax2tf` documentation:
   <https://github.com/jax-ml/jax/blob/main/jax/experimental/jax2tf/README.md>

   This process will typically involve wrapping your JAX model's prediction
   function with `jax2tf.convert` and then saving it using TensorFlow's
   `tf.saved_model.save`.
2. **TensorFlow SavedModel to TFLite:** Once you have your model in the
   TensorFlow SavedModel format, you can convert it to the TFLite format using
   the standard TensorFlow Lite converter. This process optimizes the model for
   on-device execution, reducing its size and improving performance.

   The detailed instructions for converting a TensorFlow SavedModel to TFLite
   can be found in the [TensorFlow Model conversion
   guide](https://developers.google.com/edge/litert/conversion/tensorflow/overview).

   This guide covers various options and best practices for the conversion
   process, including quantization and other optimizations.

By following these two steps, you can take your models developed in JAX and
deploy them efficiently on edge devices using the LiteRT runtime.






Send feedback