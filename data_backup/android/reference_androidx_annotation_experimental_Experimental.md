--- source: https://developer.android.com/reference/androidx/annotation/experimental/Experimental ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# Experimental

Artifact: [androidx.annotation:annotation-experimental](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/experimental/Experimental.kt+class:androidx.annotation.experimental.Experimental)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/annotation#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/experimental/Experimental "View this page in Kotlin")
|Java

```
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.ANNOTATION_CLASS])  
public annotation Experimental
```

---

**This annotation is deprecated.**  
This annotation has been replaced by `@RequiresOptIn`

Denotes that the annotated element is a marker of an experimental API.

Any declaration annotated with this marker is considered part of an unstable API surface and its call sites should accept the experimental aspect of it either by using `UseExperimental`, or by being annotated with that marker themselves, effectively causing further propagation of that experimental aspect.

## Summary

| Nested types |
| --- |
| `public enum Experimental.Level extends Enum`  **This enum is deprecated.** This annotation has been replaced by `@RequiresOptIn` |

| Public constructors |
| --- |
| `Experimental(@NonNull Experimental.Level level)`  **This method is deprecated.** This annotation has been replaced by `@RequiresOptIn` |

| Public methods |
| --- |
| `final @NonNull Experimental.Level` | `getLevel()`  **This method is deprecated.** This annotation has been replaced by `@RequiresOptIn` |

## Public constructors

### Experimental

Added in [1.6.0](/jetpack/androidx/releases/annotation#1.6.0)

Deprecated in [1.6.0](/jetpack/androidx/releases/annotation#1.6.0)

```
public Experimental(@NonNull Experimental.Level level)
```

**This method is deprecated.**  
This annotation has been replaced by `@RequiresOptIn`

## Public methods

### getLevel

```
public final @NonNull Experimental.Level getLevel()
```

**This method is deprecated.**  
This annotation has been replaced by `@RequiresOptIn`

Defines the reporting level for incorrect usages of this experimental API.