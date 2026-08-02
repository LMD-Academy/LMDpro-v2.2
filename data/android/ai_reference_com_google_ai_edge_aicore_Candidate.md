# Candidate

[//]: # (source: [developer.android.com](https://developer.android.com/ai/reference/com/google/ai/edge/aicore/Candidate))

---

[Kotlin](/ai/reference/kotlin/com/google/ai/edge/aicore/Candidate "View this page in Kotlin")
|Java

```
public final class Candidate
```

---

A piece of a response from the model. Contains the `FinishReason` in addition to the `Content` of the response.

## Summary

| Nested types |
| --- |
| `@IntDef(value = [0, 1]) public annotation Candidate.FinishReason`  Finish reason associated with a `Candidate` |

| Public constructors |
| --- |
| `@VisibleForTesting(otherwise = 3) Candidate(     @NonNull Content content,     @Candidate.FinishReason Integer finishReason )` |

| Public methods |
| --- |
| `final @NonNull Content` | `getContent()` |
| `final Integer` | `getFinishReason()` |

## Public constructors

### Candidate

```
@VisibleForTesting(otherwise = 3)  
public Candidate(  
    @NonNull Content content,  
    @Candidate.FinishReason Integer finishReason  
)
```

## Public methods

### getContent

```
public final @NonNull Content getContent()
```

### getFinishReason

```
public final Integer getFinishReason()
```

Send feedback
