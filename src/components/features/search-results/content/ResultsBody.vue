<script setup lang="ts">
import type { PropType } from "vue";
import type { SearchCurrencyItem } from "../../../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";
import ResultsItem from "./item/ResultsItem.vue";

const { t } = useI18n();
defineProps({
  items: Array as PropType<Array<SearchCurrencyItem>>,
});
</script>

<template>
  <ul class="list-unstyled">
    <li v-for="item in items" :key="`search-result-${item.id}`" class="mb-3">
      <ResultsItem :item="item" />
    </li>
  </ul>
</template>
