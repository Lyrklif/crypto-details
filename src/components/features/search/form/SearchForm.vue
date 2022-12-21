<script setup lang="ts">
import { PropType, ref } from "vue";
import { useI18n } from "vue-i18n";

const MIN_LENGTH_COIN_NAME = 3;

const { t } = useI18n();
const emit = defineEmits(["submit"]);
const coinName = ref("");

defineProps({
  isDisabled: Boolean as PropType<boolean>,
});
</script>

<template>
  <form @submit.prevent="emit('submit', coinName)" class="input-group">
    <input
      id="coin-name"
      type="text"
      class="form-control"
      :placeholder="t('search.placeholder')"
      v-model="coinName"
      :disabled="isDisabled"
      :minlength="MIN_LENGTH_COIN_NAME"
    />
    <div class="input-group-append">
      <button
        type="submit"
        class="btn btn-block btn-primary animate-up-2"
        :title="t('search.submit')"
        :disabled="isDisabled || coinName.length < MIN_LENGTH_COIN_NAME"
      >
        <span class="fas fa-search"></span>
      </button>
    </div>
  </form>
</template>
