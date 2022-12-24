<script setup lang="ts">
import { PropType } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const emit = defineEmits(["click"]);

defineProps({
  pin: Boolean as PropType<boolean>,
});
</script>

<template>
  <button
    class="btn btn-sm btn-primary d-block"
    @click="emit('click')"
    :title="pin ? t('header.unpin') : t('header.pin')"
  >
    <i :class="pin ? 'icon-toggle-on' : 'icon-toggle-off'"></i>
  </button>
</template>
