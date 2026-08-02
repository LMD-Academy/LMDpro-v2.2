--- source: https://developer.android.com/reference/androidx/annotation/experimental/UseExperimental ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# UseExperimental

Artifact: [androidx.annotation:annotation-experimental](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/experimental/UseExperimental.kt+class:androidx.annotation.experimental.UseExperimental)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/annotation#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/experimental/UseExperimental "View this page in Kotlin")
|Java

```
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.CLASS, AnnotationTarget.PROPERTY, AnnotationTarget.LOCAL_VARIABLE, AnnotationTarget.VALUE_PARAMETER, AnnotationTarget.CONSTRUCTOR, AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.FILE, AnnotationTarget.TYPEALIAS])  
public annotation UseExperimental
```

---

**This annotation is deprecated.**  
This annotation has been replaced by `@OptIn`

Allows use of an experimental API denoted by the given markers in the annotated file, declaration, or expression. If a declaration is annotated with `UseExperimental`, its usages are **not** required to opt-in to that experimental API.

## Summary

| Public constructors |
| --- |
| `UseExperimental(@NonNull KClass<@NonNull Annotation>... markerClass)`  **This method is deprecated.** This annotation has been replaced by `@OptIn` |

| Public methods |
| --- |
| `final @NonNull KClass[]` | `getMarkerClass()`  **This method is deprecated.** This annotation has been replaced by `@OptIn` |

## Public constructors

### UseExperimental

Added in [1.6.0](/jetpack/androidx/releases/annotation#1.6.0)

Deprecated in [1.6.0](/jetpack/androidx/releases/annotation#1.6.0)

```
public UseExperimental(@NonNull KClass<@NonNull Annotation>... markerClass)
```

**This method is deprecated.**  
This annotation has been replaced by `@OptIn`

## Public methods

### getMarkerClass

```
public final @NonNull KClass[] getMarkerClass()
```

**This method is deprecated.**  
This annotation has been replaced by `@OptIn`

Defines the experimental API(s) whose usage this annotation allows.