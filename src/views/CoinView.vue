<script setup lang="ts">
import API from "../api";
import { useRoute } from "vue-router";
import { ref, Ref } from "vue";
import { GetCoinByIDResponse } from "../api/coinpaprika/types";
import SocialLinks from "../components/coin/social/SocialLinks.vue";
import TeamList from "../components/coin/TeamList.vue";
import TagList from "../components/coin/TagList.vue";
import StatusesList from "../components/coin/StatusesList.vue";
import CoinHeader from "../components/coin/CoinHeader.vue";
import CoinDescription from "../components/coin/CoinDescription.vue";
import TwitterList from "../components/coin/TwitterList.vue";

const coin: Ref<GetCoinByIDResponse | undefined> = ref();

async function load() {
  try {
    const route = useRoute();
    const response = await API.coinpaprika.getCoinByID(
      route.params.id as string
    );
    coin.value = response.data;
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
    <SocialLinks :links="coin.links_extended" class="mb-3" />
    <CoinDescription :coin="coin" class="mb-5" />
    <TeamList :links="coin.team" />

    <TwitterList />
  </div>
</template>
