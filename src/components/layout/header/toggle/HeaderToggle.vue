<script setup lang="ts">
import { PropType } from "vue";
import Button from "primevue/button";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const emit = defineEmits(["click"]);

defineProps({
  show: Boolean as PropType<boolean>,
});
</script>

<template>
  <Button
    @click="emit('click')"
    :title="show ? t('header.close_menu') : t('header.show_menu')"
    :icon="['pi', show ? 'pi-times' : 'pi-bars']"
    rounded
  />
</template>
