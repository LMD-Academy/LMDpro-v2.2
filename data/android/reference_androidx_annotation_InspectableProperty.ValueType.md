# InspectableProperty.ValueType

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/annotation/InspectableProperty.ValueType))

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/InspectableProperty.jvm.kt+class:androidx.annotation.InspectableProperty.ValueType)

Added in [1.1.0](/jetpack/androidx/releases/annotation#1.1.0)

Deprecated in [1.3.0](/jetpack/androidx/releases/annotation#1.3.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/InspectableProperty.ValueType "View this page in Kotlin")
|Java

```
public enum InspectableProperty.ValueType extends Enum
```

|  |  |  |
| --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | |
| ↳ | [kotlin.Enum](https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-enum/index.html) | |
|  | ↳ | [androidx.annotation.InspectableProperty.ValueType](/reference/androidx/annotation/InspectableProperty.ValueType) |

---

**This enum is deprecated.**  
Replaced by the androidx.resourceinpsection package.

The type of value packed into a primitive {int}.

## Summary

| Enum Values |
| --- |
| `COLOR` | **This enum value is deprecated.** Replaced by the androidx.resourceinpsection package. |
| `GRAVITY` | **This enum value is deprecated.** Replaced by the androidx.resourceinpsection package. |
| `INFERRED` | **This enum value is deprecated.** Replaced by the androidx.resourceinpsection package. |
| `INT_ENUM` | **This enum value is deprecated.** Replaced by the androidx.resourceinpsection package. |
| `INT_FLAG` | **This enum value is deprecated.** Replaced by the androidx.resourceinpsection package. |
| `NONE` | **This enum value is deprecated.** Replaced by the androidx.resourceinpsection package. |
| `RESOURCE_ID` | **This enum value is deprecated.** Replaced by the androidx.resourceinpsection package. |

| Public methods |
| --- |
| `final @NonNull EnumEntries<@NonNull InspectableProperty.ValueType>` | `getEntries()`  **This method is deprecated.** Replaced by the androidx.resourceinpsection package. |
| `final @NonNull InspectableProperty.ValueType` | `valueOf(@NonNull String value)`  **This method is deprecated.** Replaced by the androidx.resourceinpsection package. |
| `final @NonNull InspectableProperty.ValueType[]` | `values()`  **This method is deprecated.** Replaced by the androidx.resourceinpsection package. |

## Enum Values

### COLOR

```
InspectableProperty.ValueType InspectableProperty.ValueType.COLOR
```

**This enum value is deprecated.**  
Replaced by the androidx.resourceinpsection package.

Value packs color information.

This is inferred from `ColorInt`, or `ColorLong` on the getter method.

### GRAVITY

```
InspectableProperty.ValueType InspectableProperty.ValueType.GRAVITY
```

**This enum value is deprecated.**  
Replaced by the androidx.resourceinpsection package.

Value packs gravity information.

This type is not inferred and is non-trivial to represent using `FlagEntry`.

### INFERRED

```
InspectableProperty.ValueType InspectableProperty.ValueType.INFERRED
```

**This enum value is deprecated.**  
Replaced by the androidx.resourceinpsection package.

The default the annotation processor infers the value type from context.

### INT\_ENUM

```
InspectableProperty.ValueType InspectableProperty.ValueType.INT_ENUM
```

**This enum value is deprecated.**  
Replaced by the androidx.resourceinpsection package.

Value packs an enumeration.

This is inferred if `enumMapping` is specified.

| See also |
| --- |
| `InspectableProperty.EnumEntry` |  |

### INT\_FLAG

```
InspectableProperty.ValueType InspectableProperty.ValueType.INT_FLAG
```

**This enum value is deprecated.**  
Replaced by the androidx.resourceinpsection package.

Value packs flags, of which many may be enabled at once.

This is inferred if `flagMapping` is specified.

| See also |
| --- |
| `InspectableProperty.FlagEntry` |  |

### NONE

```
InspectableProperty.ValueType InspectableProperty.ValueType.NONE
```

**This enum value is deprecated.**  
Replaced by the androidx.resourceinpsection package.

No special handling, property is considered to be a numeric value.

### RESOURCE\_ID

```
InspectableProperty.ValueType InspectableProperty.ValueType.RESOURCE_ID
```

**This enum value is deprecated.**  
Replaced by the androidx.resourceinpsection package.

Value is a resource ID

This type is inferred from the presence of a resource ID annotation such as `AnyRes`.

## Public methods

### getEntries

```
public final @NonNull EnumEntries<@NonNull InspectableProperty.ValueType> getEntries()
```

**This method is deprecated.**  
Replaced by the androidx.resourceinpsection package.

Returns a representation of an immutable list of all enum entries, in the order they're declared.

This method may be used to iterate over the enum entries.

### valueOf

Added in [1.1.0](/jetpack/androidx/releases/annotation#1.1.0)

Deprecated in [1.3.0](/jetpack/androidx/releases/annotation#1.3.0)

```
public final @NonNull InspectableProperty.ValueType valueOf(@NonNull String value)
```

**This method is deprecated.**  
Replaced by the androidx.resourceinpsection package.

Returns the enum constant of this type with the specified name. The string must match exactly an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

| Throws |
| --- |
| `kotlin.IllegalArgumentException` | if this enum type has no constant with the specified name |

### values

Added in [1.1.0](/jetpack/androidx/releases/annotation#1.1.0)

Deprecated in [1.3.0](/jetpack/androidx/releases/annotation#1.3.0)

```
public final @NonNull InspectableProperty.ValueType[] values()
```

**This method is deprecated.**  
Replaced by the androidx.resourceinpsection package.

Returns an array containing the constants of this enum type, in the order they're declared.

This method may be used to iterate over the constants.
