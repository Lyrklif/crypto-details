<script setup lang="ts">
import { ref, watch } from "vue";
import type { PropType } from "vue";
import { useInterfaceStore } from "../../stores/interface";
import { storeToRefs } from "pinia";

const defaultWidgetCurrency = "USD";
const validValues: Array<string> = [defaultWidgetCurrency, "BTC", "ETH", "PLN"];

const store = useInterfaceStore();
const { currency } = storeToRefs(store);
const widgetCurrency = ref<string>(defaultWidgetCurrency);

watch(currency, () => {
  const isValid = validValues.includes(currency.value);
  widgetCurrency.value = isValid ? currency.value : defaultWidgetCurrency;
});

defineProps({
  id: String as PropType<string>,
});
</script>

<template>
  <iframe
    class="block"
    :src="`https://coinpaprika.com/coin/${id}/embed/?interval=0&modules[]=market_details&modules[]=chart&primaryCurrency=${widgetCurrency}`"
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
