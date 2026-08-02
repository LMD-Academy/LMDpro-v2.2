# RequiresFlag

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/annotation/RequiresFlag))

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/RequiresFlag.jvm.kt+class:androidx.annotation.RequiresFlag)

Added in [1.10.0](/jetpack/androidx/releases/annotation#1.10.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/RequiresFlag "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.ANNOTATION_CLASS, AnnotationTarget.CLASS, AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.CONSTRUCTOR, AnnotationTarget.FIELD, AnnotationTarget.FILE])  
public annotation RequiresFlag
```

---

Indicates an API is part of a feature that is guarded by an aconfig flag, and only available if the flag is enabled.

Unless the API has been finalized and has become part of the SDK, callers of the annotated API must check that the flag is enabled before making any assumptions about the existence of the API.

## Summary

| Public constructors |
| --- |
| `RequiresFlag(@NonNull String value)` |

| Public methods |
| --- |
| `final @NonNull String` | `getValue()`  The string value for the aconfig flag used to guard the feature this API is part of, for example `"android.os.flags.my_feature"`. |

## Public constructors

### RequiresFlag

Added in [1.10.0](/jetpack/androidx/releases/annotation#1.10.0)

```
public RequiresFlag(@NonNull String value)
```

## Public methods

### getValue

```
public final @NonNull String getValue()
```

The string value for the aconfig flag used to guard the feature this API is part of, for example `"android.os.flags.my_feature"`.
