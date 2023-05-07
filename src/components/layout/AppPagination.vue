<script setup>
import { ref } from "vue";
import Breadcrumb from "primevue/breadcrumb";
import { homeLink } from "../../constants/navLinks";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const { t } = useI18n();
const route = useRoute();

const home = ref({
  icon: "pi pi-home",
  text: "Home",
  to: { name: homeLink.name },
});
</script>

<template>
  <Breadcrumb
    v-if="route?.meta?.title && route?.name !== homeLink.name"
    :home="home"
    :model="[{ label: t(route.meta.title) }]"
  />
</template>
