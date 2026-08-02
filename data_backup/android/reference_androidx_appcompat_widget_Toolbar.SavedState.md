--- source: https://developer.android.com/reference/androidx/appcompat/widget/Toolbar.SavedState ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# Toolbar.SavedState

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/widget/Toolbar.java+class:androidx.appcompat.widget.Toolbar.SavedState)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/widget/Toolbar.SavedState "View this page in Kotlin")
|Java

```
public class Toolbar.SavedState extends AbsSavedState
```

|  |  |  |
| --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | |
| ↳ | [androidx.customview.view.AbsSavedState](/reference/androidx/customview/view/AbsSavedState) | |
|  | ↳ | [androidx.appcompat.widget.Toolbar.SavedState](/reference/androidx/appcompat/widget/Toolbar.SavedState) |

---

## Summary

| Constants |
| --- |
| `static final Parcelable.Creator<Toolbar.SavedState>` | `CREATOR` |

| Public constructors |
| --- |
| `SavedState(Parcel source)` |
| `SavedState(Parcelable superState)` |
| `SavedState(Parcel source, ClassLoader loader)` |

| Public methods |
| --- |
| `void` | `writeToParcel(Parcel out, int flags)` |

| Inherited Constants |
| --- |
| From [androidx.customview.view.AbsSavedState](/reference/androidx/customview/view/AbsSavedState) |  |  | | --- | --- | | `static final Parcelable.Creator<AbsSavedState>` | `CREATOR` | | `static final AbsSavedState` | `EMPTY_STATE` | |
| From [android.os.Parcelable](https://developer.android.com/reference/android/os/Parcelable.html) |  |  | | --- | --- | | `static final int` | `CONTENTS_FILE_DESCRIPTOR = 1` | | `static final int` | `PARCELABLE_WRITE_RETURN_VALUE = 1` | |

| Inherited methods |
| --- |
| From [androidx.customview.view.AbsSavedState](/reference/androidx/customview/view/AbsSavedState) |  |  | | --- | --- | | `int` | `describeContents()` | | `final @Nullable Parcelable` | `getSuperState()` | |
| From [android.os.Parcelable](https://developer.android.com/reference/android/os/Parcelable.html) |  |  | | --- | --- | | `abstract int` | `describeContents()` | | `abstract void` | `writeToParcel(Parcel p, int p1)` | |

## Constants

### CREATOR

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final Parcelable.Creator<Toolbar.SavedState> CREATOR
```

## Public constructors

### SavedState

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public SavedState(Parcel source)
```

### SavedState

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public SavedState(Parcelable superState)
```

### SavedState

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public SavedState(Parcel source, ClassLoader loader)
```

## Public methods

### writeToParcel

```
public void writeToParcel(Parcel out, int flags)
```