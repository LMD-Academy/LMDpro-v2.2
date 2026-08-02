--- source: https://developer.android.com/reference/androidx/appfunctions/package-summary ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# androidx.appfunctions

---

[Kotlin](/reference/kotlin/androidx/appfunctions/package-summary "View this page in Kotlin")
|Java

## Annotations

|  |  |
| --- | --- |
| `AppFunction` | Marks a function under `AppFunctionServiceEntryPoint` as callable by other applications. |
| `AppFunctionInstruction` | Provides an explicit instruction for an `AppFunction`, an `AppFunctionSignature`, or an `AppFunctionSerializable` and their respective components. |
| `AppFunctionIntValueConstraint` | Specifies constraints applied on the integer values for return types, parameters, or properties in app functions. |
| `AppFunctionSchemaDefinition` | Marks an interface as a pre-defined schema for an App Function. |
| `AppFunctionSerializable` | Annotates a class to indicate that it can be serialized and transferred between processes using AppFunction. |
| `AppFunctionServiceEntryPoint` | Annotation to mark `AppFunctionService` as an entry point. |
| `AppFunctionSignature` | Annotation to define an AppFunction signature that will have its implementation registered using `android.app.appfunctions.AppFunctionManager.registerAppFunction`. |
| `AppFunctionStringValueConstraint` | Specifies constraints applied on the string values for return types, parameters, or properties in app functions. |

## Interfaces

|  |  |
| --- | --- |
| `AppFunctionConfiguration.Provider` | A class to provide customized `AppFunctionConfiguration` object. |
| `AppFunctionContext` | The execution context of app function. |
| `AppFunctionResourceContainer` | Represents resources embedded within a class annotated with `AppFunctionSerializable`. |
| `ExecuteAppFunctionResponse` | Represents a response of an execution of an app function. |

## Classes

|  |  |
| --- | --- |
| `AppFunctionConfiguration` | The configuration object used to customize AppFunction setup. |
| `AppFunctionConfiguration.Builder` | A builder for `AppFunctionConfiguration`. |
| `AppFunctionData` | A data class to contain information to be communicated between AppFunctions apps and agents. |
| `AppFunctionData.Builder` | Builder for constructing `AppFunctionData` |
| `AppFunctionManager` | Provides access to interact with App Functions. |
| `AppFunctionSearchSpec` | Defines the specifications for filtering and searching app function snapshots. |
| `AppFunctionService` | Abstract base class to provide app functions to the system. |
| `AppFunctionTextResource` | Represents a text resource in an app function's response/parameters. |
| `AppFunctionUriGrant` | Represents a `Uri` for which temporary access permission is to be granted to the caller of an AppFunction execution. |
| `ExecuteAppFunctionRequest` | Represents a request to execute a specific app function. |
| `ExecuteAppFunctionResponse.Error` | Represents a failed execution of an app function. |
| `ExecuteAppFunctionResponse.Success` | Represents a successful execution of an app function. |
| `R` |  |
| `R.attr` |  |

## Exceptions

|  |  |
| --- | --- |
| `AppFunctionAppException` | Thrown when an error is caused by the app providing the function. |
| `AppFunctionAppUnknownException` | Thrown when an unknown error occurred while processing the call in the AppFunctionService. |
| `AppFunctionCancelledException` | Thrown when an operation was cancelled. |
| `AppFunctionDeniedException` | Thrown when the caller does not have the permission to execute an app function. |
| `AppFunctionDisabledException` | Thrown when the caller tried to execute a disabled app function. |
| `AppFunctionElementAlreadyExistsException` | Thrown when the caller tried to create a resource/entity that already exists or has conflicts with existing resource/entity. |
| `AppFunctionElementNotFoundException` | Thrown when the caller tried to request a resource/entity that does not exist. |
| `AppFunctionException` | An exception that is thrown when an error occurs during an app function execution. |
| `AppFunctionFunctionNotFoundException` | Thrown when the caller tries to execute a function that does not exist. |
| `AppFunctionInvalidArgumentException` | Thrown when the caller supplied invalid arguments to `ExecuteAppFunctionRequest`'s parameters. |
| `AppFunctionLimitExceededException` | Thrown when the caller exceeded the allowed request rate. |
| `AppFunctionNotSupportedException` | Thrown when an app receives a request to perform an unsupported action. |
| `AppFunctionPermissionRequiredException` | Thrown when the app lacks the necessary permission to fulfill the request. |
| `AppFunctionRequestException` | Thrown when the error is caused by the app requesting a function execution. |
| `AppFunctionSystemException` | Thrown when an internal unexpected error comes from the system. |
| `AppFunctionSystemUnknownException` | Thrown when an internal unexpected error comes from the system. |
| `AppFunctionUnknownException` | Thrown when an unknown error has occurred. |