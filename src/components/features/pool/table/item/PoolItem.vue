<script setup lang="ts">
import { PropType } from "vue";
import type { Pool } from "../../../../../api/minerstat/types";
import { useI18n } from "vue-i18n";
import { useCoinStore } from "../../../../../stores/coin";

const { t } = useI18n();
const store = useCoinStore();

defineProps({
  pool: Object as PropType<Pool>,
});
</script>

<template>
  <tr>
    <td class="py-2">
      <a
        :href="pool.website"
        target="_blank"
        :title="pool.name"
        class="btn btn-sm btn-primary btn-pill text-info py-1"
      >
        {{ pool.name }}
      </a>
    </td>
    <td class="py-2">{{ pool[store.symbol].fee }}</td>
    <td class="py-2">{{ pool[store.symbol].payoutThreshold }}</td>
    <td class="py-2">{{ pool[store.symbol].rewardMethod }}</td>
    <td class="py-2">
      <span class="badge badge-info">
        {{ pool[store.symbol].algorithm }}
      </span>
      <span v-if="pool[store.symbol].registration" class="badge badge-danger">
        {{ t("pools.registration") }}
      </span>
      <span v-if="pool[store.symbol].anonymous" class="badge badge-success">
        {{ t("pools.anonymous") }}
      </span>
    </td>
  </tr>
</template>
