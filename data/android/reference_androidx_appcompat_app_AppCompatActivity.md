# AppCompatActivity

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/appcompat/app/AppCompatActivity))

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/app/AppCompatActivity.java+class:androidx.appcompat.app.AppCompatActivity)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/app/AppCompatActivity "View this page in Kotlin")
|Java

```
public class AppCompatActivity extends FragmentActivity implements AppCompatCallback, TaskStackBuilder.SupportParentable, ActionBarDrawerToggle.DelegateProvider
```

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | | | | | | |
| ↳ | [android.content.Context](https://developer.android.com/reference/android/content/Context.html) | | | | | | |
|  | ↳ | [android.content.ContextWrapper](https://developer.android.com/reference/android/content/ContextWrapper.html) | | | | | |
|  |  | ↳ | [android.view.ContextThemeWrapper](https://developer.android.com/reference/android/view/ContextThemeWrapper.html) | | | | |
|  |  |  | ↳ | [android.app.Activity](https://developer.android.com/reference/android/app/Activity.html) | | | |
|  |  |  |  | ↳ | [androidx.activity.ComponentActivity](/reference/androidx/activity/ComponentActivity) | | |
|  |  |  |  |  | ↳ | [androidx.fragment.app.FragmentActivity](/reference/androidx/fragment/app/FragmentActivity) | |
|  |  |  |  |  |  | ↳ | [androidx.appcompat.app.AppCompatActivity](/reference/androidx/appcompat/app/AppCompatActivity) |

---

Base class for activities that wish to use some of the newer platform features on older Android devices. Some of these backported features include:

* Using the action bar, including action items, navigation modes and more with the `setSupportActionBar` API.
* Built-in switching between light and dark themes by using the `Theme.AppCompat.DayNight` theme and `setDefaultNightMode` API.
* Integration with `DrawerLayout` by using the `getDrawerToggleDelegate` API.

Note that every activity that extends this class has to be themed with `Theme.AppCompat` or a theme that extends that theme.

## Summary

| Public constructors |
| --- |
| `AppCompatActivity()`  Default constructor for AppCompatActivity. |
| `@ContentView AppCompatActivity(@LayoutRes int contentLayoutId)`  Alternate constructor that can be used to provide a default layout that will be inflated as part of `super.onCreate(savedInstanceState)`. |

| Public methods |
| --- |
| `void` | `addContentView(View view, ViewGroup.LayoutParams params)` |
| `void` | `closeOptionsMenu()` |
| `boolean` | `dispatchKeyEvent(KeyEvent event)` |
| `T` | `<T extends View> findViewById(@IdRes int id)` |
| `@NonNull AppCompatDelegate` | `getDelegate()` |
| `@Nullable ActionBarDrawerToggle.Delegate` | `getDrawerToggleDelegate()` |
| `@NonNull MenuInflater` | `getMenuInflater()` |
| `Resources` | `getResources()` |
| `@Nullable ActionBar` | `getSupportActionBar()`  Support library version of `getActionBar`. |
| `@Nullable Intent` | `getSupportParentActivityIntent()`  Obtain an `android.content.Intent` that will launch an explicit target activity specified by sourceActivity's `PARENT_ACTIVITY` element in the application's manifest. |
| `void` | `invalidateOptionsMenu()` |
| `void` | `onConfigurationChanged(@NonNull Configuration newConfig)`  {@inheritDoc} |
| `void` | `onContentChanged()` |
| `void` | `onCreateSupportNavigateUpTaskStack(@NonNull TaskStackBuilder builder)`  Support version of `onCreateNavigateUpTaskStack`. |
| `boolean` | `onKeyDown(int keyCode, KeyEvent event)` |
| `final boolean` | `onMenuItemSelected(int featureId, @NonNull MenuItem item)` |
| `boolean` | `onMenuOpened(int featureId, Menu menu)`  Please note: AppCompat uses its own feature id for the action bar: `FEATURE_SUPPORT_ACTION_BAR`. |
| `void` | `onPanelClosed(int featureId, @NonNull Menu menu)`  Please note: AppCompat uses its own feature id for the action bar: `FEATURE_SUPPORT_ACTION_BAR`. |
| `void` | `onPrepareSupportNavigateUpTaskStack(@NonNull TaskStackBuilder builder)`  Support version of `onPrepareNavigateUpTaskStack`. |
| `void` | `@CallSuper onSupportActionModeFinished(@NonNull ActionMode mode)`  Notifies the activity that a support action mode has finished. |
| `void` | `@CallSuper onSupportActionModeStarted(@NonNull ActionMode mode)`  Notifies the Activity that a support action mode has been started. |
| `void` | `onSupportContentChanged()`  **This method is deprecated.** Use onContentChanged instead. |
| `boolean` | `onSupportNavigateUp()`  This method is called whenever the user chooses to navigate Up within your application's activity hierarchy from the action bar. |
| `@Nullable ActionMode` | `onWindowStartingSupportActionMode(@NonNull ActionMode.Callback callback)`  Called when a support action mode is being started for this window. |
| `void` | `openOptionsMenu()` |
| `void` | `setContentView(@LayoutRes int layoutResID)` |
| `void` | `setContentView(View view)` |
| `void` | `setContentView(View view, ViewGroup.LayoutParams params)` |
| `void` | `setSupportActionBar(@Nullable Toolbar toolbar)`  Set a `Toolbar` to act as the `androidx.appcompat.app.ActionBar` for this Activity window. |
| `void` | `setSupportProgress(int progress)`  **This method is deprecated.** Progress bars are no longer provided in AppCompat. |
| `void` | `setSupportProgressBarIndeterminate(boolean indeterminate)`  **This method is deprecated.** Progress bars are no longer provided in AppCompat. |
| `void` | `setSupportProgressBarIndeterminateVisibility(boolean visible)`  **This method is deprecated.** Progress bars are no longer provided in AppCompat. |
| `void` | `setSupportProgressBarVisibility(boolean visible)`  **This method is deprecated.** Progress bars are no longer provided in AppCompat. |
| `void` | `setTheme(@StyleRes int resId)` |
| `@Nullable ActionMode` | `startSupportActionMode(@NonNull ActionMode.Callback callback)`  Start an action mode. |
| `void` | `supportInvalidateOptionsMenu()`  **This method is deprecated.** Call `invalidateOptionsMenu` directly. |
| `void` | `supportNavigateUpTo(@NonNull Intent upIntent)`  Navigate from sourceActivity to the activity specified by upIntent, finishing sourceActivity in the process. upIntent will have the flag `FLAG_ACTIVITY_CLEAR_TOP` set by this method, along with any others required for proper up navigation as outlined in the Android Design Guide. |
| `boolean` | `supportRequestWindowFeature(int featureId)`  Enable extended support library window features. |
| `boolean` | `supportShouldUpRecreateTask(@NonNull Intent targetIntent)`  Returns true if sourceActivity should recreate the task when navigating 'up' by using targetIntent. |

| Protected methods |
| --- |
| `void` | `attachBaseContext(Context newBase)` |
| `void` | `onDestroy()`  Destroy all fragments. |
| `void` | `onLocalesChanged(@NonNull LocaleListCompat locales)`  Called when the locales have been changed. |
| `void` | `onNightModeChanged(int mode)`  Called when the night mode has changed. |
| `void` | `onPostCreate(@Nullable Bundle savedInstanceState)` |
| `void` | `onPostResume()`  Dispatch onResume() to fragments. |
| `void` | `onStart()`  Dispatch onStart() to all fragments. |
| `void` | `onStop()`  Dispatch onStop() to all fragments. |
| `void` | `onTitleChanged(CharSequence title, int color)` |

| Extension functions |
| --- |
| `final void` | `ActivityKt.setupActionBarWithNavController(     @NonNull AppCompatActivity receiver,     @NonNull NavController navController,     @NonNull AppBarConfiguration configuration )`  Sets up the ActionBar returned by `AppCompatActivity.getSupportActionBar` for use with a `NavController`. |
| `final void` | `ActivityKt.setupActionBarWithNavController(     @NonNull AppCompatActivity receiver,     @NonNull NavController navController,     DrawerLayout drawerLayout )`  Sets up the ActionBar returned by `AppCompatActivity.getSupportActionBar` for use with a `NavController`. |

| Inherited Constants |
| --- |
| From [android.app.Activity](https://developer.android.com/reference/android/app/Activity.html) |  |  | | --- | --- | | `static final int` | `DEFAULT_KEYS_DIALER = 1` | | `static final int` | `DEFAULT_KEYS_DISABLE = 0` | | `static final int` | `DEFAULT_KEYS_SEARCH_GLOBAL = 4` | | `static final int` | `DEFAULT_KEYS_SEARCH_LOCAL = 3` | | `static final int` | `DEFAULT_KEYS_SHORTCUT = 2` | | `static final int[]` | `FOCUSED_STATE_SET` | | `static final int` | `FULLSCREEN_MODE_REQUEST_ENTER = 1` | | `static final int` | `FULLSCREEN_MODE_REQUEST_EXIT = 0` | | `static final int` | `OVERRIDE_TRANSITION_CLOSE = 1` | | `static final int` | `OVERRIDE_TRANSITION_OPEN = 0` | | `static final int` | `RESULT_CANCELED = 0` | | `static final int` | `RESULT_FIRST_USER = 1` | | `static final int` | `RESULT_OK = -1` | |
| From [android.content.ComponentCallbacks2](https://developer.android.com/reference/android/content/ComponentCallbacks2.html) |  |  | | --- | --- | | `static final int` | `TRIM_MEMORY_BACKGROUND = 40` | | `static final int` | `TRIM_MEMORY_COMPLETE = 80`  **This field is deprecated.** | | `static final int` | `TRIM_MEMORY_MODERATE = 60`  **This field is deprecated.** | | `static final int` | `TRIM_MEMORY_RUNNING_CRITICAL = 15`  **This field is deprecated.** | | `static final int` | `TRIM_MEMORY_RUNNING_LOW = 10`  **This field is deprecated.** | | `static final int` | `TRIM_MEMORY_RUNNING_MODERATE = 5`  **This field is deprecated.** | | `static final int` | `TRIM_MEMORY_UI_HIDDEN = 20` | |
| From [android.content.Context](https://developer.android.com/reference/android/content/Context.html) |  |  | | --- | --- | | `static final String` | `ACCESSIBILITY_SERVICE = "accessibility"` | | `static final String` | `ACCOUNT_SERVICE = "account"` | | `static final String` | `ACTIVITY_SERVICE = "activity"` | | `static final String` | `ADVANCED_PROTECTION_SERVICE = "advanced_protection"` | | `static final String` | `ALARM_SERVICE = "alarm"` | | `static final String` | `APPWIDGET_SERVICE = "appwidget"` | | `static final String` | `APP_FUNCTION_SERVICE = "app_function"` | | `static final String` | `APP_OPS_SERVICE = "appops"` | | `static final String` | `APP_SEARCH_SERVICE = "app_search"` | | `static final String` | `AUDIO_SERVICE = "audio"` | | `static final String` | `AUTOFILL_SERVICE = "autofill"` | | `static final String` | `BATTERY_SERVICE = "batterymanager"` | | `static final int` | `BIND_ABOVE_CLIENT = 8` | | `static final int` | `BIND_ADJUST_WITH_ACTIVITY = 128` | | `static final int` | `BIND_ALLOW_ACTIVITY_STARTS = 512` | | `static final int` | `BIND_ALLOW_OOM_MANAGEMENT = 16` | | `static final int` | `BIND_AUTO_CREATE = 1` | | `static final int` | `BIND_DEBUG_UNBIND = 2` | | `static final int` | `BIND_EXTERNAL_SERVICE = -2147483648` | | `static final long` | `BIND_EXTERNAL_SERVICE_LONG = 4611686018427387904` | | `static final int` | `BIND_IMPORTANT = 64` | | `static final int` | `BIND_INCLUDE_CAPABILITIES = 4096` | | `static final int` | `BIND_NOT_FOREGROUND = 4` | | `static final int` | `BIND_NOT_PERCEPTIBLE = 256` | | `static final int` | `BIND_PACKAGE_ISOLATED_PROCESS = 16384` | | `static final int` | `BIND_SHARED_ISOLATED_PROCESS = 8192` | | `static final int` | `BIND_WAIVE_PRIORITY = 32` | | `static final String` | `BIOMETRIC_SERVICE = "biometric"` | | `static final String` | `BLOB_STORE_SERVICE = "blob_store"` | | `static final String` | `BLUETOOTH_SERVICE = "bluetooth"` | | `static final String` | `BUGREPORT_SERVICE = "bugreport"` | | `static final String` | `CAMERA_SERVICE = "camera"` | | `static final String` | `CAPTIONING_SERVICE = "captioning"` | | `static final String` | `CARRIER_CONFIG_SERVICE = "carrier_config"` | | `static final String` | `CHOOSER_SERVICE = "chooser"` | | `static final String` | `CLIPBOARD_SERVICE = "clipboard"` | | `static final String` | `COMPANION_DEVICE_SERVICE = "companiondevice"` | | `static final String` | `CONNECTIVITY_DIAGNOSTICS_SERVICE = "connectivity_diagnostics"` | | `static final String` | `CONNECTIVITY_SERVICE = "connectivity"` | | `static final String` | `CONSUMER_IR_SERVICE = "consumer_ir"` | | `static final String` | `CONTACT_KEYS_SERVICE = "contact_keys"` | | `static final int` | `CONTEXT_IGNORE_SECURITY = 2` | | `static final int` | `CONTEXT_INCLUDE_CODE = 1` | | `static final int` | `CONTEXT_RESTRICTED = 4` | | `static final String` | `CREDENTIAL_SERVICE = "credential"` | | `static final String` | `CROSS_PROFILE_APPS_SERVICE = "crossprofileapps"` | | `static final int` | `DEVICE_ID_DEFAULT = 0` | | `static final int` | `DEVICE_ID_INVALID = -1` | | `static final String` | `DEVICE_LOCK_SERVICE = "device_lock"` | | `static final String` | `DEVICE_POLICY_SERVICE = "device_policy"` | | `static final String` | `DISPLAY_HASH_SERVICE = "display_hash"` | | `static final String` | `DISPLAY_SERVICE = "display"` | | `static final String` | `DOMAIN_VERIFICATION_SERVICE = "domain_verification"` | | `static final String` | `DOWNLOAD_SERVICE = "download"` | | `static final String` | `DROPBOX_SERVICE = "dropbox"` | | `static final String` | `EUICC_SERVICE = "euicc"` | | `static final String` | `FILE_INTEGRITY_SERVICE = "file_integrity"` | | `static final String` | `FILE_SERVICE = "file"` | | `static final String` | `GAME_SERVICE = "game"` | | `static final String` | `GRAMMATICAL_INFLECTION_SERVICE = "grammatical_inflection"` | | `static final String` | `HARDWARE_PROPERTIES_SERVICE = "hardware_properties"` | | `static final String` | `HEALTHCONNECT_SERVICE = "healthconnect"` | | `static final String` | `INPUT_METHOD_SERVICE = "input_method"` | | `static final String` | `INPUT_SERVICE = "input"` | | `static final String` | `IPSEC_SERVICE = "ipsec"` | | `static final String` | `JOB_SCHEDULER_SERVICE = "jobscheduler"` | | `static final String` | `KEYGUARD_SERVICE = "keyguard"` | | `static final String` | `KEYSTORE_SERVICE = "keystore"` | | `static final String` | `LAUNCHER_APPS_SERVICE = "launcherapps"` | | `static final String` | `LAYOUT_INFLATER_SERVICE = "layout_inflater"` | | `static final String` | `LOCALE_SERVICE = "locale"` | | `static final String` | `LOCATION_SERVICE = "location"` | | `static final String` | `MEDIA_COMMUNICATION_SERVICE = "media_communication"` | | `static final String` | `MEDIA_METRICS_SERVICE = "media_metrics"` | | `static final String` | `MEDIA_PROJECTION_SERVICE = "media_projection"` | | `static final String` | `MEDIA_QUALITY_SERVICE = "media_quality"` | | `static final String` | `MEDIA_ROUTER_SERVICE = "media_router"` | | `static final String` | `MEDIA_SESSION_SERVICE = "media_session"` | | `static final String` | `MIDI_SERVICE = "midi"` | | `static final int` | `MODE_APPEND = 32768` | | `static final int` | `MODE_ENABLE_WRITE_AHEAD_LOGGING = 8` | | `static final int` | `MODE_MULTI_PROCESS = 4`  **This field is deprecated.** | | `static final int` | `MODE_NO_LOCALIZED_COLLATORS = 16` | | `static final int` | `MODE_PRIVATE = 0` | | `static final int` | `MODE_WORLD_READABLE = 1`  **This field is deprecated.** | | `static final int` | `MODE_WORLD_WRITEABLE = 2`  **This field is deprecated.** | | `static final String` | `NETWORK_STATS_SERVICE = "netstats"` | | `static final String` | `NFC_SERVICE = "nfc"` | | `static final String` | `NOTIFICATION_SERVICE = "notification"` | | `static final String` | `NPU_SERVICE = "npu"` | | `static final String` | `NSD_SERVICE = "servicediscovery"` | | `static final String` | `OVERLAY_SERVICE = "overlay"` | | `static final String` | `PCC_SANDBOX_SERVICE = "pcc_sandbox"` | | `static final String` | `PEOPLE_SERVICE = "people"` | | `static final String` | `PERFORMANCE_HINT_SERVICE = "performance_hint"` | | `static final String` | `PERSISTENT_DATA_BLOCK_SERVICE = "persistent_data_block"` | | `static final String` | `POWER_SERVICE = "power"` | | `static final String` | `PRINT_SERVICE = "print"` | | `static final String` | `PROFILING_SERVICE = "profiling"` | | `static final int` | `RECEIVER_EXPORTED = 2` | | `static final int` | `RECEIVER_NOT_EXPORTED = 4` | | `static final int` | `RECEIVER_VISIBLE_TO_INSTANT_APPS = 1` | | `static final String` | `RESTRICTIONS_SERVICE = "restrictions"` | | `static final String` | `ROLE_SERVICE = "role"` | | `static final String` | `SATELLITE_SERVICE = "satellite"` | | `static final String` | `SEARCH_SERVICE = "search"` | | `static final String` | `SECURITY_STATE_SERVICE = "security_state"` | | `static final String` | `SENSOR_SERVICE = "sensor"` | | `static final String` | `SERIAL_SERVICE = "serial"` | | `static final String` | `SHORTCUT_SERVICE = "shortcut"` | | `static final String` | `STATUS_BAR_SERVICE = "statusbar"` | | `static final String` | `STORAGE_SERVICE = "storage"` | | `static final String` | `STORAGE_STATS_SERVICE = "storagestats"` | | `static final String` | `SYSTEM_HEALTH_SERVICE = "systemhealth"` | | `static final String` | `TELECOM_SERVICE = "telecom"` | | `static final String` | `TELEPHONY_IMS_SERVICE = "telephony_ims"` | | `static final String` | `TELEPHONY_PHONE_NUMBER_SERVICE = "telephony_phone_number"` | | `static final String` | `TELEPHONY_SERVICE = "phone"` | | `static final String` | `TELEPHONY_SUBSCRIPTION_SERVICE = "telephony_subscription_service"` | | `static final String` | `TETHERING_SERVICE = "tethering"` | | `static final String` | `TEXT_CLASSIFICATION_SERVICE = "textclassification"` | | `static final String` | `TEXT_SERVICES_MANAGER_SERVICE = "textservices"` | | `static final String` | `TV_AD_SERVICE = "tv_ad"` | | `static final String` | `TV_INPUT_SERVICE = "tv_input"` | | `static final String` | `TV_INTERACTIVE_APP_SERVICE = "tv_interactive_app"` | | `static final String` | `UI_MODE_SERVICE = "uimode"` | | `static final String` | `USAGE_STATS_SERVICE = "usagestats"` | | `static final String` | `USB_SERVICE = "usb"` | | `static final String` | `USER_SERVICE = "user"` | | `static final String` | `VIBRATOR_MANAGER_SERVICE = "vibrator_manager"` | | `static final String` | `VIBRATOR_SERVICE = "vibrator"`  **This field is deprecated.** | | `static final String` | `VIRTUAL_DEVICE_SERVICE = "virtualdevice"` | | `static final String` | `VPN_MANAGEMENT_SERVICE = "vpn_management"` | | `static final String` | `WALLPAPER_SERVICE = "wallpaper"` | | `static final String` | `WEB_APP_SERVICE = "web_app"` | | `static final String` | `WIFI_AWARE_SERVICE = "wifiaware"` | | `static final String` | `WIFI_P2P_SERVICE = "wifip2p"` | | `static final String` | `WIFI_RTT_RANGING_SERVICE = "wifirtt"` | | `static final String` | `WIFI_SERVICE = "wifi"` | | `static final String` | `WINDOW_SERVICE = "window"` | |

| Inherited fields |
| --- |
| From [androidx.activity.ComponentActivity](/reference/androidx/activity/ComponentActivity) |  |  | | --- | --- | | `final ActivityResultRegistry` | `activityResultRegistry`  Get the `ActivityResultRegistry` associated with this activity. | |

| Inherited methods |
| --- |
| From [android.app.Activity](https://developer.android.com/reference/android/app/Activity.html) |  |  | | --- | --- | | `void` | `addContentView(View view, ViewGroup.LayoutParams params)` | | `void` | `clearOverrideActivityTransition(int overrideType)` | | `void` | `closeContextMenu()` | | `PendingIntent` | `createPendingResult(int requestCode, Intent data, int flags)` | | `final void` | `dismissDialog(int id)`  **This method is deprecated.** | | `final void` | `dismissKeyboardShortcutsHelper()` | | `boolean` | `dispatchGenericMotionEvent(MotionEvent ev)` | | `boolean` | `dispatchKeyEvent(KeyEvent event)` | | `boolean` | `dispatchKeyShortcutEvent(KeyEvent event)` | | `boolean` | `dispatchPopulateAccessibilityEvent(AccessibilityEvent event)` | | `boolean` | `dispatchTouchEvent(MotionEvent ev)` | | `boolean` | `dispatchTrackballEvent(MotionEvent ev)` | | `void` | `dump(String prefix, FileDescriptor fd, PrintWriter writer, String[] args)` | | `void` | `enterPictureInPictureMode()`  **This method is deprecated.** | | `boolean` | `enterPictureInPictureMode(PictureInPictureParams params)` | | `void` | `finish()` | | `void` | `finishActivity(int requestCode)` | | `void` | `finishActivityFromChild(Activity child, int requestCode)`  **This method is deprecated.** | | `void` | `finishAffinity()` | | `void` | `finishAfterTransition()` | | `void` | `finishAndRemoveTask()` | | `void` | `finishFromChild(Activity child)`  **This method is deprecated.** | | `ActionBar` | `getActionBar()` | | `final Application` | `getApplication()` | | `ComponentCaller` | `getCaller()` | | `ComponentName` | `getCallingActivity()` | | `String` | `getCallingPackage()` | | `int` | `getChangingConfigurations()` | | `ComponentName` | `getComponentName()` | | `Scene` | `getContentScene()` | | `TransitionManager` | `getContentTransitionManager()` | | `ComponentCaller` | `getCurrentCaller()` | | `View` | `getCurrentFocus()` | | `FragmentManager` | `getFragmentManager()`  **This method is deprecated.** | | `ComponentCaller` | `getInitialCaller()` | | `Intent` | `getIntent()` | | `Object` | `getLastNonConfigurationInstance()` | | `String` | `getLaunchedFromPackage()` | | `int` | `getLaunchedFromUid()` | | `LayoutInflater` | `getLayoutInflater()` | | `LoaderManager` | `getLoaderManager()`  **This method is deprecated.** | | `String` | `getLocalClassName()` | | `int` | `getMaxNumPictureInPictureActions()` | | `final MediaController` | `getMediaController()` | | `OnBackInvokedDispatcher` | `getOnBackInvokedDispatcher()` | | `final Activity` | `getParent()`  **This method is deprecated.** | | `Intent` | `getParentActivityIntent()` | | `SharedPreferences` | `getPreferences(int mode)` | | `Uri` | `getReferrer()` | | `int` | `getRequestedOrientation()` | | `final SearchEvent` | `getSearchEvent()` | | `final SplashScreen` | `getSplashScreen()` | | `Object` | `getSystemService(String name)` | | `int` | `getTaskId()` | | `final CharSequence` | `getTitle()` | | `final int` | `getTitleColor()` | | `VoiceInteractor` | `getVoiceInteractor()` | | `final int` | `getVolumeControlStream()` | | `Window` | `getWindow()` | | `WindowManager` | `getWindowManager()` | | `boolean` | `hasWindowFocus()` | | `boolean` | `isActivityTransitionRunning()` | | `boolean` | `isChangingConfigurations()` | | `final boolean` | `isChild()`  **This method is deprecated.** | | `boolean` | `isDestroyed()` | | `boolean` | `isFinishing()` | | `final boolean` | `isHandoffEnabled()` | | `boolean` | `isImmersive()` | | `boolean` | `isInMultiWindowMode()` | | `boolean` | `isInPictureInPictureMode()` | | `boolean` | `isLaunchedFromBubble()` | | `boolean` | `isLocalVoiceInteractionSupported()` | | `boolean` | `isTaskRoot()` | | `boolean` | `isVoiceInteraction()` | | `boolean` | `isVoiceInteractionRoot()` | | `final Cursor` | `managedQuery(     Uri uri,     String[] projection,     String selection,     String[] selectionArgs,     String sortOrder )`  **This method is deprecated.** | | `boolean` | `moveTaskToBack(boolean nonRoot)` | | `boolean` | `navigateUpTo(Intent upIntent)` | | `boolean` | `navigateUpToFromChild(Activity child, Intent upIntent)`  **This method is deprecated.** | | `void` | `onActionModeFinished(ActionMode mode)` | | `void` | `onActionModeStarted(ActionMode mode)` | | `void` | `onActivityReenter(int resultCode, Intent data)` | | `void` | `onActivityResult(int requestCode, int resultCode, Intent data)` | | `void` | `onApplyThemeResource(Resources.Theme theme, int resid, boolean first)` | | `void` | `onAttachFragment(Fragment fragment)`  **This method is deprecated.** | | `void` | `onAttachedToWindow()` | | `void` | `onBackPressed()`  **This method is deprecated.** | | `void` | `onChildTitleChanged(Activity childActivity, CharSequence title)` | | `void` | `onConfigurationChanged(Configuration newConfig)` | | `boolean` | `onContextItemSelected(MenuItem item)` | | `void` | `onContextMenuClosed(Menu menu)` | | `void` | `onCreate(Bundle savedInstanceState)` | | `void` | `onCreateContextMenu(     ContextMenu menu,     View v,     ContextMenu.ContextMenuInfo menuInfo )` | | `CharSequence` | `onCreateDescription()` | | `Dialog` | `onCreateDialog(int id)`  **This method is deprecated.** | | `void` | `onCreateNavigateUpTaskStack(TaskStackBuilder builder)` | | `boolean` | `onCreateOptionsMenu(Menu menu)` | | `boolean` | `onCreatePanelMenu(int featureId, Menu menu)` | | `View` | `onCreatePanelView(int featureId)` | | `boolean` | `onCreateThumbnail(Bitmap outBitmap, Canvas canvas)`  **This method is deprecated.** | | `View` | `onCreateView(     View parent,     String name,     Context context,     AttributeSet attrs )` | | `void` | `onDestroy()` | | `void` | `onDetachedFromWindow()` | | `void` | `onEnterAnimationComplete()` | | `boolean` | `onGenericMotionEvent(MotionEvent event)` | | `void` | `onGetDirectActions(     CancellationSignal cancellationSignal,     Consumer<List<DirectAction>> callback )` | | `HandoffActivityData` | `onHandoffActivityDataRequested(     HandoffActivityDataRequestInfo requestInfo )` | | `boolean` | `onKeyLongPress(int keyCode, KeyEvent event)` | | `boolean` | `onKeyMultiple(int keyCode, int repeatCount, KeyEvent event)` | | `boolean` | `onKeyShortcut(int keyCode, KeyEvent event)` | | `boolean` | `onKeyUp(int keyCode, KeyEvent event)` | | `void` | `onLocalVoiceInteractionStarted()` | | `void` | `onLocalVoiceInteractionStopped()` | | `void` | `onLowMemory()`  **This method is deprecated.** | | `boolean` | `onMenuItemSelected(int featureId, MenuItem item)` | | `void` | `onMultiWindowModeChanged(boolean isInMultiWindowMode)`  **This method is deprecated.** | | `boolean` | `onNavigateUp()` | | `boolean` | `onNavigateUpFromChild(Activity child)`  **This method is deprecated.** | | `void` | `onNewIntent(Intent intent)` | | `boolean` | `onOptionsItemSelected(MenuItem item)` | | `void` | `onOptionsMenuClosed(Menu menu)` | | `void` | `onPanelClosed(int featureId, Menu menu)` | | `void` | `onPause()` | | `void` | `onPerformDirectAction(     String actionId,     Bundle arguments,     CancellationSignal cancellationSignal,     Consumer<Bundle> resultListener )` | | `void` | `onPictureInPictureModeChanged(boolean isInPictureInPictureMode)`  **This method is deprecated.** | | `boolean` | `onPictureInPictureRequested()` | | `void` | `onPictureInPictureUiStateChanged(PictureInPictureUiState pipState)` | | `void` | `onPostResume()` | | `void` | `onPrepareDialog(int id, Dialog dialog)`  **This method is deprecated.** | | `void` | `onPrepareNavigateUpTaskStack(TaskStackBuilder builder)` | | `boolean` | `onPrepareOptionsMenu(Menu menu)` | | `boolean` | `onPreparePanel(int featureId, View view, Menu menu)` | | `void` | `onProvideAssistContent(AssistContent outContent)` | | `void` | `onProvideAssistData(Bundle data)` | | `void` | `onProvideKeyboardShortcuts(     List<KeyboardShortcutGroup> data,     Menu menu,     int deviceId )` | | `Uri` | `onProvideReferrer()` | | `void` | `onRequestPermissionsResult(     int requestCode,     String[] permissions,     int[] grantResults )` | | `void` | `onRestart()` | | `void` | `onRestoreInstanceState(Bundle savedInstanceState)` | | `void` | `onResume()` | | `Object` | `onRetainNonConfigurationInstance()` | | `void` | `onSaveInstanceState(Bundle outState)` | | `boolean` | `onSearchRequested()` | | `void` | `onStart()` | | `void` | `onStateNotSaved()`  **This method is deprecated.** | | `void` | `onStop()` | | `void` | `onTopResumedActivityChanged(boolean isTopResumedActivity)` | | `boolean` | `onTouchEvent(MotionEvent event)` | | `boolean` | `onTrackballEvent(MotionEvent event)` | | `void` | `onTrimMemory(int level)` | | `void` | `onUserInteraction()` | | `void` | `onUserLeaveHint()` | | `void` | `onVisibleBehindCanceled()`  **This method is deprecated.** | | `void` | `onWindowAttributesChanged(WindowManager.LayoutParams params)` | | `void` | `onWindowFocusChanged(boolean hasFocus)` | | `ActionMode` | `onWindowStartingActionMode(ActionMode.Callback callback)` | | `void` | `openContextMenu(View view)` | | `void` | `overrideActivityTransition(     int overrideType,     int enterAnim,     int exitAnim )` | | `void` | `overridePendingTransition(int enterAnim, int exitAnim)`  **This method is deprecated.** | | `void` | `postponeEnterTransition()` | | `void` | `recreate()` | | `void` | `registerActivityLifecycleCallbacks(     Application.ActivityLifecycleCallbacks callback )` | | `void` | `registerComponentCallbacks(ComponentCallbacks callback)` | | `void` | `registerForContextMenu(View view)` | | `void` | `registerScreenCaptureCallback(     Executor executor,     Activity.ScreenCaptureCallback callback )` | | `boolean` | `releaseInstance()` | | `final void` | `removeDialog(int id)`  **This method is deprecated.** | | `void` | `reportFullyDrawn()` | | `DragAndDropPermissions` | `requestDragAndDropPermissions(DragEvent event)` | | `void` | `requestFullscreenMode(     int request,     OutcomeReceiver<Void, Throwable> approvalCallback )` | | `final void` | `requestOpenInBrowserEducation()` | | `final void` | `requestPermissions(String[] permissions, int requestCode)` | | `final void` | `requestShowKeyboardShortcuts()` | | `boolean` | `requestVisibleBehind(boolean visible)`  **This method is deprecated.** | | `final boolean` | `requestWindowFeature(int featureId)` | | `final T` | `<T extends View> requireViewById(int id)` | | `final void` | `runOnUiThread(Runnable action)` | | `void` | `setActionBar(Toolbar toolbar)` | | `void` | `setAllowCrossUidActivitySwitchFromBelow(boolean allowed)` | | `void` | `setContentTransitionManager(TransitionManager tm)` | | `void` | `setContentView(View view)` | | `final void` | `setDefaultKeyMode(int mode)` | | `void` | `setEnterSharedElementCallback(SharedElementCallback callback)` | | `void` | `setExitSharedElementCallback(SharedElementCallback callback)` | | `final void` | `setFeatureDrawable(int featureId, Drawable drawable)` | | `final void` | `setFeatureDrawableAlpha(int featureId, int alpha)` | | `final void` | `setFeatureDrawableResource(int featureId, int resId)` | | `final void` | `setFeatureDrawableUri(int featureId, Uri uri)` | | `void` | `setFinishOnTouchOutside(boolean finish)` | | `final void` | `setHandoffEnabled(     boolean handoffEnabled,     HandoffActivityParams handoffActivityParams )` | | `void` | `setImmersive(boolean i)` | | `void` | `setInheritShowWhenLocked(boolean inheritShowWhenLocked)` | | `void` | `setIntent(Intent newIntent)` | | `void` | `setLocusContext(LocusId locusId, Bundle bundle)` | | `final void` | `setMediaController(MediaController controller)` | | `void` | `setPictureInPictureParams(PictureInPictureParams params)` | | `final void` | `setProgress(int progress)`  **This method is deprecated.** | | `final void` | `setProgressBarIndeterminate(boolean indeterminate)`  **This method is deprecated.** | | `final void` | `setProgressBarIndeterminateVisibility(boolean visible)`  **This method is deprecated.** | | `final void` | `setProgressBarVisibility(boolean visible)`  **This method is deprecated.** | | `void` | `setRecentsScreenshotEnabled(boolean enabled)` | | `void` | `setRequestedOrientation(int requestedOrientation)` | | `final void` | `setResult(int resultCode)` | | `final void` | `setSecondaryProgress(int secondaryProgress)`  **This method is deprecated.** | | `void` | `setShouldDockBigOverlays(boolean shouldDockBigOverlays)` | | `void` | `setShowWhenLocked(boolean showWhenLocked)` | | `void` | `setTaskDescription(ActivityManager.TaskDescription taskDescription)` | | `void` | `setTitle(int titleId)` | | `void` | `setTitleColor(int textColor)`  **This method is deprecated.** | | `boolean` | `setTranslucent(boolean translucent)` | | `void` | `setTurnScreenOn(boolean turnScreenOn)` | | `void` | `setVisible(boolean visible)` | | `final void` | `setVolumeControlStream(int streamType)` | | `void` | `setVrModeEnabled(boolean enabled, ComponentName requestedComponent)` | | `boolean` | `shouldDockBigOverlays()` | | `boolean` | `shouldShowRequestPermissionRationale(String permission)` | | `boolean` | `shouldUpRecreateTask(Intent targetIntent)` | | `boolean` | `showAssist(Bundle args)` | | `final void` | `showDialog(int id)`  **This method is deprecated.** | | `final boolean` | `showDialog(int id, Bundle args)`  **This method is deprecated.** | | `void` | `showLockTaskEscapeMessage()` | | `ActionMode` | `startActionMode(ActionMode.Callback callback)` | | `void` | `startActivities(Intent[] intents)` | | `void` | `startActivity(Intent intent)` | | `void` | `startActivityForResult(Intent intent, int requestCode)` | | `void` | `startActivityFromChild(Activity child, Intent intent, int requestCode)`  **This method is deprecated.** | | `void` | `startActivityFromFragment(     Fragment fragment,     Intent intent,     int requestCode )`  **This method is deprecated.** | | `boolean` | `startActivityIfNeeded(Intent intent, int requestCode)` | | `void` | `startIntentSender(     IntentSender intent,     Intent fillInIntent,     int flagsMask,     int flagsValues,     int extraFlags )` | | `void` | `startIntentSenderForResult(     IntentSender intent,     int requestCode,     Intent fillInIntent,     int flagsMask,     int flagsValues,     int extraFlags )` | | `void` | `startIntentSenderFromChild(     Activity child,     IntentSender intent,     int requestCode,     Intent fillInIntent,     int flagsMask,     int flagsValues,     int extraFlags )`  **This method is deprecated.** | | `void` | `startLocalVoiceInteraction(Bundle privateOptions)` | | `void` | `startLockTask()` | | `void` | `startManagingCursor(Cursor c)`  **This method is deprecated.** | | `boolean` | `startNextMatchingActivity(Intent intent)` | | `void` | `startPostponedEnterTransition()` | | `void` | `startSearch(     String initialQuery,     boolean selectInitialQuery,     Bundle appSearchData,     boolean globalSearch )` | | `void` | `stopLocalVoiceInteraction()` | | `void` | `stopLockTask()` | | `void` | `stopManagingCursor(Cursor c)`  **This method is deprecated.** | | `void` | `takeKeyEvents(boolean get)` | | `void` | `triggerSearch(String query, Bundle appSearchData)` | | `void` | `unregisterActivityLifecycleCallbacks(     Application.ActivityLifecycleCallbacks callback )` | | `void` | `unregisterComponentCallbacks(ComponentCallbacks callback)` | | `void` | `unregisterForContextMenu(View view)` | | `void` | `unregisterScreenCaptureCallback(     Activity.ScreenCaptureCallback callback )` | |
| From [androidx.core.app.ActivityCompat.OnRequestPermissionsResultCallback](/reference/androidx/core/app/ActivityCompat.OnRequestPermissionsResultCallback) |  |  | | --- | --- | | `abstract void` | `onRequestPermissionsResult(     int requestCode,     @NonNull String[] permissions,     @NonNull int[] grantResults )`  Callback for the result from requesting permissions. | |
| From [androidx.activity.result.ActivityResultCaller](/reference/androidx/activity/result/ActivityResultCaller) |  |  | | --- | --- | | `abstract ActivityResultLauncher<I>` | `<I, O> registerForActivityResult(     ActivityResultContract<I, O> contract,     ActivityResultCallback<O> callback )`  Register a request to `start an activity for result`, designated by the given `contract`. | |
| From [androidx.activity.ComponentActivity](/reference/androidx/activity/ComponentActivity) |  |  | | --- | --- | | `void` | `addMenuProvider(MenuProvider provider)`  Adds the given `MenuProvider` to this `MenuHost`. | | `final void` | `addOnConfigurationChangedListener(Consumer<Configuration> listener)`  Add a new listener that will get a callback associated with `ComponentCallbacks.onConfigurationChanged` with the new `Configuration`. | | `final void` | `addOnContextAvailableListener(OnContextAvailableListener listener)`  {@inheritDoc} | | `final void` | `addOnMultiWindowModeChangedListener(     Consumer<MultiWindowModeChangedInfo> listener )`  Add a new listener that will get a callback associated with `Activity.onMultiWindowModeChanged` with the new `MultiWindowModeChangedInfo`. | | `final void` | `addOnNewIntentListener(Consumer<Intent> listener)`  Add a new listener that will get a callback associated with `Activity.onNewIntent` with the new `Intent`. | | `final void` | `addOnPictureInPictureModeChangedListener(     Consumer<PictureInPictureModeChangedInfo> listener )`  Add a new listener that will get a callback associated with `Activity.onPictureInPictureModeChanged` with the new `PictureInPictureModeChangedInfo`. | | `final void` | `addOnPictureInPictureUiStateChangedListener(     Consumer<PictureInPictureUiStateCompat> listener )`  Add a new listener that will get a callback associated with `Activity.onPictureInPictureUiStateChanged` with the new `PictureInPictureUiStateCompat`. | | `final void` | `addOnTrimMemoryListener(Consumer<Integer> listener)`  Add a new listener that will get a callback associated with `ComponentCallbacks2.onTrimMemory` with the `int` representing the level of trimming. | | `final void` | `addOnUserLeaveHintListener(Runnable listener)`  Add a new listener that will get a callback associated with `Activity.onUserLeaveHint` | | `final void` | `enterPictureInPictureMode(PictureInPictureParamsCompat params)`  Available since API 24 in the framework Activity class, puts the activity in picture-in-picture mode if possible in the current system state. | | `final ActivityResultRegistry` | `getActivityResultRegistry()`  Get the `ActivityResultRegistry` associated with this activity. | | `CreationExtras` | `getDefaultViewModelCreationExtras()`  Returns the default `CreationExtras` that should be passed into `ViewModelProvider.Factory.create` when no overriding `CreationExtras` were passed to the `ViewModelProvider` constructors. | | `ViewModelProvider.Factory` | `getDefaultViewModelProviderFactory()`  Returns the default `ViewModelProvider.Factory` that should be used when no custom `Factory` is provided to the `ViewModelProvider` constructors. | | `FullyDrawnReporter` | `getFullyDrawnReporter()`  Retrieve the `FullyDrawnReporter` that should handle the independent parts of the UI that separately report that they are fully drawn. | | `Object` | `getLastCustomNonConfigurationInstance()` | | `Lifecycle` | `getLifecycle()`  {@inheritDoc} | | `NavigationEventDispatcher` | `getNavigationEventDispatcher()`  Lazily provides a `NavigationEventDispatcher` for back navigation handling, including support for predictive back gestures introduced in Android 13 (API 33+). | | `final OnBackPressedDispatcher` | `getOnBackPressedDispatcher()`  Retrieve the `OnBackPressedDispatcher` that will be triggered when `onBackPressed` is called. | | `final SavedStateRegistry` | `getSavedStateRegistry()`  The `SavedStateRegistry` owned by this SavedStateRegistryOwner | | `ViewModelStore` | `getViewModelStore()`  The owned `ViewModelStore` | | `void` | `initializeViewTreeOwners()`  Sets the view tree owners before setting the content view so that the inflation process and attach listeners will see them already present. | | `void` | `invalidateMenu()`  Invalidates the `android.view.Menu` to ensure that what is displayed matches the current internal state of the menu. | | `void` | `onActivityResult(int requestCode, int resultCode, Intent data)`  {@inheritDoc} | | `void` | `onBackPressed()`  Called when the activity has detected the user's press of the back key. | | `void` | `onCreate(Bundle savedInstanceState)`  {@inheritDoc} | | `boolean` | `onCreatePanelMenu(int featureId, Menu menu)` | | `boolean` | `onMenuItemSelected(int featureId, MenuItem item)` | | `void` | `onMultiWindowModeChanged(boolean isInMultiWindowMode)`  {@inheritDoc} | | `void` | `onNewIntent(Intent intent)`  {@inheritDoc} | | `void` | `onPictureInPictureModeChanged(boolean isInPictureInPictureMode)`  {@inheritDoc} | | `void` | `onPictureInPictureUiStateChanged(PictureInPictureUiState pipState)`  {@inheritDoc} | | `boolean` | `onPreparePanel(int featureId, View view, Menu menu)` | | `void` | `onRequestPermissionsResult(     int requestCode,     String[] permissions,     int[] grantResults )`  {@inheritDoc} | | `Object` | `onRetainCustomNonConfigurationInstance()`  Use this instead of `onRetainNonConfigurationInstance`. | | `final Object` | `onRetainNonConfigurationInstance()`  Retain all appropriate non-config state. | | `void` | `onSaveInstanceState(Bundle outState)` | | `void` | `onTrimMemory(int level)`  {@inheritDoc} | | `void` | `onUserLeaveHint()`  {@inheritDoc} | | `Context` | `peekAvailableContext()`  Get the `Context` if it is currently available. | | `final ActivityResultLauncher<I>` | `<I, O> registerForActivityResult(     ActivityResultContract<I, O> contract,     ActivityResultRegistry registry,     ActivityResultCallback<O> callback )`  Register a request to `start an activity for result`, designated by the given `contract`. | | `void` | `removeMenuProvider(MenuProvider provider)`  Removes the given `MenuProvider` from this `MenuHost`. | | `final void` | `removeOnConfigurationChangedListener(Consumer<Configuration> listener)`  Remove a previously added listener. | | `final void` | `removeOnContextAvailableListener(OnContextAvailableListener listener)`  Remove a `OnContextAvailableListener` previously added via `addOnContextAvailableListener`. | | `final void` | `removeOnMultiWindowModeChangedListener(     Consumer<MultiWindowModeChangedInfo> listener )`  Remove a previously added listener. | | `final void` | `removeOnNewIntentListener(Consumer<Intent> listener)`  Remove a previously added listener. | | `final void` | `removeOnPictureInPictureModeChangedListener(     Consumer<PictureInPictureModeChangedInfo> listener )`  Remove a previously added listener. | | `final void` | `removeOnPictureInPictureUiStateChangedListener(     Consumer<PictureInPictureUiStateCompat> listener )`  Remove a previously added listener. | | `final void` | `removeOnTrimMemoryListener(Consumer<Integer> listener)`  Remove a previously added listener. | | `final void` | `removeOnUserLeaveHintListener(Runnable listener)`  Remove a previously added listener. | | `void` | `reportFullyDrawn()` | | `final void` | `setPictureInPictureParams(PictureInPictureParamsCompat params)`  Available since API 26 in the framework Activity class, updates the properties of the picture-in-picture activity, or sets it to be used later when `enterPictureInPictureMode` is called | | `void` | `startActivityForResult(Intent intent, int requestCode)`  {@inheritDoc} | | `void` | `startIntentSenderForResult(     IntentSender intent,     int requestCode,     Intent fillInIntent,     int flagsMask,     int flagsValues,     int extraFlags )`  {@inheritDoc} | |
| From [android.content.Context](https://developer.android.com/reference/android/content/Context.html) |  |  | | --- | --- | | `final int` | `getColor(int id)` | | `final ColorStateList` | `getColorStateList(int id)` | | `final Drawable` | `getDrawable(int id)` | | `final String` | `getString(int resId)` | | `final T` | `<T> getSystemService(Class<T> serviceClass)` | | `final CharSequence` | `getText(int resId)` | | `Context.BindServiceFlags` | `getUpdateableFlags()` | | `final TypedArray` | `obtainStyledAttributes(AttributeSet set, int[] attrs)` | | `void` | `revokeSelfPermissionOnKill(String permName)` | | `void` | `sendBroadcastWithMultiplePermissions(     Intent intent,     String[] receiverPermissions )` | |
| From [androidx.activity.contextaware.ContextAware](/reference/androidx/activity/contextaware/ContextAware) |  |  | | --- | --- | | `abstract void` | `addOnContextAvailableListener(OnContextAvailableListener listener)`  Add a new `OnContextAvailableListener` for receiving a callback for when this class is associated with a `android.content.Context`. | | `abstract Context` | `peekAvailableContext()`  Get the `Context` if it is currently available. | | `abstract void` | `removeOnContextAvailableListener(OnContextAvailableListener listener)`  Remove a `OnContextAvailableListener` previously added via `addOnContextAvailableListener`. | |
| From [android.view.ContextThemeWrapper](https://developer.android.com/reference/android/view/ContextThemeWrapper.html) |  |  | | --- | --- | | `void` | `applyOverrideConfiguration(Configuration overrideConfiguration)` | | `AssetManager` | `getAssets()` | | `Resources.Theme` | `getTheme()` | |
| From [android.content.ContextWrapper](https://developer.android.com/reference/android/content/ContextWrapper.html) |  |  | | --- | --- | | `boolean` | `bindIsolatedService(     Intent service,     int flags,     String instanceName,     Executor executor,     ServiceConnection conn )` | | `boolean` | `bindService(     Intent service,     Context.BindServiceFlags flags,     Executor executor,     ServiceConnection conn )` | | `boolean` | `bindServiceAsUser(     Intent service,     ServiceConnection conn,     Context.BindServiceFlags flags,     UserHandle user )` | | `int` | `checkCallingOrSelfPermission(String permission)` | | `int` | `checkCallingOrSelfUriPermission(Uri uri, int modeFlags)` | | `int[]` | `checkCallingOrSelfUriPermissions(List<Uri> uris, int modeFlags)` | | `int` | `checkCallingPermission(String permission)` | | `int` | `checkCallingUriPermission(Uri uri, int modeFlags)` | | `int[]` | `checkCallingUriPermissions(List<Uri> uris, int modeFlags)` | | `int` | `checkContentUriPermissionFull(Uri uri, int pid, int uid, int modeFlags)` | | `int` | `checkPermission(String permission, int pid, int uid)` | | `int` | `checkSelfPermission(String permission)` | | `int` | `checkUriPermission(Uri uri, int pid, int uid, int modeFlags)` | | `int[]` | `checkUriPermissions(List<Uri> uris, int pid, int uid, int modeFlags)` | | `void` | `clearWallpaper()`  **This method is deprecated.** | | `Context` | `createAttributionContext(String attributionTag)` | | `Context` | `createConfigurationContext(Configuration overrideConfiguration)` | | `Context` | `createContext(ContextParams contextParams)` | | `Context` | `createContextForSplit(String splitName)` | | `Context` | `createDeviceContext(int deviceId)` | | `Context` | `createDeviceProtectedStorageContext()` | | `Context` | `createDisplayContext(Display display)` | | `Context` | `createPackageContext(String packageName, int flags)` | | `Context` | `createWindowContext(Display display, int type, Bundle options)` | | `String[]` | `databaseList()` | | `boolean` | `deleteDatabase(String name)` | | `boolean` | `deleteFile(String name)` | | `boolean` | `deleteSharedPreferences(String name)` | | `void` | `enforceCallingOrSelfPermission(String permission, String message)` | | `void` | `enforceCallingOrSelfUriPermission(     Uri uri,     int modeFlags,     String message )` | | `void` | `enforceCallingPermission(String permission, String message)` | | `void` | `enforceCallingUriPermission(Uri uri, int modeFlags, String message)` | | `void` | `enforcePermission(String permission, int pid, int uid, String message)` | | `void` | `enforceUriPermission(     Uri uri,     int pid,     int uid,     int modeFlags,     String message )` | | `String[]` | `fileList()` | | `Context` | `getApplicationContext()` | | `ApplicationInfo` | `getApplicationInfo()` | | `AttributionSource` | `getAttributionSource()` | | `String` | `getAttributionTag()` | | `Context` | `getBaseContext()` | | `File` | `getCacheDir()` | | `ClassLoader` | `getClassLoader()` | | `File` | `getCodeCacheDir()` | | `ContentResolver` | `getContentResolver()` | | `File` | `getDataDir()` | | `File` | `getDatabasePath(String name)` | | `int` | `getDeviceId()` | | `File` | `getDir(String name, int mode)` | | `Display` | `getDisplay()` | | `File` | `getExternalCacheDir()` | | `File[]` | `getExternalCacheDirs()` | | `File` | `getExternalFilesDir(String type)` | | `File[]` | `getExternalFilesDirs(String type)` | | `File[]` | `getExternalMediaDirs()`  **This method is deprecated.** | | `File` | `getFileStreamPath(String name)` | | `File` | `getFilesDir()` | | `Executor` | `getMainExecutor()` | | `Looper` | `getMainLooper()` | | `File` | `getNoBackupFilesDir()` | | `File` | `getObbDir()` | | `File[]` | `getObbDirs()` | | `String` | `getOpPackageName()` | | `String` | `getPackageCodePath()` | | `PackageManager` | `getPackageManager()` | | `String` | `getPackageName()` | | `String` | `getPackageResourcePath()` | | `ContextParams` | `getParams()` | | `SharedPreferences` | `getSharedPreferences(String name, int mode)` | | `String` | `getSystemServiceName(Class<Object> serviceClass)` | | `Drawable` | `getWallpaper()`  **This method is deprecated.** | | `int` | `getWallpaperDesiredMinimumHeight()`  **This method is deprecated.** | | `int` | `getWallpaperDesiredMinimumWidth()`  **This method is deprecated.** | | `void` | `grantUriPermission(String toPackage, Uri uri, int modeFlags)` | | `boolean` | `isDeviceProtectedStorage()` | | `boolean` | `isRestricted()` | | `boolean` | `isUiContext()` | | `boolean` | `moveDatabaseFrom(Context sourceContext, String name)` | | `boolean` | `moveSharedPreferencesFrom(Context sourceContext, String name)` | | `FileInputStream` | `openFileInput(String name)` | | `FileOutputStream` | `openFileOutput(String name, int mode)` | | `SQLiteDatabase` | `openOrCreateDatabase(     String name,     int mode,     SQLiteDatabase.CursorFactory factory )` | | `Drawable` | `peekWallpaper()`  **This method is deprecated.** | | `void` | `rebindService(ServiceConnection conn, Context.BindServiceFlags flags)` | | `void` | `registerDeviceIdChangeListener(Executor executor, IntConsumer listener)` | | `Intent` | `registerReceiver(BroadcastReceiver receiver, IntentFilter filter)` | | `void` | `removeStickyBroadcast(Intent intent)`  **This method is deprecated.** | | `void` | `removeStickyBroadcastAsUser(Intent intent, UserHandle user)`  **This method is deprecated.** | | `void` | `revokeSelfPermissionsOnKill(Collection<String> permissions)` | | `void` | `revokeUriPermission(Uri uri, int modeFlags)` | | `void` | `sendBroadcast(Intent intent)` | | `void` | `sendBroadcastAsUser(Intent intent, UserHandle user)` | | `void` | `sendOrderedBroadcast(     Intent intent,     int initialCode,     String receiverPermission,     String receiverAppOp,     BroadcastReceiver resultReceiver,     Handler scheduler,     String initialData,     Bundle initialExtras,     Bundle options )` | | `void` | `sendOrderedBroadcastAsUser(     Intent intent,     UserHandle user,     String receiverPermission,     BroadcastReceiver resultReceiver,     Handler scheduler,     int initialCode,     String initialData,     Bundle initialExtras )` | | `void` | `sendStickyBroadcast(Intent intent)`  **This method is deprecated.** | | `void` | `sendStickyBroadcastAsUser(Intent intent, UserHandle user)`  **This method is deprecated.** | | `void` | `sendStickyOrderedBroadcast(     Intent intent,     BroadcastReceiver resultReceiver,     Handler scheduler,     int initialCode,     String initialData,     Bundle initialExtras )`  **This method is deprecated.** | | `void` | `sendStickyOrderedBroadcastAsUser(     Intent intent,     UserHandle user,     BroadcastReceiver resultReceiver,     Handler scheduler,     int initialCode,     String initialData,     Bundle initialExtras )`  **This method is deprecated.** | | `void` | `setWallpaper(Bitmap bitmap)`  **This method is deprecated.** | | `ComponentName` | `startForegroundService(Intent service)` | | `boolean` | `startInstrumentation(     ComponentName className,     String profileFile,     Bundle arguments )` | | `ComponentName` | `startService(Intent service)` | | `boolean` | `stopService(Intent name)` | | `void` | `unbindService(ServiceConnection conn)` | | `void` | `unregisterDeviceIdChangeListener(IntConsumer listener)` | | `void` | `unregisterReceiver(BroadcastReceiver receiver)` | | `void` | `updateServiceBindings(Collection<Context.UpdateBindingParams> params)` | | `void` | `updateServiceGroup(ServiceConnection conn, int group, int importance)` | |
| From [androidx.fragment.app.FragmentActivity](/reference/androidx/fragment/app/FragmentActivity) |  |  | | --- | --- | | `void` | `dump(     @NonNull String prefix,     @Nullable FileDescriptor fd,     @NonNull PrintWriter writer,     @Nullable String[] args )`  Print the Activity's state into the given stream. | | `@NonNull FragmentManager` | `getSupportFragmentManager()`  Return the FragmentManager for interacting with fragments associated with this activity. | | `@NonNull LoaderManager` | `getSupportLoaderManager()`  **This method is deprecated.** Use `LoaderManager.getInstance(this)`. | | `void` | `@CallSuper onActivityResult(int requestCode, int resultCode, @Nullable Intent data)`  {@inheritDoc} | | `void` | `@MainThread onAttachFragment(@NonNull Fragment fragment)`  **This method is deprecated.** The responsibility for listening for fragments being attached has been moved to FragmentManager. | | `void` | `onCreate(@Nullable Bundle savedInstanceState)`  {@inheritDoc} | | `@Nullable View` | `onCreateView(     @NonNull String name,     @NonNull Context context,     @NonNull AttributeSet attrs )` | | `@Nullable View` | `onCreateView(     @Nullable View parent,     @NonNull String name,     @NonNull Context context,     @NonNull AttributeSet attrs )` | | `void` | `onPause()`  Dispatch onPause() to fragments. | | `void` | `@CallSuper onRequestPermissionsResult(     int requestCode,     @NonNull String[] permissions,     @NonNull int[] grantResults )`  {@inheritDoc} | | `void` | `onResume()`  Dispatch onResume() to fragments. | | `void` | `onResumeFragments()`  This is the fragment-orientated version of `onResume` that you can override to perform operations in the Activity at the same point where its fragments are resumed. | | `void` | `onStateNotSaved()`  Hook in to note that fragment state is no longer saved. | | `void` | `setEnterSharedElementCallback(@Nullable SharedElementCallback callback)`  When `makeSceneTransitionAnimation` was used to start an Activity, callback will be called to handle shared elements on the *launched* Activity. | | `void` | `setExitSharedElementCallback(@Nullable SharedElementCallback listener)`  When `makeSceneTransitionAnimation` was used to start an Activity, listener will be called to handle shared elements on the *launching* Activity. | | `void` | `startActivityFromFragment(     @NonNull Fragment fragment,     @NonNull Intent intent,     int requestCode )`  Called by Fragment.startActivityForResult() to implement its behavior. | | `void` | `startActivityFromFragment(     @NonNull Fragment fragment,     @NonNull Intent intent,     int requestCode,     @Nullable Bundle options )`  Called by Fragment.startActivityForResult() to implement its behavior. | | `void` | `startIntentSenderFromFragment(     @NonNull Fragment fragment,     @NonNull IntentSender intent,     int requestCode,     @Nullable Intent fillInIntent,     int flagsMask,     int flagsValues,     int extraFlags,     @Nullable Bundle options )`  **This method is deprecated.** Fragments should use `registerForActivityResult` with the `StartIntentSenderForResult` contract. | | `void` | `supportFinishAfterTransition()`  Reverses the Activity Scene entry Transition and triggers the calling Activity to reverse its exit Transition. | | `void` | `supportPostponeEnterTransition()`  Support library version of `postponeEnterTransition` that works only on API 21 and later. | | `void` | `supportStartPostponedEnterTransition()`  Support library version of `startPostponedEnterTransition` that only works with API 21 and later. | | `final void` | `validateRequestPermissionsRequestCode(int requestCode)`  **This method is deprecated.** there are no longer any restrictions on permissions requestCodes. | |
| From [androidx.activity.FullyDrawnReporterOwner](/reference/androidx/activity/FullyDrawnReporterOwner) |  |  | | --- | --- | | `abstract FullyDrawnReporter` | `getFullyDrawnReporter()`  Retrieve the `FullyDrawnReporter` that should handle the independent parts of the UI that separately report that they are fully drawn. | |
| From [androidx.lifecycle.HasDefaultViewModelProviderFactory](/reference/androidx/lifecycle/HasDefaultViewModelProviderFactory) |  |  | | --- | --- | | `CreationExtras` | `getDefaultViewModelCreationExtras()`  Returns the default `CreationExtras` that should be passed into `ViewModelProvider.Factory.create` when no overriding `CreationExtras` were passed to the `ViewModelProvider` constructors. | | `ViewModelProvider.Factory` | `getDefaultViewModelProviderFactory()`  Returns the default `ViewModelProvider.Factory` that should be used when no custom `Factory` is provided to the `ViewModelProvider` constructors. | |
| From [androidx.lifecycle.LifecycleOwner](/reference/androidx/lifecycle/LifecycleOwner) |  |  | | --- | --- | | `abstract Lifecycle` | `getLifecycle()`  Returns the Lifecycle of the provider. | |
| From [androidx.core.view.MenuHost](/reference/androidx/core/view/MenuHost) |  |  | | --- | --- | | `abstract void` | `addMenuProvider(@NonNull MenuProvider provider)`  Adds the given `MenuProvider` to this `MenuHost`. | | `abstract void` | `addMenuProvider(     @NonNull MenuProvider provider,     @NonNull LifecycleOwner owner )`  Adds the given `MenuProvider` to this `MenuHost`. | | `abstract void` | `addMenuProvider(     @NonNull MenuProvider provider,     @NonNull LifecycleOwner owner,     @NonNull Lifecycle.State state )`  Adds the given `MenuProvider` to this `MenuHost` once the given `LifecycleOwner` reaches the given `Lifecycle.State`. | | `abstract void` | `invalidateMenu()`  Invalidates the `android.view.Menu` to ensure that what is displayed matches the current internal state of the menu. | | `abstract void` | `removeMenuProvider(@NonNull MenuProvider provider)`  Removes the given `MenuProvider` from this `MenuHost`. | |
| From [androidx.navigationevent.NavigationEventDispatcherOwner](/reference/androidx/navigationevent/NavigationEventDispatcherOwner) |  |  | | --- | --- | | `abstract NavigationEventDispatcher` | `getNavigationEventDispatcher()`  The `NavigationEventDispatcher` that should handle the navigation events. | |
| From [androidx.activity.OnBackPressedDispatcherOwner](/reference/androidx/activity/OnBackPressedDispatcherOwner) |  |  | | --- | --- | | `abstract OnBackPressedDispatcher` | `getOnBackPressedDispatcher()`  The `OnBackPressedDispatcher` that should handle the system back button. | |
| From [androidx.core.content.OnConfigurationChangedProvider](/reference/androidx/core/content/OnConfigurationChangedProvider) |  |  | | --- | --- | | `abstract void` | `addOnConfigurationChangedListener(Consumer<Configuration> listener)`  Add a new listener that will get a callback associated with `ComponentCallbacks.onConfigurationChanged` with the new `Configuration`. | | `abstract void` | `removeOnConfigurationChangedListener(Consumer<Configuration> listener)`  Remove a previously added listener. | |
| From [androidx.core.app.OnMultiWindowModeChangedProvider](/reference/androidx/core/app/OnMultiWindowModeChangedProvider) |  |  | | --- | --- | | `abstract void` | `addOnMultiWindowModeChangedListener(     Consumer<MultiWindowModeChangedInfo> listener )`  Add a new listener that will get a callback associated with `Activity.onMultiWindowModeChanged` with the new `MultiWindowModeChangedInfo`. | | `abstract void` | `removeOnMultiWindowModeChangedListener(     Consumer<MultiWindowModeChangedInfo> listener )`  Remove a previously added listener. | |
| From [androidx.core.app.OnNewIntentProvider](/reference/androidx/core/app/OnNewIntentProvider) |  |  | | --- | --- | | `abstract void` | `addOnNewIntentListener(Consumer<Intent> listener)`  Add a new listener that will get a callback associated with `Activity.onNewIntent` with the new `Intent`. | | `abstract void` | `removeOnNewIntentListener(Consumer<Intent> listener)`  Remove a previously added listener. | |
| From [androidx.core.app.OnPictureInPictureModeChangedProvider](/reference/androidx/core/app/OnPictureInPictureModeChangedProvider) |  |  | | --- | --- | | `abstract void` | `addOnPictureInPictureModeChangedListener(     Consumer<PictureInPictureModeChangedInfo> listener )`  Add a new listener that will get a callback associated with `Activity.onPictureInPictureModeChanged` with the new `PictureInPictureModeChangedInfo`. | | `abstract void` | `removeOnPictureInPictureModeChangedListener(     Consumer<PictureInPictureModeChangedInfo> listener )`  Remove a previously added listener. | |
| From [androidx.core.app.OnPictureInPictureUiStateChangedProvider](/reference/androidx/core/app/OnPictureInPictureUiStateChangedProvider) |  |  | | --- | --- | | `abstract void` | `addOnPictureInPictureUiStateChangedListener(     Consumer<PictureInPictureUiStateCompat> listener )`  Add a new listener that will get a callback associated with `Activity.onPictureInPictureUiStateChanged` with the new `PictureInPictureUiStateCompat`. | | `abstract void` | `removeOnPictureInPictureUiStateChangedListener(     Consumer<PictureInPictureUiStateCompat> listener )`  Remove a previously added listener. | |
| From [androidx.core.content.OnTrimMemoryProvider](/reference/androidx/core/content/OnTrimMemoryProvider) |  |  | | --- | --- | | `abstract void` | `addOnTrimMemoryListener(Consumer<Integer> listener)`  Add a new listener that will get a callback associated with `ComponentCallbacks2.onTrimMemory` with the `int` representing the level of trimming. | | `abstract void` | `removeOnTrimMemoryListener(Consumer<Integer> listener)`  Remove a previously added listener. | |
| From [androidx.core.app.OnUserLeaveHintProvider](/reference/androidx/core/app/OnUserLeaveHintProvider) |  |  | | --- | --- | | `abstract void` | `addOnUserLeaveHintListener(Runnable listener)`  Add a new listener that will get a callback associated with `Activity.onUserLeaveHint` | | `abstract void` | `removeOnUserLeaveHintListener(Runnable listener)`  Remove a previously added listener. | |
| From [androidx.core.app.PictureInPictureProvider](/reference/androidx/core/app/PictureInPictureProvider) |  |  | | --- | --- | | `abstract void` | `enterPictureInPictureMode(PictureInPictureParamsCompat params)`  Available since API 24 in the framework Activity class, puts the activity in picture-in-picture mode if possible in the current system state. | | `abstract void` | `setPictureInPictureParams(PictureInPictureParamsCompat params)`  Available since API 26 in the framework Activity class, updates the properties of the picture-in-picture activity, or sets it to be used later when `enterPictureInPictureMode` is called | |
| From [androidx.savedstate.SavedStateRegistryOwner](/reference/androidx/savedstate/SavedStateRegistryOwner) |  |  | | --- | --- | | `abstract SavedStateRegistry` | `getSavedStateRegistry()`  The `SavedStateRegistry` owned by this SavedStateRegistryOwner | |
| From [androidx.lifecycle.ViewModelStoreOwner](/reference/androidx/lifecycle/ViewModelStoreOwner) |  |  | | --- | --- | | `abstract ViewModelStore` | `getViewModelStore()`  The owned `ViewModelStore` | |
| From [android.view.Window.Callback](https://developer.android.com/reference/android/view/Window.Callback.html) |  |  | | --- | --- | | `void` | `onPointerCaptureChanged(boolean hasCapture)` | |

## Public constructors

### AppCompatActivity

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AppCompatActivity()
```

Default constructor for AppCompatActivity. All Activities must have a default constructor for API 27 and lower devices or when using the default `android.app.AppComponentFactory`.

### AppCompatActivity

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@ContentView  
public AppCompatActivity(@LayoutRes int contentLayoutId)
```

Alternate constructor that can be used to provide a default layout that will be inflated as part of `super.onCreate(savedInstanceState)`.

This should generally be called from your constructor that takes no parameters, as is required for API 27 and lower or when using the default `android.app.AppComponentFactory`.

| See also |
| --- |
| `AppCompatActivity` |  |

## Public methods

### addContentView

```
public void addContentView(View view, ViewGroup.LayoutParams params)
```

### closeOptionsMenu

```
public void closeOptionsMenu()
```

### dispatchKeyEvent

```
public boolean dispatchKeyEvent(KeyEvent event)
```

### findViewById

```
public T <T extends View> findViewById(@IdRes int id)
```

### getDelegate

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public @NonNull AppCompatDelegate getDelegate()
```

| Returns |
| --- |
| `@NonNull AppCompatDelegate` | The `AppCompatDelegate` being used by this Activity. |

### getDrawerToggleDelegate

```
public @Nullable ActionBarDrawerToggle.Delegate getDrawerToggleDelegate()
```

| Returns |
| --- |
| `@Nullable ActionBarDrawerToggle.Delegate` | Delegate to use for ActionBarDrawableToggles, or null if the Activity does not wish to override the default behavior. |

### getMenuInflater

```
public @NonNull MenuInflater getMenuInflater()
```

### getResources

```
public Resources getResources()
```

### getSupportActionBar

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public @Nullable ActionBar getSupportActionBar()
```

Support library version of `getActionBar`.

Retrieve a reference to this activity's ActionBar.

| Returns |
| --- |
| `@Nullable ActionBar` | The Activity's ActionBar, or null if it does not have one. |

### getSupportParentActivityIntent

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public @Nullable Intent getSupportParentActivityIntent()
```

Obtain an `android.content.Intent` that will launch an explicit target activity specified by sourceActivity's `PARENT_ACTIVITY` element in the application's manifest. If the device is running Jellybean or newer, the android:parentActivityName attribute will be preferred if it is present.

| Returns |
| --- |
| `@Nullable Intent` | a new Intent targeting the defined parent activity of sourceActivity |

### invalidateOptionsMenu

```
public void invalidateOptionsMenu()
```

### onConfigurationChanged

```
public void onConfigurationChanged(@NonNull Configuration newConfig)
```

{@inheritDoc}

Dispatches this call to all listeners added via `addOnConfigurationChangedListener`.

### onContentChanged

```
public void onContentChanged()
```

### onCreateSupportNavigateUpTaskStack

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void onCreateSupportNavigateUpTaskStack(@NonNull TaskStackBuilder builder)
```

Support version of `onCreateNavigateUpTaskStack`. This method will be called on all platform versions. Define the synthetic task stack that will be generated during Up navigation from a different task.

The default implementation of this method adds the parent chain of this activity as specified in the manifest to the supplied `androidx.core.app.TaskStackBuilder`. Applications may choose to override this method to construct the desired task stack in a different way.

This method will be invoked by the default implementation of `onNavigateUp` if `shouldUpRecreateTask` returns true when supplied with the intent returned by `getParentActivityIntent`.

Applications that wish to supply extra Intent parameters to the parent stack defined by the manifest should override `onPrepareSupportNavigateUpTaskStack`.

| Parameters |
| --- |
| `@NonNull TaskStackBuilder builder` | An empty TaskStackBuilder - the application should add intents representing the desired task stack |

### onKeyDown

```
public boolean onKeyDown(int keyCode, KeyEvent event)
```

### onMenuItemSelected

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public final boolean onMenuItemSelected(int featureId, @NonNull MenuItem item)
```

### onMenuOpened

```
public boolean onMenuOpened(int featureId, Menu menu)
```

Please note: AppCompat uses its own feature id for the action bar: `FEATURE_SUPPORT_ACTION_BAR`.

### onPanelClosed

```
public void onPanelClosed(int featureId, @NonNull Menu menu)
```

Please note: AppCompat uses its own feature id for the action bar: `FEATURE_SUPPORT_ACTION_BAR`.

### onPrepareSupportNavigateUpTaskStack

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void onPrepareSupportNavigateUpTaskStack(@NonNull TaskStackBuilder builder)
```

Support version of `onPrepareNavigateUpTaskStack`. This method will be called on all platform versions. Prepare the synthetic task stack that will be generated during Up navigation from a different task.

This method receives the `androidx.core.app.TaskStackBuilder` with the constructed series of Intents as generated by `onCreateSupportNavigateUpTaskStack`. If any extra data should be added to these intents before launching the new task, the application should override this method and add that data here.

| Parameters |
| --- |
| `@NonNull TaskStackBuilder builder` | A TaskStackBuilder that has been populated with Intents by onCreateNavigateUpTaskStack. |

### onSupportActionModeFinished

```
@CallSuper  
public void onSupportActionModeFinished(@NonNull ActionMode mode)
```

Notifies the activity that a support action mode has finished. Activity subclasses overriding this method should call the superclass implementation.

| Parameters |
| --- |
| `@NonNull ActionMode mode` | The action mode that just finished. |

### onSupportActionModeStarted

```
@CallSuper  
public void onSupportActionModeStarted(@NonNull ActionMode mode)
```

Notifies the Activity that a support action mode has been started. Activity subclasses overriding this method should call the superclass implementation.

| Parameters |
| --- |
| `@NonNull ActionMode mode` | The new action mode. |

### onSupportContentChanged

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void onSupportContentChanged()
```

**This method is deprecated.**  

Use onContentChanged instead.

### onSupportNavigateUp

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public boolean onSupportNavigateUp()
```

This method is called whenever the user chooses to navigate Up within your application's activity hierarchy from the action bar.

If a parent was specified in the manifest for this activity or an activity-alias to it, default Up navigation will be handled automatically. See `getSupportParentActivityIntent` for how to specify the parent. If any activity along the parent chain requires extra Intent arguments, the Activity subclass should override the method `onPrepareSupportNavigateUpTaskStack` to supply those arguments.

See [Tasks and Back Stack](/guide/topics/fundamentals/tasks-and-back-stack) from the developer guide and [Navigation](/design/patterns/navigation) from the design guide for more information about navigating within your app.

See the `androidx.core.app.TaskStackBuilder` class and the Activity methods `getSupportParentActivityIntent`, `supportShouldUpRecreateTask`, and `supportNavigateUpTo` for help implementing custom Up navigation.

| Returns |
| --- |
| `boolean` | true if Up navigation completed successfully and this Activity was finished, false otherwise. |

### onWindowStartingSupportActionMode

```
public @Nullable ActionMode onWindowStartingSupportActionMode(@NonNull ActionMode.Callback callback)
```

Called when a support action mode is being started for this window. Gives the callback an opportunity to handle the action mode in its own unique and beautiful way. If this method returns null the system can choose a way to present the mode or choose not to start the mode at all.

| Parameters |
| --- |
| `@NonNull ActionMode.Callback callback` | Callback to control the lifecycle of this action mode |

| Returns |
| --- |
| `@Nullable ActionMode` | The ActionMode that was started, or null if the system should present it |

### openOptionsMenu

```
public void openOptionsMenu()
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

### setSupportActionBar

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setSupportActionBar(@Nullable Toolbar toolbar)
```

Set a `Toolbar` to act as the `androidx.appcompat.app.ActionBar` for this Activity window.

When set to a non-null value the `getActionBar` method will return an `androidx.appcompat.app.ActionBar` object that can be used to control the given toolbar as if it were a traditional window decor action bar. The toolbar's menu will be populated with the Activity's options menu and the navigation button will be wired through the standard `home` menu select action.

In order to use a Toolbar within the Activity's window content the application must not request the window feature `FEATURE_SUPPORT_ACTION_BAR`.

| Parameters |
| --- |
| `@Nullable Toolbar toolbar` | Toolbar to set as the Activity's action bar, or `null` to clear it |

### setSupportProgress

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setSupportProgress(int progress)
```

**This method is deprecated.**  

Progress bars are no longer provided in AppCompat.

### setSupportProgressBarIndeterminate

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setSupportProgressBarIndeterminate(boolean indeterminate)
```

**This method is deprecated.**  

Progress bars are no longer provided in AppCompat.

### setSupportProgressBarIndeterminateVisibility

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setSupportProgressBarIndeterminateVisibility(boolean visible)
```

**This method is deprecated.**  

Progress bars are no longer provided in AppCompat.

### setSupportProgressBarVisibility

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setSupportProgressBarVisibility(boolean visible)
```

**This method is deprecated.**  

Progress bars are no longer provided in AppCompat.

### setTheme

```
public void setTheme(@StyleRes int resId)
```

### startSupportActionMode

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public @Nullable ActionMode startSupportActionMode(@NonNull ActionMode.Callback callback)
```

Start an action mode.

| Parameters |
| --- |
| `@NonNull ActionMode.Callback callback` | Callback that will manage lifecycle events for this context mode |

| Returns |
| --- |
| `@Nullable ActionMode` | The ContextMode that was started, or null if it was canceled |

### supportInvalidateOptionsMenu

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void supportInvalidateOptionsMenu()
```

**This method is deprecated.**  

Call `invalidateOptionsMenu` directly.

Support library version of `invalidateOptionsMenu`.

Invalidate the activity's options menu. This will cause relevant presentations of the menu to fully update via calls to onCreateOptionsMenu and onPrepareOptionsMenu the next time the menu is requested.

### supportNavigateUpTo

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void supportNavigateUpTo(@NonNull Intent upIntent)
```

Navigate from sourceActivity to the activity specified by upIntent, finishing sourceActivity in the process. upIntent will have the flag `FLAG_ACTIVITY_CLEAR_TOP` set by this method, along with any others required for proper up navigation as outlined in the Android Design Guide.

This method should be used when performing up navigation from within the same task as the destination. If up navigation should cross tasks in some cases, see `supportShouldUpRecreateTask`.

| Parameters |
| --- |
| `@NonNull Intent upIntent` | An intent representing the target destination for up navigation |

### supportRequestWindowFeature

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public boolean supportRequestWindowFeature(int featureId)
```

Enable extended support library window features.

This is a convenience for calling `getWindow().requestFeature()`.

| Parameters |
| --- |
| `int featureId` | The desired feature as defined in `android.view.Window` or `androidx.core.view.WindowCompat`. |

| Returns |
| --- |
| `boolean` | Returns true if the requested feature is supported and now enabled. |

| See also |
| --- |
| `requestWindowFeature` |  |
| `requestFeature` |  |

### supportShouldUpRecreateTask

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public boolean supportShouldUpRecreateTask(@NonNull Intent targetIntent)
```

Returns true if sourceActivity should recreate the task when navigating 'up' by using targetIntent.

If this method returns false the app can trivially call `supportNavigateUpTo` using the same parameters to correctly perform up navigation. If this method returns false, the app should synthesize a new task stack by using `androidx.core.app.TaskStackBuilder` or another similar mechanism to perform up navigation.

| Parameters |
| --- |
| `@NonNull Intent targetIntent` | An intent representing the target destination for up navigation |

| Returns |
| --- |
| `boolean` | true if navigating up should recreate a new task stack, false if the same task should be used for the destination |

## Protected methods

### attachBaseContext

```
protected void attachBaseContext(Context newBase)
```

### onDestroy

```
protected void onDestroy()
```

Destroy all fragments.

### onLocalesChanged

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
protected void onLocalesChanged(@NonNull LocaleListCompat locales)
```

Called when the locales have been changed. See `applyAppLocales` for more information.

| Parameters |
| --- |
| `@NonNull LocaleListCompat locales` | the localeListCompat which has been applied |

### onNightModeChanged

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
protected void onNightModeChanged(int mode)
```

Called when the night mode has changed. See `applyDayNight` for more information.

| Parameters |
| --- |
| `int mode` | the night mode which has been applied |

### onPostCreate

```
protected void onPostCreate(@Nullable Bundle savedInstanceState)
```

### onPostResume

```
protected void onPostResume()
```

Dispatch onResume() to fragments.

### onStart

```
protected void onStart()
```

Dispatch onStart() to all fragments.

### onStop

```
protected void onStop()
```

Dispatch onStop() to all fragments.

### onTitleChanged

```
protected void onTitleChanged(CharSequence title, int color)
```

## Extension functions

### ActivityKt.setupActionBarWithNavController

Artifact: [androidx.navigation:navigation-ui](/jetpack/androidx/releases/navigation)

[View Source](https://cs.android.com/search?q=file:androidx/navigation/ui/Activity.kt+function:setupActionBarWithNavController)

```
public final void ActivityKt.setupActionBarWithNavController(  
    @NonNull AppCompatActivity receiver,  
    @NonNull NavController navController,  
    @NonNull AppBarConfiguration configuration  
)
```

Sets up the ActionBar returned by `AppCompatActivity.getSupportActionBar` for use with a `NavController`.

By calling this method, the title in the action bar will automatically be updated when the destination changes (assuming there is a valid `label`).

The `AppBarConfiguration` you provide controls how the Navigation button is displayed.

You are responsible for calling `NavController.navigateUp` to handle the Navigation button. Typically this is done in `AppCompatActivity.onSupportNavigateUp`.

| Parameters |
| --- |
| `@NonNull NavController navController` | The NavController whose navigation actions will be reflected in the title of the action bar. |
| `@NonNull AppBarConfiguration configuration` | Additional configuration options for customizing the behavior of the ActionBar |

### ActivityKt.setupActionBarWithNavController

Artifact: [androidx.navigation:navigation-ui](/jetpack/androidx/releases/navigation)

[View Source](https://cs.android.com/search?q=file:androidx/navigation/ui/Activity.kt+function:setupActionBarWithNavController)

```
public final void ActivityKt.setupActionBarWithNavController(  
    @NonNull AppCompatActivity receiver,  
    @NonNull NavController navController,  
    DrawerLayout drawerLayout  
)
```

Sets up the ActionBar returned by `AppCompatActivity.getSupportActionBar` for use with a `NavController`.

By calling this method, the title in the action bar will automatically be updated when the destination changes (assuming there is a valid `label`).

The start destination of your navigation graph is considered the only top level destination. On the start destination of your navigation graph, the ActionBar will show the drawer icon if the given `drawerLayout` is non null. On all other destinations, the ActionBar will show the Up button.

You are responsible for calling `NavController.navigateUp` to handle the Navigation button. Typically this is done in `AppCompatActivity.onSupportNavigateUp`.

| Parameters |
| --- |
| `@NonNull NavController navController` | The NavController whose navigation actions will be reflected in the title of the action bar. |
| `DrawerLayout drawerLayout` | The DrawerLayout that should be toggled from the Navigation button |
