<script setup lang="ts">
import { ref } from "vue";
import API from "../../../api";
import { useCoinStore } from "../../../stores/coin";
import { useI18n } from "vue-i18n";
import SpoilerCard from "../../base/SpoilerCard.vue";
import type { AssetMetricDataResponse } from "../../../api/messari/types";
import { ASSET_ERRORS } from "../../../api/messari/types";
import MetricsContent from "./content/MetricsContent.vue";
import PoweredBy from "../../base/PoweredBy.vue";
import AlertMessage from "../../base/AlertMessage.vue";
import LinesSpinner from "../../base/LinesSpinner.vue";

const { t } = useI18n();
const store = useCoinStore();
const data = ref<AssetMetricDataResponse | null>(null);
const loading = ref<boolean>(false);
const error = ref<boolean>(false);
const errorText = ref<string>("");

async function load() {
  try {
    loading.value = true;
    error.value = false;
    errorText.value = "";

    const fields =
      "risk_metrics,roi_by_year,supply,supply_activity,supply_distribution";
    const response = await API.messari.assetMetrics(store.symbol, fields);
    data.value = response.data.data;
  } catch (e: any) {
    const notFound = e.response.status === ASSET_ERRORS.NOT_FOUND;

    data.value = null;
    errorText.value = e.response.statusText;
    error.value = !notFound;
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <section>
    <header>
      <h2 class="text-hide">{{ t("metric.title") }}</h2>
    </header>

    <SpoilerCard
      :title="t('metric.title')"
      site="messari"
      :loading="loading"
      :fall="error"
      @firstOpen="load"
    >
      <LinesSpinner v-if="loading" />
      <AlertMessage v-else-if="error" :text="errorText" type="error" />
      <AlertMessage v-else-if="!data" :text="t('errors.empty')" />
      <MetricsContent v-else :data="data" />
    </SpoilerCard>
  </section>
</template>
