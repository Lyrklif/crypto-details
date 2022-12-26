<script setup lang="ts">
import { PropType } from "vue";
import { useI18n } from "vue-i18n";
import type { AssetNewsItem } from "../../../../api/messari/types";
import NewsItem from "./item/NewsItem.vue";

const { t } = useI18n();

defineProps({
  list: Array as PropType<Array<AssetNewsItem>>,
});
</script>

<template>
  <ul class="list-unstyled list row">
    <li
      v-for="(item, index) in list"
      :key="`articles-${index}`"
      class="mb-4 col-12 col-md-6 col-lg-4"
    >
      <NewsItem :item="item" />
    </li>
  </ul>
</template>
