# RestrictTo

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/annotation/RestrictTo))

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/RestrictTo.+class:androidx.annotation.RestrictTo)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/RestrictTo "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.ANNOTATION_CLASS, AnnotationTarget.CLASS, AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.CONSTRUCTOR, AnnotationTarget.FIELD, AnnotationTarget.FILE])  
public annotation RestrictTo
```

---

Denotes that the annotated element should only be accessed from within a specific scope (as defined by `Scope`).

Example of restricting usage within a library (based on Gradle group ID):

```
@RestrictTo(GROUP_ID)  
public void resetPaddingToInitialValues() { ...
```

Example of restricting usage to tests:

```
@RestrictTo(Scope.TESTS)  
public abstract int getUserId();
```

Example of restricting usage to subclasses:

```
@RestrictTo(Scope.SUBCLASSES)  
public void onDrawForeground(Canvas canvas) { ...
```

Note, this enforcement is done via Android Lint RestrictedApi check. This check is automatically run for Android projects and can be optionally enabled on JVM projects using the com.android.lint Gradle plugin.

## Summary

| Nested types |
| --- |
| `public enum RestrictTo.Scope extends Enum` |

| Public constructors |
| --- |
| `RestrictTo(@NonNull RestrictTo.Scope... value)` |

| Public methods |
| --- |
| `final @NonNull RestrictTo.Scope[]` | `getValue()`  The scope(s) to which usage should be restricted. |

## Public constructors

### RestrictTo

Added in [1.10.0](/jetpack/androidx/releases/annotation#1.10.0)

```
public RestrictTo(@NonNull RestrictTo.Scope... value)
```

## Public methods

### getValue

```
public final @NonNull RestrictTo.Scope[] getValue()
```

The scope(s) to which usage should be restricted.
