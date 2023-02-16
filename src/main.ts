/*
 * @Author: 尹成诺
 * @Date: 2023-02-15 16:37:30
 * @LastEditors: 尹成诺
 * @LastEditTime: 2023-02-16 10:19:58
 * @Description: file content
 */
import { createApp } from "vue";
import { createPinia } from "pinia";
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(ElementPlus);
app.use(router);

app.mount("#app");
