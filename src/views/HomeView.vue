<script setup lang="ts">
import { ref } from "vue";
import CoinSearch from "../components/SearchCoins.vue";
import SearchResults from "../components/search/SearchResults.vue";
import type { SearchCurrencyItem } from "../api/coinpaprika/types";

const foundedCoins = ref<Array<SearchCurrencyItem>>([]);

const setCoins = (coins = []) => {
  foundedCoins.value = coins;
};
</script>

<template>
  <div class="row justify-content-center mt-7">
    <div class="col-12 col-md-10 col-lg-6 justify-content-center">
      <CoinSearch v-if="!foundedCoins.length" @search="setCoins" />
      <SearchResults v-else :items="foundedCoins" @back="setCoins" />
    </div>
  </div>
</template>
