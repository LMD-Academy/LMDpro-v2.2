--- source: https://ai.google.dev/edge/litert/build/cmake_litert ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [LiteRT](https://developers.google.com/edge/litert)

Send feedback

# LiteRT CMake Build Instructions Stay organized with collections Save and categorize content based on your preferences.



Use this guide to configure and build the LiteRT runtime with CMake on macOS The
instructions cover both Android cross-compilation targets (using macOS and Linux
as host machine) and native macOS and Linux builds.

## Common Build Steps

Install CMake 4.0.1 from: https://github.com/kitware/cmake/releases

All build presets expect you to work from the repository root:

```
cd ./litert
```

The generated build trees live under `cmake_build*`. Parallel builds can be
controlled via `-j` with the desired core count.

## Available Build Flavors

LiteRT supports both **Release** and **Debug** build flavors:

| Preset | Platform | Build Type | Output Directory |
| --- | --- | --- | --- |
| `default` | Desktop (macOS/Linux) | Release | `cmake_build` |
| `default-debug` | Desktop (macOS/Linux) | Debug | `cmake_build_debug` |
| `android-arm64` | Android arm64 | Release | `cmake_build_android_arm64` |
| `android-arm64-debug` | Android arm64 | Debug | `cmake_build_android_arm64_debug` |

**Release** builds use `-O3 -DNDEBUG` for optimized production binaries.
**Debug** builds use `-O0 -g` for debugging with full symbol information.

## Android (arm64) Cross-Compilation

1. Install the Android NDK and export the path so CMake can find it:

   ```
   export ANDROID_NDK_HOME=/absolute/path/to/android-ndk-r27
   ```
2. Configure host-side flatbuffer tools

   ```
   cmake --preset android-arm64;
   ```
3. Configure the LiteRT Android build using the provided preset and point to the
   generated FlatBuffers tools:

   ```
   # For Release build:
   cmake --preset android-arm64 \
     -DTFLITE_HOST_TOOLS_DIR="$(cd ../host_flatc_build/_deps/flatbuffers-build && pwd)"

   # For Debug build:
   cmake --preset android-arm64-debug \
     -DTFLITE_HOST_TOOLS_DIR="$(cd ../host_flatc_build/_deps/flatbuffers-build && pwd)"
   ```
4. Build LiteRT for Android:

   ```
   # For Release build:
   cmake --build cmake_build_android_arm64 -j

   # For Debug build:
   cmake --build cmake_build_android_arm64_debug -j
   ```

Artifacts such as static libraries will be emitted under the corresponding
build directory (`cmake_build_android_arm64` or `cmake_build_android_arm64_debug`).

## Desktop Build from macOS and Linux

1. Configure the default preset for Desktop builds:

   ```
   # For Release build:
   cmake --preset default

   # For Debug build:
   cmake --preset default-debug
   ```
2. Build LiteRT:

   ```
   # For Release build:
   cmake --build cmake_build -j

   # For Debug build:
   cmake --build cmake_build_debug -j
   ```

## Customize your build target

## Customizing CMake Builds

Use CMake options to control which toolchains and features are compiled into
your targets. E.g.:

```
cmake -S . -B build-release \
      -DCMAKE_BUILD_TYPE=Release \
      -DLITERT_AUTO_BUILD_TFLITE=ON \
      -DLITERT_ENABLE_GPU=OFF \
      -DLITERT_ENABLE_NPU=OFF \
      -DLITERT_DISABLE_KLEIDIAI=ON \
      -DLITERT_HOST_C_COMPILER=/usr/bin/clang \
      -DLITERT_HOST_CXX_COMPILER=/usr/bin/clang++
cmake --build build-release --target dispatch_api_Qualcomm_so -j8
```

* `LITERT_HOST_C_COMPILER` / `LITERT_HOST_CXX_COMPILER` let you point the helper
  host tools at any Clang/GCC installation without editing `CMakeLists.txt`.
* `LITERT_DISABLE_KLEIDIAI` keeps x86 desktop builds reproducible by skipping
  KleidiAI; set it to `OFF` whenever you want to bundle the delegate.
* Always pass `-DCMAKE_BUILD_TYPE=Release` (or the equivalent preset) when you
  need the optimized artifact. This makes CMake use `-O3 -DNDEBUG` for you.

### Producing Minimum-Size Vendor Libraries

At link time enable dead-stripping so dispatch libraries match Bazel’s size:

* macOS: add
  `-DCMAKE_SHARED_LINKER_FLAGS_RELEASE="-Wl,-dead_strip -dead_strip_dylibs"`
  (and the same for `CMAKE_EXE_LINKER_FLAGS_RELEASE` if you want the
  executeables stripped). After building, run
  `strip -x path/to/libLiteRtDispatch_Qualcomm.dylib`.
* Linux: add `-DCMAKE_SHARED_LINKER_FLAGS_RELEASE="-Wl,--gc-sections"` and run
  `strip --strip-unneeded path/to/libLiteRtDispatch_Qualcomm.so` (or make it a
  `POST_BUILD` command).

These flags can live directly in `cmake --preset …` entries in
`CMakePresets.json` so every developer in your team gets the same configuration.

## Troubleshooting Tips

* Delete the corresponding `cmake_build*` directory if you change toolchains or
  major configuration options, then rerun the configure step.
* Inspect `CMakeCache.txt` inside each build tree for resolved dependency paths.






Send feedback