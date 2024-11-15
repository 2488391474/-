import { createApp } from "vue";
import "@/styles/index.scss";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "virtual:svg-icons-register";
import gloablComponent from "./components/index";
import router from "@/router";
import pinia from "./store";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app
  .use(gloablComponent)
  .use(pinia)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .use(router);

app.mount("#app");
