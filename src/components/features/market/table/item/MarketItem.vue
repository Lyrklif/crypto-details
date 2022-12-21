<script setup lang="ts">
import { PropType } from "vue";
import type { MarketsItemResponse } from "../../../../../api/coinpaprika/types";
import { MARKET_TRUST } from "../../../../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const badgeClasses = {
  [MARKET_TRUST.HIGH]: "badge-success",
  [MARKET_TRUST.MEDIUM]: "badge-secondary",
  [MARKET_TRUST.LOW]: "badge-danger",
  [MARKET_TRUST.NO_DATA]: "badge-dark",
};

defineProps({
  item: Object as PropType<MarketsItemResponse>,
});
</script>

<template>
  <tr>
    <td class="py-1">
      <a
        :href="item.market_url"
        target="_blank"
        class="text-decoration-none"
        :title="item.exchange_name"
        >{{ item.exchange_name }}</a
      >
    </td>
    <td class="py-1">
      <b
        v-for="fiatKey in Object.keys(item.quotes)"
        :key="`fiat-${item.exchange_id}-${fiatKey}`"
        class="mb-0 d-block text-monospace"
      >
        {{ $filters.price(item.quotes[fiatKey].price, 6) }}
        {{ fiatKey }}
      </b>
    </td>
    <td class="py-1 text-monospace">{{ item.pair }}</td>
    <td class="py-1">
      <span
        class="badge text-monospace"
        :class="badgeClasses[item.trust_score]"
      >
        {{ t(`market.trust_score_value.${item.trust_score}`) }}
      </span>
    </td>
    <td class="py-1">
      {{ $filters.percent(item.adjusted_volume_24h_share) }}
    </td>
    <td class="py-1">{{ item.category }}</td>
  </tr>
</template>
