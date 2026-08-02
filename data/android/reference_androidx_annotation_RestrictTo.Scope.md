# RestrictTo.Scope

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/annotation/RestrictTo.Scope))

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/RestrictTo.+class:androidx.annotation.RestrictTo.Scope)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/RestrictTo.Scope "View this page in Kotlin")
|Java

```
public enum RestrictTo.Scope extends Enum
```

|  |  |  |
| --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | |
| ↳ | [kotlin.Enum](https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-enum/index.html) | |
|  | ↳ | [androidx.annotation.RestrictTo.Scope](/reference/androidx/annotation/RestrictTo.Scope) |

---

## Summary

| Enum Values |
| --- |
| `GROUP_ID` | **This enum value is deprecated.** Use @RestrictTo(LIBRARY\_GROUP\_PREFIX) instead |
| `LIBRARY` | Restrict usage to code within the same library (e.g. the same Gradle group ID and artifact ID). |
| `LIBRARY_GROUP` | Restrict usage to code within the same group of libraries. |
| `LIBRARY_GROUP_PREFIX` | Restrict usage to code within packages whose Gradle group IDs share the same prefix up to the last `.` |
| `SUBCLASSES` | Restrict usage to subclasses of the enclosing class. |
| `TESTS` | Restrict usage to test source sets or code annotated with the `TESTS` restriction scope. |

| Public methods |
| --- |
| `final @NonNull EnumEntries<@NonNull RestrictTo.Scope>` | `getEntries()`  Returns a representation of an immutable list of all enum entries, in the order they're declared. |
| `final @NonNull EnumEntries<@NonNull RestrictTo.Scope>` | `getEntries()`  Returns a representation of an immutable list of all enum entries, in the order they're declared. |
| `final @NonNull RestrictTo.Scope` | `valueOf(@NonNull String value)`  Returns the enum constant of this type with the specified name. |
| `final @NonNull RestrictTo.Scope` | `valueOf(@NonNull String value)`  Returns the enum constant of this type with the specified name. |
| `final @NonNull RestrictTo.Scope[]` | `values()`  Returns an array containing the constants of this enum type, in the order they're declared. |
| `final @NonNull RestrictTo.Scope[]` | `values()`  Returns an array containing the constants of this enum type, in the order they're declared. |

## Enum Values

### GROUP\_ID

```
RestrictTo.Scope RestrictTo.Scope.GROUP_ID
```

Restrict usage to code within the same group ID (based on Gradle group ID).

This is an alias for `LIBRARY_GROUP_PREFIX`.

### LIBRARY

```
RestrictTo.Scope RestrictTo.Scope.LIBRARY
```

Restrict usage to code within the same library (e.g. the same Gradle group ID and artifact ID).

### LIBRARY\_GROUP

```
RestrictTo.Scope RestrictTo.Scope.LIBRARY_GROUP
```

Restrict usage to code within the same group of libraries.

This corresponds to the Gradle group ID.

### LIBRARY\_GROUP\_PREFIX

```
RestrictTo.Scope RestrictTo.Scope.LIBRARY_GROUP_PREFIX
```

Restrict usage to code within packages whose Gradle group IDs share the same prefix up to the last `.` separator.

For example, libraries `foo.bar:lib1` and `foo.baz:lib2` share the `foo.` prefix and can therefore use each other's APIs that are restricted to this scope. Similar applies to libraries `com.foo.bar:lib1` and `com.foo.baz:lib2`, which share the `com.foo.` prefix.

Library `com.bar.qux:lib3`, however, will not be able to use the restricted API because it only shares the prefix `com.` and not all the way until the last `.` separator.

### SUBCLASSES

```
RestrictTo.Scope RestrictTo.Scope.SUBCLASSES
```

Restrict usage to subclasses of the enclosing class.

**Note:** This scope should not be used to annotate packages.

### TESTS

```
RestrictTo.Scope RestrictTo.Scope.TESTS
```

Restrict usage to test source sets or code annotated with the `TESTS` restriction scope.

This is equivalent to `@VisibleForTesting(NONE)`.

## Public methods

### getEntries

```
public final @NonNull EnumEntries<@NonNull RestrictTo.Scope> getEntries()
```

Returns a representation of an immutable list of all enum entries, in the order they're declared.

This method may be used to iterate over the enum entries.

### getEntries

```
public final @NonNull EnumEntries<@NonNull RestrictTo.Scope> getEntries()
```

Returns a representation of an immutable list of all enum entries, in the order they're declared.

This method may be used to iterate over the enum entries.

### valueOf

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

```
public final @NonNull RestrictTo.Scope valueOf(@NonNull String value)
```

Returns the enum constant of this type with the specified name. The string must match exactly an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

| Throws |
| --- |
| `kotlin.IllegalArgumentException` | if this enum type has no constant with the specified name |

### valueOf

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

```
public final @NonNull RestrictTo.Scope valueOf(@NonNull String value)
```

Returns the enum constant of this type with the specified name. The string must match exactly an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

| Throws |
| --- |
| `kotlin.IllegalArgumentException` | if this enum type has no constant with the specified name |

### values

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

```
public final @NonNull RestrictTo.Scope[] values()
```

Returns an array containing the constants of this enum type, in the order they're declared.

This method may be used to iterate over the constants.

### values

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

```
public final @NonNull RestrictTo.Scope[] values()
```

Returns an array containing the constants of this enum type, in the order they're declared.

This method may be used to iterate over the constants.
