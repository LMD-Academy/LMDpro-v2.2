--- source: https://developer.android.com/reference/androidx/annotation/DoNotInline ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# DoNotInline

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/DoNotInline.jvm.kt+class:androidx.annotation.DoNotInline)

Added in [1.2.0](/jetpack/androidx/releases/annotation#1.2.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/DoNotInline "View this page in Kotlin")
|Java

```
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.FIELD])  
public annotation DoNotInline
```

---

Denotes that the annotated method should not be inlined when the code is optimized at build time. This is typically used to avoid inlining purposely out-of-line methods that are intended to be in separate classes.

Example:

```
@DoNotInline  
public void foo() {  
    ...  
}
```

## Summary

| Public constructors |
| --- |
| `DoNotInline()` |

## Public constructors

### DoNotInline

```
public DoNotInline()
```