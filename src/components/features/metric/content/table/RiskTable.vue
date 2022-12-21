<script setup lang="ts">
import { PropType } from "vue";
import { useI18n } from "vue-i18n";
import type { AssetMetricDataResponse } from "../../../../../api/messari/types";

const { t } = useI18n();

defineProps({
  data: Object as PropType<AssetMetricDataResponse>,
});
</script>

<template>
  <div>
    <h4 class="mb-1">{{ t("metric.risk") }}</h4>
    <table class="table mb-3 table-striped">
      <tbody>
        <tr
          v-for="key in Object.keys(data.risk_metrics.sharpe_ratios)"
          :key="`sharpe_ratios-${key}`"
          v-show="data.risk_metrics.sharpe_ratios[key]"
        >
          <td class="pr-3 py-1">{{ t(`metric.${key}`) }}</td>
          <td class="text-right py-1">
            {{ $filters.price(data.risk_metrics.sharpe_ratios[key]) }}
          </td>
        </tr>
        <tr
          v-for="key in Object.keys(data.risk_metrics.volatility_stats)"
          :key="`volatility_stats-${key}`"
          v-show="data.risk_metrics.volatility_stats[key]"
        >
          <td class="pr-3 py-1">{{ t(`metric.${key}`) }}</td>
          <td class="text-right py-1">
            {{ $filters.price(data.risk_metrics.volatility_stats[key]) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
