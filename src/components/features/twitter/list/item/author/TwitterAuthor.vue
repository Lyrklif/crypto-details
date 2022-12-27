<script setup lang="ts">
import { PropType } from "vue";
import type { GetTwitterItem } from "../../../../../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";
import LazyImage from "../../../../../base/LazyImage.vue";

const { t } = useI18n();

defineProps({
  item: Object as PropType<GetTwitterItem>,
});
</script>

<template>
  <address class="author">
    <a
      rel="author"
      target="_blank"
      :href="`https://twitter.com/${item.user_name}`"
      :title="item.user_name"
      class="d-flex flex-wrap align-items-center text-decoration-none"
    >
      <LazyImage
        :src="item.user_image_link"
        class="shadow-soft p-0 border border-light rounded-circle mr-2 overflow-hidden"
        :alt="item.user_name"
        height="48"
        width="48"
      />

      <div>
        <h3 class="d-block text-dark lh-100 my-0 h6">
          {{ item.user_name }}
        </h3>
        <span class="text-gray-700 lh-100">
          {{ `@${item.user_name}` }}
        </span>
      </div>
    </a>
  </address>
</template>
