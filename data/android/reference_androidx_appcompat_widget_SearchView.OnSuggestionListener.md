# SearchView.OnSuggestionListener

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/appcompat/widget/SearchView.OnSuggestionListener))

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/widget/SearchView.java+class:androidx.appcompat.widget.SearchView.OnSuggestionListener)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/widget/SearchView.OnSuggestionListener "View this page in Kotlin")
|Java

```
public interface SearchView.OnSuggestionListener
```

---

Callback interface for selection events on suggestions. These callbacks are only relevant when a SearchableInfo has been specified by `setSearchableInfo`.

## Summary

| Public methods |
| --- |
| `abstract boolean` | `onSuggestionClick(int position)`  Called when a suggestion was clicked. |
| `abstract boolean` | `onSuggestionSelect(int position)`  Called when a suggestion was selected by navigating to it. |

## Public methods

### onSuggestionClick

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
abstract boolean onSuggestionClick(int position)
```

Called when a suggestion was clicked.

| Parameters |
| --- |
| `int position` | the absolute position of the clicked item in the list of suggestions. |

| Returns |
| --- |
| `boolean` | true if the listener handles the event and wants to override the default behavior of launching any intent or submitting a search query specified on that item. Return false otherwise. |

### onSuggestionSelect

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
abstract boolean onSuggestionSelect(int position)
```

Called when a suggestion was selected by navigating to it.

| Parameters |
| --- |
| `int position` | the absolute position in the list of suggestions. |

| Returns |
| --- |
| `boolean` | true if the listener handles the event and wants to override the default behavior of possibly rewriting the query based on the selected item, false otherwise. |
