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
  <p>
    {{ t("source.powered_by") }}
    <a
      target="_blank"
      :href="sourceAPI[site].site"
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
