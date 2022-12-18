<script setup lang="ts">
import { ref } from "vue";
import API from "../api";
import type { TrendingCoinItem } from "../api/coingecko/types";
import TrendCoins from "./search/TrendCoins.vue";
import TokenNotFound from "./search/TokenNotFound.vue";
import { useI18n } from "vue-i18n";

const SEARCH_LIMIT = 5;
const MIN_LENGTH_COIN_NAME = 3;

const { t } = useI18n();
const emit = defineEmits(["search"]);

const isError = ref(false);
const isSearching = ref(false);
const coinName = ref("");
const trendingCoins = ref<Array<TrendingCoinItem>>([]);

async function loadTrendingCoins() {
  try {
    const response = await API.coingecko.trending();
    trendingCoins.value = response.data.coins.slice(0, SEARCH_LIMIT);
  } catch (error: any) {
    trendingCoins.value = [];
  }
}

async function search() {
  try {
    isError.value = false;
    isSearching.value = true;

    const response = await API.coinpaprika.search({
      q: coinName.value,
      limit: SEARCH_LIMIT,
    });
    emit("search", response.data.currencies);
  } catch (error: any) {
    isError.value = true;
  } finally {
    isSearching.value = false;
  }
}

const setCoinName = (coin: string) => {
  coinName.value = coin;
  search();
};

loadTrendingCoins();
</script>

<template>
  <div class="card bg-primary shadow-soft border-light p-2 p-md-4">
    <header class="card-header text-center pb-0">
      <h2 class="h4">{{ t("search.title") }}</h2>
    </header>

    <div class="card-body">
      <form @submit.prevent="search">
        <div class="form-group mb-3">
          <label class="input-group mb-0" for="coin-name">
            <input
              id="coin-name"
              type="text"
              class="form-control"
              :placeholder="t('search.placeholder')"
              v-model="coinName"
              :disabled="isSearching"
              :minlength="MIN_LENGTH_COIN_NAME"
            />
          </label>
        </div>

        <TrendCoins
          :coins="trendingCoins"
          v-if="trendingCoins.length"
          @choose="setCoinName"
        />

        <TokenNotFound v-if="isError" @close="isError = false" />

        <button
          type="submit"
          class="btn btn-block btn-primary animate-up-2"
          :title="t('search.submit')"
          :disabled="isSearching || coinName.length < MIN_LENGTH_COIN_NAME"
        >
          {{ t("search.submit") }}
        </button>
      </form>
    </div>
  </div>
</template>
