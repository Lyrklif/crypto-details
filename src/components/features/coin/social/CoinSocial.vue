<script setup lang="ts">
import type { PropType } from "vue";
import type { LinkExtended } from "../../../../api/coinpaprika/types";
import SocialLink from "./item/SocialItem.vue";

defineProps({
  links: Array as PropType<Array<LinkExtended>>,
});
</script>

<template>
  <ul class="list-unstyled d-flex flex-wrap">
    <li
      v-for="(item, index) in links"
      :key="index"
      class="mb-2 mr-2 animate-up-2"
    >
      <SocialLink :item="item" />
    </li>
  </ul>
</template>
