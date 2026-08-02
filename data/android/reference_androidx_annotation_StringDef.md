# StringDef

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/annotation/StringDef))

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/StringDef.kt+class:androidx.annotation.StringDef)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/StringDef "View this page in Kotlin")
|Java

```
@Retention(value = AnnotationRetention.SOURCE)  
@Target(allowedTargets = [AnnotationTarget.ANNOTATION_CLASS])  
public annotation StringDef
```

---

Denotes that the annotated String element, represents a logical type and that its value should be one of the explicitly named constants.

Example:

```
@Retention(SOURCE)  
@StringDef({  
    POWER_SERVICE,  
    WINDOW_SERVICE,  
    LAYOUT_INFLATER_SERVICE  
})  
public @interface ServiceName {}  
public static final String POWER_SERVICE = "power";  
public static final String WINDOW_SERVICE = "window";  
public static final String LAYOUT_INFLATER_SERVICE = "layout_inflater";  
...  
public abstract Object getSystemService(@ServiceName String name);
```

## Summary

| Public constructors |
| --- |
| `StringDef(@NonNull String... value, boolean open)` |

| Public methods |
| --- |
| `final boolean` | `getOpen()`  Whether any other values are allowed. |
| `final @NonNull String[]` | `getValue()`  Defines the allowed constants for this element |

## Public constructors

### StringDef

Added in [1.10.0](/jetpack/androidx/releases/annotation#1.10.0)

```
public StringDef(@NonNull String... value, boolean open)
```

## Public methods

### getOpen

```
public final boolean getOpen()
```

Whether any other values are allowed. Normally this is not the case, but this allows you to specify a set of expected constants, which helps code completion in the IDE and documentation generation and so on, but without flagging compilation warnings if other values are specified.

### getValue

```
public final @NonNull String[] getValue()
```

Defines the allowed constants for this element
