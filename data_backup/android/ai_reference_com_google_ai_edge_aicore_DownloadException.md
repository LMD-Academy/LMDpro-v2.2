--- source: https://developer.android.com/ai/reference/com/google/ai/edge/aicore/DownloadException ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [AI](https://developer.android.com/ai)
* [Reference](https://developer.android.com/ai/reference)

Send feedback



Stay organized with collections

Save and categorize content based on your preferences.





# DownloadException

---

[Kotlin](/ai/reference/kotlin/com/google/ai/edge/aicore/DownloadException "View this page in Kotlin")
|Java

```
public final class DownloadException extends GenerativeAIException
```

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | | | |
| ↳ | [kotlin.Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html) | | | |
|  | ↳ | [java.lang.Exception](https://developer.android.com/reference/java/lang/Exception.html) | | |
|  |  | ↳ | [com.google.ai.edge.aicore.GenerativeAIException](/ai/reference/com/google/ai/edge/aicore/GenerativeAIException) | |
|  |  |  | ↳ | [com.google.ai.edge.aicore.DownloadException](/ai/reference/com/google/ai/edge/aicore/DownloadException) |

---

Error during download.

## Summary

| Inherited methods |
| --- |
| From [com.google.ai.edge.aicore.GenerativeAIException](/ai/reference/com/google/ai/edge/aicore/GenerativeAIException) |  |  | | --- | --- | | `final int` | `getErrorCode()` | |
| From [kotlin.Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html) |  |  | | --- | --- | | `final void` | `addSuppressed(@NonNull Throwable p0)` | | `@NonNull Throwable` | `fillInStackTrace()` | | `Throwable` | `getCause()` | | `@NonNull String` | `getLocalizedMessage()` | | `String` | `getMessage()` | | `@NonNull StackTraceElement[]` | `getStackTrace()` | | `final @NonNull Throwable[]` | `getSuppressed()` | | `@NonNull Throwable` | `initCause(@NonNull Throwable p0)` | | `void` | `printStackTrace()` | | `void` | `printStackTrace(@NonNull PrintStream p0)` | | `void` | `printStackTrace(@NonNull PrintWriter p0)` | | `void` | `setStackTrace(@NonNull StackTraceElement[] p0)` | |






Send feedback