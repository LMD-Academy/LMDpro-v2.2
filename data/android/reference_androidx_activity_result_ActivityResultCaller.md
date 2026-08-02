# ActivityResultCaller

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/result/ActivityResultCaller))

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/ActivityResultCaller.kt+class:androidx.activity.result.ActivityResultCaller)

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

---

[Kotlin](/reference/kotlin/androidx/activity/result/ActivityResultCaller "View this page in Kotlin")
|Java

```
public interface ActivityResultCaller
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

A class that can call `Activity.startActivityForResult`-style APIs without having to manage request codes, and converting request/response to an `Intent`

## Summary

| Public methods |
| --- |
| `abstract @NonNull ActivityResultLauncher<@NonNull I>` | `<I extends Object, O extends Object> registerForActivityResult(     @NonNull ActivityResultContract<@NonNull I, @NonNull O> contract,     @NonNull ActivityResultCallback<@NonNull O> callback )`  Register a request to `start an activity for result`, designated by the given `contract`. |
| `abstract @NonNull ActivityResultLauncher<@NonNull I>` | `<I extends Object, O extends Object> registerForActivityResult(     @NonNull ActivityResultContract<@NonNull I, @NonNull O> contract,     @NonNull ActivityResultRegistry registry,     @NonNull ActivityResultCallback<@NonNull O> callback )`  Register a request to `start an activity for result`, designated by the given `contract`. |

| Extension functions |
| --- |
| `default final @NonNull ActivityResultLauncher<Unit>` | `<I extends Object, O extends Object> ActivityResultCallerKt.registerForActivityResult(     @NonNull ActivityResultCaller receiver,     @NonNull ActivityResultContract<@NonNull I, @NonNull O> contract,     @NonNull I input,     @NonNull Function1<@NonNull O, Unit> callback )`  A version of `ActivityResultCaller.registerForActivityResult` that additionally takes an input right away, producing a launcher that doesn't take any additional input when called. |
| `default final @NonNull ActivityResultLauncher<Unit>` | `<I extends Object, O extends Object> ActivityResultCallerKt.registerForActivityResult(     @NonNull ActivityResultCaller receiver,     @NonNull ActivityResultContract<@NonNull I, @NonNull O> contract,     @NonNull I input,     @NonNull ActivityResultRegistry registry,     @NonNull Function1<@NonNull O, Unit> callback )`  A version of `ActivityResultCaller.registerForActivityResult` that additionally takes an input right away, producing a launcher that doesn't take any additional input when called. |

## Public methods

### registerForActivityResult

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
abstract @NonNull ActivityResultLauncher<@NonNull I> <I extends Object, O extends Object> registerForActivityResult(  
    @NonNull ActivityResultContract<@NonNull I, @NonNull O> contract,  
    @NonNull ActivityResultCallback<@NonNull O> callback  
)
```

Register a request to `start an activity for result`, designated by the given `contract`.

This creates a record in the `registry` associated with this caller, managing request code, as well as conversions to/from `Intent` under the hood.

This *must* be called unconditionally, as part of initialization path, typically as a field initializer of an Activity or Fragment.

| Parameters |
| --- |
| `<I extends Object>` | the type of the input(if any) required to call the activity |
| `<O extends Object>` | the type of output returned as an activity result |
| `@NonNull ActivityResultContract<@NonNull I, @NonNull O> contract` | the contract, specifying conversions to/from `Intent`s |
| `@NonNull ActivityResultCallback<@NonNull O> callback` | the callback to be called on the main thread when activity result is available |

| Returns |
| --- |
| `@NonNull ActivityResultLauncher<@NonNull I>` | the launcher that can be used to start the activity or dispose of the prepared call. |

### registerForActivityResult

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
abstract @NonNull ActivityResultLauncher<@NonNull I> <I extends Object, O extends Object> registerForActivityResult(  
    @NonNull ActivityResultContract<@NonNull I, @NonNull O> contract,  
    @NonNull ActivityResultRegistry registry,  
    @NonNull ActivityResultCallback<@NonNull O> callback  
)
```

Register a request to `start an activity for result`, designated by the given `contract`.

This creates a record in the given `registry`, managing request code, as well as conversions to/from `Intent` under the hood.

This *must* be called unconditionally, as part of initialization path, typically as a field initializer of an Activity or Fragment.

| Parameters |
| --- |
| `<I extends Object>` | the type of the input(if any) required to call the activity |
| `<O extends Object>` | the type of output returned as an activity result |
| `@NonNull ActivityResultContract<@NonNull I, @NonNull O> contract` | the contract, specifying conversions to/from `Intent`s |
| `@NonNull ActivityResultRegistry registry` | the registry where to hold the record. |
| `@NonNull ActivityResultCallback<@NonNull O> callback` | the callback to be called on the main thread when activity result is available |

| Returns |
| --- |
| `@NonNull ActivityResultLauncher<@NonNull I>` | the launcher that can be used to start the activity or dispose of the prepared call. |

## Extension functions

### ActivityResultCallerKt.registerForActivityResult

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/ActivityResultCaller.kt+function:registerForActivityResult)

```
default final @NonNull ActivityResultLauncher<Unit> <I extends Object, O extends Object> ActivityResultCallerKt.registerForActivityResult(  
    @NonNull ActivityResultCaller receiver,  
    @NonNull ActivityResultContract<@NonNull I, @NonNull O> contract,  
    @NonNull I input,  
    @NonNull Function1<@NonNull O, Unit> callback  
)
```

A version of `ActivityResultCaller.registerForActivityResult` that additionally takes an input right away, producing a launcher that doesn't take any additional input when called.

| See also |
| --- |
| `registerForActivityResult` |  |

### ActivityResultCallerKt.registerForActivityResult

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/ActivityResultCaller.kt+function:registerForActivityResult)

```
default final @NonNull ActivityResultLauncher<Unit> <I extends Object, O extends Object> ActivityResultCallerKt.registerForActivityResult(  
    @NonNull ActivityResultCaller receiver,  
    @NonNull ActivityResultContract<@NonNull I, @NonNull O> contract,  
    @NonNull I input,  
    @NonNull ActivityResultRegistry registry,  
    @NonNull Function1<@NonNull O, Unit> callback  
)
```

A version of `ActivityResultCaller.registerForActivityResult` that additionally takes an input right away, producing a launcher that doesn't take any additional input when called.

| See also |
| --- |
| `registerForActivityResult` |  |
