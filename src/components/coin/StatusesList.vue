<script setup lang="ts">
import type { PropType } from "vue";
import type { GetCoinByIDResponse } from "../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
defineProps({
  coin: Object as PropType<GetCoinByIDResponse>,
});
</script>

<template>
  <ul class="d-flex flex-row flex-wrap list-unstyled">
    <li class="mr-1 mb-1">
      <span
        class="badge text-uppercase"
        :class="coin.is_active ? 'badge-success' : 'badge-danger'"
        >{{ coin.is_active ? t("coin.active") : t("coin.not_active") }}</span
      >
    </li>
    <li v-if="coin.is_new" class="mr-1 mb-1">
      <span class="badge badge-danger text-uppercase">{{ t("coin.new") }}</span>
    </li>
    <li class="mr-1 mb-1">
      <span class="badge badge-dark">{{ coin.development_status }}</span>
    </li>
    <li class="mr-1 mb-1">
      <span class="badge badge-dark">{{ t("coin.rank") }} {{ coin.rank }}</span>
    </li>
    <li v-if="coin.open_source" class="mr-1 mb-1">
      <span class="badge badge-dark">{{ t("coin.open_source") }}</span>
    </li>
    <li v-if="coin.hardware_wallet" class="mr-1 mb-1">
      <span class="badge badge-dark">{{ t("coin.hardware_wallet") }}</span>
    </li>
  </ul>
</template>
