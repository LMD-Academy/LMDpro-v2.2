# Keep

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/annotation/Keep))

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/Keep.jvm.kt+class:androidx.annotation.Keep)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/Keep "View this page in Kotlin")
|Java

```
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.FILE, AnnotationTarget.ANNOTATION_CLASS, AnnotationTarget.CLASS, AnnotationTarget.ANNOTATION_CLASS, AnnotationTarget.CONSTRUCTOR, AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.FIELD])  
@Target(value = [ElementType.PACKAGE, ElementType.TYPE, ElementType.ANNOTATION_TYPE, ElementType.CONSTRUCTOR, ElementType.METHOD, ElementType.FIELD])  
public annotation Keep
```

---

Denotes that the annotated element should not be removed when the code is minified at build time. This is typically used on methods and classes that are accessed only via reflection so a compiler may think that the code is unused.

Do not use this within library code. As a best practice, minification should be able to remove all library code for libraries that are added as dependencies but not used. For library code, consider instead using conditional keep rules. E.g.: -if ... -keep ...

Example:

```
@Keep  
public void foo() {  
    ...  
}
```

## Summary

| Public constructors |
| --- |
| `Keep()` |

## Public constructors

### Keep

```
public Keep()
```
