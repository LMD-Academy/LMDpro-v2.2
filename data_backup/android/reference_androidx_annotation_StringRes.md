--- source: https://developer.android.com/reference/androidx/annotation/StringRes ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# StringRes

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/StringRes.jvm.kt+class:androidx.annotation.StringRes)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/StringRes "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.VALUE_PARAMETER, AnnotationTarget.FIELD, AnnotationTarget.LOCAL_VARIABLE])  
public annotation StringRes
```

---

Denotes that an integer parameter, field or method return value is expected to be a String resource reference (e.g. `android.R.string.ok`).

## Summary

| Public constructors |
| --- |
| `StringRes()` |

## Public constructors

### StringRes

```
public StringRes()
```