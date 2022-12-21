import { ref } from "vue";
import { defineStore } from "pinia";

export const useCoinStore = defineStore("coin", () => {
  const symbol = ref("");
  const name = ref("");

  function setSymbol(key: string, fullName: string) {
    symbol.value = key;
    name.value = fullName;
  }

  return { symbol, name, setSymbol };
});
