# All methods

[//]: # (source: [ai.google.dev](https://ai.google.dev/api/all-methods))

The [Interactions API](/gemini-api/docs/interactions-overview) is now generally available. We recommend using this API for access to all the latest features and models.

## Gemini API

The Gemini API allows developers to build generative AI applications using Gemini models. Gemini is our most capable model, built from the ground up to be multimodal. It can generalize and seamlessly understand, operate across, and combine different types of information including language, images, audio, video, and code. You can use the Gemini API for use cases like reasoning across text and images, content generation, dialogue agents, summarization and classification systems, and more.

* [REST Resource: v1beta.auth\_tokens](#v1beta.auth_tokens)
* [REST Resource: v1beta.batches](#v1beta.batches)
* [REST Resource: v1beta.cachedContents](#v1beta.cachedContents)
* [REST Resource: v1beta.corpora](#v1beta.corpora)
* [REST Resource: v1beta.corpora.operations](#v1beta.corpora.operations)
* [REST Resource: v1beta.corpora.permissions](#v1beta.corpora.permissions)
* [REST Resource: v1beta.dynamic](#v1beta.dynamic)
* [REST Resource: v1beta.fileSearchStores](#v1beta.fileSearchStores)
* [REST Resource: v1beta.fileSearchStores.documents](#v1beta.fileSearchStores.documents)
* [REST Resource: v1beta.fileSearchStores.operations](#v1beta.fileSearchStores.operations)
* [REST Resource: v1beta.fileSearchStores.upload.operations](#v1beta.fileSearchStores.upload.operations)
* [REST Resource: v1beta.files](#v1beta.files)
* [REST Resource: v1beta.generatedFiles](#v1beta.generatedFiles)
* [REST Resource: v1beta.generatedFiles.operations](#v1beta.generatedFiles.operations)
* [REST Resource: v1beta.media](#v1beta.media)
* [REST Resource: v1beta.models](#v1beta.models)
* [REST Resource: v1beta.models.operations](#v1beta.models.operations)
* [REST Resource: v1beta.tunedModels](#v1beta.tunedModels)
* [REST Resource: v1beta.tunedModels.operations](#v1beta.tunedModels.operations)
* [REST Resource: v1beta.tunedModels.permissions](#v1beta.tunedModels.permissions)

## Service: generativelanguage.googleapis.com

To call this service, we recommend that you use the Google-provided [client libraries](https://cloud.google.com/apis/docs/client-libraries-explained). If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

### Service endpoint

A [service endpoint](https://cloud.google.com/apis/design/glossary#api_service_endpoint) is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:

* `https://generativelanguage.googleapis.com`

## REST Resource: [v1beta.auth\_tokens](/api/generate-content#v1beta.auth_tokens)

| Methods | |
| --- | --- |
| `create` | `POST /v1beta/auth_tokens`   Creates a token that can be used to constrain the behavior of a BidiGenerateContent session. |

## REST Resource: [v1beta.batches](/api/batch-api#v1beta.batches)

| Methods | |
| --- | --- |
| `cancel` | `POST /v1beta/{name=batches/*}:cancel`   Starts asynchronous cancellation on a long-running operation. |
| `delete` | `DELETE /v1beta/{name=batches/*}`   Deletes a long-running operation. |
| `get` | `GET /v1beta/{name=batches/*}`   Gets the latest state of a long-running operation. |
| `list` | `GET /v1beta/{name=batches}`   Lists operations that match the specified filter in the request. |
| `updateEmbedContentBatch` | `PATCH /v1beta/{embedContentBatch.name=batches/*}:updateEmbedContentBatch`   Updates a batch of EmbedContent requests for batch processing. |
| `updateGenerateContentBatch` | `PATCH /v1beta/{generateContentBatch.name=batches/*}:updateGenerateContentBatch`   Updates a batch of GenerateContent requests for batch processing. |

## REST Resource: [v1beta.cachedContents](/api/caching#v1beta.cachedContents)

| Methods | |
| --- | --- |
| `create` | `POST /v1beta/cachedContents`   Creates CachedContent resource. |
| `delete` | `DELETE /v1beta/{name=cachedContents/*}`   Deletes CachedContent resource. |
| `get` | `GET /v1beta/{name=cachedContents/*}`   Reads CachedContent resource. |
| `list` | `GET /v1beta/cachedContents`   Lists CachedContents. |
| `patch` | `PATCH /v1beta/{cachedContent.name=cachedContents/*}`   Updates CachedContent resource (only expiration is updatable). |

## REST Resource: [v1beta.fileSearchStores](/api/file-search/file-search-stores#v1beta.fileSearchStores)

| Methods | |
| --- | --- |
| `create` | `POST /v1beta/fileSearchStores`   Creates an empty `FileSearchStore`. |
| `delete` | `DELETE /v1beta/{name=fileSearchStores/*}`   Deletes a `FileSearchStore`. |
| `get` | `GET /v1beta/{name=fileSearchStores/*}`   Gets information about a specific `FileSearchStore`. |
| `importFile` | `POST /v1beta/{fileSearchStoreName=fileSearchStores/*}:importFile`   Imports a `File` from File Service to a `FileSearchStore`. |
| `list` | `GET /v1beta/fileSearchStores`   Lists all `FileSearchStores` owned by the user. |

## REST Resource: [v1beta.fileSearchStores.documents](/api/file-search/documents#v1beta.fileSearchStores)

| Methods | |
| --- | --- |
| `delete` | `DELETE /v1beta/{name=fileSearchStores/*/documents/*}`   Deletes a `Document`. |
| `get` | `GET /v1beta/{name=fileSearchStores/*/documents/*}`   Gets information about a specific `Document`. |
| `list` | `GET /v1beta/{parent=fileSearchStores/*}/documents`   Lists all `Document`s in a `Corpus`. |

## REST Resource: [v1beta.fileSearchStores.operations](/api/file-search/file-search-stores#v1beta.fileSearchStores)

| Methods | |
| --- | --- |
| `get` | `GET /v1beta/{name=fileSearchStores/*/operations/*}`   Gets the latest state of a long-running operation. |

## REST Resource: [v1beta.fileSearchStores.upload.operations](/api/file-search/file-search-stores#v1beta.fileSearchStores.upload)

| Methods | |
| --- | --- |
| `get` | `GET /v1beta/{name=fileSearchStores/*/upload/operations/*}`   Gets the latest state of a long-running operation. |

## REST Resource: [v1beta.files](/api/files#v1beta.files)

| Methods | |
| --- | --- |
| `delete` | `DELETE /v1beta/{name=files/*}`   Deletes the `File`. |
| `get` | `GET /v1beta/{name=files/*}`   Gets the metadata for the given `File`. |
| `list` | `GET /v1beta/files`   Lists the metadata for `File`s owned by the requesting project. |
| `register` | `POST /v1beta/files:register`   Registers a Google Cloud Storage files with FileService. |

## REST Resource: v1beta.media

| Methods | |
| --- | --- |
| `download` | `GET /v1beta/{name=fileSearchStores/*/media/**}`   Downloads media from a `FileSearchStore`. |
| `upload` | `POST /v1beta/files`   `POST /upload/v1beta/files`   Creates a `File`. |
| `uploadToFileSearchStore` | `POST /v1beta/{fileSearchStoreName=fileSearchStores/*}:uploadToFileSearchStore`   `POST /upload/v1beta/{fileSearchStoreName=fileSearchStores/*}:uploadToFileSearchStore`   Uploads data to a FileSearchStore, preprocesses and chunks before storing it in a FileSearchStore Document. |

## REST Resource: [v1beta.models](/api/models#v1beta.models)

| Methods | |
| --- | --- |
| `asyncBatchEmbedContent` | `POST /v1beta/{batch.model=models/*}:asyncBatchEmbedContent`   Enqueues a batch of `EmbedContent` requests for batch processing. |
| `batchEmbedContents` | `POST /v1beta/{model=models/*}:batchEmbedContents`   Generates multiple embedding vectors from the input `Content` which consists of a batch of strings represented as `EmbedContentRequest` objects. |
| `batchGenerateContent` | `POST /v1beta/{batch.model=models/*}:batchGenerateContent`   Enqueues a batch of `GenerateContent` requests for batch processing. |
| `countTokens` | `POST /v1beta/{model=models/*}:countTokens`   Runs a model's tokenizer on input `Content` and returns the token count. |
| `embedContent` | `POST /v1beta/{model=models/*}:embedContent`   Generates a text embedding vector from the input `Content` using the specified [Gemini Embedding model](https://ai.google.dev/gemini-api/docs/models/gemini#text-embedding). |
| `generateContent` | `POST /v1beta/{model=models/*}:generateContent`   Generates a model response given an input `GenerateContentRequest`. |
| `get` | `GET /v1beta/{name=models/*}`   Gets information about a specific `Model` such as its version number, token limits, [parameters](https://ai.google.dev/gemini-api/docs/models/generative-models#model-parameters) and other metadata. |
| `list` | `GET /v1beta/models`   Lists the [`Model`s](https://ai.google.dev/gemini-api/docs/models/gemini) available through the Gemini API. |
| `predict` | `POST /v1beta/{model=models/*}:predict`   Performs a prediction request. |
| `predictLongRunning` | `POST /v1beta/{model=models/*}:predictLongRunning`   Same as Predict but returns an LRO. |
| `streamGenerateContent` | `POST /v1beta/{model=models/*}:streamGenerateContent`   Generates a [streamed response](https://ai.google.dev/gemini-api/docs/text-generation?lang=python#generate-a-text-stream) from the model given an input `GenerateContentRequest`. |

Send feedback
