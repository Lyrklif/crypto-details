<script setup lang="ts">
import { PropType } from "vue";
import type { GetTwitterItem } from "../../../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";
import TwitterItem from "./item/TwitterItem.vue";

const { t } = useI18n();

defineProps({
  list: Array as PropType<Array<GetTwitterItem>>,
});
</script>

<template>
  <ul class="list list-unstyled">
    <li
      v-for="item in list"
      :key="item.status_id"
      class="mb-3 pt-3 pb-1 px-4 card bg-primary shadow-inset border-light"
    >
      <TwitterItem :item="item" />
    </li>
  </ul>
</template>
