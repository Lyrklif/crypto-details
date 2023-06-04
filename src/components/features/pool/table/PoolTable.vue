<script setup lang="ts">
import { PropType } from "vue";
import type { Pool } from "../../../../api/minerstat/types";
import { useI18n } from "vue-i18n";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { useCoinStore } from "../../../../stores/coin";
import Tag from "primevue/tag";
import { ROWS, ROWS_PER_PAGE } from "@/constants/table";

const { t } = useI18n();
const store = useCoinStore();

defineProps({
  pools: Array as PropType<Array<Pool>>,
});
</script>

<template>
  <DataTable
    :value="pools"
    class="w-full p-datatable-sm"
    stripedRows
    removableSort
    paginator
    :rows="ROWS"
    :rowsPerPageOptions="ROWS_PER_PAGE"
    :alwaysShowPaginator="false"
  >
    <Column field="site" :header="t('pools.name')" sortable sortField="name">
      <template #body="{ data }">
        <a
          :href="data.website"
          target="_blank"
          :title="data.name"
          class="btn btn-sm btn-primary btn-pill text-info py-1"
        >
          {{ data.name }}
        </a>
      </template>
    </Column>
    <Column
      field="fee"
      :header="t('pools.fee')"
      sortable
      :sortField="`coins.${store.symbol}.fee`"
    >
      <template #body="{ data }">
        {{ data.coins[store.symbol].fee }}
      </template>
    </Column>
    <Column
      field="payout_threshold"
      :header="t('pools.payout_threshold')"
      sortable
      :sortField="`coins.${store.symbol}.payoutThreshold`"
    >
      <template #body="{ data }">
        {{ data.coins[store.symbol].payoutThreshold }}
      </template>
    </Column>
    <Column
      field="reward_method"
      :header="t('pools.reward_method')"
      sortable
      :sortField="`coins.${store.symbol}.rewardMethod`"
    >
      <template #body="{ data }">
        {{ data.coins[store.symbol].rewardMethod }}
      </template>
    </Column>
    <Column>
      <template #body="{ data }">
        <Tag severity="info" :value="data.coins[store.symbol].algorithm" />
        <Tag
          v-if="data.coins[store.symbol].registration"
          severity="warning"
          :value="t('pools.registration')"
        />
        <Tag
          v-if="data.coins[store.symbol].anonymous"
          severity="success"
          :value="t('pools.anonymous')"
        />
      </template>
    </Column>
  </DataTable>
</template>
