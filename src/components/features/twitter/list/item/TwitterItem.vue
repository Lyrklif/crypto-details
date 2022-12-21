<script setup lang="ts">
import { PropType } from "vue";
import type { GetTwitterItem } from "../../../../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";
import TwitterAuthor from "./author/TwitterAuthor.vue";
import TwitterFooter from "./footer/TwitterFooter.vue";

const { t } = useI18n();

defineProps({
  item: Object as PropType<GetTwitterItem>,
});
</script>

<template>
  <article :class="{ 'pl-3': item.is_retweet }">
    <TwitterAuthor :item="item" />

    <a :href="item.status_link" class="text-decoration-none" target="_blank">
      <p class="h6">{{ item.status }}</p>

      <img
        v-if="item.media_link"
        :src="item.media_link"
        class="card-img-top rounded mb-2 image"
      />

      <TwitterFooter :item="item" />
    </a>
  </article>
</template>

<style scoped>
.image {
  width: 400px;
  max-width: 100%;
  max-height: 200px;
  object-fit: cover;
}
</style>
