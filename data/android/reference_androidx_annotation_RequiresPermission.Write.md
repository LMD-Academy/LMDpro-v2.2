# RequiresPermission.Write

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/annotation/RequiresPermission.Write))

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/RequiresPermission.jvm.kt+class:androidx.annotation.RequiresPermission.Write)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/RequiresPermission.Write "View this page in Kotlin")
|Java

```
@Target(allowedTargets = [AnnotationTarget.FIELD, AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.VALUE_PARAMETER])  
public annotation RequiresPermission.Write
```

---

Specifies that the given permission is required for write operations.

When specified on a parameter, the annotation indicates that the method requires a permission which depends on the value of the parameter (and typically the corresponding field passed in will be one of a set of constants which have been annotated with a `@RequiresPermission` annotation.)

## Summary

| Public constructors |
| --- |
| `Write(@NonNull RequiresPermission value)` |

| Public methods |
| --- |
| `final @NonNull RequiresPermission` | `getValue()` |

## Public constructors

### Write

Added in [1.10.0](/jetpack/androidx/releases/annotation#1.10.0)

```
public Write(@NonNull RequiresPermission value)
```

## Public methods

### getValue

```
public final @NonNull RequiresPermission getValue()
```
