--- source: https://developer.android.com/reference/androidx/activity/contextaware/ContextAware ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ContextAware

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/contextaware/ContextAware.kt+class:androidx.activity.contextaware.ContextAware)

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

---

[Kotlin](/reference/kotlin/androidx/activity/contextaware/ContextAware "View this page in Kotlin")
|Java

```
public interface ContextAware
```

Known direct subclasses

[ComponentActivity](/reference/androidx/activity/ComponentActivity), [Fragment](/reference/androidx/fragment/app/Fragment)

|  |  |
| --- | --- |
| `ComponentActivity` | Base class for activities that enables composition of higher level components. |
| `Fragment` | Static library support version of the framework's `android.app.Fragment`. |

Known indirect subclasses

[AbstractListDetailFragment](/reference/androidx/navigation/fragment/AbstractListDetailFragment), [AbstractProgressFragment](/reference/androidx/navigation/dynamicfeatures/fragment/ui/AbstractProgressFragment), [AmbientModeSupport](/reference/androidx/wear/ambient/AmbientModeSupport), [AppCompatActivity](/reference/androidx/appcompat/app/AppCompatActivity), [AppCompatDialogFragment](/reference/androidx/appcompat/app/AppCompatDialogFragment), [BaseCarAppActivity](/reference/androidx/car/app/activity/BaseCarAppActivity), [BaseLeanbackPreferenceFragmentCompat](/reference/androidx/leanback/preference/BaseLeanbackPreferenceFragmentCompat), [BaseSupportFragment](/reference/androidx/leanback/app/BaseSupportFragment), [BrandedSupportFragment](/reference/androidx/leanback/app/BrandedSupportFragment), [BrowseSupportFragment](/reference/androidx/leanback/app/BrowseSupportFragment), [CarAppActivity](/reference/androidx/car/app/activity/CarAppActivity), [DefaultProgressFragment](/reference/androidx/navigation/dynamicfeatures/fragment/ui/DefaultProgressFragment), [DetailsSupportFragment](/reference/androidx/leanback/app/DetailsSupportFragment), [DialogFragment](/reference/androidx/fragment/app/DialogFragment), [DynamicNavHostFragment](/reference/androidx/navigation/dynamicfeatures/fragment/DynamicNavHostFragment), [EditTextPreferenceDialogFragmentCompat](/reference/androidx/preference/EditTextPreferenceDialogFragmentCompat), [EditablePdfViewerFragment](/reference/androidx/pdf/ink/EditablePdfViewerFragment), [ErrorSupportFragment](/reference/androidx/leanback/app/ErrorSupportFragment), [FragmentActivity](/reference/androidx/fragment/app/FragmentActivity), [GuidedStepSupportFragment](/reference/androidx/leanback/app/GuidedStepSupportFragment), [HeadersSupportFragment](/reference/androidx/leanback/app/HeadersSupportFragment), [LauncherActivity](/reference/androidx/car/app/activity/LauncherActivity), [LeanbackEditTextPreferenceDialogFragmentCompat](/reference/androidx/leanback/preference/LeanbackEditTextPreferenceDialogFragmentCompat), [LeanbackListPreferenceDialogFragmentCompat](/reference/androidx/leanback/preference/LeanbackListPreferenceDialogFragmentCompat), [LeanbackPreferenceDialogFragmentCompat](/reference/androidx/leanback/preference/LeanbackPreferenceDialogFragmentCompat), [LeanbackPreferenceFragmentCompat](/reference/androidx/leanback/preference/LeanbackPreferenceFragmentCompat), [LeanbackSettingsFragmentCompat](/reference/androidx/leanback/preference/LeanbackSettingsFragmentCompat), [ListFragment](/reference/androidx/fragment/app/ListFragment), [ListPreferenceDialogFragmentCompat](/reference/androidx/preference/ListPreferenceDialogFragmentCompat), [MediaRouteChooserDialogFragment](/reference/androidx/mediarouter/app/MediaRouteChooserDialogFragment), [MediaRouteControllerDialogFragment](/reference/androidx/mediarouter/app/MediaRouteControllerDialogFragment), [MediaRouteDiscoveryFragment](/reference/androidx/mediarouter/app/MediaRouteDiscoveryFragment), [MultiSelectListPreferenceDialogFragmentCompat](/reference/androidx/preference/MultiSelectListPreferenceDialogFragmentCompat), [NavHostFragment](/reference/androidx/navigation/fragment/NavHostFragment), [OnboardingSupportFragment](/reference/androidx/leanback/app/OnboardingSupportFragment), [PdfViewerFragment](/reference/androidx/pdf/viewer/fragment/PdfViewerFragment), [PlaybackSupportFragment](/reference/androidx/leanback/app/PlaybackSupportFragment), [PreferenceDialogFragmentCompat](/reference/androidx/preference/PreferenceDialogFragmentCompat), [PreferenceFragmentCompat](/reference/androidx/preference/PreferenceFragmentCompat), [PreferenceHeaderFragmentCompat](/reference/androidx/preference/PreferenceHeaderFragmentCompat), [RowsSupportFragment](/reference/androidx/leanback/app/RowsSupportFragment), [SearchSupportFragment](/reference/androidx/leanback/app/SearchSupportFragment), [VerticalGridSupportFragment](/reference/androidx/leanback/app/VerticalGridSupportFragment), [VideoSupportFragment](/reference/androidx/leanback/app/VideoSupportFragment)

|  |  |
| --- | --- |
| `AbstractListDetailFragment` | A fragment supports adaptive two-pane layout. |
| `AbstractProgressFragment` | The base class for `Fragment`s that handle dynamic feature installation. |
| `AmbientModeSupport` | **This class is deprecated.** Use `AmbientLifecycleObserver` instead. |
| `AppCompatActivity` | Base class for activities that wish to use some of the newer platform features on older Android devices. |
| `AppCompatDialogFragment` | A special version of `DialogFragment` which uses an `AppCompatDialog` in place of a platform-styled dialog. |
| `BaseCarAppActivity` | Core logic for CarAppLibrary Activity interaction with a host. |
| `BaseLeanbackPreferenceFragmentCompat` | This fragment provides a preference fragment with leanback-style behavior, suitable for embedding into broader UI elements. |
| `BaseSupportFragment` | Base class for leanback Fragments. |
| `BrandedSupportFragment` | Fragment class for managing search and branding using a view that implements `TitleViewAdapter.Provider`. |
| `BrowseSupportFragment` | A fragment for creating Leanback browse screens. |
| `CarAppActivity` | The class representing a car app activity in the main display. |
| `DefaultProgressFragment` | The default `androidx.fragment.app.Fragment` to display during installation progress. |
| `DetailsSupportFragment` | A fragment for creating Leanback details screens. |
| `DialogFragment` | A fragment that displays a dialog window, floating in the foreground of its activity's window. |
| `DynamicNavHostFragment` | The `NavHostFragment` for dynamic features. |
| `EditTextPreferenceDialogFragmentCompat` |  |
| `EditablePdfViewerFragment` | A `androidx.fragment.app.Fragment` that extends `PdfViewerFragment` to provide PDF editing capabilities, including annotation and form filling, leveraging the 'androidx.ink' library. |
| `ErrorSupportFragment` | A fragment for displaying an error indication. |
| `FragmentActivity` | Base class for activities that want to use the support-based `Fragments`. |
| `GuidedStepSupportFragment` | A GuidedStepSupportFragment is used to guide the user through a decision or series of decisions. |
| `HeadersSupportFragment` | An fragment containing a list of row headers. |
| `LauncherActivity` | This class handles providing the right launcher activity when running native applications and Car App Library applications. |
| `LeanbackEditTextPreferenceDialogFragmentCompat` | Implemented a dialog to input text. |
| `LeanbackListPreferenceDialogFragmentCompat` | Implemented a dialog to show `ListPreference` or `MultiSelectListPreference`. |
| `LeanbackPreferenceDialogFragmentCompat` | A fragment that shows `DialogPreference`, for example `androidx.preference.ListPreference` or `androidx.preference.MultiSelectListPreference`. |
| `LeanbackPreferenceFragmentCompat` | This fragment provides a fully decorated leanback-style preference fragment, including a list background and header. |
| `LeanbackSettingsFragmentCompat` | This fragment provides a container for displaying a `LeanbackPreferenceFragmentCompat` |
| `ListFragment` | Static library support version of the framework's `android.app.ListFragment`. |
| `ListPreferenceDialogFragmentCompat` |  |
| `MediaRouteChooserDialogFragment` | Media route chooser dialog fragment. |
| `MediaRouteControllerDialogFragment` | Media route controller dialog fragment. |
| `MediaRouteDiscoveryFragment` | Media route discovery fragment. |
| `MultiSelectListPreferenceDialogFragmentCompat` |  |
| `NavHostFragment` | NavHostFragment provides an area within your layout for self-contained navigation to occur. |
| `OnboardingSupportFragment` | An OnboardingSupportFragment provides a common and simple way to build onboarding screen for applications. |
| `PdfViewerFragment` | A Fragment that renders a PDF document. |
| `PlaybackSupportFragment` | A fragment for displaying playback controls and related content. |
| `PreferenceDialogFragmentCompat` | Abstract base class which presents a dialog associated with a `DialogPreference`. |
| `PreferenceFragmentCompat` | A PreferenceFragmentCompat is the entry point to using the Preference library. |
| `PreferenceHeaderFragmentCompat` | `PreferenceHeaderFragmentCompat` implements a two-pane fragment for preferences. |
| `RowsSupportFragment` | An ordered set of rows of leanback widgets. |
| `SearchSupportFragment` | A fragment to handle searches. |
| `VerticalGridSupportFragment` | A fragment for creating leanback vertical grids. |
| `VideoSupportFragment` | Subclass of `PlaybackSupportFragment` that is responsible for providing a `SurfaceView` and rendering video. |

---

A `ContextAware` class is associated with a `Context` sometime after the class is instantiated. By adding a `OnContextAvailableListener`, you can receive a callback for that event.

Classes implementing `ContextAware` are strongly recommended to also implement `androidx.lifecycle.LifecycleOwner` for providing a more general purpose API for listening for creation and destruction events.

| See also |
| --- |
| `ContextAwareHelper` |  |

## Summary

| Public methods |
| --- |
| `abstract void` | `addOnContextAvailableListener(     @NonNull OnContextAvailableListener listener )`  Add a new `OnContextAvailableListener` for receiving a callback for when this class is associated with a `android.content.Context`. |
| `abstract Context` | `peekAvailableContext()`  Get the `Context` if it is currently available. |
| `abstract void` | `removeOnContextAvailableListener(     @NonNull OnContextAvailableListener listener )`  Remove a `OnContextAvailableListener` previously added via `addOnContextAvailableListener`. |

| Extension functions |
| --- |
| `default final @NonNull R` | `<R extends Object> ContextAwareKt.withContextAvailable(     @NonNull ContextAware receiver,     @NonNull Function1<@NonNull Context, @NonNull R> onContextAvailable )`  Run `onContextAvailable` when the `Context` becomes available and resume with the result. |

## Public methods

### addOnContextAvailableListener

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
abstract void addOnContextAvailableListener(  
    @NonNull OnContextAvailableListener listener  
)
```

Add a new `OnContextAvailableListener` for receiving a callback for when this class is associated with a `android.content.Context`.

Listeners are triggered in the order they are added when added before the Context is available. Listeners added after the context has been made available will have the Context synchronously delivered to them as part of this call.

| Parameters |
| --- |
| `@NonNull OnContextAvailableListener listener` | The listener that should be added. |

| See also |
| --- |
| `removeOnContextAvailableListener` |  |

### peekAvailableContext

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
abstract Context peekAvailableContext()
```

Get the `Context` if it is currently available. If this returns `null`, you can use `addOnContextAvailableListener` to receive a callback for when it available.

| Returns |
| --- |
| `Context` | the Context if it is currently available. |

### removeOnContextAvailableListener

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
abstract void removeOnContextAvailableListener(  
    @NonNull OnContextAvailableListener listener  
)
```

Remove a `OnContextAvailableListener` previously added via `addOnContextAvailableListener`.

| Parameters |
| --- |
| `@NonNull OnContextAvailableListener listener` | The listener that should be removed. |

| See also |
| --- |
| `addOnContextAvailableListener` |  |

## Extension functions

### ContextAwareKt.withContextAvailable

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/contextaware/ContextAware.kt+function:withContextAvailable)

```
default final @NonNull R <R extends Object> ContextAwareKt.withContextAvailable(  
    @NonNull ContextAware receiver,  
    @NonNull Function1<@NonNull Context, @NonNull R> onContextAvailable  
)
```

Run `onContextAvailable` when the `Context` becomes available and resume with the result.

If the `Context` is already available, `onContextAvailable` will be synchronously called on the current coroutine context. Otherwise, `onContextAvailable` will be called on the UI thread immediately when the Context becomes available.