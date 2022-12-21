<script setup lang="ts">
import { RouterLink } from "vue-router";
import LocaleChanger from "../features/LocaleChanger.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const links: Array<{ name: string; text: string }> = [
  { name: "home", text: "header.home" },
  { name: "about", text: "header.about" },
];
</script>

<template>
  <header class="header-global">
    <div
      :class="`
      navbar py-1 navbar-main navbar-expand-lg navbar-theme-primary
      headroom navbar-light headroom--not-bottom headroom--not-top headroom--pinned justify-content-center
      `"
    >
      <nav>
        <ul class="nav nav-pills nav-fill flex-row">
          <li
            class="nav-item mr-2 mr-md-0 mb-0 animate-up-2"
            v-for="item in links"
            :key="t(item.text)"
          >
            <RouterLink
              :to="{ name: item.name }"
              v-slot="{ isActive }"
              :title="t(item.text)"
            >
              <span
                class="btn btn-sm btn-primary"
                :class="{ active: isActive }"
              >
                {{ t(item.text) }}
              </span>
            </RouterLink>
          </li>
        </ul>
      </nav>

      <LocaleChanger class="mr-0 ml-auto" />
    </div>
  </header>
</template>
