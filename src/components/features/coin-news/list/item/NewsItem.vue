<script setup lang="ts">
import { PropType } from "vue";
import { useI18n } from "vue-i18n";
import type { AssetNewsItem } from "../../../../../api/messari/types";
import LazyImage from "../../../../base/LazyImage.vue";

const { t } = useI18n();

defineProps({
  item: Object as PropType<AssetNewsItem>,
});
</script>

<template>
  <article>
    <a
      :href="item.url"
      target="_blank"
      :title="item.title"
      class="flex flex-column md:flex-row w-full no-underline py-4 px-3 surface-border border-solid border-1"
    >
      <div class="md:d-flex align-items-center md:mr-1 flex-shrink-0">
        <LazyImage
          :src="item.previewImage"
          :alt="item.title"
          class="image rounded mb-3 md:mb-0 md:mr-3"
        />
      </div>
      <div>
        <header class="mb-1">
          <h3 class="h5 my-0">{{ item.title }}</h3>
          <span class="line-height-1 mb-2">
            {{ item.author.name }}
          </span>
        </header>
        <div class="flex align-items-center">
          <i class="far icon-calendar mr-2" />
          <time :datetime="item.published_at">
            {{ $filters.date(item.published_at) }}
          </time>
        </div>
      </div>
    </a>
  </article>
</template>

<style scoped>
.image {
  width: 200px;
  max-width: 100%;
  max-height: 100px;
  object-fit: cover;
}
</style>
