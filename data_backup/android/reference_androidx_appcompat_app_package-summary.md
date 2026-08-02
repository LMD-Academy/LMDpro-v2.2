--- source: https://developer.android.com/reference/androidx/appcompat/app/package-summary ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# androidx.appcompat.app

---

[Kotlin](/reference/kotlin/androidx/appcompat/app/package-summary "View this page in Kotlin")
|Java

## Interfaces

|  |  |
| --- | --- |
| `ActionBar.OnMenuVisibilityListener` | Listener for receiving events when action bar menus are shown or hidden. |
| `ActionBar.OnNavigationListener` | **This interface is deprecated.** Action bar navigation modes are deprecated and not supported by inline toolbar action bars. |
| `ActionBar.TabListener` | **This interface is deprecated.** Action bar navigation modes are deprecated and not supported by inline toolbar action bars. |
| `ActionBarDrawerToggle.Delegate` |  |
| `ActionBarDrawerToggle.DelegateProvider` | Allows an implementing Activity to return an `ActionBarDrawerToggle.Delegate` to use with ActionBarDrawerToggle. |
| `AppCompatCallback` | Implemented this in order for AppCompat to be able to callback in certain situations. |

## Classes

|  |  |
| --- | --- |
| `ActionBar` | A primary toolbar within the activity that may display the activity title, application-level navigation affordances, and other interactive items. |
| `ActionBar.LayoutParams` | Per-child layout information associated with action bar custom views. |
| `ActionBar.Tab` | **This class is deprecated.** Action bar navigation modes are deprecated and not supported by inline toolbar action bars. |
| `ActionBarDrawerToggle` | This class provides a handy way to tie together the functionality of `DrawerLayout` and the framework `ActionBar` to implement the recommended design for navigation drawers. |
| `AlertDialog` | A subclass of Dialog that can display one, two or three buttons. |
| `AlertDialog.Builder` |  |
| `AppCompatActivity` | Base class for activities that wish to use some of the newer platform features on older Android devices. |
| `AppCompatDelegate` | This class represents a delegate which you can use to extend AppCompat's support to any `android.app.Activity`. |
| `AppCompatDialog` | Base class for AppCompat themed `android.app.Dialog`s. |
| `AppCompatDialogFragment` | A special version of `DialogFragment` which uses an `AppCompatDialog` in place of a platform-styled dialog. |
| `AppCompatViewInflater` | This class is used by AppCompat to automatically "substitute" all usages of core Android widgets inflated from layout files by the AppCompat extensions of those widgets. |
| `AppLocalesMetadataHolderService` | A placeholder service to avoid adding application-level metadata. |