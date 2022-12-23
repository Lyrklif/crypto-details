<script lang="ts" setup>
import type { PropType } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

defineProps({
  text: {
    type: String as PropType<string>,
    default: "",
  },
});
</script>

<template>
  <div>
    <div
      class="alert alert-danger alert-dismissible shadow-soft show"
      role="alert"
    >
      <span class="alert-inner--icon"><span class="fas fa-fire"></span></span>
      <span class="alert-inner--text">
        <strong>{{ t("error") }}</strong>
        {{ text }}
      </span>
    </div>
  </div>
</template>
