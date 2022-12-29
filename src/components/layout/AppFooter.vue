<script setup>
import navLinks from "../../constants/navLinks";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const GitHubLink = import.meta.env.VITE_GITHUB_REPO_LINK;
</script>

<template>
  <footer class="bd-footer p-3 mt-5 bg-soft text-center">
    <ul class="list-unstyled d-inline-flex mb-1">
      <li class="mx-1" v-for="item in navLinks" :key="t(item.text)">
        <RouterLink
          :to="{ name: item.name, params: item.params }"
          v-slot="{ isActive }"
          :title="t(item.text)"
        >
          <span class="" :class="{ active: isActive }">
            {{ t(item.text) }}
          </span>
        </RouterLink>
      </li>
    </ul>

    <p class="mb-0">
      <a
        :href="GitHubLink"
        target="_blank"
        :title="t('footer.github')"
        class="btn btn-icon-only btn-pill btn-link"
      >
        <i class="icon-github" />
      </a>
    </p>
  </footer>
</template>
