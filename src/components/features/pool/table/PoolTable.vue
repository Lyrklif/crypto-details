<script setup lang="ts">
import { PropType, ref } from "vue";
import type { Pool } from "../../../../api/minerstat/types";
import { useI18n } from "vue-i18n";
import PoolItem from "./item/PoolItem.vue";

const { t } = useI18n();

defineProps({
  pools: Array as PropType<Array<Pool>>,
});
</script>

<template>
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
    <tbody>
      <PoolItem
        v-for="(pool, index) in pools"
        :key="`pool-${index}`"
        :pool="pool"
      />
    </tbody>
  </table>
</template>
