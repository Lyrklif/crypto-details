<script setup lang="ts">
import { PropType, ref } from "vue";
import API from "../../../../api";
import type { TrendingCoinItem } from "../../../../api/coingecko/types";
import TrendItem from "./item/TrendItem.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const trendingCoins = ref<Array<TrendingCoinItem>>([]);
const emit = defineEmits(["choose"]);
defineProps({
  isDisabled: Boolean as PropType<boolean>,
});

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
  <ul class="list-unstyled">
    <li
      v-for="item in trendingCoins"
      :key="`search-trend-${item.item.id}`"
      class="mb-1 mr-1 d-inline-block"
    >
      <TrendItem @choose="choose" :item="item" :is-disabled="isDisabled" />
    </li>
  </ul>
</template>
