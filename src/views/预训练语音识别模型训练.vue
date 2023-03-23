<!--
 * @Author: 尹成诺
 * @Date: 2023-03-17 10:21:56
 * @LastEditors: 尹成诺
 * @LastEditTime: 2023-03-21 22:57:00
 * @Description: file content
-->
<script setup lang="ts">
import { nextTick, ref } from "vue";
import * as tfvis from "@tensorflow/tfjs-vis";
import * as speechCommands from "@tensorflow-models/speech-commands";

const code = ref("");
const input = ref("");
const listenning = ref(false);
const disabled = ref(false);

const recognizer = speechCommands.create(
  "BROWSER_FFT",
  undefined,
  "https://static-mp-f3138cb7-2a3b-4344-8e79-a1f65871aab2.next.bspapp.com/AISpeech/model.json",
  "https://static-mp-f3138cb7-2a3b-4344-8e79-a1f65871aab2.next.bspapp.com/AISpeech/metadata.json"
);
let transferRecognizer: any;
recognizer.ensureModelLoaded().then(() => {
  transferRecognizer = recognizer.createTransfer("轮播图");
});

const collect = async () => {
  disabled.value = true;
  await transferRecognizer.collectExample(input.value === "背景噪音" ? "_background_noise_" : input.value);
  code.value = JSON.stringify(transferRecognizer.countExamples(), null, 2);
  disabled.value = false;
};

const train = async () => {
  await transferRecognizer.train({
    epochs: 30,
    callback: tfvis.show.fitCallbacks({ name: "训练效果" }, ["loss", "acc"], { callbacks: ["onEpochEnd"] }),
  });
};

const toggle = async () => {
  nextTick(() => (listenning.value = !listenning.value));
  if (listenning.value) {
    transferRecognizer.stopListening();
  } else {
    await transferRecognizer.listen(
      (result: any) => {
        const { scores } = result;
        transferRecognizer.wordLabels()[scores.indexOf(Math.max(...scores))]
        // speechSynthesis.speak(new SpeechSynthesisUtterance("你说 " + transferRecognizer.wordLabels()[scores.indexOf(Math.max(...scores))]));
      }
    );
  }
};

const save = () => {
  const arrayBuffer = transferRecognizer.serializeExamples();
  const blob = new Blob([arrayBuffer]);
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "data.bin";
  link.click();
};
</script>

<template>
  <div>
    <h1>预训练语音识别模型训练</h1>
    <el-input v-model="input" style="width: 200px">收集</el-input>
    <br />
    <br />
    <el-button type="primary" :disabled="disabled" @click="collect">收集语音</el-button>
    <el-button type="primary" :disabled="disabled" @click="train">训练模型</el-button>
    <el-button type="primary" :disabled="disabled" @click="toggle">{{ listenning ? "停止" : "开始" }}识别</el-button>
    <el-button type="primary" :disabled="disabled" @click="save">导出模型</el-button>
    <br />
    <br />
    <pre>{{ code }}</pre>
  </div>
</template>
