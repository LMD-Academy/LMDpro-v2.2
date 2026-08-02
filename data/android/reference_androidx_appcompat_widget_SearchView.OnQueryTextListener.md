# SearchView.OnQueryTextListener

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/appcompat/widget/SearchView.OnQueryTextListener))

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/widget/SearchView.java+class:androidx.appcompat.widget.SearchView.OnQueryTextListener)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/widget/SearchView.OnQueryTextListener "View this page in Kotlin")
|Java

```
public interface SearchView.OnQueryTextListener
```

---

Callbacks for changes to the query text.

## Summary

| Public methods |
| --- |
| `abstract boolean` | `onQueryTextChange(String newText)`  Called when the query text is changed by the user. |
| `abstract boolean` | `onQueryTextSubmit(String query)`  Called when the user submits the query. |

## Public methods

### onQueryTextChange

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
abstract boolean onQueryTextChange(String newText)
```

Called when the query text is changed by the user.

| Parameters |
| --- |
| `String newText` | the new content of the query text field. |

| Returns |
| --- |
| `boolean` | false if the SearchView should perform the default action of showing any suggestions if available, true if the action was handled by the listener. |

### onQueryTextSubmit

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
abstract boolean onQueryTextSubmit(String query)
```

Called when the user submits the query. This could be due to a key press on the keyboard or due to pressing a submit button. The listener can override the standard behavior by returning true to indicate that it has handled the submit request. Otherwise return false to let the SearchView handle the submission by launching any associated intent.

| Parameters |
| --- |
| `String query` | the query text that is to be submitted |

| Returns |
| --- |
| `boolean` | true if the query has been handled by the listener, false to let the SearchView perform the default action. |
