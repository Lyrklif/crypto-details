<script setup lang="ts">
import { PropType, ref } from "vue";

const isShow = ref(false);

defineProps({
  title: String as PropType<string>,
  content: String as PropType<string>,
});
</script>

<template>
  <div>
    <button
      class="accordion-panel-header collapsed btn btn-block py-3 accordion-panel-header animate-down-2"
      :aria-expanded="isShow"
      @click="isShow = !isShow"
    >
      <span class="h6 mb-0 font-weight-bold">
        {{ title }}
      </span>
      <span class="icon"><span class="fas fa-plus"></span></span>
    </button>
    <div
      class="collapse card-body bg-primary shadow-inset border-light rounded"
      :class="{ show: isShow }"
    >
      <div class="pt-3">
        <slot name="content">
          <p class="mb-0">
            {{ content }}
          </p>
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
