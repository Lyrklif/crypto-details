<script setup lang="ts">
import { watch } from "vue";
import { useCoinStore } from "../stores/coin";
import { storeToRefs } from "pinia";

const store = useCoinStore();
const { symbol } = storeToRefs(store);

watch(symbol, () => {
  initGoogleTrends(`${symbol}`.toLowerCase());
});

function initGoogleTrends(symbol: string) {
  if (!window?.trends) return;

  window.trends.embed.renderExploreWidgetTo(
    document.getElementById("widget"),
    "TIMESERIES",
    {
      comparisonItem: [
        { keyword: symbol, geo: "", time: "2004-01-01 2022-12-11" },
      ],
      category: 7,
      property: "",
    },
    {
      exploreQuery: `cat=7&date=all&q=${symbol}`,
      guestPath: "https://trends.google.com:443/trends/embed/",
    }
  );
}
</script>

<template>
  <div ref="widget" id="widget" height="500" width="1000" class="block"></div>
</template>

<style scoped>
.block {
  filter: saturate(0.4);
}
</style>
