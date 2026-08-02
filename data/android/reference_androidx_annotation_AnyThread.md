# AnyThread

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/annotation/AnyThread))

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/AnyThread.kt+class:androidx.annotation.AnyThread)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/AnyThread "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.CONSTRUCTOR, AnnotationTarget.ANNOTATION_CLASS, AnnotationTarget.CLASS, AnnotationTarget.VALUE_PARAMETER])  
public annotation AnyThread
```

---

Denotes that the annotated method can be called from any thread (e.g. it is "thread safe".) If the annotated element is a class, then all methods in the class can be called from any thread.

The main purpose of this method is to indicate that you believe a method can be called from any thread; static tools can then check that nothing you call from within this method or class have more strict threading requirements.

Example:

```
@AnyThread  
public void deliverResult(D data) { ... }
```

## Summary

| Public constructors |
| --- |
| `AnyThread()` |

## Public constructors

### AnyThread

```
public AnyThread()
```
