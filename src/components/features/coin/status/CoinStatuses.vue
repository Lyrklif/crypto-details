<script setup lang="ts">
import type { PropType } from "vue";
import type { GetCoinByIDResponse } from "../../../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";
import Tag from "primevue/tag";

const { t } = useI18n();
defineProps({
  coin: Object as PropType<GetCoinByIDResponse>,
});
</script>

<template>
  <ul class="flex flex-row flex-wrap list-unstyled">
    <li class="mr-1 mb-1">
      <Tag
        :severity="coin.is_active ? 'success' : 'warning'"
        :value="coin.is_active ? t('coin.active') : t('coin.not_active')"
      />
    </li>
    <li v-if="coin.is_new" class="mr-1 mb-1">
      <Tag :value="t('coin.new')" severity="info" />
    </li>
    <li class="mr-1 mb-1">
      <Tag :value="coin.development_status" />
    </li>
    <li class="mr-1 mb-1">
      <Tag :value="`${t('coin.rank')} ${coin.rank}`" />
    </li>
    <li v-if="coin.open_source" class="mr-1 mb-1">
      <Tag :value="t('coin.open_source')" />
    </li>
    <li v-if="coin.hardware_wallet" class="mr-1 mb-1">
      <Tag :value="t('coin.hardware_wallet')" />
    </li>
  </ul>
</template>
