# Download and Integrate Prebuilt LiteRT C++ Binary Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/litert/next/cpp_sdk))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

You can use *prebuilt* C++ libraries in your
applications without building the entire LiteRT source tree. The
integration can be done with **CMake**.

The following shows basic steps to use LiteRT `CompiledModel` API in your C++
code.

## Download prebuilt LiteRT runtime shared library

Download the LiteRT runtime shared library by following the
links:

| Platform | Version | LiteRT runtime library |
| --- | --- | --- |
| android\_arm32 | 2.1.6 | [libLiteRt.so](https://storage.googleapis.com/litert/binaries/2.1.6/android_arm32/libLiteRt.so) |
| android\_arm64 | 2.1.6 | [libLiteRt.so](https://storage.googleapis.com/litert/binaries/2.1.6/android_arm64/libLiteRt.so) |
| android\_x86\_64 | 2.1.6 | [libLiteRt.so](https://storage.googleapis.com/litert/binaries/2.1.6/android_x86_64/libLiteRt.so) |
| linux\_x86\_64 | 2.1.6 | [libLiteRt.so](https://storage.googleapis.com/litert/binaries/2.1.6/linux_x86_64/libLiteRt.so) |
| linux\_arm64 | 2.1.6 | [libLiteRt.so](https://storage.googleapis.com/litert/binaries/2.1.6/linux_arm64/libLiteRt.so) |
| ios\_arm64 | 2.1.6 | [libLiteRt.dylib](https://storage.googleapis.com/litert/binaries/2.1.6/ios_arm64/libLiteRt.dylib) |
| ios\_sim\_arm64 | 2.1.6 | [libLiteRt.dylib](https://storage.googleapis.com/litert/binaries/2.1.6/ios_sim_arm64/libLiteRt.dylib) |
| macos\_arm64 | 2.1.6 | [libLiteRt.dylib](https://storage.googleapis.com/litert/binaries/2.1.6/macos_arm64/libLiteRt.dylib) |
| windows\_x86\_64 | 2.1.6 | [libLiteRt.dll](https://storage.googleapis.com/litert/binaries/2.1.6/windows_x86_64/libLiteRt.dll) |

## Download prebuilt GPU Accelerators

If you need GPU Acceleration, you need GPU Accelerator. Since it's not open
sourced yet, you need to download prebuilts.

Here are available GPU Accelerators.

| Platform | Version | GPU Accelerator | Backend |
| --- | --- | --- | --- |
| android\_arm32 | 2.1.6 | [libLiteRtClGlAccelerator.so](https://storage.googleapis.com/litert/binaries/2.1.6/android_arm32/libLiteRtClGlAccelerator.so) |  |
| android\_arm64 | 2.1.6 | [libLiteRtClGlAccelerator.so](https://storage.googleapis.com/litert/binaries/2.1.6/android_arm64/libLiteRtClGlAccelerator.so) | OpenCL + OpenGL |
| android\_x86\_64 | 2.1.6 | [libLiteRtClGlAccelerator.so](https://storage.googleapis.com/litert/binaries/2.1.6/android_x86_64/libLiteRtClGlAccelerator.so) | OpenCL + OpenGL |
| linux\_x86\_64 | 2.1.6 | [libLiteRtWebGpuAccelerator.so](https://storage.googleapis.com/litert/binaries/2.1.6/linux_x86_64/libLiteRtWebGpuAccelerator.so) | WebGPU (Vulkan) |
| linux\_arm64 | 2.1.6 | [libLiteRtWebGpuAccelerator.so](https://storage.googleapis.com/litert/binaries/2.1.6/linux_arm64/libLiteRtWebGpuAccelerator.so) | WebGPU (Vulkan) |
| ios\_arm64 | 2.1.6 | [libLiteRtMetalAccelerator.dylib](https://storage.googleapis.com/litert/binaries/2.1.6/ios_arm64/libLiteRtMetalAccelerator.dylib) | Metal |
| ios\_sim\_arm64 | 2.1.6 | [libLiteRtMetalAccelerator.dylib](https://storage.googleapis.com/litert/binaries/2.1.6/ios_sim_arm64/libLiteRtMetalAccelerator.dylib) | Metal |
| macos\_arm64 | 2.1.6 | [libLiteRtMetalAccelerator.dylib](https://storage.googleapis.com/litert/binaries/2.1.6/macos_arm64/libLiteRtMetalAccelerator.dylib) | Metal |
| windows\_x86\_64 | 2.1.6 | [libLiteRtWebGpuAccelerator.dll](https://storage.googleapis.com/litert/binaries/2.1.6/windows_x86_64/libLiteRtWebGpuAccelerator.dll) | WebGPU (Direct3D) |

## Prepare prebuilt LiteRT C++ library

Choose a folder to host LiteRT C++ SDK. We'll refer to it as
`<litert_cc_sdk_location>`.

1. Download C++ SDK

   You need to prepare the necessary files (CMakeLists.txt, source and header
   files)
   from LiteRT C++ SDK zip file under `<litert_cc_sdk_location>`.

   ```
   wget https://github.com/google-ai-edge/LiteRT/releases/<litert_version>/download/litert_cc_sdk.zip
   unzip litert_cc_sdk.zip -d <litert_cc_sdk_location>
   ```
2. Place the downloaded `libLiteRt.so` under
   `<litert_cc_sdk_location>`. If you use an accelerator, place supporting
   library in the same directory.

   ```
   cp <path_to_prebuilt_lib>/libLiteRt.so <litert_cc_sdk_location>/litert_cc_sdk/
   ```
3. Build library and `run_model_simple` tool.

   LiteRT needs `clang` to build. Configure C++ SDK and build tools as the
   following:

   ```
   cd <litert_cc_sdk_location>
   cmake -S litert_cc_sdk -B litert_cc_sdk_build -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++
   cmake --build litert_cc_sdk_build -j
   ```

## Integrate prebuilt LiteRT C++ library

1. Update your `CMakeLists.txt` to use LiteRT API.

   ```
   add_subdirectory("<litert_cc_sdk_location>" "<litert_cc_sdk_location>/build")
   include_directories("<litert_cc_sdk_location>")

   target_link_libraries(${CMAKE_PROJECT_NAME}
           # Use `litert_cc_api` for LiteRT C++ SDK
           litert_cc_api
           android
           log)
   ```

   **Note:** Check [Include other CMake projects](https://developer.android.com/studio/projects/configure-cmake#include-other-cmake-projects)
   for more details.

Send feedback
