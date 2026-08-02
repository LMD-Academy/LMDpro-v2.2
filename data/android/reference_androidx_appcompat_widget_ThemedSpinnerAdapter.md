# ThemedSpinnerAdapter

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/appcompat/widget/ThemedSpinnerAdapter))

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/widget/ThemedSpinnerAdapter.java+class:androidx.appcompat.widget.ThemedSpinnerAdapter)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/widget/ThemedSpinnerAdapter "View this page in Kotlin")
|Java

```
public interface ThemedSpinnerAdapter extends SpinnerAdapter
```

---

An extension of SpinnerAdapter that is capable of inflating drop-down views against a different theme than normal views.

Classes that implement this interface should use the theme provided to `setDropDownViewTheme` when creating views in `getDropDownView`.

The `Helper` class is provided to aide implementation in a backwards compatible way.

## Summary

| Nested types |
| --- |
| `public final class ThemedSpinnerAdapter.Helper`  A helper class which allows easy integration of `ThemedSpinnerAdapter` into existing `SpinnerAdapter`s in a backwards compatible way. |

| Public methods |
| --- |
| `abstract @Nullable Resources.Theme` | `getDropDownViewTheme()`  Returns the value previously set by a call to `setDropDownViewTheme`. |
| `abstract void` | `setDropDownViewTheme(@Nullable Resources.Theme theme)`  Sets the `Resources.Theme` against which drop-down views are inflated. |

| Inherited Constants |
| --- |
| From [android.widget.Adapter](https://developer.android.com/reference/android/widget/Adapter.html) |  |  | | --- | --- | | `default static final int` | `IGNORE_ITEM_VIEW_TYPE = -1` | | `default static final int` | `NO_SELECTION = -2147483648` | |

| Inherited methods |
| --- |
| From [android.widget.Adapter](https://developer.android.com/reference/android/widget/Adapter.html) |  |  | | --- | --- | | `default CharSequence[]` | `getAutofillOptions()` | | `abstract int` | `getCount()` | | `abstract Object` | `getItem(int p)` | | `abstract long` | `getItemId(int p)` | | `abstract int` | `getItemViewType(int p)` | | `abstract View` | `getView(int p, View p1, ViewGroup p2)` | | `abstract int` | `getViewTypeCount()` | | `abstract boolean` | `hasStableIds()` | | `abstract boolean` | `isEmpty()` | | `abstract void` | `registerDataSetObserver(DataSetObserver p)` | | `abstract void` | `unregisterDataSetObserver(DataSetObserver p)` | |
| From [android.widget.SpinnerAdapter](https://developer.android.com/reference/android/widget/SpinnerAdapter.html) |  |  | | --- | --- | | `abstract View` | `getDropDownView(int p, View p1, ViewGroup p2)` | |

## Public methods

### getDropDownViewTheme

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
abstract @Nullable Resources.Theme getDropDownViewTheme()
```

Returns the value previously set by a call to `setDropDownViewTheme`.

| Returns |
| --- |
| `@Nullable Resources.Theme` | the `Resources.Theme` against which drop-down views are inflated, or `null` if one has not been explicitly set |

### setDropDownViewTheme

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
abstract void setDropDownViewTheme(@Nullable Resources.Theme theme)
```

Sets the `Resources.Theme` against which drop-down views are inflated.

| Parameters |
| --- |
| `@Nullable Resources.Theme theme` | the context against which to inflate drop-down views, or `null` to use the default theme |

| See also |
| --- |
| `getDropDownView` |  |
