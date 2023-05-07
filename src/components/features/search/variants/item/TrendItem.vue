<script setup lang="ts">
import type { PropType } from "vue";
import type { TrendingCoinItem } from "../../../../../api/coingecko/types";
import Button from "primevue/button";

const emit = defineEmits(["choose"]);

defineProps({
  item: Object as PropType<TrendingCoinItem>,
  isDisabled: Boolean as PropType<boolean>,
});
</script>

<template>
  <Button
    :label="item.item.symbol"
    rounded
    @click="emit('choose', item.item.symbol)"
    :disabled="isDisabled"
    class="py-1"
  />
</template>
