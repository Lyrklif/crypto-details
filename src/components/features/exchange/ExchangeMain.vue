<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";
import API from "../../../api";
import SpoilerCard from "../../base/SpoilerCard.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const route = useRoute();

const AsyncContent = defineAsyncComponent(
  () => import("./content/ExchangeTable.vue")
);
</script>

<template>
  <SpoilerCard
    :title="t('exchanges.title')"
    site="coinpaprika"
    :asyncComponent="AsyncContent"
    :apiMethod="API.coinpaprika.coinExchanges"
    :apiParams="{ coin_id: route.params.id }"
  />
</template>
