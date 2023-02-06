import { createApp } from "vue";
import FloatingVue from "floating-vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "floating-vue/dist/style.css";

const app = createApp(App);

app.use(FloatingVue);

app.use(router);

app.mount("#app");
