# GenerateContentResponse

[//]: # (source: [developer.android.com](https://developer.android.com/ai/reference/com/google/ai/edge/aicore/GenerateContentResponse))

---

[Kotlin](/ai/reference/kotlin/com/google/ai/edge/aicore/GenerateContentResponse "View this page in Kotlin")
|Java

```
public final class GenerateContentResponse
```

---

Represents a response from the model.

## Summary

| Public constructors |
| --- |
| `@VisibleForTesting(otherwise = 3) GenerateContentResponse(@NonNull List<@NonNull Candidate> candidates)` |

| Public methods |
| --- |
| `final @NonNull List<@NonNull Candidate>` | `getCandidates()`  a list of possible responses generated from the model |
| `final String` | `getText()`  Convenience field representing the first text part in the response, if it exists. |

## Public constructors

### GenerateContentResponse

```
@VisibleForTesting(otherwise = 3)  
public GenerateContentResponse(@NonNull List<@NonNull Candidate> candidates)
```

## Public methods

### getCandidates

```
public final @NonNull List<@NonNull Candidate> getCandidates()
```

a list of possible responses generated from the model

### getText

```
public final String getText()
```

Convenience field representing the first text part in the response, if it exists.

Send feedback
