<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
import API from "../../../api";
import SpoilerCard from "../../base/SpoilerCard.vue";
import { useI18n } from "vue-i18n";
import { useCoinStore } from "../../../stores/coin";
import type { AssetNewsItem } from "../../../api/messari/types";

const { t } = useI18n();
const store = useCoinStore();
const data = ref<{ data: Array<AssetNewsItem> } | null>(null);
const loading = ref<boolean>(false);
const error = ref<boolean>(false);
const errorText = ref<string>("");

async function loadNews() {
  try {
    loading.value = true;
    error.value = false;
    errorText.value = "";

    const response = await API.messari.newsForAsset({ assetKey: store.symbol });
    data.value = response.data;
  } catch (e: any) {
    const { text, notFound } = e?.response || {};
    data.value = null;
    errorText.value = text;
    error.value = !notFound;
  } finally {
    loading.value = false;
  }
}

const AsyncContent = defineAsyncComponent(() => import("./list/NewsList.vue"));
</script>

<template>
  <SpoilerCard
    v-if="store.symbol"
    :title="t('news.title')"
    site="messari"
    :asyncComponent="AsyncContent"
    :apiMethod="API.messari.newsForAsset"
    :apiParams="{ assetKey: store.symbol }"
  >
    <template #start>
      <h3 class="mb-2">
        {{ t("news.title") }}: <i>{{ store.symbol }}</i>
      </h3>
    </template>
  </SpoilerCard>
</template>
