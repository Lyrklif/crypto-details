<script setup lang="ts">
import { defineProps, PropType } from "vue";
import type { CoinExchangesItem } from "../../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";
import TableItem from "./table/TableItem.vue";

const { t } = useI18n();

defineProps({
  list: Array as PropType<Array<CoinExchangesItem>>,
});
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th>{{ t("exchanges.source") }}</th>
        <th>{{ t("exchanges.volume") }}</th>
        <th>{{ t("exchanges.fiats") }}</th>
      </tr>
    </thead>
    <tbody>
      <TableItem
        v-for="item in list"
        :key="`exchange-table-${item.id}`"
        :item="item"
      />
    </tbody>
  </table>
</template>
