--- source: https://developer.android.com/reference/androidx/annotation/experimental/Experimental.Level ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# Experimental.Level

Artifact: [androidx.annotation:annotation-experimental](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/experimental/Experimental.kt+class:androidx.annotation.experimental.Experimental.Level)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/annotation#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/experimental/Experimental.Level "View this page in Kotlin")
|Java

```
public enum Experimental.Level extends Enum
```

|  |  |  |
| --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | |
| ↳ | [kotlin.Enum](https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-enum/index.html) | |
|  | ↳ | [androidx.annotation.experimental.Experimental.Level](/reference/androidx/annotation/experimental/Experimental.Level) |

---

**This enum is deprecated.**  
This annotation has been replaced by `@RequiresOptIn`

Severity of the diagnostic that should be reported on usages of experimental API which did not explicitly accept the experimental aspect of that API either by using `UseExperimental` or by being annotated with the corresponding marker annotation.

## Summary

| Enum Values |
| --- |
| `ERROR` | **This enum value is deprecated.** This annotation has been replaced by `@RequiresOptIn` |
| `WARNING` | **This enum value is deprecated.** This annotation has been replaced by `@RequiresOptIn` |

| Public methods |
| --- |
| `final @NonNull EnumEntries<@NonNull Experimental.Level>` | `getEntries()`  **This method is deprecated.** This annotation has been replaced by `@RequiresOptIn` |
| `final @NonNull Experimental.Level` | `valueOf(@NonNull String value)`  **This method is deprecated.** This annotation has been replaced by `@RequiresOptIn` |
| `final @NonNull Experimental.Level[]` | `values()`  **This method is deprecated.** This annotation has been replaced by `@RequiresOptIn` |

## Enum Values

### ERROR

```
Experimental.Level Experimental.Level.ERROR
```

**This enum value is deprecated.**  
This annotation has been replaced by `@RequiresOptIn`

Specifies that an error should be reported on incorrect usages of this experimental API.

### WARNING

```
Experimental.Level Experimental.Level.WARNING
```

**This enum value is deprecated.**  
This annotation has been replaced by `@RequiresOptIn`

Specifies that a warning should be reported on incorrect usages of this experimental API.

## Public methods

### getEntries

```
public final @NonNull EnumEntries<@NonNull Experimental.Level> getEntries()
```

**This method is deprecated.**  
This annotation has been replaced by `@RequiresOptIn`

Returns a representation of an immutable list of all enum entries, in the order they're declared.

This method may be used to iterate over the enum entries.

### valueOf

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/annotation#1.1.0)

```
public final @NonNull Experimental.Level valueOf(@NonNull String value)
```

**This method is deprecated.**  
This annotation has been replaced by `@RequiresOptIn`

Returns the enum constant of this type with the specified name. The string must match exactly an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

| Throws |
| --- |
| `kotlin.IllegalArgumentException` | if this enum type has no constant with the specified name |

### values

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/annotation#1.1.0)

```
public final @NonNull Experimental.Level[] values()
```

**This method is deprecated.**  
This annotation has been replaced by `@RequiresOptIn`

Returns an array containing the constants of this enum type, in the order they're declared.

This method may be used to iterate over the constants.