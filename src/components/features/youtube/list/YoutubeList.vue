<script setup lang="ts">
import { computed, PropType } from "vue";
import { useI18n } from "vue-i18n";
import type { YoutubeSearchItem } from "../../../../api/youtube/types";
import YoutubeItem from "./YoutubeItem.vue";

const { t } = useI18n();

const props = defineProps({
  data: Object as PropType<{ items: Array<YoutubeSearchItem> }>,
});

const items = computed((): Array<YoutubeSearchItem> => {
  return props.data?.items || [];
});
</script>

<template>
  <ul class="list-unstyled list my-0">
    <li v-for="item in items" :key="`youtube-${item.id.videoId}`" class="mb-4">
      <YoutubeItem :item="item" />
    </li>
  </ul>
</template>
