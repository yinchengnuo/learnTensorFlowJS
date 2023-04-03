<!--
 * @Author: 尹成诺
 * @Date: 2023-02-15 16:37:30
 * @LastEditors: 尹成诺
 * @LastEditTime: 2023-03-23 10:56:33
 * @Description: file content
-->
<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

const Router = useRouter()

const li = computed(() => {
  return Router.currentRoute.value.query.li
})
</script>

<template>
  <header v-if="!li">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="TensorFlowJS 学习笔记" />
      <nav>
        <RouterLink replace to="/">概念</RouterLink>
        <RouterLink replace to="/线性回归">线性回归</RouterLink>
        <RouterLink replace to="/归一化">归一化</RouterLink>
        <RouterLink replace to="/逻辑回归">逻辑回归</RouterLink>
        <RouterLink replace to="/多层神经网络">多层神经网络</RouterLink>
        <RouterLink replace to="/多分类">多分类</RouterLink>
        <RouterLink replace to="/欠拟合与过拟合">欠拟合与过拟合</RouterLink>
        <RouterLink replace to="/卷积神经网络">卷积神经网络</RouterLink>
        <RouterLink replace to="/预训练图片分类模型">预训练图片分类模型</RouterLink>
        <RouterLink replace to="/预训练图片分类模型实现">预训练图片分类模型实现</RouterLink>
        <RouterLink replace to="/预训练语音识别模型">预训练语音识别模型</RouterLink>
        <RouterLink replace to="/预训练语音识别模型训练">预训练语音识别模型训练</RouterLink>
        <RouterLink replace to="/Python&JavaScript模型互转">Python&JavaScript模型互转</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  margin: 4px 0px;
  padding: 0 1rem;
  display: inline-block;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
