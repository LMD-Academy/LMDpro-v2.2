# Use Prebuilt C++ library from LiteRT Maven Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/litert/next/android_cpp_sdk))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

You can use *prebuilt* C++ library from the LiteRT Maven package for your
Android applications without building the entire LiteRT source tree. The
integration can be done with **CMake**.

The following shows basic steps to use LiteRT `CompiledModel` API in your C++
NDK code.

**Note:** Check [Configure CMake](https://developer.android.com/studio/projects/configure-cmake)
for more details.

## Integrate prebuilt LiteRT C++ library

Choose a folder to host LiteRT C++ SDK. We'll refer to it as
`<litert_cc_sdk_location>`.

1. Download C++ SDK

   You need to prepare the necessary files (CMakeLists.txt, source and header
   files)
   from LiteRT C++ SDK zip file under `<litert_cc_sdk_location>`.

   ```
   wget https://github.com/google-ai-edge/LiteRT/releases/download/<litert_version>/litert_cc_sdk.zip
   unzip litert_cc_sdk.zip -d <litert_cc_sdk_location>
   ```
2. Place `libLiteRt.so` from the LiteRT Maven package under
   `<litert_cc_sdk_location>`.

   ```
   cp <path_to_prebuilt_lib>/libLiteRt.so <litert_cc_sdk_location>/litert_cc_sdk/
   ```
3. Update your `CMakeLists.txt` to use LiteRT API.

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
4. Update your `build.gradle.kts` to configure LiteRT C++ SDK.

   ```
       externalNativeBuild {
           cmake {
               path = file("<litert_cc_sdk_location>/CMakeLists.txt")
               version = "3.22.1"
           }
       }
   ```

   **Note:** Check [Manually configure Gradle](https://developer.android.com/studio/projects/gradle-external-native-builds#configure-gradle)
   for more details.

## Download prebuilt GPU Accelerator

If you need GPU Acceleration, you need GPU Accelerator. Since it's not open
sourced yet, you need to download prebuilts.

Download [prebuilt GPU Accelerator](/edge/litert/next/cpp_sdk#prebuilt-gpu-accelerators)
and bundle it together with your NDK binaries.

Send feedback
