/*
 * @Author: 尹成诺
 * @Date: 2023-02-15 16:37:30
 * @LastEditors: 尹成诺
 * @LastEditTime: 2023-02-15 17:19:59
 * @Description: file content
 */
import { createRouter, createWebHashHistory } from "vue-router";
import 概念 from "../views/概念.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: 概念,
    },
    {
      path: "/线性回归",
      name: "线性回归",
      component: () => import("../views/线性回归.vue"),
    },
    {
      path: "/逻辑回归",
      name: "逻辑回归",
      component: () => import("../views/逻辑回归.vue"),
    },
  ],
});

router.beforeEach(({ path }) => {
  if (path !== decodeURIComponent(path)) {
    return {
      replace: true,
      path: decodeURIComponent(path),
    };
  }
});

export default router;
