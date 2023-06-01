<script setup lang="ts">
import type { PropType } from "vue";
import type { TagItem } from "../../../../api/coinpaprika/types";
import Tag from "primevue/tag";

defineProps({
  links: Array as PropType<Array<TagItem>>,
});
</script>

<template>
  <ul class="list-unstyled d-flex flex-wrap">
    <li v-for="item in links" :key="`tag-${item.id}`" class="mr-2 mb-2">
      <Tag :value="item.name" />
    </li>
  </ul>
</template>
