--- source: https://ai.google.dev/edge/api/mediapipe/python/mp/tasks/vision/drawing_styles/face_landmarker/serial_dispatcher/SerialDispatcher ---

# mp.tasks.vision.drawing\_styles.face\_landmarker.serial\_dispatcher.SerialDispatcher



[View source on GitHub](https://github.com/google/mediapipe/blob/master/mediapipe/tasks/python/core/serial_dispatcher.py#L25-L91) |

A wrapper class for a ctypes.CDLL object that serializes all calls.

#### View aliases

**Main aliases**

[`mp.tasks.vision.drawing_styles.drawing_utils.face_landmarker.image_lib.mediapipe_c_bindings.serial_dispatcher.SerialDispatcher`](https://ai.google.dev/edge/api/mediapipe/python/edge/api/mediapipe/python/mp/tasks/vision/drawing_styles/face_landmarker/serial_dispatcher/SerialDispatcher), [`mp.tasks.vision.drawing_styles.drawing_utils.face_landmarker.mediapipe_c_bindings_lib.serial_dispatcher.SerialDispatcher`](https://ai.google.dev/edge/api/mediapipe/python/edge/api/mediapipe/python/mp/tasks/vision/drawing_styles/face_landmarker/serial_dispatcher/SerialDispatcher), [`mp.tasks.vision.drawing_styles.drawing_utils.face_landmarker.serial_dispatcher.SerialDispatcher`](https://ai.google.dev/edge/api/mediapipe/python/edge/api/mediapipe/python/mp/tasks/vision/drawing_styles/face_landmarker/serial_dispatcher/SerialDispatcher), [`mp.tasks.vision.drawing_styles.face_landmarker.image_lib.mediapipe_c_bindings.serial_dispatcher.SerialDispatcher`](https://ai.google.dev/edge/api/mediapipe/python/edge/api/mediapipe/python/mp/tasks/vision/drawing_styles/face_landmarker/serial_dispatcher/SerialDispatcher), [`mp.tasks.vision.drawing_styles.face_landmarker.mediapipe_c_bindings_lib.serial_dispatcher.SerialDispatcher`](https://ai.google.dev/edge/api/mediapipe/python/edge/api/mediapipe/python/mp/tasks/vision/drawing_styles/face_landmarker/serial_dispatcher/SerialDispatcher), [`mp.tasks.vision.drawing_styles.hand_landmarker.image_lib.mediapipe_c_bindings.serial_dispatcher.SerialDispatcher`](https://ai.google.dev/edge/api/mediapipe/python/edge/api/mediapipe/python/mp/tasks/vision/drawing_styles/face_landmarker/serial_dispatcher/SerialDispatcher), [`mp.tasks.vision.drawing_styles.hand_landmarker.mediapipe_c_bindings.serial_dispatcher.SerialDispatcher`](https://ai.google.dev/edge/api/mediapipe/python/edge/api/mediapipe/python/mp/tasks/vision/drawing_styles/face_landmarker/serial_dispatcher/SerialDispatcher), [`mp.tasks.vision.drawing_styles.hand_landmarker.serial_dispatcher.SerialDispatcher`](https://ai.google.dev/edge/api/mediapipe/python/edge/api/mediapipe/python/mp/tasks/vision/drawing_styles/face_landmarker/serial_dispatcher/SerialDispatcher), [`mp.tasks.vision.drawing_styles.pose_landmarker.image_lib.mediapipe_c_bindings.serial_dispatcher.SerialDispatcher`](https://ai.google.dev/edge/api/mediapipe/python/edge/api/mediapipe/python/mp/tasks/vision/drawing_styles/face_landmarker/serial_dispatcher/SerialDispatcher), [`mp.tasks.vision.drawing_styles.pose_landmarker.mediapipe_c_bindings_lib.serial_dispatcher.SerialDispatcher`](https://ai.google.dev/edge/api/mediapipe/python/edge/api/mediapipe/python/mp/tasks/vision/drawing_styles/face_landmarker/serial_dispatcher/SerialDispatcher), [`mp.tasks.vision.drawing_styles.pose_landmarker.serial_dispatcher.SerialDispatcher`](https://ai.google.dev/edge/api/mediapipe/python/edge/api/mediapipe/python/mp/tasks/vision/drawing_styles/face_landmarker/serial_dispatcher/SerialDispatcher), [`mp.tasks.vision.drawing_utils.face_landmarker.image_lib.mediapipe_c_bindings.serial_dispatcher.SerialDispatcher`](https://ai.google.dev/edge/api/mediapipe/python/edge/api/mediapipe/python/mp/tasks/vision/drawing_styles/face_landmarker/serial_dispatcher/SerialDispatcher), [`mp.tasks.vision.drawing_utils.face_landmarker.mediapipe_c_bindings_lib.serial_dispatcher.SerialDispatcher`](https://ai.google.dev/edge/api/mediapipe/python/edge/api/mediapipe/python/mp/tasks/vision/drawing_styles/face_landmarker/serial_dispatcher/SerialDispatcher), [`mp.tasks.vision.drawing_utils.face_landmarker.serial_dispatcher.SerialDispatcher`](https://ai.google.dev/edge/api/mediapipe/python/edge/api/mediapipe/python/mp/tasks/vision/drawing_styles/face_landmarker/serial_dispatcher/SerialDispatcher)

```
mp.tasks.vision.drawing_styles.face_landmarker.serial_dispatcher.SerialDispatcher(
    lib: ctypes.CDLL,
    signatures: Sequence[mp.tasks.vision.drawing_styles.face_landmarker.mediapipe_c_utils.CFunction]
)
```



This ensures that functions from a non-thread-safe C library are called
sequentially from a single dedicated thread, preventing race conditions
and segmentation faults.

If a function is a CStatusFunction, the dispatcher will raise a Python
exception if the returned MpStatus code is not kMpOk.

| Args | |

|  |  |
| --- | --- |
| `lib` | The ctypes.CDLL object to wrap. |
| `signatures` | the CFunction objects specifying the functions to wrap. |

## Methods

### `close`

[View source](https://github.com/google/mediapipe/blob/master/mediapipe/tasks/python/core/serial_dispatcher.py#L78-L84)

```
close()
```

Shuts down the dispatcher and waits for pending tasks to complete.

### `__enter__`

[View source](https://github.com/google/mediapipe/blob/master/mediapipe/tasks/python/core/serial_dispatcher.py#L86-L87)

```
__enter__()
```

### `__exit__`

[View source](https://github.com/google/mediapipe/blob/master/mediapipe/tasks/python/core/serial_dispatcher.py#L89-L91)

```
__exit__(
    exc_type, exc_val, exc_tb
)
```