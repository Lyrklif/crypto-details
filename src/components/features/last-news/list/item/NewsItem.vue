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
  <article class="h-100">
    <a
      :href="item.url"
      target="_blank"
      :title="item.title"
      class="text-decoration-none card bg-primary border-light shadow-soft h-100"
    >
      <img
        :src="item.previewImage"
        :alt="item.title"
        class="card-img-top rounded-top"
      />

      <div class="d-flex flex-column p-3 h-100">
        <header class="mb-1">
          <h3 class="h5 card-title mt-0">{{ item.title }}</h3>
        </header>

        <p class="mt-auto mb-0 text-black">{{ item.author.name }}</p>

        <p class="d-flex align-items-center small mb-0 text-black-50">
          <i class="far icon-calendar mr-2" />
          <time :datetime="item.published_at">
            {{ $filters.date(item.published_at) }}
          </time>
        </p>
      </div>
    </a>
  </article>
</template>
