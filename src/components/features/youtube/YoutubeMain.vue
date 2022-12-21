<script setup lang="ts">
import { ref } from "vue";
import API from "../../../api";
import SpoilerCard from "../../base/SpoilerCard.vue";
import { useI18n } from "vue-i18n";
import { useCoinStore } from "../../../stores/coin";
import type { YoutubeSearchItem } from "../../../api/youtube/types";
import YoutubeList from "./list/YoutubeList.vue";

const { t, locale } = useI18n();
const store = useCoinStore();
const data = ref<Array<YoutubeSearchItem>>([]);

async function load() {
  try {
    const response = await API.youtube.search({
      q: `${store.name} ${store.symbol}`,
      lang: locale.value,
      maxResults: 20,
    });
    data.value = response.data.items;
  } catch (e: any) {
    //
  }
}
</script>

<template>
  <section>
    <SpoilerCard
      :title="`${t('youtube.title')} ${
        data && data.length ? `(${data.length})` : ''
      }`"
      @firstOpen="load"
    >
      <template #content>
        <header class="mb-4">
          <h2 class="h5">
            {{ t("youtube.title") }}: <i>{{ store.name }} {{ store.symbol }}</i>
          </h2>
        </header>

        <YoutubeList v-if="data && data.length" />
      </template>
    </SpoilerCard>
  </section>
</template>
