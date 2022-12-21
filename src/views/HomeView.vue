<script setup lang="ts">
import { ref } from "vue";
import SearchMain from "../components/features/search/SearchMain.vue";
import ResultsMain from "../components/features/search-results/ResultsMain.vue";
import type { SearchCurrencyItem } from "../api/coinpaprika/types";

const foundedCoins = ref<Array<SearchCurrencyItem>>([]);

const setCoins = (coins = []) => {
  foundedCoins.value = coins;
};
</script>

<template>
  <div class="row justify-content-center mt-7">
    <div class="col-12 col-md-10 col-lg-6 justify-content-center">
      <SearchMain v-if="!foundedCoins.length" @search="setCoins" />
      <ResultsMain v-else :items="foundedCoins" @back="setCoins" />
    </div>
  </div>
</template>
