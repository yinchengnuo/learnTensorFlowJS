<!--
 * @Author: 尹成诺
 * @Date: 2023-02-15 16:37:30
 * @LastEditors: 尹成诺
 * @LastEditTime: 2023-02-15 18:24:22
 * @Description: file content
-->
<script setup lang="ts">
import * as tf from "@tensorflow/tfjs";
import TheWelcome from "../components/TheWelcome.vue";

const t = tf.tensor([[1.0, 2.0, 3.0], [10.0, 20.0, 30.0]]);
const s = tf.scalar(1);
tf.print(t.add(s));
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
