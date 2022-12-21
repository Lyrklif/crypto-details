<script setup lang="ts">
import { ref } from "vue";
import API from "../../../../api";
import type { TrendingCoinItem } from "../../../../api/coingecko/types";
import TrendItem from "./item/TrendItem.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const emit = defineEmits(["choose"]);

const trendingCoins = ref<Array<TrendingCoinItem>>([]);

async function loadTrendingCoins() {
  try {
    const response = await API.coingecko.trending();
    trendingCoins.value = response.data.coins;
  } catch (error: any) {
    trendingCoins.value = [];
  }
}

loadTrendingCoins();

const choose = (key: string) => {
  emit("choose", key);
};
</script>

<template>
  <ul class="flex-row list-unstyled d-flex flex-wrap">
    <li
      v-for="item in trendingCoins"
      :key="`search-trend-${item.item.id}`"
      class="mb-1 mr-1"
    >
      <TrendItem @choose="choose" :item="item" />
    </li>
  </ul>
</template>
