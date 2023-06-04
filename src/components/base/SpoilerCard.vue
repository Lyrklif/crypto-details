<script setup lang="ts">
import type { PropType } from "vue";
import { ref, watch } from "vue";
import Card from "primevue/card";
import PoweredBy from "../base/PoweredBy.vue";
import type { sourceAPINameType } from "../../constants/sourceAPI";
import { useI18n } from "vue-i18n";
import AlertMessage from "../base/AlertMessage.vue";
import LinesSpinner from "../base/LinesSpinner.vue";
import Button from "primevue/button";
import { storeToRefs } from "pinia";
import { useInterfaceStore } from "../../stores/interface";

const props = defineProps({
  title: String as PropType<string>,
  site: String as PropType<sourceAPINameType>,
  reloadCurrency: Boolean as PropType<boolean>,
  asyncComponent: {
    type: Object as PropType<any>,
    required: true,
  },
  apiMethod: {
    type: Function as PropType<any>,
    required: true,
  },
  apiParams: {
    type: Object as PropType<any>,
    required: true,
  },
});

const emit = defineEmits(["firstOpen"]);

const { t } = useI18n();
const data = ref<any | null>(null);
const loading = ref<boolean>(true);
const error = ref<boolean>(false);
const errorText = ref<string>("");
const store = useInterfaceStore();
const { currency } = storeToRefs(store);

async function load() {
  try {
    loading.value = true;
    error.value = false;
    errorText.value = "";

    const response = await props.apiMethod(props.apiParams);
    data.value = response.data;
  } catch (e: any) {
    const { text, notFound } = e?.response || {};
    data.value = null;
    errorText.value = text;
    error.value = !notFound;
  } finally {
    loading.value = false;
  }
}

watch(currency, () => {
  if (props.reloadCurrency) load();
});

load();
</script>

<template>
  <section>
    <Card class="card">
      <template #title>
        <header class="px-3 flex justify-content-between align-items-center">
          <h2 class="my-0 text-xl">
            {{ title }}
          </h2>
          <Button
            icon="pi pi-undo"
            class="ml-auto"
            text
            rounded
            aria-label="Refresh"
            :disabled="loading"
            :loading="loading"
            @click="load"
          />
        </header>
      </template>

      <template #content>
        <slot name="start" />
        <LinesSpinner v-if="loading" />
        <AlertMessage v-else-if="error" :text="errorText" type="error" />
        <AlertMessage v-else-if="!data" :text="t('errors.empty')" />
        <component v-else :data="data" :is="asyncComponent" />
      </template>

      <template #footer>
        <div v-if="site" class="mx-3 ml-auto flex justify-content-end">
          <PoweredBy :site="site" :loading="loading" :fall="error" />
        </div>
      </template>
    </Card>
  </section>
</template>

<style lang="scss" scoped>
:deep(.p-card-body) {
  padding: 0.5rem 0;
}

.card {
  :deep(.p-card-content) {
    padding: 0;
    margin: 0;
  }
}
</style>
