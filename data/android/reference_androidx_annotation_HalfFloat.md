# HalfFloat

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/annotation/HalfFloat))

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/HalfFloat.jvm.kt+class:androidx.annotation.HalfFloat)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/HalfFloat "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.SOURCE)  
@Target(allowedTargets = [AnnotationTarget.VALUE_PARAMETER, AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.LOCAL_VARIABLE, AnnotationTarget.FIELD])  
public annotation HalfFloat
```

---

Denotes that the annotated element represents a half-precision floating point value. Such values are stored in short data types and can be manipulated with the `android.util.Half` class. If applied to an array of short, every element in the array represents a half-precision float.

Example:

```
public abstract void setPosition(@HalfFloat short x, @HalfFloat short y, @HalfFloat short z);
```

## Summary

| Public constructors |
| --- |
| `HalfFloat()` |

## Public constructors

### HalfFloat

```
public HalfFloat()
```
