--- source: https://developer.android.com/reference/androidx/appcompat/widget/SearchView.OnCloseListener ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# SearchView.OnCloseListener

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/widget/SearchView.java+class:androidx.appcompat.widget.SearchView.OnCloseListener)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/widget/SearchView.OnCloseListener "View this page in Kotlin")
|Java

```
public interface SearchView.OnCloseListener
```

---

## Summary

| Public methods |
| --- |
| `abstract boolean` | `onClose()`  The user is attempting to close the SearchView. |

## Public methods

### onClose

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
abstract boolean onClose()
```

The user is attempting to close the SearchView.

| Returns |
| --- |
| `boolean` | true if the listener wants to override the default behavior of clearing the text field and dismissing it, false otherwise. |