import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// 引入全局样式
import "@/assets/styles/index.scss";

import Vant from "vant";
import "vant/lib/index.css";

import "./utils/rem";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(Vant);
app.mount("#app");
