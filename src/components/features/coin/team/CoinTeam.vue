<script setup lang="ts">
import type { PropType } from "vue";
import { defineAsyncComponent, ref } from "vue";
import type { TeamItem } from "../../../../api/coinpaprika/types";
import { useI18n } from "vue-i18n";
import AlertMessage from "../../../base/AlertMessage.vue";
import LinesSpinner from "../../../base/LinesSpinner.vue";

const { t } = useI18n();
const showCount = ref(false);
defineProps({
  links: { type: Array as PropType<Array<TeamItem>>, default: [] },
  loading: { type: Boolean as PropType<boolean>, default: false },
  error: { type: Boolean as PropType<boolean>, default: false },
  errorText: { type: String as PropType<string>, default: "" },
});

const AsyncContent = defineAsyncComponent(
  () => import("./table/CoinTable.vue")
);
</script>

<template>
  <LinesSpinner v-if="loading" />
  <AlertMessage v-else-if="error" :text="errorText" type="error" />
  <AlertMessage v-else-if="!links.length" :text="t('errors.empty')" />
  <component v-else :links="links" :is="AsyncContent" />
</template>
