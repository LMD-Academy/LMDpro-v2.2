--- source: https://ai.google.dev/edge/litert/conversion/tensorflow/pretrained_models ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [LiteRT](https://developers.google.com/edge/litert)

Send feedback

# Pre-trained TensorFlow and Keras models for LiteRT Stay organized with collections Save and categorize content based on your preferences.



There are a variety of already trained, open source models you can use
immediately with LiteRT to accomplish many machine learning tasks. Using
pre-trained LiteRT models lets you add machine learning functionality to your
mobile and edge device application quickly, without having to build and train a
model. This guide helps you find and decide on trained models for use with
LiteRT.

You can start browsing a large set of models on [Kaggle
Models](https://www.kaggle.com/models?framework=tfLite).

**Important:** Kaggle Models lists both regular TensorFlow models and TensorFlow
Lite format models. These model formats are not interchangeable. TensorFlow
models can be converted into LiteRT models, but that process is not reversible.

## Find a model for your application

Finding an existing LiteRT model for your use case can be tricky depending on
what you are trying to accomplish. Here are a few recommended ways to discover
models for use with LiteRT:

**By example:** The fastest way to find and start using models with TensorFlow
Lite is to browse the [LiteRT
Examples](https://github.com/tensorflow/examples/tree/master/lite/examples)
section to find models that perform a task which is similar to your use case.
This short catalog of examples provides models for common use cases with
explanations of the models and sample code to get you started running and using
them.

**By data input type:** Aside from looking at examples similar to your use case,
another way to discover models for your own use is to consider the type of data
you want to process, such as audio, text, images, or video data. Machine
learning models are frequently designed for use with one of these types of data,
so looking for models that handle the data type you want to use can help you
narrow down what models to consider.

**Note:** Processing video with machine learning models can frequently be
accomplished with models that are designed for processing single images,
depending on how fast and how many inferences you need to perform for your use
case. If you intend to use video for your use case, consider using single-frame
video sampling with a model built for fast processing of individual images.

The following lists links to LiteRT models on [Kaggle
Models](https://www.kaggle.com/models?framework=tfLite) for common use cases:

* [Image classification](https://www.kaggle.com/models?framework=tfLite&task=16686)
  models
* [Object detection](https://www.kaggle.com/models?query=image+object+detection&framework=tfLite)
  models
* [Text classification](https://www.kaggle.com/models?framework=tfLite&task=16691)
  models
* [Text embedding](https://www.kaggle.com/models?framework=tfLite&query=text-embedding)
  models
* [Audio speech synthesis](https://www.kaggle.com/models?framework=tfLite&query=audio-speech-synthesis)
  models
* [Audio embedding](https://www.kaggle.com/models?framework=tfLite&query=audio-embedding)
  models

## Choose between similar models

If your application follows a common use case such as image classification or
object detection, you may find yourself deciding between multiple TensorFlow
Lite models, with varying binary size, data input size, inference speed, and
prediction accuracy ratings. When deciding between a number of models, you
should narrow your options based first on your most limiting constraint: size of
model, size of data, inference speed, or accuracy.

**Key Point:** Generally, when choosing between similar models, pick the smallest
model to allow for the broadest device compatibility and fast inference times.

If you are not sure what your most limiting constraint is, assume it is the size
of the model and pick the smallest model available. Picking a small model gives
you the most flexibility in terms of the devices where you can successfully
deploy and run the model. Smaller models also typically produce faster
inferences, and speedier predictions generally create better end-user
experiences. Smaller models typically have lower accuracy rates, so you may need
to pick larger models if prediction accuracy is your primary concern.

## Sources for models

Use the [LiteRT
Examples](https://github.com/tensorflow/examples/tree/master/lite/examples)
section and [Kaggle Models](https://www.kaggle.com/models?framework=tfLite) as
your first destinations for finding and selecting models for use with TensorFlow
Lite. These sources generally have up to date, curated models for use with
LiteRT, and frequently include sample code to accelerate your development
process.

### TensorFlow models

It is possible to [convert](https://developers.google.com/edge/litert/conversion/tensorflow/overview) regular TensorFlow models to TensorFlow
Lite format. For more information about converting models, see the [TensorFlow
Lite Converter](https://developers.google.com/edge/litert/conversion/tensorflow/overview) documentation. You can find TensorFlow models on
[Kaggle Models](https://www.kaggle.com/models) and in the [TensorFlow Model
Garden](https://github.com/tensorflow/models).






Send feedback