<script setup lang="ts">
import { ref } from "vue";
import API from "../api";
import SpoilerCard from "./base/SpoilerCard.vue";
import { useI18n } from "vue-i18n";
import { useCoinStore } from "../stores/coin";
import type { YoutubeSearchItem } from "../api/youtube/types";

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

        <ul class="list-unstyled list" v-if="data && data.length">
          <li
            v-for="item in data"
            :key="`youtube-${item.id.videoId}`"
            class="mb-4"
          >
            <article class="card bg-primary shadow-sm border-light py-4 px-3">
              <a
                :href="`https://www.youtube.com/watch?v=${item.id.videoId}`"
                target="_blank"
                :title="item.snippet.title"
                class="text-decoration-none d-sm-flex"
              >
                <img
                  :src="item.snippet.thumbnails.default.url"
                  :width="item.snippet.thumbnails.default.width"
                  :height="item.snippet.thumbnails.default.height"
                  class="mr-2 mb-2"
                />
                <div>
                  <header>
                    <h3 class="my-0 h4">{{ item.snippet.title }}</h3>
                    <p class="small text-black-50 my-0">
                      {{ item.snippet.channelTitle }}
                    </p>
                    <p class="mb-0 lh-120">{{ item.snippet.description }}</p>
                  </header>
                </div>
              </a>
            </article>
          </li>
        </ul>
      </template>
    </SpoilerCard>
  </section>
</template>

<style scoped>
.list {
  max-height: 500px;
  overflow: auto;
}
</style>
