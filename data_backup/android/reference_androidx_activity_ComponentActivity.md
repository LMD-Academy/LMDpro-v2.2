--- source: https://developer.android.com/reference/androidx/activity/ComponentActivity ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ComponentActivity

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/ComponentActivity.kt+class:androidx.activity.ComponentActivity)

Added in [1.0.0](/jetpack/androidx/releases/activity#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/activity/ComponentActivity "View this page in Kotlin")
|Java

```
public class ComponentActivity extends Activity implements LifecycleOwner, ContextAware, ViewModelStoreOwner, HasDefaultViewModelProviderFactory, SavedStateRegistryOwner, OnBackPressedDispatcherOwner, NavigationEventDispatcherOwner, ActivityResultRegistryOwner, ActivityResultCaller, OnConfigurationChangedProvider, OnTrimMemoryProvider, OnNewIntentProvider, OnMultiWindowModeChangedProvider, PictureInPictureProvider, MenuHost, FullyDrawnReporterOwner
```

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | | | | |
| ↳ | [android.content.Context](https://developer.android.com/reference/android/content/Context.html) | | | | |
|  | ↳ | [android.content.ContextWrapper](https://developer.android.com/reference/android/content/ContextWrapper.html) | | | |
|  |  | ↳ | [android.view.ContextThemeWrapper](https://developer.android.com/reference/android/view/ContextThemeWrapper.html) | | |
|  |  |  | ↳ | [android.app.Activity](https://developer.android.com/reference/android/app/Activity.html) | |
|  |  |  |  | ↳ | [androidx.activity.ComponentActivity](/reference/androidx/activity/ComponentActivity) |

Known direct subclasses

[FragmentActivity](/reference/androidx/fragment/app/FragmentActivity)

|  |  |
| --- | --- |
| `FragmentActivity` | Base class for activities that want to use the support-based `Fragments`. |

Known indirect subclasses

[AppCompatActivity](/reference/androidx/appcompat/app/AppCompatActivity), [BaseCarAppActivity](/reference/androidx/car/app/activity/BaseCarAppActivity), [CarAppActivity](/reference/androidx/car/app/activity/CarAppActivity), [LauncherActivity](/reference/androidx/car/app/activity/LauncherActivity)

|  |  |
| --- | --- |
| `AppCompatActivity` | Base class for activities that wish to use some of the newer platform features on older Android devices. |
| `BaseCarAppActivity` | Core logic for CarAppLibrary Activity interaction with a host. |
| `CarAppActivity` | The class representing a car app activity in the main display. |
| `LauncherActivity` | This class handles providing the right launcher activity when running native applications and Car App Library applications. |

---

Base class for activities that enables composition of higher level components.

Rather than all functionality being built directly into this class, only the minimal set of lower level building blocks are included. Higher level components can then be used as needed without enforcing a deep Activity class hierarchy or strong coupling between components.

## Summary

| Public constructors |
| --- |
| `ComponentActivity()` |
| `@ContentView ComponentActivity(@LayoutRes int contentLayoutId)`  Alternate constructor that can be used to provide a default layout that will be inflated as part of `super.onCreate(savedInstanceState)`. |

| Public methods |
| --- |
| `void` | `addContentView(View view, ViewGroup.LayoutParams params)` |
| `void` | `addMenuProvider(@NonNull MenuProvider provider)`  Adds the given `MenuProvider` to this `MenuHost`. |
| `void` | `addMenuProvider(     @NonNull MenuProvider provider,     @NonNull LifecycleOwner owner )`  Adds the given `MenuProvider` to this `MenuHost`. |
| `void` | `addMenuProvider(     @NonNull MenuProvider provider,     @NonNull LifecycleOwner owner,     @NonNull Lifecycle.State state )`  Adds the given `MenuProvider` to this `MenuHost` once the given `LifecycleOwner` reaches the given `Lifecycle.State`. |
| `final void` | `addOnConfigurationChangedListener(     @NonNull Consumer<@NonNull Configuration> listener )`  Add a new listener that will get a callback associated with `ComponentCallbacks.onConfigurationChanged` with the new `Configuration`. |
| `final void` | `addOnContextAvailableListener(     @NonNull OnContextAvailableListener listener )`  {@inheritDoc} |
| `final void` | `addOnMultiWindowModeChangedListener(     @NonNull Consumer<@NonNull MultiWindowModeChangedInfo> listener )`  Add a new listener that will get a callback associated with `Activity.onMultiWindowModeChanged` with the new `MultiWindowModeChangedInfo`. |
| `final void` | `addOnNewIntentListener(@NonNull Consumer<@NonNull Intent> listener)`  Add a new listener that will get a callback associated with `Activity.onNewIntent` with the new `Intent`. |
| `final void` | `addOnPictureInPictureModeChangedListener(     @NonNull Consumer<@NonNull PictureInPictureModeChangedInfo> listener )`  Add a new listener that will get a callback associated with `Activity.onPictureInPictureModeChanged` with the new `PictureInPictureModeChangedInfo`. |
| `final void` | `addOnPictureInPictureUiStateChangedListener(     @NonNull Consumer<@NonNull PictureInPictureUiStateCompat> listener )`  Add a new listener that will get a callback associated with `Activity.onPictureInPictureUiStateChanged` with the new `PictureInPictureUiStateCompat`. |
| `final void` | `addOnTrimMemoryListener(@NonNull Consumer<@NonNull Integer> listener)`  Add a new listener that will get a callback associated with `ComponentCallbacks2.onTrimMemory` with the `int` representing the level of trimming. |
| `final void` | `addOnUserLeaveHintListener(@NonNull Runnable listener)`  Add a new listener that will get a callback associated with `Activity.onUserLeaveHint` |
| `final void` | `enterPictureInPictureMode(@NonNull PictureInPictureParamsCompat params)`  Available since API 24 in the framework Activity class, puts the activity in picture-in-picture mode if possible in the current system state. |
| `final @NonNull ActivityResultRegistry` | `getActivityResultRegistry()`  Get the `ActivityResultRegistry` associated with this activity. |
| `@NonNull CreationExtras` | `@CallSuper getDefaultViewModelCreationExtras()`  {@inheritDoc} |
| `@NonNull ViewModelProvider.Factory` | `getDefaultViewModelProviderFactory()` |
| `@NonNull FullyDrawnReporter` | `getFullyDrawnReporter()`  Retrieve the `FullyDrawnReporter` that should handle the independent parts of the UI that separately report that they are fully drawn. |
| `Object` | `getLastCustomNonConfigurationInstance()`  **This method is deprecated.** Use a {@link androidx.lifecycle.ViewModel} to store non config state. |
| `@NonNull Lifecycle` | `getLifecycle()`  {@inheritDoc} |
| `@NonNull NavigationEventDispatcher` | `getNavigationEventDispatcher()`  Lazily provides a `NavigationEventDispatcher` for back navigation handling, including support for predictive back gestures introduced in Android 13 (API 33+). |
| `final @NonNull OnBackPressedDispatcher` | `getOnBackPressedDispatcher()`  Retrieve the `OnBackPressedDispatcher` that will be triggered when `onBackPressed` is called. |
| `final @NonNull SavedStateRegistry` | `getSavedStateRegistry()` |
| `@NonNull ViewModelStore` | `getViewModelStore()`  Returns the `ViewModelStore` associated with this activity |
| `void` | `@CallSuper initializeViewTreeOwners()`  Sets the view tree owners before setting the content view so that the inflation process and attach listeners will see them already present. |
| `void` | `invalidateMenu()`  Invalidates the `android.view.Menu` to ensure that what is displayed matches the current internal state of the menu. |
| `void` | `@MainThread @CallSuper onBackPressed()`  **This method is deprecated.** This method has been deprecated in favor of using the {@link OnBackPressedDispatcher} via {@link #getOnBackPressedDispatcher()}. |
| `void` | `@CallSuper onConfigurationChanged(@NonNull Configuration newConfig)`  {@inheritDoc} |
| `boolean` | `onCreatePanelMenu(int featureId, @NonNull Menu menu)` |
| `boolean` | `onMenuItemSelected(int featureId, @NonNull MenuItem item)` |
| `void` | `@CallSuper onMultiWindowModeChanged(boolean isInMultiWindowMode)`  **This method is deprecated.** Deprecated in android.app.Activity |
| `void` | `@RequiresApi(api = 26) @CallSuper onMultiWindowModeChanged(     boolean isInMultiWindowMode,     @NonNull Configuration newConfig )`  {@inheritDoc} |
| `void` | `onPanelClosed(int featureId, @NonNull Menu menu)` |
| `void` | `@CallSuper onPictureInPictureModeChanged(boolean isInPictureInPictureMode)`  **This method is deprecated.** Deprecated in android.app.Activity |
| `void` | `@RequiresApi(api = 26) @CallSuper onPictureInPictureModeChanged(     boolean isInPictureInPictureMode,     @NonNull Configuration newConfig )`  {@inheritDoc} |
| `void` | `@RequiresApi(api = 31) @CallSuper onPictureInPictureUiStateChanged(     @NonNull PictureInPictureUiState pipState )`  {@inheritDoc} |
| `boolean` | `onPreparePanel(int featureId, View view, @NonNull Menu menu)` |
| `void` | `@CallSuper onRequestPermissionsResult(     int requestCode,     @NonNull String[] permissions,     @NonNull int[] grantResults )`  **This method is deprecated.** This method has been deprecated in favor of using the Activity Result API which brings increased type safety via an {@link ActivityResultContract} and the prebuilt contracts for common intents available in {@link androidx.activity.result.contract.ActivityResultContracts}, provides hooks for testing, and allow receiving results in separate, testable classes independent from your activity. |
| `Object` | `onRetainCustomNonConfigurationInstance()`  **This method is deprecated.** Use a {@link androidx.lifecycle.ViewModel} to store non config state. |
| `final Object` | `onRetainNonConfigurationInstance()`  Retain all appropriate non-config state. |
| `void` | `@CallSuper onTrimMemory(int level)`  {@inheritDoc} |
| `Context` | `peekAvailableContext()`  Get the `Context` if it is currently available. |
| `final @NonNull ActivityResultLauncher<@NonNull I>` | `<I extends Object, O extends Object> registerForActivityResult(     @NonNull ActivityResultContract<@NonNull I, @NonNull O> contract,     @NonNull ActivityResultCallback<@NonNull O> callback )`  Register a request to `start an activity for result`, designated by the given `contract`. |
| `final @NonNull ActivityResultLauncher<@NonNull I>` | `<I extends Object, O extends Object> registerForActivityResult(     @NonNull ActivityResultContract<@NonNull I, @NonNull O> contract,     @NonNull ActivityResultRegistry registry,     @NonNull ActivityResultCallback<@NonNull O> callback )`  Register a request to `start an activity for result`, designated by the given `contract`. |
| `void` | `removeMenuProvider(@NonNull MenuProvider provider)`  Removes the given `MenuProvider` from this `MenuHost`. |
| `final void` | `removeOnConfigurationChangedListener(     @NonNull Consumer<@NonNull Configuration> listener )`  Remove a previously added listener. |
| `final void` | `removeOnContextAvailableListener(     @NonNull OnContextAvailableListener listener )`  Remove a `OnContextAvailableListener` previously added via `addOnContextAvailableListener`. |
| `final void` | `removeOnMultiWindowModeChangedListener(     @NonNull Consumer<@NonNull MultiWindowModeChangedInfo> listener )`  Remove a previously added listener. |
| `final void` | `removeOnNewIntentListener(@NonNull Consumer<@NonNull Intent> listener)`  Remove a previously added listener. |
| `final void` | `removeOnPictureInPictureModeChangedListener(     @NonNull Consumer<@NonNull PictureInPictureModeChangedInfo> listener )`  Remove a previously added listener. |
| `final void` | `removeOnPictureInPictureUiStateChangedListener(     @NonNull Consumer<@NonNull PictureInPictureUiStateCompat> listener )`  Remove a previously added listener. |
| `final void` | `removeOnTrimMemoryListener(@NonNull Consumer<@NonNull Integer> listener)`  Remove a previously added listener. |
| `final void` | `removeOnUserLeaveHintListener(@NonNull Runnable listener)`  Remove a previously added listener. |
| `void` | `reportFullyDrawn()` |
| `void` | `setContentView(@LayoutRes int layoutResID)` |
| `void` | `setContentView(View view)` |
| `void` | `setContentView(View view, ViewGroup.LayoutParams params)` |
| `final void` | `setPictureInPictureParams(@NonNull PictureInPictureParamsCompat params)`  Available since API 26 in the framework Activity class, updates the properties of the picture-in-picture activity, or sets it to be used later when `enterPictureInPictureMode` is called |
| `void` | `startActivityForResult(@NonNull Intent intent, int requestCode)`  **This method is deprecated.** This method has been deprecated in favor of using the Activity Result API which brings increased type safety via an {@link ActivityResultContract} and the prebuilt contracts for common intents available in {@link androidx.activity.result.contract.ActivityResultContracts}, provides hooks for testing, and allow receiving results in separate, testable classes independent from your activity. |
| `void` | `startActivityForResult(     @NonNull Intent intent,     int requestCode,     Bundle options )`  **This method is deprecated.** This method has been deprecated in favor of using the Activity Result API which brings increased type safety via an {@link ActivityResultContract} and the prebuilt contracts for common intents available in {@link androidx.activity.result.contract.ActivityResultContracts}, provides hooks for testing, and allow receiving results in separate, testable classes independent from your activity. |
| `void` | `startIntentSenderForResult(     @NonNull IntentSender intent,     int requestCode,     Intent fillInIntent,     int flagsMask,     int flagsValues,     int extraFlags )`  **This method is deprecated.** This method has been deprecated in favor of using the Activity Result API which brings increased type safety via an {@link ActivityResultContract} and the prebuilt contracts for common intents available in {@link androidx.activity.result.contract.ActivityResultContracts}, provides hooks for testing, and allow receiving results in separate, testable classes independent from your activity. |
| `void` | `startIntentSenderForResult(     @NonNull IntentSender intent,     int requestCode,     Intent fillInIntent,     int flagsMask,     int flagsValues,     int extraFlags,     Bundle options )`  **This method is deprecated.** This method has been deprecated in favor of using the Activity Result API which brings increased type safety via an {@link ActivityResultContract} and the prebuilt contracts for common intents available in {@link androidx.activity.result.contract.ActivityResultContracts}, provides hooks for testing, and allow receiving results in separate, testable classes independent from your activity. |

| Protected methods |
| --- |
| `void` | `@CallSuper onActivityResult(int requestCode, int resultCode, Intent data)`  **This method is deprecated.** This method has been deprecated in favor of using the Activity Result API which brings increased type safety via an {@link ActivityResultContract} and the prebuilt contracts for common intents available in {@link androidx.activity.result.contract.ActivityResultContracts}, provides hooks for testing, and allow receiving results in separate, testable classes independent from your activity. |
| `void` | `onCreate(Bundle savedInstanceState)`  {@inheritDoc} |
| `void` | `@CallSuper onNewIntent(@NonNull Intent intent)`  {@inheritDoc} |
| `void` | `@CallSuper onSaveInstanceState(@NonNull Bundle outState)` |
| `void` | `@CallSuper onUserLeaveHint()`  {@inheritDoc} |

| Extension functions |
| --- |
| `final @NonNull Lazy<@NonNull VM>` | `@MainThread <VM extends ViewModel> ActivityViewModelLazyKt.viewModels(     @NonNull ComponentActivity receiver,     Function0<@NonNull CreationExtras> extrasProducer,     Function0<@NonNull ViewModelProvider.Factory> factoryProducer )`  Returns a `Lazy` delegate to access the ComponentActivity's ViewModel, if `factoryProducer` is specified then `ViewModelProvider.Factory` returned by it will be used to create `ViewModel` first time. |
| `final @NonNull AuthenticationResultLauncher` | `AuthenticationUtils.registerForAuthenticationResult(     @NonNull ComponentActivity receiver,     @NonNull AuthenticationResultCallback resultCallback )`  Returns an `AuthenticationResultLauncher` that can be used to initiate authentication. |
| `final @NonNull AuthenticationResultLauncher` | `AuthenticationUtils.registerForAuthenticationResult(     @NonNull ComponentActivity receiver,     @NonNull Executor callbackExecutor,     @NonNull AuthenticationResultCallback resultCallback )`  Returns an `AuthenticationResultLauncher` that can be used to initiate authentication. |
| `final void` | `EdgeToEdge.enableEdgeToEdge(     @NonNull ComponentActivity receiver,     @NonNull SystemBarStyle statusBarStyle,     @NonNull SystemBarStyle navigationBarStyle )`  Enables the edge-to-edge display for this `ComponentActivity`. |

| Inherited methods |
| --- |
| From [android.app.Activity](https://developer.android.com/reference/android/app/Activity.html) |  |  | | --- | --- | | `void` | `clearOverrideActivityTransition(int overrideType)` | | `void` | `closeContextMenu()` | | `void` | `closeOptionsMenu()` | | `@NonNull PendingIntent` | `createPendingResult(int requestCode, @NonNull Intent data, int flags)` | | `final void` | `dismissDialog(int id)`  **This method is deprecated.** Deprecated in Java | | `final void` | `dismissKeyboardShortcutsHelper()` | | `void` | `dump(     @NonNull String prefix,     @Nullable FileDescriptor fd,     @NonNull PrintWriter writer,     @Nullable String[] args )` | | `void` | `enterPictureInPictureMode()`  **This method is deprecated.** Deprecated in Java | | `boolean` | `enterPictureInPictureMode(@NonNull PictureInPictureParams params)` | | `@NonNull T` | `<T extends View> findViewById(int id)` | | `void` | `finish()` | | `void` | `finishActivity(int requestCode)` | | `void` | `finishActivityFromChild(@NonNull Activity child, int requestCode)`  **This method is deprecated.** Deprecated in Java | | `void` | `finishAffinity()` | | `void` | `finishAfterTransition()` | | `void` | `finishAndRemoveTask()` | | `void` | `finishFromChild(@NonNull Activity child)`  **This method is deprecated.** Deprecated in Java | | `@Nullable ActionBar` | `getActionBar()` | | `final @NonNull Application` | `getApplication()` | | `@Nullable ComponentCaller` | `getCaller()` | | `@Nullable ComponentName` | `getCallingActivity()` | | `@Nullable String` | `getCallingPackage()` | | `int` | `getChangingConfigurations()` | | `@NonNull ComponentName` | `getComponentName()` | | `@NonNull Scene` | `getContentScene()` | | `@NonNull TransitionManager` | `getContentTransitionManager()` | | `@NonNull ComponentCaller` | `getCurrentCaller()` | | `@Nullable View` | `getCurrentFocus()` | | `@NonNull FragmentManager` | `getFragmentManager()`  **This method is deprecated.** Deprecated in Java | | `@NonNull ComponentCaller` | `getInitialCaller()` | | `@NonNull Intent` | `getIntent()` | | `@Nullable Object` | `getLastNonConfigurationInstance()` | | `@Nullable String` | `getLaunchedFromPackage()` | | `int` | `getLaunchedFromUid()` | | `@NonNull LayoutInflater` | `getLayoutInflater()` | | `@NonNull LoaderManager` | `getLoaderManager()`  **This method is deprecated.** Deprecated in Java | | `@NonNull String` | `getLocalClassName()` | | `int` | `getMaxNumPictureInPictureActions()` | | `final @NonNull MediaController` | `getMediaController()` | | `@NonNull MenuInflater` | `getMenuInflater()` | | `@NonNull OnBackInvokedDispatcher` | `getOnBackInvokedDispatcher()` | | `final @NonNull Activity` | `getParent()`  **This method is deprecated.** Deprecated in Java | | `@Nullable Intent` | `getParentActivityIntent()` | | `@NonNull SharedPreferences` | `getPreferences(int mode)` | | `@Nullable Uri` | `getReferrer()` | | `int` | `getRequestedOrientation()` | | `final @NonNull SearchEvent` | `getSearchEvent()` | | `final @NonNull SplashScreen` | `getSplashScreen()` | | `int` | `getTaskId()` | | `final @NonNull CharSequence` | `getTitle()` | | `final int` | `getTitleColor()` | | `@NonNull VoiceInteractor` | `getVoiceInteractor()` | | `final int` | `getVolumeControlStream()` | | `@NonNull Window` | `getWindow()` | | `@NonNull WindowManager` | `getWindowManager()` | | `boolean` | `hasWindowFocus()` | | `void` | `invalidateOptionsMenu()` | | `boolean` | `isActivityTransitionRunning()` | | `boolean` | `isChangingConfigurations()` | | `final boolean` | `isChild()`  **This method is deprecated.** Deprecated in Java | | `boolean` | `isDestroyed()` | | `boolean` | `isFinishing()` | | `final boolean` | `isHandoffEnabled()` | | `boolean` | `isImmersive()` | | `boolean` | `isInMultiWindowMode()` | | `boolean` | `isInPictureInPictureMode()` | | `boolean` | `isLaunchedFromBubble()` | | `boolean` | `isLocalVoiceInteractionSupported()` | | `boolean` | `isTaskRoot()` | | `boolean` | `isVoiceInteraction()` | | `boolean` | `isVoiceInteractionRoot()` | | `final @NonNull Cursor` | `managedQuery(     @NonNull Uri uri,     @NonNull String[] projection,     @NonNull String selection,     @NonNull String[] selectionArgs,     @NonNull String sortOrder )`  **This method is deprecated.** Deprecated in Java | | `boolean` | `moveTaskToBack(boolean nonRoot)` | | `boolean` | `navigateUpTo(@NonNull Intent upIntent)` | | `boolean` | `navigateUpToFromChild(@NonNull Activity child, @NonNull Intent upIntent)`  **This method is deprecated.** Deprecated in Java | | `void` | `onActivityReenter(int resultCode, @NonNull Intent data)` | | `void` | `onActivityResult(     int requestCode,     int resultCode,     @Nullable Intent data,     @NonNull ComponentCaller caller )` | | `void` | `onAttachFragment(@NonNull Fragment fragment)`  **This method is deprecated.** Deprecated in Java | | `void` | `onChildTitleChanged(     @NonNull Activity childActivity,     @NonNull CharSequence title )` | | `boolean` | `onContextItemSelected(@NonNull MenuItem item)` | | `void` | `onContextMenuClosed(@NonNull Menu menu)` | | `void` | `onCreate(     @Nullable Bundle savedInstanceState,     @Nullable PersistableBundle persistentState )` | | `@Nullable CharSequence` | `onCreateDescription()` | | `@NonNull Dialog` | `onCreateDialog(int id)`  **This method is deprecated.** Deprecated in Java | | `@Nullable Dialog` | `onCreateDialog(int id, @NonNull Bundle args)`  **This method is deprecated.** Deprecated in Java | | `void` | `onCreateNavigateUpTaskStack(@NonNull TaskStackBuilder builder)` | | `boolean` | `onCreateOptionsMenu(@NonNull Menu menu)` | | `boolean` | `onCreateThumbnail(@NonNull Bitmap outBitmap, @NonNull Canvas canvas)`  **This method is deprecated.** Deprecated in Java | | `void` | `onDestroy()` | | `void` | `onEnterAnimationComplete()` | | `boolean` | `onGenericMotionEvent(@NonNull MotionEvent event)` | | `void` | `onGetDirectActions(     @NonNull CancellationSignal cancellationSignal,     @NonNull Consumer<@NonNull List<@NonNull DirectAction>> callback )` | | `@Nullable HandoffActivityData` | `onHandoffActivityDataRequested(     @NonNull HandoffActivityDataRequestInfo requestInfo )` | | `boolean` | `onKeyShortcut(int keyCode, @NonNull KeyEvent event)` | | `void` | `onLocalVoiceInteractionStarted()` | | `void` | `onLocalVoiceInteractionStopped()` | | `boolean` | `onNavigateUp()` | | `boolean` | `onNavigateUpFromChild(@NonNull Activity child)`  **This method is deprecated.** Deprecated in Java | | `void` | `onNewIntent(@NonNull Intent intent, @NonNull ComponentCaller caller)` | | `boolean` | `onOptionsItemSelected(@NonNull MenuItem item)` | | `void` | `onOptionsMenuClosed(@NonNull Menu menu)` | | `void` | `onPause()` | | `void` | `onPerformDirectAction(     @NonNull String actionId,     @NonNull Bundle arguments,     @NonNull CancellationSignal cancellationSignal,     @NonNull Consumer<@NonNull Bundle> resultListener )` | | `boolean` | `onPictureInPictureRequested()` | | `void` | `onPostCreate(@Nullable Bundle savedInstanceState)` | | `void` | `onPostCreate(     @Nullable Bundle savedInstanceState,     @Nullable PersistableBundle persistentState )` | | `void` | `onPostResume()` | | `void` | `onPrepareDialog(int id, @NonNull Dialog dialog)`  **This method is deprecated.** Deprecated in Java | | `void` | `onPrepareDialog(int id, @NonNull Dialog dialog, @NonNull Bundle args)`  **This method is deprecated.** Deprecated in Java | | `void` | `onPrepareNavigateUpTaskStack(@NonNull TaskStackBuilder builder)` | | `boolean` | `onPrepareOptionsMenu(@NonNull Menu menu)` | | `void` | `onProvideAssistContent(@NonNull AssistContent outContent)` | | `void` | `onProvideAssistData(@NonNull Bundle data)` | | `@NonNull Uri` | `onProvideReferrer()` | | `void` | `onRequestPermissionsResult(     int requestCode,     @NonNull String[] permissions,     @NonNull int[] grantResults,     int deviceId )` | | `void` | `onRestart()` | | `void` | `onRestoreInstanceState(@NonNull Bundle savedInstanceState)` | | `void` | `onRestoreInstanceState(     @Nullable Bundle savedInstanceState,     @Nullable PersistableBundle persistentState )` | | `void` | `onResume()` | | `void` | `onSaveInstanceState(     @NonNull Bundle outState,     @NonNull PersistableBundle outPersistentState )` | | `void` | `onStart()` | | `void` | `onStateNotSaved()`  **This method is deprecated.** Deprecated in Java | | `void` | `onStop()` | | `void` | `onTitleChanged(@NonNull CharSequence title, int color)` | | `void` | `onTopResumedActivityChanged(boolean isTopResumedActivity)` | | `boolean` | `onTouchEvent(@NonNull MotionEvent event)` | | `boolean` | `onTrackballEvent(@NonNull MotionEvent event)` | | `void` | `onUserInteraction()` | | `void` | `onVisibleBehindCanceled()`  **This method is deprecated.** Deprecated in Java | | `void` | `openContextMenu(@NonNull View view)` | | `void` | `openOptionsMenu()` | | `void` | `overrideActivityTransition(     int overrideType,     int enterAnim,     int exitAnim )` | | `void` | `overrideActivityTransition(     int overrideType,     int enterAnim,     int exitAnim,     int backgroundColor )` | | `void` | `overridePendingTransition(int enterAnim, int exitAnim)`  **This method is deprecated.** Deprecated in Java | | `void` | `overridePendingTransition(     int enterAnim,     int exitAnim,     int backgroundColor )`  **This method is deprecated.** Deprecated in Java | | `void` | `postponeEnterTransition()` | | `void` | `recreate()` | | `void` | `registerActivityLifecycleCallbacks(     @NonNull Application.ActivityLifecycleCallbacks callback )` | | `void` | `registerForContextMenu(@NonNull View view)` | | `void` | `registerScreenCaptureCallback(     @NonNull Executor executor,     @NonNull Activity.ScreenCaptureCallback callback )` | | `boolean` | `releaseInstance()` | | `final void` | `removeDialog(int id)`  **This method is deprecated.** Deprecated in Java | | `@NonNull DragAndDropPermissions` | `requestDragAndDropPermissions(@NonNull DragEvent event)` | | `void` | `requestFullscreenMode(     int request,     @Nullable OutcomeReceiver<@NonNull Void, @NonNull Throwable> approvalCallback )` | | `final void` | `requestOpenInBrowserEducation()` | | `final void` | `requestPermissions(@NonNull String[] permissions, int requestCode)` | | `final void` | `requestPermissions(     @NonNull String[] permissions,     int requestCode,     int deviceId )` | | `final void` | `requestShowKeyboardShortcuts()` | | `boolean` | `requestVisibleBehind(boolean visible)`  **This method is deprecated.** Deprecated in Java | | `final boolean` | `requestWindowFeature(int featureId)` | | `final @NonNull T` | `<T extends View> requireViewById(int id)` | | `final void` | `runOnUiThread(@NonNull Runnable action)` | | `void` | `setActionBar(@Nullable Toolbar toolbar)` | | `void` | `setAllowCrossUidActivitySwitchFromBelow(boolean allowed)` | | `void` | `setContentTransitionManager(@NonNull TransitionManager tm)` | | `final void` | `setDefaultKeyMode(int mode)` | | `void` | `setEnterSharedElementCallback(@NonNull SharedElementCallback callback)` | | `void` | `setExitSharedElementCallback(@NonNull SharedElementCallback callback)` | | `final void` | `setFeatureDrawable(int featureId, @NonNull Drawable drawable)` | | `final void` | `setFeatureDrawableAlpha(int featureId, int alpha)` | | `final void` | `setFeatureDrawableResource(int featureId, int resId)` | | `final void` | `setFeatureDrawableUri(int featureId, @NonNull Uri uri)` | | `void` | `setFinishOnTouchOutside(boolean finish)` | | `final void` | `setHandoffEnabled(     boolean handoffEnabled,     @Nullable HandoffActivityParams handoffActivityParams )` | | `void` | `setImmersive(boolean i)` | | `void` | `setInheritShowWhenLocked(boolean inheritShowWhenLocked)` | | `void` | `setIntent(@NonNull Intent newIntent)` | | `void` | `setLocusContext(@Nullable LocusId locusId, @Nullable Bundle bundle)` | | `final void` | `setMediaController(@NonNull MediaController controller)` | | `void` | `setPictureInPictureParams(@NonNull PictureInPictureParams params)` | | `final void` | `setProgress(int progress)`  **This method is deprecated.** Deprecated in Java | | `final void` | `setProgressBarIndeterminate(boolean indeterminate)`  **This method is deprecated.** Deprecated in Java | | `final void` | `setProgressBarIndeterminateVisibility(boolean visible)`  **This method is deprecated.** Deprecated in Java | | `final void` | `setProgressBarVisibility(boolean visible)`  **This method is deprecated.** Deprecated in Java | | `void` | `setRecentsScreenshotEnabled(boolean enabled)` | | `void` | `setRequestedOrientation(int requestedOrientation)` | | `final void` | `setResult(int resultCode)` | | `final void` | `setResult(int resultCode, @NonNull Intent data)` | | `final void` | `setSecondaryProgress(int secondaryProgress)`  **This method is deprecated.** Deprecated in Java | | `void` | `setShouldDockBigOverlays(boolean shouldDockBigOverlays)` | | `void` | `setShowWhenLocked(boolean showWhenLocked)` | | `void` | `setTaskDescription(     @NonNull ActivityManager.TaskDescription taskDescription )` | | `void` | `setTitle(@NonNull CharSequence title)` | | `void` | `setTitleColor(int textColor)`  **This method is deprecated.** Deprecated in Java | | `boolean` | `setTranslucent(boolean translucent)` | | `void` | `setTurnScreenOn(boolean turnScreenOn)` | | `void` | `setVisible(boolean visible)` | | `final void` | `setVolumeControlStream(int streamType)` | | `void` | `setVrModeEnabled(     boolean enabled,     @NonNull ComponentName requestedComponent )` | | `boolean` | `shouldDockBigOverlays()` | | `boolean` | `shouldShowRequestPermissionRationale(@NonNull String permission)` | | `boolean` | `shouldShowRequestPermissionRationale(     @NonNull String permission,     int deviceId )` | | `boolean` | `shouldUpRecreateTask(@NonNull Intent targetIntent)` | | `boolean` | `showAssist(@NonNull Bundle args)` | | `final void` | `showDialog(int id)`  **This method is deprecated.** Deprecated in Java | | `final boolean` | `showDialog(int id, @NonNull Bundle args)`  **This method is deprecated.** Deprecated in Java | | `void` | `showLockTaskEscapeMessage()` | | `@Nullable ActionMode` | `startActionMode(@NonNull ActionMode.Callback callback)` | | `@Nullable ActionMode` | `startActionMode(@NonNull ActionMode.Callback callback, int type)` | | `void` | `startActivityFromChild(     @NonNull Activity child,     @NonNull Intent intent,     int requestCode )`  **This method is deprecated.** Deprecated in Java | | `void` | `startActivityFromChild(     @NonNull Activity child,     @NonNull Intent intent,     int requestCode,     @Nullable Bundle options )`  **This method is deprecated.** Deprecated in Java | | `void` | `startActivityFromFragment(     @NonNull Fragment fragment,     @NonNull Intent intent,     int requestCode )`  **This method is deprecated.** Deprecated in Java | | `void` | `startActivityFromFragment(     @NonNull Fragment fragment,     @NonNull Intent intent,     int requestCode,     @Nullable Bundle options )`  **This method is deprecated.** Deprecated in Java | | `boolean` | `startActivityIfNeeded(@NonNull Intent intent, int requestCode)` | | `boolean` | `startActivityIfNeeded(     @NonNull Intent intent,     int requestCode,     @Nullable Bundle options )` | | `void` | `startIntentSenderFromChild(     @NonNull Activity child,     @NonNull IntentSender intent,     int requestCode,     @NonNull Intent fillInIntent,     int flagsMask,     int flagsValues,     int extraFlags )`  **This method is deprecated.** Deprecated in Java | | `void` | `startIntentSenderFromChild(     @NonNull Activity child,     @NonNull IntentSender intent,     int requestCode,     @NonNull Intent fillInIntent,     int flagsMask,     int flagsValues,     int extraFlags,     @Nullable Bundle options )`  **This method is deprecated.** Deprecated in Java | | `void` | `startLocalVoiceInteraction(@NonNull Bundle privateOptions)` | | `void` | `startLockTask()` | | `void` | `startManagingCursor(@NonNull Cursor c)`  **This method is deprecated.** Deprecated in Java | | `boolean` | `startNextMatchingActivity(@NonNull Intent intent)` | | `boolean` | `startNextMatchingActivity(@NonNull Intent intent, @Nullable Bundle options)` | | `void` | `startPostponedEnterTransition()` | | `void` | `startSearch(     @Nullable String initialQuery,     boolean selectInitialQuery,     @Nullable Bundle appSearchData,     boolean globalSearch )` | | `void` | `stopLocalVoiceInteraction()` | | `void` | `stopLockTask()` | | `void` | `stopManagingCursor(@NonNull Cursor c)`  **This method is deprecated.** Deprecated in Java | | `void` | `takeKeyEvents(boolean get)` | | `void` | `triggerSearch(@NonNull String query, @Nullable Bundle appSearchData)` | | `void` | `unregisterActivityLifecycleCallbacks(     @NonNull Application.ActivityLifecycleCallbacks callback )` | | `void` | `unregisterForContextMenu(@NonNull View view)` | | `void` | `unregisterScreenCaptureCallback(     @NonNull Activity.ScreenCaptureCallback callback )` | |
| From [android.content.ComponentCallbacks](https://developer.android.com/reference/android/content/ComponentCallbacks.html) |  |  | | --- | --- | | `void` | `onLowMemory()` | |
| From [android.content.Context](https://developer.android.com/reference/android/content/Context.html) |  |  | | --- | --- | | `boolean` | `bindIsolatedService(     @NonNull Intent service,     @NonNull Context.BindServiceFlags flags,     @NonNull String instanceName,     @NonNull Executor executor,     @NonNull ServiceConnection conn )` | | `boolean` | `bindIsolatedService(     @NonNull Intent service,     int flags,     @NonNull String instanceName,     @NonNull Executor executor,     @NonNull ServiceConnection conn )` | | `boolean` | `bindService(     @NonNull Intent service,     @NonNull ServiceConnection conn,     @NonNull Context.BindServiceFlags flags )` | | `boolean` | `bindService(     @NonNull Intent service,     @NonNull ServiceConnection conn,     int flags )` | | `boolean` | `bindService(     @NonNull Intent service,     @NonNull Context.BindServiceFlags flags,     @NonNull Executor executor,     @NonNull ServiceConnection conn )` | | `boolean` | `bindService(     @NonNull Intent service,     int flags,     @NonNull Executor executor,     @NonNull ServiceConnection conn )` | | `boolean` | `bindServiceAsUser(     @NonNull Intent service,     @NonNull ServiceConnection conn,     @NonNull Context.BindServiceFlags flags,     @NonNull UserHandle user )` | | `boolean` | `bindServiceAsUser(     @NonNull Intent service,     @NonNull ServiceConnection conn,     int flags,     @NonNull UserHandle user )` | | `int` | `checkCallingOrSelfPermission(@NonNull String permission)` | | `int` | `checkCallingOrSelfUriPermission(@NonNull Uri uri, int modeFlags)` | | `@NonNull int[]` | `checkCallingOrSelfUriPermissions(     @NonNull List<@NonNull Uri> uris,     int modeFlags )` | | `int` | `checkCallingPermission(@NonNull String permission)` | | `int` | `checkCallingUriPermission(@NonNull Uri uri, int modeFlags)` | | `@NonNull int[]` | `checkCallingUriPermissions(@NonNull List<@NonNull Uri> uris, int modeFlags)` | | `int` | `checkContentUriPermissionFull(     @NonNull Uri uri,     int pid,     int uid,     int modeFlags )` | | `int` | `checkPermission(@NonNull String permission, int pid, int uid)` | | `int` | `checkSelfPermission(@NonNull String permission)` | | `int` | `checkUriPermission(@NonNull Uri uri, int pid, int uid, int modeFlags)` | | `int` | `checkUriPermission(     @Nullable Uri uri,     @Nullable String readPermission,     @Nullable String writePermission,     int pid,     int uid,     int modeFlags )` | | `@NonNull int[]` | `checkUriPermissions(     @NonNull List<@NonNull Uri> uris,     int pid,     int uid,     int modeFlags )` | | `void` | `clearWallpaper()`  **This method is deprecated.** Deprecated in Java | | `@NonNull Context` | `createAttributionContext(@Nullable String attributionTag)` | | `@NonNull Context` | `createConfigurationContext(@NonNull Configuration overrideConfiguration)` | | `@NonNull Context` | `createContext(@NonNull ContextParams contextParams)` | | `@NonNull Context` | `createContextForSplit(@NonNull String splitName)` | | `@NonNull Context` | `createDeviceContext(int deviceId)` | | `@NonNull Context` | `createDeviceProtectedStorageContext()` | | `@NonNull Context` | `createDisplayContext(@NonNull Display display)` | | `@NonNull Context` | `createPackageContext(@NonNull String packageName, int flags)` | | `@NonNull Context` | `createWindowContext(int type, @Nullable Bundle options)` | | `@NonNull Context` | `createWindowContext(     @NonNull Display display,     int type,     @Nullable Bundle options )` | | `@NonNull String[]` | `databaseList()` | | `boolean` | `deleteDatabase(@NonNull String name)` | | `boolean` | `deleteFile(@NonNull String name)` | | `boolean` | `deleteSharedPreferences(@NonNull String name)` | | `void` | `enforceCallingOrSelfPermission(     @NonNull String permission,     @Nullable String message )` | | `void` | `enforceCallingOrSelfUriPermission(     @NonNull Uri uri,     int modeFlags,     @NonNull String message )` | | `void` | `enforceCallingPermission(     @NonNull String permission,     @Nullable String message )` | | `void` | `enforceCallingUriPermission(     @NonNull Uri uri,     int modeFlags,     @NonNull String message )` | | `void` | `enforcePermission(     @NonNull String permission,     int pid,     int uid,     @Nullable String message )` | | `void` | `enforceUriPermission(     @NonNull Uri uri,     int pid,     int uid,     int modeFlags,     @NonNull String message )` | | `void` | `enforceUriPermission(     @Nullable Uri uri,     @Nullable String readPermission,     @Nullable String writePermission,     int pid,     int uid,     int modeFlags,     @Nullable String message )` | | `@NonNull String[]` | `fileList()` | | `final int` | `getColor(int id)` | | `final @NonNull ColorStateList` | `getColorStateList(int id)` | | `@NonNull File` | `getDatabasePath(@NonNull String name)` | | `@NonNull File` | `getDir(@NonNull String name, int mode)` | | `final @Nullable Drawable` | `getDrawable(int id)` | | `@Nullable File` | `getExternalFilesDir(@Nullable String type)` | | `@NonNull File[]` | `getExternalFilesDirs(@NonNull String type)` | | `@NonNull File` | `getFileStreamPath(@NonNull String name)` | | `@NonNull SharedPreferences` | `getSharedPreferences(@NonNull String name, int mode)` | | `final @NonNull String` | `getString(int resId)` | | `final @NonNull String` | `getString(int resId, @NonNull Object... formatArgs)` | | `@NonNull Object` | `getSystemService(@RecentlyNonNull @NonNull String name)` | | `final @NonNull T` | `<T extends Object> getSystemService(@NonNull Class<@NonNull T> serviceClass)` | | `String` | `getSystemServiceName(@NonNull Class<@NonNull ?> serviceClass)` | | `final @NonNull CharSequence` | `getText(int resId)` | | `@NonNull Context.BindServiceFlags` | `getUpdateableFlags()` | | `void` | `grantUriPermission(     @NonNull String toPackage,     @NonNull Uri uri,     int modeFlags )` | | `boolean` | `moveDatabaseFrom(@NonNull Context sourceContext, @NonNull String name)` | | `boolean` | `moveSharedPreferencesFrom(     @NonNull Context sourceContext,     @NonNull String name )` | | `final @NonNull TypedArray` | `obtainStyledAttributes(@NonNull int[] attrs)` | | `final @NonNull TypedArray` | `obtainStyledAttributes(int resid, @NonNull int[] attrs)` | | `final @NonNull TypedArray` | `obtainStyledAttributes(@Nullable AttributeSet set, @NonNull int[] attrs)` | | `final @NonNull TypedArray` | `obtainStyledAttributes(     @Nullable AttributeSet set,     @NonNull int[] attrs,     int defStyleAttr,     int defStyleRes )` | | `@NonNull FileInputStream` | `openFileInput(@NonNull String name)` | | `@NonNull FileOutputStream` | `openFileOutput(@NonNull String name, int mode)` | | `@NonNull SQLiteDatabase` | `openOrCreateDatabase(     @NonNull String name,     int mode,     @NonNull SQLiteDatabase.CursorFactory factory )` | | `@NonNull SQLiteDatabase` | `openOrCreateDatabase(     @NonNull String name,     int mode,     @NonNull SQLiteDatabase.CursorFactory factory,     @Nullable DatabaseErrorHandler errorHandler )` | | `@NonNull Drawable` | `peekWallpaper()`  **This method is deprecated.** Deprecated in Java | | `void` | `rebindService(     @NonNull ServiceConnection conn,     @NonNull Context.BindServiceFlags flags )` | | `void` | `registerComponentCallbacks(@NonNull ComponentCallbacks callback)` | | `void` | `registerDeviceIdChangeListener(     @NonNull Executor executor,     @NonNull IntConsumer listener )` | | `Intent` | `registerReceiver(     @Nullable BroadcastReceiver receiver,     @NonNull IntentFilter filter )` | | `Intent` | `registerReceiver(     @Nullable BroadcastReceiver receiver,     @NonNull IntentFilter filter,     int flags )` | | `Intent` | `registerReceiver(     @Nullable BroadcastReceiver receiver,     @NonNull IntentFilter filter,     @Nullable String broadcastPermission,     @Nullable Handler scheduler )` | | `Intent` | `registerReceiver(     @Nullable BroadcastReceiver receiver,     @NonNull IntentFilter filter,     @Nullable String broadcastPermission,     @Nullable Handler scheduler,     int flags )` | | `void` | `removeStickyBroadcast(@NonNull Intent intent)`  **This method is deprecated.** Deprecated in Java | | `void` | `removeStickyBroadcastAsUser(     @NonNull Intent intent,     @NonNull UserHandle user )`  **This method is deprecated.** Deprecated in Java | | `void` | `revokeSelfPermissionOnKill(@NonNull String permName)` | | `void` | `revokeSelfPermissionsOnKill(     @NonNull Collection<@NonNull String> permissions )` | | `void` | `revokeUriPermission(@NonNull Uri uri, int modeFlags)` | | `void` | `revokeUriPermission(     @NonNull String targetPackage,     @NonNull Uri uri,     int modeFlags )` | | `void` | `sendBroadcast(@NonNull Intent intent)` | | `void` | `sendBroadcast(@NonNull Intent intent, @Nullable String receiverPermission)` | | `void` | `sendBroadcast(     @NonNull Intent intent,     @Nullable String receiverPermission,     @Nullable Bundle options )` | | `void` | `sendBroadcastAsUser(@NonNull Intent intent, @NonNull UserHandle user)` | | `void` | `sendBroadcastAsUser(     @NonNull Intent intent,     @NonNull UserHandle user,     String receiverPermission )` | | `void` | `sendBroadcastWithMultiplePermissions(     @NonNull Intent intent,     @NonNull String[] receiverPermissions )` | | `void` | `sendOrderedBroadcast(     @NonNull Intent intent,     @Nullable String receiverPermission )` | | `void` | `sendOrderedBroadcast(     @NonNull Intent intent,     @Nullable String receiverPermission,     @Nullable Bundle options )` | | `void` | `sendOrderedBroadcast(     @NonNull Intent intent,     @Nullable String receiverPermission,     @Nullable BroadcastReceiver resultReceiver,     @Nullable Handler scheduler,     int initialCode,     @Nullable String initialData,     @Nullable Bundle initialExtras )` | | `void` | `sendOrderedBroadcast(     @NonNull Intent intent,     @Nullable String receiverPermission,     @Nullable Bundle options,     @Nullable BroadcastReceiver resultReceiver,     @Nullable Handler scheduler,     int initialCode,     @Nullable String initialData,     @Nullable Bundle initialExtras )` | | `void` | `sendOrderedBroadcast(     @NonNull Intent intent,     @Nullable String receiverPermission,     @Nullable String receiverAppOp,     @Nullable BroadcastReceiver resultReceiver,     @Nullable Handler scheduler,     int initialCode,     @Nullable String initialData,     @Nullable Bundle initialExtras )` | | `void` | `sendOrderedBroadcastAsUser(     @NonNull Intent intent,     @NonNull UserHandle user,     @Nullable String receiverPermission,     @Nullable BroadcastReceiver resultReceiver,     @Nullable Handler scheduler,     int initialCode,     @Nullable String initialData,     @Nullable Bundle initialExtras )` | | `void` | `sendStickyBroadcast(@NonNull Intent intent)`  **This method is deprecated.** Deprecated in Java | | `void` | `sendStickyBroadcast(@NonNull Intent intent, @Nullable Bundle options)`  **This method is deprecated.** Deprecated in Java | | `void` | `sendStickyBroadcastAsUser(@NonNull Intent intent, @NonNull UserHandle user)`  **This method is deprecated.** Deprecated in Java | | `void` | `sendStickyOrderedBroadcast(     @NonNull Intent intent,     @Nullable BroadcastReceiver resultReceiver,     @Nullable Handler scheduler,     int initialCode,     @Nullable String initialData,     @Nullable Bundle initialExtras )`  **This method is deprecated.** Deprecated in Java | | `void` | `sendStickyOrderedBroadcastAsUser(     @NonNull Intent intent,     @NonNull UserHandle user,     @Nullable BroadcastReceiver resultReceiver,     @Nullable Handler scheduler,     int initialCode,     @Nullable String initialData,     @Nullable Bundle initialExtras )`  **This method is deprecated.** Deprecated in Java | | `void` | `setTheme(int resid)` | | `void` | `setWallpaper(@NonNull Bitmap bitmap)`  **This method is deprecated.** Deprecated in Java | | `void` | `setWallpaper(@NonNull InputStream data)`  **This method is deprecated.** Deprecated in Java | | `void` | `startActivities(@NonNull Intent[] intents)` | | `void` | `startActivities(@NonNull Intent[] intents, @Nullable Bundle options)` | | `void` | `startActivity(@NonNull Intent intent)` | | `void` | `startActivity(@NonNull Intent intent, @Nullable Bundle options)` | | `@Nullable ComponentName` | `startForegroundService(@NonNull Intent service)` | | `boolean` | `startInstrumentation(     @NonNull ComponentName className,     @Nullable String profileFile,     @Nullable Bundle arguments )` | | `void` | `startIntentSender(     @NonNull IntentSender intent,     @Nullable Intent fillInIntent,     int flagsMask,     int flagsValues,     int extraFlags )` | | `void` | `startIntentSender(     @NonNull IntentSender intent,     @Nullable Intent fillInIntent,     int flagsMask,     int flagsValues,     int extraFlags,     @Nullable Bundle options )` | | `@Nullable ComponentName` | `startService(@NonNull Intent service)` | | `boolean` | `stopService(@NonNull Intent name)` | | `void` | `unbindService(@NonNull ServiceConnection conn)` | | `void` | `unregisterComponentCallbacks(@NonNull ComponentCallbacks callback)` | | `void` | `unregisterDeviceIdChangeListener(@NonNull IntConsumer listener)` | | `void` | `unregisterReceiver(@NonNull BroadcastReceiver receiver)` | | `void` | `updateServiceBindings(     @NonNull Collection<@NonNull Context.UpdateBindingParams> params )` | | `void` | `updateServiceGroup(     @NonNull ServiceConnection conn,     int group,     int importance )` | |
| From [android.view.ContextThemeWrapper](https://developer.android.com/reference/android/view/ContextThemeWrapper.html) |  |  | | --- | --- | | `void` | `applyOverrideConfiguration(@NonNull Configuration overrideConfiguration)` | | `@NonNull AssetManager` | `getAssets()` | | `@NonNull Resources` | `getResources()` | | `@NonNull Resources.Theme` | `getTheme()` | | `void` | `onApplyThemeResource(     @NonNull Resources.Theme theme,     int resid,     boolean first )` | | `void` | `setTheme(@Nullable Resources.Theme theme)` | |
| From [android.content.ContextWrapper](https://developer.android.com/reference/android/content/ContextWrapper.html) |  |  | | --- | --- | | `void` | `attachBaseContext(@NonNull Context newBase)` | | `@NonNull Context` | `getApplicationContext()` | | `@NonNull ApplicationInfo` | `getApplicationInfo()` | | `@NonNull AttributionSource` | `getAttributionSource()` | | `@Nullable String` | `getAttributionTag()` | | `@NonNull Context` | `getBaseContext()` | | `@NonNull File` | `getCacheDir()` | | `@NonNull ClassLoader` | `getClassLoader()` | | `@NonNull File` | `getCodeCacheDir()` | | `@NonNull ContentResolver` | `getContentResolver()` | | `@NonNull File` | `getDataDir()` | | `int` | `getDeviceId()` | | `@Nullable Display` | `getDisplay()` | | `@Nullable File` | `getExternalCacheDir()` | | `@NonNull File[]` | `getExternalCacheDirs()` | | `@NonNull File[]` | `getExternalMediaDirs()` | | `@NonNull File` | `getFilesDir()` | | `@NonNull Executor` | `getMainExecutor()` | | `@NonNull Looper` | `getMainLooper()` | | `@NonNull File` | `getNoBackupFilesDir()` | | `@NonNull File` | `getObbDir()` | | `@NonNull File[]` | `getObbDirs()` | | `@NonNull String` | `getOpPackageName()` | | `@NonNull String` | `getPackageCodePath()` | | `@NonNull PackageManager` | `getPackageManager()` | | `@NonNull String` | `getPackageName()` | | `@NonNull String` | `getPackageResourcePath()` | | `@Nullable ContextParams` | `getParams()` | | `@NonNull Drawable` | `getWallpaper()`  **This method is deprecated.** Deprecated in Java | | `int` | `getWallpaperDesiredMinimumHeight()`  **This method is deprecated.** Deprecated in Java | | `int` | `getWallpaperDesiredMinimumWidth()`  **This method is deprecated.** Deprecated in Java | | `boolean` | `isDeviceProtectedStorage()` | | `boolean` | `isRestricted()` | | `boolean` | `isUiContext()` | | `void` | `sendOrderedBroadcast(     @NonNull Intent intent,     int initialCode,     @Nullable String receiverPermission,     @Nullable String receiverAppOp,     @Nullable BroadcastReceiver resultReceiver,     @Nullable Handler scheduler,     @Nullable String initialData,     @Nullable Bundle initialExtras,     @Nullable Bundle options )` | |
| From [android.view.KeyEvent.Callback](https://developer.android.com/reference/android/view/KeyEvent.Callback.html) |  |  | | --- | --- | | `boolean` | `onKeyDown(int keyCode, @NonNull KeyEvent event)` | | `boolean` | `onKeyLongPress(int keyCode, @NonNull KeyEvent event)` | | `boolean` | `onKeyMultiple(int keyCode, int repeatCount, @NonNull KeyEvent event)` | | `boolean` | `onKeyUp(int keyCode, @NonNull KeyEvent event)` | |
| From [android.view.LayoutInflater.Factory](https://developer.android.com/reference/android/view/LayoutInflater.Factory.html) |  |  | | --- | --- | | `@Nullable View` | `onCreateView(     @NonNull String name,     @NonNull Context context,     @NonNull AttributeSet attrs )` | |
| From [android.view.LayoutInflater.Factory2](https://developer.android.com/reference/android/view/LayoutInflater.Factory2.html) |  |  | | --- | --- | | `@Nullable View` | `onCreateView(     @Nullable View parent,     @NonNull String name,     @NonNull Context context,     @NonNull AttributeSet attrs )` | |
| From [android.view.View.OnCreateContextMenuListener](https://developer.android.com/reference/android/view/View.OnCreateContextMenuListener.html) |  |  | | --- | --- | | `void` | `onCreateContextMenu(     @NonNull ContextMenu menu,     @NonNull View v,     @NonNull ContextMenu.ContextMenuInfo menuInfo )` | |
| From [android.view.Window.Callback](https://developer.android.com/reference/android/view/Window.Callback.html) |  |  | | --- | --- | | `boolean` | `dispatchGenericMotionEvent(@NonNull MotionEvent ev)` | | `boolean` | `dispatchPopulateAccessibilityEvent(@NonNull AccessibilityEvent event)` | | `boolean` | `dispatchTouchEvent(@NonNull MotionEvent ev)` | | `boolean` | `dispatchTrackballEvent(@NonNull MotionEvent ev)` | | `void` | `onActionModeFinished(@NonNull ActionMode mode)` | | `void` | `onActionModeStarted(@NonNull ActionMode mode)` | | `void` | `onAttachedToWindow()` | | `void` | `onContentChanged()` | | `@Nullable View` | `onCreatePanelView(int featureId)` | | `void` | `onDetachedFromWindow()` | | `boolean` | `onMenuOpened(int featureId, @NonNull Menu menu)` | | `void` | `onPointerCaptureChanged(boolean hasCapture)` | | `void` | `onProvideKeyboardShortcuts(     @NonNull List<@NonNull KeyboardShortcutGroup> data,     Menu menu,     int deviceId )` | | `boolean` | `onSearchRequested()` | | `boolean` | `onSearchRequested(@Nullable SearchEvent searchEvent)` | | `void` | `onWindowAttributesChanged(@NonNull WindowManager.LayoutParams params)` | | `void` | `onWindowFocusChanged(boolean hasFocus)` | | `@Nullable ActionMode` | `onWindowStartingActionMode(@NonNull ActionMode.Callback callback)` | | `@Nullable ActionMode` | `onWindowStartingActionMode(     @NonNull ActionMode.Callback callback,     int type )` | |

## Public constructors

### ComponentActivity

Added in [1.0.0](/jetpack/androidx/releases/activity#1.0.0)

```
public ComponentActivity()
```

### ComponentActivity

Added in [1.0.0](/jetpack/androidx/releases/activity#1.0.0)

```
@ContentView  
public ComponentActivity(@LayoutRes int contentLayoutId)
```

Alternate constructor that can be used to provide a default layout that will be inflated as part of `super.onCreate(savedInstanceState)`.

This should generally be called from your constructor that takes no parameters, as is required for API 27 and lower or when using the default `android.app.AppComponentFactory`.

## Public methods

### addContentView

```
public void addContentView(View view, ViewGroup.LayoutParams params)
```

### addMenuProvider

Added in [1.4.0](/jetpack/androidx/releases/activity#1.4.0)

```
public void addMenuProvider(@NonNull MenuProvider provider)
```

Adds the given `MenuProvider` to this `MenuHost`. If using this method, you must manually remove the provider when necessary.

| Parameters |
| --- |
| `@NonNull MenuProvider provider` | the MenuProvider to be added |

| See also |
| --- |
| `removeMenuProvider` |  |

### addMenuProvider

Added in [1.4.0](/jetpack/androidx/releases/activity#1.4.0)

```
public void addMenuProvider(  
    @NonNull MenuProvider provider,  
    @NonNull LifecycleOwner owner  
)
```

Adds the given `MenuProvider` to this `MenuHost`. This `MenuProvider` will be removed once the given `LifecycleOwner` receives an Lifecycle.Event.ON\_DESTROY event.

| Parameters |
| --- |
| `@NonNull MenuProvider provider` | the MenuProvider to be added |
| `@NonNull LifecycleOwner owner` | the Lifecycle owner whose state will determine the removal of the provider |

### addMenuProvider

Added in [1.4.0](/jetpack/androidx/releases/activity#1.4.0)

```
public void addMenuProvider(  
    @NonNull MenuProvider provider,  
    @NonNull LifecycleOwner owner,  
    @NonNull Lifecycle.State state  
)
```

Adds the given `MenuProvider` to this `MenuHost` once the given `LifecycleOwner` reaches the given `Lifecycle.State`. This `MenuProvider` will be removed once the given `LifecycleOwner` goes down from the given `Lifecycle.State`.

| Parameters |
| --- |
| `@NonNull MenuProvider provider` | the MenuProvider to be added |
| `@NonNull LifecycleOwner owner` | the Lifecycle owner whose state will be used for automated addition/removal |
| `@NonNull Lifecycle.State state` | the Lifecycle.State to check for automated addition/removal |

### addOnConfigurationChangedListener

Added in [1.5.0](/jetpack/androidx/releases/activity#1.5.0)

```
public final void addOnConfigurationChangedListener(  
    @NonNull Consumer<@NonNull Configuration> listener  
)
```

Add a new listener that will get a callback associated with `ComponentCallbacks.onConfigurationChanged` with the new `Configuration`.

| Parameters |
| --- |
| `@NonNull Consumer<@NonNull Configuration> listener` | The listener that should be called whenever {`ComponentCallbacks.onConfigurationChanged` was called. |

### addOnContextAvailableListener

```
public final void addOnContextAvailableListener(  
    @NonNull OnContextAvailableListener listener  
)
```

{@inheritDoc}

Any listener added here will receive a callback as part of `super.onCreate()`, but importantly **before** any other logic is done (including calling through to the framework `Activity.onCreate`) with the exception of restoring the state of the `savedStateRegistry` for use in your listener.

### addOnMultiWindowModeChangedListener

Added in [1.5.0](/jetpack/androidx/releases/activity#1.5.0)

```
public final void addOnMultiWindowModeChangedListener(  
    @NonNull Consumer<@NonNull MultiWindowModeChangedInfo> listener  
)
```

Add a new listener that will get a callback associated with `Activity.onMultiWindowModeChanged` with the new `MultiWindowModeChangedInfo`.

| Parameters |
| --- |
| `@NonNull Consumer<@NonNull MultiWindowModeChangedInfo> listener` | The listener that should be called whenever Activity#onMultiWindowModeChanged was called. |

### addOnNewIntentListener

Added in [1.5.0](/jetpack/androidx/releases/activity#1.5.0)

```
public final void addOnNewIntentListener(@NonNull Consumer<@NonNull Intent> listener)
```

Add a new listener that will get a callback associated with `Activity.onNewIntent` with the new `Intent`.

| Parameters |
| --- |
| `@NonNull Consumer<@NonNull Intent> listener` | The listener that should be called whenever android.app.Activity#onNewIntent was called. |

### addOnPictureInPictureModeChangedListener

Added in [1.5.0](/jetpack/androidx/releases/activity#1.5.0)

```
public final void addOnPictureInPictureModeChangedListener(  
    @NonNull Consumer<@NonNull PictureInPictureModeChangedInfo> listener  
)
```

Add a new listener that will get a callback associated with `Activity.onPictureInPictureModeChanged` with the new `PictureInPictureModeChangedInfo`.

| Parameters |
| --- |
| `@NonNull Consumer<@NonNull PictureInPictureModeChangedInfo> listener` | The listener that should be called whenever `Activity.onPictureInPictureModeChanged` was called. |

### addOnPictureInPictureUiStateChangedListener

Added in [1.13.0](/jetpack/androidx/releases/activity#1.13.0)

```
public final void addOnPictureInPictureUiStateChangedListener(  
    @NonNull Consumer<@NonNull PictureInPictureUiStateCompat> listener  
)
```

Add a new listener that will get a callback associated with `Activity.onPictureInPictureUiStateChanged` with the new `PictureInPictureUiStateCompat`.

| Parameters |
| --- |
| `@NonNull Consumer<@NonNull PictureInPictureUiStateCompat> listener` | The listener that should be called whenever `Activity.onPictureInPictureUiStateChanged` was called. |

### addOnTrimMemoryListener

Added in [1.5.0](/jetpack/androidx/releases/activity#1.5.0)

```
public final void addOnTrimMemoryListener(@NonNull Consumer<@NonNull Integer> listener)
```

Add a new listener that will get a callback associated with `ComponentCallbacks2.onTrimMemory` with the `int` representing the level of trimming.

| Parameters |
| --- |
| `@NonNull Consumer<@NonNull Integer> listener` | The listener that should be called whenever `ComponentCallbacks2.onTrimMemory` was called. |

### addOnUserLeaveHintListener

Added in [1.9.0](/jetpack/androidx/releases/activity#1.9.0)

```
public final void addOnUserLeaveHintListener(@NonNull Runnable listener)
```

Add a new listener that will get a callback associated with `Activity.onUserLeaveHint`

| Parameters |
| --- |
| `@NonNull Runnable listener` | The listener that should be called whenever `Activity.onUserLeaveHint` was called. |

### enterPictureInPictureMode

Added in [1.13.0](/jetpack/androidx/releases/activity#1.13.0)

```
public final void enterPictureInPictureMode(@NonNull PictureInPictureParamsCompat params)
```

Available since API 24 in the framework Activity class, puts the activity in picture-in-picture mode if possible in the current system state. Any prior calls to `setPictureInPictureParams` will still apply when entering picture-in-picture through this call.

### getActivityResultRegistry

```
public final @NonNull ActivityResultRegistry getActivityResultRegistry()
```

Get the `ActivityResultRegistry` associated with this activity.

| Returns |
| --- |
| `@NonNull ActivityResultRegistry` | the `ActivityResultRegistry` |

### getDefaultViewModelCreationExtras

```
@CallSuper  
public @NonNull CreationExtras getDefaultViewModelCreationExtras()
```

{@inheritDoc}

The extras of `getIntent` when this is first called will be used as the defaults to any `androidx.lifecycle.SavedStateHandle` passed to a view model created using this extra.

### getDefaultViewModelProviderFactory

Added in [1.1.0](/jetpack/androidx/releases/activity#1.1.0)

```
public @NonNull ViewModelProvider.Factory getDefaultViewModelProviderFactory()
```

### getFullyDrawnReporter

```
public @NonNull FullyDrawnReporter getFullyDrawnReporter()
```

Retrieve the `FullyDrawnReporter` that should handle the independent parts of the UI that separately report that they are fully drawn.

### getLastCustomNonConfigurationInstance

Added in [1.0.0](/jetpack/androidx/releases/activity#1.0.0)

Deprecated in [1.0.0](/jetpack/androidx/releases/activity#1.0.0)

```
public Object getLastCustomNonConfigurationInstance()
```

**This method is deprecated.**  
Use a {@link androidx.lifecycle.ViewModel} to store non config state.

Return the value previously returned from `onRetainCustomNonConfigurationInstance`.

### getLifecycle

Added in [1.0.0](/jetpack/androidx/releases/activity#1.0.0)

```
public @NonNull Lifecycle getLifecycle()
```

{@inheritDoc}

Overriding this method is no longer supported and this method will be made `final` in a future version of ComponentActivity. If you do override this method, you *must*:

1. Return an instance of `LifecycleRegistry`
2. Lazily initialize your LifecycleRegistry object when this is first called.

Note that this method will be called in the super classes' constructor, before any field initialization or object state creation is complete.

### getNavigationEventDispatcher

Added in [1.12.0](/jetpack/androidx/releases/activity#1.12.0)

```
public @NonNull NavigationEventDispatcher getNavigationEventDispatcher()
```

Lazily provides a `NavigationEventDispatcher` for back navigation handling, including support for predictive back gestures introduced in Android 13 (API 33+).

This dispatcher acts as the central point for back navigation events. When a navigation event occurs (e.g., a back gesture), it safely invokes `ComponentActivity.onBackPressed`.

### Not stable for override

**This property is not intended for override.** It is technically `open` for binary compatibility with previous versions, but overriding this property is unsupported.

### getOnBackPressedDispatcher

```
public final @NonNull OnBackPressedDispatcher getOnBackPressedDispatcher()
```

Retrieve the `OnBackPressedDispatcher` that will be triggered when `onBackPressed` is called.

| Returns |
| --- |
| `@NonNull OnBackPressedDispatcher` | The `OnBackPressedDispatcher` associated with this ComponentActivity. |

### getSavedStateRegistry

Added in [1.0.0](/jetpack/androidx/releases/activity#1.0.0)

```
public final @NonNull SavedStateRegistry getSavedStateRegistry()
```

### getViewModelStore

Added in [1.0.0](/jetpack/androidx/releases/activity#1.0.0)

```
public @NonNull ViewModelStore getViewModelStore()
```

Returns the `ViewModelStore` associated with this activity

Overriding this method is no longer supported and this method will be made `final` in a future version of ComponentActivity.

| Returns |
| --- |
| `@NonNull ViewModelStore` | a `ViewModelStore` |

| Throws |
| --- |
| `IllegalStateException` | if called before the Activity is attached to the Application instance i.e., before onCreate() |

### initializeViewTreeOwners

Added in [1.8.0](/jetpack/androidx/releases/activity#1.8.0)

```
@CallSuper  
public void initializeViewTreeOwners()
```

Sets the view tree owners before setting the content view so that the inflation process and attach listeners will see them already present.

### invalidateMenu

Added in [1.4.0](/jetpack/androidx/releases/activity#1.4.0)

```
public void invalidateMenu()
```

Invalidates the `android.view.Menu` to ensure that what is displayed matches the current internal state of the menu. This should be called whenever the state of the menu is changed, such as items being removed or disabled based on some user event.

### onBackPressed

Added in [1.6.0](/jetpack/androidx/releases/activity#1.6.0)

```
@MainThread  
@CallSuper  
public void onBackPressed()
```

**This method is deprecated.**  
This method has been deprecated in favor of using the
{@link OnBackPressedDispatcher} via {@link #getOnBackPressedDispatcher()}.
The OnBackPressedDispatcher controls how back button events are dispatched
to one or more {@link OnBackPressedCallback} objects.

Called when the activity has detected the user's press of the back key. The `onBackPressedDispatcher` will be given a chance to handle the back button before the default behavior of `Activity.onBackPressed` is invoked.

| See also |
| --- |
| `onBackPressedDispatcher` |  |

### onConfigurationChanged

```
@CallSuper  
public void onConfigurationChanged(@NonNull Configuration newConfig)
```

{@inheritDoc}

Dispatches this call to all listeners added via `addOnConfigurationChangedListener`.

### onCreatePanelMenu

```
public boolean onCreatePanelMenu(int featureId, @NonNull Menu menu)
```

### onMenuItemSelected

```
public boolean onMenuItemSelected(int featureId, @NonNull MenuItem item)
```

### onMultiWindowModeChanged

Added in [1.5.0](/jetpack/androidx/releases/activity#1.5.0)

```
@CallSuper  
public void onMultiWindowModeChanged(boolean isInMultiWindowMode)
```

**This method is deprecated.**  
Deprecated in android.app.Activity

{@inheritDoc}

Dispatches this call to all listeners added via `addOnMultiWindowModeChangedListener`.

### onMultiWindowModeChanged

```
@RequiresApi(api = 26)  
@CallSuper  
public void onMultiWindowModeChanged(  
    boolean isInMultiWindowMode,  
    @NonNull Configuration newConfig  
)
```

{@inheritDoc}

Dispatches this call to all listeners added via `addOnMultiWindowModeChangedListener`.

### onPanelClosed

```
public void onPanelClosed(int featureId, @NonNull Menu menu)
```

### onPictureInPictureModeChanged

Added in [1.5.0](/jetpack/androidx/releases/activity#1.5.0)

```
@CallSuper  
public void onPictureInPictureModeChanged(boolean isInPictureInPictureMode)
```

**This method is deprecated.**  
Deprecated in android.app.Activity

{@inheritDoc}

Dispatches this call to all listeners added via `addOnPictureInPictureModeChangedListener`.

### onPictureInPictureModeChanged

```
@RequiresApi(api = 26)  
@CallSuper  
public void onPictureInPictureModeChanged(  
    boolean isInPictureInPictureMode,  
    @NonNull Configuration newConfig  
)
```

{@inheritDoc}

Dispatches this call to all listeners added via `addOnPictureInPictureModeChangedListener`.

### onPictureInPictureUiStateChanged

```
@RequiresApi(api = 31)  
@CallSuper  
public void onPictureInPictureUiStateChanged(  
    @NonNull PictureInPictureUiState pipState  
)
```

{@inheritDoc}

### onPreparePanel

```
public boolean onPreparePanel(int featureId, View view, @NonNull Menu menu)
```

### onRequestPermissionsResult

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

Deprecated in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
@CallSuper  
public void onRequestPermissionsResult(  
    int requestCode,  
    @NonNull String[] permissions,  
    @NonNull int[] grantResults  
)
```

**This method is deprecated.**  
This method has been deprecated in favor of using the Activity Result API
which brings increased type safety via an {@link ActivityResultContract} and the prebuilt
contracts for common intents available in
{@link androidx.activity.result.contract.ActivityResultContracts}, provides hooks for
testing, and allow receiving results in separate, testable classes independent from your
activity. Use
{@link #registerForActivityResult(ActivityResultContract, ActivityResultCallback)} passing
in a {@link RequestMultiplePermissions} object for the {@link ActivityResultContract} and
handling the result in the {@link ActivityResultCallback#onActivityResult(Object) callback}.

{@inheritDoc}

### onRetainCustomNonConfigurationInstance

Added in [1.0.0](/jetpack/androidx/releases/activity#1.0.0)

Deprecated in [1.0.0](/jetpack/androidx/releases/activity#1.0.0)

```
public Object onRetainCustomNonConfigurationInstance()
```

**This method is deprecated.**  
Use a {@link androidx.lifecycle.ViewModel} to store non config state.

Use this instead of `onRetainNonConfigurationInstance`. Retrieve later with `lastCustomNonConfigurationInstance`.

### onRetainNonConfigurationInstance

Added in [1.0.0](/jetpack/androidx/releases/activity#1.0.0)

```
public final Object onRetainNonConfigurationInstance()
```

Retain all appropriate non-config state. You can NOT override this yourself! Use a `androidx.lifecycle.ViewModel` if you want to retain your own non config state.

### onTrimMemory

```
@CallSuper  
public void onTrimMemory(int level)
```

{@inheritDoc}

Dispatches this call to all listeners added via `addOnTrimMemoryListener`.

### peekAvailableContext

```
public Context peekAvailableContext()
```

Get the `Context` if it is currently available. If this returns `null`, you can use `addOnContextAvailableListener` to receive a callback for when it available.

| Returns |
| --- |
| `Context` | the Context if it is currently available. |

### registerForActivityResult

```
public final @NonNull ActivityResultLauncher<@NonNull I> <I extends Object, O extends Object> registerForActivityResult(  
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

```
public final @NonNull ActivityResultLauncher<@NonNull I> <I extends Object, O extends Object> registerForActivityResult(  
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

### removeMenuProvider

Added in [1.4.0](/jetpack/androidx/releases/activity#1.4.0)

```
public void removeMenuProvider(@NonNull MenuProvider provider)
```

Removes the given `MenuProvider` from this `MenuHost`.

| Parameters |
| --- |
| `@NonNull MenuProvider provider` | the MenuProvider to be removed |

### removeOnConfigurationChangedListener

Added in [1.5.0](/jetpack/androidx/releases/activity#1.5.0)

```
public final void removeOnConfigurationChangedListener(  
    @NonNull Consumer<@NonNull Configuration> listener  
)
```

Remove a previously added listener. It will not receive any future callbacks.

| Parameters |
| --- |
| `@NonNull Consumer<@NonNull Configuration> listener` | The listener previously added with `addOnConfigurationChangedListener` that should be removed. |

### removeOnContextAvailableListener

```
public final void removeOnContextAvailableListener(  
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

### removeOnMultiWindowModeChangedListener

Added in [1.5.0](/jetpack/androidx/releases/activity#1.5.0)

```
public final void removeOnMultiWindowModeChangedListener(  
    @NonNull Consumer<@NonNull MultiWindowModeChangedInfo> listener  
)
```

Remove a previously added listener. It will not receive any future callbacks.

| Parameters |
| --- |
| `@NonNull Consumer<@NonNull MultiWindowModeChangedInfo> listener` | The listener previously added with `addOnMultiWindowModeChangedListener` that should be removed. |

### removeOnNewIntentListener

Added in [1.5.0](/jetpack/androidx/releases/activity#1.5.0)

```
public final void removeOnNewIntentListener(@NonNull Consumer<@NonNull Intent> listener)
```

Remove a previously added listener. It will not receive any future callbacks.

| Parameters |
| --- |
| `@NonNull Consumer<@NonNull Intent> listener` | The listener previously added with `addOnNewIntentListener` that should be removed. |

### removeOnPictureInPictureModeChangedListener

Added in [1.5.0](/jetpack/androidx/releases/activity#1.5.0)

```
public final void removeOnPictureInPictureModeChangedListener(  
    @NonNull Consumer<@NonNull PictureInPictureModeChangedInfo> listener  
)
```

Remove a previously added listener. It will not receive any future callbacks.

| Parameters |
| --- |
| `@NonNull Consumer<@NonNull PictureInPictureModeChangedInfo> listener` | The listener previously added with `addOnPictureInPictureModeChangedListener` that should be removed. |

### removeOnPictureInPictureUiStateChangedListener

Added in [1.13.0](/jetpack/androidx/releases/activity#1.13.0)

```
public final void removeOnPictureInPictureUiStateChangedListener(  
    @NonNull Consumer<@NonNull PictureInPictureUiStateCompat> listener  
)
```

Remove a previously added listener. It will not receive any future callbacks.

| Parameters |
| --- |
| `@NonNull Consumer<@NonNull PictureInPictureUiStateCompat> listener` | The listener previously added with `addOnPictureInPictureUiStateChangedListener` that should be removed. |

### removeOnTrimMemoryListener

Added in [1.5.0](/jetpack/androidx/releases/activity#1.5.0)

```
public final void removeOnTrimMemoryListener(@NonNull Consumer<@NonNull Integer> listener)
```

Remove a previously added listener. It will not receive any future callbacks.

| Parameters |
| --- |
| `@NonNull Consumer<@NonNull Integer> listener` | The listener previously added with .addOnTrimMemoryListener that should be removed. |

### removeOnUserLeaveHintListener

Added in [1.9.0](/jetpack/androidx/releases/activity#1.9.0)

```
public final void removeOnUserLeaveHintListener(@NonNull Runnable listener)
```

Remove a previously added listener. It will not receive any future callbacks.

| Parameters |
| --- |
| `@NonNull Runnable listener` | The listener previously added with `addOnUserLeaveHintListener` that should be removed. |

### reportFullyDrawn

```
public void reportFullyDrawn()
```

### setContentView

```
public void setContentView(@LayoutRes int layoutResID)
```

### setContentView

```
public void setContentView(View view)
```

### setContentView

```
public void setContentView(View view, ViewGroup.LayoutParams params)
```

### setPictureInPictureParams

Added in [1.13.0](/jetpack/androidx/releases/activity#1.13.0)

```
public final void setPictureInPictureParams(@NonNull PictureInPictureParamsCompat params)
```

Available since API 26 in the framework Activity class, updates the properties of the picture-in-picture activity, or sets it to be used later when `enterPictureInPictureMode` is called

| Parameters |
| --- |
| `@NonNull PictureInPictureParamsCompat params` | `PictureInPictureParams` to use for picture-in-picture mode. |

### startActivityForResult

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

Deprecated in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public void startActivityForResult(@NonNull Intent intent, int requestCode)
```

**This method is deprecated.**  
This method has been deprecated in favor of using the Activity Result API
which brings increased type safety via an {@link ActivityResultContract} and the prebuilt
contracts for common intents available in
{@link androidx.activity.result.contract.ActivityResultContracts}, provides hooks for
testing, and allow receiving results in separate, testable classes independent from your
activity. Use
{@link #registerForActivityResult(ActivityResultContract, ActivityResultCallback)}
passing in a {@link StartActivityForResult} object for the {@link ActivityResultContract}.

{@inheritDoc}

### startActivityForResult

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

Deprecated in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public void startActivityForResult(  
    @NonNull Intent intent,  
    int requestCode,  
    Bundle options  
)
```

**This method is deprecated.**  
This method has been deprecated in favor of using the Activity Result API
which brings increased type safety via an {@link ActivityResultContract} and the prebuilt
contracts for common intents available in
{@link androidx.activity.result.contract.ActivityResultContracts}, provides hooks for
testing, and allow receiving results in separate, testable classes independent from your
activity. Use
{@link #registerForActivityResult(ActivityResultContract, ActivityResultCallback)}
passing in a {@link StartActivityForResult} object for the {@link ActivityResultContract}.

{@inheritDoc}

### startIntentSenderForResult

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

Deprecated in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public void startIntentSenderForResult(  
    @NonNull IntentSender intent,  
    int requestCode,  
    Intent fillInIntent,  
    int flagsMask,  
    int flagsValues,  
    int extraFlags  
)
```

**This method is deprecated.**  
This method has been deprecated in favor of using the Activity Result API
which brings increased type safety via an {@link ActivityResultContract} and the prebuilt
contracts for common intents available in
{@link androidx.activity.result.contract.ActivityResultContracts}, provides hooks for
testing, and allow receiving results in separate, testable classes independent from your
activity. Use
{@link #registerForActivityResult(ActivityResultContract, ActivityResultCallback)}
passing in a {@link StartIntentSenderForResult} object for the
{@link ActivityResultContract}.

{@inheritDoc}

### startIntentSenderForResult

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

Deprecated in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public void startIntentSenderForResult(  
    @NonNull IntentSender intent,  
    int requestCode,  
    Intent fillInIntent,  
    int flagsMask,  
    int flagsValues,  
    int extraFlags,  
    Bundle options  
)
```

**This method is deprecated.**  
This method has been deprecated in favor of using the Activity Result API
which brings increased type safety via an {@link ActivityResultContract} and the prebuilt
contracts for common intents available in
{@link androidx.activity.result.contract.ActivityResultContracts}, provides hooks for
testing, and allow receiving results in separate, testable classes independent from your
activity. Use
{@link #registerForActivityResult(ActivityResultContract, ActivityResultCallback)}
passing in a {@link StartIntentSenderForResult} object for the
{@link ActivityResultContract}.

{@inheritDoc}

## Protected methods

### onActivityResult

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

Deprecated in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
@CallSuper  
protected void onActivityResult(int requestCode, int resultCode, Intent data)
```

**This method is deprecated.**  
This method has been deprecated in favor of using the Activity Result API
which brings increased type safety via an {@link ActivityResultContract} and the prebuilt
contracts for common intents available in
{@link androidx.activity.result.contract.ActivityResultContracts}, provides hooks for
testing, and allow receiving results in separate, testable classes independent from your
activity. Use
{@link #registerForActivityResult(ActivityResultContract, ActivityResultCallback)}
with the appropriate {@link ActivityResultContract} and handling the result in the
{@link ActivityResultCallback#onActivityResult(Object) callback}.

{@inheritDoc}

### onCreate

```
protected void onCreate(Bundle savedInstanceState)
```

{@inheritDoc}

If your ComponentActivity is annotated with `ContentView`, this will call `setContentView` for you.

### onNewIntent

```
@CallSuper  
protected void onNewIntent(@NonNull Intent intent)
```

{@inheritDoc}

Dispatches this call to all listeners added via `addOnNewIntentListener`.

### onSaveInstanceState

```
@CallSuper  
protected void onSaveInstanceState(@NonNull Bundle outState)
```

### onUserLeaveHint

```
@CallSuper  
protected void onUserLeaveHint()
```

{@inheritDoc}

Dispatches this call to all listeners added via `addOnUserLeaveHintListener`.

## Extension functions

### ActivityViewModelLazyKt.viewModels

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/ActivityViewModelLazy.kt+function:viewModels)

```
@MainThread  
public final @NonNull Lazy<@NonNull VM> <VM extends ViewModel> ActivityViewModelLazyKt.viewModels(  
    @NonNull ComponentActivity receiver,  
    Function0<@NonNull CreationExtras> extrasProducer,  
    Function0<@NonNull ViewModelProvider.Factory> factoryProducer  
)
```

Returns a `Lazy` delegate to access the ComponentActivity's ViewModel, if `factoryProducer` is specified then `ViewModelProvider.Factory` returned by it will be used to create `ViewModel` first time.

```
class MyComponentActivity : ComponentActivity() {  
    val viewmodel: MyViewModel by viewModels()  
}
```

This property can be accessed only after the Activity is attached to the Application, and access prior to that will result in IllegalArgumentException.

### AuthenticationUtils.registerForAuthenticationResult

Artifact: [androidx.biometric:biometric](/jetpack/androidx/releases/biometric)

[View Source](https://cs.android.com/search?q=file:androidx/biometric/AuthenticationExtensions.kt+function:registerForAuthenticationResult)

```
public final @NonNull AuthenticationResultLauncher AuthenticationUtils.registerForAuthenticationResult(  
    @NonNull ComponentActivity receiver,  
    @NonNull AuthenticationResultCallback resultCallback  
)
```

Returns an `AuthenticationResultLauncher` that can be used to initiate authentication.

A success or error result will be delivered to `AuthenticationResultCallback.onAuthResult` and (one or more) failures will be delivered to `AuthenticationResultCallback.onAuthAttemptFailed`, which is set by `resultCallback`. The callback will be executed on the main thread.

This *must* be called unconditionally, as part of initialization path, typically as a field initializer of an Activity.

Note that if multiple calls to this method are made within a single Fragment or Activity, only the callback registered by the last invocation will be saved and receive authentication results. This can result in unexpected behavior if you intend to manage multiple independent authentication flows. It is strongly recommended to avoid multiple calls to this method in such scenarios.

```
import androidx.activity.ComponentActivity
import androidx.biometric.AuthenticationRequest
import androidx.biometric.AuthenticationRequest.Biometric
import androidx.biometric.AuthenticationRequest.Companion.biometricRequest
import androidx.biometric.AuthenticationResult
import androidx.biometric.AuthenticationResultCallback
import androidx.biometric.PromptContentItemBulletedText
import androidx.biometric.registerForAuthenticationResult

class MyActivityForBiometricAuth : ComponentActivity() {
    val requestAuthentication =
        registerForAuthenticationResult(
            object : AuthenticationResultCallback {
                override fun onAuthResult(result: AuthenticationResult) {
                    when (result) {
                        // Handle successful authentication
                        is AuthenticationResult.Success -> {
                            Log.i(TAG, "onAuthenticationSucceeded with type ${result.authType}")
                        }
                        // Handle authentication error, e.g. user cancellation, lockout errors,
                        // etc
                        is AuthenticationResult.Error -> {
                            Log.i(
                                TAG,
                                "onAuthenticationError " +
                                    "with error code: ${result.errorCode} " +
                                    "and error string: ${result.errString}",
                            )
                        }
                        // Handle fallback option clicks
                        is AuthenticationResult.CustomFallbackSelected -> {
                            Log.i(TAG, "fallback is selected, text: ${result.fallback.text}")
                        }
                    }
                }

                // Handle intermediate authentication failure, this is optional and
                // not needed in most cases
                override fun onAuthAttemptFailed() {
                    Log.i(TAG, "onAuthenticationFailed, try again")
                }
            }
        )

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val authRequest =
            biometricRequest(title = "Title", Biometric.Fallback.DeviceCredential) {
                setSubtitle("Subtitle")
                setContent(
                    AuthenticationRequest.BodyContent.VerticalList(
                        "Vertical list description",
                        listOf(
                            PromptContentItemBulletedText("test item1"),
                            PromptContentItemBulletedText("test item2"),
                        ),
                    )
                )
                setMinStrength(Biometric.Strength.Class3(/*optional: cryptoObject*/ ))
                setIsConfirmationRequired(true)
            }

        Button(this).setOnClickListener { requestAuthentication.launch(authRequest) }
    }
}
```

| See also |
| --- |
| `registerForAuthenticationResult` | (Executor, AuthenticationResultCallback) |

### AuthenticationUtils.registerForAuthenticationResult

Artifact: [androidx.biometric:biometric](/jetpack/androidx/releases/biometric)

[View Source](https://cs.android.com/search?q=file:androidx/biometric/AuthenticationExtensions.kt+function:registerForAuthenticationResult)

```
public final @NonNull AuthenticationResultLauncher AuthenticationUtils.registerForAuthenticationResult(  
    @NonNull ComponentActivity receiver,  
    @NonNull Executor callbackExecutor,  
    @NonNull AuthenticationResultCallback resultCallback  
)
```

Returns an `AuthenticationResultLauncher` that can be used to initiate authentication.

A success or error result will be delivered to `AuthenticationResultCallback.onAuthResult` and (one or more) failures will be delivered to `AuthenticationResultCallback.onAuthAttemptFailed`, which is set by `resultCallback`. The callback will be executed on the thread provided by the `callbackExecutor`.

This *must* be called unconditionally, as part of initialization path, typically as a field initializer of an Activity.

Note that if multiple calls to this method are made within a single Fragment or Activity, only the callback registered by the last invocation will be saved and receive authentication results. This can result in unexpected behavior if you intend to manage multiple independent authentication flows. It is strongly recommended to avoid multiple calls to this method in such scenarios.

```
import androidx.activity.ComponentActivity
import androidx.biometric.AuthenticationRequest
import androidx.biometric.AuthenticationRequest.Biometric
import androidx.biometric.AuthenticationRequest.Companion.biometricRequest
import androidx.biometric.AuthenticationResult
import androidx.biometric.AuthenticationResultCallback
import androidx.biometric.PromptContentItemBulletedText
import androidx.biometric.registerForAuthenticationResult

class MyActivityForBiometricAuth : ComponentActivity() {
    val requestAuthentication =
        registerForAuthenticationResult(
            object : AuthenticationResultCallback {
                override fun onAuthResult(result: AuthenticationResult) {
                    when (result) {
                        // Handle successful authentication
                        is AuthenticationResult.Success -> {
                            Log.i(TAG, "onAuthenticationSucceeded with type ${result.authType}")
                        }
                        // Handle authentication error, e.g. user cancellation, lockout errors,
                        // etc
                        is AuthenticationResult.Error -> {
                            Log.i(
                                TAG,
                                "onAuthenticationError " +
                                    "with error code: ${result.errorCode} " +
                                    "and error string: ${result.errString}",
                            )
                        }
                        // Handle fallback option clicks
                        is AuthenticationResult.CustomFallbackSelected -> {
                            Log.i(TAG, "fallback is selected, text: ${result.fallback.text}")
                        }
                    }
                }

                // Handle intermediate authentication failure, this is optional and
                // not needed in most cases
                override fun onAuthAttemptFailed() {
                    Log.i(TAG, "onAuthenticationFailed, try again")
                }
            }
        )

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val authRequest =
            biometricRequest(title = "Title", Biometric.Fallback.DeviceCredential) {
                setSubtitle("Subtitle")
                setContent(
                    AuthenticationRequest.BodyContent.VerticalList(
                        "Vertical list description",
                        listOf(
                            PromptContentItemBulletedText("test item1"),
                            PromptContentItemBulletedText("test item2"),
                        ),
                    )
                )
                setMinStrength(Biometric.Strength.Class3(/*optional: cryptoObject*/ ))
                setIsConfirmationRequired(true)
            }

        Button(this).setOnClickListener { requestAuthentication.launch(authRequest) }
    }
}
```

### EdgeToEdge.enableEdgeToEdge

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/EdgeToEdge.kt+function:enableEdgeToEdge)

```
public final void EdgeToEdge.enableEdgeToEdge(  
    @NonNull ComponentActivity receiver,  
    @NonNull SystemBarStyle statusBarStyle,  
    @NonNull SystemBarStyle navigationBarStyle  
)
```

Enables the edge-to-edge display for this `ComponentActivity`.

To set it up with the default style, call this method in your Activity's onCreate method:

```
    override fun onCreate(savedInstanceState: Bundle?) {  
        enableEdgeToEdge()  
        super.onCreate(savedInstanceState)  
        ...  
    }
```

The default style configures the system bars with a transparent background when contrast can be enforced by the system (API 29 or above). On older platforms (which only have 3-button/2-button navigation modes), an equivalent scrim is applied to ensure contrast with the system bars.

See `SystemBarStyle` for more customization options.

| Parameters |
| --- |
| `@NonNull SystemBarStyle statusBarStyle` | The `SystemBarStyle` for the status bar. |
| `@NonNull SystemBarStyle navigationBarStyle` | The `SystemBarStyle` for the navigation bar. |