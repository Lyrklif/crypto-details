<script setup lang="ts">
import { PropType } from "vue";
import type { CoinExchangesItem } from "../../../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

const { t } = useI18n();

defineProps({
  list: Array as PropType<Array<CoinExchangesItem>>,
});
</script>

<template>
  <DataTable :value="list" class="w-full" stripedRows removableSort>
    <Column
      field="source"
      :header="t('exchanges.source')"
      sortable
      sortField="name"
    >
      <template #body="{ data }">
        <a
          :href="`https://coinpaprika.com/exchanges/${data.id}`"
          target="_blank"
          :title="data.name"
        >
          {{ data.name }}
        </a>
      </template>
    </Column>
    <Column
      field="volume"
      :header="t('exchanges.volume')"
      sortable
      sortField="adjusted_volume_24h_share"
    >
      <template #body="{ data }">
        <div class="text-monospace">
          {{ $filters.percent(data.adjusted_volume_24h_share, 4) }}
        </div>
      </template>
    </Column>
    <Column
      field="fiats"
      :header="t('exchanges.fiats')"
      sortable
      sortField="fiats"
    >
      <template #body="{ data }">
        <span v-for="fiat in data.fiats" :key="fiat.symbol" :title="fiat.name">
          {{ fiat.symbol }} {{ " " }}
        </span>
      </template>
    </Column>
  </DataTable>
</template>
