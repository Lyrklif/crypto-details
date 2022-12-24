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
    <h4 class="mb-1">{{ t("metric.roi_by_year") }}</h4>
    <table class="table table-striped">
      <tbody>
        <tr v-if="data.supply.circulating">
          <td class="pr-3 py-1">{{ t(`metric.circulating`) }}</td>
          <td class="text-right py-1 text-monospace">
            {{ $filters.price(data.supply.circulating) }}
          </td>
        </tr>
        <tr v-if="data.supply.liquid">
          <td class="pr-3 py-1">{{ t(`metric.liquid`) }}</td>
          <td class="text-right py-1 text-monospace">
            {{ $filters.price(data.supply.liquid) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
