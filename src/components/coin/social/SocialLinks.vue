<script setup lang="ts">
import { PropType } from "vue";
import type { LinkExtended } from "../../../api/coinpaprika/types";
import SocialLink from "./SocialLink.vue";

defineProps({
  links: Array as PropType<Array<LinkExtended>>,
});
</script>

<template>
  <ul class="list-unstyled d-flex flex-wrap">
    <li
      v-for="(item, index) in links"
      :key="index"
      class="mb-2 mr-2 btn btn-sm btn-primary py-1 animate-up-2"
    >
      <SocialLink :item="item" />
    </li>
  </ul>
</template>
