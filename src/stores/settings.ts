import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { defaultInterfaceLang } from "../constants/settings";

export const useSettingsStore = defineStore("settings", () => {
  const lang = useStorage("lang", navigator.language || defaultInterfaceLang);

  function setLang(newLang: string) {
    lang.value = newLang;
  }

  return { lang, setLang };
});
