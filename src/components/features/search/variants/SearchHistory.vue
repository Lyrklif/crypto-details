<script setup lang="ts">
import { PropType } from "vue";
import HistoryItem from "./item/HistoryItem.vue";
import { useI18n } from "vue-i18n";
import { useSearchHistoryStore } from "../../../../stores/search-history";

const { t } = useI18n();
const store = useSearchHistoryStore();
const emit = defineEmits(["choose"]);
defineProps({
  isDisabled: Boolean as PropType<boolean>,
});

const choose = (key: string) => {
  emit("choose", key);
};
</script>

<template>
  <div v-if="store.items.length">
    <b>{{ t("search.history") }}:</b>
    <ul class="list-unstyled mb-0">
      <li
        v-for="item in store.items"
        :key="`search-history-${item}`"
        class="mb-1 mr-1 d-inline-block"
      >
        <HistoryItem @choose="choose" :item="item" :is-disabled="isDisabled" />
      </li>
    </ul>
  </div>
</template>
