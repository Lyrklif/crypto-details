<script setup>
import { useI18n } from "vue-i18n";
import GitHubLink from "./github/GitHubLink.vue";
import ApiList from "./api/ApiList.vue";
import PageLinks from "./links/PageLinks.vue";

const { t } = useI18n();
</script>

<template>
  <footer class="p-3 mt-5 text-center">
    <PageLinks class="mb-1" />
    <ApiList />
    <GitHubLink class="mb-0" />
  </footer>
</template>
