import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { makeServer } from "./server";
import filters from "./helpers/filters";
import { createI18n } from "vue-i18n";

import en from "./locales/en";
import ru from "./locales/ru";

import "./assets/neumorphism.css";

const app = createApp(App);

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: { en, ru },
});

if (process.env.NODE_ENV === "development") {
  makeServer();
}

app.use(createPinia());
app.use(router);
app.use(i18n);

app.config.globalProperties.$filters = filters;

app.mount("#app");
