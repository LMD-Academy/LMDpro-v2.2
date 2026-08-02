--- source: https://developer.android.com/reference/androidx/annotation/package-summary ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# androidx.annotation

---

[Kotlin](/reference/kotlin/androidx/annotation/package-summary "View this page in Kotlin")
|Java

## Annotations

|  |  |
| --- | --- |
| `AnimRes` | Denotes that an integer parameter, field or method return value is expected to be an anim resource reference (e.g. `android.R.anim.fade_in`). |
| `AnimatorRes` | Denotes that an integer parameter, field or method return value is expected to be an animator resource reference (e.g. `android.R.animator.fade_in`). |
| `AnyRes` | Denotes that an integer parameter, field or method return value is expected to be a resource reference of any type. |
| `AnyThread` | Denotes that the annotated method can be called from any thread (e.g. it is "thread safe".) If the annotated element is a class, then all methods in the class can be called from any thread. |
| `ArrayRes` | Denotes that an integer parameter, field or method return value is expected to be an array resource reference (e.g. `android.R.array.phoneTypes`). |
| `AttrRes` | Denotes that an integer parameter, field or method return value is expected to be an attribute reference (e.g. `android.R.attr.action`). |
| `BinderThread` | Denotes that the annotated method should only be called on the binder thread. |
| `BoolRes` | Denotes that an integer parameter, field or method return value is expected to be a boolean resource reference. |
| `CallSuper` | Denotes that any overriding methods should invoke this method as well. |
| `CheckResult` | Denotes that the annotated method returns a result that it typically is an error to ignore. |
| `ChecksSdkIntAtLeast` | Denotes that the annotated method checks if the SDK\_INT API level is at least the given value, and either returns it or executes the given lambda in that case (or if it's a field, has the value true). |
| `ColorInt` | Denotes that the annotated element represents a packed color int, `AARRGGBB`. |
| `ColorLong` | Denotes that the annotated element represents a packed color long. |
| `ColorRes` | Denotes that an integer parameter, field or method return value is expected to be a color resource reference (e.g. `android.R.color.black`). |
| `ContentView` | Annotation that can be attached to a constructor with a single `LayoutRes` parameter to denote what layout the component intends to inflate and set as its content. |
| `DeprecatedSinceApi` | Denotes that this API is only useful until the given API level; after that, a more suitable platform API is available. |
| `DimenRes` | Denotes that an integer parameter, field or method return value is expected to be a dimension resource reference (e.g. `android.R.dimen.app_icon_size`). |
| `Dimension` | Denotes that an integer parameter, field or method return value is expected to represent a dimension. |
| `Discouraged` | Denotes that the annotated element, while not disallowed or deprecated, is one that programmers are generally discouraged from using. |
| `DisplayContext` | Denotes a `android.content.Context` that is tied to a `android.view.Display` and can be used to obtain one via `android.content.Context.getDisplay`. |
| `DoNotInline` | Denotes that the annotated method should not be inlined when the code is optimized at build time. |
| `DrawableRes` | Denotes that an integer parameter, field or method return value is expected to be a drawable resource reference (e.g. `android.R.attr.alertDialogIcon`). |
| `EmptySuper` | Denotes that any overriding methods should **not** invoke this method, since it is defined to be empty (or perhaps contain other code not intended to be run when overridden). |
| `FloatRange` | Denotes that the annotated element should be a float or double in the given range |
| `FontRes` | Denotes that an integer parameter, field or method return value is expected to be a font resource reference (e.g. |
| `FractionRes` | Denotes that an integer parameter, field or method return value is expected to be a fraction resource reference. |
| `GravityInt` | Denotes that the annotated element represents a packed gravity int. |
| `GuardedBy` | Denotes that the annotated method or field can only be accessed when holding the referenced lock. |
| `HalfFloat` | Denotes that the annotated element represents a half-precision floating point value. |
| `IdRes` | Denotes that an integer parameter, field or method return value is expected to be an id resource reference (e.g. `android.R.id.copy`). |
| `InspectableProperty` | **This annotation is deprecated.** Replaced by the androidx.resourceinpsection package. |
| `InspectableProperty.EnumEntry` | **This annotation is deprecated.** Replaced by the androidx.resourceinpsection package. |
| `InspectableProperty.FlagEntry` | **This annotation is deprecated.** Replaced by the androidx.resourceinpsection package. |
| `IntDef` | Denotes that the annotated element of integer type, represents a logical type and that its value should be one of the explicitly named constants. |
| `IntRange` | Denotes that the annotated element should be an int or long in the given range. |
| `IntegerRes` | Denotes that an integer parameter, field or method return value is expected to be an integer resource reference (e.g. `android.R.integer.config_shortAnimTime`). |
| `InterpolatorRes` | Denotes that an integer parameter, field or method return value is expected to be an interpolator resource reference (e.g. `android.R.interpolator.cycle`). |
| `Keep` | Denotes that the annotated element should not be removed when the code is minified at build time. |
| `LayoutRes` | Denotes that an integer parameter, field or method return value is expected to be a layout resource reference (e.g. `android.R.layout.list_content`). |
| `LongDef` | Denotes that the annotated long element represents a logical type and that its value should be one of the explicitly named constants. |
| `MainThread` | Denotes that the annotated method should only be called on the main thread. |
| `MenuRes` | Denotes that an integer parameter, field or method return value is expected to be a menu resource reference. |
| `NavigationRes` | Denotes that an integer parameter, field or method return value is expected to be a navigation resource reference (e.g. |
| `NonNull` | Denotes that a parameter, field or method return value can never be null. |
| `NonUiContext` | Denotes a `android.content.Context` that **can not** be used to obtain a `android.view.Display` via `android.content.Context.getDisplay` nor to obtain an instance of a visual service, such a `android.view.WindowManager`, `android.view.LayoutInflater` or `android.app.WallpaperManager` via `android.content.Context.getSystemService`. |
| `Nullable` | Denotes that a parameter, field or method return value can be null. |
| `OpenForTesting` | Denotes that this class or method is only `open` to allow unit testing. |
| `OptIn` | Allows use of an opt-in API denoted by the given markers in the annotated file, declaration, or expression. |
| `PluralsRes` | Denotes that an integer parameter, field or method return value is expected to be a plurals resource reference. |
| `Px` | Denotes that an integer parameter, field or method return value is expected to represent a pixel dimension. |
| `RawRes` | Denotes that an integer parameter, field or method return value is expected to be a raw resource reference. |
| `ReplaceWith` | Specifies a code fragment that can be used to suggest a replacement for a method in conjunction with the `ReplaceWith` lint check. |
| `RequiresApi` | Denotes that the annotated element should only be called on the given Android API level or higher. |
| `RequiresExtension` | Denotes that the annotated element should only be called if the given extension is at least the given version. |
| `RequiresFeature` | Denotes that the annotated element requires one or more features. |
| `RequiresFlag` | Indicates an API is part of a feature that is guarded by an aconfig flag, and only available if the flag is enabled. |
| `RequiresOptIn` | Denotes that the annotated element is a marker of an opt-in API. |
| `RequiresPermission` | Denotes that the annotated element requires (or may require) one or more permissions. |
| `RequiresPermission.Read` | Specifies that the given permission is required for read operations. |
| `RequiresPermission.Write` | Specifies that the given permission is required for write operations. |
| `RestrictTo` | Denotes that the annotated element should only be accessed from within a specific scope (as defined by `Scope`). |
| `ReturnThis` | Denotes that any overriding methods should `return this`. |
| `Size` | Denotes that the annotated element should have a given size or length. |
| `StringDef` | Denotes that the annotated String element, represents a logical type and that its value should be one of the explicitly named constants. |
| `StringRes` | Denotes that an integer parameter, field or method return value is expected to be a String resource reference (e.g. `android.R.string.ok`). |
| `StyleRes` | Denotes that an integer parameter, field or method return value is expected to be a style resource reference (e.g. `android.R.style.TextAppearance`). |
| `StyleableRes` | Denotes that an integer parameter, field or method return value is expected to be a styleable resource reference (e.g. `android.R.styleable.TextView_text`). |
| `TransitionRes` | Denotes that an integer parameter, field or method return value is expected to be a transition resource reference. |
| `UiContext` | Denotes a `android.content.Context` that can be used to create UI, meaning that it can provide a `android.view.Display` via `android.content.Context.getDisplay` and can be used to obtain an instance of a UI-related service, such as `android.view.WindowManager`, `android.view.LayoutInflater` or `android.app.WallpaperManager` via `android.content.Context.getSystemService`. |
| `UiThread` | Denotes that the annotated method or constructor should only be called on the UI thread. |
| `VisibleForTesting` | Denotes that the class, method, or field has its visibility relaxed so that it is more widely visible than otherwise necessary to make code testable. |
| `WorkerThread` | Denotes that the annotated method should only be called on a worker thread. |
| `XmlRes` | Denotes that an integer parameter, field or method return value is expected to be an XML resource reference. |

## Enums

|  |  |
| --- | --- |
| `InspectableProperty.ValueType` | **This enum is deprecated.** Replaced by the androidx.resourceinpsection package. |
| `RequiresOptIn.Level` | Severity of the diagnostic that should be reported on usages of opt-in API which did not explicitly accept the opt-in aspect of that API either by: |
| `RestrictTo.Scope` |  |