<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "./components/layout/AppHeader.vue";
</script>

<template>
  <div>
    <AppHeader />

    <main class="section container">
      <RouterView />
    </main>
  </div>
</template>
