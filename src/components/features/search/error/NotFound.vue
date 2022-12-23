<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const emit = defineEmits(["close"]);
</script>

<template>
  <div
    class="alert alert-danger alert-dismissible shadow-soft fade show"
    role="alert"
  >
    <span class="alert-inner--text">{{ t("errors.token_not_found") }}</span>
    <button
      type="button"
      class="close"
      data-dismiss="alert"
      :aria-label="t('search.close')"
      :title="t('search.close')"
      @click="emit('close')"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>
