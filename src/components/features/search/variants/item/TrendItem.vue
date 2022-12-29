<script setup lang="ts">
import type { PropType } from "vue";
import type { TrendingCoinItem } from "../../../../../api/coingecko/types";

const emit = defineEmits(["choose"]);

defineProps({
  item: Object as PropType<TrendingCoinItem>,
  isDisabled: Boolean as PropType<boolean>,
});
</script>

<template>
  <button
    @click="emit('choose', item.item.symbol)"
    type="button"
    class="badge badge-dark text-uppercase animate-up-2"
    :title="item.item.name"
    :disabled="isDisabled"
  >
    {{ item.item.symbol }}
  </button>
</template>
