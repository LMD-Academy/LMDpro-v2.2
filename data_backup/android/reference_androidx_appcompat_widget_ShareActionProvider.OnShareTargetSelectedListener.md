--- source: https://developer.android.com/reference/androidx/appcompat/widget/ShareActionProvider.OnShareTargetSelectedListener ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ShareActionProvider.OnShareTargetSelectedListener

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/widget/ShareActionProvider.java+class:androidx.appcompat.widget.ShareActionProvider.OnShareTargetSelectedListener)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/widget/ShareActionProvider.OnShareTargetSelectedListener "View this page in Kotlin")
|Java

```
public interface ShareActionProvider.OnShareTargetSelectedListener
```

---

Listener for the event of selecting a share target.

## Summary

| Public methods |
| --- |
| `abstract boolean` | `onShareTargetSelected(ShareActionProvider source, Intent intent)`  Called when a share target has been selected. |

## Public methods

### onShareTargetSelected

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
abstract boolean onShareTargetSelected(ShareActionProvider source, Intent intent)
```

Called when a share target has been selected. The client can decide whether to perform some action before the sharing is actually performed.

**Note:** Modifying the intent is not permitted and any changes to the latter will be ignored.

**Note:** You should **not** handle the intent here. This callback aims to notify the client that a sharing is being performed, so the client can update the UI if necessary.

| Parameters |
| --- |
| `ShareActionProvider source` | The source of the notification. |
| `Intent intent` | The intent for launching the chosen share target. |

| Returns |
| --- |
| `boolean` | The return result is ignored. Always return false for consistency. |