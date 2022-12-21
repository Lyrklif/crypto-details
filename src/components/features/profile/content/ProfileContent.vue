<script setup lang="ts">
import { PropType } from "vue";
import { useI18n } from "vue-i18n";
import type { AssetProfileDataResponse } from "../../../../api/messari/types";

const { t } = useI18n();

defineProps({
  profile: Object as PropType<AssetProfileDataResponse>,
});
</script>

<template>
  <div>
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
  </div>
</template>
