<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
import API from "../../../api";
import { useCoinStore } from "../../../stores/coin";
import { useI18n } from "vue-i18n";
import SpoilerCard from "../../base/SpoilerCard.vue";
import type { AssetProfileDataResponse } from "../../../api/messari/types";
import { ASSET_ERRORS } from "../../../api/messari/types";
import AlertMessage from "../../base/AlertMessage.vue";
import LinesSpinner from "../../base/LinesSpinner.vue";

const { t } = useI18n();
const store = useCoinStore();
const profile = ref<AssetProfileDataResponse | null>(null);
const loading = ref<boolean>(false);
const error = ref<boolean>(false);
const errorText = ref<string>("");

async function load() {
  try {
    loading.value = true;
    error.value = false;
    errorText.value = "";

    const fields = "technology,token_distribution,background,organizations";
    const response = await API.messari.assetProfile(store.symbol, fields);
    profile.value = response.data.data;
  } catch (e: any) {
    const notFound = e.response.status === ASSET_ERRORS.NOT_FOUND;

    profile.value = null;
    errorText.value = e.response.statusText;
    error.value = !notFound;
  } finally {
    loading.value = false;
  }
}

const AsyncContent = defineAsyncComponent(
  () => import("./content/ProfileContent.vue")
);
</script>

<template>
  <SpoilerCard
    :title="`${t('profile.title')}`"
    site="messari"
    :loading="loading"
    :fall="error"
    @firstOpen="load"
  >
    <LinesSpinner v-if="loading" />
    <AlertMessage v-else-if="error" :text="errorText" type="error" />
    <AlertMessage v-else-if="!profile" :text="t('errors.empty')" />
    <component v-else :profile="profile" :is="AsyncContent" />
  </SpoilerCard>
</template>
