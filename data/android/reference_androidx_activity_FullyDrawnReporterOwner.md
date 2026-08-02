# FullyDrawnReporterOwner

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/FullyDrawnReporterOwner))

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/FullyDrawnReporterOwner.kt+class:androidx.activity.FullyDrawnReporterOwner)

Added in [1.7.0](/jetpack/androidx/releases/activity#1.7.0)

---

[Kotlin](/reference/kotlin/androidx/activity/FullyDrawnReporterOwner "View this page in Kotlin")
|Java

```
public interface FullyDrawnReporterOwner
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

A class that has a `FullyDrawnReporter` that allows you to have separate parts of the UI independently register when they have been fully loaded.

## Summary

| Public methods |
| --- |
| `abstract @NonNull FullyDrawnReporter` | `getFullyDrawnReporter()`  Retrieve the `FullyDrawnReporter` that should handle the independent parts of the UI that separately report that they are fully drawn. |

## Public methods

### getFullyDrawnReporter

Added in [1.7.0](/jetpack/androidx/releases/activity#1.7.0)

```
abstract @NonNull FullyDrawnReporter getFullyDrawnReporter()
```

Retrieve the `FullyDrawnReporter` that should handle the independent parts of the UI that separately report that they are fully drawn.
