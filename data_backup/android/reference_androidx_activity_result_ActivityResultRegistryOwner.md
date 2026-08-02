--- source: https://developer.android.com/reference/androidx/activity/result/ActivityResultRegistryOwner ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ActivityResultRegistryOwner

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/ActivityResultRegistryOwner.kt+class:androidx.activity.result.ActivityResultRegistryOwner)

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

---

[Kotlin](/reference/kotlin/androidx/activity/result/ActivityResultRegistryOwner "View this page in Kotlin")
|Java

```
public interface ActivityResultRegistryOwner
```

Known direct subclasses

[ComponentActivity](/reference/androidx/activity/ComponentActivity)

|  |  |
| --- | --- |
| `ComponentActivity` | Base class for activities that enables composition of higher level components. |

Known indirect subclasses

[AppCompatActivity](/reference/androidx/appcompat/app/AppCompatActivity), [BaseCarAppActivity](/reference/androidx/car/app/activity/BaseCarAppActivity), [CarAppActivity](/reference/androidx/car/app/activity/CarAppActivity), [FragmentActivity](/reference/androidx/fragment/app/FragmentActivity), [LauncherActivity](/reference/androidx/car/app/activity/LauncherActivity)

|  |  |
| --- | --- |
| `AppCompatActivity` | Base class for activities that wish to use some of the newer platform features on older Android devices. |
| `BaseCarAppActivity` | Core logic for CarAppLibrary Activity interaction with a host. |
| `CarAppActivity` | The class representing a car app activity in the main display. |
| `FragmentActivity` | Base class for activities that want to use the support-based `Fragments`. |
| `LauncherActivity` | This class handles providing the right launcher activity when running native applications and Car App Library applications. |

---

A class that has an `ActivityResultRegistry` that allows you to register a `ActivityResultCallback` for handling an `androidx.activity.result.contract.ActivityResultContract`.

If it is not safe to call `ActivityResultRegistry.register` in the constructor, it is strongly recommended to also implement `ActivityResultCaller`.

| See also |
| --- |
| `ActivityResultRegistry` |  |

## Summary

| Public methods |
| --- |
| `abstract @NonNull ActivityResultRegistry` | `getActivityResultRegistry()`  Returns the ActivityResultRegistry of the provider. |

## Public methods

### getActivityResultRegistry

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
abstract @NonNull ActivityResultRegistry getActivityResultRegistry()
```

Returns the ActivityResultRegistry of the provider.

| Returns |
| --- |
| `@NonNull ActivityResultRegistry` | The activity result registry of the provider. |