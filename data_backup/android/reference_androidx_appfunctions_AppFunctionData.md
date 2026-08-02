--- source: https://developer.android.com/reference/androidx/appfunctions/AppFunctionData ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# AppFunctionData

Artifact: [androidx.appfunctions:appfunctions](/jetpack/androidx/releases/appfunctions)

[View Source](https://cs.android.com/search?q=file:androidx/appfunctions/AppFunctionData.kt+class:androidx.appfunctions.AppFunctionData)

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

---

[Kotlin](/reference/kotlin/androidx/appfunctions/AppFunctionData "View this page in Kotlin")
|Java

```
@RequiresApi(value = 33)  
public final class AppFunctionData
```

---

A data class to contain information to be communicated between AppFunctions apps and agents.

This class can be logically viewed as a mapping from `String` keys to properties of various supported types, or arrays of supported types.

When trying to retrieve an associated value, `AppFunctionData` would validate the request against the predefined metadata specification provided from `Builder`.

For example,

```
fun callCreateNoteFunction(  
  metadata: AppFunctionMetadata,  
  request: ExecuteAppFunctionRequest,  
) {  
  val response = appFunctionManager.executeAppFunction(request)  
  
  if (metadata.response.valueType is AppFunctionObjectTypeMetadata) {  
    val returnData = response.returnValue.getAppFunctionData(  
      ExecuteAppFunctionResponse.Success.PROPERTY_RETURN_VALUE  
    )  
    val title = returnData.getString("title")  
    // Throws an error if "owner" doesn't exist according to the metadata  
    val owner = returnData.getString("owner")  
    // Throws an error if "content" is String.  
    val content = returnData.getInt("content")  
  }  
}
```

| See also |
| --- |
| `AppFunctionData.Builder` |  |

## Summary

| Nested types |
| --- |
| `public final class AppFunctionData.Builder`  Builder for constructing `AppFunctionData` |

| Public fields |
| --- |
| `static final @NonNull AppFunctionData` | `EMPTY`  Represents an empty `AppFunctionData`. |

| Public methods |
| --- |
| `final boolean` | `containsKey(@NonNull String key)`  Checks if `AppFunctionData` has an associated value with the specified `key`. |
| `final @NonNull T` | `<T extends Object> deserialize(@NonNull Class<@NonNull T> serializableClass)`  Deserializes the `AppFunctionData` to an `AppFunctionSerializable` instance. |
| `final AppFunctionData` | `getAppFunctionData(@NonNull String key)`  Retrieves an `AppFunctionData` value associated with the specified `key`. |
| `final List<@NonNull AppFunctionData>` | `getAppFunctionDataList(@NonNull String key)`  Retrieves a `List` of `AppFunctionData` value associated with the specified `key`. |
| `final boolean` | `getBoolean(@NonNull String key)`  Retrieves a `Boolean` value associated with the specified `key`. |
| `final boolean` | `getBoolean(@NonNull String key, boolean defaultValue)`  Retrieves a `Boolean` value associated with the specified `key`, or returns `defaultValue` if the associated value is not found. |
| `final boolean[]` | `getBooleanArray(@NonNull String key)`  Retrieves a `BooleanArray` value associated with the specified `key`. |
| `final byte[]` | `getByteArray(@NonNull String key)`  Retrieves a `ByteArray` value associated with the specified `key`. |
| `final double` | `getDouble(@NonNull String key)`  Retrieves a `Double` value associated with the specified `key`. |
| `final double` | `getDouble(@NonNull String key, double defaultValue)`  Retrieves a `Double` value associated with the specified `key`, or returns `defaultValue` if the associated value is not found. |
| `final double[]` | `getDoubleArray(@NonNull String key)`  Retrieves a `DoubleArray` value associated with the specified `key`. |
| `final float` | `getFloat(@NonNull String key)`  Retrieves a `Float` value associated with the specified `key`. |
| `final float` | `getFloat(@NonNull String key, float defaultValue)`  Retrieves a `Float` value associated with the specified `key`, or returns `defaultValue` if the associated value is not found. |
| `final float[]` | `getFloatArray(@NonNull String key)`  Retrieves a `FloatArray` value associated with the specified `key`. |
| `final int` | `getInt(@NonNull String key)`  Retrieves an `Int` value associated with the specified `key`. |
| `final int` | `getInt(@NonNull String key, int defaultValue)`  Retrieves an `Int` value associated with the specified `key`, or returns `defaultValue` if the associated value is not found. |
| `final int[]` | `getIntArray(@NonNull String key)`  Retrieves an `IntArray` value associated with the specified `key`. |
| `final long` | `getLong(@NonNull String key)`  Retrieves a `Long` value associated with the specified `key`. |
| `final long` | `getLong(@NonNull String key, long defaultValue)`  Retrieves a `Long` value associated with the specified `key`, or returns `defaultValue` if the associated value is not found. |
| `final long[]` | `getLongArray(@NonNull String key)`  Retrieves a `LongArray` value associated with the specified `key`. |
| `final T` | `<T extends Parcelable> getParcelable(@NonNull String key)`  Retrieves a `Parcelable` value of type `T` associated with the specified `key`. |
| `final T` | `<T extends Parcelable> getParcelable(     @NonNull String key,     @NonNull Class<@NonNull T> clazz )`  Retrieves a `Parcelable` value of type `T` associated with the specified `key`. |
| `final List<@NonNull T>` | `<T extends Parcelable> getParcelableList(@NonNull String key)`  Retrieves a `List` of `Parcelable` values of type `T` associated with the specified `key`. |
| `final List<@NonNull T>` | `<T extends Parcelable> getParcelableList(     @NonNull String key,     @NonNull Class<@NonNull T> clazz )`  Retrieves a `List` of `Parcelable` values of type `T` associated with the specified `key`. |
| `final @NonNull String` | `getQualifiedName()`  Qualified name of the underlying object |
| `final String` | `getString(@NonNull String key)`  Retrieves a `String` value associated with the specified `key`. |
| `final List<@NonNull String>` | `getStringList(@NonNull String key)`  Retrieves a `List` of `String` value associated with the specified `key`. |
| `static final @NonNull AppFunctionData` | `<T extends Object> serialize(     @NonNull T serializable,     @NonNull Class<@NonNull T> serializableClass )`  Serializes `serializable` to an `AppFunctionData`. |
| `@NonNull String` | `toString()` |

## Public fields

### EMPTY

```
public static final @NonNull AppFunctionData EMPTY
```

Represents an empty `AppFunctionData`.

## Public methods

### containsKey

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final boolean containsKey(@NonNull String key)
```

Checks if `AppFunctionData` has an associated value with the specified `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to checks for. |

| Returns |
| --- |
| `boolean` | True if there is an associated value. Otherwise, false. |

| Throws |
| --- |
| `IllegalArgumentException` | If there is no metadata related to `key`. |

### deserialize

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final @NonNull T <T extends Object> deserialize(@NonNull Class<@NonNull T> serializableClass)
```

Deserializes the `AppFunctionData` to an `AppFunctionSerializable` instance.

| Parameters |
| --- |
| `@NonNull Class<@NonNull T> serializableClass` | The AppFunctionSerializable class. |

| Returns |
| --- |
| `@NonNull T` | The instance of `serializableClass`. |

| Throws |
| --- |
| `IllegalArgumentException` | If unable to deserialize the `AppFunctionData` to an instance of `serializableClass`. |

| See also |
| --- |
| `AppFunctionSerializable` |  |

### getAppFunctionData

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final AppFunctionData getAppFunctionData(@NonNull String key)
```

Retrieves an `AppFunctionData` value associated with the specified `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to retrieve the value for. |

| Returns |
| --- |
| `AppFunctionData` | The value associated with the `key`, or null if the associated value is not found. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the value type is incorrect according to the metadata specification. |

### getAppFunctionDataList

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final List<@NonNull AppFunctionData> getAppFunctionDataList(@NonNull String key)
```

Retrieves a `List` of `AppFunctionData` value associated with the specified `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to retrieve the value for. |

| Returns |
| --- |
| `List<@NonNull AppFunctionData>` | The value associated with the `key`. Or null if the associated value is not found. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the value type is incorrect according to the metadata specification. |

### getBoolean

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final boolean getBoolean(@NonNull String key)
```

Retrieves a `Boolean` value associated with the specified `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to retrieve the value for. |

| Returns |
| --- |
| `boolean` | The value associated with the `key`. It would return a default value false if the associated value is not found. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the value type is incorrect according to the metadata specification. |

### getBoolean

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final boolean getBoolean(@NonNull String key, boolean defaultValue)
```

Retrieves a `Boolean` value associated with the specified `key`, or returns `defaultValue` if the associated value is not found.

| Parameters |
| --- |
| `@NonNull String key` | The key to retrieve the value for. |
| `boolean defaultValue` | The default value if the associated value is not found. |

| Returns |
| --- |
| `boolean` | The value associated with the `key`, or the `defaultValue` if the associated value is not required and it is not found. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the value type is incorrect according to the metadata specification. |

### getBooleanArray

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final boolean[] getBooleanArray(@NonNull String key)
```

Retrieves a `BooleanArray` value associated with the specified `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to retrieve the value for. |

| Returns |
| --- |
| `boolean[]` | The value associated with the `key`. Or null if the associated value is not found. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the value type is incorrect according to the metadata specification. |

### getByteArray

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final byte[] getByteArray(@NonNull String key)
```

Retrieves a `ByteArray` value associated with the specified `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to retrieve the value for. |

| Returns |
| --- |
| `byte[]` | The value associated with the `key`. Or null if the associated value is not found. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the value type is incorrect according to the metadata specification. |

### getDouble

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final double getDouble(@NonNull String key)
```

Retrieves a `Double` value associated with the specified `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to retrieve the value for. |

| Returns |
| --- |
| `double` | The value associated with the `key`. It would return a default value 0.0 if the associated value is not found. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the value type is incorrect according to the metadata specification. |

### getDouble

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final double getDouble(@NonNull String key, double defaultValue)
```

Retrieves a `Double` value associated with the specified `key`, or returns `defaultValue` if the associated value is not found.

| Parameters |
| --- |
| `@NonNull String key` | The key to retrieve the value for. |
| `double defaultValue` | The default value if the associated value is not found. |

| Returns |
| --- |
| `double` | The value associated with the `key`, or the `defaultValue` if the associated value is not found. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the value type is incorrect according to the metadata specification. |

### getDoubleArray

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final double[] getDoubleArray(@NonNull String key)
```

Retrieves a `DoubleArray` value associated with the specified `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to retrieve the value for. |

| Returns |
| --- |
| `double[]` | The value associated with the `key`. Or null if the associated value is not found. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the value type is incorrect according to the metadata specification. |

### getFloat

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final float getFloat(@NonNull String key)
```

Retrieves a `Float` value associated with the specified `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to retrieve the value for. |

| Returns |
| --- |
| `float` | The value associated with the `key`. It would return a default value 0.0 if the associated value is not found. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the value type is incorrect according to the metadata specification. |

### getFloat

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final float getFloat(@NonNull String key, float defaultValue)
```

Retrieves a `Float` value associated with the specified `key`, or returns `defaultValue` if the associated value is not found.

| Parameters |
| --- |
| `@NonNull String key` | The key to retrieve the value for. |
| `float defaultValue` | The default value if the associated value is not found. |

| Returns |
| --- |
| `float` | The value associated with the `key`, or the `defaultValue` if the associated is not found. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the value type is incorrect according to the metadata specification. |

### getFloatArray

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final float[] getFloatArray(@NonNull String key)
```

Retrieves a `FloatArray` value associated with the specified `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to retrieve the value for. |

| Returns |
| --- |
| `float[]` | The value associated with the `key`. Or null if the associated value is not found. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the value type is incorrect according to the metadata specification. |

### getInt

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final int getInt(@NonNull String key)
```

Retrieves an `Int` value associated with the specified `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to retrieve the value for. |

| Returns |
| --- |
| `int` | The value associated with the `key`. It would return a default value 0L if the associated value is not found. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the value type is incorrect according to the metadata specification. |

### getInt

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final int getInt(@NonNull String key, int defaultValue)
```

Retrieves an `Int` value associated with the specified `key`, or returns `defaultValue` if the associated value is not found.

| Parameters |
| --- |
| `@NonNull String key` | The key to retrieve the value for. |
| `int defaultValue` | The default value if the associated value is not found. |

| Returns |
| --- |
| `int` | The value associated with the `key`, or the `defaultValue` if the associated value is not found. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the value type is incorrect according to the metadata specification. |

### getIntArray

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final int[] getIntArray(@NonNull String key)
```

Retrieves an `IntArray` value associated with the specified `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to retrieve the value for. |

| Returns |
| --- |
| `int[]` | The value associated with the `key`. Or null if the associated value is not found. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the value type is incorrect according to the metadata specification. |

### getLong

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final long getLong(@NonNull String key)
```

Retrieves a `Long` value associated with the specified `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to retrieve the value for. |

| Returns |
| --- |
| `long` | The value associated with the `key`. It would return a default value 0L if the associated value is not found. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the value type is incorrect according to the metadata specification. |

### getLong

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final long getLong(@NonNull String key, long defaultValue)
```

Retrieves a `Long` value associated with the specified `key`, or returns `defaultValue` if the associated value is not found.

| Parameters |
| --- |
| `@NonNull String key` | The key to retrieve the value for. |
| `long defaultValue` | The default value if the associated value is not found. |

| Returns |
| --- |
| `long` | The value associated with the `key`, or the `defaultValue` if the associated value is not found. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the value type is incorrect according to the metadata specification. |

### getLongArray

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final long[] getLongArray(@NonNull String key)
```

Retrieves a `LongArray` value associated with the specified `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to retrieve the value for. |

| Returns |
| --- |
| `long[]` | The value associated with the `key`. Or null if the associated value is not found. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the value type is incorrect according to the metadata specification. |

### getParcelable

```
public final T <T extends Parcelable> getParcelable(@NonNull String key)
```

Retrieves a `Parcelable` value of type `T` associated with the specified `key`.

Returns null or fails with an exception if:

* No value exists for the given `key`.
* The object is not of type `T`.
* The `Parcelable` of type `T` cannot be loaded by the app's `classLoader`.

For `Parcelable` types not defined by the Android platform (e.g., custom classes shared between agents and apps), forward and backward compatibility is **not guaranteed** by this library. Implementers are responsible for managing any compatibility and versioning concerns.

| Parameters |
| --- |
| `<T extends Parcelable>` | The type of the `Parcelable` object to retrieve. |
| `@NonNull String key` | The key to retrieve the value for. |

| Returns |
| --- |
| `T` | The value associated with the `key`, or null if the associated value is not found or is not of type `T`. |

### getParcelable

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final T <T extends Parcelable> getParcelable(  
    @NonNull String key,  
    @NonNull Class<@NonNull T> clazz  
)
```

Retrieves a `Parcelable` value of type `T` associated with the specified `key`.

Returns null or fails with an exception if:

* No value exists for the given `key`.
* The object is not of type `clazz`.
* The `Parcelable` of type `T` cannot be loaded by the app's `classLoader`.

For `Parcelable` types not defined by the Android platform (e.g., custom classes shared between agents and apps), forward and backward compatibility is **not guaranteed** by this library. Implementers are responsible for managing any compatibility and versioning concerns.

| Parameters |
| --- |
| `@NonNull String key` | The key to retrieve the value for. |
| `@NonNull Class<@NonNull T> clazz` | The `Class` of the `Parcelable` object to retrieve, of type `T`. |

| Returns |
| --- |
| `T` | The value associated with the `key`, or null if the associated value is not found or is not of type `T`. |

### getParcelableList

```
public final List<@NonNull T> <T extends Parcelable> getParcelableList(@NonNull String key)
```

Retrieves a `List` of `Parcelable` values of type `T` associated with the specified `key`.

For `Parcelable` types not defined by the Android platform (e.g., custom classes shared between agents and apps), forward and backward compatibility is **not guaranteed** by this library. Implementers are responsible for managing any compatibility and versioning concerns.

| Parameters |
| --- |
| `<T extends Parcelable>` | The type of the `Parcelable` object to retrieve. |
| `@NonNull String key` | The key to retrieve the list for. |

| Returns |
| --- |
| `List<@NonNull T>` | The `List` associated with the `key`, or null if the value is not found or if any list item is not of type `T`. |

### getParcelableList

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final List<@NonNull T> <T extends Parcelable> getParcelableList(  
    @NonNull String key,  
    @NonNull Class<@NonNull T> clazz  
)
```

Retrieves a `List` of `Parcelable` values of type `T` associated with the specified `key`.

For `Parcelable` types not defined by the Android platform (e.g., custom classes shared between agents and apps), forward and backward compatibility is **not guaranteed** by this library. Implementers are responsible for managing any compatibility and versioning concerns.

| Parameters |
| --- |
| `@NonNull String key` | The key to retrieve the list for. |
| `@NonNull Class<@NonNull T> clazz` | The `Class` of the `Parcelable` object to retrieve, of type `T`. |

| Returns |
| --- |
| `List<@NonNull T>` | The `List` associated with the `key`, or null if the value is not found or if any list item is not of type `T`. |

### getQualifiedName

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final @NonNull String getQualifiedName()
```

Qualified name of the underlying object

### getString

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final String getString(@NonNull String key)
```

Retrieves a `String` value associated with the specified `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to retrieve the value for. |

| Returns |
| --- |
| `String` | The value associated with the `key`, or null if the associated value is not found. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the value type is incorrect according to the metadata specification. |

### getStringList

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final List<@NonNull String> getStringList(@NonNull String key)
```

Retrieves a `List` of `String` value associated with the specified `key`.

| Parameters |
| --- |
| `@NonNull String key` | The key to retrieve the value for. |

| Returns |
| --- |
| `List<@NonNull String>` | The value associated with the `key`. Or null if the associated value is not found. |

| Throws |
| --- |
| `IllegalArgumentException` | if the `key` is not allowed or the value type is incorrect according to the metadata specification. |

### serialize

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public static final @NonNull AppFunctionData <T extends Object> serialize(  
    @NonNull T serializable,  
    @NonNull Class<@NonNull T> serializableClass  
)
```

Serializes `serializable` to an `AppFunctionData`.

| Parameters |
| --- |
| `@NonNull T serializable` | The instance of `serializableClass`. |
| `@NonNull Class<@NonNull T> serializableClass` | The class of `serializable`. |

| Returns |
| --- |
| `@NonNull AppFunctionData` | `AppFunctionData` with properties from `serializable`. |

| Throws |
| --- |
| `IllegalArgumentException` | If unable to serialize `serializable` to an `AppFunctionData`. |

| See also |
| --- |
| `AppFunctionSerializable` |  |

### toString

```
public @NonNull String toString()
```