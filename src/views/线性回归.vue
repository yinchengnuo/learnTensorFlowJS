<!--
 * @Author: 尹成诺
 * @Date: 2023-02-15 16:41:32
 * @LastEditors: 尹成诺
 * @LastEditTime: 2023-03-17 09:36:56
 * @Description: file content
-->
<script setup lang="ts">
import { reactive } from "vue";
import * as tf from "@tensorflow/tfjs";
import * as tfvis from "@tensorflow/tfjs-vis";
import prettierTFVIS from "@/api/prettierTFVIS";

prettierTFVIS("线性回归");

const form = reactive({ x: 5, y: "?", loading: true });

const xs = [1, 2, 3, 4];
const ys = [1, 3, 5, 7];

tfvis.render.scatterplot({ name: "线性回归训练集", tab: "线性回归" }, { values: xs.map((x, i) => ({ x, y: ys[i] })) }, { xAxisDomain: [0, 5], yAxisDomain: [0, 8] });

const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
model.compile({ loss: tf.losses.meanSquaredError, optimizer: tf.train.sgd(0.1) });

const inputs = tf.tensor(xs);
const labels = tf.tensor(ys);
model.fit(inputs, labels, { batchSize: 4, epochs: 200, callbacks: tfvis.show.fitCallbacks({ name: "训练过程", tab: "线性回归" }, ["loss"]) }).then(() => {
  form.loading = false;
  ai();
});

const ai = () => {
  form.y = (model.predict(tf.tensor([+form.x])) as any).dataSync()[0];
};
</script>

<template>
  <el-form v-loading="form.loading" element-loading-text="模型训练中" :model="form" style="width: 200px">
    <el-form-item label="X">
      <el-input-number v-model="form.x" placeholder="X" @change="ai" />
    </el-form-item>
  </el-form>
  <el-alert v-loading="form.loading" element-loading-text="模型训练中" type="success" effect="dark">
    <template #title>
      <span class="result">{{ `如果 x 为 ${form.x}，那么预测 y 为 ${form.y}` }}</span>
    </template>
  </el-alert>
  <br />
  <el-divider />
  <br />
  <el-button type="primary" @click="model.save('downloads://my-model')">导出模型</el-button>
</template>
