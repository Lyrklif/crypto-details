<script setup lang="ts">
import API from "../../../api";
import { useRoute } from "vue-router";
import { ref } from "vue";
import { useCoinStore } from "../../../stores/coin";
import type { GetCoinByIDResponse } from "../../../api/coinpaprika/types";
import CoinSocial from "./social/CoinSocial.vue";
import CoinTeam from "./team/CoinTeam.vue";
import CoinTags from "./tag/CoinTags.vue";
import CoinStatuses from "./status/CoinStatuses.vue";
import CoinHeader from "./header/CoinHeader.vue";
import CoinDescription from "./description/CoinDescription.vue";
import PoweredBy from "../../base/PoweredBy.vue";
import AlertMessage from "../../base/AlertMessage.vue";
import { useI18n } from "vue-i18n";
import LinesSpinner from "../../base/LinesSpinner.vue";

const { t } = useI18n();
const coin = ref<GetCoinByIDResponse>();
const loading = ref<boolean>(false);
const error = ref<boolean>(false);
const errorText = ref<string>("");
const route = useRoute();
const store = useCoinStore();

async function load() {
  try {
    loading.value = true;
    error.value = false;
    errorText.value = "";

    const response = await API.coinpaprika.getCoinByID(
      route.params.id as string
    );
    coin.value = response.data;
    store.setSymbol(response.data.symbol, response.data.name);
  } catch (e: any) {
    const { text, notFound } = e?.response || {};
    errorText.value = text;
    error.value = !notFound;
  } finally {
    loading.value = false;
  }
}

load();
</script>

<template>
  <div class="col-12 md:col-6">
    <div v-if="loading">
      <LinesSpinner />
    </div>
    <AlertMessage v-else-if="error" :text="errorText" type="error" />
    <AlertMessage v-else-if="!coin" :text="t('errors.empty')" />

    <section v-else>
      <CoinHeader :coin="coin" class="mb-4" />
      <CoinStatuses :coin="coin" class="mb-2" />
      <CoinTags :links="coin.tags" class="mb-2" />
      <CoinSocial :links="coin.links_extended" class="mb-3" />
      <CoinDescription :coin="coin" class="mb-2" />
      <PoweredBy
        site="coinpaprika"
        class="mt-4"
        :loading="loading"
        :fall="error"
      />
    </section>
  </div>

  <CoinTeam
    v-if="coin"
    :links="coin.team"
    :loading="loading"
    :error="error"
    class="col-12 md:col-6"
  />
</template>
