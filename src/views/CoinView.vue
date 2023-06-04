<script setup lang="ts">
import CoinMain from "../components/features/coin/CoinMain.vue";
import TwitterMain from "../components/features/twitter/TwitterMain.vue";
import ExchangeMain from "../components/features/exchange/ExchangeMain.vue";
import PoolMain from "../components/features/pool/PoolMain.vue";
import ProfileMain from "../components/features/profile/ProfileMain.vue";
import MetricMain from "../components/features/metric/MetricMain.vue";
import GoogleTrends from "../components/features/GoogleTrends.vue";
import NewsMain from "../components/features/coin-news/NewsMain.vue";
import YoutubeMain from "../components/features/youtube/YoutubeMain.vue";
import MarketMain from "../components/features/market/MarketMain.vue";
</script>

<template>
  <div class="grid mx-auto">
    <div class="col-12">
      <CoinMain />
      <ExchangeMain class="mb-4 mt-4" />
      <PoolMain class="mb-4" />
      <MarketMain class="mb-4" />
      <ProfileMain class="mb-4" />
      <MetricMain class="mb-4" />
      <NewsMain class="mb-4" />
      <YoutubeMain class="mb-4" />
      <TwitterMain class="mb-5" />
      <GoogleTrends />
    </div>
  </div>
</template>
