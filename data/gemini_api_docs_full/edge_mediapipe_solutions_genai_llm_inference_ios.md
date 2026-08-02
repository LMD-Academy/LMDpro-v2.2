# LLM Inference guide for iOS Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/mediapipe/solutions/genai/llm_inference/ios))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

> **⚠️ Important: API Update**
>
> The MediaPipe LLM Inference API is in **maintenance-only mode**. We recommend migrating your iOS projects to **[LiteRT-LM Swift API](/edge/litert-lm/swift)**.

**Note:** Use of the MediaPipe LLM Inference API is subject to the [Generative AI Prohibited
Use Policy](https://policies.google.com/terms/generative-ai/use-policy).

The LLM Inference API lets you run large language models (LLMs) completely on-device
for iOS applications, which you can use to perform a wide range of tasks, such
as generating text, retrieving information in natural language form, and
summarizing documents. The task provides built-in support for multiple
text-to-text large language models, so you can apply the latest on-device
generative AI models to your iOS apps.

To quickly add the LLM Inference API to your iOS application, follow the
[Quickstart](#quickstart). For a basic example of an iOS application running the
LLM Inference API, see the [sample application](#sample-application). For a more
in-depth understanding of how the LLM Inference API works, refer to the
[configuration options](#configuration-options), [model
conversion](#model-conversion), and [LoRA tuning](#lora-customization) sections.

You can see this task in action with the [MediaPipe Studio
demo](https://mediapipe-studio.webapps.google.com/studio/demo/llm_inference).
For more information about the capabilities, models, and configuration options
of this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/genai/llm_inference/index).

## Quickstart

Use the following steps to add the LLM Inference API to your iOS application.
LLM Inference API uses the `MediaPipeTasksGenai` library, which must be installed
using CocoaPods. The library is compatible with both Swift and Objective-C apps
and does not require any additional language-specific setup.

For instructions to install CocoaPods on macOS, refer to the [CocoaPods
installation guide](https://guides.CocoaPods.org/using/getting-started.html).
For instructions on how to create a `Podfile` with the necessary pods for your
app, refer to [Using
CocoaPods](https://guides.CocoaPods.org/using/using-cocoapods.html).

### Add dependencies

Add the `MediaPipeTasksGenai` pod in the `Podfile` using the following code:

```
target 'MyLlmInferenceApp' do
  use_frameworks!
  pod 'MediaPipeTasksGenAI'
  pod 'MediaPipeTasksGenAIC'
end
```

If your app includes unit test targets, refer to the [Set Up Guide for
iOS](/mediapipe/solutions/setup_ios) for additional information on setting up
your `Podfile`.

### Download a model

Download Gemma-2 2B in an 8-bit quantized format from [Kaggle
Models](https://www.kaggle.com/models/google/gemma-2/tfLite/gemma2-2b-it-gpu-int8T).
For more information on the available models, see the [Models
documentation](https://developers.google.com/edge/mediapipe/solutions/genai/llm_inference/index#models).

Add the model to your project directory using Xcode. For instructions on how to
add files to your Xcode project, refer to [Managing files and folders in your
Xcode
project](https://developer.apple.com/documentation/xcode/managing-files-and-folders-in-your-xcode-project).

### Initialize the Task

Initialize the task with basic configuration options:

```
import MediaPipeTasksGenai

let modelPath = Bundle.main.path(forResource: "model",
                                      ofType: "bin")

let options = LlmInferenceOptions()
options.baseOptions.modelPath = modelPath
options.maxTokens = 1000
options.topk = 40
options.temperature = 0.8
options.randomSeed = 101

let llmInference = try LlmInference(options: options)
```

**Note:** If temperature or top-K is set without also setting the random seed, there
will be no variability in the response.

### Run the Task

Use the `generateResponse(inputText:)` method to generate a text response. This
produces a single generated response.

```
let result = try LlmInference.generateResponse(inputText: inputPrompt)
```

To stream the response, use the `generateResponseAsync(inputText:)` method.

```
let resultStream =  LlmInference.generateResponseAsync(inputText: inputPrompt)

do {
  for try await partialResult in resultStream {
    print("\(partialResult)")
  }
  print("Done")
}
catch {
  print("Response error: '\(error)")
}
```

**Note:** The task blocks the current thread until it finishes running inference on
the text. To avoid blocking the current thread, execute the processing in a
background thread using iOS
[Dispatch](https://developer.apple.com/documentation/dispatch) or
[NSOperation](https://developer.apple.com/documentation/foundation/nsoperation)
frameworks.

## Sample application

The sample application is an example of a basic text generation app for iOS,
using the LLM Inference API. You can use the app as a starting point for your own
iOS app, or refer to it when modifying an existing app. The example code is
hosted on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/llm_inference/ios).

Clone the git repository using the following command:

```
git clone https://github.com/google-ai-edge/mediapipe-samples
```

After creating a local version of the example code, you can import the project
into iOS Studio and run the app. For more information, see the [Setup Guide for
iOS](/mediapipe/solutions/setup_ios).

## Configuration options

Use the following configuration options to set up an iOS app:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `modelPath` | The path to where the model is stored within the project directory. | PATH | N/A |
| `maxTokens` | The maximum number of tokens (input tokens + output tokens) the model handles. | Integer | 512 |
| `topk` | The number of tokens the model considers at each step of generation. Limits predictions to the top k most-probable tokens. | Integer | 40 |
| `temperature` | The amount of randomness introduced during generation. A higher temperature results in more creativity in the generated text, while a lower temperature produces more predictable generation. | Float | 0.8 |
| `randomSeed` | The random seed used during text generation. | Integer | 0 |
| `loraPath` | The absolute path to the LoRA model locally on the device. Note: this is only compatible with GPU models. | PATH | N/A |

## Model conversion

The LLM Inference API is compatible with the following types of models, some of
which require model conversion. Use the table to identify the required steps
method for your model.

| Models | Conversion method | Compatible platforms | File type |
| --- | --- | --- | --- |
| Gemma-3 1B | No conversion required | Android, web | .task |
| Gemma 2B, Gemma 7B, Gemma-2 2B | No conversion required | Android, iOS, web | .bin |
| Phi-2, StableLM, Falcon | [MediaPipe conversion script](https://developers.google.com/edge/mediapipe/solutions/genai/llm_inference/index#supported-models) | Android, iOS, web | .bin |
| All PyTorch LLM models | [LiteRT Torch Generative library](https://developers.google.com/edge/mediapipe/solutions/genai/llm_inference/index#pytorch-models) | Android, iOS | .task |

To learn how you can convert other models, see the [Model
Conversion](https://developers.google.com/edge/mediapipe/solutions/genai/llm_inference/index#convert-model) section.

## LoRA customization

The LLM Inference API supports LoRA (Low-Rank Adaptation) tuning using the
[PEFT](https://huggingface.co/docs/peft/main/en/index) (Parameter-Efficient
Fine-Tuning) library. LoRA tuning customizes the behavior of LLMs through a
cost-effective training process, creating a small set of trainable weights based
on new training data rather than retraining the entire model.

The LLM Inference API supports adding LoRA weights to attention layers of the
[Gemma-2 2B](https://huggingface.co/google/gemma-2-2b), [Gemma
2B](https://huggingface.co/google/gemma-2b) and
[Phi-2](https://huggingface.co/microsoft/phi-2) models. Download the model in
the `safetensors` format.

The base model must be in the `safetensors` format in order to create LoRA
weights. After LoRA training, you can convert the models into the FlatBuffers
format to run on MediaPipe.

### Prepare LoRA weights

Use the [LoRA
Methods](https://huggingface.co/docs/peft/main/en/task_guides/lora_based_methods)
guide from PEFT to train a fine-tuned LoRA model on your own dataset.

The LLM Inference API only supports LoRA on attention layers, so only specify the
attention layers in `LoraConfig`:

```
# For Gemma
from peft import LoraConfig
config = LoraConfig(
    r=LORA_RANK,
    target_modules=["q_proj", "v_proj", "k_proj", "o_proj"],
)

# For Phi-2
config = LoraConfig(
    r=LORA_RANK,
    target_modules=["q_proj", "v_proj", "k_proj", "dense"],
)
```

After training on the prepared dataset and saving the model, the fine-tuned LoRA
model weights are available in `adapter_model.safetensors`. The `safetensors`
file is the LoRA checkpoint used during model conversion.

### Model conversion

Use the MediaPipe Python Package to convert the model weights into the
Flatbuffer format. The `ConversionConfig` specifies the base model options along
with the additional LoRA options.

**Note:** Since the API only supports LoRA inference with GPU, the backend must be
set to `'gpu'`.

```
import mediapipe as mp
from mediapipe.tasks.python.genai import converter

config = converter.ConversionConfig(
  # Other params related to base model
  ...
  # Must use gpu backend for LoRA conversion
  backend='gpu',
  # LoRA related params
  lora_ckpt=LORA_CKPT,
  lora_rank=LORA_RANK,
  lora_output_tflite_file=LORA_OUTPUT_FILE,
)

converter.convert_checkpoint(config)
```

The converter will produce two Flatbuffer files, one for the base model and
another for the LoRA model.

### LoRA model inference

iOS supports static LoRA during initialization. To load a LoRA model, specify
the LoRA model path as well as the base LLM.

```
import MediaPipeTasksGenai

let modelPath = Bundle.main.path(forResource: "model",
                                      ofType: "bin")
let loraPath= Bundle.main.path(forResource: "lora_model",
                                      ofType: "bin")
let options = LlmInferenceOptions()
options.modelPath = modelPath
options.maxTokens = 1000
options.topk = 40
options.temperature = 0.8
options.randomSeed = 101
options.loraPath = loraPath

let llmInference = try LlmInference(options: options)
```

To run LLM inference with LoRA, use the same `generateResponse()` or
`generateResponseAsync()` methods as the base model.

Send feedback
