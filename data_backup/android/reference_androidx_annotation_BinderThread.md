--- source: https://developer.android.com/reference/androidx/annotation/BinderThread ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# BinderThread

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/BinderThread.jvm.kt+class:androidx.annotation.BinderThread)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/BinderThread "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.CONSTRUCTOR, AnnotationTarget.ANNOTATION_CLASS, AnnotationTarget.CLASS, AnnotationTarget.VALUE_PARAMETER])  
public annotation BinderThread
```

---

Denotes that the annotated method should only be called on the binder thread. If the annotated element is a class, then all methods in the class should be called on the binder thread.

Example:

```
@BinderThread  
public BeamShareData createBeamShareData() { ... }
```

## Summary

| Public constructors |
| --- |
| `BinderThread()` |

## Public constructors

### BinderThread

```
public BinderThread()
```