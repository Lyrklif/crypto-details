<script setup lang="ts">
import { PropType } from "vue";
import { useI18n } from "vue-i18n";
import type { AssetProfileDataResponse } from "../../../../api/messari/types";
import Card from "primevue/card";
import Fieldset from "primevue/fieldset";

const { t } = useI18n();

defineProps({
  profile: Object as PropType<AssetProfileDataResponse>,
});
</script>

<template>
  <Card v-if="profile.technology" class="mb-4">
    <template #title>{{ t("profile.technology") }}</template>
    <template #content>
      <div v-html="profile.technology" />
    </template>
  </Card>

  <Card v-if="profile.token_distribution.description" class="mb-4">
    <template #title>{{ t("profile.token_distribution") }}</template>
    <template #content>
      <div v-html="profile.token_distribution.description" />
    </template>
  </Card>

  <Card v-if="profile.background" class="mb-4">
    <template #title>{{ t("profile.history") }}</template>
    <template #content>
      <div v-html="profile.background" />
    </template>
  </Card>

  <div v-if="profile.organizations && profile.organizations.length">
    <h3 class="text-2xl">{{ t("profile.organizations") }}</h3>
    <ul class="list-unstyled">
      <li
        v-for="(item, index) in profile.organizations"
        :key="`organization-${index}`"
        class="card border mb-3"
      >
        <Fieldset :legend="item.name" v-if="item.description">
          <div v-html="item.description" />
        </Fieldset>
      </li>
    </ul>
  </div>
</template>
