<script setup lang="ts">
import { PropType, toRef } from "vue";
import { useI18n } from "vue-i18n";
import InputSwitch from "primevue/inputswitch";

const { t } = useI18n();
const emit = defineEmits(["click"]);

const props = defineProps({
  pin: Boolean as PropType<boolean>,
});

const checked = toRef(props, "pin");
</script>

<template>
  <InputSwitch
    v-model="checked"
    @change="emit('click')"
    :title="pin ? t('header.unpin') : t('header.pin')"
  />
</template>
