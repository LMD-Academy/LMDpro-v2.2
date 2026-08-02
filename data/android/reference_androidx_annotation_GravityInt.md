# GravityInt

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/annotation/GravityInt))

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/GravityInt.jvm.kt+class:androidx.annotation.GravityInt)

Added in [1.3.0](/jetpack/androidx/releases/annotation#1.3.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/GravityInt "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.VALUE_PARAMETER, AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.LOCAL_VARIABLE, AnnotationTarget.FIELD])  
public annotation GravityInt
```

---

Denotes that the annotated element represents a packed gravity int. If applied to an int array, every element in the array represents a gravity int.

Example:

```
public abstract void setInnerGravity(@GravityInt int gravity);
```

| See also |
| --- |
| `Gravity` |  |

## Summary

| Public constructors |
| --- |
| `GravityInt()` |

## Public constructors

### GravityInt

```
public GravityInt()
```
