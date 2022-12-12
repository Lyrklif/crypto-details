import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { makeServer } from "./server";

import "./assets/neumorphism.css";

const app = createApp(App);

if (process.env.NODE_ENV === "development") {
  makeServer();
}

app.use(createPinia());
app.use(router);

app.mount("#app");
