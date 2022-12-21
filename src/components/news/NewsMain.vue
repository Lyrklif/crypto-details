<script setup lang="ts">
import { ref } from "vue";
import API from "../../api";
import SpoilerCard from "../base/SpoilerCard.vue";
import { useI18n } from "vue-i18n";
import { useCoinStore } from "../../stores/coin";
import type { Article } from "../../api/gnews/types";
import type { ArticleItem } from "../../api/news/types";
import NewsList from "./list/NewsList.vue";

const { t, locale } = useI18n();
const store = useCoinStore();
const data = ref<Array<ArticleItem | Article>>([]);

async function loadNews() {
  try {
    const response = await API.news.everything({
      q: store.symbol,
      language: locale.value,
    });
    data.value = response.data.articles;
  } catch (error: any) {
    await loadGNews();
  }
}
async function loadGNews() {
  try {
    const response = await API.gnews.search({
      q: `${store.name} ${store.symbol}`,
      lang: locale.value,
      max: 100,
    });
    data.value = response.data.articles;
  } catch (error: any) {
    // TODO error
  }
}
</script>

<template>
  <section>
    <SpoilerCard
      :title="`${t('news.title')} ${data.length ? `(${data.length})` : ''}`"
      @firstOpen="loadNews"
    >
      <template #content>
        <header class="mb-4">
          <h2 class="h5">
            {{ t("news.title") }}: <i>{{ store.name }} {{ store.symbol }}</i>
          </h2>
        </header>

        <NewsList :list="data" v-if="data.length" />
      </template>
    </SpoilerCard>
  </section>
</template>
