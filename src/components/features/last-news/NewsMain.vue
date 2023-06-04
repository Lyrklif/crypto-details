<script setup lang="ts">
import { ref, watch } from "vue";
import API from "../../../api";
import { useI18n } from "vue-i18n";
import { useCoinStore } from "../../../stores/coin";
import PoweredBy from "../../base/PoweredBy.vue";
import type { AssetNewsItem } from "../../../api/messari/types";
import AlertMessage from "../../base/AlertMessage.vue";
import LinesSpinner from "../../base/LinesSpinner.vue";
import NewsList from "./list/NewsList.vue";
import { useRoute } from "vue-router";
import { startNewsPage, maxNewsPage } from "../../../constants/navLinks";
import router from "../../../router";
import Paginator from "primevue/paginator";
import type { PageState } from "primevue/paginator";

const { t } = useI18n();
const store = useCoinStore();
const route = useRoute();
const data = ref<Array<AssetNewsItem>>([]);
const loading = ref<boolean>(false);
const error = ref<boolean>(false);
const errorText = ref<string>("");
const loaded = ref<boolean>(false);
const currentPage = ref(
  route.params.page ? +route.params.page - 1 : startNewsPage
);

const onChangePage = (event: PageState) => {
  const { page } = event;
  router.push({ name: "news", params: { page: page + 1 } });
};

async function loadNews() {
  try {
    loading.value = true;
    error.value = false;
    errorText.value = "";

    const fields = "id,title,published_at,author,url,previewImage";
    const page = currentPage.value ? currentPage.value + 1 : startNewsPage;
    const response = await API.messari.lastNews(page, fields);
    data.value = response.data?.data || [];
    if (response.data.data?.length) loaded.value = true;
  } catch (e: any) {
    errorText.value = e.response?.statusText;
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

    <Paginator
      v-if="loaded"
      v-model:first="currentPage"
      :rows="1"
      :totalRecords="maxNewsPage"
      class="mt-5"
      @page="onChangePage"
    />

    <PoweredBy site="messari" :loading="loading" :fall="error" class="mt-5" />
  </section>
</template>
