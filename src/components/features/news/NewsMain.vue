<script setup lang="ts">
import { ref } from "vue";
import API from "../../../api";
import SpoilerCard from "../../base/SpoilerCard.vue";
import { useI18n } from "vue-i18n";
import { useCoinStore } from "../../../stores/coin";
import type { Article } from "../../../api/gnews/types";
import NewsList from "./list/NewsList.vue";
import PoweredBy from "../source/PoweredBy.vue";

const { t, locale } = useI18n();
const store = useCoinStore();
const data = ref<Array<Article>>([]);
const loading = ref<boolean>(false);
const error = ref<boolean>(false);

async function loadGNews() {
  try {
    loading.value = true;
    error.value = false;

    const response = await API.gnews.search({
      q: `${store.name} ${store.symbol}`,
      lang: locale.value,
      max: 100,
    });
    data.value = response.data.articles;
  } catch (error: any) {
    error.value = true;
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <section>
    <SpoilerCard
      :title="`${t('news.title')} ${data.length ? `(${data.length})` : ''}`"
      @firstOpen="loadGNews"
    >
      <template #content>
        <header>
          <h2 class="h5 mb-2">
            {{ t("news.title") }}: <i>{{ store.name }} {{ store.symbol }}</i>
          </h2>
        </header>

        <PoweredBy site="gnews" class="mb-4" :loading="loading" :fall="error" />
        <NewsList :list="data" v-if="data.length" />
      </template>
    </SpoilerCard>
  </section>
</template>
