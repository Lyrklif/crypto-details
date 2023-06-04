<script setup>
import navLinks from "../../../../constants/navLinks";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <ul class="list-unstyled inline-flex">
    <li class="mx-1" v-for="item in navLinks" :key="t(item.text)">
      <RouterLink
        :to="{ name: item.name, params: item.params }"
        v-slot="{ isActive }"
        :title="t(item.text)"
        class="capitalize p-button p-component p-button-primary p-button-outlined no-underline"
      >
        <span class="" :class="{ active: isActive }">
          {{ t(item.text) }}
        </span>
      </RouterLink>
    </li>
  </ul>
</template>
