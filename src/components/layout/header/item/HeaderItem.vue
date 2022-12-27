<script setup lang="ts">
import { PropType } from "vue";
import { RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";
import type { NAV_LINK } from "../../../../constants/navLinks";

const { t } = useI18n();

defineProps({
  item: Object as PropType<NAV_LINK>,
});
</script>

<template>
  <RouterLink
    class="w-100"
    :to="{ name: item.name, params: item.params }"
    v-slot="{ isActive }"
    :title="t(item.text)"
  >
    <span
      class="btn btn-sm btn-primary d-block w-100"
      :class="{ active: isActive }"
    >
      {{ t(item.text) }}
    </span>
  </RouterLink>
</template>
