--- source: https://developer.android.com/reference/androidx/annotation/VisibleForTesting ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# VisibleForTesting

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/VisibleForTesting.kt+class:androidx.annotation.VisibleForTesting)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/VisibleForTesting "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
public annotation VisibleForTesting
```

---

Denotes that the class, method, or field has its visibility relaxed so that it is more widely visible than otherwise necessary to make code testable.

You can optionally specify what the visibility *should* have been if not for testing; this allows tools to catch unintended access from within production code.

Example:

```
@VisibleForTesting(otherwise = VisibleForTesting.PROTECTED)  
public String printDiagnostics() { ... }
```

If not specified, the intended visibility is assumed to be `private`.

## Summary

| Constants |
| --- |
| `static final int` | `NONE = 5`  The annotated element should never be called from production code, only from tests. |
| `static final int` | `PACKAGE_PRIVATE = 3`  The annotated element would have `package private` visibility. |
| `static final int` | `PRIVATE = 2`  The annotated element would have `private` visibility. |
| `static final int` | `PROTECTED = 4`  The annotated element would have `protected` visibility. |

| Public constructors |
| --- |
| `VisibleForTesting(int otherwise)` |

| Public methods |
| --- |
| `final int` | `getOtherwise()`  The visibility the annotated element would have if it did not need to be made visible for testing. |

## Constants

### NONE

Added in [1.5.0](/jetpack/androidx/releases/annotation#1.5.0)

```
public static final int NONE = 5
```

The annotated element should never be called from production code, only from tests.

This is equivalent to `RestrictTo.Scope.TESTS`.

### PACKAGE\_PRIVATE

Added in [1.5.0](/jetpack/androidx/releases/annotation#1.5.0)

```
public static final int PACKAGE_PRIVATE = 3
```

The annotated element would have `package private` visibility.

### PRIVATE

Added in [1.5.0](/jetpack/androidx/releases/annotation#1.5.0)

```
public static final int PRIVATE = 2
```

The annotated element would have `private` visibility.

### PROTECTED

Added in [1.5.0](/jetpack/androidx/releases/annotation#1.5.0)

```
public static final int PROTECTED = 4
```

The annotated element would have `protected` visibility.

## Public constructors

### VisibleForTesting

Added in [1.10.0](/jetpack/androidx/releases/annotation#1.10.0)

```
public VisibleForTesting(int otherwise)
```

## Public methods

### getOtherwise

```
public final int getOtherwise()
```

The visibility the annotated element would have if it did not need to be made visible for testing.