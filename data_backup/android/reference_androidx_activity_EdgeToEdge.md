--- source: https://developer.android.com/reference/androidx/activity/EdgeToEdge ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# EdgeToEdge

Added in 1.8.0

---

[Kotlin](/reference/kotlin/androidx/activity/package-summary "View this page in Kotlin")
|Java

```
public final class EdgeToEdge
```

---

## Summary

| Public methods |
| --- |
| `static final void` | `enable(     @NonNull ComponentActivity receiver,     @NonNull SystemBarStyle statusBarStyle,     @NonNull SystemBarStyle navigationBarStyle )`  Enables the edge-to-edge display for this `ComponentActivity`. |

## Public methods

### enable

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/EdgeToEdge.kt+function:enableEdgeToEdge)

Added in [1.8.0](/jetpack/androidx/releases/activity#1.8.0)

```
public static final void enable(  
    @NonNull ComponentActivity receiver,  
    @NonNull SystemBarStyle statusBarStyle,  
    @NonNull SystemBarStyle navigationBarStyle  
)
```

Enables the edge-to-edge display for this `ComponentActivity`.

To set it up with the default style, call this method in your Activity's onCreate method:

```
    override fun onCreate(savedInstanceState: Bundle?) {  
        enableEdgeToEdge()  
        super.onCreate(savedInstanceState)  
        ...  
    }
```

The default style configures the system bars with a transparent background when contrast can be enforced by the system (API 29 or above). On older platforms (which only have 3-button/2-button navigation modes), an equivalent scrim is applied to ensure contrast with the system bars.

See `SystemBarStyle` for more customization options.

| Parameters |
| --- |
| `@NonNull SystemBarStyle statusBarStyle` | The `SystemBarStyle` for the status bar. |
| `@NonNull SystemBarStyle navigationBarStyle` | The `SystemBarStyle` for the navigation bar. |