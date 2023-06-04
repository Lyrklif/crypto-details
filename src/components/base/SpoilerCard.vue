<script setup lang="ts">
import type { PropType } from "vue";
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
  <section>
    <Card class="card">
      <template #title>
        <header class="px-3">
          <h2 class="my-0 text-2xl">{{ title }}</h2>
        </header>
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
  </section>
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
