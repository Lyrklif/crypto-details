<script setup lang="ts">
import { PropType } from "vue";
import { GetCoinByIDResponse } from "../../api/coinpaprika/types";

defineProps({
  coin: Object as PropType<GetCoinByIDResponse>,
});
</script>

<template>
  <ul class="d-flex flex-row flex-wrap list-unstyled">
    <li class="mr-1 mb-1">
      <span
        class="badge text-uppercase"
        :class="coin.is_active ? 'badge-success' : 'badge-danger'"
        >{{ coin.is_active ? "Active" : "Not active" }}</span
      >
    </li>
    <li v-if="coin.is_new" class="mr-1 mb-1">
      <span class="badge badge-danger text-uppercase">New</span>
    </li>
    <li class="mr-1 mb-1">
      <span class="badge badge-dark">{{ coin.development_status }}</span>
    </li>
    <li class="mr-1 mb-1">
      <span class="badge badge-dark">Rank {{ coin.rank }}</span>
    </li>
    <li v-if="coin.open_source" class="mr-1 mb-1">
      <span class="badge badge-dark">Open Source</span>
    </li>
    <li v-if="coin.hardware_wallet" class="mr-1 mb-1">
      <span class="badge badge-dark">Hardware Wallet</span>
    </li>
  </ul>
</template>
