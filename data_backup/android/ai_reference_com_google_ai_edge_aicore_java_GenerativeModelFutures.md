--- source: https://developer.android.com/ai/reference/com/google/ai/edge/aicore/java/GenerativeModelFutures ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [AI](https://developer.android.com/ai)
* [Reference](https://developer.android.com/ai/reference)

Send feedback



Stay organized with collections

Save and categorize content based on your preferences.





# GenerativeModelFutures

---

[Kotlin](/ai/reference/kotlin/com/google/ai/edge/aicore/java/GenerativeModelFutures "View this page in Kotlin")
|Java

```
public abstract class GenerativeModelFutures
```

---

Helper method for interacting with a `GenerativeModel` from Java.

| See also |
| --- |
| `from` |  |

## Summary

| Public methods |
| --- |
| `static final @NonNull GenerativeModelFutures` | `from(@NonNull GenerativeModel model)` |
| `abstract @NonNull ListenableFuture<@NonNull GenerateContentResponse>` | `generateContent(@NonNull Content prompt)`  Generates a response from the system model for the provided `Content`s. |
| `abstract @NonNull Publisher<@NonNull GenerateContentResponse>` | `generateContentStream(@NonNull Content prompt)`  Generates a streaming response from the system model for the provided `Content`s. |
| `abstract @NonNull GenerativeModel` | `getGenerativeModel()`  Returns the `GenerativeModel` instance that was used to create this object |

## Public methods

### from

```
public static final @NonNull GenerativeModelFutures from(@NonNull GenerativeModel model)
```

| Returns |
| --- |
| `@NonNull GenerativeModelFutures` | a `GenerativeModelFutures` created around the provided `getGenerativeModel` |

### generateContent

```
public abstract @NonNull ListenableFuture<@NonNull GenerateContentResponse> generateContent(@NonNull Content prompt)
```

Generates a response from the system model for the provided `Content`s.

| Parameters |
| --- |
| `@NonNull Content prompt` | A group of input `Content`s to send to the model. |

### generateContentStream

```
public abstract @NonNull Publisher<@NonNull GenerateContentResponse> generateContentStream(@NonNull Content prompt)
```

Generates a streaming response from the system model for the provided `Content`s.

| Parameters |
| --- |
| `@NonNull Content prompt` | A group of input `Content`s to send to the model. |

### getGenerativeModel

```
public abstract @NonNull GenerativeModel getGenerativeModel()
```

Returns the `GenerativeModel` instance that was used to create this object






Send feedback