--- source: https://developer.android.com/ai/reference/com/google/ai/edge/aicore/package-summary ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [AI](https://developer.android.com/ai)
* [Reference](https://developer.android.com/ai/reference)

Send feedback



Stay organized with collections

Save and categorize content based on your preferences.





# com.google.ai.edge.aicore

---

[Kotlin](/ai/reference/kotlin/com/google/ai/edge/aicore/package-summary "View this page in Kotlin")
|Java

## Annotations

|  |  |
| --- | --- |
| `Candidate.FinishReason` | Finish reason associated with a `Candidate` |
| `Content.Role` | Role associated with `Content` |
| `GenerativeAIException.ErrorCode` | The set of `GenerativeAIException` error codes. |

## Interfaces

|  |  |
| --- | --- |
| `DownloadCallback` | Callback functions used for model downloading. |
| `Part` | Interface representing data sent to and received from requests. |

## Classes

|  |  |
| --- | --- |
| `Candidate` | A piece of a response from the model. |
| `Content` | Represents content sent to and received from the model. |
| `Content.Builder` |  |
| `ContentKt` |  |
| `DownloadConfig` | Configuration parameters to use for system model download. |
| `GenerateContentResponse` | Represents a response from the model. |
| `GenerationConfig` | Configuration parameters to use for content generation. |
| `GenerationConfig.Builder` |  |
| `GenerationConfigKt` |  |
| `GenerativeModel` | A facilitator for a given system model. |
| `PartKt` |  |
| `TextPart` | Represents text or string based data sent to and received from requests. |
| `Content.Companion` |  |
| `GenerationConfig.Companion` |  |

## Exceptions

|  |  |
| --- | --- |
| `ConnectionException` | Error during connection. |
| `DownloadException` | Error during download. |
| `GenerativeAIException` | Parent class for any errors that occur from `GenerativeModel`. |
| `InferenceException` | Error during inference. |
| `PreparationException` | Error during preparation. |
| `TokenizationException` | Error during tokenization. |
| `UnknownException` | Unknown Error. |






Send feedback