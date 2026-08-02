--- source: https://developer.android.com/reference/androidx/annotation/OptIn ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# OptIn

Artifact: [androidx.annotation:annotation-experimental](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/OptIn.kt+class:androidx.annotation.OptIn)

Added in [1.1.0](/jetpack/androidx/releases/annotation#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/OptIn "View this page in Kotlin")
|Java

```
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.CLASS, AnnotationTarget.PROPERTY, AnnotationTarget.LOCAL_VARIABLE, AnnotationTarget.VALUE_PARAMETER, AnnotationTarget.CONSTRUCTOR, AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.FILE, AnnotationTarget.TYPEALIAS])  
@Target(value = [ElementType.CONSTRUCTOR, ElementType.FIELD, ElementType.LOCAL_VARIABLE, ElementType.METHOD, ElementType.PACKAGE, ElementType.TYPE, ElementType.PARAMETER])  
public annotation OptIn
```

---

Allows use of an opt-in API denoted by the given markers in the annotated file, declaration, or expression. If a declaration is annotated with `OptIn`, its usages are **not** required to opt-in to that API.

## Summary

| Public constructors |
| --- |
| `OptIn(@NonNull KClass<@NonNull Annotation>... markerClass)` |

| Public methods |
| --- |
| `final @NonNull KClass[]` | `getMarkerClass()`  Defines the opt-in API(s) whose usage this annotation allows. |

## Public constructors

### OptIn

Added in [1.6.0](/jetpack/androidx/releases/annotation#1.6.0)

```
public OptIn(@NonNull KClass<@NonNull Annotation>... markerClass)
```

## Public methods

### getMarkerClass

```
public final @NonNull KClass[] getMarkerClass()
```

Defines the opt-in API(s) whose usage this annotation allows.