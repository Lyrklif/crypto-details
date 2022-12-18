<script setup lang="ts">
import API from "../../api";
import { useRoute } from "vue-router";
import { ref } from "vue";
import type { GetCoinByIDResponse } from "../../api/coinpaprika/types";
import SocialLinks from "../coin/social/SocialLinks.vue";
import TeamList from "../coin/TeamList.vue";
import TagList from "../coin/TagList.vue";
import StatusesList from "../coin/StatusesList.vue";
import CoinHeader from "../coin/CoinHeader.vue";
import CoinDescription from "../coin/CoinDescription.vue";
import PriceWidget from "../PriceWidget.vue";
import { useCoinStore } from "../../stores/coin";

const coin = ref<GetCoinByIDResponse>();
const route = useRoute();
const store = useCoinStore();

async function load() {
  try {
    const response = await API.coinpaprika.getCoinByID(
      route.params.id as string
    );
    coin.value = response.data;
    store.setSymbol(response.data.symbol);
  } catch (error: any) {
    // TODO error
  }
}

load();
</script>

<template>
  <div v-if="coin">
    <CoinHeader :coin="coin" class="mb-4" />
    <StatusesList :coin="coin" class="mb-2" />
    <TagList :links="coin.tags" class="mb-2" />
    <PriceWidget :id="`${route.params.id}`" />
    <SocialLinks :links="coin.links_extended" class="mb-3" />
    <CoinDescription :coin="coin" class="mb-5" />
    <TeamList :links="coin.team" class="mb-5" />
  </div>
</template>
