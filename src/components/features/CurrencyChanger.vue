<script setup lang="ts">
import { useInterfaceStore } from "../../stores/interface";
import { ref } from "vue";
import { currencyVariants } from "../../constants/settings";

const store = useInterfaceStore();
const selectCurrencyValue = ref(store.currency);

const changeHandler = (): void => {
  store.setCurrency(selectCurrencyValue.value);
};
</script>

<template>
  <div class="form-group mb-0">
    <select
      class="custom-select my-1 mr-sm-2"
      v-model="selectCurrencyValue"
      @change="changeHandler"
    >
      <option
        v-for="item in currencyVariants"
        :key="`currency-${item}`"
        :value="item"
      >
        {{ item }}
      </option>
    </select>
  </div>
</template>
