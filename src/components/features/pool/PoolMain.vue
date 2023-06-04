<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
import API from "../../../api";
import type { Pool } from "../../../api/minerstat/types";
import { useCoinStore } from "../../../stores/coin";
import { useI18n } from "vue-i18n";
import SpoilerCard from "../../base/SpoilerCard.vue";
import AlertMessage from "../../base/AlertMessage.vue";
import LinesSpinner from "../../base/LinesSpinner.vue";

const { t } = useI18n();
const pools = ref<Array<Pool>>([]);
const store = useCoinStore();
const loading = ref<boolean>(false);
const error = ref<boolean>(false);
const errorText = ref<string>("");

async function load() {
  try {
    loading.value = true;
    error.value = false;
    errorText.value = "";

    const response = await API.minerstat.pools(store.symbol);
    pools.value = response.data;
  } catch (e: any) {
    errorText.value = e.response.data.error;
    error.value = true;
  } finally {
    loading.value = false;
  }
}

const AsyncContent = defineAsyncComponent(
  () => import("./table/PoolTable.vue")
);
</script>

<template>
  <SpoilerCard
    :title="`${t('pools.title')} ${pools.length ? `(${pools.length})` : ''}`"
    site="minerstat"
    :loading="loading"
    :fall="error"
    @firstOpen="load"
  >
    <LinesSpinner v-if="loading" />
    <AlertMessage v-else-if="error" :text="errorText" type="error" />
    <AlertMessage v-else-if="!pools.length" :text="t('errors.empty')" />
    <component v-else :pools="pools" :is="AsyncContent" />
  </SpoilerCard>
</template>
