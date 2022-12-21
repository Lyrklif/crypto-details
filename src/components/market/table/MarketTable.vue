<script setup lang="ts">
import { PropType } from "vue";
import type { MarketsItemResponse } from "../../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";
import MarketItem from "./item/MarketItem.vue";

const { t } = useI18n();

defineProps({
  list: Array as PropType<Array<MarketsItemResponse>>,
});
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th>{{ t("market.exchange") }}</th>
        <th>{{ t("market.price") }}</th>
        <th>{{ t("market.pair") }}</th>
        <th>{{ t("market.trust_score") }}</th>
        <th>{{ t("market.volume") }}</th>
        <th>{{ t("market.category") }}</th>
      </tr>
    </thead>
    <tbody>
      <MarketItem
        v-for="item in list"
        :key="`markets-${item.exchange_id}`"
        :item="item"
      />
    </tbody>
  </table>
</template>
