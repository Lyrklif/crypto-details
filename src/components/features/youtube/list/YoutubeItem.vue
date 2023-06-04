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
  <article>
    <a
      :href="`https://www.youtube.com/watch?v=${item.id.videoId}`"
      target="_blank"
      :title="item.snippet.title"
      class="no-underline flex flex-column sm:flex-row py-4 px-3 surface-border border-solid border-1"
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
          <p class="mt-0 mb-1">
            {{ item.snippet.channelTitle }}
          </p>
          <p class="my-0 line-height-1">{{ item.snippet.description }}</p>
        </header>
      </div>
    </a>
  </article>
</template>
