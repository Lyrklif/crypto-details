<script setup lang="ts">
import type { PropType } from "vue";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";

const emit = defineEmits(["firstOpen"]);
defineProps({
  title: String as PropType<string>,
  content: String as PropType<string>,
});
</script>

<template>
  <Accordion @tab-open.once="emit('firstOpen')">
    <AccordionTab :header="title">
      <div class="collapse">
        <slot name="content">
          {{ content }}
        </slot>
      </div>
    </AccordionTab>
  </Accordion>
</template>

<style scoped>
:deep(.p-accordion-content) {
  padding: 0;
}

.collapse {
  overflow: auto;
  max-width: 100%;
  max-height: 90vh;
  padding: 1rem;
}
</style>
