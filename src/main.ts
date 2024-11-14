import { createApp } from "vue";
import '@/styles/index.scss'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "virtual:svg-icons-register";
import gloablComponent from "./components/index";
    
const app = createApp(App);

app.use(gloablComponent);

app.use(ElementPlus, {
  locale: zhCn,
});

app.mount("#app");
