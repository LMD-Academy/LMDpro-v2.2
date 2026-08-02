--- source: https://developer.android.com/reference/androidx/appcompat/app/AppCompatDelegate ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# AppCompatDelegate

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/app/AppCompatDelegate.java+class:androidx.appcompat.app.AppCompatDelegate)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/app/AppCompatDelegate "View this page in Kotlin")
|Java

```
public abstract class AppCompatDelegate
```

---

This class represents a delegate which you can use to extend AppCompat's support to any `android.app.Activity`.

When using an `AppCompatDelegate`, you should call the following methods instead of the `android.app.Activity` method of the same name:

* `addContentView`
* `setContentView`
* `setContentView`
* `setContentView`
* `requestWindowFeature`
* `hasWindowFeature`
* `invalidateOptionsMenu`
* `startSupportActionMode`
* `setSupportActionBar`
* `getSupportActionBar`
* `getMenuInflater`
* `findViewById`

The following methods should be called from the `android.app.Activity` method of the same name:

* `onCreate`
* `onPostCreate`
* `onConfigurationChanged`
* `onStart`
* `onStop`
* `onPostResume`
* `onSaveInstanceState`
* `setTitle`
* `onStop`
* `onDestroy`

An `Activity` can only be linked with one `AppCompatDelegate` instance, therefore the instance returned from `create` should be retained until the Activity is destroyed.

## Summary

| Constants |
| --- |
| `static final int` | `FEATURE_ACTION_MODE_OVERLAY = 10`  Flag for specifying the behavior of action modes when an Action Bar is not present. |
| `static final int` | `FEATURE_SUPPORT_ACTION_BAR = 108`  Flag for enabling the support Action Bar. |
| `static final int` | `FEATURE_SUPPORT_ACTION_BAR_OVERLAY = 109`  Flag for requesting an support Action Bar that overlays window content. |
| `static final int` | `MODE_NIGHT_AUTO = 0`  **This field is deprecated.** Use `MODE_NIGHT_AUTO_TIME` instead |
| `static final int` | `MODE_NIGHT_AUTO_BATTERY = 3`  Night mode which uses a dark mode when the system's 'Battery Saver' feature is enabled, otherwise it uses a 'light mode'. |
| `static final int` | `MODE_NIGHT_AUTO_TIME = 0`  **This field is deprecated.** Automatic switching of dark/light based on the current time is deprecated. |
| `static final int` | `MODE_NIGHT_FOLLOW_SYSTEM = -1`  Mode which uses the system's night mode setting to determine if it is night or not. |
| `static final int` | `MODE_NIGHT_NO = 1`  Night mode which uses always uses a light mode, enabling `notnight` qualified resources regardless of the time. |
| `static final int` | `MODE_NIGHT_UNSPECIFIED = -100`  An unspecified mode for night mode. |
| `static final int` | `MODE_NIGHT_YES = 2`  Night mode which uses always uses a dark mode, enabling `night` qualified resources regardless of the time. |

| Public methods |
| --- |
| `abstract void` | `addContentView(View v, ViewGroup.LayoutParams lp)`  Should be called instead of `addContentView`} |
| `abstract boolean` | `applyDayNight()`  Applies the currently selected night mode to this delegate's host component. |
| `void` | `attachBaseContext(Context context)`  **This method is deprecated.** use `attachBaseContext2` instead. |
| `@NonNull Context` | `@CallSuper attachBaseContext2(@NonNull Context context)`  Should be called from attachBaseContext. |
| `static @NonNull AppCompatDelegate` | `create(@NonNull Activity activity, @Nullable AppCompatCallback callback)`  Create an `androidx.appcompat.app.AppCompatDelegate` to use with `activity`. |
| `static @NonNull AppCompatDelegate` | `create(@NonNull Dialog dialog, @Nullable AppCompatCallback callback)`  Create an `androidx.appcompat.app.AppCompatDelegate` to use with `dialog`. |
| `static @NonNull AppCompatDelegate` | `create(     @NonNull Context context,     @NonNull Activity activity,     @Nullable AppCompatCallback callback )`  Create an `androidx.appcompat.app.AppCompatDelegate` to use with a `context` and hosted by an `Activity`. |
| `static @NonNull AppCompatDelegate` | `create(     @NonNull Context context,     @NonNull Window window,     @Nullable AppCompatCallback callback )`  Create an `androidx.appcompat.app.AppCompatDelegate` to use with a `context` and a `window`. |
| `abstract View` | `createView(     @Nullable View parent,     String name,     @NonNull Context context,     @NonNull AttributeSet attrs )`  This should be called from a `LayoutInflater.Factory2` in order to return tint-aware widgets. |
| `abstract @Nullable T` | `<T extends View> findViewById(@IdRes int id)`  Finds a view that was identified by the id attribute from the XML that was processed in `onCreate`. |
| `static @NonNull LocaleListCompat` | `@AnyThread getApplicationLocales()`  Returns application locales for the calling app as a `LocaleListCompat`. |
| `@Nullable Context` | `getContextForDelegate()`  Returns the context for the current delegate. |
| `static int` | `getDefaultNightMode()`  Returns the default night mode. |
| `abstract @Nullable ActionBarDrawerToggle.Delegate` | `getDrawerToggleDelegate()`  Returns an `ActionBarDrawerToggle.Delegate` which can be returned from your Activity if it implements `ActionBarDrawerToggle.DelegateProvider`. |
| `int` | `getLocalNightMode()`  Returns the night mode previously set via `getLocalNightMode`. |
| `abstract MenuInflater` | `getMenuInflater()`  Return the value of this call from your `getMenuInflater` |
| `abstract @Nullable ActionBar` | `getSupportActionBar()`  Support library version of `getActionBar`. |
| `abstract boolean` | `hasWindowFeature(int featureId)`  Query for the availability of a certain feature. |
| `abstract void` | `installViewFactory()`  Installs AppCompat's `android.view.LayoutInflater` Factory so that it can replace the framework widgets with compatible tinted versions. |
| `abstract void` | `invalidateOptionsMenu()`  Should be called from `invalidateOptionsMenu`} or `supportInvalidateOptionsMenu`. |
| `static boolean` | `isCompatVectorFromResourcesEnabled()`  Returns whether vector drawables on older platforms (< API 21) can be accessed from within resources. |
| `abstract boolean` | `isHandleNativeActionModesEnabled()`  Returns whether AppCompat handles any native action modes itself. |
| `abstract void` | `onConfigurationChanged(Configuration newConfig)`  Should be called from `onConfigurationChanged` |
| `abstract void` | `onCreate(Bundle savedInstanceState)`  Should be called from Activity.onCreate(). |
| `abstract void` | `onDestroy()`  Should be called from `onDestroy` |
| `abstract void` | `onPostCreate(Bundle savedInstanceState)`  Should be called from `onPostCreate` |
| `abstract void` | `onPostResume()`  Should be called from `onPostResume` |
| `abstract void` | `onSaveInstanceState(Bundle outState)`  Allows AppCompat to save instance state. |
| `abstract void` | `onStart()`  Should be called from `onStart` Activity.onStart()} |
| `abstract void` | `onStop()`  Should be called from `Activity.onStop()` |
| `abstract boolean` | `requestWindowFeature(int featureId)`  Enable extended window features. |
| `static void` | `setApplicationLocales(@NonNull LocaleListCompat locales)`  Sets the current locales for the calling app. |
| `static void` | `setCompatVectorFromResourcesEnabled(boolean enabled)`  Sets whether vector drawables on older platforms (< API 21) can be used within `android.graphics.drawable.DrawableContainer` resources. |
| `abstract void` | `setContentView(@LayoutRes int resId)`  Should be called instead of `setContentView`} |
| `abstract void` | `setContentView(View v)`  Should be called instead of `setContentView`} |
| `abstract void` | `setContentView(View v, ViewGroup.LayoutParams lp)`  Should be called instead of `setContentView`} |
| `static void` | `setDefaultNightMode(int mode)`  Sets the default night mode. |
| `abstract void` | `setHandleNativeActionModesEnabled(boolean enabled)`  Whether AppCompat handles any native action modes itself. |
| `abstract void` | `setLocalNightMode(int mode)`  Override the night mode used for this delegate's host component. |
| `void` | `@CallSuper @RequiresApi(value = 33) setOnBackInvokedDispatcher(@Nullable OnBackInvokedDispatcher dispatcher)`  Sets the `OnBackInvokedDispatcher` for handling system back for Android SDK 33 and above. |
| `abstract void` | `setSupportActionBar(@Nullable Toolbar toolbar)`  Set a `Toolbar` to act as the `ActionBar` for this delegate. |
| `void` | `setTheme(@StyleRes int themeResId)`  This should be called from setTheme to notify AppCompat of what the current theme resource id is. |
| `abstract void` | `setTitle(@Nullable CharSequence title)`  Should be called from `onTitleChanged`} |
| `abstract @Nullable ActionMode` | `startSupportActionMode(@NonNull ActionMode.Callback callback)`  Start an action mode. |

## Constants

### FEATURE\_ACTION\_MODE\_OVERLAY

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int FEATURE_ACTION_MODE_OVERLAY = 10
```

Flag for specifying the behavior of action modes when an Action Bar is not present. If overlay is enabled, the action mode UI will be allowed to cover existing window content.

### FEATURE\_SUPPORT\_ACTION\_BAR

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int FEATURE_SUPPORT_ACTION_BAR = 108
```

Flag for enabling the support Action Bar.

This is enabled by default for some devices. The Action Bar replaces the title bar and provides an alternate location for an on-screen menu button on some devices.

### FEATURE\_SUPPORT\_ACTION\_BAR\_OVERLAY

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int FEATURE_SUPPORT_ACTION_BAR_OVERLAY = 109
```

Flag for requesting an support Action Bar that overlays window content. Normally an Action Bar will sit in the space above window content, but if this feature is requested along with `FEATURE_SUPPORT_ACTION_BAR` it will be layered over the window content itself. This is useful if you would like your app to have more control over how the Action Bar is displayed, such as letting application content scroll beneath an Action Bar with a transparent background or otherwise displaying a transparent/translucent Action Bar over application content.

This mode is especially useful with `View.SYSTEM_UI_FLAG_FULLSCREEN`, which allows you to seamlessly hide the action bar in conjunction with other screen decorations. When an ActionBar is in this mode it will adjust the insets provided to `View.fitSystemWindows(Rect)` to include the content covered by the action bar, so you can do layout within that space.

### MODE\_NIGHT\_AUTO

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int MODE_NIGHT_AUTO = 0
```

**This field is deprecated.**  

Use `MODE_NIGHT_AUTO_TIME` instead

### MODE\_NIGHT\_AUTO\_BATTERY

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int MODE_NIGHT_AUTO_BATTERY = 3
```

Night mode which uses a dark mode when the system's 'Battery Saver' feature is enabled, otherwise it uses a 'light mode'. This mode can help the device to decrease power usage, depending on the display technology in the device. *Please note: this mode should only be used when running on devices which do not provide a similar device-wide setting.*

| See also |
| --- |
| `setLocalNightMode` |  |

### MODE\_NIGHT\_AUTO\_TIME

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int MODE_NIGHT_AUTO_TIME = 0
```

**This field is deprecated.**  

Automatic switching of dark/light based on the current time is deprecated. Considering using an explicit setting, or `MODE_NIGHT_AUTO_BATTERY`.

Night mode which switches between dark and light mode depending on the time of day (dark at night, light in the day).

The calculation used to determine whether it is night or not makes use of the location APIs (if this app has the necessary permissions). This allows us to generate accurate sunrise and sunset times. If this app does not have permission to access the location APIs then we use hardcoded times which will be less accurate.

### MODE\_NIGHT\_FOLLOW\_SYSTEM

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int MODE_NIGHT_FOLLOW_SYSTEM = -1
```

Mode which uses the system's night mode setting to determine if it is night or not.

| See also |
| --- |
| `setLocalNightMode` |  |

### MODE\_NIGHT\_NO

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int MODE_NIGHT_NO = 1
```

Night mode which uses always uses a light mode, enabling `notnight` qualified resources regardless of the time.

| See also |
| --- |
| `setLocalNightMode` |  |

### MODE\_NIGHT\_UNSPECIFIED

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int MODE_NIGHT_UNSPECIFIED = -100
```

An unspecified mode for night mode. This is primarily used with `setLocalNightMode`, to allow the default night mode to be used. If both the default and local night modes are set to this value, then the default value of `MODE_NIGHT_FOLLOW_SYSTEM` is applied.

| See also |
| --- |
| `setDefaultNightMode` |  |

### MODE\_NIGHT\_YES

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int MODE_NIGHT_YES = 2
```

Night mode which uses always uses a dark mode, enabling `night` qualified resources regardless of the time.

| See also |
| --- |
| `setLocalNightMode` |  |

## Public methods

### addContentView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void addContentView(View v, ViewGroup.LayoutParams lp)
```

Should be called instead of `addContentView`}

### applyDayNight

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract boolean applyDayNight()
```

Applies the currently selected night mode to this delegate's host component.

This enables the  `Theme.AppCompat.DayNight` family of themes to work, using the specified mode.

You can be notified when the night changes by overriding the `onNightModeChanged` method.

| Returns |
| --- |
| `boolean` | true if the night mode was applied, false if not |

| See also |
| --- |
| `setDefaultNightMode` |  |
| `setLocalNightMode` |  |

### attachBaseContext

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.2.0](/jetpack/androidx/releases/appcompat#1.2.0)

```
public void attachBaseContext(Context context)
```

**This method is deprecated.**  

use `attachBaseContext2` instead.

### attachBaseContext2

Added in [1.2.0](/jetpack/androidx/releases/appcompat#1.2.0)

```
@CallSuper  
public @NonNull Context attachBaseContext2(@NonNull Context context)
```

Should be called from attachBaseContext.

### create

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static @NonNull AppCompatDelegate create(@NonNull Activity activity, @Nullable AppCompatCallback callback)
```

Create an `androidx.appcompat.app.AppCompatDelegate` to use with `activity`.

| Parameters |
| --- |
| `@NonNull Activity activity` | The activity linked to the returned instance. |
| `@Nullable AppCompatCallback callback` | An optional callback for AppCompat specific events |

### create

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static @NonNull AppCompatDelegate create(@NonNull Dialog dialog, @Nullable AppCompatCallback callback)
```

Create an `androidx.appcompat.app.AppCompatDelegate` to use with `dialog`.

| Parameters |
| --- |
| `@NonNull Dialog dialog` | The dialog to be linked to the returned instance instead of an activity. |
| `@Nullable AppCompatCallback callback` | An optional callback for AppCompat specific events |

### create

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static @NonNull AppCompatDelegate create(  
    @NonNull Context context,  
    @NonNull Activity activity,  
    @Nullable AppCompatCallback callback  
)
```

Create an `androidx.appcompat.app.AppCompatDelegate` to use with a `context` and hosted by an `Activity`.

| Parameters |
| --- |
| `@NonNull Context context` | The context of the associated activity |
| `@NonNull Activity activity` | The activity to be linked to the returned instance |
| `@Nullable AppCompatCallback callback` | An optional callback for AppCompat specific events |

### create

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static @NonNull AppCompatDelegate create(  
    @NonNull Context context,  
    @NonNull Window window,  
    @Nullable AppCompatCallback callback  
)
```

Create an `androidx.appcompat.app.AppCompatDelegate` to use with a `context` and a `window`.

| Parameters |
| --- |
| `@NonNull Context context` | The context of the associated window |
| `@NonNull Window window` | The window to be linked to the returned instance instead of an activity. |
| `@Nullable AppCompatCallback callback` | An optional callback for AppCompat specific events |

### createView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract View createView(  
    @Nullable View parent,  
    String name,  
    @NonNull Context context,  
    @NonNull AttributeSet attrs  
)
```

This should be called from a `LayoutInflater.Factory2` in order to return tint-aware widgets.

This is only needed if you are using your own `LayoutInflater` factory, and have therefore not installed the default factory via `installViewFactory`.

### findViewById

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract @Nullable T <T extends View> findViewById(@IdRes int id)
```

Finds a view that was identified by the id attribute from the XML that was processed in `onCreate`.

| Returns |
| --- |
| `@Nullable T` | The view if found or null otherwise. |

### getApplicationLocales

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
@AnyThread  
public static @NonNull LocaleListCompat getApplicationLocales()
```

Returns application locales for the calling app as a `LocaleListCompat`.

Returns a `getEmptyLocaleList` if no app-specific locales are set.

**Note: This API only work at AppCompatDelegate and it should always be called after Activity.onCreate().**

### getContextForDelegate

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
public @Nullable Context getContextForDelegate()
```

Returns the context for the current delegate.

### getDefaultNightMode

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static int getDefaultNightMode()
```

Returns the default night mode.

| See also |
| --- |
| `setDefaultNightMode` |  |

### getDrawerToggleDelegate

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract @Nullable ActionBarDrawerToggle.Delegate getDrawerToggleDelegate()
```

Returns an `ActionBarDrawerToggle.Delegate` which can be returned from your Activity if it implements `ActionBarDrawerToggle.DelegateProvider`.

### getLocalNightMode

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public int getLocalNightMode()
```

Returns the night mode previously set via `getLocalNightMode`.

### getMenuInflater

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract MenuInflater getMenuInflater()
```

Return the value of this call from your `getMenuInflater`

### getSupportActionBar

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract @Nullable ActionBar getSupportActionBar()
```

Support library version of `getActionBar`.

| Returns |
| --- |
| `@Nullable ActionBar` | AppCompat's action bar, or null if it does not have one. |

### hasWindowFeature

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract boolean hasWindowFeature(int featureId)
```

Query for the availability of a certain feature.

This should be called instead of `hasFeature`.

| Parameters |
| --- |
| `int featureId` | The feature ID to check |

| Returns |
| --- |
| `boolean` | true if the feature is enabled, false otherwise. |

### installViewFactory

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void installViewFactory()
```

Installs AppCompat's `android.view.LayoutInflater` Factory so that it can replace the framework widgets with compatible tinted versions. This should be called before `super.onCreate()` as so:

```
protected void onCreate(Bundle savedInstanceState) {
    getDelegate().installViewFactory();
    getDelegate().onCreate(savedInstanceState);
    super.onCreate(savedInstanceState);

    // ...
}
```

If you are using your own `Factory` or `Factory2` then you can omit this call, and instead call `createView` from your factory to return any compatible widgets.

### invalidateOptionsMenu

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void invalidateOptionsMenu()
```

Should be called from `invalidateOptionsMenu`} or `supportInvalidateOptionsMenu`.

### isCompatVectorFromResourcesEnabled

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static boolean isCompatVectorFromResourcesEnabled()
```

Returns whether vector drawables on older platforms (< API 21) can be accessed from within resources.

| See also |
| --- |
| `setCompatVectorFromResourcesEnabled` |  |

### isHandleNativeActionModesEnabled

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract boolean isHandleNativeActionModesEnabled()
```

Returns whether AppCompat handles any native action modes itself.

| Returns |
| --- |
| `boolean` | true if AppCompat should handle native action modes. |

### onConfigurationChanged

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void onConfigurationChanged(Configuration newConfig)
```

Should be called from `onConfigurationChanged`

### onCreate

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void onCreate(Bundle savedInstanceState)
```

Should be called from Activity.onCreate().

This should be called before `super.onCreate()` as so:

```
protected void onCreate(Bundle savedInstanceState) {
    getDelegate().onCreate(savedInstanceState);
    super.onCreate(savedInstanceState);
    // ...
}
```

### onDestroy

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void onDestroy()
```

Should be called from `onDestroy`

### onPostCreate

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void onPostCreate(Bundle savedInstanceState)
```

Should be called from `onPostCreate`

### onPostResume

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void onPostResume()
```

Should be called from `onPostResume`

### onSaveInstanceState

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void onSaveInstanceState(Bundle outState)
```

Allows AppCompat to save instance state.

### onStart

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void onStart()
```

Should be called from `onStart` Activity.onStart()}

### onStop

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void onStop()
```

Should be called from `Activity.onStop()`

### requestWindowFeature

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract boolean requestWindowFeature(int featureId)
```

Enable extended window features. This should be called instead of `requestWindowFeature` or `getWindow().requestFeature()`.

| Parameters |
| --- |
| `int featureId` | The desired feature as defined in `android.view.Window`. |

| Returns |
| --- |
| `boolean` | Returns true if the requested feature is supported and now enabled. |

### setApplicationLocales

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
public static void setApplicationLocales(@NonNull LocaleListCompat locales)
```

Sets the current locales for the calling app.

If this method is called after any host components with attached `AppCompatDelegate`s have been 'created', a `LocaleList` configuration change will occur in each. This may result in those components being recreated, depending on their manifest configuration.

This method accepts `LocaleListCompat` as an input parameter.

Apps should continue to read Locales via their in-process `LocaleList`s.

Pass a `getEmptyLocaleList` to reset to the system locale.

**Note: This API should always be called after Activity.onCreate(), apart from any exceptions explicitly mentioned in this documentation.**

On API level 33 and above, this API will handle storage automatically.

For API levels below that, the developer has two options:

* They can opt-in to automatic storage handled through the library. They can do this by adding a special metaData entry in their `AndroidManifest.xml`, similar to :

  ```
      <service
          android:name="androidx.appcompat.app.AppLocalesMetadataHolderService"
          android:enabled="false"
          android:exported="false">
          <meta-data
              android:name="autoStoreLocales"
              android:value="true" />
      </service>
  ```

  They should be mindful that this will cause a blocking diskRead and diskWrite strictMode violation, and they might need to suppress it at their end.
* The second option is that they can choose to handle storage themselves. In order to do so they must use this API to initialize locales during app-start up and provide their stored locales. In this case, API should be called before Activity.onCreate() in the activity lifecycle, e.g. in attachBaseContext(). **Note: Developers should gate this to API versions <33.**

  **This API should be called after Activity.onCreate() for all other cases.**

When the application using this API with API versions <33 updates to a version >= 33, then there can be two scenarios for this transition:

* If the developer has opted-in for autoStorage then the locales will be automatically synced to the framework. Developers must specify android:enabled="false" for the AppLocalesMetadataHolderService as shown in the meta-data entry above.
* If the developer has not opted-in for autoStorage then they will need to handle this transition on their end.

**Note: This API work with the AppCompatActivity context, not for others context, for Android 12 (API level 32) and earlier. If there is a requirement to get the localized string which respects the per-app locale in non-AppCompatActivity context, please consider using `getString` or `getContextForLanguage`.**

| Parameters |
| --- |
| `@NonNull LocaleListCompat locales` | a list of locales. |

### setCompatVectorFromResourcesEnabled

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static void setCompatVectorFromResourcesEnabled(boolean enabled)
```

Sets whether vector drawables on older platforms (< API 21) can be used within `android.graphics.drawable.DrawableContainer` resources.

When enabled, AppCompat can intercept some drawable inflation from the framework, which enables implicit inflation of vector drawables within `android.graphics.drawable.DrawableContainer` resources. You can then use those drawables in places such as `android:src` on `android.widget.ImageView`, or `android:drawableLeft` on `android.widget.TextView`. Example usage:

```
<selector xmlns:android="...">
    <item android:state_checked="true"
          android:drawable="@drawable/vector_checked_icon" />
    <item android:drawable="@drawable/vector_icon" />
</selector>

<TextView
        ...
        android:drawableLeft="@drawable/vector_state_list_icon" />
```

This feature defaults to disabled, since enabling it can cause issues with memory usage, and problems updating `Configuration` instances. If you update the configuration manually, then you probably do not want to enable this. You have been warned.

Even with this disabled, you can still use vector resources through `setImageResource` and its `app:srcCompat` attribute. They can also be used in anything which AppCompat inflates for you, such as menu resources.

Please note: this only takes effect in Activities created after this call.

### setContentView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setContentView(@LayoutRes int resId)
```

Should be called instead of `setContentView`}

### setContentView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setContentView(View v)
```

Should be called instead of `setContentView`}

### setContentView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setContentView(View v, ViewGroup.LayoutParams lp)
```

Should be called instead of `setContentView`}

### setDefaultNightMode

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static void setDefaultNightMode(int mode)
```

Sets the default night mode. This is the default value used for all components, but can be overridden locally via `setLocalNightMode`.

This is the primary method to control the DayNight functionality, since it allows the delegates to avoid unnecessary recreations when possible.

If this method is called after any host components with attached `AppCompatDelegate`s have been 'created', a `uiMode` configuration change will occur in each. This may result in those components being recreated, depending on their manifest configuration.

Defaults to `MODE_NIGHT_FOLLOW_SYSTEM`.

| See also |
| --- |
| `setLocalNightMode` |  |
| `getDefaultNightMode` |  |

### setHandleNativeActionModesEnabled

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setHandleNativeActionModesEnabled(boolean enabled)
```

Whether AppCompat handles any native action modes itself.

This methods only takes effect on `ICE_CREAM_SANDWICH` and above.

| Parameters |
| --- |
| `boolean enabled` | whether AppCompat should handle native action modes. |

### setLocalNightMode

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setLocalNightMode(int mode)
```

Override the night mode used for this delegate's host component.

When setting a mode to be used across an entire app, the `setDefaultNightMode` method is preferred.

If this is called after the host component has been created, a `uiMode` configuration change will occur, which may result in the component being recreated.

It is not recommended to use this method on a delegate attached to a `Dialog`. Dialogs use the host Activity as their context, resulting in the dialog's night mode overriding the Activity's night mode.

**Note:** This method is not recommended for use on devices running SDK 16 or earlier, as the specified night mode configuration may leak to other activities. Instead, consider using `setDefaultNightMode` to specify an app-wide night mode.

| See also |
| --- |
| `getLocalNightMode` |  |
| `setDefaultNightMode` |  |

### setOnBackInvokedDispatcher

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
@CallSuper  
@RequiresApi(value = 33)  
public void setOnBackInvokedDispatcher(@Nullable OnBackInvokedDispatcher dispatcher)
```

Sets the `OnBackInvokedDispatcher` for handling system back for Android SDK 33 and above.

If the delegate is hosted by an `Activity`, the default dispatcher is obtained via `getOnBackInvokedDispatcher`.

| Parameters |
| --- |
| `@Nullable OnBackInvokedDispatcher dispatcher` | the OnBackInvokedDispatcher to be set on this delegate, or `null` to use the default dispatcher |

### setSupportActionBar

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setSupportActionBar(@Nullable Toolbar toolbar)
```

Set a `Toolbar` to act as the `ActionBar` for this delegate.

When set to a non-null value the `getSupportActionBar` ()} method will return an `ActionBar` object that can be used to control the given toolbar as if it were a traditional window decor action bar. The toolbar's menu will be populated with the Activity's options menu and the navigation button will be wired through the standard `home` menu select action.

In order to use a Toolbar within the Activity's window content the application must not request the window feature `FEATURE_SUPPORT_ACTION_BAR`.

| Parameters |
| --- |
| `@Nullable Toolbar toolbar` | Toolbar to set as the Activity's action bar, or `null` to clear it |

### setTheme

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setTheme(@StyleRes int themeResId)
```

This should be called from setTheme to notify AppCompat of what the current theme resource id is.

### setTitle

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setTitle(@Nullable CharSequence title)
```

Should be called from `onTitleChanged`}

### startSupportActionMode

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract @Nullable ActionMode startSupportActionMode(@NonNull ActionMode.Callback callback)
```

Start an action mode.

| Parameters |
| --- |
| `@NonNull ActionMode.Callback callback` | Callback that will manage lifecycle events for this context mode |

| Returns |
| --- |
| `@Nullable ActionMode` | The ContextMode that was started, or null if it was canceled |