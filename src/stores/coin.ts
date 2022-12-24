import { ref } from "vue";
import type { Ref } from "vue";
import { defineStore } from "pinia";

interface CoinStore {
  symbol: Ref<string>;
  name: Ref<string>;
  setSymbol: (key: string, fullName: string) => void;
}

export const useCoinStore = defineStore("coin", (): CoinStore => {
  const symbol = ref("");
  const name = ref("");

  function setSymbol(key: string, fullName: string) {
    symbol.value = key;
    name.value = fullName;
  }

  return { symbol, name, setSymbol };
});
