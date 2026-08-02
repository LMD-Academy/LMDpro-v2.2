# SystemBarStyle

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/SystemBarStyle))

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/EdgeToEdge.kt+class:androidx.activity.SystemBarStyle)

Added in [1.8.0](/jetpack/androidx/releases/activity#1.8.0)

---

[Kotlin](/reference/kotlin/androidx/activity/SystemBarStyle "View this page in Kotlin")
|Java

```
public final class SystemBarStyle
```

---

The style for the status bar or the navigation bar used in `enableEdgeToEdge`.

## Summary

| Public methods |
| --- |
| `static final @NonNull SystemBarStyle` | `auto(     @ColorInt int lightScrim,     @ColorInt int darkScrim,     @NonNull Function1<@NonNull Resources, @NonNull Boolean> detectDarkMode )`  Creates a new instance of `SystemBarStyle`. |
| `static final @NonNull SystemBarStyle` | `dark(@ColorInt int scrim)`  Creates a new instance of `SystemBarStyle`. |
| `static final @NonNull SystemBarStyle` | `light(@ColorInt int scrim, @ColorInt int darkScrim)`  Creates a new instance of `SystemBarStyle`. |

## Public methods

### auto

Added in [1.8.0](/jetpack/androidx/releases/activity#1.8.0)

```
public static final @NonNull SystemBarStyle auto(  
    @ColorInt int lightScrim,  
    @ColorInt int darkScrim,  
    @NonNull Function1<@NonNull Resources, @NonNull Boolean> detectDarkMode  
)
```

Creates a new instance of `SystemBarStyle`. This style detects the dark mode automatically and applies the recommended style for each of the status bar and the navigation bar. If this style doesn't work for your app, consider using either `dark` or `light`.

* On API level 29 and above, both the status bar and the navigation bar will be transparent. However, the navigation bar with 3 or 2 buttons will have a translucent scrim. This scrim color is provided by the platform and *cannot be customized*.
* On API level 28 and below, the status bar will be transparent, and the navigation bar will have one of the specified scrim colors depending on the dark mode.

| Parameters |
| --- |
| `@ColorInt int lightScrim` | The scrim color to be used for the background when the app is in light mode. Note that this is used only on API level 28 and below. |
| `@ColorInt int darkScrim` | The scrim color to be used for the background when the app is in dark mode. This is also used on devices where the system icon color is always light. Note that this is used only on API level 28 and below. |
| `@NonNull Function1<@NonNull Resources, @NonNull Boolean> detectDarkMode` | Optional. Detects whether UI currently uses dark mode or not. The default implementation can detect any of the standard dark mode features from the platform, appcompat, and Jetpack Compose. |

### dark

Added in [1.8.0](/jetpack/androidx/releases/activity#1.8.0)

```
public static final @NonNull SystemBarStyle dark(@ColorInt int scrim)
```

Creates a new instance of `SystemBarStyle`. This style consistently applies the specified scrim color regardless of the system navigation mode.

| Parameters |
| --- |
| `@ColorInt int scrim` | The scrim color to be used for the background. It is expected to be dark for the contrast against the light system icons. |

### light

Added in [1.8.0](/jetpack/androidx/releases/activity#1.8.0)

```
public static final @NonNull SystemBarStyle light(@ColorInt int scrim, @ColorInt int darkScrim)
```

Creates a new instance of `SystemBarStyle`. This style consistently applies the specified scrim color regardless of the system navigation mode.

| Parameters |
| --- |
| `@ColorInt int scrim` | The scrim color to be used for the background. It is expected to be light for the contrast against the dark system icons. |
| `@ColorInt int darkScrim` | The scrim color to be used for the background on devices where the system icon color is always light. It is expected to be dark. |
