<script setup lang="ts">
import { ref } from "vue";
import API from "../../../api";
import { useI18n } from "vue-i18n";
import { useCoinStore } from "../../../stores/coin";
import PoweredBy from "../../base/PoweredBy.vue";
import type { AssetNewsItem } from "../../../api/messari/types";
import AlertMessage from "../../base/AlertMessage.vue";
import LinesSpinner from "../../base/LinesSpinner.vue";
import NewsList from "./list/NewsList.vue";
import PagePagination from "../../base/PagePagination.vue";

const { t } = useI18n();
const store = useCoinStore();
const data = ref<Array<AssetNewsItem>>([]);
const loading = ref<boolean>(false);
const error = ref<boolean>(false);
const errorText = ref<string>("");
const page = ref<number>(1);

async function loadNews() {
  try {
    loading.value = true;
    error.value = false;
    errorText.value = "";

    const fields = "id,title,published_at,author,url,previewImage";
    const response = await API.messari.lastNews(page.value, fields);
    data.value = response.data.data || [];
  } catch (e: any) {
    errorText.value = e.response.statusText;
    error.value = true;
  } finally {
    loading.value = false;
  }
}

loadNews();
</script>

<template>
  <section>
    <header>
      <h2 class="mb-4">{{ t("last_news.title") }}</h2>
    </header>

    <LinesSpinner v-if="loading" />
    <AlertMessage v-else-if="error" :text="errorText" type="error" />
    <AlertMessage v-else-if="!data.length" :text="t('errors.empty_news')" />
    <NewsList v-else :list="data" />

    <PagePagination
      v-if="!loading && !error"
      :count="10"
      routeName="news"
      class="mt-5"
    />

    <PoweredBy site="messari" :loading="loading" :fall="error" class="mt-5" />
  </section>
</template>
