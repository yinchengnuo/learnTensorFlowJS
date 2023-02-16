<!--
 * @Author: 尹成诺
 * @Date: 2023-02-15 16:41:32
 * @LastEditors: 尹成诺
 * @LastEditTime: 2023-02-16 10:40:56
 * @Description: file content
-->
<script setup lang="ts">
import * as tf from "@tensorflow/tfjs";
import * as tfvis from "@tensorflow/tfjs-vis";
import { onBeforeUnmount, reactive } from "vue";

const form = reactive({ x: 5, y: 0 });

const xs = [1, 2, 3, 4];
const ys = [1, 3, 5, 7];

tfvis.visor().open();

tfvis.render.scatterplot({ name: "线性回归训练集", tab: "线性回归" }, { values: xs.map((x, i) => ({ x, y: ys[i] })) }, { xAxisDomain: [0, 5], yAxisDomain: [0, 8] });

(document.getElementsByClassName("visor-tabs")[0] as HTMLElement).style.marginTop = "0px";
(document.getElementsByClassName("visor-tabs")[0] as HTMLElement).style.paddingBottom = "0px";
(document.getElementsByClassName("visor-controls")[0] as HTMLElement).style.display = "none";

const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
model.compile({ loss: tf.losses.meanSquaredError, optimizer: tf.train.sgd(0.1) });

const inputs = tf.tensor(xs);
const labels = tf.tensor(ys);
model
  .fit(inputs, labels, {
    batchSize: 4,
    epochs: 200,
    callbacks: tfvis.show.fitCallbacks({ name: "训练过程", tab: "线性回归" }, ["loss"]),
  })
  .then(() => {});
setTimeout(() => {
  (Array.from(document.getElementsByClassName("subsurface-title")) as Array<HTMLElement>).forEach((e) => (e.style.marginBottom = "0px"));
}, 1111);

const ai = () => {
  form.y = (model.predict(tf.tensor([+form.x])) as any).dataSync()[0];
};

onBeforeUnmount(() => {
  tfvis.visor().close();
});
</script>

<template>
  <el-form :model="form">
    <el-form-item label="X">
      <el-input-number v-model="form.x" placeholder="X" style="width: 100px" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" style="width: 120px" @click="ai">AI</el-button>
    </el-form-item>
  </el-form>
  <el-alert type="success" effect="dark">
    <template #title>
      <span style="font-size: 20px; font-weight: bolder; line-height: 2">{{ `如果 x 为 ${form.x}，那么预测 y 为 ${form.y}` }}</span>
    </template>
  </el-alert>
</template>
