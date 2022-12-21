<script setup lang="ts">
import { ref } from "vue";
import API from "../../api";
import { useCoinStore } from "../../stores/coin";
import { useI18n } from "vue-i18n";
import SpoilerCard from "../base/SpoilerCard.vue";
import type { AssetMetricDataResponse } from "../../api/messari/types";
import MetricsContent from "./content/MetricsContent.vue";

const { t } = useI18n();
const store = useCoinStore();
const data = ref<AssetMetricDataResponse>();

async function load() {
  try {
    const fields =
      "risk_metrics,roi_by_year,supply,supply_activity,supply_distribution";
    const response = await API.messari.assetMetrics(store.symbol, fields);
    data.value = response.data.data;
  } catch (error: any) {
    // TODO error
  }
}
</script>

<template>
  <section>
    <header>
      <h2 class="text-hide">{{ t("metric.title") }}</h2>
    </header>

    <SpoilerCard :title="`${t('metric.title')}`" @firstOpen="load">
      <template #content v-if="data">
        <MetricsContent :data="data" />
      </template>
    </SpoilerCard>
  </section>
</template>
