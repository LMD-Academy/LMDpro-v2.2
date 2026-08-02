--- source: https://developer.android.com/reference/androidx/annotation/ColorLong ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ColorLong

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/ColorLong.kt+class:androidx.annotation.ColorLong)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/ColorLong "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.SOURCE)  
@Target(allowedTargets = [AnnotationTarget.VALUE_PARAMETER, AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.LOCAL_VARIABLE, AnnotationTarget.FIELD])  
public annotation ColorLong
```

---

Denotes that the annotated element represents a packed color long. If applied to a long array, every element in the array represents a color long. For more information on how colors are packed in a long, please refer to the documentation of the android.graphics.Color class.

Example:

```
public void setFillColor(@ColorLong long color);
```

| See also |
| --- |
| `Color` |  |

## Summary

| Public constructors |
| --- |
| `ColorLong()` |

## Public constructors

### ColorLong

```
public ColorLong()
```