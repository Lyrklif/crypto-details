<script setup lang="ts">
import { ref } from "vue";
import API from "../../../api";
import { useCoinStore } from "../../../stores/coin";
import { useI18n } from "vue-i18n";
import SpoilerCard from "../../base/SpoilerCard.vue";
import type { AssetMetricDataResponse } from "../../../api/messari/types";
import MetricsContent from "./content/MetricsContent.vue";
import PoweredBy from "../../base/PoweredBy.vue";
import ErrorRequest from "../../base/ErrorMessage.vue";

const { t } = useI18n();
const store = useCoinStore();
const data = ref<AssetMetricDataResponse>();
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
    errorText.value = e.response.statusText;
    error.value = true;
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

    <SpoilerCard :title="`${t('metric.title')}`" @firstOpen="load">
      <template #content>
        <PoweredBy
          site="messari"
          class="mb-4"
          :loading="loading"
          :fall="error"
        />
        <ErrorRequest v-if="error" :text="errorText" />
        <MetricsContent :data="data" v-else-if="data" />
      </template>
    </SpoilerCard>
  </section>
</template>
