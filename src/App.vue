<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "./components/layout/header/AppHeader.vue";
import AppFooter from "./components/layout/footer/AppFooter.vue";
</script>

<template>
  <div>
    <AppHeader />

    <main class="container mt-6">
      <RouterView />
    </main>

    <AppFooter class="mt-5" />
  </div>
</template>
