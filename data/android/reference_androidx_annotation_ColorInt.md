# ColorInt

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/annotation/ColorInt))

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/ColorInt.kt+class:androidx.annotation.ColorInt)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/ColorInt "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.VALUE_PARAMETER, AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.LOCAL_VARIABLE, AnnotationTarget.FIELD])  
public annotation ColorInt
```

---

Denotes that the annotated element represents a packed color int, `AARRGGBB`. If applied to an int array, every element in the array represents a color integer.

Example:

```
public abstract void setTextColor(@ColorInt int color)
```

## Summary

| Public constructors |
| --- |
| `ColorInt()` |

## Public constructors

### ColorInt

```
public ColorInt()
```
