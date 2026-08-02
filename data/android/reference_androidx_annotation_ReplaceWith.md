# ReplaceWith

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/annotation/ReplaceWith))

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/ReplaceWith.jvm.kt+class:androidx.annotation.ReplaceWith)

Added in [1.8.0](/jetpack/androidx/releases/annotation#1.8.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/ReplaceWith "View this page in Kotlin")
|Java

```
@Target(allowedTargets = [AnnotationTarget.FUNCTION, AnnotationTarget.FIELD, AnnotationTarget.CONSTRUCTOR])  
public annotation ReplaceWith
```

---

Specifies a code fragment that can be used to suggest a replacement for a method in conjunction with the `ReplaceWith` lint check.

The `expression` parameter specified the replacement expression, which is interpreted in the context of the symbol being used and can reference members of the enclosing classes, etc.

For method calls, the replacement expression may contain parameter names of the method being replaced, which will be substituted with actual arguments used in the call being replaced:

```
@ReplaceWith(expression = "event.getActionType(slot)")
static int getActionType(AccessibilityEvent event, int slot) { ... }
```

## Summary

| Public constructors |
| --- |
| `ReplaceWith(@NonNull String expression, @NonNull String... imports)` |

| Public methods |
| --- |
| `final @NonNull String` | `getExpression()` |
| `final @NonNull String[]` | `getImports()` |

## Public constructors

### ReplaceWith

Added in [1.10.0](/jetpack/androidx/releases/annotation#1.10.0)

```
public ReplaceWith(@NonNull String expression, @NonNull String... imports)
```

## Public methods

### getExpression

```
public final @NonNull String getExpression()
```

### getImports

```
public final @NonNull String[] getImports()
```
