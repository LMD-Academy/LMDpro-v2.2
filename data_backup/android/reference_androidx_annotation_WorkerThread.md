--- source: https://developer.android.com/reference/androidx/annotation/WorkerThread ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# WorkerThread

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/WorkerThread.jvm.kt+class:androidx.annotation.WorkerThread)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/WorkerThread "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.CONSTRUCTOR, AnnotationTarget.ANNOTATION_CLASS, AnnotationTarget.CLASS, AnnotationTarget.VALUE_PARAMETER])  
public annotation WorkerThread
```

---

Denotes that the annotated method should only be called on a worker thread. If the annotated element is a class, then all methods in the class should be called on a worker thread.

Example:

```
@WorkerThread  
protected abstract FilterResults performFiltering(CharSequence constraint);
```

## Summary

| Public constructors |
| --- |
| `WorkerThread()` |

## Public constructors

### WorkerThread

```
public WorkerThread()
```