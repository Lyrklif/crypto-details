<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import API from "../api";
import type { CoinExchangesItem } from "../api/coinpaprika/types";
import SpoilerCard from "./SpoilerCard.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const list = ref<Array<CoinExchangesItem>>([]);

async function load() {
  try {
    const route = useRoute();
    const response = await API.coinpaprika.coinExchanges(
      route.params.id as string
    );
    list.value = response.data;
  } catch (error: any) {
    // TODO error
  }
}

load();
</script>

<template>
  <section>
    <header class="mb-3">
      <h2>{{ t("exchanges.title") }}</h2>
    </header>

    <SpoilerCard :title="t('exchanges.spoiler', { coin: list.length })">
      <template #content>
        <table class="table">
          <tbody>
            <tr>
              <th></th>
              <th>{{ t("exchanges.source") }}</th>
              <th>{{ t("exchanges.volume") }}</th>
              <th>{{ t("exchanges.fiats") }}</th>
            </tr>
          </tbody>
          <tbody>
            <tr v-for="(item, index) in list" :key="item.id">
              <td class="py-1">{{ index + 1 }}</td>
              <td class="py-1">
                <a
                  :href="`https://coinpaprika.com/exchanges/${item.id}`"
                  target="_blank"
                  :title="item.name"
                >
                  {{ item.name }}
                </a>
              </td>
              <td class="py-1">
                {{ item.adjusted_volume_24h_share.toFixed(4) }}%
              </td>
              <td class="py-1">
                <small
                  v-for="fiat in item.fiats"
                  :key="fiat.symbol"
                  :title="fiat.name"
                >
                  {{ fiat.symbol }} {{ " " }}
                </small>
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </SpoilerCard>
  </section>
</template>
