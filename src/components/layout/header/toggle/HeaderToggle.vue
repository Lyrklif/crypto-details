<script setup lang="ts">
import { PropType } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const emit = defineEmits(["click"]);

defineProps({
  show: Boolean as PropType<boolean>,
});
</script>

<template>
  <button
    class="btn btn-icon-only btn-primary btn-pill p-4"
    @click="emit('click')"
    :title="show ? t('header.close_menu') : t('header.show_menu')"
  >
    <i :class="show ? 'icon-cross' : 'icon-menu'"></i>
  </button>
</template>
