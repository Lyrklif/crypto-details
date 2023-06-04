<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const GitHubLink = import.meta.env.VITE_GITHUB_REPO_LINK;
</script>

<template>
  <a
    :href="GitHubLink"
    target="_blank"
    :title="t('footer.github')"
    class="p-button p-component p-button-secondary p-button-outlined no-underline"
  >
    <i class="pi pi-github mr-2" />
    <span>GitHub</span>
  </a>
</template>
