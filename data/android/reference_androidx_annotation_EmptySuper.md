# EmptySuper

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/annotation/EmptySuper))

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/EmptySuper.kt+class:androidx.annotation.EmptySuper)

Added in [1.4.0](/jetpack/androidx/releases/annotation#1.4.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/EmptySuper "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.FUNCTION])  
public annotation EmptySuper
```

---

Denotes that any overriding methods should **not** invoke this method, since it is defined to be empty (or perhaps contain other code not intended to be run when overridden).

Example:

```
@EmptySuper  
public void onFocus() { }
```

## Summary

| Public constructors |
| --- |
| `EmptySuper()` |

## Public constructors

### EmptySuper

```
public EmptySuper()
```
