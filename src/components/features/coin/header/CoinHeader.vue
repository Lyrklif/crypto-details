<script setup lang="ts">
import type { PropType } from "vue";
import type { GetCoinByIDResponse } from "../../../../api/coinpaprika/types";
import LazyImage from "../../../base/LazyImage.vue";

defineProps({
  coin: Object as PropType<GetCoinByIDResponse>,
});
</script>

<template>
  <header class="d-flex flex-wrap align-items-center">
    <div
      class="border border-light icon icon-shape-sm mr-3 rounded-circle shadow-inset"
    >
      <LazyImage :src="coin.logo" :alt="coin.name" height="40" width="40" />
    </div>
    <div>
      <h1 class="mr-1">{{ coin.name }}</h1>
      <span>{{ coin.symbol }}</span>
    </div>
  </header>
</template>
