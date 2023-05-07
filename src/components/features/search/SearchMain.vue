<script setup lang="ts">
import { ref } from "vue";
import Card from "primevue/card";
import API from "../../../api";
import { useI18n } from "vue-i18n";
import NotFound from "./error/NotFound.vue";
import SearchForm from "./form/SearchForm.vue";
import SearchTrends from "./variants/SearchTrends.vue";
import SearchHistory from "./variants/SearchHistory.vue";
import { useSearchHistoryStore } from "../../../stores/search-history";

const SEARCH_LIMIT = 20;

const { t } = useI18n();
const store = useSearchHistoryStore();
const emit = defineEmits(["search"]);

const isError = ref(false);
const isSearching = ref(false);

async function search(coin: string) {
  try {
    isError.value = false;
    isSearching.value = true;

    const response = await API.coinpaprika.search({
      q: coin,
      limit: SEARCH_LIMIT,
    });
    emit("search", response.data.currencies);
    store.setItem(coin);
  } catch (error: any) {
    isError.value = true;
  } finally {
    isSearching.value = false;
  }
}
</script>

<template>
  <Card>
    <template #title>{{ t("search.title") }}</template>

    <template #content>
      <SearchForm @submit="search" :isDisabled="isSearching" class="mb-5" />
      <NotFound v-if="isError" @close="isError = false" />

      <SearchTrends @choose="search" :is-disabled="isSearching" class="mb-3" />
      <SearchHistory @choose="search" :is-disabled="isSearching" />
    </template>
  </Card>
</template>
