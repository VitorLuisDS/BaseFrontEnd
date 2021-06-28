import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { STORE } from "./store";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import '@/style/global.sass';
createApp(App).use(STORE).use(router).use(ElementPlus).mount("#app");
