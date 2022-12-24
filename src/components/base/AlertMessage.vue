<script lang="ts" setup>
import type { PropType } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

type alertTypes = "info" | "success" | "error" | "warning";
const alerts: { [alertTypes: string]: { classes: string; icon: string } } = {
  success: { classes: "alert-success", icon: "icon-checkmark" },
  warning: { classes: "alert-secondary", icon: "icon-bell" },
  error: { classes: "alert-danger", icon: "icon-fire" },
  info: { classes: "alert-info", icon: "icon-info-circle" },
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
  <div>
    <div
      class="alert alert-dismissible shadow-soft show"
      :class="alerts[type].classes"
      role="alert"
    >
      <span class="alert-inner--icon">
        <span :class="alerts[type].icon" />
      </span>
      <span class="alert-inner--text">
        <strong class="mr-2">{{ t(`alert.${type}`) }}</strong>
        <slot>{{ text }}</slot>
      </span>
    </div>
  </div>
</template>
