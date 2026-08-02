# AppFunctionConfiguration

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/appfunctions/AppFunctionConfiguration))

Artifact: [androidx.appfunctions:appfunctions](/jetpack/androidx/releases/appfunctions)

[View Source](https://cs.android.com/search?q=file:androidx/appfunctions/AppFunctionConfiguration.kt+class:androidx.appfunctions.AppFunctionConfiguration)

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

---

[Kotlin](/reference/kotlin/androidx/appfunctions/AppFunctionConfiguration "View this page in Kotlin")
|Java

```
public final class AppFunctionConfiguration
```

---

The configuration object used to customize AppFunction setup.

## Summary

| Nested types |
| --- |
| `public final class AppFunctionConfiguration.Builder`  A builder for `AppFunctionConfiguration`. |
| `public interface AppFunctionConfiguration.Provider`  A class to provide customized `AppFunctionConfiguration` object. |

| Public methods |
| --- |
| `final @NonNull Map<@NonNull Class<@NonNull ?>, @NonNull Function0<@NonNull Object>>` | `getEnclosingClassFactories()`  A map of factories used to construct the enclosing classes of AppFunctions. |

## Public methods

### getEnclosingClassFactories

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final @NonNull Map<@NonNull Class<@NonNull ?>, @NonNull Function0<@NonNull Object>> getEnclosingClassFactories()
```

A map of factories used to construct the enclosing classes of AppFunctions.

The keys in this map are the enclosing classes of the AppFunctions to be constructed, and the values are the corresponding factory. If not provided in the map, the default no-argument constructors will be used to construct the classes.
