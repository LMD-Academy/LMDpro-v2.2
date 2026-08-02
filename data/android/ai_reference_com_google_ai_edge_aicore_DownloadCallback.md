# DownloadCallback

[//]: # (source: [developer.android.com](https://developer.android.com/ai/reference/com/google/ai/edge/aicore/DownloadCallback))

---

[Kotlin](/ai/reference/kotlin/com/google/ai/edge/aicore/DownloadCallback "View this page in Kotlin")
|Java

```
public interface DownloadCallback
```

---

Callback functions used for model downloading. The messages returned are for debugging purposes.

## Summary

| Public methods |
| --- |
| `default void` | `onDownloadCompleted()`  Called when model download completed. |
| `default void` | `onDownloadDidNotStart(@NonNull GenerativeAIException e)`  Called when model download did not start due to errors (e.g. remote exception of features not available). |
| `default void` | `onDownloadFailed(     @NonNull String failureStatus,     @NonNull GenerativeAIException e )`  Called when model download failed. |
| `default void` | `onDownloadPending()`  Called when model download has been initiated already, hence no need to restart. |
| `default void` | `onDownloadProgress(long totalBytesDownloaded)`  Called when model download is in progress. |
| `default void` | `onDownloadStarted(long bytesToDownload)`  Called when model download started properly. |

## Public methods

### onDownloadCompleted

```
default void onDownloadCompleted()
```

Called when model download completed.

### onDownloadDidNotStart

```
default void onDownloadDidNotStart(@NonNull GenerativeAIException e)
```

Called when model download did not start due to errors (e.g. remote exception of features not available).

| Parameters |
| --- |
| `@NonNull GenerativeAIException e` | the `GenerativeAIException` thrown for download failure |

### onDownloadFailed

```
default void onDownloadFailed(  
    @NonNull String failureStatus,  
    @NonNull GenerativeAIException e  
)
```

Called when model download failed.

| Parameters |
| --- |
| `@NonNull String failureStatus` | the download failure status message |
| `@NonNull GenerativeAIException e` | the `GenerativeAIException` thrown for download failure |

### onDownloadPending

```
default void onDownloadPending()
```

Called when model download has been initiated already, hence no need to restart.

### onDownloadProgress

```
default void onDownloadProgress(long totalBytesDownloaded)
```

Called when model download is in progress.

| Parameters |
| --- |
| `long totalBytesDownloaded` | the already downloaded bytes |

### onDownloadStarted

```
default void onDownloadStarted(long bytesToDownload)
```

Called when model download started properly.

| Parameters |
| --- |
| `long bytesToDownload` | the total bytes to be downloaded |

Send feedback
