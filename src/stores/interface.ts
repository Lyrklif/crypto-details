import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import {
  defaultInterfaceLang,
  defaultInterfaceCurrency,
} from "../constants/interface";
import type { RemovableRef } from "@vueuse/core";

export interface InterfaceStore {
  lang: RemovableRef<string>;
  currency: RemovableRef<string>;
  setLang: (currentLang: string) => void;
  setCurrency: (currentCurrency: string) => void;
}

export const useInterfaceStore = defineStore("settings", (): InterfaceStore => {
  const lang = useStorage("lang", defaultInterfaceLang);
  const currency = useStorage("currency", defaultInterfaceCurrency);

  function setLang(currentLang: string): void {
    lang.value = currentLang;
  }

  function setCurrency(currentCurrency: string): void {
    currency.value = currentCurrency;
  }

  return { lang, currency, setLang, setCurrency };
});
