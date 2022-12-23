<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useSettingsStore } from "../../stores/settings";
import { watch } from "vue";

const store = useSettingsStore();
const { t, availableLocales, locale } = useI18n();

watch(locale, () => {
  store.setLang(locale.value);
});
</script>

<template>
  <div class="form-group locale-changer mb-0">
    <select class="custom-select my-1 mr-sm-2" v-model="$i18n.locale">
      <option
        v-for="(lang, i) in availableLocales"
        :key="`Lang${i}`"
        :value="lang"
      >
        {{ lang }}
      </option>
    </select>
  </div>
</template>
