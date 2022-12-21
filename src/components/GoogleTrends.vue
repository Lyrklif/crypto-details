<script setup lang="ts">
import { watch } from "vue";
import { useCoinStore } from "../stores/coin";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const { locale } = useI18n();
const store = useCoinStore();
const { symbol, name } = storeToRefs(store);

watch(symbol, () => {
  initGoogleTrends(`${symbol.value}`, "TIMESERIES", "TRENDS");
  initGoogleTrends(`${name.value}`, "TIMESERIES", "TRENDS2");
  initGoogleTrends(`${name.value}`, "GEO_MAP", "GEO_MAP");
});

type widgetType = "TIMESERIES" | "GEO_MAP";
type divType = "TRENDS" | "TRENDS2" | "GEO_MAP";

function initGoogleTrends(keyword: string, widget: widgetType, divId: divType) {
  if (!window?.trends) return;

  window.trends.embed.renderExploreWidgetTo(
    document.getElementById(divId),
    widget,
    {
      comparisonItem: [
        {
          keyword,
          locale: locale.value,
          geo: "",
          time: "2004-01-01 2022-12-11",
        },
      ],
      category: 7,
      property: "",
    },
    {
      exploreQuery: `cat=7&date=all&q=${keyword}`,
      guestPath: "https://trends.google.com:443/trends/embed/",
    }
  );
}
</script>

<template>
  <section class="card bg-primary border-light shadow-soft p-3">
    <header>
      <h2>{{ t("trends.title") }}</h2>
    </header>

    <p class="mb-2">
      {{ t("trends.by") }}: <i>{{ symbol }}</i>
    </p>
    <div id="TRENDS" class="block" />

    <p class="mb-2 mt-4">
      {{ t("trends.by") }}: <i>{{ name }}</i>
    </p>
    <div id="TRENDS2" class="block" />

    <p class="mb-2 mt-4">
      {{ t("trends.by") }}: <i>{{ name }}</i>
    </p>
    <div id="GEO_MAP" class="block" />
  </section>
</template>

<style scoped>
.block {
  filter: saturate(0.4);
}
</style>
