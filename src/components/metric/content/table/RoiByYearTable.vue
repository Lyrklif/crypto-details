<script setup lang="ts">
import { PropType } from "vue";
import { useI18n } from "vue-i18n";
import type { AssetMetricDataResponse } from "../../../../api/messari/types";

const { t } = useI18n();

defineProps({
  data: Object as PropType<AssetMetricDataResponse>,
});
</script>

<template>
  <div>
    <h4 class="mb-1">{{ t("metric.roi_by_year") }}</h4>
    <table class="table mb-3 table-striped">
      <tbody>
        <tr
          v-for="key in Object.keys(data.roi_by_year)"
          :key="`roi_by_year-${key}`"
          v-show="data.roi_by_year[key]"
        >
          <td class="pr-3 py-1">{{ parseInt(key) }}</td>
          <td
            class="text-right py-1"
            :class="data.roi_by_year[key] >= 0 ? 'text-success' : 'text-danger'"
          >
            {{ data.roi_by_year[key] > 0 ? "+" : "" }}
            {{ $filters.percent(data.roi_by_year[key]) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
