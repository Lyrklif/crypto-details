<script setup lang="ts">
import type { PropType } from "vue";
import type { TagItem } from "../../../../api/coinpaprika/types";

defineProps({
  links: Array as PropType<Array<TagItem>>,
});
</script>

<template>
  <ul class="list-unstyled d-flex flex-wrap">
    <li v-for="item in links" :key="`tag-${item.id}`" class="mr-2 mb-2">
      <span class="badge badge-dark">{{ item.name }}</span>
    </li>
  </ul>
</template>
