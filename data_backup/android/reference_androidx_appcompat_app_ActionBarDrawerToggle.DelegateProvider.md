--- source: https://developer.android.com/reference/androidx/appcompat/app/ActionBarDrawerToggle.DelegateProvider ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ActionBarDrawerToggle.DelegateProvider

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/app/ActionBarDrawerToggle.java+class:androidx.appcompat.app.ActionBarDrawerToggle.DelegateProvider)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/app/ActionBarDrawerToggle.DelegateProvider "View this page in Kotlin")
|Java

```
public interface ActionBarDrawerToggle.DelegateProvider
```

Known direct subclasses

[AppCompatActivity](/reference/androidx/appcompat/app/AppCompatActivity)

|  |  |
| --- | --- |
| `AppCompatActivity` | Base class for activities that wish to use some of the newer platform features on older Android devices. |

---

Allows an implementing Activity to return an `ActionBarDrawerToggle.Delegate` to use with ActionBarDrawerToggle.

## Summary

| Public methods |
| --- |
| `abstract @Nullable ActionBarDrawerToggle.Delegate` | `getDrawerToggleDelegate()` |

## Public methods

### getDrawerToggleDelegate

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
abstract @Nullable ActionBarDrawerToggle.Delegate getDrawerToggleDelegate()
```

| Returns |
| --- |
| `@Nullable ActionBarDrawerToggle.Delegate` | Delegate to use for ActionBarDrawableToggles, or null if the Activity does not wish to override the default behavior. |