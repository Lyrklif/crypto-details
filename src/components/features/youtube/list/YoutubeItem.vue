<script setup lang="ts">
import { PropType } from "vue";
import { useI18n } from "vue-i18n";
import type { YoutubeSearchItem } from "../../../../api/youtube/types";
import LazyImage from "../../../base/LazyImage.vue";

const { t } = useI18n();

defineProps({
  item: Object as PropType<YoutubeSearchItem>,
});
</script>

<template>
  <article class="card bg-primary shadow-sm border-light py-4 px-3">
    <a
      :href="`https://www.youtube.com/watch?v=${item.id.videoId}`"
      target="_blank"
      :title="item.snippet.title"
      class="no-underline d-sm-flex"
    >
      <LazyImage
        :src="item.snippet.thumbnails.default.url"
        :width="item.snippet.thumbnails.default.width"
        :height="item.snippet.thumbnails.default.height"
        class="mr-2 mb-2"
        :alt="item.snippet.title"
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
</template>
