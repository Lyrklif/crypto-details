<script setup lang="ts">
import CoinBase from "../components/coin/CoinBase.vue";
import TwitterList from "../components/coin/TwitterList.vue";
import ExchangeList from "../components/ExchangeList.vue";
import PoolList from "../components/PoolList.vue";
import CoinProfile from "../components/CoinProfile.vue";
import CoinMetrics from "../components/CoinMetrics.vue";
import GoogleTrends from "../components/GoogleTrends.vue";
</script>

<template>
  <div>
    <CoinBase />
    <TwitterList class="mb-5" />
    <ExchangeList class="mb-4" />
    <PoolList class="mb-4" />
    <CoinProfile class="mb-4" />
    <CoinMetrics class="mb-4" />
    <GoogleTrends />
  </div>
</template>
