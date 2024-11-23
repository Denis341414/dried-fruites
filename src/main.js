import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "./router";
const pinia = createPinia();

import "./ALL.css";
import App from "./App.vue";

const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
