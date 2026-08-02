# ActionMode

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/appcompat/view/ActionMode))

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/view/ActionMode.java+class:androidx.appcompat.view.ActionMode)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/view/ActionMode "View this page in Kotlin")
|Java

```
public abstract class ActionMode
```

---

Represents a contextual mode of the user interface. Action modes can be used to provide alternative interaction modes and replace parts of the normal UI until finished. Examples of good action modes include text selection and contextual actions.

## Summary

| Nested types |
| --- |
| `public interface ActionMode.Callback`  Callback interface for action modes. |

| Public constructors |
| --- |
| `ActionMode()` |

| Public methods |
| --- |
| `abstract void` | `finish()`  Finish and close this action mode. |
| `abstract View` | `getCustomView()`  Returns the current custom view for this action mode. |
| `abstract Menu` | `getMenu()`  Returns the menu of actions that this action mode presents. |
| `abstract MenuInflater` | `getMenuInflater()`  Returns a `MenuInflater` with the ActionMode's context. |
| `abstract CharSequence` | `getSubtitle()`  Returns the current subtitle of this action mode. |
| `Object` | `getTag()`  Retrieve the tag object associated with this ActionMode. |
| `abstract CharSequence` | `getTitle()`  Returns the current title of this action mode. |
| `boolean` | `getTitleOptionalHint()` |
| `abstract void` | `invalidate()`  Invalidate the action mode and refresh menu content. |
| `boolean` | `isTitleOptional()` |
| `abstract void` | `setCustomView(View view)`  Set a custom view for this action mode. |
| `abstract void` | `setSubtitle(int resId)`  Set the subtitle of the action mode. |
| `abstract void` | `setSubtitle(CharSequence subtitle)`  Set the subtitle of the action mode. |
| `void` | `setTag(Object tag)`  Set a tag object associated with this ActionMode. |
| `abstract void` | `setTitle(int resId)`  Set the title of the action mode. |
| `abstract void` | `setTitle(CharSequence title)`  Set the title of the action mode. |
| `void` | `setTitleOptionalHint(boolean titleOptional)`  Set whether or not the title/subtitle display for this action mode is optional. |

## Public constructors

### ActionMode

Added in 1.1.0

```
public ActionMode()
```

## Public methods

### finish

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void finish()
```

Finish and close this action mode. The action mode's `ActionMode.Callback` will have its `onDestroyActionMode` method called.

### getCustomView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract View getCustomView()
```

Returns the current custom view for this action mode.

| Returns |
| --- |
| `View` | The current custom view |

### getMenu

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract Menu getMenu()
```

Returns the menu of actions that this action mode presents.

| Returns |
| --- |
| `Menu` | The action mode's menu. |

### getMenuInflater

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract MenuInflater getMenuInflater()
```

Returns a `MenuInflater` with the ActionMode's context.

### getSubtitle

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract CharSequence getSubtitle()
```

Returns the current subtitle of this action mode.

| Returns |
| --- |
| `CharSequence` | Subtitle text |

### getTag

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public Object getTag()
```

Retrieve the tag object associated with this ActionMode.

Like the tag available to views, this allows applications to associate arbitrary data with an ActionMode for later reference.

| Returns |
| --- |
| `Object` | Tag associated with this ActionMode |

| See also |
| --- |
| `setTag` |  |

### getTitle

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract CharSequence getTitle()
```

Returns the current title of this action mode.

| Returns |
| --- |
| `CharSequence` | Title text |

### getTitleOptionalHint

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public boolean getTitleOptionalHint()
```

| Returns |
| --- |
| `boolean` | true if this action mode has been given a hint to consider the title/subtitle display to be optional. |

| See also |
| --- |
| `setTitleOptionalHint` |  |
| `isTitleOptional` |  |

### invalidate

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void invalidate()
```

Invalidate the action mode and refresh menu content. The mode's `ActionMode.Callback` will have its `onPrepareActionMode` method called. If it returns true the menu will be scanned for updated content and any relevant changes will be reflected to the user.

### isTitleOptional

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public boolean isTitleOptional()
```

| Returns |
| --- |
| `boolean` | true if this action mode considers the title and subtitle fields as optional. Optional titles may not be displayed to the user. |

### setCustomView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setCustomView(View view)
```

Set a custom view for this action mode. The custom view will take the place of the title and subtitle. Useful for things like search boxes.

| Parameters |
| --- |
| `View view` | Custom view to use in place of the title/subtitle. |

| See also |
| --- |
| `setTitle` |  |
| `setSubtitle` |  |

### setSubtitle

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setSubtitle(int resId)
```

Set the subtitle of the action mode. This method will have no visible effect if a custom view has been set.

| Parameters |
| --- |
| `int resId` | Resource ID of a string to set as the subtitle |

| See also |
| --- |
| `setSubtitle` |  |
| `setCustomView` |  |

### setSubtitle

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setSubtitle(CharSequence subtitle)
```

Set the subtitle of the action mode. This method will have no visible effect if a custom view has been set.

| Parameters |
| --- |
| `CharSequence subtitle` | Subtitle string to set |

| See also |
| --- |
| `setSubtitle` |  |
| `setCustomView` |  |

### setTag

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setTag(Object tag)
```

Set a tag object associated with this ActionMode.

Like the tag available to views, this allows applications to associate arbitrary data with an ActionMode for later reference.

| Parameters |
| --- |
| `Object tag` | Tag to associate with this ActionMode |

| See also |
| --- |
| `getTag` |  |

### setTitle

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setTitle(int resId)
```

Set the title of the action mode. This method will have no visible effect if a custom view has been set.

| Parameters |
| --- |
| `int resId` | Resource ID of a string to set as the title |

| See also |
| --- |
| `setTitle` |  |
| `setCustomView` |  |

### setTitle

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setTitle(CharSequence title)
```

Set the title of the action mode. This method will have no visible effect if a custom view has been set.

| Parameters |
| --- |
| `CharSequence title` | Title string to set |

| See also |
| --- |
| `setTitle` |  |
| `setCustomView` |  |

### setTitleOptionalHint

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setTitleOptionalHint(boolean titleOptional)
```

Set whether or not the title/subtitle display for this action mode is optional.

In many cases the supplied title for an action mode is merely meant to add context and is not strictly required for the action mode to be useful. If the title is optional, the system may choose to hide the title entirely rather than truncate it due to a lack of available space.

Note that this is merely a hint; the underlying implementation may choose to ignore this setting under some circumstances.

| Parameters |
| --- |
| `boolean titleOptional` | true if the title only presents optional information. |
