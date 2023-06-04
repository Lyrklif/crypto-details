<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useInterfaceStore } from "../../stores/interface";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

const defaultWidgetCurrency = "USD";
const validValues: Array<string> = [defaultWidgetCurrency, "BTC", "ETH", "PLN"];

const store = useInterfaceStore();
const { currency } = storeToRefs(store);
const route = useRoute();
const widgetCurrency = ref<string>(defaultWidgetCurrency);

watch(currency, () => {
  const isValid = validValues.includes(currency.value);
  widgetCurrency.value = isValid ? currency.value : defaultWidgetCurrency;
});

const id = computed(() => {
  return route.params.id;
});

const link = computed(() => {
  const source = `https://coinpaprika.com/coin/${id.value}/embed/`;
  const staticParams = "?interval=0&modules[]=market_details&modules[]=chart";
  const currency = widgetCurrency.value;
  const nightMode = false;
  return `${source}${staticParams}&primaryCurrency=${currency}&nightMode=${nightMode}`;
});
</script>

<template>
  <div v-if="id">
    <iframe class="block" :src="link" width="600"></iframe>
  </div>
</template>

<style scoped>
.block {
  width: 100%;
  max-width: 100%;
  height: 630px;
  border: none;
}
</style>
