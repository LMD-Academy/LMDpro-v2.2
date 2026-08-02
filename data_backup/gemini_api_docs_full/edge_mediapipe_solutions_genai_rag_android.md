--- source: https://ai.google.dev/edge/mediapipe/solutions/genai/rag/android ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [MediaPipe](https://developers.google.com/edge/mediapipe/solutions/guide)

Send feedback

# AI Edge RAG guide for Android Stay organized with collections Save and categorize content based on your preferences.



**Deprecated:** AI Edge RAG SDK is still available.**Note:** Use of the AI Edge RAG SDK is subject to the [Generative AI Prohibited
Use Policy](https://policies.google.com/terms/generative-ai/use-policy).

The AI Edge RAG SDK provides the fundamental components to construct a Retrieval
Augmented Generation (RAG) pipeline with the LLM Inference API. A RAG pipeline
provides LLMs with access to user-provided data, which can include updated,
sensitive, or domain-specific information. With the added information retrieval
capabilities from RAG, LLMs can generate more accurate and context-aware
responses for specific use cases.

This guide walks you through a basic implementation of a sample application
using the LLM Inference API with the AI Edge RAG SDK. This guide focuses on
constructing a RAG pipeline. For more information on using the LLM Inference
API, see the [LLM Inference for Android guide](https://developers.google.com/edge/mediapipe/solutions/genai/llm_inference/android).

You can find the complete sample application on
[GitHub](https://github.com/google-ai-edge/ai-edge-apis/tree/main/examples/rag).
To get started, build the application, read through the user-provided data
([`sample_context.txt`](https://github.com/google-ai-edge/ai-edge-apis/blob/main/examples/rag/android/app/src/main/assets/sample_context.txt)),
and ask the LLM questions relating to information in the text file.

## Run the example application

**Note:** The LLM Inference API does not fully support device emulators. Use a
physical device to avoid crashes, performance issues, and unexpected behavior.

This guide refers to an example of a basic text generation app with RAG for
Android. You can use the sample app as a starting point for your own Android
app, or refer to it when modifying an existing app.

The application is optimized for higher-end devices such as Pixel 8, Pixel 9,
S23 and S24. Connect an Android device to your workstation and ensure you have a
current version of Android Studio. For more information, see the [Android setup
guide](https://developers.google.com/edge/mediapipe/solutions/setup_android).

### Download the application code

The following instructions show you how to create a local copy of the example
code using the git command line tool.

Clone the git repository using the following command:

```
git clone https://github.com/google-ai-edge/ai-edge-apis
```

After creating a local version of the example code, you can import the project
into Android Studio and run the app.

### Download a model

The sample application is configured to use [Gemma-3
1B](https://ai.google.dev/gemma/docs/core/model_card_3). Gemma-3 1B is part of
the Gemma family of lightweight, state-of-the-art open models built from the
same research and technology used to create the Gemini models. The model
contains 1B parameters and open weights.

[Download Gemma-3 1B](https://huggingface.co/litert-community/Gemma3-1B-IT)

After downloading Gemma-3 1B from Hugging Face, push the model to your device:

```
cd ~/Downloads
tar -xvzf gemma3-1b-it-int4.tar.gz
```

```
$ adb shell rm -r /data/local/tmp/llm/ # Remove any previously loaded models
$ adb shell mkdir -p /data/local/tmp/llm/
$ adb push output_path /data/local/tmp/llm/model_version.task
```

You can also use other models with the sample application, but it may require
additional configuration steps.

### Set up an embedder

The embedder takes chunks of text from the user-provided data and turns them
into vectorized numeric representations that capture its semantic meaning. The
LLM refers to these embeddings to identify relevant vectors, and incorporates
the most semantically relevant chunks in the generated output.

The sample application is designed to work with two embedders, the Gemini
embedder and Gecko embedder.

#### Set up with Gecko embedder

By default, the sample app is configured to use the Gecko embedder
(`GeckoEmbeddingModel`), and runs the model completely on-device.

[Download Gecko 110m-en](https://huggingface.co/litert-community/Gecko-110m-en)

The Gecko embedder is available as float and quantized models, with multiple
versions for different sequence lengths. For more information, see the [Gecko
model card](https://huggingface.co/litert-community/Gecko-110m-en).

The model specifications can be found in the model filename. For example:

* `Gecko_256_f32.tflite`: Float model that supports sequences of up to 256
  tokens.
* `Gecko_1024_quant.tflite`: Quantized model that supports sequences of up to
  1024 tokens.

The sequence length is the maximum chunk size the model can embed. For example,
the `Gecko_256_f32.tflite` model is passed a chunk that exceeds the sequence
length, the model will embed the first 256 tokens and truncate the remainder of
the chunk.

Push the tokenizer model (`sentencepiece.model`) and the Gecko embedder to your
device:

```
adb push sentencepiece.model /data/local/tmp/sentencepiece.model
adb push Gecko_256_f32.tflite /data/local/tmp/gecko.tflite
```

The embedding model is compatible with both CPU and GPU. By default, the sample
app is configured to extract embeddings with the Gecko model on GPU.

```
companion object {
  ...
  private const val USE_GPU_FOR_EMBEDDINGS = true
}
```

#### Set up with Gemini Embedder

The Gemini Embedder (`GeminiEmbedder`) creates embeddings using the Gemini Cloud
API. This requires a Google Gemini API key to run the application, which you can
obtain from the Google Gemini API setup page.

[Get a Gemini API key in Google AI Studio](https://aistudio.google.com/app/apikey)

Add your Gemini API key and set `COMPUTE_EMBEDDINGS_LOCALLY` to false in
[RagPipeline.kt](https://github.com/google-ai-edge/ai-edge-apis/blob/main/examples/rag/android/app/src/main/java/com/google/ai/edge/samples/rag/RagPipeline.kt):

```
companion object {
  ...
  private const val COMPUTE_EMBEDDINGS_LOCALLY = false
  private const val GEMINI_API_KEY = "<API_KEY>"
}
```

## How it works

This section provides more in-depth information on the RAG pipeline components
of the application. You can view most of the code at
[RagPipeline.kt](https://github.com/google-ai-edge/ai-edge-apis/blob/main/examples/rag/android/app/src/main/java/com/google/ai/edge/samples/rag/RagPipeline.kt).

### Dependencies

The RAG SDK uses the `com.google.ai.edge.localagents:localagents-rag` library.
Add this dependency to the `build.gradle` file of your Android app:

```
dependencies {
    ...
    implementation("com.google.ai.edge.localagents:localagents-rag:0.1.0")
    implementation("com.google.mediapipe:tasks-genai:0.10.22")
}
```

### User-provided data

The user-provided data in the application is a text file named
[`sample_context.txt`](https://github.com/google-ai-edge/ai-edge-apis/blob/main/examples/rag/android/app/src/main/assets/sample_context.txt),
which is stored in the `assets` directory. The application takes chunks of the
text file, creates embeddings of those chunks, and refers to the embeddings when
generating output text.

The following code snippet can be found in
[MainActivity.kt](https://github.com/google-ai-edge/ai-edge-apis/blob/main/examples/rag/android/app/src/main/java/com/google/ai/edge/samples/rag/MainActivity.kt):

```
class MainActivity : ComponentActivity() {
  lateinit var chatViewModel: ChatViewModel
...
    chatViewModel.memorizeChunks("sample_context.txt")
...
}
```

### Chunking

For simplicity, the
[`sample_context.txt`](https://github.com/google-ai-edge/ai-edge-apis/blob/main/examples/rag/android/app/src/main/assets/sample_context.txt)
file includes `<chunk_splitter>` tags that the sample application uses to create
chunks. Embeddings are then created for each chunk. In production applications,
the size of chunks is a key consideration. When a chunk is too large, the vector
does not contain enough specificity to be useful; and when it is too small, it
does not contain enough context.

The sample application handles the chunking through the `memorizeChunks`
function in
[RagPipeline.kt](https://github.com/google-ai-edge/ai-edge-apis/blob/main/examples/rag/android/app/src/main/java/com/google/ai/edge/samples/rag/RagPipeline.kt).

### Embedding

The application offers two pathways for text embedding:

* [Gecko
  embedder](https://github.com/google-ai-edge/ai-edge-apis/blob/main/local_agents/rag/java/com/google/ai/edge/localagents/rag/models/GeckoEmbeddingModel.java):
  Local (on-device) text embedding extraction with the Gecko model.
* [Gemini
  Embedder](https://github.com/google-ai-edge/ai-edge-apis/blob/main/local_agents/rag/java/com/google/ai/edge/localagents/rag/models/GeminiEmbedder.java):
  Cloud-based text embedding extraction with the Generative Language Cloud
  API.

The sample application selects the embedder based on whether the user intends to
compute embeddings locally or through Google Cloud. The following code snippet
can be found in
[RagPipeline.kt](https://github.com/google-ai-edge/ai-edge-apis/blob/main/examples/rag/android/app/src/main/java/com/google/ai/edge/samples/rag/RagPipeline.kt):

```
private val embedder: Embedder<String> = if (COMPUTE_EMBEDDINGS_LOCALLY) {
  GeckoEmbeddingModel(
    GECKO_MODEL_PATH,
    Optional.of(TOKENIZER_MODEL_PATH),
    USE_GPU_FOR_EMBEDDINGS,
    )
  } else {
    GeminiEmbedder(
      GEMINI_EMBEDDING_MODEL,
      GEMINI_API_KEY
      )
  }
```

### Database

The sample application uses SQLite (`SqliteVectorStore`) to store text
embeddings. You can also use the `DefaultVectorStore` database for
non-persistent vector storage.

The following code snippet can be found in
[RagPipeline.kt](https://github.com/google-ai-edge/ai-edge-apis/blob/main/examples/rag/android/app/src/main/java/com/google/ai/edge/samples/rag/RagPipeline.kt):

```
private val config = ChainConfig.create(
    mediaPipeLanguageModel, PromptBuilder(QA_PROMPT_TEMPLATE1),
    DefaultSemanticTextMemory(
        SqliteVectorStore(768), embedder
    )
)
```

The sample app sets the embedding dimension to 768, which refers to the length
of each vector in the vector database.

### Chain

The RAG SDK provides chains, which combines several RAG components into a single
pipeline. You can use chains to orchestrate retrieval and query models. The API
is based on the
[Chain](https://github.com/google-ai-edge/ai-edge-apis/blob/main/local_agents/rag/java/com/google/ai/edge/localagents/rag/chains/Chain.java)
interface.

The sample application uses the [Retrieval and Inference
chain](https://github.com/google-ai-edge/ai-edge-apis/blob/main/local_agents/rag/java/com/google/ai/edge/localagents/rag/chains/RetrievalAndInferenceChain.java).
The following code snippet can be found in
[RagPipeline.kt](https://github.com/google-ai-edge/ai-edge-apis/blob/main/examples/rag/android/app/src/main/java/com/google/ai/edge/samples/rag/RagPipeline.kt):

```
private val retrievalAndInferenceChain = RetrievalAndInferenceChain(config)
```

The chain is invoked when the model generates responses:

```
suspend fun generateResponse(
    prompt: String,
    callback: AsyncProgressListener<LanguageModelResponse>?
): String =
    coroutineScope {
        val retrievalRequest =
            RetrievalRequest.create(
                prompt,
                RetrievalConfig.create(2, 0.0f, TaskType.QUESTION_ANSWERING)
            )
        retrievalAndInferenceChain.invoke(retrievalRequest, callback).await().text
    }
```






Send feedback