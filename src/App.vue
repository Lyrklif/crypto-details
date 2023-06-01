<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "./components/layout/header/AppHeader.vue";
import AppFooter from "./components/layout/footer/AppFooter.vue";
import Pagination from "./components/layout/AppPagination.vue";
</script>

<template>
  <div>
    <AppHeader />

    <main class="container">
      <Pagination class="mt-4 mb-5" />
      <RouterView />
    </main>

    <AppFooter class="mt-5" />
  </div>
</template>
