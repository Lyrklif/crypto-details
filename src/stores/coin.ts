import { ref } from "vue";
import { defineStore } from "pinia";

export const useCoinStore = defineStore("coin", () => {
  const symbol = ref("");

  function setSymbol(key: string) {
    symbol.value = key;
  }

  return { symbol, setSymbol };
});
