<script setup lang="ts">
import { ref } from "vue";
import API from "../../../api";
import SpoilerCard from "../../base/SpoilerCard.vue";
import { useI18n } from "vue-i18n";
import { useCoinStore } from "../../../stores/coin";
import NewsList from "./list/NewsList.vue";
import PoweredBy from "../../base/PoweredBy.vue";
import type { AssetNewsItem } from "../../../api/messari/types";
import ErrorRequest from "../../base/ErrorMessage.vue";

const { t } = useI18n();
const store = useCoinStore();
const data = ref<Array<AssetNewsItem>>([]);
const loading = ref<boolean>(false);
const error = ref<boolean>(false);
const errorText = ref<string>("");

async function loadGNews() {
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
      @firstOpen="loadGNews"
    >
      <template #content>
        <header>
          <h2 class="h5 mb-2">
            {{ t("news.title") }}: <i>{{ store.symbol }}</i>
          </h2>
        </header>

        <PoweredBy
          site="messari"
          class="mb-4"
          :loading="loading"
          :fall="error"
        />
        <ErrorRequest v-if="error" :text="errorText" />
        <NewsList :list="data" v-else-if="data.length" />
      </template>
    </SpoilerCard>
  </section>
</template>
