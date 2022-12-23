<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "./components/layout/header/AppHeader.vue";
</script>

<template>
  <div class="d-flex flex-row-reverse">
    <AppHeader />

    <main class="section container">
      <RouterView />
    </main>
  </div>
</template>
