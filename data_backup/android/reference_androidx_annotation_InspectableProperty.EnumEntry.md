--- source: https://developer.android.com/reference/androidx/annotation/InspectableProperty.EnumEntry ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# InspectableProperty.EnumEntry

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/InspectableProperty.jvm.kt+class:androidx.annotation.InspectableProperty.EnumEntry)

Added in [1.1.0](/jetpack/androidx/releases/annotation#1.1.0)

Deprecated in [1.3.0](/jetpack/androidx/releases/annotation#1.3.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/InspectableProperty.EnumEntry "View this page in Kotlin")
|Java

```
@Target(allowedTargets = [AnnotationTarget.ANNOTATION_CLASS, AnnotationTarget.CLASS])  
@Retention(value = AnnotationRetention.SOURCE)  
public annotation InspectableProperty.EnumEntry
```

---

**This annotation is deprecated.**  
Replaced by the androidx.resourceinpsection package.

One entry in an enumeration packed into a primitive {int}.

## Summary

| Public constructors |
| --- |
| `EnumEntry(@NonNull String name, int value)`  **This method is deprecated.** Replaced by the androidx.resourceinpsection package. |

| Public methods |
| --- |
| `final @NonNull String` | `getName()`  **This method is deprecated.** Replaced by the androidx.resourceinpsection package. |
| `final int` | `getValue()`  **This method is deprecated.** Replaced by the androidx.resourceinpsection package. |

## Public constructors

### EnumEntry

Added in [1.10.0](/jetpack/androidx/releases/annotation#1.10.0)

Deprecated in [1.10.0](/jetpack/androidx/releases/annotation#1.10.0)

```
public EnumEntry(@NonNull String name, int value)
```

**This method is deprecated.**  
Replaced by the androidx.resourceinpsection package.

## Public methods

### getName

```
public final @NonNull String getName()
```

**This method is deprecated.**  
Replaced by the androidx.resourceinpsection package.

The string name of this enumeration value.

| Returns |
| --- |
| `@NonNull String` | A string name |

### getValue

```
public final int getValue()
```

**This method is deprecated.**  
Replaced by the androidx.resourceinpsection package.

The integer value of this enumeration value.

| Returns |
| --- |
| `int` | An integer value |