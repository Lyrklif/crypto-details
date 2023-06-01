<script setup lang="ts">
import type { PropType } from "vue";
import type { GetCoinByIDResponse } from "../../../../api/coinpaprika/types";
import LazyImage from "../../../base/LazyImage.vue";

defineProps({
  coin: Object as PropType<GetCoinByIDResponse>,
});
</script>

<template>
  <header class="flex flex-wrap align-items-center">
    <div class="mr-3">
      <LazyImage :src="coin.logo" :alt="coin.name" height="40" width="40" />
    </div>
    <div>
      <h1 class="my-0 mr-1">{{ coin.name }}</h1>
      <span>{{ coin.symbol }}</span>
    </div>
  </header>
</template>
