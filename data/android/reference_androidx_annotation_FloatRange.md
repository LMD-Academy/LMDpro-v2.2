# FloatRange

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/annotation/FloatRange))

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/FloatRange.kt+class:androidx.annotation.FloatRange)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/FloatRange "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.VALUE_PARAMETER, AnnotationTarget.FIELD, AnnotationTarget.LOCAL_VARIABLE, AnnotationTarget.ANNOTATION_CLASS])  
public annotation FloatRange
```

---

Denotes that the annotated element should be a float or double in the given range

Example:

```
@FloatRange(from=0.0,to=1.0)  
public float getAlpha() {  
    ...  
}
```

## Summary

| Public constructors |
| --- |
| `FloatRange(     double from,     double to,     boolean fromInclusive,     boolean toInclusive )` |

| Public methods |
| --- |
| `final double` | `getFrom()`  Smallest value. |
| `final boolean` | `getFromInclusive()`  Whether the from value is included in the range |
| `final double` | `getTo()`  Largest value. |
| `final boolean` | `getToInclusive()`  Whether the to value is included in the range |

## Public constructors

### FloatRange

Added in [1.10.0](/jetpack/androidx/releases/annotation#1.10.0)

```
public FloatRange(  
    double from,  
    double to,  
    boolean fromInclusive,  
    boolean toInclusive  
)
```

## Public methods

### getFrom

```
public final double getFrom()
```

Smallest value. Whether it is inclusive or not is determined by .fromInclusive

### getFromInclusive

```
public final boolean getFromInclusive()
```

Whether the from value is included in the range

### getTo

```
public final double getTo()
```

Largest value. Whether it is inclusive or not is determined by .toInclusive

### getToInclusive

```
public final boolean getToInclusive()
```

Whether the to value is included in the range
