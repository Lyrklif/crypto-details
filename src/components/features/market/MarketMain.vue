<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import API from "../../../api";
import type { MarketsItemResponse } from "../../../api/coinpaprika/types";
import SpoilerCard from "../../base/SpoilerCard.vue";
import { useI18n } from "vue-i18n";
import MarketTable from "./table/MarketTable.vue";
import PoweredBy from "../../base/PoweredBy.vue";
import AlertMessage from "../../base/AlertMessage.vue";
import LinesSpinner from "../../base/LinesSpinner.vue";

const { t } = useI18n();
const route = useRoute();
const list = ref<Array<MarketsItemResponse>>([]);
const loading = ref<boolean>(false);
const error = ref<boolean>(false);
const errorText = ref<string>("");

async function load() {
  try {
    loading.value = true;
    error.value = false;
    errorText.value = "";

    const response = await API.coinpaprika.getMarketsByCoin(
      route.params.id as string
    );
    list.value = response.data;
  } catch (e: any) {
    error.value = true;
    errorText.value = e.response.data.error;
  } finally {
    loading.value = false;
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
        <PoweredBy
          site="coinpaprika"
          class="mb-4"
          :loading="loading"
          :fall="error"
        />
        <LinesSpinner v-if="loading" />
        <AlertMessage v-else-if="error" :text="errorText" type="error" />
        <AlertMessage v-else-if="!list.length" :text="t('errors.empty')" />
        <MarketTable v-else :list="list" />
      </template>
    </SpoilerCard>
  </section>
</template>
