<script setup lang="ts">
import { ref } from "vue";
import API from "../../../api";
import SpoilerCard from "../../base/SpoilerCard.vue";
import { useI18n } from "vue-i18n";
import { useCoinStore } from "../../../stores/coin";
import type { YoutubeSearchItem } from "../../../api/youtube/types";
import YoutubeList from "./list/YoutubeList.vue";
import PoweredBy from "../../base/PoweredBy.vue";
import AlertMessage from "../../base/AlertMessage.vue";
import LinesSpinner from "../../base/LinesSpinner.vue";

const { t, locale } = useI18n();
const store = useCoinStore();
const data = ref<Array<YoutubeSearchItem>>([]);
const loading = ref<boolean>(false);
const error = ref<boolean>(false);
const errorText = ref<string>("");

async function load() {
  try {
    loading.value = true;
    error.value = false;
    errorText.value = "";

    const response = await API.youtube.search({
      q: `${store.name} ${store.symbol}`,
      lang: locale.value,
      maxResults: 20,
    });
    data.value = response.data.items || [];
  } catch (e: any) {
    error.value = true;
    errorText.value = e.response.data.error.message;
  } finally {
    loading.value = false;
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
        <header>
          <h2 class="h5 mb-2">
            {{ t("youtube.title") }}: <i>{{ store.name }} {{ store.symbol }}</i>
          </h2>
        </header>

        <PoweredBy
          site="youtube"
          class="mb-4"
          :loading="loading"
          :fall="error"
        />
        <LinesSpinner v-if="loading" />
        <AlertMessage v-else-if="error" :text="errorText" type="error" />
        <AlertMessage v-else-if="!data.length" :text="t('errors.empty')" />
        <YoutubeList v-else :data="data" />
      </template>
    </SpoilerCard>
  </section>
</template>
