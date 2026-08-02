# ActivityViewModelLazyKt

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/ActivityViewModelLazyKt))

Added in 1.9.0

---

[Kotlin](/reference/kotlin/androidx/activity/package-summary "View this page in Kotlin")
|Java

```
public final class ActivityViewModelLazyKt
```

---

## Summary

| Public methods |
| --- |
| `static final @NonNull Lazy<@NonNull VM>` | `@MainThread <VM extends ViewModel> viewModels(     @NonNull ComponentActivity receiver,     Function0<@NonNull CreationExtras> extrasProducer,     Function0<@NonNull ViewModelProvider.Factory> factoryProducer )`  Returns a `Lazy` delegate to access the ComponentActivity's ViewModel, if `factoryProducer` is specified then `ViewModelProvider.Factory` returned by it will be used to create `ViewModel` first time. |

## Public methods

### viewModels

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/ActivityViewModelLazy.kt+function:viewModels)

```
@MainThread  
public static final @NonNull Lazy<@NonNull VM> <VM extends ViewModel> viewModels(  
    @NonNull ComponentActivity receiver,  
    Function0<@NonNull CreationExtras> extrasProducer,  
    Function0<@NonNull ViewModelProvider.Factory> factoryProducer  
)
```

Returns a `Lazy` delegate to access the ComponentActivity's ViewModel, if `factoryProducer` is specified then `ViewModelProvider.Factory` returned by it will be used to create `ViewModel` first time.

```
class MyComponentActivity : ComponentActivity() {  
    val viewmodel: MyViewModel by viewModels()  
}
```

This property can be accessed only after the Activity is attached to the Application, and access prior to that will result in IllegalArgumentException.
