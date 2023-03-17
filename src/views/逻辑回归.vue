<!--
 * @Author: 尹成诺
 * @Date: 2023-02-15 16:37:30
 * @LastEditors: 尹成诺
 * @LastEditTime: 2023-03-17 09:37:13
 * @Description: file conten
-->
<script setup lang="ts">
import { reactive } from "vue";
import getData from "@/api/逻辑回归数据";
import * as tf from "@tensorflow/tfjs";
import * as tfvis from "@tensorflow/tfjs-vis";
import prettierTFVIS from "@/api/prettierTFVIS";

prettierTFVIS("逻辑回归");

const form = reactive({ x: 0, y: 0, result: 0, loading: true });

const data = getData(400);

tfvis.render.scatterplot({ name: "逻辑回归训练数据", tab: "逻辑回归" }, { values: [data.filter((p) => p.label === 1), data.filter((p) => p.label === 0)] });

const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [2], activation: "sigmoid" }));
model.compile({ loss: tf.losses.logLoss, optimizer: tf.train.adam(0.1) });

const inputs = tf.tensor(data.map((p) => [p.x, p.y]));
const labels = tf.tensor(data.map((p) => p.label));

model.fit(inputs, labels, { batchSize: 40, epochs: 20, callbacks: tfvis.show.fitCallbacks({ name: "训练效果", tab: "逻辑回归" }, ["loss"]) }).then(() => {
  form.loading = false;
  ai();
});

const ai = () => {
  form.result = (model.predict(tf.tensor([[form.x * 1, form.y * 1]])) as any).dataSync()[0];
};
</script>

<template>
  <el-form v-loading="form.loading" element-loading-text="模型训练中" :model="form" style="width: 200px">
    <el-form-item label="X">
      <el-input-number v-model="form.x" placeholder="X" @change="ai" />
    </el-form-item>
    <el-form-item label="Y">
      <el-input-number v-model="form.y" placeholder="Y" @change="ai" />
    </el-form-item>
  </el-form>
  <el-alert v-loading="form.loading" element-loading-text="模型训练中" type="success" effect="dark">
    <template #title>
      <span class="result">{{ `点 X = ${form.x} Y = ${form.y} 为蓝色的概率为 ${form.result * 100}%` }}</span>
    </template>
  </el-alert>
</template>
