<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  initGoogleTrends();
});

function initGoogleTrends() {
  if (!window?.trends) return;

  window.trends.embed.renderExploreWidgetTo(
    document.getElementById("widget"),
    "TIMESERIES",
    {
      comparisonItem: [
        { keyword: "bnb", geo: "", time: "2004-01-01 2022-12-11" },
      ],
      category: 7,
      property: "",
    },
    {
      exploreQuery: "cat=7&date=all&q=bnb",
      guestPath: "https://trends.google.com:443/trends/embed/",
    }
  );
}
</script>

<template>
  <div ref="widget" id="widget" height="500" width="1000"></div>
</template>
