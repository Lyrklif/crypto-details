import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useSettingsStore = defineStore("settings", () => {
  const lang = useStorage("lang", "");

  function setLang(newLang: string) {
    lang.value = newLang;
  }

  return { lang, setLang };
});
