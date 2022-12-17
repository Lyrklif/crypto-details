<script setup lang="ts">
import { RouterView } from "vue-router";
import PageHeader from "./components/page/PageHeader.vue";
</script>

<template>
  <div>
    <PageHeader />

    <main class="section container">
      <RouterView />
    </main>
  </div>
</template>
