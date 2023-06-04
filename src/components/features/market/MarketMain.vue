<script setup lang="ts">
import { defineAsyncComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";
import API from "../../../api";
import type { MarketsItemResponse } from "../../../api/coinpaprika/types";
import SpoilerCard from "../../base/SpoilerCard.vue";
import { useI18n } from "vue-i18n";
import AlertMessage from "../../base/AlertMessage.vue";
import LinesSpinner from "../../base/LinesSpinner.vue";
import { useInterfaceStore } from "../../../stores/interface";
import { storeToRefs } from "pinia";

const { t } = useI18n();
const route = useRoute();
const store = useInterfaceStore();
const { currency } = storeToRefs(store);
const list = ref<Array<MarketsItemResponse>>([]);
const loading = ref<boolean>(false);
const error = ref<boolean>(false);
const errorText = ref<string>("");

watch(currency, () => {
  load();
});

async function load() {
  try {
    loading.value = true;
    error.value = false;
    errorText.value = "";

    const response = await API.coinpaprika.getMarketsByCoin(
      route.params.id as string,
      store.currency
    );
    list.value = response.data;
  } catch (e: any) {
    error.value = true;
    errorText.value = e.response.data.error;
  } finally {
    loading.value = false;
  }
}

const AsyncContent = defineAsyncComponent(
  () => import("./table/MarketTable.vue")
);
</script>

<template>
  <SpoilerCard
    :title="`${t('market.title')} ${list.length ? `(${list.length})` : ''}`"
    site="coinpaprika"
    :loading="loading"
    :fall="error"
    @firstOpen="load"
  >
    <LinesSpinner v-if="loading" />
    <AlertMessage v-else-if="error" :text="errorText" type="error" />
    <AlertMessage v-else-if="!list.length" :text="t('errors.empty')" />
    <component v-else :list="list" :is="AsyncContent" />
  </SpoilerCard>
</template>
