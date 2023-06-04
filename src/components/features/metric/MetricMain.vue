<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import API from "../../../api";
import { useCoinStore } from "../../../stores/coin";
import { useI18n } from "vue-i18n";
import SpoilerCard from "../../base/SpoilerCard.vue";

const { t } = useI18n();
const store = useCoinStore();
const fields =
  "risk_metrics,roi_by_year,supply,supply_activity,supply_distribution";

const AsyncContent = defineAsyncComponent(
  () => import("./content/MetricsContent.vue")
);
</script>

<template>
  <SpoilerCard
    v-if="store.symbol"
    :title="t('metric.title')"
    site="messari"
    :asyncComponent="AsyncContent"
    :apiMethod="API.messari.assetMetrics"
    :apiParams="{ assetKey: store.symbol, fields }"
  />
</template>
