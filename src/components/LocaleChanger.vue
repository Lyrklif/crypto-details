<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t, availableLocales } = useI18n();
</script>

<template>
  <div class="form-group locale-changer">
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
