--- source: https://developer.android.com/reference/androidx/annotation/ArrayRes ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ArrayRes

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/ArrayRes.jvm.kt+class:androidx.annotation.ArrayRes)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/ArrayRes "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.VALUE_PARAMETER, AnnotationTarget.FIELD, AnnotationTarget.LOCAL_VARIABLE])  
public annotation ArrayRes
```

---

Denotes that an integer parameter, field or method return value is expected to be an array resource reference (e.g. `android.R.array.phoneTypes`).

## Summary

| Public constructors |
| --- |
| `ArrayRes()` |

## Public constructors

### ArrayRes

```
public ArrayRes()
```