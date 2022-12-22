<script setup lang="ts">
import type { PropType } from "vue";
import type { GetCoinByIDResponse } from "../../../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";
import DescriptionTable from "./table/DescriptionTable.vue";

const { t } = useI18n();
defineProps({
  coin: Object as PropType<GetCoinByIDResponse>,
});
</script>

<template>
  <div>
    <p class="lead mb-4">{{ coin.description }}</p>

    <DescriptionTable :coin="coin" />

    <a
      v-if="coin.whitepaper.link"
      :href="coin.whitepaper.link"
      target="_blank"
      :title="t('coin.whitepaper')"
      class="btn btn-primary mb-4 animate-up-2"
    >
      <i class="fa-solid fa-paperclip mr-1"></i>
      {{ t("coin.whitepaper") }}
    </a>
  </div>
</template>
