<script setup lang="ts">
import { ref } from "vue";
import API from "../../../api";
import type { Pool } from "../../../api/minerstat/types";
import { useCoinStore } from "../../../stores/coin";
import { useI18n } from "vue-i18n";
import SpoilerCard from "../../base/SpoilerCard.vue";
import PoolTable from "./table/PoolTable.vue";
import PoweredBy from "../../base/PoweredBy.vue";

const { t } = useI18n();
const pools = ref<Array<Pool>>([]);
const store = useCoinStore();
const loading = ref<boolean>(false);
const error = ref<boolean>(false);

async function load() {
  try {
    loading.value = true;
    error.value = false;

    const response = await API.minerstat.pools(store.symbol);
    pools.value = response.data;
  } catch (error: any) {
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
        <PoweredBy
          site="minerstat"
          class="mb-4"
          :loading="loading"
          :fall="error"
        />
        <PoolTable :pools="pools" />
      </template>
    </SpoilerCard>
  </section>
</template>
