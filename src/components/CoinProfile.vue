<script setup lang="ts">
import { ref } from "vue";
import API from "../api";
import { useCoinStore } from "../stores/coin";
import { useI18n } from "vue-i18n";
import SpoilerCard from "./SpoilerCard.vue";
import type { AssetProfileDataResponse } from "../api/messari/types";

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
      <template #content v-if="profile">
        <h4 v-if="profile.technology">{{ t("profile.technology") }}</h4>
        <p v-html="profile.technology" />

        <h4 v-if="profile.token_distribution.description">
          {{ t("profile.token_distribution") }}
        </h4>
        <p v-html="profile.token_distribution.description" />

        <h4 v-if="profile.background">{{ t("profile.history") }}</h4>
        <p v-html="profile.background" />

        <h4 v-if="profile.organizations.length">
          {{ t("profile.organizations") }}
        </h4>
        <ul class="list-unstyled mt-2">
          <li
            v-for="(item, index) in profile.organizations"
            :key="`organization-${index}`"
            class="card bg-primary border-light mb-2 p-2"
          >
            <h5>{{ item.name }}</h5>
            <small v-html="item.description" />
          </li>
        </ul>
      </template>
    </SpoilerCard>
  </section>
</template>
