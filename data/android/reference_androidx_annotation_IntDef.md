# IntDef

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/annotation/IntDef))

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/IntDef.kt+class:androidx.annotation.IntDef)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/IntDef "View this page in Kotlin")
|Java

```
@Retention(value = AnnotationRetention.SOURCE)  
@Target(allowedTargets = [AnnotationTarget.ANNOTATION_CLASS])  
public annotation IntDef
```

---

Denotes that the annotated element of integer type, represents a logical type and that its value should be one of the explicitly named constants. If the IntDef#flag() attribute is set to true, multiple constants can be combined.

Example:

```
@Retention(SOURCE)  
@IntDef({NAVIGATION_MODE_STANDARD, NAVIGATION_MODE_LIST, NAVIGATION_MODE_TABS})  
public @interface NavigationMode {}  
public static final int NAVIGATION_MODE_STANDARD = 0;  
public static final int NAVIGATION_MODE_LIST = 1;  
public static final int NAVIGATION_MODE_TABS = 2;  
...  
public abstract void setNavigationMode(@NavigationMode int mode);  
  
@NavigationMode  
public abstract int getNavigationMode();
```

For a flag, set the flag attribute:

```
@IntDef(  
flag = true,  
value = {NAVIGATION_MODE_STANDARD, NAVIGATION_MODE_LIST, NAVIGATION_MODE_TABS}  
)
```

| See also |
| --- |
| `LongDef` |  |

## Summary

| Public constructors |
| --- |
| `IntDef(int... value, boolean flag, boolean open)` |

| Public methods |
| --- |
| `final boolean` | `getFlag()`  Defines whether the constants can be used as a flag, or just as an enum (the default) |
| `final boolean` | `getOpen()`  Whether any other values are allowed. |
| `final @NonNull int[]` | `getValue()`  Defines the allowed constants for this element |

## Public constructors

### IntDef

Added in [1.10.0](/jetpack/androidx/releases/annotation#1.10.0)

```
public IntDef(int... value, boolean flag, boolean open)
```

## Public methods

### getFlag

```
public final boolean getFlag()
```

Defines whether the constants can be used as a flag, or just as an enum (the default)

### getOpen

```
public final boolean getOpen()
```

Whether any other values are allowed. Normally this is not the case, but this allows you to specify a set of expected constants, which helps code completion in the IDE and documentation generation and so on, but without flagging compilation warnings if other values are specified.

### getValue

```
public final @NonNull int[] getValue()
```

Defines the allowed constants for this element
