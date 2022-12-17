<script setup lang="ts">
import CoinBase from "../components/coin/CoinBase.vue";
import TwitterList from "../components/coin/TwitterList.vue";
import ExchangeList from "../components/ExchangeList.vue";
</script>

<template>
  <div>
    <CoinBase />
    <TwitterList class="mb-5" />
    <ExchangeList />
  </div>
</template>
