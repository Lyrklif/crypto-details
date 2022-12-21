<script setup lang="ts">
import CoinBase from "../components/coin/CoinBase.vue";
import TwitterList from "../components/coin/TwitterList.vue";
import ExchangeMain from "../components/features/exchange/ExchangeMain.vue";
import PoolMain from "../components/features/pool/PoolMain.vue";
import CoinProfile from "../components/CoinProfile.vue";
import MetricMain from "../components/features/metric/MetricMain.vue";
import GoogleTrends from "../components/features/GoogleTrends.vue";
import NewsMain from "../components/features/news/NewsMain.vue";
import YoutubeMain from "../components/features/youtube/YoutubeMain.vue";
import MarketMain from "../components/features/market/MarketMain.vue";
</script>

<template>
  <div>
    <CoinBase />
    <TwitterList class="mb-5" />
    <ExchangeMain class="mb-4" />
    <PoolMain class="mb-4" />
    <CoinProfile class="mb-4" />
    <MetricMain class="mb-4" />
    <GoogleTrends class="mb-4" />
    <NewsMain class="mb-4" />
    <YoutubeMain class="mb-4" />
    <MarketMain class="mb-4" />
  </div>
</template>
