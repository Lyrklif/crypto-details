<script setup lang="ts">
import { computed, PropType } from "vue";
import { useI18n } from "vue-i18n";
import type { AssetMetricDataResponse } from "../../../../../api/messari/types";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { ROWS, ROWS_PER_PAGE } from "@/constants/table";

const { t } = useI18n();

const props = defineProps({
  data: Object as PropType<AssetMetricDataResponse>,
});

const tableData = computed(() => {
  const arr: Array<{ name: string; value: any }> = [];

  if (props.data?.supply.circulating) {
    arr.push({ name: "circulating", value: props.data.supply.circulating });
  }
  if (props.data?.supply.liquid) {
    arr.push({ name: "liquid", value: props.data.supply.liquid });
  }
  return arr;
});
</script>

<template>
  <div>
    <h4 class="mb-3">{{ t("metric.roi_by_year") }}</h4>

    <DataTable
      :value="tableData"
      class="w-full p-datatable-sm"
      stripedRows
      removableSort
      paginator
      :rows="ROWS"
      :rowsPerPageOptions="ROWS_PER_PAGE"
    >
      <Column field="name" sortable sortField="name">
        <template #body="{ data }">
          {{ t(`metric.${data.name}`) }}
        </template>
      </Column>
      <Column
        field="value"
        sortable
        sortField="value"
        class="text-right"
        headerClass="text-right flex justify-content-end"
      >
        <template #body="{ data }">
          {{ $filters.number(data.value) }}
        </template>
      </Column>
    </DataTable>
  </div>
</template>
