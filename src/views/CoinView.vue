<script setup lang="ts">
import CoinBase from "../components/coin/CoinBase.vue";
import TwitterList from "../components/coin/TwitterList.vue";
import ExchangeList from "../components/exchange/ExchangeMain.vue";
import PoolList from "../components/PoolList.vue";
import CoinProfile from "../components/CoinProfile.vue";
import CoinMetrics from "../components/metric/MetricMain.vue";
import GoogleTrends from "../components/GoogleTrends.vue";
import CoinNews from "../components/news/NewsMain.vue";
import YoutubeVideo from "../components/youtube/YoutubeMain.vue";
import MarketList from "../components/MarketList.vue";
</script>

<template>
  <div>
    <CoinBase />
    <TwitterList class="mb-5" />
    <ExchangeList class="mb-4" />
    <PoolList class="mb-4" />
    <CoinProfile class="mb-4" />
    <CoinMetrics class="mb-4" />
    <GoogleTrends class="mb-4" />
    <CoinNews class="mb-4" />
    <YoutubeVideo class="mb-4" />
    <MarketList class="mb-4" />
  </div>
</template>
