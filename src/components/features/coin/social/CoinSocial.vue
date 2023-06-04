<script setup lang="ts">
import type { PropType } from "vue";
import type { LinkExtended } from "../../../../api/coinpaprika/types";
import SocialLink from "./item/SocialItem.vue";

defineProps({
  links: Array as PropType<Array<LinkExtended>>,
});
</script>

<template>
  <ul class="list-unstyled flex flex-wrap my-0">
    <li v-for="(item, index) in links" :key="index" class="mb-2 mr-2">
      <SocialLink :item="item" />
    </li>
  </ul>
</template>
