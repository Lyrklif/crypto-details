<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import API from "../api";
import type { MarketsItemResponse } from "../api/coinpaprika/types";
import { MARKET_TRUST } from "../api/coinpaprika/types";
import SpoilerCard from "./SpoilerCard.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const route = useRoute();
const list = ref<Array<MarketsItemResponse>>([]);

async function load() {
  try {
    const response = await API.coinpaprika.getMarketsByCoin(
      route.params.id as string
    );
    list.value = response.data;
  } catch (error: any) {
    // TODO error
  }
}
</script>

<template>
  <section>
    <header>
      <h2 class="text-hide">{{ t("market.title") }}</h2>
    </header>

    <SpoilerCard
      :title="`${t('market.title')} (${list.length})`"
      @firstOpen="load"
    >
      <template #content v-if="list.length">
        <table class="table">
          <thead>
            <tr>
              <th>{{ t("market.exchange") }}</th>
              <th>{{ t("market.price") }}</th>
              <th>{{ t("market.pair") }}</th>
              <th>{{ t("market.trust_score") }}</th>
              <th>{{ t("market.volume") }}</th>
              <th>{{ t("market.category") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in list" :key="`markets-${item.exchange_id}`">
              <td class="py-1">
                <a
                  :href="item.market_url"
                  target="_blank"
                  class="text-decoration-none"
                  :title="item.exchange_name"
                  >{{ item.exchange_name }}</a
                >
              </td>
              <td class="py-1">
                <b
                  v-for="fiatKey in Object.keys(item.quotes)"
                  :key="`fiat-${item.exchange_id}-${fiatKey}`"
                  class="mb-0 d-block text-monospace"
                >
                  {{ item.quotes[fiatKey].price.toFixed(6) }} {{ fiatKey }}
                </b>
              </td>
              <td class="py-1 text-monospace">{{ item.pair }}</td>
              <td class="py-1">
                <span
                  class="badge text-monospace"
                  :class="{
                    'badge-success': MARKET_TRUST.HIGH === item.trust_score,
                    'badge-secondary': MARKET_TRUST.MEDIUM === item.trust_score,
                    'badge-danger': MARKET_TRUST.LOW === item.trust_score,
                    'badge-dark': MARKET_TRUST.NO_DATA === item.trust_score,
                  }"
                >
                  {{ t(`market.trust_score_value.${item.trust_score}`) }}
                </span>
              </td>
              <td class="py-1">
                {{ item.adjusted_volume_24h_share.toFixed(2) }}%
              </td>
              <td class="py-1">{{ item.category }}</td>
            </tr>
          </tbody>
        </table>
      </template>
    </SpoilerCard>
  </section>
</template>
