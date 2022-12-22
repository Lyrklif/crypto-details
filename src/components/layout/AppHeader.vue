<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import LocaleChanger from "../features/LocaleChanger.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const show = ref(false);
const links: Array<{ name: string; text: string }> = [
  { name: "home", text: "header.home" },
  { name: "about", text: "header.about" },
];
</script>

<template>
  <div>
    <button
      class="mobile-toggle btn btn-icon-only btn-primary btn-pill mr-2 mt-2 p-4"
      @click="show = !show"
      :title="show ? t('header.close_menu') : t('header.show_menu')"
    >
      <i class="fa-solid" :class="show ? 'fa-xmark' : 'fa-burger'"></i>
    </button>

    <header
      v-if="show"
      class="app-header card bg-primary shadow-soft p-2 h-100 pt-6"
    >
      <LocaleChanger class="mb-4" />

      <nav>
        <ul class="list-unstyled">
          <li
            class="animate-up-2 mb-3"
            v-for="item in links"
            :key="t(item.text)"
          >
            <RouterLink
              class="w-100"
              :to="{ name: item.name }"
              v-slot="{ isActive }"
              :title="t(item.text)"
            >
              <span
                class="btn btn-sm btn-primary d-block w-100"
                :class="{ active: isActive }"
              >
                {{ t(item.text) }}
              </span>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
}

.mobile-toggle {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
}
</style>
