<script setup lang="ts">
import Dropdown from "primevue/dropdown";
import { useInterfaceStore } from "../../stores/interface";
import { currencyVariants } from "../../constants/interface";
import { storeToRefs } from "pinia";

const store = useInterfaceStore();
const { currency } = storeToRefs(store);
const { setCurrency } = store;

const changeHandler = (): void => {
  setCurrency(currency.value);
};
</script>

<template>
  <Dropdown
    v-model="currency"
    :options="currencyVariants"
    @change="changeHandler"
  />
</template>
