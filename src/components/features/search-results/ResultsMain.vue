<script setup lang="ts">
import type { PropType } from "vue";
import type { SearchCurrencyItem } from "../../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";
import ResultsHeader from "./content/ResultsHeader.vue";
import ResultsBody from "./content/ResultsBody.vue";

const { t } = useI18n();
const emit = defineEmits(["back"]);
defineProps({
  items: Array as PropType<Array<SearchCurrencyItem>>,
});
</script>

<template>
  <div class="card bg-primary border-light p-2 p-md-4 shadow-inset">
    <ResultsHeader @back="emit('back')" />
    <ResultsBody :items="items" />
  </div>
</template>
