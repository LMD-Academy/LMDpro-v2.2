--- source: https://developer.android.com/reference/androidx/appcompat/app/ActionBarDrawerToggle.Delegate ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ActionBarDrawerToggle.Delegate

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/app/ActionBarDrawerToggle.java+class:androidx.appcompat.app.ActionBarDrawerToggle.Delegate)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/app/ActionBarDrawerToggle.Delegate "View this page in Kotlin")
|Java

```
public interface ActionBarDrawerToggle.Delegate
```

---

## Summary

| Public methods |
| --- |
| `abstract Context` | `getActionBarThemedContext()`  Returns the context of ActionBar |
| `abstract Drawable` | `getThemeUpIndicator()`  Returns the drawable to be set as up button when DrawerToggle is disabled |
| `abstract boolean` | `isNavigationVisible()`  Returns whether navigation icon is visible or not. |
| `abstract void` | `setActionBarDescription(@StringRes int contentDescRes)`  Set the Action Bar's up indicator content description. |
| `abstract void` | `setActionBarUpIndicator(     Drawable upDrawable,     @StringRes int contentDescRes )`  Set the Action Bar's up indicator drawable and content description. |

## Public methods

### getActionBarThemedContext

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
abstract Context getActionBarThemedContext()
```

Returns the context of ActionBar

### getThemeUpIndicator

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
abstract Drawable getThemeUpIndicator()
```

Returns the drawable to be set as up button when DrawerToggle is disabled

### isNavigationVisible

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
abstract boolean isNavigationVisible()
```

Returns whether navigation icon is visible or not. Used to print warning messages in case developer forgets to set displayHomeAsUp to true

### setActionBarDescription

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
abstract void setActionBarDescription(@StringRes int contentDescRes)
```

Set the Action Bar's up indicator content description.

| Parameters |
| --- |
| `@StringRes int contentDescRes` | - Content description to set |

### setActionBarUpIndicator

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
abstract void setActionBarUpIndicator(  
    Drawable upDrawable,  
    @StringRes int contentDescRes  
)
```

Set the Action Bar's up indicator drawable and content description.

| Parameters |
| --- |
| `Drawable upDrawable` | - Drawable to set as up indicator |
| `@StringRes int contentDescRes` | - Content description to set |