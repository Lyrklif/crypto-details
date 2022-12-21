<script setup lang="ts">
import { PropType } from "vue";
import type { CoinExchangesItem } from "../../../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

defineProps({
  item: Object as PropType<CoinExchangesItem>,
});
</script>

<template>
  <tr>
    <td class="py-1">
      <a
        :href="`https://coinpaprika.com/exchanges/${item.id}`"
        target="_blank"
        :title="item.name"
      >
        {{ item.name }}
      </a>
    </td>
    <td class="py-1">
      {{ $filters.percent(item.adjusted_volume_24h_share, 4) }}
    </td>
    <td class="py-1">
      <small v-for="fiat in item.fiats" :key="fiat.symbol" :title="fiat.name">
        {{ fiat.symbol }} {{ " " }}
      </small>
    </td>
  </tr>
</template>
