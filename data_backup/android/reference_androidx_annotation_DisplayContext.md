--- source: https://developer.android.com/reference/androidx/annotation/DisplayContext ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# DisplayContext

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/DisplayContext.jvm.kt+class:androidx.annotation.DisplayContext)

Added in [1.3.0](/jetpack/androidx/releases/annotation#1.3.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/DisplayContext "View this page in Kotlin")
|Java

```
@Retention(value = AnnotationRetention.SOURCE)  
@Target(allowedTargets = [AnnotationTarget.ANNOTATION_CLASS, AnnotationTarget.CLASS, AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.VALUE_PARAMETER, AnnotationTarget.FIELD])  
public annotation DisplayContext
```

---

Denotes a `android.content.Context` that is tied to a `android.view.Display` and can be used to obtain one via `android.content.Context.getDisplay`. Note: it is not considered to be a UI or visual Context and **must not** be used to obtain UI-related services, such as `android.view.WindowManager`, `android.view.LayoutInflater` or `android.app.WallpaperManager` via `android.content.Context.getSystemService`. If the UI services mentioned above are required, instead please use Contexts which are marked as `UiContext`.

`android.app.Activity`, Context instances created with `android.content.Context.createWindowContext` or `android.content.Context.createDisplayContext` can be used to get an associated `android.view.Display` instance.

This is a marker annotation and has no specific attributes.

| See also |
| --- |
| `getDisplay` |  |
| `getSystemService` |  |
| `getSystemService` |  |
| `createDisplayContext` |  |
| `createWindowContext` |  |
| `UiContext` |  |

## Summary

| Public constructors |
| --- |
| `DisplayContext()` |

## Public constructors

### DisplayContext

```
public DisplayContext()
```