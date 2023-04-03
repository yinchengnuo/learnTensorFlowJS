<!--
 * @Author: 尹成诺
 * @Date: 2023-03-17 10:21:56
 * @LastEditors: 尹成诺
 * @LastEditTime: 2023-04-03 17:05:50
 * @Description: file content
-->
<script setup lang="ts">
import { ref } from "vue";
import * as speechCommands from "@tensorflow-models/speech-commands";

const result = ref("");

const recognizer = speechCommands.create("BROWSER_FFT", undefined, location.href.split("#")[0] + "/model.json", location.href.split("#")[0] + "/metadata.json");
recognizer.ensureModelLoaded().then(() => {
  const labels = recognizer.wordLabels();
  console.log("👀  file: 预训练语音识别模型.vue:20  recognizer.ensureModelLoaded  labels:", labels);
  recognizer.listen(
    (result: any) => {
      // console.log("👀  file: 预训练语音识别模型.vue:21  recognizer.ensureModelLoaded  result:", result);
      const { scores } = result;
      const maxValue = Math.max(...scores);
      const index = scores.indexOf(maxValue) - 2;
      result.value = labels[index];
      return Promise.resolve();
    },
    { probabilityThreshold: 0.9 }
  );
});
</script>

<template>
  <div>
    <h1>预训练语音识别模型</h1>
    <div>识别结果：{{ result || "-" }}</div>
  </div>
</template>
