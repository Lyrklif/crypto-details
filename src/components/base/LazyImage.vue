<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  src: {
    type: String as PropType<string>,
    required: true,
  },
  alt: {
    type: String as PropType<string>,
    required: true,
  },
});
</script>

<template>
  <img v-lazy="src" />
</template>
