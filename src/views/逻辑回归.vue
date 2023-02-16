<!--
 * @Author: 尹成诺
 * @Date: 2023-02-15 16:37:30
 * @LastEditors: 尹成诺
 * @LastEditTime: 2023-02-16 08:56:52
 * @Description: file conten
-->
<script setup lang="ts">
import getData from "@/api/逻辑回归数据";
import * as tf from "@tensorflow/tfjs";
import * as tfvis from "@tensorflow/tfjs-vis";

const data = getData(400);

tfvis.render.scatterplot(
  { name: "逻辑回归训练数据" },
  {
    values: [data.filter((p) => p.label === 1), data.filter((p) => p.label === 0)],
  }
);

const model = tf.sequential();
model.add(
  tf.layers.dense({
    units: 1,
    inputShape: [2],
    activation: "sigmoid",
  })
);
model.compile({
  loss: tf.losses.logLoss,
  optimizer: tf.train.adam(0.1),
});

const inputs = tf.tensor(data.map((p) => [p.x, p.y]));
const labels = tf.tensor(data.map((p) => p.label));

await model.fit(inputs, labels, {
  batchSize: 40,
  epochs: 20,
  callbacks: tfvis.show.fitCallbacks({ name: "训练效果" }, ["loss"]),
});
</script>

<template>
  <div class="about">
    <h1>逻辑回归</h1>
  </div>
</template>
