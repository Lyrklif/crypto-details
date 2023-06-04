<script setup lang="ts">
import { computed, PropType } from "vue";
import { useI18n } from "vue-i18n";
import type { AssetNewsItem } from "../../../../api/messari/types";
import NewsItem from "./item/NewsItem.vue";

const { t } = useI18n();

const props = defineProps({
  data: Object as PropType<{ data: Array<AssetNewsItem> }>,
});

const list = computed((): Array<AssetNewsItem> => {
  return props.data?.data || [];
});
</script>

<template>
  <ul class="list-unstyled my-0">
    <li v-for="(item, index) in list" :key="`articles-${index}`" class="mb-4">
      <NewsItem :item="item" />
    </li>
  </ul>
</template>
