# InspectableProperty.FlagEntry

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/annotation/InspectableProperty.FlagEntry))

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/InspectableProperty.jvm.kt+class:androidx.annotation.InspectableProperty.FlagEntry)

Added in [1.1.0](/jetpack/androidx/releases/annotation#1.1.0)

Deprecated in [1.3.0](/jetpack/androidx/releases/annotation#1.3.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/InspectableProperty.FlagEntry "View this page in Kotlin")
|Java

```
@Target(allowedTargets = [AnnotationTarget.ANNOTATION_CLASS, AnnotationTarget.CLASS])  
@Retention(value = AnnotationRetention.SOURCE)  
public annotation InspectableProperty.FlagEntry
```

---

**This annotation is deprecated.**  
Replaced by the androidx.resourceinpsection package.

One flag value of many that may be packed into a primitive {int}.

## Summary

| Public constructors |
| --- |
| `FlagEntry(@NonNull String name, int target, int mask)`  **This method is deprecated.** Replaced by the androidx.resourceinpsection package. |

| Public methods |
| --- |
| `final int` | `getMask()`  **This method is deprecated.** Replaced by the androidx.resourceinpsection package. |
| `final @NonNull String` | `getName()`  **This method is deprecated.** Replaced by the androidx.resourceinpsection package. |
| `final int` | `getTarget()`  **This method is deprecated.** Replaced by the androidx.resourceinpsection package. |

## Public constructors

### FlagEntry

Added in [1.10.0](/jetpack/androidx/releases/annotation#1.10.0)

Deprecated in [1.10.0](/jetpack/androidx/releases/annotation#1.10.0)

```
public FlagEntry(@NonNull String name, int target, int mask)
```

**This method is deprecated.**  
Replaced by the androidx.resourceinpsection package.

## Public methods

### getMask

```
public final int getMask()
```

**This method is deprecated.**  
Replaced by the androidx.resourceinpsection package.

A mask that the property will be bitwise anded with before comparing to the target.

If set to 0 (the default), the value of `target` will be used as a mask. Zero was chosen as the default since bitwise and with zero is always zero.

| Returns |
| --- |
| `int` | A mask, or 0 to use the target as a mask |

### getName

```
public final @NonNull String getName()
```

**This method is deprecated.**  
Replaced by the androidx.resourceinpsection package.

The string name of this flag.

| Returns |
| --- |
| `@NonNull String` | A string name |

### getTarget

```
public final int getTarget()
```

**This method is deprecated.**  
Replaced by the androidx.resourceinpsection package.

A target value that the property's value must equal after masking.

If a mask is not supplied (i.e., `mask` is 0), the target will be reused as the mask. This handles the common case where no flags mutually exclude each other.

| Returns |
| --- |
| `int` | The target value to compare against |
