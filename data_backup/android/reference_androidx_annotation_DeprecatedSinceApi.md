--- source: https://developer.android.com/reference/androidx/annotation/DeprecatedSinceApi ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# DeprecatedSinceApi

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/DeprecatedSinceApi.jvm.kt+class:androidx.annotation.DeprecatedSinceApi)

Added in [1.4.0](/jetpack/androidx/releases/annotation#1.4.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/DeprecatedSinceApi "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.ANNOTATION_CLASS, AnnotationTarget.CLASS, AnnotationTarget.CONSTRUCTOR])  
public annotation DeprecatedSinceApi
```

---

Denotes that this API is only useful until the given API level; after that, a more suitable platform API is available.

## Summary

| Public constructors |
| --- |
| `DeprecatedSinceApi(int api, @NonNull String message)` |

| Public methods |
| --- |
| `final int` | `getApi()`  The API level where it is deprecated. |
| `final @NonNull String` | `getMessage()`  Suggested replacement. |

## Public constructors

### DeprecatedSinceApi

Added in [1.10.0](/jetpack/androidx/releases/annotation#1.10.0)

```
public DeprecatedSinceApi(int api, @NonNull String message)
```

## Public methods

### getApi

```
public final int getApi()
```

The API level where it is deprecated.

### getMessage

```
public final @NonNull String getMessage()
```

Suggested replacement.