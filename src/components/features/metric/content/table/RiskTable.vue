<script setup lang="ts">
import { computed, PropType } from "vue";
import { useI18n } from "vue-i18n";
import type {
  AssetMetricDataResponse,
  MetricSharpeRatios,
  MetricVolatilityStats,
} from "../../../../../api/messari/types";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { ROWS, ROWS_PER_PAGE } from "@/constants/table";

const { t } = useI18n();

const props = defineProps({
  data: Object as PropType<AssetMetricDataResponse>,
});

const sharpeRatiosData = computed(() => {
  const ratios: MetricSharpeRatios | undefined =
    props.data?.risk_metrics.sharpe_ratios;
  if (!ratios) return [];
  const keys: Array<string> = Object.keys(ratios);
  return keys.map((key): { key: string; value: any } => {
    // @ts-ignore
    const value = ratios[key];
    return { key, value };
  });
});

const statsData = computed(() => {
  const stats: MetricVolatilityStats | undefined =
    props.data?.risk_metrics.volatility_stats;
  if (!stats) return [];
  const keys: Array<string> = Object.keys(stats);
  return keys.map((key): { key: string; value: any } => {
    // @ts-ignore
    const value = stats[key];
    return { key, value };
  });
});
</script>

<template>
  <div>
    <h4 class="mb-2">{{ t("metric.risk") }}</h4>
    <DataTable
      :value="sharpeRatiosData"
      class="w-full p-datatable-sm mb-4"
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
        class="text-right"
        headerClass="text-right flex justify-content-end"
      >
        <template #body="{ data }">
          {{ $filters.number(data.value, 2) }}
        </template>
      </Column>
    </DataTable>

    <DataTable
      :value="statsData"
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
        class="text-right"
      >
        <template #body="{ data }">
          {{ $filters.number(data.value, 2) }}
        </template>
      </Column>
    </DataTable>
  </div>
</template>
