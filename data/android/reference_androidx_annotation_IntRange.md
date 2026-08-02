# IntRange

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/annotation/IntRange))

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/IntRange.kt+class:androidx.annotation.IntRange)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/IntRange "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.VALUE_PARAMETER, AnnotationTarget.FIELD, AnnotationTarget.LOCAL_VARIABLE, AnnotationTarget.ANNOTATION_CLASS])  
public annotation IntRange
```

---

Denotes that the annotated element should be an int or long in the given range.

Example:

```
@IntRange(from=0,to=255)  
public int getAlpha() {  
    ...  
}
```

## Summary

| Public constructors |
| --- |
| `IntRange(long from, long to)` |

| Public methods |
| --- |
| `final long` | `getFrom()`  Smallest value, inclusive |
| `final long` | `getTo()`  Largest value, inclusive |

## Public constructors

### IntRange

Added in [1.10.0](/jetpack/androidx/releases/annotation#1.10.0)

```
public IntRange(long from, long to)
```

## Public methods

### getFrom

```
public final long getFrom()
```

Smallest value, inclusive

### getTo

```
public final long getTo()
```

Largest value, inclusive
