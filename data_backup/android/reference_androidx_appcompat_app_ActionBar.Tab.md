--- source: https://developer.android.com/reference/androidx/appcompat/app/ActionBar.Tab ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ActionBar.Tab

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/app/ActionBar.java+class:androidx.appcompat.app.ActionBar.Tab)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/app/ActionBar.Tab "View this page in Kotlin")
|Java

```
public abstract class ActionBar.Tab
```

---

**This class is deprecated.**  

Action bar navigation modes are deprecated and not supported by inline toolbar action bars. Consider using other [common navigation patterns](http://developer.android.com/design/patterns/navigation.html) instead.

A tab in the action bar.

Tabs manage the hiding and showing of `Fragment`s.

## Summary

| Constants |
| --- |
| `static final int` | `INVALID_POSITION = -1`  An invalid position for a tab. |

| Public constructors |
| --- |
| `Tab()` |

| Public methods |
| --- |
| `abstract CharSequence` | `getContentDescription()`  Gets a brief description of this tab's content for use in accessibility support. |
| `abstract View` | `getCustomView()`  Retrieve a previously set custom view for this tab. |
| `abstract Drawable` | `getIcon()`  Return the icon associated with this tab. |
| `abstract int` | `getPosition()`  Return the current position of this tab in the action bar. |
| `abstract Object` | `getTag()` |
| `abstract CharSequence` | `getText()`  Return the text of this tab. |
| `abstract void` | `select()`  Select this tab. |
| `abstract ActionBar.Tab` | `setContentDescription(CharSequence contentDesc)`  Set a description of this tab's content for use in accessibility support. |
| `abstract ActionBar.Tab` | `setContentDescription(@StringRes int resId)`  Set a description of this tab's content for use in accessibility support. |
| `abstract ActionBar.Tab` | `setCustomView(int layoutResId)`  Set a custom view to be used for this tab. |
| `abstract ActionBar.Tab` | `setCustomView(View view)`  Set a custom view to be used for this tab. |
| `abstract ActionBar.Tab` | `setIcon(Drawable icon)`  Set the icon displayed on this tab. |
| `abstract ActionBar.Tab` | `setIcon(@DrawableRes int resId)`  Set the icon displayed on this tab. |
| `abstract ActionBar.Tab` | `setTabListener(ActionBar.TabListener listener)`  Set the `TabListener` that will handle switching to and from this tab. |
| `abstract ActionBar.Tab` | `setTag(Object obj)`  Give this Tab an arbitrary object to hold for later use. |
| `abstract ActionBar.Tab` | `setText(int resId)`  Set the text displayed on this tab. |
| `abstract ActionBar.Tab` | `setText(CharSequence text)`  Set the text displayed on this tab. |

## Constants

### INVALID\_POSITION

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int INVALID_POSITION = -1
```

An invalid position for a tab.

| See also |
| --- |
| `getPosition` |  |

## Public constructors

### Tab

Added in 1.1.0

Deprecated in 1.1.0

```
public Tab()
```

## Public methods

### getContentDescription

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract CharSequence getContentDescription()
```

Gets a brief description of this tab's content for use in accessibility support.

| Returns |
| --- |
| `CharSequence` | Description of this tab's content |

| See also |
| --- |
| `setContentDescription` |  |
| `setContentDescription` |  |

### getCustomView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract View getCustomView()
```

Retrieve a previously set custom view for this tab.

| Returns |
| --- |
| `View` | The custom view set by `setCustomView`. |

### getIcon

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract Drawable getIcon()
```

Return the icon associated with this tab.

| Returns |
| --- |
| `Drawable` | The tab's icon |

### getPosition

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract int getPosition()
```

Return the current position of this tab in the action bar.

| Returns |
| --- |
| `int` | Current position, or `INVALID_POSITION` if this tab is not currently in the action bar. |

### getTag

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract Object getTag()
```

| Returns |
| --- |
| `Object` | This Tab's tag object. |

### getText

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract CharSequence getText()
```

Return the text of this tab.

| Returns |
| --- |
| `CharSequence` | The tab's text |

### select

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void select()
```

Select this tab. Only valid if the tab has been added to the action bar.

### setContentDescription

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract ActionBar.Tab setContentDescription(CharSequence contentDesc)
```

Set a description of this tab's content for use in accessibility support. If no content description is provided the title will be used.

| Parameters |
| --- |
| `CharSequence contentDesc` | Description of this tab's content |

| Returns |
| --- |
| `ActionBar.Tab` | The current instance for call chaining |

| See also |
| --- |
| `setContentDescription` |  |
| `getContentDescription` |  |

### setContentDescription

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract ActionBar.Tab setContentDescription(@StringRes int resId)
```

Set a description of this tab's content for use in accessibility support. If no content description is provided the title will be used.

| Parameters |
| --- |
| `@StringRes int resId` | A resource ID referring to the description text |

| Returns |
| --- |
| `ActionBar.Tab` | The current instance for call chaining |

| See also |
| --- |
| `setContentDescription` |  |
| `getContentDescription` |  |

### setCustomView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract ActionBar.Tab setCustomView(int layoutResId)
```

Set a custom view to be used for this tab. This overrides values set by `setText` and `setIcon`.

| Parameters |
| --- |
| `int layoutResId` | A layout resource to inflate and use as a custom tab view |

| Returns |
| --- |
| `ActionBar.Tab` | The current instance for call chaining |

### setCustomView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract ActionBar.Tab setCustomView(View view)
```

Set a custom view to be used for this tab. This overrides values set by `setText` and `setIcon`.

| Parameters |
| --- |
| `View view` | Custom view to be used as a tab. |

| Returns |
| --- |
| `ActionBar.Tab` | The current instance for call chaining |

### setIcon

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract ActionBar.Tab setIcon(Drawable icon)
```

Set the icon displayed on this tab.

| Parameters |
| --- |
| `Drawable icon` | The drawable to use as an icon |

| Returns |
| --- |
| `ActionBar.Tab` | The current instance for call chaining |

### setIcon

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract ActionBar.Tab setIcon(@DrawableRes int resId)
```

Set the icon displayed on this tab.

| Parameters |
| --- |
| `@DrawableRes int resId` | Resource ID referring to the drawable to use as an icon |

| Returns |
| --- |
| `ActionBar.Tab` | The current instance for call chaining |

### setTabListener

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract ActionBar.Tab setTabListener(ActionBar.TabListener listener)
```

Set the `TabListener` that will handle switching to and from this tab. All tabs must have a TabListener set before being added to the ActionBar.

| Parameters |
| --- |
| `ActionBar.TabListener listener` | Listener to handle tab selection events |

| Returns |
| --- |
| `ActionBar.Tab` | The current instance for call chaining |

### setTag

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract ActionBar.Tab setTag(Object obj)
```

Give this Tab an arbitrary object to hold for later use.

| Parameters |
| --- |
| `Object obj` | Object to store |

| Returns |
| --- |
| `ActionBar.Tab` | The current instance for call chaining |

### setText

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract ActionBar.Tab setText(int resId)
```

Set the text displayed on this tab. Text may be truncated if there is not room to display the entire string.

| Parameters |
| --- |
| `int resId` | A resource ID referring to the text that should be displayed |

| Returns |
| --- |
| `ActionBar.Tab` | The current instance for call chaining |

### setText

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract ActionBar.Tab setText(CharSequence text)
```

Set the text displayed on this tab. Text may be truncated if there is not room to display the entire string.

| Parameters |
| --- |
| `CharSequence text` | The text to display |

| Returns |
| --- |
| `ActionBar.Tab` | The current instance for call chaining |