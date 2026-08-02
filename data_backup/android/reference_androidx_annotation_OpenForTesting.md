--- source: https://developer.android.com/reference/androidx/annotation/OpenForTesting ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# OpenForTesting

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/OpenForTesting.kt+class:androidx.annotation.OpenForTesting)

Added in [1.4.0](/jetpack/androidx/releases/annotation#1.4.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/OpenForTesting "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.CLASS])  
public annotation OpenForTesting
```

---

Denotes that this class or method is only `open` to allow unit testing. Any subclass or override is only allowed from tests.

## Summary

| Public constructors |
| --- |
| `OpenForTesting()` |

## Public constructors

### OpenForTesting

```
public OpenForTesting()
```