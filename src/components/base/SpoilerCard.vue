<script setup lang="ts">
import type { PropType } from "vue";
import { ref } from "vue";

const isShow = ref(false);
const spoilerWrapper = ref<HTMLElement>();

const emit = defineEmits(["firstOpen"]);
defineProps({
  title: String as PropType<string>,
  content: String as PropType<string>,
});

const toggle = () => {
  isShow.value = !isShow.value;
  if (!isShow.value) scrollToSpoiler();
};
const scrollToSpoiler = () => {
  if (!spoilerWrapper.value) return;
  spoilerWrapper.value.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <div ref="spoilerWrapper">
    <button
      class="collapsed btn btn-block bg-gradient-gray-300 py-3 accordion-panel-header animate-down-2"
      :aria-expanded="isShow"
      :title="title"
      @click="toggle"
      @click.once="emit('firstOpen')"
    >
      <span class="h6 mb-0 font-weight-bold" v-html="title" />
      <span class="icon"><span class="icon-plus"></span></span>
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
