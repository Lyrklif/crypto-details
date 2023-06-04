<script setup lang="ts">
import type { PropType } from "vue";
import type { GetCoinByIDResponse } from "../../../../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";
import DataTable from "primevue/datatable";

const { t } = useI18n();
defineProps({
  coin: Object as PropType<GetCoinByIDResponse>,
});
</script>

<template>
  <DataTable class="p-datatable-sm">
    <tbody class="p-datatable-tbody">
      <tr>
        <td>{{ t("coin.started_at") }}</td>
        <td>
          <span class="small">
            <i class="icon-calendar mr-1" />
            <span>{{ $filters.date(coin.started_at) || "-" }}</span>
          </span>
        </td>
      </tr>
      <tr>
        <td>{{ t("coin.last_data_at") }}</td>
        <td>
          <span class="small">
            <i class="icon-calendar mr-1" />
            <span>{{ $filters.date(coin.last_data_at) || "-" }}</span>
          </span>
        </td>
      </tr>
      <tr>
        <td>{{ t("coin.hash_algorithm") }}</td>
        <td>{{ coin.hash_algorithm || "-" }}</td>
      </tr>
      <tr>
        <td>{{ t("coin.org_structure") }}</td>
        <td>{{ coin.org_structure || "-" }}</td>
      </tr>
      <tr>
        <td>{{ t("coin.proof_type") }}</td>
        <td>{{ coin.proof_type || "-" }}</td>
      </tr>

      <tr>
        <td>{{ t("coin.type") }}</td>
        <td>{{ coin.type || "-" }}</td>
      </tr>
    </tbody>
  </DataTable>
</template>
