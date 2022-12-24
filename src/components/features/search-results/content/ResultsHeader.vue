<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const emit = defineEmits(["back"]);
</script>

<template>
  <header
    class="card-header text-center pb-0 d-flex align-items-center justify-content-between flex-wrap"
  >
    <button
      class="btn btn-primary mr-1 mb-2 animate-left-2"
      type="button"
      :title="t('search.back')"
      @click="emit('back')"
    >
      <span class="mr-1"><span class="icon-chevron-left"></span></span>
      {{ t("search.back") }}
    </button>

    <h2 class="h4 mb-2">{{ t("search.results") }}</h2>
  </header>
</template>
