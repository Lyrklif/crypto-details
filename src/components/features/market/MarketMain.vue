<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";
import API from "../../../api";
import SpoilerCard from "../../base/SpoilerCard.vue";
import { useI18n } from "vue-i18n";
import { useInterfaceStore } from "../../../stores/interface";

const { t } = useI18n();
const route = useRoute();
const store = useInterfaceStore();

const AsyncContent = defineAsyncComponent(
  () => import("./table/MarketTable.vue")
);
</script>

<template>
  <SpoilerCard
    :title="t('market.title')"
    site="coinpaprika"
    :asyncComponent="AsyncContent"
    :apiMethod="API.coinpaprika.getMarketsByCoin"
    :apiParams="{ coin_id: route.params.id, quotes: store.currency }"
    reloadCurrency
  />
</template>
