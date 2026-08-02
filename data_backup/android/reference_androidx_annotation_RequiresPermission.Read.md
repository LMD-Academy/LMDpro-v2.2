--- source: https://developer.android.com/reference/androidx/annotation/RequiresPermission.Read ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# RequiresPermission.Read

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/RequiresPermission.jvm.kt+class:androidx.annotation.RequiresPermission.Read)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/RequiresPermission.Read "View this page in Kotlin")
|Java

```
@Target(allowedTargets = [AnnotationTarget.FIELD, AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.VALUE_PARAMETER])  
public annotation RequiresPermission.Read
```

---

Specifies that the given permission is required for read operations.

When specified on a parameter, the annotation indicates that the method requires a permission which depends on the value of the parameter (and typically the corresponding field passed in will be one of a set of constants which have been annotated with a `@RequiresPermission` annotation.)

## Summary

| Public constructors |
| --- |
| `Read(@NonNull RequiresPermission value)` |

| Public methods |
| --- |
| `final @NonNull RequiresPermission` | `getValue()` |

## Public constructors

### Read

Added in [1.10.0](/jetpack/androidx/releases/annotation#1.10.0)

```
public Read(@NonNull RequiresPermission value)
```

## Public methods

### getValue

```
public final @NonNull RequiresPermission getValue()
```