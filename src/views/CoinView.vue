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

import PriceWidget from "../components/features/CoinPrice.vue";
</script>

<template>
  <div class="grid mx-auto">
    <CoinMain />
    <PriceWidget class="col-12 lg:col-6" />
    <ExchangeMain class="col-12 lg:col-6" />

    <ProfileMain class="col-12" />

    <NewsMain class="col-12 md:col-6" />
    <YoutubeMain class="col-12 md:col-6" />

    <PoolMain class="col-12 lg:col-6" />
    <MarketMain class="col-12 lg:col-6" />

    <MetricMain class="col-12" />

    <TwitterMain class="col-12" />

    <GoogleTrends class="col-12" />
  </div>
</template>
