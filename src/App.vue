<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "./components/layout/header/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";
import Pagination from "./components/layout/AppPagination.vue";
</script>

<template>
  <div>
    <div class="d-flex flex-row-reverse">
      <AppHeader />

      <main class="container">
        <Pagination class="mt-4 mb-5" />
        <RouterView />
      </main>
    </div>

    <AppFooter class="mt-5" />
  </div>
</template>
