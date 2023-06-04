<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import API from "../../../api";
import { useCoinStore } from "../../../stores/coin";
import { useI18n } from "vue-i18n";
import SpoilerCard from "../../base/SpoilerCard.vue";

const { t } = useI18n();
const store = useCoinStore();

const AsyncContent = defineAsyncComponent(
  () => import("./table/PoolTable.vue")
);
</script>

<template>
  <SpoilerCard
    v-if="store.symbol"
    :title="t('pools.title')"
    site="minerstat"
    :asyncComponent="AsyncContent"
    :apiMethod="API.minerstat.pools"
    :apiParams="{ coin: store.symbol }"
  />
</template>
