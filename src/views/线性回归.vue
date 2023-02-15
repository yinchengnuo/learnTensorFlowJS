<!--
 * @Author: 尹成诺
 * @Date: 2023-02-15 16:41:32
 * @LastEditors: 尹成诺
 * @LastEditTime: 2023-02-15 17:53:40
 * @Description: file content
-->
<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue";
import * as tf from "@tensorflow/tfjs";
import * as tfvis from "@tensorflow/tfjs-vis";

onMounted(() => {
  const xs = [1, 2, 3, 4];
  const ys = [1, 3, 5, 7];

  tfvis.visor().open()

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
    .then(() => {
      const output = model.predict(tf.tensor([5]));
      alert(`如果 x 为 5，那么预测 y 为 ${output.dataSync()[0]}`);
    });
  setTimeout(() => {
    (Array.from(document.getElementsByClassName("subsurface-title")) as Array<HTMLElement>).forEach((e) => (e.style.marginBottom = "0px"));
  }, 1111);
});

onBeforeUnmount(() => {
  // tfvis.show
  tfvis.visor().close()
})
</script>

<template></template>
