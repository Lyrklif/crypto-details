<script setup lang="ts">
import type { PropType } from "vue";
import type { GetCoinByIDResponse } from "../../../../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { computed } from "vue";
import { ROWS, ROWS_PER_PAGE } from "@/constants/table";

const { t } = useI18n();
const props = defineProps({
  coin: Object as PropType<GetCoinByIDResponse>,
});

const tableData = computed(() => {
  const { coin } = props;
  if (!coin) return [];
  const arr = [
    { name: "coin.started_at", value: coin.started_at, date: true },
    { name: "coin.last_data_at", value: coin.last_data_at, date: true },
    { name: "coin.hash_algorithm", value: coin.hash_algorithm },
    { name: "coin.org_structure", value: coin.org_structure },
    { name: "coin.proof_type", value: coin.proof_type },
    { name: "coin.type", value: coin.type },
  ];
  return arr;
});
</script>

<template>
  <DataTable
    class="table p-datatable-sm w-full"
    :value="tableData"
    paginator
    :rows="ROWS"
    :rowsPerPageOptions="ROWS_PER_PAGE"
    :alwaysShowPaginator="false"
  >
    <Column field="name" headerClass="hidden">
      <template #body="{ data }">
        {{ t(data.name) }}
      </template>
    </Column>
    <Column field="value" headerClass="hidden">
      <template #body="{ data }">
        <div v-if="data.date">
          <i class="icon-calendar mr-2" />
          <span>{{ data.value ? $filters.date(data.value) : "-" }}</span>
        </div>
        <div v-else>
          {{ data.value || "-" }}
        </div>
      </template>
    </Column>
  </DataTable>
</template>
