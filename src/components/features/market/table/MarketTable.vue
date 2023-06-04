<script setup lang="ts">
import { PropType } from "vue";
import type { MarketsItemResponse } from "../../../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { MARKET_TRUST } from "../../../../api/coinpaprika/types";
import Tag from "primevue/tag";

const { t } = useI18n();

const scoreSeverity = {
  [MARKET_TRUST.HIGH]: "success",
  [MARKET_TRUST.MEDIUM]: "info",
  [MARKET_TRUST.LOW]: "warning",
  [MARKET_TRUST.NO_DATA]: "danger",
};

defineProps({
  list: Array as PropType<Array<MarketsItemResponse>>,
});
</script>

<template>
  <DataTable :value="list" class="w-full" stripedRows removableSort>
    <Column field="exchange_name" :header="t('market.exchange')" sortable>
      <template #body="{ data }">
        <a
          :href="data.market_url"
          target="_blank"
          class="text-decoration-none"
          :title="data.exchange_name"
          >{{ data.exchange_name }}</a
        >
      </template>
    </Column>
    <Column field="quotes" :header="t('market.price')" sortable>
      <template #body="{ data }">
        <b
          v-for="fiatKey in Object.keys(data.quotes)"
          :key="`fiat-${data.exchange_id}-${fiatKey}`"
          class="mb-0 block"
        >
          {{ $filters.price(data.quotes[fiatKey].price, 6) }}
        </b>
      </template>
    </Column>
    <Column field="pair" :header="t('market.pair')" sortable sortField="pair">
      <template #body="{ data }">
        {{ data.pair }}
      </template>
    </Column>
    <Column field="trust_score" :header="t('market.trust_score')" sortable>
      <template #body="{ data }">
        <Tag
          :severity="scoreSeverity[data.trust_score]"
          :value="t(`market.trust_score_value.${data.trust_score}`)"
        />
      </template>
    </Column>
    <Column
      field="adjusted_volume_24h_share"
      :header="t('market.volume')"
      sortable
    >
      <template #body="{ data }">
        {{ $filters.percent(data.adjusted_volume_24h_share) }}
      </template>
    </Column>
    <Column field="category" :header="t('market.category')" sortable>
      <template #body="{ data }">
        {{ data.category }}
      </template>
    </Column>
  </DataTable>
</template>
