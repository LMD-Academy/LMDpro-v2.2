--- source: https://developer.android.com/reference/androidx/annotation/ReturnThis ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ReturnThis

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/ReturnThis.kt+class:androidx.annotation.ReturnThis)

Added in [1.4.0](/jetpack/androidx/releases/annotation#1.4.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/ReturnThis "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.FUNCTION, AnnotationTarget.CLASS])  
public annotation ReturnThis
```

---

Denotes that any overriding methods should `return this`.

## Summary

| Public constructors |
| --- |
| `ReturnThis()` |

## Public constructors

### ReturnThis

```
public ReturnThis()
```