<script lang="ts" setup>
import type { PropType } from "vue";
import Message from "primevue/message";

type alertTypes = "info" | "success" | "error" | "warning";
const alerts: {
  [alertTypes: string]: { severity: string };
} = {
  success: { severity: "success" },
  warning: { severity: "warn" },
  error: { severity: "error" },
  info: { severity: "info" },
};

defineProps({
  text: {
    type: String as PropType<string>,
    default: "",
  },
  type: {
    type: String as PropType<alertTypes>,
    default: "info",
  },
});
</script>

<template>
  <Message :severity="alerts[type].severity" :closable="false">
    <slot>{{ text }}</slot>
  </Message>
</template>
