<script setup lang="ts">
import Button from "primevue/button";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const emit = defineEmits(["back"]);
</script>

<template>
  <header class="flex align-items-center justify-content-between flex-wrap">
    <Button
      :label="t('search.back')"
      icon="pi pi-chevron-left"
      class="mr-1 mb-2"
      type="button"
      severity="success"
      outlined
      :title="t('search.back')"
      @click="emit('back')"
    />

    <h2 class="mt-0 mb-2">{{ t("search.results") }}</h2>
  </header>
</template>
