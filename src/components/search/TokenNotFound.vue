<script setup lang="ts">
const emit = defineEmits(["search", "close"]);
</script>

<template>
  <div
    class="alert alert-danger alert-dismissible shadow-soft fade show"
    role="alert"
  >
    <span class="alert-inner--text">Токен не найден</span>
    <button
      type="button"
      class="close"
      data-dismiss="alert"
      aria-label="Close"
      title="Close"
      @click="emit('close')"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>
