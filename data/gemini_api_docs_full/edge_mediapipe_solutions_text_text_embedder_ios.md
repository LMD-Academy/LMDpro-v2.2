# Text embedding guide for iOS Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/mediapipe/solutions/text/text_embedder/ios))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

The Text Embedder task lets you create a numeric representation of text data to
capture its semantic meaning. These instructions show you how to use the
Text Embedder in iOS apps.

You can see this task in action by viewing this [Web
demo](https://google-ai-edge.github.io/mediapipe-samples-web/#/text/text_embedder). For more
information about the capabilities, models, and configuration options of this
task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/text/text_embedder/index).

## Code example

The example code for Text Embedder provides a basic implementation of an app for
iOS that integrates this task. The example evaluates the semantic similarities
between two pieces of text, and requires either a physical iOS device or an iOS
simulator.

You can use the app as a starting point for your own iOS app, or refer to it
when modifying an existing app. You can refer to the Text Embedder example code
on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/text_embedder/ios).

### Download the code

The following instructions show you how to create a local copy of the example
code using the [git](https://git-scm.com) command line tool.

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

To download the example code:

1. Clone the git repository using the following command:

   ```
   git clone https://github.com/google-ai-edge/mediapipe-samples
   ```
2. Optionally, configure your git instance to use sparse checkout, so you have
   only the files for the Text Embedder example app:

   ```
   cd mediapipe-samples
   git sparse-checkout init --cone
   git sparse-checkout set examples/text_embedder/ios/
   ```

After creating a local version of the example code, you can install the
MediaPipe task library, open the project using Xcode and run the app. For
instructions, see the [Setup Guide for
iOS](/edge/mediapipe/solutions/setup_ios).

### Key components

The following files contain the crucial code for the Text Embedder example
application:

* [TextEmbedderService.swift](https://github.com/google-ai-edge/mediapipe-samples/blob/main/examples/text_embedder/ios/TextEmbedder/Services/TextEmbedderService.swift):
  Initializes the text embedder and runs inference on the input data.
* [ViewController.swift](https://github.com/google-ai-edge/mediapipe-samples/blob/main/examples/text_embedder/ios/TextEmbedder/ViewController.swift):
  Implements the UI and formats the results.

## Setup

This section describes key steps for setting up your development environment and
code projects to use Text Embedder. For general information on setting up your
development environment for using MediaPipe tasks, including platform version
requirements, see the [Setup guide for
iOS](/edge/mediapipe/solutions/setup_ios).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Dependencies

Text Embedder uses the `MediaPipeTasksText` library, which must be installed
using CocoaPods. The library is compatible with both Swift and Objective-C apps
and does not require any additional language-specific setup.

For instructions to install CocoaPods on macOS, refer to the [CocoaPods
installation guide](https://guides.cocoapods.org/using/getting-started.html).
For instructions on how to create a `Podfile` with the necessary pods for your
app, refer to [Using
CocoaPods](https://guides.cocoapods.org/using/using-cocoapods.html).

Add the `MediaPipeTasksText` pod in the `Podfile` using the following code:

```
target 'MyTextEmbedderApp' do
  use_frameworks!
  pod 'MediaPipeTasksText'
end
```

If your app includes unit test targets, refer to the [Set Up Guide for
iOS](/mediapipe/solutions/setup_ios) for additional information on setting up
your `Podfile`.

**Note:** The following sections provide code examples in both Swift and
Objective-C. When applicable, the explanations refer to the Swift method names.

### Model

The MediaPipe Text Embedder task requires a trained model that is compatible
with this task. For more information about the available trained models for
Text Embedder, see the task overview [Models
section](https://developers.google.com/mediapipe/solutions/text/text_embedder/index#models).

Select and download a model, and add it to your project directory using Xcode.
For instructions on how to add files to your Xcode project, refer to [Managing
files and folders in your Xcode
project](https://developer.apple.com/documentation/xcode/managing-files-and-folders-in-your-xcode-project).

Use the `BaseOptions.modelAssetPath` property to specify the path to the model
in your app bundle. For a code example, see the next section.

## Create the task

You can create the Text Embedder task by calling one of its initializers. The
`TextEmbedder(options:)` initializer accepts values for the configuration
options.

If you don't need a Text Embedder initialized with customized configuration
options, you can use the `TextEmbedder(modelPath:)` initializer to create a
Text Embedder with the default options. For more information about configuration
options, see [Configuration Overview](#configuration).

The following code demonstrates how to build and configure this task.

### Swift

```
import MediaPipeTasksText

let modelPath = Bundle.main.path(forResource: "model",
                                      ofType: "tflite")

let options = TextEmbedderOptions()
options.baseOptions.modelAssetPath = modelPath
options.quantize = true

let textEmbedder = try TextEmbedder(options: options)
```

### Objective-C

```
@import MediaPipeTasksText;

NSString *modelPath = [[NSBundle mainBundle] pathForResource:@"model"
                                                      ofType:@"tflite"];

MPPTextEmbedderOptions *options = [[MPPTextEmbedderOptions alloc] init];
options.baseOptions.modelAssetPath = modelPath;
options.quantize = YES;

MPPTextEmbedder *textEmbedder =
      [[MPPTextEmbedder alloc] initWithOptions:options error:nil];
```

### Configuration options

This task has the following configuration options for iOS apps:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `l2_normalize` | Whether to normalize the returned feature vector with L2 norm. Use this option only if the model does not already contain a native L2\_NORMALIZATION TFLite Op. In most cases, this is already the case and L2 normalization is thus achieved through TFLite inference with no need for this option. | `Boolean` | `False` |
| `quantize` | Whether the returned embedding should be quantized to bytes via scalar quantization. Embeddings are implicitly assumed to be unit-norm and therefore any dimension is guaranteed to have a value in [-1.0, 1.0]. Use the l2\_normalize option if this is not the case. | `Boolean` | `False` |

## Run the task

To embed the input text and obtain its embedding vectors you can use the
`embed(text:)` method of `TextEmbedder`.

### Swift

```
let result = try textEmbedder.embed(text: text)
```

### Objective-C

```
MPPTextEmbedderResult *result = [textEmbedder embedText:text
                                                  error:nil];
```

**Note**: The task blocks the current thread until it finishes running inference
on the text. To avoid blocking the current thread, execute the processing in a
background thread using iOS
[Dispatch](https://developer.apple.com/documentation/dispatch) or
[NSOperation](https://developer.apple.com/documentation/foundation/nsoperation)
frameworks. If your app is created using Swift, you can also use [Swift
Concurrency](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/)
for background thread execution.

In the example code, the `embed(text:)` method is called in the
[TextEmbedderService.swift](https://github.com/google-ai-edge/mediapipe-samples/blob/main/examples/text_embedder/ios/TextEmbedder/Services/TextEmbedderService.swift)
file.

## Handle and display results

Upon running inference, the Text Embedder task returns a `TextEmbedderResult`
object that contains a list of embeddings (either floating point or
scalar-quantized) for the input text.

The following shows an example of the output data from this task:

```
TextEmbedderResult:
  Embedding #0 (sole embedding head):
    float_embedding: {0.2345f, 0.1234f, ..., 0.6789f}
    head_index: 0
```

You can compare the semantic similarity of two embeddings using the
`TextEmbedder.cosineSimilarity` method.

### Swift

```
let similarity = try TextEmbedder.cosineSimilarity(
  embedding1: result.embeddingResult.embeddings[0],
  embedding2: otherResult.embeddingResult.embeddings[0])
```

### Objective-C

```
NSNumber *similarity = [MPPTextEmbedder
      cosineSimilarityBetweenEmbedding1:result.embeddingResult.embeddings[0]
                          andEmbedding2:otherResult.embeddingResult.embeddings[0]
                                  error:nil];
```

In the example code, the `TextEmbedder.cosineSimilarity` method is called in the
[TextEmbedderService.swift](https://github.com/google-ai-edge/mediapipe-samples/blob/main/examples/text_embedder/ios/TextEmbedder/Services/TextEmbedderService.swift) file.

Send feedback
