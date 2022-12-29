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
      type="search"
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
        <span class="icon-search"></span>
      </button>
    </div>
  </form>
</template>

<style scoped>
/* clears the ‘X’ from Internet Explorer */
input[type="search"]::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}
input[type="search"]::-ms-reveal {
  display: none;
  width: 0;
  height: 0;
}
/* clears the ‘X’ from Chrome */
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}
</style>
