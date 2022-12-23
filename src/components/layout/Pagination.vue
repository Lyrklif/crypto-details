<script setup>
import { homeLink } from "../../constants/navLinks";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const { t } = useI18n();
const route = useRoute();
</script>

<template>
  <header v-if="route.name !== homeLink.name">
    <ol class="breadcrumb breadcrumb-gray">
      <li class="breadcrumb-item">
        <RouterLink :to="{ name: homeLink.name }" :title="homeLink.text">
          {{ t(homeLink.text) }}
        </RouterLink>
      </li>
      <li class="breadcrumb-item active" aria-current="page">Data</li>
    </ol>
  </header>
</template>
