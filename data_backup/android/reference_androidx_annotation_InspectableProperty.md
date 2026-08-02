--- source: https://developer.android.com/reference/androidx/annotation/InspectableProperty ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# InspectableProperty

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/InspectableProperty.jvm.kt+class:androidx.annotation.InspectableProperty)

Added in [1.1.0](/jetpack/androidx/releases/annotation#1.1.0)

Deprecated in [1.3.0](/jetpack/androidx/releases/annotation#1.3.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/InspectableProperty "View this page in Kotlin")
|Java

```
@Target(allowedTargets = [AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER])  
@Retention(value = AnnotationRetention.SOURCE)  
public annotation InspectableProperty
```

---

**This annotation is deprecated.**  
Replaced by the androidx.resourceinpsection package.

Denotes that the annotated method is the getter for a resources-backed property that should be shown in Android Studio's inspection tools.

## Summary

| Nested types |
| --- |
| `@Target(allowedTargets = [AnnotationTarget.ANNOTATION_CLASS, AnnotationTarget.CLASS]) @Retention(value = AnnotationRetention.SOURCE) public annotation InspectableProperty.EnumEntry`  **This annotation is deprecated.** Replaced by the androidx.resourceinpsection package. |
| `@Target(allowedTargets = [AnnotationTarget.ANNOTATION_CLASS, AnnotationTarget.CLASS]) @Retention(value = AnnotationRetention.SOURCE) public annotation InspectableProperty.FlagEntry`  **This annotation is deprecated.** Replaced by the androidx.resourceinpsection package. |
| `public enum InspectableProperty.ValueType extends Enum`  **This enum is deprecated.** Replaced by the androidx.resourceinpsection package. |

| Public constructors |
| --- |
| `InspectableProperty(     @NonNull String name,     int attributeId,     boolean hasAttributeId,     @NonNull InspectableProperty.ValueType valueType,     @NonNull InspectableProperty.EnumEntry[] enumMapping,     @NonNull InspectableProperty.FlagEntry[] flagMapping )`  **This method is deprecated.** Replaced by the androidx.resourceinpsection package. |

| Public methods |
| --- |
| `final int` | `getAttributeId()`  **This method is deprecated.** Replaced by the androidx.resourceinpsection package. |
| `final @NonNull InspectableProperty.EnumEntry[]` | `getEnumMapping()`  **This method is deprecated.** Replaced by the androidx.resourceinpsection package. |
| `final @NonNull InspectableProperty.FlagEntry[]` | `getFlagMapping()`  **This method is deprecated.** Replaced by the androidx.resourceinpsection package. |
| `final boolean` | `getHasAttributeId()`  **This method is deprecated.** Replaced by the androidx.resourceinpsection package. |
| `final @NonNull String` | `getName()`  **This method is deprecated.** Replaced by the androidx.resourceinpsection package. |
| `final @NonNull InspectableProperty.ValueType` | `getValueType()`  **This method is deprecated.** Replaced by the androidx.resourceinpsection package. |

## Public constructors

### InspectableProperty

Added in [1.10.0](/jetpack/androidx/releases/annotation#1.10.0)

Deprecated in [1.10.0](/jetpack/androidx/releases/annotation#1.10.0)

```
public InspectableProperty(  
    @NonNull String name,  
    int attributeId,  
    boolean hasAttributeId,  
    @NonNull InspectableProperty.ValueType valueType,  
    @NonNull InspectableProperty.EnumEntry[] enumMapping,  
    @NonNull InspectableProperty.FlagEntry[] flagMapping  
)
```

**This method is deprecated.**  
Replaced by the androidx.resourceinpsection package.

## Public methods

### getAttributeId

```
public final int getAttributeId()
```

**This method is deprecated.**  
Replaced by the androidx.resourceinpsection package.

If the property is inflated from XML, the resource ID of its XML attribute.

If left as the default, and `hasAttributeId` is true, the attribute ID will be inferred from `name`.

| Returns |
| --- |
| `int` | The attribute ID of the property or the default null resource ID |

### getEnumMapping

```
public final @NonNull InspectableProperty.EnumEntry[] getEnumMapping()
```

**This method is deprecated.**  
Replaced by the androidx.resourceinpsection package.

For enumerations packed into primitive {int} properties, map the values to string names.

Note that `#enumMapping()` cannot be used simultaneously with `flagMapping`.

| Returns |
| --- |
| `@NonNull InspectableProperty.EnumEntry[]` | An array of `EnumEntry`, empty if not applicable |

### getFlagMapping

```
public final @NonNull InspectableProperty.FlagEntry[] getFlagMapping()
```

**This method is deprecated.**  
Replaced by the androidx.resourceinpsection package.

For flags packed into primitive {int} properties, model the string names of the flags.

Note that `#flagMapping()` cannot be used simultaneously with `enumMapping`.

| Returns |
| --- |
| `@NonNull InspectableProperty.FlagEntry[]` | An array of `FlagEntry`, empty if not applicable |

### getHasAttributeId

```
public final boolean getHasAttributeId()
```

**This method is deprecated.**  
Replaced by the androidx.resourceinpsection package.

If this property has an attribute ID.

Set to false if the annotated property does not have an attribute ID, that is, it is not inflated from an XML attribute. This will prevent the automatic inference of the attribute.

| Returns |
| --- |
| `boolean` | Whether to infer an attribute ID if not supplied |

### getName

```
public final @NonNull String getName()
```

**This method is deprecated.**  
Replaced by the androidx.resourceinpsection package.

The name of the property.

If left empty (the default), the property name will be inferred from the name of the getter method.

| Returns |
| --- |
| `@NonNull String` | The name of the property. |

### getValueType

```
public final @NonNull InspectableProperty.ValueType getValueType()
```

**This method is deprecated.**  
Replaced by the androidx.resourceinpsection package.

Specify how to interpret a value type packed into a primitive integer.

| Returns |
| --- |
| `@NonNull InspectableProperty.ValueType` | A `ValueType` |