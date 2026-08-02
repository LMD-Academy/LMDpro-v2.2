--- source: https://developer.android.com/reference/androidx/appcompat/app/ActionBar.TabListener ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ActionBar.TabListener

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/app/ActionBar.java+class:androidx.appcompat.app.ActionBar.TabListener)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/app/ActionBar.TabListener "View this page in Kotlin")
|Java

```
public interface ActionBar.TabListener
```

---

**This interface is deprecated.**  

Action bar navigation modes are deprecated and not supported by inline toolbar action bars. Consider using other [common navigation patterns](http://developer.android.com/design/patterns/navigation.html) instead.

Callback interface invoked when a tab is focused, unfocused, added, or removed.

## Summary

| Public methods |
| --- |
| `abstract void` | `onTabReselected(ActionBar.Tab tab, FragmentTransaction ft)`  Called when a tab that is already selected is chosen again by the user. |
| `abstract void` | `onTabSelected(ActionBar.Tab tab, FragmentTransaction ft)`  Called when a tab enters the selected state. |
| `abstract void` | `onTabUnselected(ActionBar.Tab tab, FragmentTransaction ft)`  Called when a tab exits the selected state. |

## Public methods

### onTabReselected

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
abstract void onTabReselected(ActionBar.Tab tab, FragmentTransaction ft)
```

Called when a tab that is already selected is chosen again by the user. Some applications may use this action to return to the top level of a category.

| Parameters |
| --- |
| `ActionBar.Tab tab` | The tab that was reselected. |
| `FragmentTransaction ft` | A `FragmentTransaction` for queuing fragment operations to execute once this method returns. This FragmentTransaction does not support being added to the back stack. |

### onTabSelected

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
abstract void onTabSelected(ActionBar.Tab tab, FragmentTransaction ft)
```

Called when a tab enters the selected state.

| Parameters |
| --- |
| `ActionBar.Tab tab` | The tab that was selected |
| `FragmentTransaction ft` | A `FragmentTransaction` for queuing fragment operations to execute during a tab switch. The previous tab's unselect and this tab's select will be executed in a single transaction. This FragmentTransaction does not support being added to the back stack. |

### onTabUnselected

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
abstract void onTabUnselected(ActionBar.Tab tab, FragmentTransaction ft)
```

Called when a tab exits the selected state.

| Parameters |
| --- |
| `ActionBar.Tab tab` | The tab that was unselected |
| `FragmentTransaction ft` | A `FragmentTransaction` for queuing fragment operations to execute during a tab switch. This tab's unselect and the newly selected tab's select will be executed in a single transaction. This FragmentTransaction does not support being added to the back stack. |