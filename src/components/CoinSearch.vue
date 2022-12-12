<script setup lang="ts">
import { ref, Ref } from "vue";
import API from "../api";
import type { TrendingCoinItem } from "../api/coingecko/types";

const SEARCH_LIMIT = 5;
const MIN_LENGTH_COIN_NAME = 3;

const emit = defineEmits(["search"]);

const isError: Ref<boolean> = ref(false);
const isSearching: Ref<boolean> = ref(false);
const coinName: Ref<string> = ref("");
const trendingCoins: Ref<Array<TrendingCoinItem>> = ref([]);

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
      <h2 class="h4">Введите название криптовалюты</h2>
    </header>

    <div class="card-body">
      <form @submit.prevent="search">
        <div class="form-group mb-3">
          <label class="input-group mb-0" for="coin-name">
            <input
              id="coin-name"
              type="text"
              class="form-control"
              v-model="coinName"
              :disabled="isSearching"
              :minlength="MIN_LENGTH_COIN_NAME"
            />
          </label>
        </div>

        <ul
          v-if="trendingCoins.length"
          class="flex-row list-unstyled d-flex flex-wrap"
        >
          <li
            v-for="item in trendingCoins"
            :key="item.item.id"
            class="mr-1 mb-1"
          >
            <button
              @click="setCoinName(item.item.symbol)"
              type="button"
              class="btn btn-primary btn-pill text-dark py-1 px-2"
              :title="item.item.name"
            >
              {{ item.item.symbol }}
            </button>
          </li>
        </ul>

        <div
          v-if="isError"
          class="alert alert-danger alert-dismissible shadow-soft fade show"
          role="alert"
        >
          <span class="alert-inner--text">Токен не найден</span>
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
            title="Close"
            @click="isError = false"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <button
          type="submit"
          class="btn btn-block btn-primary"
          title="Поиск"
          :disabled="isSearching || coinName.length < MIN_LENGTH_COIN_NAME"
        >
          Поиск
        </button>
      </form>
    </div>
  </div>
</template>
