--- source: https://developer.android.com/reference/androidx/activity/result/ActivityResultLauncherKt ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ActivityResultLauncherKt

Added in 1.9.0

---

[Kotlin](/reference/kotlin/androidx/activity/result/package-summary "View this page in Kotlin")
|Java

```
public final class ActivityResultLauncherKt
```

---

## Summary

| Public methods |
| --- |
| `static final void` | `launch(     @NonNull ActivityResultLauncher<Void> receiver,     ActivityOptionsCompat options )`  Convenience method to launch a no-argument registered call without needing to pass in `null`. |
| `static final void` | `launchUnit(     @NonNull ActivityResultLauncher<Unit> receiver,     ActivityOptionsCompat options )`  Convenience method to launch a no-argument registered call without needing to pass in `Unit`. |

## Public methods

### launch

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/ActivityResultLauncher.kt+function:launch)

Added in [1.9.0](/jetpack/androidx/releases/activity#1.9.0)

```
public static final void launch(  
    @NonNull ActivityResultLauncher<Void> receiver,  
    ActivityOptionsCompat options  
)
```

Convenience method to launch a no-argument registered call without needing to pass in `null`.

### launchUnit

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/ActivityResultLauncher.kt+function:launch)

Added in [1.9.0](/jetpack/androidx/releases/activity#1.9.0)

```
public static final void launchUnit(  
    @NonNull ActivityResultLauncher<Unit> receiver,  
    ActivityOptionsCompat options  
)
```

Convenience method to launch a no-argument registered call without needing to pass in `Unit`.