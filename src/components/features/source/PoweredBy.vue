<script lang="ts" setup>
import type { PropType } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const sites = {
  coingecko: "https://www.coingecko.com/",
  coinpaprika: "https://coinpaprika.com/",
  messari: "https://messari.io/",
  gnews: "https://gnews.io/",
  minerstat: "https://minerstat.com/",
  youtube: "https://www.youtube.com/",
};

type siteType =
  | "coingecko"
  | "coinpaprika"
  | "messari"
  | "gnews"
  | "minerstat"
  | "youtube";

defineProps({
  site: {
    type: String as PropType<siteType>,
    required: true,
  },
  loading: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  fall: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
});
</script>

<template>
  <p>
    {{ t("source.powered_by") }}
    <a
      target="_blank"
      :href="sites[site]"
      :title="site"
      class="text-capitalize mr-2"
    >
      <b>{{ site }}</b>
    </a>

    <i v-if="loading" class="fa-solid fa-spinner"></i>
    <i
      v-else
      class="fa-solid fa-heart"
      :class="fall ? 'fa-heart-crack' : 'fa-heart'"
    ></i>
  </p>
</template>
