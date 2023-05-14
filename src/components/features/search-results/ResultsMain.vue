<script setup lang="ts">
import type { PropType } from "vue";
import type { SearchCurrencyItem } from "../../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";
import ResultsHeader from "./content/ResultsHeader.vue";
import ResultsBody from "./content/ResultsBody.vue";
import Card from "primevue/card";

const { t } = useI18n();
const emit = defineEmits(["back"]);
defineProps({
  items: Array as PropType<Array<SearchCurrencyItem>>,
});
</script>

<template>
  <Card>
    <template #title>
      <ResultsHeader @back="emit('back')" />
    </template>
    <template #content>
      <ResultsBody :items="items" />
    </template>
  </Card>
</template>
