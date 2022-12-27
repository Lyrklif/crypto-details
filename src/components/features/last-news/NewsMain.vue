<script setup lang="ts">
import { computed, ref, watch } from "vue";
import API from "../../../api";
import { useI18n } from "vue-i18n";
import { useCoinStore } from "../../../stores/coin";
import PoweredBy from "../../base/PoweredBy.vue";
import type { AssetNewsItem } from "../../../api/messari/types";
import AlertMessage from "../../base/AlertMessage.vue";
import LinesSpinner from "../../base/LinesSpinner.vue";
import NewsList from "./list/NewsList.vue";
import PagePagination from "../../base/PagePagination.vue";
import { useRoute } from "vue-router";
import { startNewsPage, maxNewsPage } from "../../../constants/navLinks";
import router from "../../../router";

const { t } = useI18n();
const store = useCoinStore();
const route = useRoute();
const data = ref<Array<AssetNewsItem>>([]);
const loading = ref<boolean>(false);
const error = ref<boolean>(false);
const errorText = ref<string>("");

const page = computed(() => {
  return +route.params.page || startNewsPage;
});

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

watch(
  () => route.params.page,
  () => {
    const page = +route.params.page;

    if (page > maxNewsPage) {
      router.push({ name: "news", params: { page: maxNewsPage } });
    } else if (page < startNewsPage) {
      router.push({ name: "news", params: { page: startNewsPage } });
    } else {
      loadNews();
    }
  }
);

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
      :count="maxNewsPage"
      :page="page"
      routeName="news"
      class="mt-5"
    />

    <PoweredBy site="messari" :loading="loading" :fall="error" class="mt-5" />
  </section>
</template>
