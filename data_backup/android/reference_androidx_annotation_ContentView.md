--- source: https://developer.android.com/reference/androidx/annotation/ContentView ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ContentView

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/ContentView.jvm.kt+class:androidx.annotation.ContentView)

Added in [1.1.0](/jetpack/androidx/releases/annotation#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/ContentView "View this page in Kotlin")
|Java

```
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.CONSTRUCTOR])  
public annotation ContentView
```

---

Annotation that can be attached to a constructor with a single `LayoutRes` parameter to denote what layout the component intends to inflate and set as its content.

It is strongly recommended that components that support this annotation specifically call it out in their documentation.

```
public class MainFragment extends Fragment {  
    public MainFragment() {  
        // This constructor is annotated with @ContentView  
        super(R.layout.main);  
    }  
}
```

| See also |
| --- |
| `ComponentActivity.ComponentActivity` |  |
| `Fragment.Fragment` |  |

## Summary

| Public constructors |
| --- |
| `ContentView()` |

## Public constructors

### ContentView

```
public ContentView()
```