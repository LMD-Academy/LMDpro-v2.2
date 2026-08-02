--- source: https://developer.android.com/reference/androidx/appfunctions/AppFunctionConfiguration.Provider ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# AppFunctionConfiguration.Provider

Artifact: [androidx.appfunctions:appfunctions](/jetpack/androidx/releases/appfunctions)

[View Source](https://cs.android.com/search?q=file:androidx/appfunctions/AppFunctionConfiguration.kt+class:androidx.appfunctions.AppFunctionConfiguration.Provider)

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

---

[Kotlin](/reference/kotlin/androidx/appfunctions/AppFunctionConfiguration.Provider "View this page in Kotlin")
|Java

```
public interface AppFunctionConfiguration.Provider
```

---

A class to provide customized `AppFunctionConfiguration` object.

To provide the configuration, implements the `AppFunctionConfiguration.Provider` interface on your `android.app.Application` class.

## Summary

| Public methods |
| --- |
| `abstract @NonNull AppFunctionConfiguration` | `getAppFunctionConfiguration()`  The `AppFunctionConfiguration` used to customize AppFunction setup. |

## Public methods

### getAppFunctionConfiguration

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
abstract @NonNull AppFunctionConfiguration getAppFunctionConfiguration()
```

The `AppFunctionConfiguration` used to customize AppFunction setup.