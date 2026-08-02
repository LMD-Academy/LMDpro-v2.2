--- source: https://developer.android.com/reference/androidx/annotation/IntegerRes ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# IntegerRes

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/IntegerRes.jvm.kt+class:androidx.annotation.IntegerRes)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/IntegerRes "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.VALUE_PARAMETER, AnnotationTarget.FIELD, AnnotationTarget.LOCAL_VARIABLE])  
public annotation IntegerRes
```

---

Denotes that an integer parameter, field or method return value is expected to be an integer resource reference (e.g. `android.R.integer.config_shortAnimTime`).

## Summary

| Public constructors |
| --- |
| `IntegerRes()` |

## Public constructors

### IntegerRes

```
public IntegerRes()
```