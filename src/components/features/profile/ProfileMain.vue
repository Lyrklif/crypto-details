<script setup lang="ts">
import { ref } from "vue";
import API from "../../../api";
import { useCoinStore } from "../../../stores/coin";
import { useI18n } from "vue-i18n";
import SpoilerCard from "../../base/SpoilerCard.vue";
import type { AssetProfileDataResponse } from "../../../api/messari/types";
import ProfileContent from "./content/ProfileContent.vue";
import PoweredBy from "../../base/PoweredBy.vue";
import AlertMessage from "../../base/AlertMessage.vue";

const { t } = useI18n();
const store = useCoinStore();
const profile = ref<AssetProfileDataResponse>();
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
    errorText.value = e.response.statusText;
    error.value = true;
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <section>
    <header>
      <h2 class="text-hide">{{ t("profile.title") }}</h2>
    </header>

    <SpoilerCard :title="`${t('profile.title')}`" @firstOpen="load">
      <template #content>
        <PoweredBy
          site="messari"
          class="mb-4"
          :loading="loading"
          :fall="error"
        />
        <AlertMessage v-if="error" :text="errorText" type="error" />
        <AlertMessage v-else-if="!profile" :text="t('errors.empty')" />
        <ProfileContent v-else :profile="profile" />
      </template>
    </SpoilerCard>
  </section>
</template>
