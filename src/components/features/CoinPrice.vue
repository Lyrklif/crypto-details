<script setup lang="ts">
import type { PropType } from "vue";
import { useSettingsStore } from "../../stores/settings";

const store = useSettingsStore();

defineProps({
  id: String as PropType<string>,
});
</script>

<template>
  <iframe
    class="block"
    :src="`https://coinpaprika.com/coin/${id}/embed/?interval=0&modules[]=market_details&modules[]=chart&primaryCurrency=${store.currency}`"
    width="350"
  ></iframe>
</template>

<style scoped>
.block {
  width: 100%;
  height: 630px;
  filter: saturate(0.4);
  border: none;
}
</style>
