<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import PageHeader from "./components/PageHeader.vue";
</script>

<template>
  <div>
    <PageHeader />

    <main class="section container">
      <RouterView />
    </main>
  </div>
</template>
