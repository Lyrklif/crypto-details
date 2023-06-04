<script setup lang="ts">
import Dropdown from "primevue/dropdown";
import { useI18n } from "vue-i18n";
import { useInterfaceStore } from "../../stores/interface";

const store = useInterfaceStore();
const { setLang } = store;

const { availableLocales, locale } = useI18n();
</script>

<template>
  <Dropdown
    v-model="$i18n.locale"
    :options="availableLocales"
    inputClass="pl-3 pr-0 py-2 uppercase"
    @change="setLang(locale)"
  >
    <template #dropdownicon>
      <i class="pi pi-language" />
    </template>
  </Dropdown>
</template>
