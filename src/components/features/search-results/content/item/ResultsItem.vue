<script setup lang="ts">
import type { PropType } from "vue";
import type { SearchCurrencyItem } from "../../../../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";
import Card from "primevue/card";
import Tag from "primevue/tag";

const { t } = useI18n();
defineProps({
  item: Object as PropType<SearchCurrencyItem>,
});
</script>

<template>
  <RouterLink
    :to="{ name: 'coin', params: { id: item.id } }"
    :title="item.name"
    class="no-underline"
  >
    <Card>
      <template #title>
        <span class="font-small text-sm">{{ item.symbol }}</span>
        <h3 class="font-weight-bold my-0">{{ item.name }}</h3>
      </template>

      <template #content>
        <ul class="flex list-unstyled my-0">
          <li v-if="item.is_new">
            <Tag severity="info" :value="t('search.new')" rounded />
          </li>
          <li v-if="item.is_active">
            <Tag severity="success" :value="t('search.active')" rounded />
          </li>
        </ul>
      </template>
    </Card>
  </RouterLink>
</template>
