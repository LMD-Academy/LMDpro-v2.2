--- source: https://developer.android.com/reference/androidx/annotation/Size ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# Size

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/Size.kt+class:androidx.annotation.Size)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/Size "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.VALUE_PARAMETER, AnnotationTarget.LOCAL_VARIABLE, AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.FIELD, AnnotationTarget.ANNOTATION_CLASS])  
public annotation Size
```

---

Denotes that the annotated element should have a given size or length. Note that "-1" means "unset". Typically used with a parameter or return value of type array or collection.

Example:

```
public void getLocationInWindow(@Size(2) int[] location) {  
    ...  
}
```

## Summary

| Public constructors |
| --- |
| `Size(long value, long min, long max, long multiple)` |

| Public methods |
| --- |
| `final long` | `getMax()`  A maximum size, inclusive |
| `final long` | `getMin()`  A minimum size, inclusive |
| `final long` | `getMultiple()`  The size must be a multiple of this factor |
| `final long` | `getValue()`  An exact size (or -1 if not specified) |

## Public constructors

### Size

Added in [1.10.0](/jetpack/androidx/releases/annotation#1.10.0)

```
public Size(long value, long min, long max, long multiple)
```

## Public methods

### getMax

```
public final long getMax()
```

A maximum size, inclusive

### getMin

```
public final long getMin()
```

A minimum size, inclusive

### getMultiple

```
public final long getMultiple()
```

The size must be a multiple of this factor

### getValue

```
public final long getValue()
```

An exact size (or -1 if not specified)