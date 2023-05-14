<script setup lang="ts">
import { PropType, ref } from "vue";
import { useI18n } from "vue-i18n";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

const MIN_LENGTH_COIN_NAME = 3;

const { t } = useI18n();
const emit = defineEmits(["submit"]);
const coinName = ref("");

defineProps({
  isDisabled: Boolean as PropType<boolean>,
});
</script>

<template>
  <form @submit.prevent="emit('submit', coinName)">
    <div class="p-inputgroup flex-1">
      <InputText
        id="coin-name"
        type="search"
        :placeholder="t('search.placeholder')"
        v-model="coinName"
        :disabled="isDisabled"
        :minlength="MIN_LENGTH_COIN_NAME"
      />
      <Button
        icon="pi pi-search"
        severity="secondary"
        type="submit"
        :title="t('search.submit')"
        :disabled="isDisabled || coinName.length < MIN_LENGTH_COIN_NAME"
      />
    </div>
  </form>
</template>
