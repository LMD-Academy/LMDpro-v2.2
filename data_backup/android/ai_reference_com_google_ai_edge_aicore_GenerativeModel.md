--- source: https://developer.android.com/ai/reference/com/google/ai/edge/aicore/GenerativeModel ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [AI](https://developer.android.com/ai)
* [Reference](https://developer.android.com/ai/reference)

Send feedback



Stay organized with collections

Save and categorize content based on your preferences.





# GenerativeModel

---

[Kotlin](/ai/reference/kotlin/com/google/ai/edge/aicore/GenerativeModel "View this page in Kotlin")
|Java

```
public final class GenerativeModel implements AutoCloseable
```

---

A facilitator for a given system model.

## Summary

| Public constructors |
| --- |
| `GenerativeModel(     @NonNull GenerationConfig generationConfig,     @NonNull DownloadConfig downloadConfig )` |

| Public methods |
| --- |
| `void` | `close()`  Closes the client and releases its resources. |
| `final @NonNull GenerateContentResponse` | `generateContent(@NonNull Content prompt)`  Generates a response from the system model with the provided `Content`s. |
| `final @NonNull GenerateContentResponse` | `generateContent(@NonNull String prompt)`  Generates a response from the system model with the provided text represented `Content`. |
| `final @NonNull Flow<@NonNull GenerateContentResponse>` | `generateContentStream(@NonNull Content prompt)`  Generates a streaming response from the system model with the provided `Content`s. |
| `final @NonNull Flow<@NonNull GenerateContentResponse>` | `generateContentStream(@NonNull String prompt)`  Generates a streaming response from the system model with the provided text represented `Content`. |
| `final @NonNull DownloadConfig` | `getDownloadConfig()`  the config for system model downloading |
| `final @NonNull GenerationConfig` | `getGenerationConfig()`  configuration parameters to use for content generation |
| `final @NonNull <Error class: unknown class>` | `prepareInferenceEngine()`  Prepares engine in advance so as to move timing overhead out of inference. |

## Public constructors

### GenerativeModel

```
public GenerativeModel(  
    @NonNull GenerationConfig generationConfig,  
    @NonNull DownloadConfig downloadConfig  
)
```

## Public methods

### close

```
public void close()
```

Closes the client and releases its resources.

### generateContent

```
public final @NonNull GenerateContentResponse generateContent(@NonNull Content prompt)
```

Generates a response from the system model with the provided `Content`s.

| Parameters |
| --- |
| `@NonNull Content prompt` | A group of `Content`s to send to the model. |

| Returns |
| --- |
| `@NonNull GenerateContentResponse` | A `GenerateContentResponse` after some delay. Function should be called within a suspend context to properly manage concurrency. |

### generateContent

```
public final @NonNull GenerateContentResponse generateContent(@NonNull String prompt)
```

Generates a response from the system model with the provided text represented `Content`.

| Parameters |
| --- |
| `@NonNull String prompt` | The text to be converted into a single piece of `Content` to send to the model. |

| Returns |
| --- |
| `@NonNull GenerateContentResponse` | A `GenerateContentResponse` after some delay. Function should be called within a suspend context to properly manage concurrency. |

### generateContentStream

```
public final @NonNull Flow<@NonNull GenerateContentResponse> generateContentStream(@NonNull Content prompt)
```

Generates a streaming response from the system model with the provided `Content`s.

| Parameters |
| --- |
| `@NonNull Content prompt` | A group of `Content`s to send to the model. |

| Returns |
| --- |
| `@NonNull Flow<@NonNull GenerateContentResponse>` | A `Flow` which will emit responses as they are returned from the model. |

### generateContentStream

```
public final @NonNull Flow<@NonNull GenerateContentResponse> generateContentStream(@NonNull String prompt)
```

Generates a streaming response from the system model with the provided text represented `Content`.

| Parameters |
| --- |
| `@NonNull String prompt` | The text to be converted into a single piece of `Content` to send to the model. |

| Returns |
| --- |
| `@NonNull Flow<@NonNull GenerateContentResponse>` | A `Flow` which will emit responses as they are returned from the model. |

### getDownloadConfig

```
public final @NonNull DownloadConfig getDownloadConfig()
```

the config for system model downloading

### getGenerationConfig

```
public final @NonNull GenerationConfig getGenerationConfig()
```

configuration parameters to use for content generation

### prepareInferenceEngine

```
public final @NonNull <Error class: unknown class> prepareInferenceEngine()
```

Prepares engine in advance so as to move timing overhead out of inference. Calling this method is strictly optional, but we recommend calling it well before the first inference call to minimize the latency of the first inference.






Send feedback