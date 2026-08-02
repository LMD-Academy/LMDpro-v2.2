--- source: https://developer.android.com/reference/androidx/annotation/Dimension ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# Dimension

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/Dimension.jvm.kt+class:androidx.annotation.Dimension)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/Dimension "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.VALUE_PARAMETER, AnnotationTarget.FIELD, AnnotationTarget.LOCAL_VARIABLE, AnnotationTarget.ANNOTATION_CLASS])  
public annotation Dimension
```

---

Denotes that an integer parameter, field or method return value is expected to represent a dimension.

## Summary

| Constants |
| --- |
| `static final int` | `DP = 0` |
| `static final int` | `PX = 1` |
| `static final int` | `SP = 2` |

| Public constructors |
| --- |
| `Dimension(int unit)` |

| Public methods |
| --- |
| `final int` | `getUnit()` |

## Constants

### DP

Added in [1.5.0](/jetpack/androidx/releases/annotation#1.5.0)

```
public static final int DP = 0
```

### PX

Added in [1.5.0](/jetpack/androidx/releases/annotation#1.5.0)

```
public static final int PX = 1
```

### SP

Added in [1.5.0](/jetpack/androidx/releases/annotation#1.5.0)

```
public static final int SP = 2
```

## Public constructors

### Dimension

Added in [1.10.0](/jetpack/androidx/releases/annotation#1.10.0)

```
public Dimension(int unit)
```

## Public methods

### getUnit

```
public final int getUnit()
```