<script setup lang="ts">
import type { PropType } from "vue";
import { ref } from "vue";

const isShow = ref(false);
const emit = defineEmits(["firstOpen"]);
defineProps({
  title: String as PropType<string>,
  content: String as PropType<string>,
});
</script>

<template>
  <div>
    <button
      class="collapsed btn btn-block bg-gradient-gray-300 py-3 accordion-panel-header animate-down-2"
      :aria-expanded="isShow"
      :title="title"
      @click="isShow = !isShow"
      @click.once="emit('firstOpen')"
    >
      <span class="h6 mb-0 font-weight-bold" v-html="title" />
      <span class="icon"><span class="fas fa-plus"></span></span>
    </button>

    <div
      class="collapse card-body bg-primary shadow-inset border-light rounded"
      :class="{ show: isShow }"
    >
      <slot name="content">
        <div class="mb-0">
          {{ content }}
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.collapsed {
  position: sticky;
  top: 0;
  z-index: 1;
}

.collapse {
  overflow: auto;
  max-width: 100%;
}
</style>
