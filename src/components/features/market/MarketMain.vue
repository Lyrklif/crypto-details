<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import API from "../../../api";
import type { MarketsItemResponse } from "../../../api/coinpaprika/types";
import SpoilerCard from "../../base/SpoilerCard.vue";
import { useI18n } from "vue-i18n";
import MarketTable from "./table/MarketTable.vue";

const { t } = useI18n();
const route = useRoute();
const list = ref<Array<MarketsItemResponse>>([]);

async function load() {
  try {
    const response = await API.coinpaprika.getMarketsByCoin(
      route.params.id as string
    );
    list.value = response.data;
  } catch (error: any) {
    // TODO error
  }
}
</script>

<template>
  <section>
    <header>
      <h2 class="text-hide">{{ t("market.title") }}</h2>
    </header>

    <SpoilerCard
      :title="`${t('market.title')} ${list.length ? `(${list.length})` : ''}`"
      @firstOpen="load"
    >
      <template #content>
        <MarketTable :list="list" />
      </template>
    </SpoilerCard>
  </section>
</template>
