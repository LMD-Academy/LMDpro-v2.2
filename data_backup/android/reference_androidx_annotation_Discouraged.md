--- source: https://developer.android.com/reference/androidx/annotation/Discouraged ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# Discouraged

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/Discouraged.kt+class:androidx.annotation.Discouraged)

Added in [1.3.0](/jetpack/androidx/releases/annotation#1.3.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/Discouraged "View this page in Kotlin")
|Java

```
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.CONSTRUCTOR, AnnotationTarget.FIELD, AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.VALUE_PARAMETER, AnnotationTarget.ANNOTATION_CLASS, AnnotationTarget.CLASS])  
public annotation Discouraged
```

---

Denotes that the annotated element, while not disallowed or deprecated, is one that programmers are generally discouraged from using.

Example:

```
@Discouraged(message = "It is much more efficient to retrieve "  
                       + "resources by identifier than by name.")  
public void getValue(String name) {  
    ...  
}
```

## Summary

| Public constructors |
| --- |
| `Discouraged(@NonNull String message)` |

| Public methods |
| --- |
| `final @NonNull String` | `getMessage()`  Defines the message to display when an element marked with this annotation is used. |

## Public constructors

### Discouraged

Added in [1.10.0](/jetpack/androidx/releases/annotation#1.10.0)

```
public Discouraged(@NonNull String message)
```

## Public methods

### getMessage

```
public final @NonNull String getMessage()
```

Defines the message to display when an element marked with this annotation is used. An alternative should be provided in the message.