<script setup lang="ts">
import type { PropType } from "vue";

const emit = defineEmits(["choose"]);

defineProps({
  item: String as PropType<string>,
  isDisabled: Boolean as PropType<boolean>,
});
</script>

<template>
  <button
    @click="emit('choose', item)"
    type="button"
    class="badge badge-dark text-uppercase animate-up-2"
    :title="item"
    :disabled="isDisabled"
  >
    {{ item }}
  </button>
</template>
