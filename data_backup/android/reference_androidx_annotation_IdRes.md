--- source: https://developer.android.com/reference/androidx/annotation/IdRes ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# IdRes

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/IdRes.jvm.kt+class:androidx.annotation.IdRes)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/IdRes "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.VALUE_PARAMETER, AnnotationTarget.FIELD, AnnotationTarget.LOCAL_VARIABLE])  
public annotation IdRes
```

---

Denotes that an integer parameter, field or method return value is expected to be an id resource reference (e.g. `android.R.id.copy`).

## Summary

| Public constructors |
| --- |
| `IdRes()` |

## Public constructors

### IdRes

```
public IdRes()
```