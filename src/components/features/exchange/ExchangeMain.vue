<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import API from "../../../api";
import type { CoinExchangesItem } from "../../../api/coinpaprika/types";
import SpoilerCard from "../../base/SpoilerCard.vue";
import { useI18n } from "vue-i18n";
import ExchangeTable from "./content/ExchangeTable.vue";

const { t } = useI18n();
const route = useRoute();
const list = ref<Array<CoinExchangesItem>>([]);

async function load() {
  try {
    const response = await API.coinpaprika.coinExchanges(
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
      <h2 class="text-hide">{{ t("exchanges.title") }}</h2>
    </header>

    <SpoilerCard
      :title="`${t('exchanges.title')} ${
        list.length ? `(${list.length})` : ''
      }`"
      @firstOpen="load"
    >
      <template #content>
        <ExchangeTable :list="list" class="content" />
      </template>
    </SpoilerCard>
  </section>
</template>
