<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import API from "../../../api";
import SpoilerCard from "../../base/SpoilerCard.vue";
import { useI18n } from "vue-i18n";
import { useCoinStore } from "../../../stores/coin";

const { t, locale } = useI18n();
const store = useCoinStore();

const AsyncContent = defineAsyncComponent(
  () => import("./list/YoutubeList.vue")
);
</script>

<template>
  <SpoilerCard
    v-if="store.symbol"
    :title="t('youtube.title')"
    site="youtube"
    :asyncComponent="AsyncContent"
    :apiMethod="API.youtube.search"
    :apiParams="{
      q: `${store.name} ${store.symbol}`,
      lang: locale,
      maxResults: 20,
    }"
  >
    <template #start>
      <h3 class="mb-2">
        {{ t("youtube.title") }}: <i>{{ store.name }} {{ store.symbol }}</i>
      </h3>
    </template>
  </SpoilerCard>
</template>
