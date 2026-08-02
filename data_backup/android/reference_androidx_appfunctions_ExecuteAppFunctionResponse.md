--- source: https://developer.android.com/reference/androidx/appfunctions/ExecuteAppFunctionResponse ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ExecuteAppFunctionResponse

Artifact: [androidx.appfunctions:appfunctions](/jetpack/androidx/releases/appfunctions)

[View Source](https://cs.android.com/search?q=file:androidx/appfunctions/ExecuteAppFunctionResponse.kt+class:androidx.appfunctions.ExecuteAppFunctionResponse)

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

---

[Kotlin](/reference/kotlin/androidx/appfunctions/ExecuteAppFunctionResponse "View this page in Kotlin")
|Java

```
public sealed interface ExecuteAppFunctionResponse
```

Known direct subclasses

[ExecuteAppFunctionResponse.Error](/reference/androidx/appfunctions/ExecuteAppFunctionResponse.Error), [ExecuteAppFunctionResponse.Success](/reference/androidx/appfunctions/ExecuteAppFunctionResponse.Success)

|  |  |
| --- | --- |
| `ExecuteAppFunctionResponse.Error` | Represents a failed execution of an app function. |
| `ExecuteAppFunctionResponse.Success` | Represents a successful execution of an app function. |

---

Represents a response of an execution of an app function.

## Summary

| Nested types |
| --- |
| `public final class ExecuteAppFunctionResponse.Error implements ExecuteAppFunctionResponse`  Represents a failed execution of an app function. |
| `public final class ExecuteAppFunctionResponse.Success implements ExecuteAppFunctionResponse`  Represents a successful execution of an app function. |