# AlertDialog.Builder

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/appcompat/app/AlertDialog.Builder))

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/app/AlertDialog.java+class:androidx.appcompat.app.AlertDialog.Builder)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/app/AlertDialog.Builder "View this page in Kotlin")
|Java

```
public class AlertDialog.Builder
```

---

## Summary

| Public constructors |
| --- |
| `Builder(@NonNull Context context)`  Creates a builder for an alert dialog that uses the default alert dialog theme. |
| `Builder(@NonNull Context context, @StyleRes int themeResId)`  Creates a builder for an alert dialog that uses an explicit theme resource. |

| Public methods |
| --- |
| `@NonNull AlertDialog` | `create()`  Creates an `AlertDialog` with the arguments supplied to this builder. |
| `@NonNull Context` | `getContext()`  Returns a `Context` with the appropriate theme for dialogs created by this Builder. |
| `AlertDialog.Builder` | `setAdapter(     ListAdapter adapter,     DialogInterface.OnClickListener listener )`  Set a list of items, which are supplied by the given `ListAdapter`, to be displayed in the dialog as the content, you will be notified of the selected item via the supplied listener. |
| `AlertDialog.Builder` | `setCancelable(boolean cancelable)`  Sets whether the dialog is cancelable or not. |
| `AlertDialog.Builder` | `setCursor(     Cursor cursor,     DialogInterface.OnClickListener listener,     String labelColumn )`  Set a list of items, which are supplied by the given `Cursor`, to be displayed in the dialog as the content, you will be notified of the selected item via the supplied listener. |
| `AlertDialog.Builder` | `setCustomTitle(@Nullable View customTitleView)`  Set the title using the custom view `customTitleView`. |
| `AlertDialog.Builder` | `setIcon(@Nullable Drawable icon)`  Set the `Drawable` to be used in the title. |
| `AlertDialog.Builder` | `setIcon(@DrawableRes int iconId)`  Set the resource id of the `Drawable` to be used in the title. |
| `AlertDialog.Builder` | `setIconAttribute(@AttrRes int attrId)`  Set an icon as supplied by a theme attribute. e.g. `alertDialogIcon`. |
| `AlertDialog.Builder` | `setInverseBackgroundForced(boolean useInverseBackground)`  **This method is deprecated.** This flag is only used for pre-Material themes. |
| `AlertDialog.Builder` | `setItems(     CharSequence[] items,     DialogInterface.OnClickListener listener )`  Set a list of items to be displayed in the dialog as the content, you will be notified of the selected item via the supplied listener. |
| `AlertDialog.Builder` | `setItems(@ArrayRes int itemsId, DialogInterface.OnClickListener listener)`  Set a list of items to be displayed in the dialog as the content, you will be notified of the selected item via the supplied listener. |
| `AlertDialog.Builder` | `setMessage(@Nullable CharSequence message)`  Set the message to display. |
| `AlertDialog.Builder` | `setMessage(@StringRes int messageId)`  Set the message to display using the given resource id. |
| `AlertDialog.Builder` | `setMultiChoiceItems(     CharSequence[] items,     boolean[] checkedItems,     DialogInterface.OnMultiChoiceClickListener listener )`  Set a list of items to be displayed in the dialog as the content, you will be notified of the selected item via the supplied listener. |
| `AlertDialog.Builder` | `setMultiChoiceItems(     @ArrayRes int itemsId,     boolean[] checkedItems,     DialogInterface.OnMultiChoiceClickListener listener )`  Set a list of items to be displayed in the dialog as the content, you will be notified of the selected item via the supplied listener. |
| `AlertDialog.Builder` | `setMultiChoiceItems(     Cursor cursor,     String isCheckedColumn,     String labelColumn,     DialogInterface.OnMultiChoiceClickListener listener )`  Set a list of items to be displayed in the dialog as the content, you will be notified of the selected item via the supplied listener. |
| `AlertDialog.Builder` | `setNegativeButton(     CharSequence text,     DialogInterface.OnClickListener listener )`  Set a listener to be invoked when the negative button of the dialog is pressed. |
| `AlertDialog.Builder` | `setNegativeButton(     @StringRes int textId,     DialogInterface.OnClickListener listener )`  Set a listener to be invoked when the negative button of the dialog is pressed. |
| `AlertDialog.Builder` | `setNegativeButtonIcon(Drawable icon)`  Set an icon to be displayed for the negative button. |
| `AlertDialog.Builder` | `setNeutralButton(     CharSequence text,     DialogInterface.OnClickListener listener )`  Set a listener to be invoked when the neutral button of the dialog is pressed. |
| `AlertDialog.Builder` | `setNeutralButton(     @StringRes int textId,     DialogInterface.OnClickListener listener )`  Set a listener to be invoked when the neutral button of the dialog is pressed. |
| `AlertDialog.Builder` | `setNeutralButtonIcon(Drawable icon)`  Set an icon to be displayed for the neutral button. |
| `AlertDialog.Builder` | `setOnCancelListener(DialogInterface.OnCancelListener onCancelListener)`  Sets the callback that will be called if the dialog is canceled. |
| `AlertDialog.Builder` | `setOnDismissListener(     DialogInterface.OnDismissListener onDismissListener )`  Sets the callback that will be called when the dialog is dismissed for any reason. |
| `AlertDialog.Builder` | `setOnItemSelectedListener(AdapterView.OnItemSelectedListener listener)`  Sets a listener to be invoked when an item in the list is selected. |
| `AlertDialog.Builder` | `setOnKeyListener(DialogInterface.OnKeyListener onKeyListener)`  Sets the callback that will be called if a key is dispatched to the dialog. |
| `AlertDialog.Builder` | `setPositiveButton(     CharSequence text,     DialogInterface.OnClickListener listener )`  Set a listener to be invoked when the positive button of the dialog is pressed. |
| `AlertDialog.Builder` | `setPositiveButton(     @StringRes int textId,     DialogInterface.OnClickListener listener )`  Set a listener to be invoked when the positive button of the dialog is pressed. |
| `AlertDialog.Builder` | `setPositiveButtonIcon(Drawable icon)`  Set an icon to be displayed for the positive button. |
| `AlertDialog.Builder` | `setSingleChoiceItems(     ListAdapter adapter,     int checkedItem,     DialogInterface.OnClickListener listener )`  Set a list of items to be displayed in the dialog as the content, you will be notified of the selected item via the supplied listener. |
| `AlertDialog.Builder` | `setSingleChoiceItems(     CharSequence[] items,     int checkedItem,     DialogInterface.OnClickListener listener )`  Set a list of items to be displayed in the dialog as the content, you will be notified of the selected item via the supplied listener. |
| `AlertDialog.Builder` | `setSingleChoiceItems(     @ArrayRes int itemsId,     int checkedItem,     DialogInterface.OnClickListener listener )`  Set a list of items to be displayed in the dialog as the content, you will be notified of the selected item via the supplied listener. |
| `AlertDialog.Builder` | `setSingleChoiceItems(     Cursor cursor,     int checkedItem,     String labelColumn,     DialogInterface.OnClickListener listener )`  Set a list of items to be displayed in the dialog as the content, you will be notified of the selected item via the supplied listener. |
| `AlertDialog.Builder` | `setTitle(@Nullable CharSequence title)`  Set the title displayed in the `Dialog`. |
| `AlertDialog.Builder` | `setTitle(@StringRes int titleId)`  Set the title using the given resource id. |
| `AlertDialog.Builder` | `setView(int layoutResId)`  Inflates a custom view resource inside the dialog, below the message and above the buttons. |
| `AlertDialog.Builder` | `setView(View view)`  Sets a custom view to be the contents of the alert dialog. |
| `AlertDialog` | `show()`  Creates an `AlertDialog` with the arguments supplied to this builder and immediately displays the dialog. |

## Public constructors

### Builder

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public Builder(@NonNull Context context)
```

Creates a builder for an alert dialog that uses the default alert dialog theme.

The default alert dialog theme is defined by `alertDialogTheme` within the parent `context`'s theme.

| Parameters |
| --- |
| `@NonNull Context context` | the parent context |

### Builder

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public Builder(@NonNull Context context, @StyleRes int themeResId)
```

Creates a builder for an alert dialog that uses an explicit theme resource.

The specified theme resource (`themeResId`) is applied on top of the parent `context`'s theme. It may be specified as a style resource containing a fully-populated theme, such as `Theme_AppCompat_Dialog`, to replace all attributes in the parent `context`'s theme including primary and accent colors.

To preserve attributes such as primary and accent colors, the `themeResId` may instead be specified as an overlay theme such as `ThemeOverlay_AppCompat_Dialog`. This will override only the window attributes necessary to style the alert window as a dialog.

Alternatively, the `themeResId` may be specified as `0` to use the parent `context`'s resolved value for `alertDialogTheme`.

| Parameters |
| --- |
| `@NonNull Context context` | the parent context |
| `@StyleRes int themeResId` | the resource ID of the theme against which to inflate this dialog, or `0` to use the parent `context`'s default alert dialog theme |

## Public methods

### create

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public @NonNull AlertDialog create()
```

Creates an `AlertDialog` with the arguments supplied to this builder.

Calling this method does not display the dialog. If no additional processing is needed, `show` may be called instead to both create and display the dialog.

### getContext

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public @NonNull Context getContext()
```

Returns a `Context` with the appropriate theme for dialogs created by this Builder. Applications should use this Context for obtaining LayoutInflaters for inflating views that will be used in the resulting dialogs, as it will cause views to be inflated with the correct theme.

| Returns |
| --- |
| `@NonNull Context` | A Context for built Dialogs. |

### setAdapter

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setAdapter(  
    ListAdapter adapter,  
    DialogInterface.OnClickListener listener  
)
```

Set a list of items, which are supplied by the given `ListAdapter`, to be displayed in the dialog as the content, you will be notified of the selected item via the supplied listener.

| Parameters |
| --- |
| `ListAdapter adapter` | The `ListAdapter` to supply the list of items |
| `DialogInterface.OnClickListener listener` | The listener that will be called when an item is clicked. |

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setCancelable

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setCancelable(boolean cancelable)
```

Sets whether the dialog is cancelable or not. Default is true.

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setCursor

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setCursor(  
    Cursor cursor,  
    DialogInterface.OnClickListener listener,  
    String labelColumn  
)
```

Set a list of items, which are supplied by the given `Cursor`, to be displayed in the dialog as the content, you will be notified of the selected item via the supplied listener.

| Parameters |
| --- |
| `Cursor cursor` | The `Cursor` to supply the list of items |
| `DialogInterface.OnClickListener listener` | The listener that will be called when an item is clicked. |
| `String labelColumn` | The column name on the cursor containing the string to display in the label. |

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setCustomTitle

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setCustomTitle(@Nullable View customTitleView)
```

Set the title using the custom view `customTitleView`.

The methods `setTitle` and `setIcon` should be sufficient for most titles, but this is provided if the title needs more customization. Using this will replace the title and icon set via the other methods.

**Note:** To ensure consistent styling, the custom view should be inflated or constructed using the alert dialog's themed context obtained via `getContext`.

| Parameters |
| --- |
| `@Nullable View customTitleView` | the custom view to use as the title |

| Returns |
| --- |
| `AlertDialog.Builder` | this Builder object to allow for chaining of calls to set methods |

### setIcon

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setIcon(@Nullable Drawable icon)
```

Set the `Drawable` to be used in the title.

**Note:** To ensure consistent styling, the drawable should be inflated or constructed using the alert dialog's themed context obtained via `getContext`.

| Returns |
| --- |
| `AlertDialog.Builder` | this Builder object to allow for chaining of calls to set methods |

### setIcon

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setIcon(@DrawableRes int iconId)
```

Set the resource id of the `Drawable` to be used in the title.

Takes precedence over values set using `setIcon`.

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setIconAttribute

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setIconAttribute(@AttrRes int attrId)
```

Set an icon as supplied by a theme attribute. e.g. `alertDialogIcon`.

Takes precedence over values set using `setIcon` or `setIcon`.

| Parameters |
| --- |
| `@AttrRes int attrId` | ID of a theme attribute that points to a drawable resource. |

### setInverseBackgroundForced

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setInverseBackgroundForced(boolean useInverseBackground)
```

**This method is deprecated.**  

This flag is only used for pre-Material themes. Instead, specify the window background using on the alert dialog theme.

Sets the Dialog to use the inverse background, regardless of what the contents is.

| Parameters |
| --- |
| `boolean useInverseBackground` | Whether to use the inverse background |

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setItems

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setItems(  
    CharSequence[] items,  
    DialogInterface.OnClickListener listener  
)
```

Set a list of items to be displayed in the dialog as the content, you will be notified of the selected item via the supplied listener.

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setItems

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setItems(@ArrayRes int itemsId, DialogInterface.OnClickListener listener)
```

Set a list of items to be displayed in the dialog as the content, you will be notified of the selected item via the supplied listener. This should be an array type i.e. R.array.foo

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setMessage

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setMessage(@Nullable CharSequence message)
```

Set the message to display.

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setMessage

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setMessage(@StringRes int messageId)
```

Set the message to display using the given resource id.

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setMultiChoiceItems

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setMultiChoiceItems(  
    CharSequence[] items,  
    boolean[] checkedItems,  
    DialogInterface.OnMultiChoiceClickListener listener  
)
```

Set a list of items to be displayed in the dialog as the content, you will be notified of the selected item via the supplied listener. The list will have a check mark displayed to the right of the text for each checked item. Clicking on an item in the list will not dismiss the dialog. Clicking on a button will dismiss the dialog.

| Parameters |
| --- |
| `CharSequence[] items` | the text of the items to be displayed in the list. |
| `boolean[] checkedItems` | specifies which items are checked. It should be null in which case no items are checked. If non null it must be exactly the same length as the array of items. |
| `DialogInterface.OnMultiChoiceClickListener listener` | notified when an item on the list is clicked. The dialog will not be dismissed when an item is clicked. It will only be dismissed if clicked on a button, if no buttons are supplied it's up to the user to dismiss the dialog. |

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setMultiChoiceItems

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setMultiChoiceItems(  
    @ArrayRes int itemsId,  
    boolean[] checkedItems,  
    DialogInterface.OnMultiChoiceClickListener listener  
)
```

Set a list of items to be displayed in the dialog as the content, you will be notified of the selected item via the supplied listener. This should be an array type, e.g. R.array.foo. The list will have a check mark displayed to the right of the text for each checked item. Clicking on an item in the list will not dismiss the dialog. Clicking on a button will dismiss the dialog.

| Parameters |
| --- |
| `@ArrayRes int itemsId` | the resource id of an array i.e. R.array.foo |
| `boolean[] checkedItems` | specifies which items are checked. It should be null in which case no items are checked. If non null it must be exactly the same length as the array of items. |
| `DialogInterface.OnMultiChoiceClickListener listener` | notified when an item on the list is clicked. The dialog will not be dismissed when an item is clicked. It will only be dismissed if clicked on a button, if no buttons are supplied it's up to the user to dismiss the dialog. |

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setMultiChoiceItems

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setMultiChoiceItems(  
    Cursor cursor,  
    String isCheckedColumn,  
    String labelColumn,  
    DialogInterface.OnMultiChoiceClickListener listener  
)
```

Set a list of items to be displayed in the dialog as the content, you will be notified of the selected item via the supplied listener. The list will have a check mark displayed to the right of the text for each checked item. Clicking on an item in the list will not dismiss the dialog. Clicking on a button will dismiss the dialog.

| Parameters |
| --- |
| `Cursor cursor` | the cursor used to provide the items. |
| `String isCheckedColumn` | specifies the column name on the cursor to use to determine whether a checkbox is checked or not. It must return an integer value where 1 means checked and 0 means unchecked. |
| `String labelColumn` | The column name on the cursor containing the string to display in the label. |
| `DialogInterface.OnMultiChoiceClickListener listener` | notified when an item on the list is clicked. The dialog will not be dismissed when an item is clicked. It will only be dismissed if clicked on a button, if no buttons are supplied it's up to the user to dismiss the dialog. |

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setNegativeButton

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setNegativeButton(  
    CharSequence text,  
    DialogInterface.OnClickListener listener  
)
```

Set a listener to be invoked when the negative button of the dialog is pressed.

| Parameters |
| --- |
| `CharSequence text` | The text to display in the negative button |
| `DialogInterface.OnClickListener listener` | The `DialogInterface.OnClickListener` to use. |

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setNegativeButton

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setNegativeButton(  
    @StringRes int textId,  
    DialogInterface.OnClickListener listener  
)
```

Set a listener to be invoked when the negative button of the dialog is pressed.

| Parameters |
| --- |
| `@StringRes int textId` | The resource id of the text to display in the negative button |
| `DialogInterface.OnClickListener listener` | The `DialogInterface.OnClickListener` to use. |

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setNegativeButtonIcon

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setNegativeButtonIcon(Drawable icon)
```

Set an icon to be displayed for the negative button.

| Parameters |
| --- |
| `Drawable icon` | The icon to be displayed |

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setNeutralButton

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setNeutralButton(  
    CharSequence text,  
    DialogInterface.OnClickListener listener  
)
```

Set a listener to be invoked when the neutral button of the dialog is pressed.

| Parameters |
| --- |
| `CharSequence text` | The text to display in the neutral button |
| `DialogInterface.OnClickListener listener` | The `DialogInterface.OnClickListener` to use. |

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setNeutralButton

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setNeutralButton(  
    @StringRes int textId,  
    DialogInterface.OnClickListener listener  
)
```

Set a listener to be invoked when the neutral button of the dialog is pressed.

| Parameters |
| --- |
| `@StringRes int textId` | The resource id of the text to display in the neutral button |
| `DialogInterface.OnClickListener listener` | The `DialogInterface.OnClickListener` to use. |

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setNeutralButtonIcon

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setNeutralButtonIcon(Drawable icon)
```

Set an icon to be displayed for the neutral button.

| Parameters |
| --- |
| `Drawable icon` | The icon to be displayed |

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setOnCancelListener

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setOnCancelListener(DialogInterface.OnCancelListener onCancelListener)
```

Sets the callback that will be called if the dialog is canceled.

Even in a cancelable dialog, the dialog may be dismissed for reasons other than being canceled or one of the supplied choices being selected. If you are interested in listening for all cases where the dialog is dismissed and not just when it is canceled, see `setOnDismissListener`.

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

| See also |
| --- |
| `setCancelable` |  |
| `setOnDismissListener` |  |

### setOnDismissListener

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setOnDismissListener(  
    DialogInterface.OnDismissListener onDismissListener  
)
```

Sets the callback that will be called when the dialog is dismissed for any reason.

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setOnItemSelectedListener

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setOnItemSelectedListener(AdapterView.OnItemSelectedListener listener)
```

Sets a listener to be invoked when an item in the list is selected.

| Parameters |
| --- |
| `AdapterView.OnItemSelectedListener listener` | the listener to be invoked |

| Returns |
| --- |
| `AlertDialog.Builder` | this Builder object to allow for chaining of calls to set methods |

| See also |
| --- |
| `setOnItemSelectedListener` |  |

### setOnKeyListener

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setOnKeyListener(DialogInterface.OnKeyListener onKeyListener)
```

Sets the callback that will be called if a key is dispatched to the dialog.

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setPositiveButton

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setPositiveButton(  
    CharSequence text,  
    DialogInterface.OnClickListener listener  
)
```

Set a listener to be invoked when the positive button of the dialog is pressed.

| Parameters |
| --- |
| `CharSequence text` | The text to display in the positive button |
| `DialogInterface.OnClickListener listener` | The `DialogInterface.OnClickListener` to use. |

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setPositiveButton

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setPositiveButton(  
    @StringRes int textId,  
    DialogInterface.OnClickListener listener  
)
```

Set a listener to be invoked when the positive button of the dialog is pressed.

| Parameters |
| --- |
| `@StringRes int textId` | The resource id of the text to display in the positive button |
| `DialogInterface.OnClickListener listener` | The `DialogInterface.OnClickListener` to use. |

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setPositiveButtonIcon

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setPositiveButtonIcon(Drawable icon)
```

Set an icon to be displayed for the positive button.

| Parameters |
| --- |
| `Drawable icon` | The icon to be displayed |

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setSingleChoiceItems

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setSingleChoiceItems(  
    ListAdapter adapter,  
    int checkedItem,  
    DialogInterface.OnClickListener listener  
)
```

Set a list of items to be displayed in the dialog as the content, you will be notified of the selected item via the supplied listener. The list will have a check mark displayed to the right of the text for the checked item. Clicking on an item in the list will not dismiss the dialog. Clicking on a button will dismiss the dialog.

| Parameters |
| --- |
| `ListAdapter adapter` | The `ListAdapter` to supply the list of items |
| `int checkedItem` | specifies which item is checked. If -1 no items are checked. |
| `DialogInterface.OnClickListener listener` | notified when an item on the list is clicked. The dialog will not be dismissed when an item is clicked. It will only be dismissed if clicked on a button, if no buttons are supplied it's up to the user to dismiss the dialog. |

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setSingleChoiceItems

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setSingleChoiceItems(  
    CharSequence[] items,  
    int checkedItem,  
    DialogInterface.OnClickListener listener  
)
```

Set a list of items to be displayed in the dialog as the content, you will be notified of the selected item via the supplied listener. The list will have a check mark displayed to the right of the text for the checked item. Clicking on an item in the list will not dismiss the dialog. Clicking on a button will dismiss the dialog.

| Parameters |
| --- |
| `CharSequence[] items` | the items to be displayed. |
| `int checkedItem` | specifies which item is checked. If -1 no items are checked. |
| `DialogInterface.OnClickListener listener` | notified when an item on the list is clicked. The dialog will not be dismissed when an item is clicked. It will only be dismissed if clicked on a button, if no buttons are supplied it's up to the user to dismiss the dialog. |

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setSingleChoiceItems

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setSingleChoiceItems(  
    @ArrayRes int itemsId,  
    int checkedItem,  
    DialogInterface.OnClickListener listener  
)
```

Set a list of items to be displayed in the dialog as the content, you will be notified of the selected item via the supplied listener. This should be an array type i.e. R.array.foo The list will have a check mark displayed to the right of the text for the checked item. Clicking on an item in the list will not dismiss the dialog. Clicking on a button will dismiss the dialog.

| Parameters |
| --- |
| `@ArrayRes int itemsId` | the resource id of an array i.e. R.array.foo |
| `int checkedItem` | specifies which item is checked. If -1 no items are checked. |
| `DialogInterface.OnClickListener listener` | notified when an item on the list is clicked. The dialog will not be dismissed when an item is clicked. It will only be dismissed if clicked on a button, if no buttons are supplied it's up to the user to dismiss the dialog. |

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setSingleChoiceItems

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setSingleChoiceItems(  
    Cursor cursor,  
    int checkedItem,  
    String labelColumn,  
    DialogInterface.OnClickListener listener  
)
```

Set a list of items to be displayed in the dialog as the content, you will be notified of the selected item via the supplied listener. The list will have a check mark displayed to the right of the text for the checked item. Clicking on an item in the list will not dismiss the dialog. Clicking on a button will dismiss the dialog.

| Parameters |
| --- |
| `Cursor cursor` | the cursor to retrieve the items from. |
| `int checkedItem` | specifies which item is checked. If -1 no items are checked. |
| `String labelColumn` | The column name on the cursor containing the string to display in the label. |
| `DialogInterface.OnClickListener listener` | notified when an item on the list is clicked. The dialog will not be dismissed when an item is clicked. It will only be dismissed if clicked on a button, if no buttons are supplied it's up to the user to dismiss the dialog. |

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setTitle

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setTitle(@Nullable CharSequence title)
```

Set the title displayed in the `Dialog`.

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setTitle

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setTitle(@StringRes int titleId)
```

Set the title using the given resource id.

| Returns |
| --- |
| `AlertDialog.Builder` | This Builder object to allow for chaining of calls to set methods |

### setView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setView(int layoutResId)
```

Inflates a custom view resource inside the dialog, below the message and above the buttons. If none of the other parts of the dialog are made visible, the custom view occupies the entire view. Because the view is inflated inside the parent dialog's view, take care not to define conflicting resource IDs.

| Parameters |
| --- |
| `int layoutResId` | Resource ID to be inflated. |

| Returns |
| --- |
| `AlertDialog.Builder` | this Builder object to allow for chaining of calls to set methods |

### setView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog.Builder setView(View view)
```

Sets a custom view to be the contents of the alert dialog.

When using a pre-Holo theme, if the supplied view is an instance of a `ListView` then the light background will be used.

**Note:** To ensure consistent styling, the custom view should be inflated or constructed using the alert dialog's themed context obtained via `getContext`.

| Parameters |
| --- |
| `View view` | the view to use as the contents of the alert dialog |

| Returns |
| --- |
| `AlertDialog.Builder` | this Builder object to allow for chaining of calls to set methods |

### show

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AlertDialog show()
```

Creates an `AlertDialog` with the arguments supplied to this builder and immediately displays the dialog.

Calling this method is functionally identical to:

```
    AlertDialog dialog = builder.create();
    dialog.show();
```
