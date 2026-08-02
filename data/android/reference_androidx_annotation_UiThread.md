# UiThread

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/annotation/UiThread))

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/UiThread.kt+class:androidx.annotation.UiThread)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/UiThread "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.CONSTRUCTOR, AnnotationTarget.ANNOTATION_CLASS, AnnotationTarget.CLASS, AnnotationTarget.VALUE_PARAMETER])  
public annotation UiThread
```

---

Denotes that the annotated method or constructor should only be called on the UI thread. If the annotated element is a class, then all methods in the class should be called on the UI thread.

Example:

```
@UiThread  
public abstract void setText(@NonNull String text) { ... }
```

**Note:** Ordinarily, an app's UI thread is also the main thread. However, under special circumstances, an app's UI thread might not be its main thread; for more information, see [Thread annotations](https://developer.android.com/studio/write/annotations#thread-annotations).

| See also |
| --- |
| `MainThread` |  |

## Summary

| Public constructors |
| --- |
| `UiThread()` |

## Public constructors

### UiThread

```
public UiThread()
```
