<script setup lang="ts">
import { ref } from "vue";
import API from "../api";
import { useCoinStore } from "../stores/coin";
import { useI18n } from "vue-i18n";
import SpoilerCard from "./SpoilerCard.vue";
import type { AssetMetricDataResponse } from "../api/messari/types";

const { t } = useI18n();
const store = useCoinStore();
const data = ref<AssetMetricDataResponse>();

async function load() {
  try {
    const fields =
      "risk_metrics,roi_by_year,supply,supply_activity,supply_distribution";
    const response = await API.messari.assetMetrics(store.symbol, fields);
    data.value = response.data.data;
  } catch (error: any) {
    // TODO error
  }
}
</script>

<template>
  <section>
    <header class="hide">
      <h2>{{ t("metric.title") }}</h2>
    </header>

    <SpoilerCard :title="`${t('metric.title')}`" @firstOpen="load">
      <template #content v-if="data">
        <div class="row">
          <div class="col-12 col-md-6">
            <h4 class="mb-1">{{ t("metric.roi_by_year") }}</h4>
            <table class="table mb-3 table-striped">
              <tbody>
                <tr
                  v-for="key in Object.keys(data.roi_by_year)"
                  :key="`roi_by_year-${key}`"
                  v-show="data.roi_by_year[key]"
                >
                  <td class="pr-3 py-1">{{ parseInt(key) }}</td>
                  <td
                    class="text-right py-1"
                    :class="
                      data.roi_by_year[key] >= 0
                        ? 'text-success'
                        : 'text-danger'
                    "
                  >
                    {{ data.roi_by_year[key] > 0 ? "+" : "" }}
                    {{
                      data.roi_by_year[key] && data.roi_by_year[key].toFixed(2)
                    }}%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="col-12 col-md-6">
            <h4 class="mb-1">{{ t("metric.risk") }}</h4>
            <table class="table mb-3 table-striped">
              <tbody>
                <tr
                  v-for="key in Object.keys(data.risk_metrics.sharpe_ratios)"
                  :key="`sharpe_ratios-${key}`"
                  v-show="data.risk_metrics.sharpe_ratios[key]"
                >
                  <td class="pr-3 py-1">{{ t(`metric.${key}`) }}</td>
                  <td class="text-right py-1">
                    {{
                      data.risk_metrics.sharpe_ratios[key] &&
                      data.risk_metrics.sharpe_ratios[key].toFixed(2)
                    }}
                  </td>
                </tr>
                <tr
                  v-for="key in Object.keys(data.risk_metrics.volatility_stats)"
                  :key="`volatility_stats-${key}`"
                  v-show="data.risk_metrics.volatility_stats[key]"
                >
                  <td class="pr-3 py-1">{{ t(`metric.${key}`) }}</td>
                  <td class="text-right py-1">
                    {{
                      data.risk_metrics.volatility_stats[key] &&
                      data.risk_metrics.volatility_stats[key].toFixed(2)
                    }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-md-6">
            <h4 class="mb-1">{{ t("metric.roi_by_year") }}</h4>
            <table class="table mb-3 table-striped">
              <tbody>
                <tr v-if="data.supply.circulating">
                  <td class="pr-3 py-1">{{ t(`metric.circulating`) }}</td>
                  <td class="text-right py-1">
                    {{
                      data.supply.circulating &&
                      data.supply.circulating.toFixed(2)
                    }}
                  </td>
                </tr>
                <tr v-if="data.supply.liquid">
                  <td class="pr-3 py-1">{{ t(`metric.liquid`) }}</td>
                  <td class="text-right py-1">
                    {{ data.supply.liquid && data.supply.liquid.toFixed(2) }}
                  </td>
                </tr>
              </tbody>
            </table>

            <h4 class="mb-1">{{ t("metric.supply_activity") }}</h4>
            <table class="table mb-3 table-striped">
              <tbody>
                <tr
                  v-for="key in Object.keys(data.supply_activity)"
                  :key="`supply_activity-${key}`"
                  v-show="data.supply_activity[key]"
                >
                  <td class="pr-3 py-1">{{ t(`metric.${key}`) }}</td>
                  <td class="text-right py-1">
                    {{
                      data.supply_activity[key] &&
                      data.supply_activity[key].toFixed(2)
                    }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-12 col-md-6">
            <h4 class="mb-1">{{ t("metric.supply_distribution") }}</h4>
            <table class="table mb-3 table-striped">
              <tbody>
                <tr
                  v-for="key in Object.keys(data.supply_distribution)"
                  :key="`supply_distribution-${key}`"
                  v-show="data.supply_distribution[key]"
                >
                  <td class="pr-3 py-1">{{ t(`metric.${key}`) }}</td>
                  <td class="text-right py-1">
                    {{
                      data.supply_distribution[key] &&
                      data.supply_distribution[key].toFixed(2)
                    }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </template>
    </SpoilerCard>
  </section>
</template>

<style scoped>
.hide {
  visibility: hidden;
  height: 0;
  width: 0;
}
</style>
