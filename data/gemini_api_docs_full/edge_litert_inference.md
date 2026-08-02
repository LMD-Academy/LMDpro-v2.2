# On-device Inference with LiteRT Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/litert/inference))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

LiteRT `CompiledModel` API represents the modern standard for on-device ML
inference, offering **streamlined hardware acceleration** that significantly
outperforms the `Interpreter` API. This interface simplifies the
deployment of `.tflite` models across a wide range of edge platforms by
providing a unified developer experiences and advanced features designed for
maximum hardware efficiency.

## Why Choose the `CompiledModel` API?

While the `Interpreter` API remains available for backward compatibility, the
`CompiledModel` API is where new performance and accelerator features are
prioritized. It is the recommended choice for these reasons:

* **Best-in-class GPU acceleration**: Leverages **ML Drift**, the
  state-of-the-art GPU acceleration library, to deliver reliable GPU inference
  across mobile, web, desktop, and IoT devices. See
  [GPU acceleration with LiteRT](https://developers.google.com/edge/litert/next/gpu).
* **Unified NPU access**: Provides a single, consistent developer experience to
  access NPUs from various providers like Google Tensor, Qualcomm, MediaTek,
  abstracting away vendor-specific compilers and runtime complexities. See
  [NPU acceleration with LiteRT](https://developers.google.com/edge/litert/next/npu).
* **Automated hardware selection**: Automatically selects the optimal backend
  among CPU, GPU, and NPU, based on available hardware and internal priority
  logic, eliminating the need for manual delegate configuration.
* **Asynchronous execution**: Utilizes OS-level mechanisms (like sync fences) to
  allow hardware accelerators to trigger directly upon completion of previous
  tasks without involving the CPU. This can reduce latency by up to 2x and
  ensures a smoother, more interactive AI experience.
* **Efficient I/O buffer management**: Leverages the `TensorBuffer` API to
  manage high-performance data flow between accelerators. This includes
  **zero-copy buffer interop** across `AHardwareBuffer`, OpenCL, and OpenGL,
  eliminating costly data copies between preprocessing, inference, and
  post-processing stages.

## Get Started with `CompiledModel` API

* **For classical ML models**, see the following demo apps.

  + [Image segmentation Kotlin App](https://github.com/google-ai-edge/litert-samples/tree/main/compiled_model_api/image_segmentation): CPU/GPU/NPU inference.
  + [Image segmentation C++ App](https://github.com/google-ai-edge/litert-samples/tree/main/compiled_model_api/image_segmentation/async_segmentation): CPU/GPU/NPU inference with
    **async** execution.
* **For GenAI models**, see the following demo apps:

  + [EmbeddingGemma semantic similarity C++ App](https://github.com/google-ai-edge/LiteRT/tree/main/litert/samples/semantic_similarity):
    CPU/GPU/NPU inference.

## Supported platforms

LiteRT `CompiledModel` API supports high-performance inferences across Android,
iOS, Web, IoT, and Desktop devices. See [platform-specific guide](https://developers.google.com/edge/litert/overview#integrate-model).

## Supported operators

| Code | Op Code | Category | CPU Accelerator | GPU Accelerator | Qualcomm NPU | MediaTek NPU | Intel NPU | Samsung NPU |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | kLiteRtOpCodeTflAdd | tfl | Y | Y | Y | Y | Y | Y |
| 1 | kLiteRtOpCodeTflAveragePool2d | tfl | Y | Y | Y | Y | Y | Y |
| 2 | kLiteRtOpCodeTflConcatenation | tfl | Y | Y | Y | Y | Y | Y |
| 3 | kLiteRtOpCodeTflConv2d | tfl | Y | Y | Y | Y | Y | Y |
| 4 | kLiteRtOpCodeTflDepthwiseConv2d | tfl | Y | Y | Y | Y | Y | Y |
| 5 | kLiteRtOpCodeTflDepthToSpace | tfl | Y | Y | Y |  | Y |  |
| 6 | kLiteRtOpCodeTflDequantize | tfl | Y | Y | Y | Y | Y |  |
| 7 | kLiteRtOpCodeTflEmbeddingLookup | tfl |  | Y | Y |  | Y |  |
| 8 | kLiteRtOpCodeTflFloor | tfl | Y | Y | Y |  |  | Y |
| 9 | kLiteRtOpCodeTflFullyConnected | tfl | Y | Y | Y | Y | Y | Y |
| 10 | kLiteRtOpCodeTflHashtableLookup | tfl |  |  |  |  |  |  |
| 11 | kLiteRtOpCodeTflL2Normalization | tfl |  |  | Y | Y | Y |  |
| 12 | kLiteRtOpCodeTflL2Pool2d | tfl |  |  | Y |  |  |  |
| 13 | kLiteRtOpCodeTflLocalResponseNormalization | tfl |  |  |  |  |  |  |
| 14 | kLiteRtOpCodeTflLogistic | tfl | Y | Y | Y | Y | Y | Y |
| 15 | kLiteRtOpCodeTflLshProjection | tfl |  |  |  |  |  |  |
| 16 | kLiteRtOpCodeTflLstm | tfl |  | Y |  |  |  |  |
| 17 | kLiteRtOpCodeTflMaxPool2d | tfl | Y | Y | Y | Y | Y | Y |
| 18 | kLiteRtOpCodeTflMul | tfl | Y | Y | Y | Y | Y | Y |
| 19 | kLiteRtOpCodeTflRelu | tfl | Y | Y | Y | Y | Y | Y |
| 20 | kLiteRtOpCodeTflReluN1To1 | tfl | Y | Y | Y |  |  |  |
| 21 | kLiteRtOpCodeTflRelu6 | tfl | Y | Y | Y |  |  |  |
| 22 | kLiteRtOpCodeTflReshape | tfl | Y | Y | Y | Y | Y | Y |
| 23 | kLiteRtOpCodeTflResizeBilinear | tfl | Y | Y | Y | Y | Y | Y |
| 24 | kLiteRtOpCodeTflRnn | tfl |  |  |  |  |  |  |
| 25 | kLiteRtOpCodeTflSoftmax | tfl | Y | Y | Y | Y | Y | Y |
| 26 | kLiteRtOpCodeTflSpaceToDepth | tfl | Y | Y | Y |  |  | Y |
| 27 | kLiteRtOpCodeTflSvdf | tfl |  |  |  |  |  |  |
| 28 | kLiteRtOpCodeTflTanh | tfl | Y | Y | Y | Y | Y |  |
| 29 | kLiteRtOpCodeTflConcatEmbeddings | tfl |  |  |  |  |  |  |
| 30 | kLiteRtOpCodeTflSkipGram | tfl |  |  |  |  |  |  |
| 31 | kLiteRtOpCodeTflCall | tfl |  |  |  |  |  |  |
| 32 | kLiteRtOpCodeTflCustom | tfl | Y | Y |  |  |  |  |
| 33 | kLiteRtOpCodeTflEmbeddingLookupSparse | tfl |  |  |  |  |  |  |
| 34 | kLiteRtOpCodeTflPad | tfl | Y | Y | Y | Y | Y | Y |
| 35 | kLiteRtOpCodeTflUnidirectionalSequenceRnn | tfl |  |  |  |  |  |  |
| 36 | kLiteRtOpCodeTflGather | tfl |  | Y | Y |  | Y | Y |
| 37 | kLiteRtOpCodeTflBatchToSpaceNd | tfl |  |  |  |  |  |  |
| 38 | kLiteRtOpCodeTflSpaceToBatchNd | tfl |  |  |  |  |  |  |
| 39 | kLiteRtOpCodeTflTranspose | tfl | Y | Y | Y | Y | Y | Y |
| 40 | kLiteRtOpCodeTflMean | tfl | Y | Y | Y | Y | Y | Y |
| 41 | kLiteRtOpCodeTflSub | tfl | Y | Y | Y | Y | Y | Y |
| 42 | kLiteRtOpCodeTflDiv | tfl | Y | Y | Y | Y | Y | Y |
| 43 | kLiteRtOpCodeTflSqueeze | tfl |  |  |  |  |  |  |
| 44 | kLiteRtOpCodeTflUnidirectionalSequenceLstm | tfl |  |  |  |  |  |  |
| 45 | kLiteRtOpCodeTflStridedSlice | tfl | Y | Y | Y | Y | Y | Y |
| 46 | kLiteRtOpCodeTflBidirectionalSequenceRnn | tfl |  |  |  |  |  |  |
| 47 | kLiteRtOpCodeTflExp | tfl | Y | Y | Y |  | Y | Y |
| 48 | kLiteRtOpCodeTflTopkV2 | tfl |  |  | Y |  |  |  |
| 49 | kLiteRtOpCodeTflSplit | tfl | Y | Y | Y | Y | Y | Y |
| 50 | kLiteRtOpCodeTflLogSoftmax | tfl |  |  | Y |  |  |  |
| 51 | kLiteRtOpCodeTflDelegate | tfl |  |  |  |  |  |  |
| 52 | kLiteRtOpCodeTflBidirectionalSequenceLstm | tfl |  |  |  |  |  |  |
| 53 | kLiteRtOpCodeTflCast | tfl |  | Y | Y | Y | Y | Y |
| 54 | kLiteRtOpCodeTflPrelu | tfl | Y | Y | Y | Y | Y |  |
| 55 | kLiteRtOpCodeTflMaximum | tfl | Y | Y | Y | Y | Y | Y |
| 56 | kLiteRtOpCodeTflArgMax | tfl |  | Y | Y |  | Y | Y |
| 57 | kLiteRtOpCodeTflMinimum | tfl | Y | Y | Y | Y | Y | Y |
| 58 | kLiteRtOpCodeTflLess | tfl |  | Y | Y |  | Y | Y |
| 59 | kLiteRtOpCodeTflNeg | tfl | Y | Y | Y |  |  |  |
| 60 | kLiteRtOpCodeTflPadv2 | tfl |  | Y | Y | Y | Y | Y |
| 61 | kLiteRtOpCodeTflGreater | tfl |  | Y | Y | Y | Y | Y |
| 62 | kLiteRtOpCodeTflGreaterEqual | tfl |  | Y | Y |  | Y | Y |
| 63 | kLiteRtOpCodeTflLessEqual | tfl |  | Y | Y |  | Y |  |
| 64 | kLiteRtOpCodeTflSelect | tfl |  | Y | Y |  | Y | Y |
| 65 | kLiteRtOpCodeTflSlice | tfl | Y | Y | Y | Y | Y | Y |
| 66 | kLiteRtOpCodeTflSin | tfl | Y | Y | Y |  | Y | Y |
| 67 | kLiteRtOpCodeTflTransposeConv | tfl | Y | Y | Y | Y | Y | Y |
| 68 | kLiteRtOpCodeTflSparseToDense | tfl |  |  |  |  |  |  |
| 69 | kLiteRtOpCodeTflTile | tfl |  | Y | Y |  |  |  |
| 70 | kLiteRtOpCodeTflExpandDims | tfl | Y |  |  |  | Y |  |
| 71 | kLiteRtOpCodeTflEqual | tfl |  | Y | Y |  | Y | Y |
| 72 | kLiteRtOpCodeTflNotEqual | tfl |  | Y | Y |  | Y | Y |
| 73 | kLiteRtOpCodeTflLog | tfl |  | Y | Y |  | Y | Y |
| 74 | kLiteRtOpCodeTflSum | tfl | Y | Y | Y | Y | Y | Y |
| 75 | kLiteRtOpCodeTflSqrt | tfl | Y | Y | Y | Y | Y | Y |
| 76 | kLiteRtOpCodeTflRsqrt | tfl | Y | Y | Y | Y | Y | Y |
| 77 | kLiteRtOpCodeTflShape | tfl |  |  |  |  |  |  |
| 78 | kLiteRtOpCodeTflPow | tfl |  | Y | Y |  | Y | Y |
| 79 | kLiteRtOpCodeTflArgMin | tfl |  |  | Y |  |  |  |
| 80 | kLiteRtOpCodeTflFakeQuant | tfl |  |  |  |  |  |  |
| 81 | kLiteRtOpCodeTflReduceProd | tfl |  | Y |  |  |  |  |
| 82 | kLiteRtOpCodeTflReduceMax | tfl | Y | Y | Y | Y | Y | Y |
| 83 | kLiteRtOpCodeTflPack | tfl |  | Y | Y |  | Y |  |
| 84 | kLiteRtOpCodeTflLogicalOr | tfl |  | Y | Y |  | Y |  |
| 85 | kLiteRtOpCodeTflOneHot | tfl |  | Y | Y |  | Y |  |
| 86 | kLiteRtOpCodeTflLogicalAnd | tfl |  | Y | Y |  | Y | Y |
| 87 | kLiteRtOpCodeTflLogicalNot | tfl |  | Y | Y |  | Y |  |
| 88 | kLiteRtOpCodeTflUnpack | tfl |  | Y | Y |  | Y |  |
| 89 | kLiteRtOpCodeTflReduceMin | tfl | Y | Y | Y |  |  | Y |
| 90 | kLiteRtOpCodeTflFloorDiv | tfl |  | Y | Y |  | Y | Y |
| 91 | kLiteRtOpCodeTflReduceAny | tfl |  | Y | Y |  |  |  |
| 92 | kLiteRtOpCodeTflSquare | tfl | Y | Y | Y |  | Y |  |
| 93 | kLiteRtOpCodeTflZerosLike | tfl |  |  |  |  |  |  |
| 94 | kLiteRtOpCodeTflFill | tfl |  |  |  |  |  |  |
| 95 | kLiteRtOpCodeTflFloorMod | tfl |  | Y |  |  |  |  |
| 96 | kLiteRtOpCodeTflRange | tfl |  |  |  |  | Y |  |
| 97 | kLiteRtOpCodeTflResizeNearestNeighbor | tfl |  | Y | Y | Y | Y | Y |
| 98 | kLiteRtOpCodeTflLeakyRelu | tfl | Y | Y | Y | Y | Y |  |
| 99 | kLiteRtOpCodeTflSquaredDifference | tfl | Y | Y | Y | Y | Y | Y |
| 100 | kLiteRtOpCodeTflMirrorPad | tfl |  | Y | Y |  | Y | Y |
| 101 | kLiteRtOpCodeTflAbs | tfl | Y | Y | Y | Y | Y | Y |
| 102 | kLiteRtOpCodeTflSplitV | tfl |  | Y |  |  |  |  |
| 103 | kLiteRtOpCodeTflUnique | tfl |  |  |  |  |  |  |
| 104 | kLiteRtOpCodeTflCeil | tfl | Y | Y | Y |  |  | Y |
| 105 | kLiteRtOpCodeTflReverseV2 | tfl |  | Y | Y |  | Y |  |
| 106 | kLiteRtOpCodeTflAddN | tfl |  |  |  |  |  |  |
| 107 | kLiteRtOpCodeTflGatherNd | tfl |  |  | Y |  | Y | Y |
| 108 | kLiteRtOpCodeTflCos | tfl | Y | Y | Y |  | Y | Y |
| 109 | kLiteRtOpCodeTflWhere | tfl |  |  |  |  |  |  |
| 110 | kLiteRtOpCodeTflRank | tfl |  |  |  |  |  |  |
| 111 | kLiteRtOpCodeTflElu | tfl | Y | Y | Y |  |  |  |
| 112 | kLiteRtOpCodeTflReverseSequence | tfl |  |  |  |  |  |  |
| 113 | kLiteRtOpCodeTflMatrixDiag | tfl |  |  |  |  |  |  |
| 114 | kLiteRtOpCodeTflQuantize | tfl | Y |  | Y | Y | Y |  |
| 115 | kLiteRtOpCodeTflMatrixSetDiag | tfl |  |  |  |  |  |  |
| 116 | kLiteRtOpCodeTflRound | tfl | Y | Y | Y |  |  |  |
| 117 | kLiteRtOpCodeTflHardSwish | tfl | Y | Y | Y | Y | Y | Y |
| 118 | kLiteRtOpCodeTflIf | tfl |  |  |  |  |  |  |
| 119 | kLiteRtOpCodeTflWhile | tfl |  |  |  |  |  |  |
| 120 | kLiteRtOpCodeTflNonMaxSuppressionV4 | tfl |  |  |  |  |  |  |
| 121 | kLiteRtOpCodeTflNonMaxSuppressionV5 | tfl |  |  |  |  |  |  |
| 122 | kLiteRtOpCodeTflScatterNd | tfl |  |  | Y |  |  |  |
| 123 | kLiteRtOpCodeTflSelectV2 | tfl |  | Y | Y |  | Y | Y |
| 124 | kLiteRtOpCodeTflDensify | tfl |  |  |  |  |  |  |
| 125 | kLiteRtOpCodeTflSegmentSum | tfl |  |  |  |  |  |  |
| 126 | kLiteRtOpCodeTflBatchMatmul | tfl | Y | Y | Y | Y | Y | Y |
| 127 | kLiteRtOpCodeTflPlaceholderForGreaterOpCodeTfls | tfl |  |  |  |  |  |  |
| 128 | kLiteRtOpCodeTflCumsum | tfl |  | Y | Y |  | Y | Y |
| 129 | kLiteRtOpCodeTflCallOnce | tfl |  |  |  |  |  |  |
| 130 | kLiteRtOpCodeTflBroadcastTo | tfl |  |  | Y |  | Y |  |
| 131 | kLiteRtOpCodeTflRfft2d | tfl |  |  |  |  |  |  |
| 132 | kLiteRtOpCodeTflConv3d | tfl |  |  | Y |  | Y |  |
| 133 | kLiteRtOpCodeTflImag | tfl |  |  |  |  |  |  |
| 134 | kLiteRtOpCodeTflReal | tfl |  |  |  |  |  |  |
| 135 | kLiteRtOpCodeTflComplexAbs | tfl |  |  |  |  |  |  |
| 136 | kLiteRtOpCodeTflHashtable | tfl |  |  |  |  |  |  |
| 137 | kLiteRtOpCodeTflHashtableFind | tfl |  |  |  |  |  |  |
| 138 | kLiteRtOpCodeTflHashtableImport | tfl |  |  |  |  |  |  |
| 139 | kLiteRtOpCodeTflHashtableSize | tfl |  |  |  |  |  |  |
| 140 | kLiteRtOpCodeTflReduceAll | tfl |  | Y | Y |  |  |  |
| 141 | kLiteRtOpCodeTflConv3dTranspose | tfl |  |  |  |  |  |  |
| 142 | kLiteRtOpCodeTflVarHandle | tfl | Y |  |  |  |  |  |
| 143 | kLiteRtOpCodeTflReadVariable | tfl | Y |  |  |  |  |  |
| 144 | kLiteRtOpCodeTflAssignVariable | tfl | Y |  |  |  |  |  |
| 145 | kLiteRtOpCodeTflBroadcastArgs | tfl |  |  |  |  |  |  |
| 146 | kLiteRtOpCodeTflRandomStandardNormal | tfl |  |  |  |  |  |  |
| 147 | kLiteRtOpCodeTflBucketize | tfl |  |  |  |  |  |  |
| 148 | kLiteRtOpCodeTflRandomUniform | tfl |  |  |  |  |  |  |
| 149 | kLiteRtOpCodeTflMultinomial | tfl |  |  |  |  |  |  |
| 150 | kLiteRtOpCodeTflGelu | tfl | Y | Y | Y | Y | Y |  |
| 151 | kLiteRtOpCodeTflDynamicUpdateSlice | tfl |  | Y | Y |  |  |  |
| 152 | kLiteRtOpCodeTflRelu0To1 | tfl |  |  | Y |  | Y |  |
| 153 | kLiteRtOpCodeTflUnsortedSegmentProd | tfl |  |  |  |  |  |  |
| 154 | kLiteRtOpCodeTflUnsortedSegmentMax | tfl |  |  |  |  |  |  |
| 155 | kLiteRtOpCodeTflUnsortedSegmentSum | tfl |  |  |  |  |  |  |
| 156 | kLiteRtOpCodeTflAtan2 | tfl |  | Y |  |  |  |  |
| 157 | kLiteRtOpCodeTflUnsortedSegmentMin | tfl |  |  |  |  |  |  |
| 158 | kLiteRtOpCodeTflSign | tfl |  | Y | Y |  |  |  |
| 159 | kLiteRtOpCodeTflBitcast | tfl |  | Y |  |  |  |  |
| 160 | kLiteRtOpCodeTflBitwiseXor | tfl |  | Y |  |  |  |  |
| 161 | kLiteRtOpCodeTflRightShift | tfl |  | Y |  |  |  |  |
| 162 | kLiteRtOpCodeShloLogistic | shlo |  |  |  |  |  |  |
| 163 | kLiteRtOpCodeShloAdd | shlo |  |  |  |  |  |  |
| 164 | kLiteRtOpCodeShloDivide | shlo |  |  |  |  |  |  |
| 165 | kLiteRtOpCodeShloMultiply | shlo |  |  |  |  |  |  |
| 166 | kLiteRtOpCodeShloMaximum | shlo |  |  |  |  |  |  |
| 167 | kLiteRtOpCodeShloReshape | shlo |  |  |  |  |  |  |
| 168 | kLiteRtOpCodeShloClamp | shlo |  | Y |  |  |  |  |
| 169 | kLiteRtOpCodeShloConcatenate | shlo |  |  |  |  |  |  |
| 170 | kLiteRtOpCodeShloBroadcastInDim | shlo |  | Y |  |  |  |  |
| 171 | kLiteRtOpCodeShloConvolution | shlo |  |  |  |  |  |  |
| 172 | kLiteRtOpCodeShloSlice | shlo |  |  |  |  |  |  |
| 173 | kLiteRtOpCodeShloCustomCall | shlo |  |  |  |  |  |  |
| 174 | kLiteRtOpCodeShloReduce | shlo |  |  |  |  |  |  |
| 175 | kLiteRtOpCodeShloAbs | shlo |  |  |  |  |  |  |
| 176 | kLiteRtOpCodeShloAnd | shlo |  |  |  |  |  |  |
| 177 | kLiteRtOpCodeShloCosine | shlo |  |  |  |  |  |  |
| 178 | kLiteRtOpCodeShloExponential | shlo |  |  |  |  |  |  |
| 179 | kLiteRtOpCodeShloFloor | shlo |  |  |  |  |  |  |
| 180 | kLiteRtOpCodeShloLog | shlo |  |  |  |  |  |  |
| 181 | kLiteRtOpCodeShloMinimum | shlo |  |  |  |  |  |  |
| 182 | kLiteRtOpCodeShloNegate | shlo |  |  |  |  |  |  |
| 183 | kLiteRtOpCodeShloOr | shlo |  |  |  |  |  |  |
| 184 | kLiteRtOpCodeShloPower | shlo |  |  |  |  |  |  |
| 185 | kLiteRtOpCodeShloRemainder | shlo |  | Y |  |  |  |  |
| 186 | kLiteRtOpCodeShloRsqrt | shlo |  |  |  |  |  |  |
| 187 | kLiteRtOpCodeShloSelect | shlo |  |  |  |  |  |  |
| 188 | kLiteRtOpCodeShloSubtract | shlo |  |  |  |  |  |  |
| 189 | kLiteRtOpCodeShloTanh | shlo |  |  |  |  |  |  |
| 190 | kLiteRtOpCodeShloScatter | shlo |  |  |  |  |  |  |
| 191 | kLiteRtOpCodeShloCompare | shlo |  |  |  |  |  |  |
| 192 | kLiteRtOpCodeShloConvert | shlo |  |  |  |  |  |  |
| 193 | kLiteRtOpCodeShloDynamicSlice | shlo |  |  |  |  |  |  |
| 194 | kLiteRtOpCodeShloDynamicUpdateSlice | shlo |  |  |  |  |  |  |
| 195 | kLiteRtOpCodeShloPad | shlo |  |  |  |  |  |  |
| 196 | kLiteRtOpCodeShloIota | shlo |  |  |  |  |  |  |
| 197 | kLiteRtOpCodeShloGeneral | shlo |  |  |  |  |  |  |
| 198 | kLiteRtOpCodeShloWindow | shlo |  |  |  |  |  |  |
| 199 | kLiteRtOpCodeShloSort | shlo |  |  |  |  |  |  |
| 200 | kLiteRtOpCodeShloWhile | shlo |  |  |  |  |  |  |
| 201 | kLiteRtOpCodeShloGather | shlo |  |  |  |  |  |  |
| 202 | kLiteRtOpCodeShloTranspose | shlo |  |  |  |  |  |  |
| 203 | kLiteRtOpCodeTflDilate | tfl |  |  |  |  |  |  |
| 204 | kLiteRtOpCodeShloRngBitGenerator | shlo |  |  |  |  |  |  |
| 205 | kLiteRtOpCodeTflReduceWindow | tfl |  |  |  |  |  |  |
| 206 | kLiteRtOpCodeShloComposite | shlo | Y | Y | Y | Y |  | Y |

Send feedback
