<script setup lang="ts">
import { defineProps, PropType } from "vue";
import { useI18n } from "vue-i18n";
import type { Article } from "../../../../api/gnews/types";
import type { ArticleItem } from "../../../../api/news/types";

const { t } = useI18n();

defineProps({
  item: Object as PropType<Article | ArticleItem>,
});
</script>

<template>
  <article class="card bg-primary shadow-sm border-light py-4 px-3">
    <address class="author mb-2">
      <a
        v-if="item.source.url"
        rel="author"
        target="_blank"
        :href="item.source.url"
        :title="item.source.name"
        class="text-decoration-none"
      >
        <strong class="d-block text-dark lh-100 mb-0">
          {{ item.source.name }}
        </strong>
      </a>
      <strong
        v-else-if="item.source.name"
        class="d-block text-dark lh-100 mb-0"
      >
        {{ item.source.name }}
      </strong>
    </address>

    <a
      :href="item.url"
      target="_blank"
      :title="item.title"
      class="text-decoration-none"
    >
      <header>
        <h3 class="h5 mt-0 mb-2 text-facebook">{{ item.title }}</h3>
      </header>

      <div class="d-md-flex align-items-center mb-1">
        <img
          :src="item.image"
          :alt="item.title"
          class="image rounded mb-3 mb-md-0 mr-3"
        />
        <p class="mb-2 text-body lh-120">{{ item.description }}</p>
      </div>

      <div class="d-flex align-items-center">
        <i class="far fa-calendar-alt mr-2" />
        <time :datetime="item.publishedAt">
          {{ $filters.date(item.publishedAt) }}
        </time>
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
