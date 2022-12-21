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

const coin = ref<GetCoinByIDResponse>();
const route = useRoute();
const store = useCoinStore();

async function load() {
  try {
    const response = await API.coinpaprika.getCoinByID(
      route.params.id as string
    );
    coin.value = response.data;
    store.setSymbol(response.data.symbol, response.data.name);
  } catch (error: any) {
    // TODO error
  }
}

load();
</script>

<template>
  <div class="mb-4">
    <div class="row">
      <section class="col-12 col-lg-6" v-if="coin">
        <CoinHeader :coin="coin" class="mb-4" />
        <CoinStatuses :coin="coin" class="mb-2" />
        <CoinTags :links="coin.tags" class="mb-2" />
        <CoinSocial :links="coin.links_extended" class="mb-3" />
        <CoinDescription :coin="coin" class="mb-2" />
      </section>

      <PriceWidget class="col-12 col-lg-6" :id="`${route.params.id}`" />
    </div>

    <CoinTeam v-if="coin" :links="coin.team" />
  </div>
</template>
