<script setup lang="ts">
import { ref } from "vue";
import API from "../../../api";
import SpoilerCard from "../../base/SpoilerCard.vue";
import { useI18n } from "vue-i18n";
import { useCoinStore } from "../../../stores/coin";
import NewsList from "./list/NewsList.vue";
import PoweredBy from "../../base/PoweredBy.vue";
import type { AssetNewsItem } from "../../../api/messari/types";
import AlertMessage from "../../base/AlertMessage.vue";
import LinesSpinner from "../../base/LinesSpinner.vue";

const { t } = useI18n();
const store = useCoinStore();
const data = ref<Array<AssetNewsItem>>([]);
const loading = ref<boolean>(false);
const error = ref<boolean>(false);
const errorText = ref<string>("");

async function loadNews() {
  try {
    loading.value = true;
    error.value = false;
    errorText.value = "";

    const response = await API.messari.newsForAsset(store.symbol);
    data.value = response.data.data || [];
  } catch (e: any) {
    errorText.value = e.response.statusText;
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
      @firstOpen="loadNews"
    >
      <template #content>
        <header>
          <h2 class="h5 mb-2">
            {{ t("news.title") }}: <i>{{ store.symbol }}</i>
          </h2>
        </header>

        <LinesSpinner v-if="loading" />
        <AlertMessage v-else-if="error" :text="errorText" type="error" />
        <AlertMessage v-else-if="!data.length" :text="t('errors.empty')" />
        <NewsList v-else :list="data" />
        <PoweredBy
          site="messari"
          class="mt-4"
          :loading="loading"
          :fall="error"
        />
      </template>
    </SpoilerCard>
  </section>
</template>
