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
import PriceWidget from "../CoinPrice.vue";
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
    error.value = true;
    errorText.value = e.response.data.error;
  } finally {
    loading.value = false;
  }
}

load();
</script>

<template>
  <div>
    <div class="row">
      <div v-if="loading" class="col-12 col-lg-6">
        <LinesSpinner />
      </div>
      <AlertMessage
        v-else-if="error"
        :text="errorText"
        type="error"
        class="col-12 col-lg-6"
      />
      <AlertMessage
        v-else-if="!coin"
        :text="t('errors.empty')"
        class="col-12 col-lg-6"
      />
      <section class="col-12 col-lg-6" v-else>
        <CoinHeader :coin="coin" class="mb-4" />
        <CoinStatuses :coin="coin" class="mb-2" />
        <CoinTags :links="coin.tags" class="mb-2" />
        <CoinSocial :links="coin.links_extended" class="mb-3" />
        <CoinDescription :coin="coin" class="mb-2" />
        <PoweredBy
          site="coinpaprika"
          class="mb-4"
          :loading="loading"
          :fall="error"
        />
      </section>

      <PriceWidget class="col-12 col-lg-6" :id="`${route.params.id}`" />
    </div>

    <CoinTeam
      v-if="coin"
      :links="coin.team"
      :loading="loading"
      :error="error"
    />
  </div>
</template>
