<script setup lang="ts">
import API from "../../api";
import { useRoute } from "vue-router";
import { ref, Ref } from "vue";
import { GetCoinByIDResponse } from "../../api/coinpaprika/types";
import SocialLinks from "../coin/social/SocialLinks.vue";
import TeamList from "../coin/TeamList.vue";
import TagList from "../coin/TagList.vue";
import StatusesList from "../coin/StatusesList.vue";
import CoinHeader from "../coin/CoinHeader.vue";
import CoinDescription from "../coin/CoinDescription.vue";

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
  </div>
</template>
