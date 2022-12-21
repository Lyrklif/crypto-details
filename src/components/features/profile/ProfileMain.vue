<script setup lang="ts">
import { ref } from "vue";
import API from "../../../api";
import { useCoinStore } from "../../../stores/coin";
import { useI18n } from "vue-i18n";
import SpoilerCard from "../../base/SpoilerCard.vue";
import type { AssetProfileDataResponse } from "../../../api/messari/types";
import ProfileContent from "./content/ProfileContent.vue";

const { t } = useI18n();
const store = useCoinStore();
const profile = ref<AssetProfileDataResponse>();

async function load() {
  try {
    const fields = "technology,token_distribution,background,organizations";
    const response = await API.messari.assetProfile(store.symbol, fields);
    profile.value = response.data.data;
  } catch (error: any) {
    // TODO error
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
        <ProfileContent v-if="profile" :profile="profile" />
      </template>
    </SpoilerCard>
  </section>
</template>
