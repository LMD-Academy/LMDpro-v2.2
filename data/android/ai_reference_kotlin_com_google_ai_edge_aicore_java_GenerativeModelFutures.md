# GenerativeModelFutures

[//]: # (source: [developer.android.com](https://developer.android.com/ai/reference/kotlin/com/google/ai/edge/aicore/java/GenerativeModelFutures))

---

Kotlin
|[Java](/ai/reference/com/google/ai/edge/aicore/java/GenerativeModelFutures "View this page in Java")

```
abstract class GenerativeModelFutures
```

---

Helper method for interacting with a `GenerativeModel` from Java.

| See also |
| --- |
| `from` |  |

## Summary

| Public companion functions |
| --- |
| `GenerativeModelFutures` | `from(model: GenerativeModel)` |

| Public functions |
| --- |
| `abstract ListenableFuture<GenerateContentResponse>` | `generateContent(vararg prompt: Content)`  Generates a response from the system model for the provided `Content`s. |
| `abstract Publisher<GenerateContentResponse>` | `generateContentStream(vararg prompt: Content)`  Generates a streaming response from the system model for the provided `Content`s. |
| `abstract GenerativeModel` | `getGenerativeModel()`  Returns the `GenerativeModel` instance that was used to create this object |

## Public companion functions

### from

```
fun from(model: GenerativeModel): GenerativeModelFutures
```

| Returns |
| --- |
| `GenerativeModelFutures` | a `GenerativeModelFutures` created around the provided `getGenerativeModel` |

## Public functions

### generateContent

```
abstract fun generateContent(vararg prompt: Content): ListenableFuture<GenerateContentResponse>
```

Generates a response from the system model for the provided `Content`s.

| Parameters |
| --- |
| `vararg prompt: Content` | A group of input `Content`s to send to the model. |

### generateContentStream

```
abstract fun generateContentStream(vararg prompt: Content): Publisher<GenerateContentResponse>
```

Generates a streaming response from the system model for the provided `Content`s.

| Parameters |
| --- |
| `vararg prompt: Content` | A group of input `Content`s to send to the model. |

### getGenerativeModel

```
abstract fun getGenerativeModel(): GenerativeModel
```

Returns the `GenerativeModel` instance that was used to create this object

Send feedback
