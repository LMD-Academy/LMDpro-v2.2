--- source: https://developer.android.com/reference/androidx/annotation/AnyRes ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# AnyRes

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/AnyRes.jvm.kt+class:androidx.annotation.AnyRes)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/AnyRes "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.VALUE_PARAMETER, AnnotationTarget.FIELD, AnnotationTarget.LOCAL_VARIABLE])  
public annotation AnyRes
```

---

Denotes that an integer parameter, field or method return value is expected to be a resource reference of any type. If the specific type is known, use one of the more specific annotations instead, such as `StringRes` or `DrawableRes`.

## Summary

| Public constructors |
| --- |
| `AnyRes()` |

## Public constructors

### AnyRes

```
public AnyRes()
```