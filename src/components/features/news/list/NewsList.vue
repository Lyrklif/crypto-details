<script setup lang="ts">
import { PropType } from "vue";
import { useI18n } from "vue-i18n";
import type { Article } from "../../../../api/gnews/types";
import type { ArticleItem } from "../../../../api/news/types";
import NewsItem from "./item/NewsItem.vue";

const { t } = useI18n();

defineProps({
  list: Array as PropType<Array<Article | ArticleItem>>,
});
</script>

<template>
  <ul class="list-unstyled list">
    <li v-for="(item, index) in list" :key="`articles-${index}`" class="mb-4">
      <NewsItem :item="item" />
    </li>
  </ul>
</template>
