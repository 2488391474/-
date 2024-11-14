import { createApp } from "vue";
import '@/styles/index.scss'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "virtual:svg-icons-register";
import gloablComponent from "./components/index";
import { createPinia } from 'pinia'
import router from '@/router'

const pinia = createPinia()
const app = createApp(App);

app.use(gloablComponent)
.use(pinia)
.use(ElementPlus, {
  locale: zhCn,
})
.use(router);

app.mount("#app");
