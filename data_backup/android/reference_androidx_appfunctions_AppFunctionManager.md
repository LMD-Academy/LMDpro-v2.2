--- source: https://developer.android.com/reference/androidx/appfunctions/AppFunctionManager ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# AppFunctionManager

Artifact: [androidx.appfunctions:appfunctions](/jetpack/androidx/releases/appfunctions)

[View Source](https://cs.android.com/search?q=file:androidx/appfunctions/AppFunctionManager.kt+class:androidx.appfunctions.AppFunctionManager)

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

---

[Kotlin](/reference/kotlin/androidx/appfunctions/AppFunctionManager "View this page in Kotlin")
|Java

```
public final class AppFunctionManager
```

---

Provides access to interact with App Functions. This is a backward-compatible wrapper for the platform class `android.app.appfunctions.AppFunctionManager`.

## Summary

| Constants |
| --- |
| `static final int` | `APP_FUNCTION_STATE_DEFAULT`  The default state of the app function. |
| `static final int` | `APP_FUNCTION_STATE_DISABLED`  The app function is disabled. |
| `static final int` | `APP_FUNCTION_STATE_ENABLED`  The app function is enabled. |

| Public methods |
| --- |
| `final @NonNull ExecuteAppFunctionResponse` | `@RequiresPermission(value = "android.permission.EXECUTE_APP_FUNCTIONS", conditional = true) executeAppFunction(@NonNull ExecuteAppFunctionRequest request)`  Execute the app function. |
| `static final AppFunctionManager` | `getInstance(@NonNull Context context)`  Gets an instance of `AppFunctionManager` if the AppFunction feature is supported. |
| `final boolean` | `isAppFunctionEnabled(@NonNull String functionId)`  Checks if `functionId` in the caller's package is enabled. |
| `final boolean` | `@RequiresPermission(value = "android.permission.EXECUTE_APP_FUNCTIONS", conditional = true) isAppFunctionEnabled(     @NonNull String packageName,     @NonNull String functionId )`  Checks if `functionId` in `packageName` is enabled. |
| `final @NonNull Flow<@NonNull List<@NonNull AppFunctionPackageMetadata>>` | `@RequiresPermission(value = "android.permission.EXECUTE_APP_FUNCTIONS", conditional = true) observeAppFunctions(@NonNull AppFunctionSearchSpec searchSpec)`  Observes available app functions metadata based on the provided filters. |
| `final @NonNull List<@NonNull AppFunctionMetadata>` | `@RequiresPermission(anyOf = ["android.permission.EXECUTE_APP_FUNCTIONS", "android.permission.DISCOVER_APP_FUNCTIONS", "android.permission.EXECUTE_APP_FUNCTIONS_SYSTEM"], conditional = true) searchAppFunctions(@NonNull AppFunctionSearchSpec searchSpec)`  Searches app function `AppFunctionMetadata`s. |
| `final void` | `setAppFunctionEnabled(@NonNull String functionId, int newEnabledState)`  Sets `newEnabledState` to an app function `functionId` owned by the calling package. |

## Constants

### APP\_FUNCTION\_STATE\_DEFAULT

```
public static final int APP_FUNCTION_STATE_DEFAULT
```

The default state of the app function. Call `setAppFunctionEnabled` with this to reset enabled state to the default value.

### APP\_FUNCTION\_STATE\_DISABLED

```
public static final int APP_FUNCTION_STATE_DISABLED
```

The app function is disabled. To disable an app function, call `setAppFunctionEnabled` with this value.

### APP\_FUNCTION\_STATE\_ENABLED

```
public static final int APP_FUNCTION_STATE_ENABLED
```

The app function is enabled. To enable an app function, call `setAppFunctionEnabled` with this value.

## Public methods

### executeAppFunction

```
@RequiresPermission(value = "android.permission.EXECUTE_APP_FUNCTIONS", conditional = true)  
public final @NonNull ExecuteAppFunctionResponse executeAppFunction(@NonNull ExecuteAppFunctionRequest request)
```

Execute the app function.

This method matches the platform behavior defined in `android.app.appfunctions.AppFunctionManager.executeAppFunction`.

| Parameters |
| --- |
| `@NonNull ExecuteAppFunctionRequest request` | the app function details and the arguments. |

| Returns |
| --- |
| `@NonNull ExecuteAppFunctionResponse` | the result of the attempt to execute the function. |

### getInstance

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public static final AppFunctionManager getInstance(@NonNull Context context)
```

Gets an instance of `AppFunctionManager` if the AppFunction feature is supported.

The AppFunction feature is supported if the calling user is not a profile and either of the following conditions is met:

* SDK version is 36 or higher.
* SDK version is 34 or higher, and the device implements the App Function extension ibrary.

| Returns |
| --- |
| `AppFunctionManager` | an instance of `AppFunctionManager` if the AppFunction feature is supported or `null`. |

### isAppFunctionEnabled

```
public final boolean isAppFunctionEnabled(@NonNull String functionId)
```

Checks if `functionId` in the caller's package is enabled.

This method matches the platform behavior defined in `android.app.appfunctions.AppFunctionManager.isAppFunctionEnabled`.

| Parameters |
| --- |
| `@NonNull String functionId` | The identifier of the app function. |

| Throws |
| --- |
| `IllegalArgumentException` | If the `functionId` is not available in caller's package. |

### isAppFunctionEnabled

```
@RequiresPermission(value = "android.permission.EXECUTE_APP_FUNCTIONS", conditional = true)  
public final boolean isAppFunctionEnabled(  
    @NonNull String packageName,  
    @NonNull String functionId  
)
```

Checks if `functionId` in `packageName` is enabled.

This method matches the platform behavior defined in `android.app.appfunctions.AppFunctionManager.isAppFunctionEnabled`.

| Parameters |
| --- |
| `@NonNull String packageName` | The package name of the owner of `functionId`. |
| `@NonNull String functionId` | The identifier of the app function. |

| Throws |
| --- |
| `IllegalArgumentException` | If the `functionId` is not available under `packageName`. |

### observeAppFunctions

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
@RequiresPermission(value = "android.permission.EXECUTE_APP_FUNCTIONS", conditional = true)  
public final @NonNull Flow<@NonNull List<@NonNull AppFunctionPackageMetadata>> observeAppFunctions(@NonNull AppFunctionSearchSpec searchSpec)
```

Observes available app functions metadata based on the provided filters.

Allows discovering app functions that match the given `searchSpec` criteria and continuously emits updates when relevant metadata changes.

Updates to `AppFunctionPackageMetadata` can occur when the app defining the function is updated or when a function's enabled state changes, and if multiple updates happen within a short duration, only the latest update might be emitted.

The calling app can observe metadata for:

* Functions in its own package (no permission required).
* When holding the `android.permission.EXECUTE_APP_FUNCTIONS` permission - functions in other packages that it is allowed to query via `android.content.pm.PackageManager.canPackageQuery`.

| Parameters |
| --- |
| `@NonNull AppFunctionSearchSpec searchSpec` | an `AppFunctionSearchSpec` instance specifying the filters for searching the app function metadata. |

| Returns |
| --- |
| `@NonNull Flow<@NonNull List<@NonNull AppFunctionPackageMetadata>>` | a flow that emits a list of `AppFunctionPackageMetadata` matching the search criteria and updated versions of this list when underlying data changes. |

### searchAppFunctions

```
@RequiresPermission(anyOf = ["android.permission.EXECUTE_APP_FUNCTIONS", "android.permission.DISCOVER_APP_FUNCTIONS", "android.permission.EXECUTE_APP_FUNCTIONS_SYSTEM"], conditional = true)  
public final @NonNull List<@NonNull AppFunctionMetadata> searchAppFunctions(@NonNull AppFunctionSearchSpec searchSpec)
```

Searches app function `AppFunctionMetadata`s.

Note that the state is not guaranteed to be the latest, as metadata can change between request and execute times when apps are updated.

The calling app can search for:

* Functions in its own package (no permission required).
* Functions in other packages that it is allowed to query via `android.content.pm.PackageManager.canPackageQuery` when holding the `android.Manifest.permission.EXECUTE_APP_FUNCTIONS` permission.
* Functions in other packages that it is allowed to query via `android.content.pm.PackageManager.canPackageQuery` when holding either the `android.Manifest.permission.EXECUTE_APP_FUNCTIONS_SYSTEM` or `android.Manifest.permission.DISCOVER_APP_FUNCTIONS` permission on `Build.VERSION_CODES.CINNAMON_BUN` and above.

| Parameters |
| --- |
| `@NonNull AppFunctionSearchSpec searchSpec` | The spec of app functions to search for. |

### setAppFunctionEnabled

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
public final void setAppFunctionEnabled(@NonNull String functionId, int newEnabledState)
```

Sets `newEnabledState` to an app function `functionId` owned by the calling package.

This method matches the platform behavior defined in `android.app.appfunctions.AppFunctionManager.setAppFunctionEnabled`.

| Parameters |
| --- |
| `@NonNull String functionId` | The identifier of the app function. |
| `int newEnabledState` | The new state of the app function. |

| Throws |
| --- |
| `IllegalArgumentException` | If the `functionId` is not available. |