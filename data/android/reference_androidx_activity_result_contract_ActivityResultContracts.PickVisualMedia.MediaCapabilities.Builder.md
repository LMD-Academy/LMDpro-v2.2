# ActivityResultContracts.PickVisualMedia.MediaCapabilities.Builder

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/result/contract/ActivityResultContracts.PickVisualMedia.MediaCapabilities.Builder))

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/contract/ActivityResultContracts.kt+class:androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia.MediaCapabilities.Builder)

Added in [1.11.0](/jetpack/androidx/releases/activity#1.11.0)

---

[Kotlin](/reference/kotlin/androidx/activity/result/contract/ActivityResultContracts.PickVisualMedia.MediaCapabilities.Builder "View this page in Kotlin")
|Java

```
public final class ActivityResultContracts.PickVisualMedia.MediaCapabilities.Builder
```

---

A builder for constructing `MediaCapabilities` instances.

## Summary

| Public constructors |
| --- |
| `Builder()` |

| Public methods |
| --- |
| `final @NonNull ActivityResultContracts.PickVisualMedia.MediaCapabilities.Builder` | `addSupportedHdrType(int hdrType)`  Adds the supported HDR (High Dynamic Range) types for media capabilities. |
| `final @NonNull ActivityResultContracts.PickVisualMedia.MediaCapabilities` | `build()`  Build the MediaCapabilities specified by this builder. |

## Public constructors

### Builder

Added in [1.11.0](/jetpack/androidx/releases/activity#1.11.0)

```
public Builder()
```

## Public methods

### addSupportedHdrType

Added in [1.11.0](/jetpack/androidx/releases/activity#1.11.0)

```
public final @NonNull ActivityResultContracts.PickVisualMedia.MediaCapabilities.Builder addSupportedHdrType(int hdrType)
```

Adds the supported HDR (High Dynamic Range) types for media capabilities.

| Parameters |
| --- |
| `int hdrType` | A supported HDR type from the `HdrType`. |

| Returns |
| --- |
| `@NonNull ActivityResultContracts.PickVisualMedia.MediaCapabilities.Builder` | This Builder. |

| Throws |
| --- |
| `IllegalArgumentException` | if an invalid hdrType is provided. |

### build

Added in [1.11.0](/jetpack/androidx/releases/activity#1.11.0)

```
public final @NonNull ActivityResultContracts.PickVisualMedia.MediaCapabilities build()
```

Build the MediaCapabilities specified by this builder.

| Returns |
| --- |
| `@NonNull ActivityResultContracts.PickVisualMedia.MediaCapabilities` | the newly constructed MediaCapabilities. |
