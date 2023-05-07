<script setup lang="ts">
import type { PropType } from "vue";
import Button from "primevue/button";

const emit = defineEmits(["choose"]);

defineProps({
  item: String as PropType<string>,
  isDisabled: Boolean as PropType<boolean>,
});
</script>

<template>
  <Button
    :label="item"
    severity="secondary"
    rounded
    @click="emit('choose', item)"
    :disabled="isDisabled"
    class="py-1"
  />
</template>
