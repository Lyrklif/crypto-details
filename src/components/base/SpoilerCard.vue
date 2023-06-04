<script setup lang="ts">
import type { PropType } from "vue";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Panel from "primevue/panel";
import Card from "primevue/card";
import PoweredBy from "../base/PoweredBy.vue";
import type { sourceAPINameType } from "../../constants/sourceAPI";

const emit = defineEmits(["firstOpen"]);
defineProps({
  title: String as PropType<string>,
  content: String as PropType<string>,
  site: String as PropType<sourceAPINameType>,
  loading: Boolean as PropType<false>,
  error: Boolean as PropType<false>,
});

emit("firstOpen");
</script>

<template>
  <Card class="card">
    <template #title>
      <header class="px-3">{{ title }}</header>
    </template>
    <template #content>
      <slot>{{ content }}</slot>
    </template>
    <template #footer>
      <div v-if="site" class="mx-3 ml-auto flex justify-content-end">
        <PoweredBy :site="site" :loading="loading" :fall="error" />
      </div>
    </template>
  </Card>
</template>

<style lang="scss" scoped>
:deep(.p-card-body) {
  padding: 0.5rem 0;
}

.card {
  :deep(.p-card-content) {
    padding: 0;
    margin: 0;
  }
}
</style>
