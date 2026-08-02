--- source: https://developer.android.com/ai/reference/com/google/ai/edge/aicore/Candidate.FinishReason ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [AI](https://developer.android.com/ai)
* [Reference](https://developer.android.com/ai/reference)

Send feedback



Stay organized with collections

Save and categorize content based on your preferences.





# Candidate.FinishReason

---

[Kotlin](/ai/reference/kotlin/com/google/ai/edge/aicore/Candidate.FinishReason "View this page in Kotlin")
|Java

```
@IntDef(value = [0, 1])  
public annotation Candidate.FinishReason
```

---

Finish reason associated with a `Candidate`

## Summary

| Constants |
| --- |
| `static final int` | `MAX_TOKENS`  Model hit the token limit. |
| `static final int` | `STOP`  Model finished successfully and stopped. |

| Public constructors |
| --- |
| `FinishReason()` |

## Constants

### MAX\_TOKENS

```
public static final int MAX_TOKENS
```

Model hit the token limit.

### STOP

```
public static final int STOP
```

Model finished successfully and stopped.

## Public constructors

### FinishReason

```
public FinishReason()
```






Send feedback