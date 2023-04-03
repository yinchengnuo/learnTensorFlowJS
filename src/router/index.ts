/*
 * @Author: 尹成诺
 * @Date: 2023-02-15 16:37:30
 * @LastEditors: 尹成诺
 * @LastEditTime: 2023-03-23 10:55:52
 * @Description: file content
 */
import { createRouter, createWebHashHistory } from "vue-router";
import 概念 from "../views/概念.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: 概念 },
    { path: "/线性回归", name: "线性回归", component: () => import("../views/线性回归.vue") },
    { path: "/归一化", name: "归一化", component: () => import("../views/归一化.vue") },
    { path: "/逻辑回归", name: "逻辑回归", component: () => import("../views/逻辑回归.vue") },
    { path: "/多层神经网络", name: "多层神经网络", component: () => import("../views/多层神经网络.vue") },
    { path: "/多分类", name: "多分类", component: () => import("../views/多分类.vue") },
    { path: "/欠拟合与过拟合", name: "欠拟合与过拟合", component: () => import("../views/欠拟合与过拟合.vue") },
    { path: "/卷积神经网络", name: "卷积神经网络", component: () => import("../views/卷积神经网络.vue") },
    { path: "/预训练图片分类模型", name: "预训练图片分类模型", component: () => import("../views/预训练图片分类模型.vue") },
    { path: "/预训练图片分类模型实现", name: "预训练图片分类模型实现", component: () => import("../views/预训练图片分类模型实现.vue") },
    { path: "/预训练语音识别模型", name: "预训练语音识别模型", component: () => import("../views/预训练语音识别模型.vue") },
    { path: "/预训练语音识别模型训练", name: "预训练语音识别模型训练", component: () => import("../views/预训练语音识别模型训练.vue") },
    { path: "/Python&JavaScript模型互转", name: "Python&JavaScript模型互转", component: () => import("../views/Python&JavaScript模型互转.vue") },
  ],
});

router.beforeEach(({ path, query, params }) => {
  if (path !== decodeURIComponent(path)) {
    return {
      query: query,
      replace: true,
      params: params,
      path: decodeURIComponent(path),
    };
  }
});

router.afterEach((to, { name }) => {
  name && window.location.reload();
});

export default router;
