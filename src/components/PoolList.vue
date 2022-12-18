<script setup lang="ts">
import { ref } from "vue";
import API from "../api";
import type { Pool } from "../api/minerstat/types";
import { useCoinStore } from "../stores/coin";
import { useI18n } from "vue-i18n";
import SpoilerCard from "./SpoilerCard.vue";

const { t } = useI18n();
const pools = ref<Array<Pool>>([]);
const store = useCoinStore();

async function load() {
  try {
    const coin = store.symbol;
    const response = await API.minerstat.pools({ coin });
    pools.value = response.data;
  } catch (error: any) {
    // TODO error
  }
}

load();
</script>

<template>
  <section v-if="pools.length">
    <header class="hide">
      <h2>{{ t("pools.title") }}</h2>
    </header>

    <SpoilerCard :title="t('pools.title', { pools: pools.length })">
      <template #content>
        <table class="table">
          <thead>
            <tr>
              <th></th>
              <th>{{ t("pools.fee") }}</th>
              <th>{{ t("pools.payout_threshold") }}</th>
              <th>{{ t("pools.reward_method") }}</th>
              <th></th>
            </tr>
          </thead>
          <tbody v-for="item in pools" :key="item.id">
            <tr v-for="(coin, index) in item.coins" :key="`coin${index}`">
              <td class="py-2">
                <a
                  :href="item.website"
                  target="_blank"
                  :title="item.name"
                  class="btn btn-sm btn-primary btn-pill text-info py-1"
                >
                  {{ item.name }}
                </a>
              </td>
              <td class="py-2">{{ coin.fee }}</td>
              <td class="py-2">{{ coin.payoutThreshold }}</td>
              <td class="py-2">{{ coin.rewardMethod }}</td>
              <td class="py-2">
                <span class="badge badge-info">
                  {{ coin.algorithm }}
                </span>
                <span v-if="coin.registration" class="badge badge-danger">
                  {{ t("pools.registration") }}
                </span>
                <span v-if="coin.anonymous" class="badge badge-success">
                  {{ t("pools.anonymous") }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
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
