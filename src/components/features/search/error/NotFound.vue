<script setup lang="ts">
import { useI18n } from "vue-i18n";
import Message from "primevue/message";

const { t } = useI18n();
const emit = defineEmits(["close"]);
</script>

<template>
  <Message severity="error" @close="emit('close')">
    {{ t("errors.token_not_found") }}
  </Message>
</template>
