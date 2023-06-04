<script setup lang="ts">
import type { PropType } from "vue";
import type { TeamItem } from "../../../../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { ROWS, ROWS_PER_PAGE } from "@/constants/table";

const { t } = useI18n();
defineProps({
  links: { type: Array as PropType<Array<TeamItem>>, default: () => [] },
});
</script>

<template>
  <DataTable
    :value="links"
    class="p-datatable-sm"
    stripedRows
    removableSort
    paginator
    :rows="ROWS"
    :rowsPerPageOptions="ROWS_PER_PAGE"
  >
    <Column field="name" :header="t('team.name')" sortable sortField="name" />
    <Column
      field="position"
      :header="t('team.position')"
      sortable
      sortField="position"
    />
  </DataTable>
</template>
