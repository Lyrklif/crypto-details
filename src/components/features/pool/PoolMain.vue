<script setup lang="ts">
import { ref } from "vue";
import API from "../../../api";
import type { Pool } from "../../../api/minerstat/types";
import { useCoinStore } from "../../../stores/coin";
import { useI18n } from "vue-i18n";
import SpoilerCard from "../../base/SpoilerCard.vue";
import PoolTable from "./table/PoolTable.vue";
import PoweredBy from "../../base/PoweredBy.vue";
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
</script>

<template>
  <section>
    <header>
      <h2 class="text-hide">{{ t("pools.title") }}</h2>
    </header>

    <SpoilerCard
      :title="`${t('pools.title')} ${pools.length ? `(${pools.length})` : ''}`"
      @firstOpen="load"
    >
      <template #content>
        <LinesSpinner v-if="loading" />
        <AlertMessage v-else-if="error" :text="errorText" type="error" />
        <AlertMessage v-else-if="!pools.length" :text="t('errors.empty')" />
        <PoolTable v-else :pools="pools" />

        <PoweredBy
          site="minerstat"
          class="mt-4"
          :loading="loading"
          :fall="error"
        />
      </template>
    </SpoilerCard>
  </section>
</template>
