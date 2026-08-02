--- source: https://developer.android.com/ai/reference/com/google/ai/edge/aicore/GenerativeAIException ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [AI](https://developer.android.com/ai)
* [Reference](https://developer.android.com/ai/reference)

Send feedback



Stay organized with collections

Save and categorize content based on your preferences.





# GenerativeAIException

---

[Kotlin](/ai/reference/kotlin/com/google/ai/edge/aicore/GenerativeAIException "View this page in Kotlin")
|Java

```
public sealed class GenerativeAIException extends Exception
```

|  |  |  |  |
| --- | --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | | |
| ↳ | [kotlin.Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html) | | |
|  | ↳ | [java.lang.Exception](https://developer.android.com/reference/java/lang/Exception.html) | |
|  |  | ↳ | [com.google.ai.edge.aicore.GenerativeAIException](/ai/reference/com/google/ai/edge/aicore/GenerativeAIException) |

Known direct subclasses

[ConnectionException](/ai/reference/com/google/ai/edge/aicore/ConnectionException), [DownloadException](/ai/reference/com/google/ai/edge/aicore/DownloadException), [InferenceException](/ai/reference/com/google/ai/edge/aicore/InferenceException), [PreparationException](/ai/reference/com/google/ai/edge/aicore/PreparationException), [TokenizationException](/ai/reference/com/google/ai/edge/aicore/TokenizationException), [UnknownException](/ai/reference/com/google/ai/edge/aicore/UnknownException)

|  |  |
| --- | --- |
| `ConnectionException` | Error during connection. |
| `DownloadException` | Error during download. |
| `InferenceException` | Error during inference. |
| `PreparationException` | Error during preparation. |
| `TokenizationException` | Error during tokenization. |
| `UnknownException` | Unknown Error. |

---

Parent class for any errors that occur from `GenerativeModel`.

## Summary

| Nested types |
| --- |
| `@IntDef public annotation GenerativeAIException.ErrorCode`  The set of `GenerativeAIException` error codes. |

| Protected constructors |
| --- |
| `GenerativeAIException(     @NonNull String message,     Throwable cause,     @GenerativeAIException.ErrorCode int errorCode )` |

| Public methods |
| --- |
| `final int` | `getErrorCode()` |

| Inherited methods |
| --- |
| From [kotlin.Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html) |  |  | | --- | --- | | `final void` | `addSuppressed(@NonNull Throwable p0)` | | `@NonNull Throwable` | `fillInStackTrace()` | | `Throwable` | `getCause()` | | `@NonNull String` | `getLocalizedMessage()` | | `String` | `getMessage()` | | `@NonNull StackTraceElement[]` | `getStackTrace()` | | `final @NonNull Throwable[]` | `getSuppressed()` | | `@NonNull Throwable` | `initCause(@NonNull Throwable p0)` | | `void` | `printStackTrace()` | | `void` | `printStackTrace(@NonNull PrintStream p0)` | | `void` | `printStackTrace(@NonNull PrintWriter p0)` | | `void` | `setStackTrace(@NonNull StackTraceElement[] p0)` | |

## Protected constructors

### GenerativeAIException

```
protected GenerativeAIException(  
    @NonNull String message,  
    Throwable cause,  
    @GenerativeAIException.ErrorCode int errorCode  
)
```

## Public methods

### getErrorCode

```
public final int getErrorCode()
```






Send feedback