--- source: https://developer.android.com/reference/androidx/activity/package-summary ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# androidx.activity

---

[Kotlin](/reference/kotlin/androidx/activity/package-summary "View this page in Kotlin")
|Java

## Annotations

|  |  |
| --- | --- |
| `ExperimentalActivityApi` | Marks declarations that are **experimental** in the Activity APIs. |

## Interfaces

|  |  |
| --- | --- |
| `FullyDrawnReporterOwner` | A class that has a `FullyDrawnReporter` that allows you to have separate parts of the UI independently register when they have been fully loaded. |
| `OnBackPressedDispatcherOwner` | A class that has an `OnBackPressedDispatcher` that allows you to register a `OnBackPressedCallback` for handling the system back button. |

## Classes

|  |  |
| --- | --- |
| `ActivityViewModelLazyKt` |  |
| `BackEventCompat` | Compat around the `BackEvent` class |
| `ComponentActivity` | Base class for activities that enables composition of higher level components. |
| `ComponentDialog` | Base class for dialogs that enables composition of higher level components. |
| `EdgeToEdge` |  |
| `FullyDrawnReporter` | Manages when to call `Activity.reportFullyDrawn`. |
| `FullyDrawnReporterKt` |  |
| `OnBackPressedCallback` | Class for handling `OnBackPressedDispatcher.onBackPressed` callbacks without strongly coupling that implementation to a subclass of `ComponentActivity`. |
| `OnBackPressedDispatcher` | Dispatcher that can be used to register `OnBackPressedCallback` instances for handling the `ComponentActivity.onBackPressed` callback via composition. |
| `OnBackPressedDispatcherKt` |  |
| `PipHintTrackerKt` |  |
| `SystemBarStyle` | The style for the status bar or the navigation bar used in `enableEdgeToEdge`. |
| `ViewTreeFullyDrawnReporterOwner` |  |
| `ViewTreeOnBackPressedDispatcherOwner` |  |
| `ActivityFlags` | A collection of runtime feature flags used to guard behavior changes, migrations, or experimental paths within the `androidx.activity` package and its related integrations. |