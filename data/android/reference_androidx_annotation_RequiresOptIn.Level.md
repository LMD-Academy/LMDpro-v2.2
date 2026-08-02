# RequiresOptIn.Level

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/annotation/RequiresOptIn.Level))

Artifact: [androidx.annotation:annotation-experimental](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/RequiresOptIn.kt+class:androidx.annotation.RequiresOptIn.Level)

Added in [1.1.0](/jetpack/androidx/releases/annotation#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/RequiresOptIn.Level "View this page in Kotlin")
|Java

```
public enum RequiresOptIn.Level extends Enum
```

|  |  |  |
| --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | |
| ↳ | [kotlin.Enum](https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-enum/index.html) | |
|  | ↳ | [androidx.annotation.RequiresOptIn.Level](/reference/androidx/annotation/RequiresOptIn.Level) |

---

Severity of the diagnostic that should be reported on usages of opt-in API which did not explicitly accept the opt-in aspect of that API either by:

* Propagating the opt-in aspect by annotating the usage with the marker annotation, thus
  becoming part of the marked opt-in API surface *or** Suppressing propagation of the opt-in aspect by annotating the usage with [OptIn] and
    specifying the marker annotation

    ## Summary

    | Enum Values |
    | --- |
    | `ERROR` | Specifies that an error should be reported on incorrect usages of this opt-in API. |
    | `WARNING` | Specifies that a warning should be reported on incorrect usages of this opt-in API. |

    | Public methods |
    | --- |
    | `final @NonNull EnumEntries<@NonNull RequiresOptIn.Level>` | `getEntries()`  Returns a representation of an immutable list of all enum entries, in the order they're declared. |
    | `final @NonNull RequiresOptIn.Level` | `valueOf(@NonNull String value)`  Returns the enum constant of this type with the specified name. |
    | `final @NonNull RequiresOptIn.Level[]` | `values()`  Returns an array containing the constants of this enum type, in the order they're declared. |

    ## Enum Values

    ### ERROR

    ```
    RequiresOptIn.Level RequiresOptIn.Level.ERROR
    ```

    Specifies that an error should be reported on incorrect usages of this opt-in API.

    ### WARNING

    ```
    RequiresOptIn.Level RequiresOptIn.Level.WARNING
    ```

    Specifies that a warning should be reported on incorrect usages of this opt-in API.

    ## Public methods

    ### getEntries

    ```
    public final @NonNull EnumEntries<@NonNull RequiresOptIn.Level> getEntries()
    ```

    Returns a representation of an immutable list of all enum entries, in the order they're declared.

    This method may be used to iterate over the enum entries.

    ### valueOf

    Added in [1.1.0](/jetpack/androidx/releases/annotation#1.1.0)

    ```
    public final @NonNull RequiresOptIn.Level valueOf(@NonNull String value)
    ```

    Returns the enum constant of this type with the specified name. The string must match exactly an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

    | Throws |
    | --- |
    | `kotlin.IllegalArgumentException` | if this enum type has no constant with the specified name |

    ### values

    Added in [1.1.0](/jetpack/androidx/releases/annotation#1.1.0)

    ```
    public final @NonNull RequiresOptIn.Level[] values()
    ```

    Returns an array containing the constants of this enum type, in the order they're declared.

    This method may be used to iterate over the constants.
