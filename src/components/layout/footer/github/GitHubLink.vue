<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const GitHubLink = import.meta.env.VITE_GITHUB_REPO_LINK;
</script>

<template>
  <p>
    <a
      :href="GitHubLink"
      target="_blank"
      :title="t('footer.github')"
      class="btn btn-icon-only btn-pill btn-link"
    >
      <i class="icon-github" />
    </a>
  </p>
</template>
