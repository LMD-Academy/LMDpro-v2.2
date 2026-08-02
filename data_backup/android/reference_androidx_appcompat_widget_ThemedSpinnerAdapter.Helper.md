--- source: https://developer.android.com/reference/androidx/appcompat/widget/ThemedSpinnerAdapter.Helper ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ThemedSpinnerAdapter.Helper

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/widget/ThemedSpinnerAdapter.java+class:androidx.appcompat.widget.ThemedSpinnerAdapter.Helper)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/widget/ThemedSpinnerAdapter.Helper "View this page in Kotlin")
|Java

```
public final class ThemedSpinnerAdapter.Helper
```

---

A helper class which allows easy integration of `ThemedSpinnerAdapter` into existing `SpinnerAdapter`s in a backwards compatible way.

An example `BaseAdapter` implementation would be:

```
public class MyAdapter extends BaseAdapter implements ThemedSpinnerAdapter {
    private final ThemedSpinnerAdapter.Helper mDropDownHelper;

    public CheeseAdapter(Context context) {
        mDropDownHelper = new ThemedSpinnerAdapter.Helper(context);
        // ...
    }

    @Override
    public View getDropDownView(int position, View convertView, ViewGroup parent) {
        View view;

        if (convertView == null) {
            // Inflate the drop down using the helper's LayoutInflater
            LayoutInflater inflater = mDropDownHelper.getDropDownViewInflater();
            view = inflater.inflate(R.layout.my_dropdown, parent, false);
        }

        // ...
    }

    @Override
    public void setDropDownViewTheme(@Nullable Resources.Theme theme) {
        // Pass the new theme to the helper
        mDropDownHelper.setDropDownViewTheme(theme);
    }

    @Override
    public Resources.Theme getDropDownViewTheme() {
        // Return the helper's value
        return mDropDownHelper.getDropDownViewTheme();
    }
}
```

## Summary

| Public constructors |
| --- |
| `Helper(@NonNull Context context)` |

| Public methods |
| --- |
| `@NonNull LayoutInflater` | `getDropDownViewInflater()`  Returns the `LayoutInflater` which should be used when inflating any layouts from your `getDropDownView`. |
| `@Nullable Resources.Theme` | `getDropDownViewTheme()`  Should be called from your adapter's `getDropDownViewTheme`, returning the value returned from this method. |
| `void` | `setDropDownViewTheme(@Nullable Resources.Theme theme)`  Should be called from your adapter's `setDropDownViewTheme` |

## Public constructors

### Helper

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public Helper(@NonNull Context context)
```

## Public methods

### getDropDownViewInflater

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public @NonNull LayoutInflater getDropDownViewInflater()
```

Returns the `LayoutInflater` which should be used when inflating any layouts from your `getDropDownView`.

The instance returned will have a correct theme, meaning that any inflated views will be created with the same theme.

### getDropDownViewTheme

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public @Nullable Resources.Theme getDropDownViewTheme()
```

Should be called from your adapter's `getDropDownViewTheme`, returning the value returned from this method.

### setDropDownViewTheme

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setDropDownViewTheme(@Nullable Resources.Theme theme)
```

Should be called from your adapter's `setDropDownViewTheme`

| Parameters |
| --- |
| `@Nullable Resources.Theme theme` | the theme passed in to `setDropDownViewTheme` |