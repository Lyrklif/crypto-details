<script setup lang="ts">
import type { PropType } from "vue";
import type { SearchCurrencyItem } from "../../../../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
defineProps({
  item: Object as PropType<SearchCurrencyItem>,
});
</script>

<template>
  <RouterLink
    :to="{ name: 'coin', params: { id: item.id } }"
    class="p-2 p-md-3"
    :title="item.name"
  >
    <span class="font-small">{{ item.symbol }}</span>
    <h3 class="font-weight-bold">{{ item.name }}</h3>

    <ul class="d-flex list-unstyled">
      <li>
        <span v-if="item.is_new" class="badge badge-secondary mr-1 mb-1">
          {{ t("search.new") }}
        </span>
      </li>
      <li>
        <span v-if="item.is_active" class="badge badge-success mr-1 mb-1">
          {{ t("search.active") }}
        </span>
      </li>
    </ul>
  </RouterLink>
</template>
