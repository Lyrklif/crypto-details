<script setup lang="ts">
import { PropType } from "vue";
import { useI18n } from "vue-i18n";
import type { AssetNewsItem } from "../../../../../api/messari/types";

const { t } = useI18n();

defineProps({
  item: Object as PropType<AssetNewsItem>,
});
</script>

<template>
  <article class="card bg-primary shadow-sm border-light">
    <a
      :href="item.url"
      target="_blank"
      :title="item.title"
      class="text-decoration-none d-md-flex py-4 px-3"
    >
      <div class="d-md-flex align-items-center mr-md-1 flex-shrink-0">
        <img
          :src="item.previewImage"
          :alt="item.title"
          class="image rounded mb-3 mb-md-0 mr-md-3"
        />
      </div>
      <div>
        <header class="mb-1">
          <h3 class="h5 mt-0 mb-0 text-facebook">{{ item.title }}</h3>
          <span class="text-dark lh-100 mb-2 small">
            {{ item.author.name }}
          </span>
        </header>
        <div class="d-flex align-items-center">
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
