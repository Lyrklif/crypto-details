<script setup lang="ts">
import { PropType } from "vue";
import { useI18n } from "vue-i18n";
import type { YoutubeSearchItem } from "../../../../api/youtube/types";
import YoutubeItem from "./YoutubeItem.vue";

const { t } = useI18n();

defineProps({
  data: Array as PropType<Array<YoutubeSearchItem>>,
});
</script>

<template>
  <ul class="list-unstyled list">
    <li v-for="item in data" :key="`youtube-${item.id.videoId}`" class="mb-4">
      <YoutubeItem :item="item" />
    </li>
  </ul>
</template>
