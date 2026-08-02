# RequiresPermission

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/annotation/RequiresPermission))

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/RequiresPermission.jvm.kt+class:androidx.annotation.RequiresPermission)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/RequiresPermission "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.ANNOTATION_CLASS, AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.CONSTRUCTOR, AnnotationTarget.FIELD, AnnotationTarget.VALUE_PARAMETER])  
public annotation RequiresPermission
```

---

Denotes that the annotated element requires (or may require) one or more permissions.

Example of requiring a single permission:

```
@RequiresPermission(Manifest.permission.SET_WALLPAPER)  
public abstract void setWallpaper(Bitmap bitmap) throws IOException;  
  
@RequiresPermission(ACCESS_COARSE_LOCATION)  
public abstract Location getLastKnownLocation(String provider);
```

Example of requiring at least one permission from a set:

```
@RequiresPermission(anyOf = {ACCESS_COARSE_LOCATION, ACCESS_FINE_LOCATION})  
public abstract Location getLastKnownLocation(String provider);
```

Example of requiring multiple permissions:

```
@RequiresPermission(allOf = {ACCESS_COARSE_LOCATION, ACCESS_FINE_LOCATION})  
public abstract Location getLastKnownLocation(String provider);
```

Example of requiring separate read and write permissions for a content provider:

```
@RequiresPermission.Read(RequiresPermission(READ_HISTORY_BOOKMARKS))  
@RequiresPermission.Write(RequiresPermission(WRITE_HISTORY_BOOKMARKS))  
public static final Uri BOOKMARKS_URI = Uri.parse("content://browser/bookmarks");
```

When specified on a parameter, the annotation indicates that the method requires a permission which depends on the value of the parameter. For example, consider `android.app.Activity.startActivity(android.content.Intent)`:

```
public void startActivity(@RequiresPermission Intent intent) { ... }
```

Notice how there are no actual permission names listed in the annotation. The actual permissions required will depend on the particular intent passed in. For example, the code may look like this:

```
Intent intent = new Intent(Intent.ACTION_CALL);  
startActivity(intent);
```

and the actual permission requirement for this particular intent is described on the Intent name itself:

```
@RequiresPermission(Manifest.permission.CALL_PHONE)  
public static final String ACTION_CALL = "android.intent.action.CALL";
```

## Summary

| Nested types |
| --- |
| `@Target(allowedTargets = [AnnotationTarget.FIELD, AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.VALUE_PARAMETER]) public annotation RequiresPermission.Read`  Specifies that the given permission is required for read operations. |
| `@Target(allowedTargets = [AnnotationTarget.FIELD, AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.VALUE_PARAMETER]) public annotation RequiresPermission.Write`  Specifies that the given permission is required for write operations. |

| Public constructors |
| --- |
| `RequiresPermission(     @NonNull String value,     @NonNull String[] allOf,     @NonNull String[] anyOf,     boolean conditional )` |

| Public methods |
| --- |
| `final @NonNull String[]` | `getAllOf()`  Specifies a list of permission names that are all required. |
| `final @NonNull String[]` | `getAnyOf()`  Specifies a list of permission names where at least one is required |
| `final boolean` | `getConditional()`  If true, the permission may not be required in all cases (e.g. it may only be enforced on certain platforms, or for certain call parameters, etc. |
| `final @NonNull String` | `getValue()`  The name of the permission that is required, if precisely one permission is required. |

## Public constructors

### RequiresPermission

Added in [1.10.0](/jetpack/androidx/releases/annotation#1.10.0)

```
public RequiresPermission(  
    @NonNull String value,  
    @NonNull String[] allOf,  
    @NonNull String[] anyOf,  
    boolean conditional  
)
```

## Public methods

### getAllOf

```
public final @NonNull String[] getAllOf()
```

Specifies a list of permission names that are all required.

If specified, `anyOf` and `value` must both be null.

### getAnyOf

```
public final @NonNull String[] getAnyOf()
```

Specifies a list of permission names where at least one is required

If specified, `allOf` and `value` must both be null.

### getConditional

```
public final boolean getConditional()
```

If true, the permission may not be required in all cases (e.g. it may only be enforced on certain platforms, or for certain call parameters, etc.

### getValue

```
public final @NonNull String getValue()
```

The name of the permission that is required, if precisely one permission is required. If more than one permission is required, specify either `allOf` or `anyOf` instead.

If specified, `anyOf` and `allOf` must both be null.
