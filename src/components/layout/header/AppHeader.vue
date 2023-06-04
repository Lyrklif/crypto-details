<script setup lang="ts">
import { computed } from "vue";
import LocaleChanger from "../../features/LocaleChanger.vue";
import CurrencyChanger from "../../features/CurrencyChanger.vue";
import { useI18n } from "vue-i18n";
import navLinks from "../../../constants/navLinks";
import Menubar from "primevue/menubar";
import type { MenuItem } from "primevue/menuitem";
import router from "../../../router";

const { t } = useI18n();

const menuLinks = computed((): Array<MenuItem> => {
  return navLinks.map((item) => {
    return {
      icon: item.icon,
      label: t(item.label),
      command: () => router.push({ name: item.name, params: item.params }),
    };
  });
});
</script>

<template>
  <Menubar :model="menuLinks" class="menubar">
    <template #start>
      <div class="flex align-items-center justify-content-center mr-3">
        <img alt="logo" src="/favicon-32x32.png" height="30" width="30" />
      </div>
    </template>
    <template #end>
      <div class="flex flex-wrap justify-content-end">
        <LocaleChanger />
        <CurrencyChanger class="ml-2" />
      </div>
    </template>
  </Menubar>
</template>
