import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import type { RemovableRef } from "@vueuse/core";

const MAX_LENGTH: number = 7;
const DEFAULT_ARRAY: Array<string> = [];

export interface InterfaceStore {
  items: RemovableRef<Array<string>>;
  setItem: (key: string) => void;
}

export const useSearchHistoryStore = defineStore(
  "search-history",
  (): InterfaceStore => {
    const items = useStorage("history-items", DEFAULT_ARRAY);

    function setItem(key: string): void {
      const arr = [key, ...items.value];
      const uniqArr = [...new Set(arr)];
      if (uniqArr.length > MAX_LENGTH) uniqArr.length = MAX_LENGTH;

      items.value = uniqArr;
    }

    return { items, setItem };
  }
);
