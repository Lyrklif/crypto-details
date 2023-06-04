<script setup lang="ts">
import { computed, PropType } from "vue";
import { useI18n } from "vue-i18n";
import type {
  AssetMetricDataResponse,
  MetricRoiByYear,
} from "../../../../../api/messari/types";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

const { t } = useI18n();

const props = defineProps({
  data: Object as PropType<AssetMetricDataResponse>,
});

const tableData = computed(() => {
  const years: MetricRoiByYear | undefined = props.data?.roi_by_year;
  if (!years) return [];
  const keys: Array<string> = Object.keys(years);
  return keys.map((key): { year: string; value: any } => {
    // @ts-ignore
    const value = years[key];
    return { year: key, value };
  });
});
</script>

<template>
  <div>
    <h4 class="mb-2">{{ t("metric.roi_by_year") }}</h4>
    <DataTable
      :value="tableData"
      class="w-full p-datatable-sm"
      stripedRows
      removableSort
    >
      <Column field="year" sortable sortField="year">
        <template #body="{ data }">
          {{ parseInt(data.year) }}
        </template>
      </Column>
      <Column
        field="value"
        sortable
        sortField="value"
        headerClass="text-right flex justify-content-end"
      >
        <template #body="{ data }">
          <div
            class="text-right"
            :class="{
              'text-green-500': data.value > 0,
              'text-red-500': data.value < 0,
            }"
          >
            {{ data.value > 0 ? "+" : "" }}{{ $filters.percent(data.value) }}
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
