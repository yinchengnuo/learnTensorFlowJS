<!--
 * @Author: 尹成诺
 * @Date: 2023-03-17 10:21:56
 * @LastEditors: 尹成诺
 * @LastEditTime: 2023-03-21 22:06:00
 * @Description: file content
-->
<script setup lang="ts">
import * as speechCommands from "@tensorflow-models/speech-commands";

const recognizer = speechCommands.create(
  "BROWSER_FFT",
  undefined,
  "https://static-mp-f3138cb7-2a3b-4344-8e79-a1f65871aab2.next.bspapp.com/AISpeech/model.json",
  "https://static-mp-f3138cb7-2a3b-4344-8e79-a1f65871aab2.next.bspapp.com/AISpeech/metadata.json"
);
recognizer.ensureModelLoaded().then(() => {
  const labels = recognizer.wordLabels();
  console.log("👀  file: 预训练语音识别模型.vue:20  recognizer.ensureModelLoaded  labels:", labels);
  recognizer.listen(
    (result: any) => {
      // console.log("👀  file: 预训练语音识别模型.vue:21  recognizer.ensureModelLoaded  result:", result);
      const { scores } = result;
      const maxValue = Math.max(...scores);
      const index = scores.indexOf(maxValue) - 2;
      console.log(labels[index]);
    },
    { probabilityThreshold: 0.9 }
  );
});
</script>

<template>
  <div>预训练语音识别模型</div>
</template>
