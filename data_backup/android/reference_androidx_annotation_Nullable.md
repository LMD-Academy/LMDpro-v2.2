--- source: https://developer.android.com/reference/androidx/annotation/Nullable ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# Nullable

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/Nullable.jvm.kt+class:androidx.annotation.Nullable)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/Nullable "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.VALUE_PARAMETER, AnnotationTarget.FIELD, AnnotationTarget.LOCAL_VARIABLE, AnnotationTarget.ANNOTATION_CLASS, AnnotationTarget.FILE])  
@Target(value = [ElementType.METHOD, ElementType.PARAMETER, ElementType.FIELD, ElementType.LOCAL_VARIABLE, ElementType.ANNOTATION_TYPE, ElementType.PACKAGE])  
public annotation Nullable
```

---

Denotes that a parameter, field or method return value can be null.

When decorating a method call parameter, this denotes that the parameter can legitimately be null and the method will gracefully deal with it. Typically used on optional parameters.

When decorating a method, this denotes the method might legitimately return null.

This is a marker annotation and it has no specific attributes.

## Summary

| Public constructors |
| --- |
| `Nullable()` |

## Public constructors

### Nullable

```
public Nullable()
```