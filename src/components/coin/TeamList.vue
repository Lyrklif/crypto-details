<script setup lang="ts">
import type { PropType } from "vue";
import type { TeamItem } from "../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
defineProps({
  links: Array as PropType<Array<TeamItem>>,
});
</script>

<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th colspan="2">{{ t("coin.team") }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in links" :key="item.id">
        <td class="border-0 py-1">{{ item.name }}</td>
        <td class="border-0 py-1">{{ item.position }}</td>
      </tr>
    </tbody>
  </table>
</template>
