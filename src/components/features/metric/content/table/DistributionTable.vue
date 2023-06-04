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
  const values = props.data?.supply_distribution;
  if (!values) return [];
  const keys: Array<string> = Object.keys(values);
  return keys.map((key): { key: string; value: any } => {
    // @ts-ignore
    const value = values[key];
    return { key, value };
  });
});
</script>

<template>
  <div>
    <h4 class="mb-3">{{ t("metric.supply_distribution") }}</h4>
    <DataTable
      :value="tableData"
      class="w-full p-datatable-sm"
      stripedRows
      removableSort
      paginator
      :rows="ROWS"
      :rowsPerPageOptions="ROWS_PER_PAGE"
      :alwaysShowPaginator="false"
    >
      <Column field="key" sortable sortField="key">
        <template #body="{ data }">
          {{ t(`metric.${data.key}`) }}
        </template>
      </Column>
      <Column
        field="value"
        sortable
        sortField="value"
        headerClass="text-right flex justify-content-end"
      >
        <template #body="{ data }">
          {{ $filters.number(data.value) }}
        </template>
      </Column>
    </DataTable>
  </div>
</template>
