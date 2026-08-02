# AppFunctionResourceContainer

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/appfunctions/AppFunctionResourceContainer))

Artifact: [androidx.appfunctions:appfunctions](/jetpack/androidx/releases/appfunctions)

[View Source](https://cs.android.com/search?q=file:androidx/appfunctions/AppFunctionResourceContainer.kt+class:androidx.appfunctions.AppFunctionResourceContainer)

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

---

[Kotlin](/reference/kotlin/androidx/appfunctions/AppFunctionResourceContainer "View this page in Kotlin")
|Java

```
public interface AppFunctionResourceContainer
```

---

Represents resources embedded within a class annotated with `AppFunctionSerializable`.

The consuming application is responsible for determining the optimal presentation of these resources, whether for the end-user's benefit or for further consumption by an AI model.

## Summary

| Public methods |
| --- |
| `default @NonNull List<@NonNull AppFunctionTextResource>` | `getResources()`  List of resources embedded within the AppFunctionData. |

## Public methods

### getResources

Added in [1.0.0-alpha10](/jetpack/androidx/releases/appfunctions#1.0.0-alpha10)

```
default @NonNull List<@NonNull AppFunctionTextResource> getResources()
```

List of resources embedded within the AppFunctionData.
