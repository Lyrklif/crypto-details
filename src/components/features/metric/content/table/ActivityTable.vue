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
    <h4 class="mb-1">{{ t("metric.supply_activity") }}</h4>
    <table class="table table-striped">
      <tbody>
        <tr
          v-for="key in Object.keys(data.supply_activity)"
          :key="`supply_activity-${key}`"
          v-show="data.supply_activity[key]"
        >
          <td class="pr-3 py-1">{{ t(`metric.${key}`) }}</td>
          <td class="text-right py-1 text-monospace">
            {{ $filters.price(data.supply_activity[key]) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
