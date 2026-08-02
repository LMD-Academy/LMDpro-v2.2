--- source: https://developer.android.com/reference/androidx/annotation/CallSuper ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# CallSuper

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/CallSuper.kt+class:androidx.annotation.CallSuper)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/CallSuper "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER])  
public annotation CallSuper
```

---

Denotes that any overriding methods should invoke this method as well.

Example:

```
@CallSuper  
public abstract void onFocusLost();
```

## Summary

| Public constructors |
| --- |
| `CallSuper()` |

## Public constructors

### CallSuper

```
public CallSuper()
```