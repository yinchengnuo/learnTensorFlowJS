<!--
 * @Author: 尹成诺
 * @Date: 2023-02-15 16:37:30
 * @LastEditors: 尹成诺
 * @LastEditTime: 2023-02-15 17:17:28
 * @Description: file content
-->
<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>标量</template>

    标量标量标量标量标量
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>向量／矢量 Vector</template>

    向量／矢量 Vector
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>张量 Tensor</template>

    张量 Tensor 张量 Tensor
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>模型</template>

    模型模型模型模型模型
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>内存</template>

    内存内存内存
  </WelcomeItem>
</template>
