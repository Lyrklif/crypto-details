<script setup lang="ts">
import type { PropType } from "vue";
import type { TrendingCoinItem } from "../../api/coingecko/types";

const emit = defineEmits(["choose"]);

defineProps({
  coins: Array as PropType<Array<TrendingCoinItem>>,
});
</script>

<template>
  <ul class="flex-row list-unstyled d-flex flex-wrap">
    <li v-for="item in coins" :key="item.item.id" class="mr-1 mb-1">
      <button
        @click="emit('choose', item.item.symbol)"
        type="button"
        class="btn btn-primary btn-pill text-dark py-1 px-2 animate-up-2"
        :title="item.item.name"
      >
        {{ item.item.symbol }}
      </button>
    </li>
  </ul>
</template>
