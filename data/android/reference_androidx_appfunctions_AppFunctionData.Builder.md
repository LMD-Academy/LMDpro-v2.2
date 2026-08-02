# AppFunctionData.Builder

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/appfunctions/AppFunctionData.Builder))

Artifact: [androidx.appfunctions:appfunctions](/jetpack/androidx/releases/appfunctions)

[View Source](https://cs.android.com/search?q=file:androidx/appfunctions/AppFunctionData.kt+class:androidx.appfunctions.AppFunctionData.Builder)

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

---

[Kotlin](/reference/kotlin/androidx/appfunctions/AppFunctionData.Builder "View this page in Kotlin")
|Java

```
public final class AppFunctionData.Builder
```

---

Builder for constructing `AppFunctionData`

For example, to write an `AppFunctionData` for calling an AppFunction

```
fun callCreateNoteFunction(metadata: AppFunctionMetadata) {  
  val appFunctionData = AppFunctionData.Builder(  
    metadata.parameters,  
    metadata.components,  
  ).apply {  
    setString("title", "Note Title")  
    // If the function doesn't accept "owner" as parameter, it would throw an error  
    setString("owner", "Me")  
    // If the function actually expects "content" as String, it would throw an error  
    setInt("content", 100)  
  }  
   .build()  
}
```

## Summary

| Public constructors |
| --- |
| `Builder(     @NonNull AppFunctionAllOfTypeMetadata allOfTypeMetadata,     @NonNull AppFunctionComponentsMetadata componentMetadata )`  Constructs a `Builder` to create `AppFunctionData` representing an all-of object. |
| `Builder(     @NonNull AppFunctionObjectTypeMetadata objectTypeMetadata,     @NonNull AppFunctionComponentsMetadata componentMetadata )`  Constructs a `Builder` to create `AppFunctionData` representing an object. |
| `Builder(     @NonNull List<@NonNull AppFunctionParameterMetadata> parameterMetadataList,     @NonNull AppFunctionComponentsMetadata componentMetadata )`  Constructs a `Builder` to create input data for an AppFunction execution call. |
| `Builder(     @NonNull AppFunctionResponseMetadata responseMetadata,     @NonNull AppFunctionComponentsMetadata componentMetadata )`  Constructs a `Builder` to create `AppFunctionData` representing a response. |

| Public methods |
| --- |
| `final @NonNull AppFunctionData` | `build()`  Builds `AppFunctionData` |
| `final @NonNull AppFunctionData.Builder` | `@CanIgnoreReturnValue setAppFunctionData(@NonNull String key, @NonNull AppFunctionData value)`  Sets an `AppFunctionData` value for the given `key`. |
| `final @NonNull AppFunctionData.Builder` | `@CanIgnoreReturnValue setAppFunctionDataList(     @NonNull String key,     @NonNull List<@NonNull AppFunctionData> value )`  Sets a `List` of `AppFunctionData` value for the given `key`. |
| `final @NonNull AppFunctionData.Builder` | `@CanIgnoreReturnValue setBoolean(@NonNull String key, boolean value)`  Sets a `Boolean` value for the given `key`. |
| `final @NonNull AppFunctionData.Builder` | `@CanIgnoreReturnValue setBooleanArray(@NonNull String key, @NonNull boolean[] value)`  Sets a `BooleanArray` value for the given `key`. |
| `final @NonNull AppFunctionData.Builder` | `@CanIgnoreReturnValue setByteArray(@NonNull String key, @NonNull byte[] value)`  Sets a `ByteArray` value for the given `key`. |
| `final @NonNull AppFunctionData.Builder` | `@CanIgnoreReturnValue setDouble(@NonNull String key, double value)`  Sets a `Double` value for the given `key`. |
| `final @NonNull AppFunctionData.Builder` | `@CanIgnoreReturnValue setDoubleArray(@NonNull String key, @NonNull double[] value)`  Sets a `DoubleArray` value for the given `key`. |
| `final @NonNull AppFunctionData.Builder` | `@CanIgnoreReturnValue setFloat(@NonNull String key, float value)`  Sets a `Float` value for the given `key`. |
| `final @NonNull AppFunctionData.Builder` | `@CanIgnoreReturnValue setFloatArray(@NonNull String key, @NonNull float[] value)`  Sets a `FloatArray` value for the given `key`. |
| `final @NonNull AppFunctionData.Builder` | `@CanIgnoreReturnValue setInt(@NonNull String key, int value)`  Sets an `Int` value for the given `key`. |
| `final @NonNull AppFunctionData.Builder` | `@CanIgnoreReturnValue setIntArray(@NonNull String key, @NonNull int[] value)`  Sets an `IntArray` value for the given `key`. |
| `final @NonNull AppFunctionData.Builder` | `@CanIgnoreReturnValue setLong(@NonNull String key, long value)`  Sets a `Long` value for the given `key`. |
| `final @NonNull AppFunctionData.Builder` | `@CanIgnoreReturnValue setLongArray(@NonNull String key, @NonNull long[] value)`  Sets a `LongArray` value for the given `key`. |
| `final @NonNull AppFunctionData.Builder` | `@CanIgnoreReturnValue <T extends Parcelable> setParcelable(@NonNull String key, @NonNull T value)`  Sets a `Parcelable` value of type `T` for the given `key`. |
| `final @NonNull AppFunctionData.Builder` | `@CanIgnoreReturnValue <T extends Parcelable> setParcelableList(     @NonNull String key,     @NonNull List<@NonNull T> value )`  Sets a `List` of `Parcelable` values of type `T` for the given `key`. |
| `final @NonNull AppFunctionData.Builder` | `@CanIgnoreReturnValue <T extends Parcelable> setParcelableList(     @NonNull String key,     @NonNull List<@NonNull T> value,     @NonNull Class<@NonNull T> clazz )`  Sets a `List` of `Parcelable` values of type `T` for the given `key`. |
| `final @NonNull AppFunctionData.Builder` | `@CanIgnoreReturnValue setString(@NonNull String key, @NonNull String value)`  Sets a `String` value for the given `key`. |
| `final @NonNull AppFunctionData.Builder` | `@CanIgnoreReturnValue setStringList(@NonNull String key, @NonNull List<@NonNull String> value)`  Sets a `List` of `String` value for the given `key`. |

## Public constructors

### Builder

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public Builder(  
    @NonNull AppFunctionAllOfTypeMetadata allOfTypeMetadata,  
    @NonNull AppFunctionComponentsMetadata componentMetadata  
)
```

Constructs a `Builder` to create `AppFunctionData` representing an all-of object.

The caller can use this to construct the `AppFunctionData` that conforms with the provided `allOfTypeMetadata`.

| Parameters |
| --- |
| `@NonNull AppFunctionAllOfTypeMetadata allOfTypeMetadata` | `AppFunctionAllOfTypeMetadata` defining the object structure. |
| `@NonNull AppFunctionComponentsMetadata componentMetadata` | `AppFunctionComponentsMetadata` that has the shared data types. |

| See also |
| --- |
| `AppFunctionAllOfTypeMetadata` |  |
| `AppFunctionComponentsMetadata` |  |

### Builder

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public Builder(  
    @NonNull AppFunctionObjectTypeMetadata objectTypeMetadata,  
    @NonNull AppFunctionComponentsMetadata componentMetadata  
)
```

Constructs a `Builder` to create `AppFunctionData` representing an object.

The caller can use this to construct the `AppFunctionData` that conforms with the provided `objectTypeMetadata`.

| Parameters |
| --- |
| `@NonNull AppFunctionObjectTypeMetadata objectTypeMetadata` | `AppFunctionObjectTypeMetadata` defining the object structure. |
| `@NonNull AppFunctionComponentsMetadata componentMetadata` | `AppFunctionComponentsMetadata` that has the shared data types. |

| See also |
| --- |
| `AppFunctionObjectTypeMetadata` |  |
| `AppFunctionComponentsMetadata` |  |

### Builder

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public Builder(  
    @NonNull List<@NonNull AppFunctionParameterMetadata> parameterMetadataList,  
    @NonNull AppFunctionComponentsMetadata componentMetadata  
)
```

Constructs a `Builder` to create input data for an AppFunction execution call.

The caller can use this to construct the `AppFunctionData` for `ExecuteAppFunctionRequest.functionParameters`.

| Parameters |
| --- |
| `@NonNull List<@NonNull AppFunctionParameterMetadata> parameterMetadataList` | List of `AppFunctionParameterMetadata` defining the input parameters. |
| `@NonNull AppFunctionComponentsMetadata componentMetadata` | `AppFunctionComponentsMetadata` that has the shared data types. |

| See also |
| --- |
| `AppFunctionParameterMetadata` |  |
| `AppFunctionComponentsMetadata` |  |

### Builder

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public Builder(  
    @NonNull AppFunctionResponseMetadata responseMetadata,  
    @NonNull AppFunctionComponentsMetadata componentMetadata  
)
```

Constructs a `Builder` to create `AppFunctionData` representing a response.

The caller can use this to construct the `AppFunctionData` for `ExecuteAppFunctionResponse.Success.returnValue`.

| Parameters |
| --- |
| `@NonNull AppFunctionResponseMetadata responseMetadata` | `AppFunctionResponseMetadata` defining the response structure. |
| `@NonNull AppFunctionComponentsMetadata componentMetadata` | `AppFunctionComponentsMetadata` that has the shared data types. |

| See also |
| --- |
| `AppFunctionResponseMetadata` |  |
| `AppFunctionComponentsMetadata` |  |

## Public methods

### build

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final @NonNull AppFunctionData build()
```

Builds `AppFunctionData`

| Throws |
| --- |
| `IllegalArgumentException` | if any required property, as defined by the metadata specification, is missing. |

### setAppFunctionData

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
@CanIgnoreReturnValue  
public final @NonNull AppFunctionData.Builder setAppFunctionData(@NonNull String key, @NonNull AppFunctionData value)
```

Sets an `AppFunctionData` value for the given `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to set the `AppFunctionData` value for. |
| `@NonNull AppFunctionData value` | The `AppFunctionData` value to set. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the `value` does not match the metadata specification associated with the `key`. |

### setAppFunctionDataList

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
@CanIgnoreReturnValue  
public final @NonNull AppFunctionData.Builder setAppFunctionDataList(  
    @NonNull String key,  
    @NonNull List<@NonNull AppFunctionData> value  
)
```

Sets a `List` of `AppFunctionData` value for the given `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to set the `List` of `AppFunctionData` value for. |
| `@NonNull List<@NonNull AppFunctionData> value` | The `List` of `AppFunctionData` value to set. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the `value` does not match the metadata specification associated with the `key`. |

### setBoolean

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
@CanIgnoreReturnValue  
public final @NonNull AppFunctionData.Builder setBoolean(@NonNull String key, boolean value)
```

Sets a `Boolean` value for the given `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to set the `Boolean` value for. |
| `boolean value` | The `Boolean` value to set. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the `value` does not match the metadata specification associated with the `key`. |

### setBooleanArray

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
@CanIgnoreReturnValue  
public final @NonNull AppFunctionData.Builder setBooleanArray(@NonNull String key, @NonNull boolean[] value)
```

Sets a `BooleanArray` value for the given `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to set the `BooleanArray` value for. |
| `@NonNull boolean[] value` | The `BooleanArray` value to set. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the `value` does not match the metadata specification associated with the `key`. |

### setByteArray

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
@CanIgnoreReturnValue  
public final @NonNull AppFunctionData.Builder setByteArray(@NonNull String key, @NonNull byte[] value)
```

Sets a `ByteArray` value for the given `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to set the `ByteArray` value for. |
| `@NonNull byte[] value` | The `ByteArray` value to set. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the `value` does not match the metadata specification associated with the `key`. |

### setDouble

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
@CanIgnoreReturnValue  
public final @NonNull AppFunctionData.Builder setDouble(@NonNull String key, double value)
```

Sets a `Double` value for the given `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to set the `Double` value for. |
| `double value` | The `Double` value to set. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the `value` does not match the metadata specification associated with the `key`. |

### setDoubleArray

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
@CanIgnoreReturnValue  
public final @NonNull AppFunctionData.Builder setDoubleArray(@NonNull String key, @NonNull double[] value)
```

Sets a `DoubleArray` value for the given `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to set the `DoubleArray` value for. |
| `@NonNull double[] value` | The `DoubleArray` value to set. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the `value` does not match the metadata specification associated with the `key`. |

### setFloat

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
@CanIgnoreReturnValue  
public final @NonNull AppFunctionData.Builder setFloat(@NonNull String key, float value)
```

Sets a `Float` value for the given `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to set the `Float` value for. |
| `float value` | The `Float` value to set. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the `value` does not match the metadata specification associated with the `key`. |

### setFloatArray

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
@CanIgnoreReturnValue  
public final @NonNull AppFunctionData.Builder setFloatArray(@NonNull String key, @NonNull float[] value)
```

Sets a `FloatArray` value for the given `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to set the `DoubleArray` value for. |
| `@NonNull float[] value` | The `FloatArray` value to set. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the `value` does not match the metadata specification associated with the `key`. |

### setInt

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
@CanIgnoreReturnValue  
public final @NonNull AppFunctionData.Builder setInt(@NonNull String key, int value)
```

Sets an `Int` value for the given `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to set the `Int` value for. |
| `int value` | The `Int` value to set. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the `value` does not match the metadata specification associated with the `key`. |

### setIntArray

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
@CanIgnoreReturnValue  
public final @NonNull AppFunctionData.Builder setIntArray(@NonNull String key, @NonNull int[] value)
```

Sets an `IntArray` value for the given `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to set the `IntArray` value for. |
| `@NonNull int[] value` | The `IntArray` value to set. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the `value` does not match the metadata specification associated with the `key`. |

### setLong

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
@CanIgnoreReturnValue  
public final @NonNull AppFunctionData.Builder setLong(@NonNull String key, long value)
```

Sets a `Long` value for the given `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to set the `Long` value for. |
| `long value` | The `Long` value to set. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the `value` does not match the metadata specification associated with the `key`. |

### setLongArray

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
@CanIgnoreReturnValue  
public final @NonNull AppFunctionData.Builder setLongArray(@NonNull String key, @NonNull long[] value)
```

Sets a `LongArray` value for the given `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to set the `LongArray` value for. |
| `@NonNull long[] value` | The `LongArray` value to set. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the `value` does not match the metadata specification associated with the `key`. |

### setParcelable

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
@CanIgnoreReturnValue  
public final @NonNull AppFunctionData.Builder <T extends Parcelable> setParcelable(@NonNull String key, @NonNull T value)
```

Sets a `Parcelable` value of type `T` for the given `key`.

For `Parcelable` types not defined by the Android platform (e.g., custom classes shared between agents and apps), forward and backward compatibility is **not guaranteed** by this library. The sender and receiver of the `Parcelable` are responsible for managing any compatibility and versioning concerns.

| Parameters |
| --- |
| `@NonNull String key` | The key to set the value for. |
| `@NonNull T value` | The `Parcelable` value of type `T` to set. |

### setParcelableList

```
@CanIgnoreReturnValue  
public final @NonNull AppFunctionData.Builder <T extends Parcelable> setParcelableList(  
    @NonNull String key,  
    @NonNull List<@NonNull T> value  
)
```

Sets a `List` of `Parcelable` values of type `T` for the given `key`.

For `Parcelable` types not defined by the Android platform (e.g., custom classes shared between agents and apps), forward and backward compatibility is **not guaranteed** by this framework. The sender and receiver of the `Parcelable` are responsible for managing any compatibility and versioning concerns.

| Parameters |
| --- |
| `@NonNull String key` | The key to set the list for. |
| `@NonNull List<@NonNull T> value` | The `List` of `Parcelable` values of type `T` to set. |

### setParcelableList

```
@CanIgnoreReturnValue  
public final @NonNull AppFunctionData.Builder <T extends Parcelable> setParcelableList(  
    @NonNull String key,  
    @NonNull List<@NonNull T> value,  
    @NonNull Class<@NonNull T> clazz  
)
```

Sets a `List` of `Parcelable` values of type `T` for the given `key`.

For `Parcelable` types not defined by the Android platform (e.g., custom classes shared between agents and apps), forward and backward compatibility is **not guaranteed** by this framework. The sender and receiver of the `Parcelable` are responsible for managing any compatibility and versioning concerns.

| Parameters |
| --- |
| `@NonNull String key` | The key to set the list for. |
| `@NonNull List<@NonNull T> value` | The `List` of `Parcelable` values of type `T` to set. |
| `@NonNull Class<@NonNull T> clazz` | The `Class` of the `Parcelable` list to set, of type `T`. |

### setString

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
@CanIgnoreReturnValue  
public final @NonNull AppFunctionData.Builder setString(@NonNull String key, @NonNull String value)
```

Sets a `String` value for the given `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to set the `String` value for. |
| `@NonNull String value` | The `String` value to set. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the `value` does not match the metadata specification associated with the `key`. |

### setStringList

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
@CanIgnoreReturnValue  
public final @NonNull AppFunctionData.Builder setStringList(@NonNull String key, @NonNull List<@NonNull String> value)
```

Sets a `List` of `String` value for the given `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to set the `List` of `String` value for. |
| `@NonNull List<@NonNull String> value` | The `List` of `String` value to set. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the `value` does not match the metadata specification associated with the `key`. |
