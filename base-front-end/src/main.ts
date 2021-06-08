import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { STORE } from "./store";

createApp(App).use(STORE).use(router).mount("#app");
