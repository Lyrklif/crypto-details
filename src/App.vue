<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "./components/layout/header/AppHeader.vue";
import Pagination from "./components/layout/Pagination.vue";
</script>

<template>
  <div class="d-flex flex-row-reverse">
    <AppHeader />

    <main class="container">
      <Pagination class="mt-4 mb-5" />
      <RouterView />
    </main>
  </div>
</template>
