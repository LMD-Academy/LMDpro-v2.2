# NonNull

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/annotation/NonNull))

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/NonNull.jvm.kt+class:androidx.annotation.NonNull)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/NonNull "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.VALUE_PARAMETER, AnnotationTarget.FIELD, AnnotationTarget.LOCAL_VARIABLE, AnnotationTarget.ANNOTATION_CLASS, AnnotationTarget.FILE])  
@Target(value = [ElementType.METHOD, ElementType.PARAMETER, ElementType.FIELD, ElementType.LOCAL_VARIABLE, ElementType.ANNOTATION_TYPE, ElementType.PACKAGE])  
public annotation NonNull
```

---

Denotes that a parameter, field or method return value can never be null.

This is a marker annotation and it has no specific attributes.

## Summary

| Public constructors |
| --- |
| `NonNull()` |

## Public constructors

### NonNull

```
public NonNull()
```
