<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t, locale, availableLocales } = useI18n();
</script>

<template>
  <div class="locale-changer">
    <p>{{ locale }}</p>

    <select v-model="$i18n.locale">
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
