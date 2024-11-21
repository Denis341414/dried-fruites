import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "./router";

import "./ALL.css";
import App from "./App.vue";

const app = createApp(App).use(createPinia()).use(router).mount("#app");
