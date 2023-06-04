<script lang="ts" setup>
import type { PropType } from "vue";
import { useI18n } from "vue-i18n";
import sourceAPI from "../../constants/sourceAPI";
import type { sourceAPINameType } from "../../constants/sourceAPI";

const { t } = useI18n();

defineProps({
  site: {
    type: String as PropType<sourceAPINameType>,
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
  <p class="my-0 text-xs">
    {{ t("source.powered_by") }}
    <a
      target="_blank"
      :href="sourceAPI[site].site"
      :title="site"
      class="capitalize mr-2 no-underline"
    >
      <b>{{ site }}</b>
    </a>

    <i v-if="loading" class="pi pi-spin pi-spinner"></i>
    <i v-else class="pi" :class="fall ? 'pi-power-off' : 'pi-heart-fill'"></i>
  </p>
</template>
