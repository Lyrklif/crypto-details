import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { makeServer } from "./server";
import filters from "./helpers/filters";
import { createI18n } from "vue-i18n";
import { useInterfaceStore } from "./stores/interface";
import { defaultInterfaceLang } from "./constants/interface";
import VueLazyload from "vue-lazyload";

import en from "./locales/en";
import ru from "./locales/ru";

import "./assets/style.css";
import "./assets/neumorphism.css";

const app = createApp(App);

app.use(createPinia());
const settingsStore = useInterfaceStore();

const i18n = createI18n({
  legacy: false,
  locale: settingsStore.lang || defaultInterfaceLang,
  fallbackLocale: defaultInterfaceLang,
  messages: { en, ru },
});

app.use(router);
app.use(i18n);
app.use(VueLazyload);

app.config.globalProperties.$filters = filters;

if (process.env.NODE_ENV === "development") {
  // comment this line to get real api data
  // makeServer();
}
app.mount("#app");
