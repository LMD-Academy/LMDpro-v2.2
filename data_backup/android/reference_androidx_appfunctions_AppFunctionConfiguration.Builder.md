--- source: https://developer.android.com/reference/androidx/appfunctions/AppFunctionConfiguration.Builder ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# AppFunctionConfiguration.Builder

Artifact: [androidx.appfunctions:appfunctions](/jetpack/androidx/releases/appfunctions)

[View Source](https://cs.android.com/search?q=file:androidx/appfunctions/AppFunctionConfiguration.kt+class:androidx.appfunctions.AppFunctionConfiguration.Builder)

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

---

[Kotlin](/reference/kotlin/androidx/appfunctions/AppFunctionConfiguration.Builder "View this page in Kotlin")
|Java

```
public final class AppFunctionConfiguration.Builder
```

---

A builder for `AppFunctionConfiguration`.

## Summary

| Public constructors |
| --- |
| `Builder()` |

| Public methods |
| --- |
| `final @NonNull AppFunctionConfiguration.Builder` | `<T extends Object> addEnclosingClassFactory(     @NonNull Class<@NonNull T> enclosingClass,     @NonNull Function0<@NonNull T> factory )`  Adds a `factory` for creating an `enclosingClass`. |
| `final @NonNull AppFunctionConfiguration` | `build()`  Builds the `AppFunctionConfiguration`. |

## Public constructors

### Builder

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public Builder()
```

## Public methods

### addEnclosingClassFactory

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final @NonNull AppFunctionConfiguration.Builder <T extends Object> addEnclosingClassFactory(  
    @NonNull Class<@NonNull T> enclosingClass,  
    @NonNull Function0<@NonNull T> factory  
)
```

Adds a `factory` for creating an `enclosingClass`.

If there is already a factory instance set for `enclosingClass`, it will be overridden.

| Parameters |
| --- |
| `@NonNull Class<@NonNull T> enclosingClass` | The `Class` object representing the enclosing class to be instantiated. |
| `@NonNull Function0<@NonNull T> factory` | The factory to create the instance of `enclosingClass`. This is called by the AppFunctions framework to instantiate the class whenever an instance of `enclosingClass` is needed. |

| See also |
| --- |
| `AppFunction` |  |

### build

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final @NonNull AppFunctionConfiguration build()
```

Builds the `AppFunctionConfiguration`.